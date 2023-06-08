import { createTheme, Theme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
  },

  shadows: [
    "none",
    "0 2px 4px rgba(0, 0, 0, 0.2)",
    "0px 2px 8px 0px rgba(0,0,0,0.3)",
  ] as unknown as Theme["shadows"],

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          color: "white",
          "&:hover": {
            backgroundColor: "darkred",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            background: "linear-gradient(to right, #f6d365, #fda085)",
            borderRadius: 3,
            padding: "4px 12px", // Decrease the vertical padding here
          },
          "& .MuiInputBase-input": {
            color: "white",
          },

          "& .MuiOutlinedInput-input": {
            height: "15px!important", // Increase the height of the email TextField
          },
          "& .MuiInputBase-inputMultiline": {
            height: "150px!important", // Increase the height here
          },
        },
      },
    },
  },
});

export default theme;
