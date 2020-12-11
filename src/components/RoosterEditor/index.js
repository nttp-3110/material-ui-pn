import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Editor from './Editor';
import Ribbon from './plugins/ribbon/Ribbon';
import { getDefaultContentEditFeatures } from 'roosterjs-editor-plugins';

import InputLabel from './shared/Input/InputLabel';
import PluginManage from './plugins/plugins';
import styles from './styles';

export const UrlPlaceholder = '$url$';
const initialState = {
    pluginList: {
        hyperlink: true,
        paste: true,
        contentEdit: true,
        watermark: true,
        imageResize: true,
        tableResize: true,
        customReplace: true,
        pickerPlugin: true,
        entityPlugin: true,
    },
    contentEditFeatures: getDefaultContentEditFeatures(),
    defaultFormat: {},
    linkTitle: 'Ctrl+Click to follow the link:' + UrlPlaceholder,
    watermarkText: 'Type content here ...',
    showRibbon: true,
    useExperimentFeatures: true
};
class RoosterReact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSidePane: window.location.hash !== '',
            showRibbon: true,
            isPopoutShown: false,
            isFocus: true
        };
        this.timeoutId = null;
        this.mouseX = null;
        this.isFocus = false;
        this.editorRef = React.createRef();
        this.pluginManage = null;
        // this.pluginArray = getAllPluginArray();
        // this.popoutMainPane = React.createRef();
    }

    initPlugins() {
        if (this.pluginManage) {
            this.pluginManage.dispose();
            this.pluginManage = null;
        }
        this.pluginManage = new PluginManage();
    }

    onBlur = () => {
        this.timeoutId = setTimeout(() => {
            this.isFocus = false;
            // this.setState({ isFocus: false});
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        });
    }

    onFocus = () => {
        clearTimeout(this.timeoutId);
        // this.setState({ isFocus: true });
        if (!this.isFocus) {
            this.isFocus = true;
            if (this.props.onFocus) {
                this.props.onFocus();
            }
        }
    }

    getEditor = () => {
        return this.editorRef.current.editor;
    };
    getContent = () => {
        return this.editorRef.current.getContent();
    }

    render() {
        this.initPlugins();
        let plugins = this.pluginManage?.getPlugins() ?? {};
        let pluginArray = this.pluginManage?.getAllPluginArray() ?? [];
        const { classes, ribbonButtons, label, required, className, disabled, containerRef, ...rest } = this.props;

        return (
            <div className={classes.root} onBlur={this.onBlur} onFocus={this.onFocus}>
                {label && <InputLabel
                    label={label}
                    required={required}
                />}
                <div className={`${classes.editorContainer} ${className}`}>
                    <Ribbon
                        plugin={plugins.ribbon}
                        className={classes.noGrow}
                        ribbonButtons={ribbonButtons}
                        ref={plugins?.ribbon?.refCallback}
                        disabled={disabled}
                        {...rest}
                    />
                    <div className={classes.body}>
                        <Editor
                            plugins={pluginArray}
                            className={classes.editor}
                            ref={this.editorRef}
                            initState={initialState}
                            placeholder={'placeholder'}
                            disabled={disabled}
                            // undo={plugins.snapshot}
                            // content={'<p>&nbsp;<span style="color: rgb(249, 38, 114);">case</span>&nbsp;<span style="color: rgb(230, 219, 116);">shadowAnnouncedQuiz</span>:</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(249, 38, 114);">case</span>&nbsp;<span style="color: rgb(230, 219, 116);">shadowPopQuiz</span>:</p'}
                            {...rest}
                        />
                    </div>
                </div>

            </div>
        );
    }

    resetEditorPlugin(pluginState) {
        this.editorRef.current.resetEditorPlugin(pluginState);
    }

    updateFormatState() {
        this.pluginArray.getPlugins().formatState.updateFormatState();
    }

    // setIsRibbonShown(isShown) {
    //     this.setState({
    //         showRibbon: isShown,
    //     });
    // }

    // popout() {
    //     const win = window.open(POPOUT_URL, POPOUT_TARGET, POPOUT_FEATURES);
    //     win.document.write(POPOUT_HTML);
    //     win.addEventListener('unload', () => {
    //         this.content = this.popoutMainPane.current.getContent();
    //         if (this.popoutRoot) {
    //             ReactDom.unmountComponentAtNode(this.popoutRoot);
    //         }
    //         window.setTimeout(() => {
    //             this.setState({ isPopoutShown: false });
    //         }, 100);
    //     });

    //     let styles = document.getElementsByTagName('STYLE');
    //     for (let i = 0; i < styles.length; i++) {
    //         let newStyle = win.document.createElement('STYLE');
    //         let sheet = styles[i].sheet;
    //         let cssText = '';
    //         for (let j = 0; j < sheet.cssRules.length; j++) {
    //             cssText += sheet.cssRules[j].cssText;
    //         }
    //         newStyle.innerHTML = cssText;
    //         win.document.head.appendChild(newStyle);
    //     }

    //     this.content = this.editorRef.current.getContent();

    //     this.setState({
    //         isPopoutShown: true,
    //     });

    //     this.popoutRoot = win.document.getElementById(PopoutRoot);

    //     window.setTimeout(() => {
    //         ReactDom.render(
    //             <PopoutMainPane ref={this.popoutMainPane} content={this.content} />,
    //             this.popoutRoot
    //         );
    //     }, 0);
    // }

    // onMouseDown = (e) => {
    //     document.addEventListener('mousemove', this.onMouseMove, true);
    //     document.addEventListener('mouseup', this.onMouseUp, true);
    //     document.body.style.userSelect = 'none';
    //     this.mouseX = e.pageX;
    // };

    // onMouseMove = (e) => {
    //     this.sidePane.changeWidth(this.mouseX - e.pageX);
    //     this.mouseX = e.pageX;
    // };

    // onMouseUp = (e) => {
    //     document.removeEventListener('mousemove', this.onMouseMove, true);
    //     document.removeEventListener('mouseup', this.onMouseUp, true);
    //     document.body.style.userSelect = '';
    // };

    // onShowSidePane = () => {
    //     this.setState({
    //         showSidePane: true,
    //     });
    // };

    // onHideSidePane = () => {
    //     this.setState({
    //         showSidePane: false,
    //     });
    //     window.location.hash = '';
    // };
}
RoosterReact.propTypes = {
    classes: PropTypes.object,
    ribbonButtons: PropTypes.array,
    editRef: PropTypes.any
};
export default withStyles(styles)(React.forwardRef((props, ref) => <RoosterReact {...props} ref={ref} />));
