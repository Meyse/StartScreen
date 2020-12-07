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
  Box,
  Icon,
  SvgIcon
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
          display="flex"
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
                paddingTop: "120px",
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
          <Box
            width="50%"
            height="100%"
            bgcolor="#fff"
            zIndex="tooltip"
            textAlign="left"
          >
            <Typography
              variant="h2"
              style={{
                color: "#272727",
                paddingLeft: "45px",
                paddingRight: "45px",
                paddingTop: "120px",
                paddingBottom: "20px"
              }}
            >
              Select profile and login
            </Typography>
            <TextField
              size="small"
              placeholder="Select my profile"
              style={{
                width: "310px",
                paddingLeft: "45px",
                paddingRight: "45px",
                marginBottom: "26px"
              }}
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{
                width: "310px",
                marginLeft: "45px"
              }}
            >
              Login to my profile
            </Button>
            <Typography
              variant="body1"
              style={{
                color: "#000",
                opacity: "0.83",
                paddingLeft: "45px",
                paddingTop: "16px",
                maxWidth: "250px"
              }}
            >
              No profile yet?{" "}
              <Link href="#" underline="always" color="inherit">
                Create one here
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                color: "#000",
                opacity: "0.83",
                paddingLeft: "45px",
                paddingTop: "90px",
                maxWidth: "250px"
              }}
            >
              Need help? Go to{" "}
              <Link href="#" underline="always" color="inherit">
                support Wiki
              </Link>{" "}
              or interact with our community on{" "}
              <Link href="#" underline="always" color="inherit">
                Discord
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
