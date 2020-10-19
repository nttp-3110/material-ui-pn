import { createMuiTheme } from '@material-ui/core/styles';

import { default as openColors } from '../../themes/open-color.json'; //NOTE: Use open color at https://yeun.github.io/open-color/
import mainColors from '../../themes/colors'; //NOTE: This is colors of our project
import { fontSize, fontSizeIcon, fontWeight } from '../../themes/fontSize'; //NOTE: This is colors of our project

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: mainColors.primary1[0],
      light: mainColors.primary1[1],
      dark: mainColors.primary1[2],
      contrastText: openColors.white
    },
    secondary: {
      main: mainColors.primary2[0],
      light: mainColors.primary2[1],
      dark: mainColors.primary2[2],
      contrastText: openColors.white
    },
  },

  spacing: 8,

  // ===COLORS===
  openColors,
  mainColors,

  // ===FONT SIZE===
  fontSize,

  // ===FONT SIZE ICON===
  fontSizeIcon,

  // ===FONT WEIGHT===
  fontWeight
});

export default theme;