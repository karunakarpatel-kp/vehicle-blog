import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

import Logo from ".././../public/Logo.svg";

const Navigation = () => {
  const [homePageActive, setHomePageActive] = useState(false);
  const [carsPageActive, setCarsPageActive] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    if (pathName === "/") {
      setHomePageActive(true);
      setCarsPageActive(false);
    }
    if (pathName.includes("/cars")) {
      setHomePageActive(false);
      setCarsPageActive(true);
    }
  }, [pathName]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar elevation={0}>
          <Toolbar sx={{ height: "64px", "&.MuiToolbar-root": { padding: 0 } }}>
            <Grid container direction="row" spacing={0}>
              {/* Display the About me Section in the HomePage */}
              <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Left Side */}
              </Grid>

              <Grid item xs={12} sm={11} md={10} lg={9} sx={{ pl: { xs: 1 }, pr: { xs: 2 } }}>
                {/* Center Container */}
                <Grid container>
                  <Grid item xs={6} sm={6} md={10} lg={10}>
                    <Box sx={{ display: { xs: "none", lg: "block", md: "block" }, marginLeft: "-12px" }}>
                      <Link href="/">
                        <Image alt="Logo" src={Logo} width={180} height={42} />
                      </Link>
                    </Box>
                    {/* For Mobile Phones */}
                    <Box sx={{ display: { xs: "block", md: "none", lg: "none" } }}>
                      <Link href="/">
                        <Image alt="Logo" src={Logo} width={152} height={35} />
                      </Link>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={2} lg={2}>
                    <Stack direction="row" spacing={4} sx={{ float: "right" }}>
                      <Link href="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="23.088"
                          height="38.304"
                          viewBox="0 0 43.088 38.304"
                        >
                          <path
                            id="house-chimney"
                            d="M40.683,21.516a2.412,2.412,0,0,0,2.394-2.4,2.049,2.049,0,0,0-.823-1.8L38.3,13.84V4.788A2.391,2.391,0,0,0,35.91,2.394H33.516a2.391,2.391,0,0,0-2.394,2.394V7.534L23.154.524A2.485,2.485,0,0,0,21.583,0a2.158,2.158,0,0,0-1.646.6L.748,17.319A2.432,2.432,0,0,0,0,19.114a2.37,2.37,0,0,0,2.394,2.4H4.788V26.73a1.891,1.891,0,0,0-.007.209v8.371A2.992,2.992,0,0,0,7.773,38.3h1.2c.09,0,.18-.007.269-.015.112.007.224.015.337.015h4.189a2.992,2.992,0,0,0,2.992-2.992V28.728a2.391,2.391,0,0,1,2.394-2.394H23.94a2.391,2.391,0,0,1,2.394,2.394v6.583A2.992,2.992,0,0,0,29.326,38.3h4.227c.1,0,.209,0,.314-.007.082.007.165.007.247.007h1.2A2.992,2.992,0,0,0,38.3,35.311V34.1a5.271,5.271,0,0,0,.037-.606l-.052-11.985h2.394Z"
                            // fill="#848ab4"
                            fill={homePageActive ? "#ffffff" : "#848ab4"}
                          />
                        </svg>
                      </Link>
                      <Link href="/cars">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="39" viewBox="0 0 512 512">
                          {" "}
                          <path
                            d="M165.4 96H346.6c13.6 0 25.7 8.6 30.2 21.4L402.9 192H109.1l26.1-74.6c4.5-12.8 16.6-21.4 30.2-21.4zm-90.6 .3L39.6 196.8C16.4 206.4 0 229.3 0 256v80c0 23.7 12.9 44.4 32 55.4V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V400H384v48c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V391.4c19.1-11.1 32-31.7 32-55.4V256c0-26.7-16.4-49.6-39.6-59.2L437.2 96.3C423.7 57.8 387.4 32 346.6 32H165.4c-40.8 0-77.1 25.8-90.6 64.3zM208 272h96c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V288c0-8.8 7.2-16 16-16zM48 280c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24zm360-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H408c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                            fill={carsPageActive ? "#ffffff" : "#848ab4"}
                          />
                        </svg>
                      </Link>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={0.5} md={1} lg={1.5}>
                {/* Extra Space On The Right Side */}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navigation;
