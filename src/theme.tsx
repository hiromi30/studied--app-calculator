import { createTheme } from "@mui/material"
import { purple } from "@mui/material/colors"

const theme = createTheme({
  palette:{
    primary: {
      main: purple[500],
  }},
  components: {
    MuiButton: {
      styleOverrides:{
        root: {
          borderRadius: 50
        }
      }
    }
  },
  typography:{
    button: {
      fontSize: "2rem",
    },
  },
});

export default theme;