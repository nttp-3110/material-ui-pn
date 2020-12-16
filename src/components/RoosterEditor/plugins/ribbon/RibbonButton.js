import React from 'react';
import PropTypes from 'prop-types';
import upperCase from 'lodash/upperCase';

import { withStyles } from '@material-ui/core/styles';
import { Browser } from 'roosterjs-editor-dom';
import styles from './RibbonStyles';
import { ButtonTitleEnum } from './constants';
import EditorButton from './EditorButton';
class RibbonButton extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isDropDownShown: false,
    };
    this.range = null;
    this.ref = React.createRef();
  }

  handleClickOutside = (e) => {
    if (!this.ref.current.contains(e.target)) {
      this.setState({ isDropDownShown: false }, () => document.removeEventListener('mousedown', this.handleClickOutside));
    }
  }

  checkAlignment = () => {
    const { button, plugin } = this.props;
    const editor = plugin.getEditor();
    if (!editor) {
      return button.title === ButtonTitleEnum.ALIGN_LEFT;
    }
    const styleTextAlign = editor.getBlockTraverser()?.scoper?.block?.element?.style?.textAlign || 'left';
    const textAlign = ButtonTitleEnum[`ALIGN_${upperCase(styleTextAlign)}`];
    return button.title === textAlign;
  }

  onExecute = (value) => {
    const { button, plugin } = this.props;
    const editor = plugin.getEditor();
    this.onHideDropDown();
    this.props.onClicked();
    if (button.onClick) {
      button.onClick(editor, value);
    }
  };

  onShowDropDown = () => {
    if (Browser.isSafari) {
      this.range = this.props.plugin.getEditor().getSelectionRange();
    }

    if (!this.props.button.preserveOnClickAway) {
      this.getDocument().addEventListener('click', this.onHideDropDown);
    }
    this.setState({ isDropDownShown: true });
  };

  onHideDropDown = () => {
    if (Browser.isSafari) {
      this.props.plugin.getEditor().select(this.range);
    }
    this.getDocument().removeEventListener('click', this.onHideDropDown);
    this.setState({ isDropDownShown: false });
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
      document.addEventListener('mousedown', this.handleClickOutside);
      this.onShowDropDown();
    } else {
      this.onExecute();
    }
  }

  render() {
    const { classes, disabled, button, plugin, format, ...rest } = this.props;
    const editor = plugin.getEditor();
    let checked = !!(editor && format && button.checked && button.checked(format, editor));
    if ([ButtonTitleEnum.ALIGN_LEFT, ButtonTitleEnum.ALIGN_CENTER, ButtonTitleEnum.ALIGN_RIGHT].includes(button.title)) {
      checked = this.checkAlignment(button.title);
    }

    return (
      <span ref={this.ref} className={`${classes.dropDownButton} ${disabled ? classes.dropDownButtonDisabled : ''}`}>
        <EditorButton
          title={button.title}
          checked={checked}
          disabled={disabled}
          svgIconComponent={button.image}
          handleClick={this.handleClick}
          {...rest}
        />
        {button.dropDownItems &&
          this.state.isDropDownShown &&
          this.renderDropDownItems(button.dropDownItems, button.dropDownRenderer)}
      </span>
    );
  }
}
RibbonButton.propTypes = {
  classes: PropTypes.object,
  button: PropTypes.object,
  plugin: PropTypes.object,
  format: PropTypes.object,
  disabled: PropTypes.bool,
  onClicked: PropTypes.func
};
export default withStyles(styles)(React.forwardRef((props, ref) => <RibbonButton {...props} ref={ref} />));