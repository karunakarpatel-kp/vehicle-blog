import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Link from "next/link";

import MainLayout from "@Layout/MainLayout";
import HeaderSection from "@SEO/Head";

import seo from "@Public/seo.jpg";
import coding from "@Public/coding.jpg";

import ImageOnTopCard from "@UI/HomePageCards/ImageOnTopCard";
import { themeColors } from "@Theme/Theme";
import { NextPageWithLayout } from "pages/_app";
import { SEO_OBJ, blogPostsObj } from "Essentials";
import HeadingOne from "@Components/Elements/Headings/HeadingOne";

const KiaHomePage: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.CARS_PAGE.title}
        description={SEO_OBJ.CARS_PAGE.description!}
        image={SEO_OBJ.CARS_PAGE.featuredImage}
        // image="https://image-url"
        url={SEO_OBJ.CARS_PAGE.absoluteURL}
        publishedTime={SEO_OBJ.CARS_PAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.CARS_PAGE.lastUpdateTime}
      />

      <Box textAlign="center" sx={{ mb: { xs: 0, sm: 0, md: 3, lg: 3 } }}>
        <Typography variant="h6" fontWeight="600">
          {/* Recent Articles */}
        </Typography>
      </Box>

      <Grid container sx={{ spacing: { xs: 0, sm: 2, md: 2, lg: 2 }, pl: { xs: 1 } }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <HeadingOne title="Kia Home Page In Here...!" id="one" />
        </Grid>
      </Grid>

      {/* Added Load More Button */}
      <Box textAlign="center" mt={6} mb={6}>
        <Link
          href="/cars"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: themeColors.ReadmoreArticleColor,
          }}
        >
          <Typography variant="body2" sx={{ "&:hover": { textDecoration: "underline" } }}>
            {/* Load more articles */}
          </Typography>
          {/* <ArrowForwardIcon fontSize="small" sx={{ ml: "2px" }} /> */}
        </Link>
      </Box>
    </>
  );
};

export default KiaHomePage;

KiaHomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
