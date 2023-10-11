import Link from "next/link";

import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

import MainLayout from "@Layout/MainLayout";
import ImageOnTopCard from "@UI/HomePageCards/ImageOnTopCard";
import HeaderSection from "@SEO/Head";
import { themeColors } from "@Theme/Theme";

import coding from "@Public/coding.jpg";
import seo from "@Public/seo.jpg";

import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeaderSection
        title="Vehicle Page"
        description="This is the Description of the Vehicle Home Page"
        image="https://image-url"
        url="https://blog-page-url"
        publishedTime="2023-01-07T21:58:00+00:00"
        lastUpdatedTime="2023-01-07T21:58:00+00:00"
      />

      <Box textAlign="center" mb={3}>
        <Typography variant="h6">Recent Articles</Typography>
      </Box>

      <Grid container sx={{ spacing: { xs: 0, sm: 2, md: 2, lg: 2 }, pl: { xs: 1 } }}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <ImageOnTopCard
            Title="Learn More About Tata Safari Facelift."
            Description="In this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World this blog post you will be able o learn all the required technologies and most often you will able to see all the new era of technologies in this World World.....!"
            href="/Blog/seo"
            ImageSrc={seo}
            ImageAlt="Coding-Image"
            tags={[
              { tag: "tata", href: "/Blog/seo" },
              { tag: "tata safari", href: "/mui" },
              { tag: "safari", href: "/mui" },
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

      <Box textAlign="center" mb={6} sx={{ mt: { xs: 2, sm: 2, md: 4, lg: 6 }, mb: { xs: 2, sm: 4, md: 4, lg: 6 } }}>
        <Link
          href="/Blog"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: themeColors.ReadmoreArticleColor,
          }}
        >
          <Typography
            variant="h6"
            sx={{ "&:hover": { textDecoration: "underline" }, color: "rgb(77, 79, 141)", textTransform: "none" }}
          >
            Read more articles
          </Typography>
          <ArrowForwardIcon fontSize="small" sx={{ ml: "2px" }} />
        </Link>
      </Box>

      {/* <RectangularAd /> */}
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
