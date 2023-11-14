import { AppBar, Typography, Toolbar, Box, Stack, Icon, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0} component="footer">
          <Toolbar sx={{ minHeight: "54px", "&.MuiToolbar-root": { p: 0 } }}>
            <Grid container direction="row" spacing={0}>
              {/* Display the About me Section in the HomePage */}
              <Grid item xs={0.5} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Left Side */}
              </Grid>

              <Grid item xs={11} sm={11} md={10} lg={9} sx={{ pl: { xs: 1 }, pr: { xs: 2 } }}>
                {/* Center Container */}
                <Grid container>
                  <Grid item xs={6} sm={6} md={10} lg={10}>
                    <Box sx={{ display: { xs: "block", lg: "block", md: "block" }, ml: 0, mt: { xs: 1 } }}>
                      <Typography variant="subtitle2" color="#ffffff">
                        @Karunakar Patel. All Rights Reserved
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={2} lg={2}>
                    <Stack direction="row" spacing={3} sx={{ float: "right", mt: { xs: 1 } }}>
                      <Link href="/">
                        <FacebookIcon sx={{ color: "#ffffff" }} />
                      </Link>
                      <Link href="/cars">
                        <TwitterIcon sx={{ color: "#ffffff" }} />
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={0.5} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Right Side */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
