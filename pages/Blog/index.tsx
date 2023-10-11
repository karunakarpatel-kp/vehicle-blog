import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import Link from "next/link";

import MainLayout from "@Layout/MainLayout";
import HeaderSection from "@SEO/Head";

import seo from "@Public/seo.jpg";
import coding from "@Public/coding.jpg";

import ImageOnTopCard from "@UI/HomePageCards/ImageOnTopCard";
import { themeColors } from "@Theme/Theme";

import { NextPageWithLayout } from "../_app";

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title="Blog Page"
        description="This is the Description of the Blog Page"
        image="https://image-url"
        url="https://blog-page-url"
        publishedTime="2023-01-07T21:58:00+00:00"
        lastUpdatedTime="2023-01-07T21:58:00+00:00"
      />

      <Box textAlign="center" sx={{ mb: { xs: 0, sm: 0, md: 3, lg: 3 } }}>
        <Typography variant="h6" fontWeight="600">
          {/* Recent Articles */}
        </Typography>
      </Box>

      <Grid container sx={{ spacing: { xs: 0, sm: 2, md: 2, lg: 2 }, pl: { xs: 1 } }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ImageOnTopCard
            Title="Tata Safari - A New Era Of Endowed Cars"
            Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
            href="/Blog/seo"
            ImageSrc={seo}
            ImageAlt="Coding-Image"
            tags={[
              { tag: "tata safari", href: "/Blog/seo" },
              { tag: "safari", href: "/mui" },
              { tag: "safari", href: "/mui" },
              { tag: "tata", href: "/mui" },
            ]}
          />
        </Grid>
        {/* <Grid item xs={12} sm={12} md={4} lg={4}>
          <ImageOnTopCard
            Title="Learn SEO Right From Start To Finish Image On Right Side"
            Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
            href="/Blog/seo"
            ImageSrc={coding}
            ImageAlt="Coding-Image"
            tags={[
              { tag: "seo", href: "/Blog/seo" },
              { tag: "material ui", href: "/mui" },
              { tag: "material ui", href: "/mui" },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ImageOnTopCard
            Title="Learn SEO Right From Start To Finish Image On Right Side"
            Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
            href="/Blog/seo"
            ImageSrc={coding}
            ImageAlt="Coding-Image"
            tags={[
              { tag: "seo", href: "/Blog/seo" },
              { tag: "material ui", href: "/mui" },
              { tag: "material ui", href: "/mui" },
            ]}
          />
        </Grid> */}
      </Grid>

      {/* Old Content Styling Below */}
      {/* <Grid container sx={{ spacing: { xs: 0, sm: 2, md: 2, lg: 2 }, pl: { xs: 1 } }}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ImageOnTopCard
            Title="Learn seo from stasd rt to finish in this blog post"
            Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
            href="/Blog/seo"
            ImageSrc={hi}
            ImageAlt="hi"
            tags={[
              { tag: "seo", href: "/Blog/seo" },
              { tag: "material ui", href: "/mui" },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ImageOnTopCard
            Title="Learn SEO Right From Start To Finish Image Side"
            Description="Learn how to create and customize a Multiselect component with Material UI and React"
            href="/Blog/seo"
            ImageSrc={seo}
            ImageAlt="Coding-Image"
            tags={[
              { tag: "seo", href: "/Blog/seo" },
              { tag: "material ui", href: "/mui" },
              { tag: "material ui", href: "/mui" },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <ImageOnTopCard
            Title="Learn SEO Right From Start To Finish Image On Right Side"
            Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
            href="/Blog/seo"
            ImageSrc={coding}
            ImageAlt="Coding-Image"
            tags={[
              { tag: "seo", href: "/Blog/seo" },
              { tag: "material ui", href: "/mui" },
              { tag: "material ui", href: "/mui" },
            ]}
          />
        </Grid>
      </Grid> */}

      {/* Added Load More Button */}
      <Box textAlign="center" mt={6} mb={6}>
        <Link
          href="/Blog"
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

export default Blog;

Blog.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
