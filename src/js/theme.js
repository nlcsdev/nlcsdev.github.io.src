import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createTheme({
    palette: {
      primary: {
        main: "#273043"
      },
      secondary:{
        main: red[500]
      },
      background:{
          paper: "#FAF7ED"
      },
    },
  });

export default theme;