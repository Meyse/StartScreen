import React from "react";
import {
  ThemeProvider,
  Button,
  TextField,
  Grid,
  Tooltip,
  Typography,
  Container,
  Link,
  Zoom,
  Fade,
  Box
} from "@material-ui/core";
import { flexbox, borders } from "@material-ui/system";

import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width={1}
        bgcolor="#F5F5F5"
      >
        <Box
          borderRadius={10}
          boxShadow="24"
          height={500}
          width={800}
          bgcolor="#fff"
          overflow="hidden"
        >
          <Box
            width="50%"
            height="100%"
            bgcolor="#3165D4"
            zIndex="tooltip"
            textAlign="left"
          >
            <Typography
              variant="h1"
              style={{
                color: "#fff",
                paddingLeft: "45px",
                paddingRight: "45px",
                paddingTop: "60px",
                paddingBottom: "20px"
              }}
            >
              Welcome to Verus, the internet of blockchains.
            </Typography>
            <Typography
              variant="body1"
              style={{
                opacity: "0.83",
                color: "#fff",
                paddingLeft: "45px",
                paddingRight: "45px"
              }}
            >
              Enter the ecosystem for truth and privacy. Here you are
              self-sovereign.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
