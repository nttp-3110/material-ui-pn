import { Alignment } from 'roosterjs-editor-types';
import FormLink from './modals/FormLink';
import FormTable from './modals/FormTable';
import FormFormula from './modals/FormFormula';
import {
  toggleHeader,
  toggleBold,
  toggleItalic,
  toggleUnderline,
  toggleBullet,
  toggleNumbering,
  setAlignment,
  toggleBlockQuote,
  toggleStrikethrough,
  clearBlockFormat,
  insertImage,
  getFormatState
} from 'roosterjs-editor-api';
import RibbonIcons from './RibbonIcons';
import { ButtonTitleEnum } from './constants';

const buttons = {
  heading1: {
    title: ButtonTitleEnum.HEADING1,
    image: RibbonIcons.IcnFormatHeading1,
    onClick: (editor) => {
      const format = getFormatState(editor);
      const level = format.headerLevel === 1 ? 0 : 1;
      toggleHeader(editor, level);
    },
    checked: format => format.headerLevel === 1,
  },
  heading2: {
    title: ButtonTitleEnum.HEADING2,
    image: RibbonIcons.IcnFormatHeading2,
    onClick: (editor) => {
      const format = getFormatState(editor);
      const level = format.headerLevel === 2 ? 0 : 2;
      toggleHeader(editor, level);
    },
    checked: format => format.headerLevel === 2,
  },
  bold: {
    title: ButtonTitleEnum.BOLD,
    image: RibbonIcons.IcnFormatBold,
    onClick: toggleBold,
    checked: format => format.isBold,
  },
  italic: {
    title: ButtonTitleEnum.ITALIC,
    image: RibbonIcons.IcnFormatItalic,
    onClick: toggleItalic,
    checked: format => format.isItalic,
  },
  underline: {
    title: ButtonTitleEnum.UNDERLINED,
    image: RibbonIcons.IcnFormatUnderlined,
    onClick: toggleUnderline,
    checked: format => format.isUnderline,
  },
  bullet: {
    title: ButtonTitleEnum.BULLET,
    image: RibbonIcons.IcnListBulleted,
    onClick: toggleBullet,
    checked: format => format.isBullet,
  },
  numbering: {
    title: ButtonTitleEnum.NUMBERING,
    image: RibbonIcons.IcnListNumbering,
    onClick: toggleNumbering,
    checked: format => format.isNumbering,
  },
  blockQuote: {
    title: ButtonTitleEnum.QUOTE,
    image: RibbonIcons.IcnFormatQuote,
    onClick: editor => toggleBlockQuote(editor),
    checked: format => format.isBlockQuote,
  },
  alignLeft: {
    title: ButtonTitleEnum.ALIGN_LEFT,
    image: RibbonIcons.IcnAlignLeft,
    onClick: editor => setAlignment(editor, Alignment.Left),
  },
  alignCenter: {
    title: ButtonTitleEnum.ALIGN_CENTER,
    image: RibbonIcons.IcnAlignCenter,
    onClick: editor => setAlignment(editor, Alignment.Center),
  },
  alignRight: {
    title: ButtonTitleEnum.ALIGN_RIGHT,
    image: RibbonIcons.IcnAlignRight,
    onClick: editor => setAlignment(editor, Alignment.Right)
  },
  insertLink: {
    title: ButtonTitleEnum.INSERT_LINK,
    image: RibbonIcons.IcnInsertLink,
    onClick: null,
    dropDownItems: { '0': 'dummy' },
    dropDownRenderer: FormLink,
    preserveOnClickAway: true,
  },
  table: {
    title: ButtonTitleEnum.TABLE,
    image: RibbonIcons.IcnInsertTable,
    onClick: null,
    dropDownItems: { 0: 'dummy' },
    dropDownRenderer: FormTable,
    preserveOnClickAway: true,
  },
  insertImage: {
    title: ButtonTitleEnum.INSERT_IMAGE,
    image: RibbonIcons.IcnInsertMedia,
    onClick: editor => {
      const document = editor.getDocument();
      let fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.style.display = 'none';
      fileInput.addEventListener('change', () => {
        let file = fileInput.files[0];
        if (file) {
          insertImage(editor, file);
        }
      });
      document.body.appendChild(fileInput);
      fileInput.click();
      document.body.removeChild(fileInput);
    },
  },
  strikethrough: {
    title: ButtonTitleEnum.STRIKE_THROUGH,
    image: RibbonIcons.IcnFormatStrikeThrough,
    onClick: toggleStrikethrough,
    checked: format => format.isStrikeThrough,
  },
  formular2: {
    title: ButtonTitleEnum.FORMULA,
    image: RibbonIcons.IcnInsertFx,
    onClick: null,
    dropDownItems: { '0': 'dummy' },
    dropDownRenderer: FormFormula,
    preserveOnClickAway: true,
  },
  clearFormat: {
    title: ButtonTitleEnum.CLEAR_FORMAT,
    image: RibbonIcons.IcnFormatClear,
    onClick: clearBlockFormat
  }
};

export default buttons;
