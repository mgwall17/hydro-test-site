import { createTheme } from '@mui/material/styles'

const theme = createTheme({

  palette: {
    primary: {
      main: '#164a8d',
      // main: 'rgb(17, 94, 136)',
      light: 'rgb(32, 135, 191)'
    },
    secondary: {
      main: '#198bca'
      // main: 'rgb(0, 175, 181)',
    },
    success: {
      main: 'rgb(250,250,250)',
    },
    error: {
      main: '#E83151'
    },
    background: {
      default: '#f8fbff',
      // paper: '#ffff'
    }
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          "&$selected": {
            backgroundColor: "rgb(32, 135, 191)",
          },
          "&:hover": {
            backgroundColor: "rgb(32, 135, 191)",
          },
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: "#ffff",
          backgroundColor: "rgb(17, 94, 136)",
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          color: '#083c59'
        }
      }
    },
  }
});

export default theme
