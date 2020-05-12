import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#244f70',
    },
    secondary: {
      main: '#FBAE21',
    },
    background: {
      default: '#fff',
      paper: '#fafafa',
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
