import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Browser } from 'roosterjs-editor-dom';
import styles from './RibbonStyles';
import { ButtonTitleEnum } from './constants';
import EditorButton from './EditorButton';
class RibbonButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropDownShown: false,
    };
    this.range = null;
    this.textAlign = '';
    this.ref = React.createRef();
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (!this.ref.current.contains(e.target)) {
      this.setState({ isDropDownShown: false });
    }
  }

  checkAlignment = () => {
    const { button, plugin } = this.props;
    const editor = plugin.getEditor();
    if (!editor) {
      return false;
    }
    const styleTextAlign = editor.getBlockTraverser()?.scoper?.block?.element?.style?.textAlign || '';
    let textAlign = '';
    switch (styleTextAlign) {
      case 'right':
        textAlign = ButtonTitleEnum.ALIGN_RIGHT;
        break;
      case 'center':
        textAlign = ButtonTitleEnum.ALIGN_CENTER;
        break;
      default:
        textAlign = ButtonTitleEnum.ALIGN_LEFT;
    }
    return button.title === textAlign;
  }

  onExecute = (value) => {
    const { button, plugin } = this.props;
    const editor = plugin.getEditor();
    this.onHideDropDown();
    if (button.onClick) {
      button.onClick(editor, value);
      // MainPaneBase.getInstance().updateFormatState();
    }

    this.props.onClicked();
  };

  onShowDropDown = () => {
    if (Browser.isSafari) {
      this.range = this.props.plugin.getEditor().getSelectionRange();
    }

    if (!this.props.button.preserveOnClickAway) {
      this.getDocument().addEventListener('click', this.onHideDropDown);
    }
    this.setState({
      isDropDownShown: true,
    });
  };

  onHideDropDown = () => {
    if (Browser.isSafari) {
      this.props.plugin.getEditor().select(this.range);
    }

    this.getDocument().removeEventListener('click', this.onHideDropDown);
    this.setState({
      isDropDownShown: false,
    });
  };

  renderDropDownItems(items, renderer) {
    const { classes } = this.props;
    return (
      <div className={classes.dropDown}>
        {Object.keys(items).map(key =>
          renderer ? (
            <div key={key}>
              {renderer(
                this.props.plugin.getEditor(),
                this.onHideDropDown,
                key,
                items[key],
                this.props.plugin,
                this.props.format
              )}
            </div>
          ) : (
              <div
                key={key}
                onClick={() => this.onExecute(key)}
                className={classes.dropDownItem}>
                {items[key]}
              </div>
            )
        )}
      </div>
    );
  }

  getDocument() {
    return this.props.plugin.getEditor().getDocument();
  }

  handleClick = () => {
    const { button, disabled } = this.props;
    if (disabled) {
      return;
    }
    if (button.dropDownItems) {
      this.onShowDropDown();
    } else {
      this.onExecute();
    }
  }

  render() {
    const { classes, disabled, button, plugin, ...rest } = this.props;
    const editor = plugin.getEditor();
    let checked = false;
    if (editor &&
      this.props.format &&
      button.checked &&
      button.checked(this.props.format, editor)
    ) {
      checked = true;
    }
    if ([ButtonTitleEnum.ALIGN_LEFT, ButtonTitleEnum.ALIGN_CENTER, ButtonTitleEnum.ALIGN_RIGHT].includes(button.title)) {
      checked = this.checkAlignment(button.title);
    }

    return (
      <span ref={this.ref} className={`${classes.dropDownButton} ${disabled ? classes.dropDownButtonDisabled : ''}`}>
        <EditorButton
          checked={checked}
          disabled={disabled}
          svgIconComponent={button.image}
          handleClick={this.handleClick}
        />
        {button.dropDownItems &&
          this.state.isDropDownShown &&
          this.renderDropDownItems(button.dropDownItems, button.dropDownRenderer)}
      </span>
    );
  }
}
export default withStyles(styles)(React.forwardRef((props, ref) => <RibbonButton {...props} ref={ref} />));