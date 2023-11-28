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

const TataHomePage: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.TATA_HOMEPAGE.title}
        description={SEO_OBJ.TATA_HOMEPAGE.description!}
        image={SEO_OBJ.TATA_HOMEPAGE.featuredImage}
        url={SEO_OBJ.TATA_HOMEPAGE.absoluteURL}
        publishedTime={SEO_OBJ.TATA_HOMEPAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.TATA_HOMEPAGE.lastUpdateTime}
      />

      <Box textAlign="center" sx={{ mb: { xs: 0, sm: 0, md: 3, lg: 3 } }}>
        <Typography variant="h6" fontWeight="600">
          Recent Articles on Tata Manufactures
        </Typography>
      </Box>

      <Grid container sx={{ spacing: { xs: 0, sm: 2, md: 2, lg: 2 }, pl: { xs: 1 } }}>
        {blogPostsObj.map((singlePostObj) => {
          return (
            <Grid item xs={12} sm={12} md={4} lg={4} key={singlePostObj.id}>
              <ImageOnTopCard
                Title={singlePostObj.title}
                Description={singlePostObj.description!}
                href={singlePostObj.url}
                ImageSrc={singlePostObj.featuredImage}
                ImageAlt={singlePostObj.featuredImageAltText}
                tags={singlePostObj.tags}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TataHomePage;

TataHomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
