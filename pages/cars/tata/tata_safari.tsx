import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

import { Divider, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import coding from "@Public/coding.jpg";

import Paragraph from "@Elements/Paragraph/Paragraph";
import Subtitle from "@Elements/Subtitle/Subtitle";

import FullPageBlogPostLayout from "@Layout/FullPageBlogPostLayout";
import HeaderImageFullBlogPost from "@UI/ImageCards/HeaderImageFullBlogPost";
import HeaderSection from "@SEO/Head";
import LastUpdateTags from "@UI/LastUpdate&Tags/LastUpdateTags";
import HeadingOne from "@Elements/Headings/HeadingOne";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Elements/Headings/HeadingTwo";
import HeadingThree from "@Elements/Headings/HeadingThree";
import HeadingFour from "@Elements/Headings/HeadingFour";
import HeadingFive from "@Elements/Headings/HeadingFive";
import HeadingSix from "@Elements/Headings/HeadingSix";
import Link from "next/link";
import SyntaxHighlight from "@SyntaxHighlighter/SyntaxHighlight";
import Ccode from "@SyntaxHighlighter/Ccode";
import SandboxCode from "@Sandbox/SandboxCode";

import {
  LineShareButton,
  LineIcon,
  FacebookMessengerShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import Sharing from "@Components/SocialShare/Sharing";
import { blogPostsObj, blogPostURLS, DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { NextPageWithLayout } from "pages/_app";
import HighlightText from "@Components/SyntaxHighlighter/HighlightText";
import ScrollableTabs from "@Components/UI/Tabs/BasicTabs";
import BasicTable from "@Components/UI/Tables/BasicTable";
import BasicTable2 from "@Components/UI/Tables/BasicTable2";

import BlogPostRightImage from "@Components/UI/ImageCards/BlogPostRightImage";
import Image from "next/image";
import grillImage from "@TataImages/colored-grille.jpg";
import ledlight from "@TataImages/full-led-projector-head-lamp-27-23.jpg";
import fullLedProjectorImage from "@TataImages/full-led-projector-head-lamp-27-23.jpg";
import connectedLEDDRLs from "@TataImages/end-to-end-led-drl-27-23.jpg";
import signatureLedTailLamp from "@TataImages/signature-end-to-end-led-tailamp-27-23.jpg";
import alloyWheels from "@TataImages/alloy-wheels.jpg";
import singatureMascot from "@TataImages/safari-mascot-on-door-27-23.jpg";
import roofRails from "@TataImages/iconic-roof-rails-with-chrome-inserts-27-23.jpg";
import interiorTheme from "@TataImages/interior-theme-27-23.jpg";
import safariPersona from "@TataImages/new-wood-finish-dashboard-27-23.jpg";
import safariSteeringWheel from "@TataImages/steering-wheel-angle-27-23.jpg";
import safariSeats from "@TataImages/oyster-white-leatherette-seats.jpg";

interface TableOfContentsListProps {
  id: string;
  title: string;
  targetElement: string;
}

interface ArticleDetailsListProps {
  id: string;
  title: string;
}

export const TableOfContentsList: TableOfContentsListProps[] = [
  { id: "1", title: "This Is One", targetElement: "lastItem" },
  { id: "2", title: "This Is Two", targetElement: "headingNumberOne" },
  { id: "3", title: "This Is Three", targetElement: "lastItem" },
];

export const ArticleDetailsList: ArticleDetailsListProps[] = [
  { id: "1", title: "Published By: Karunakar Patel" },
  { id: "2", title: "Last Updated On: Karunakar Patel" },
  { id: "3", title: "Read Time: 3mins" },
];

export const BlogPostTags: { id: string }[] = [{ id: "One" }];

const TataSafari: NextPageWithLayout = () => {
  const scrollIntoView = () => {
    window.scrollTo({
      top: 0,
      left: window.innerHeight,
      behavior: "smooth",
    });
  };

  const pageUrl = useRouter();
  const url = "https://www.vehiclemasti.com/";
  const completeURL = url + pageUrl.asPath;

  return (
    <>
      <HeaderSection
        title={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title}
        description={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.description!}
        // image={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImage}
        image="https://raw.githubusercontent.com/karunakarpatel-kp/Blogging-2022/main/public/nextjs_install.png"
        url={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.absoluteURL}
        publishedTime={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.publishedTime}
        lastUpdatedTime={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime}
      />

      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title} id="title" />
          <Subtitle text={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime)}
            tags={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImage}
            alt={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImageAltText}
          />
        </Grid>
        <Grid item md={2} lg={4}>
          {/* Empty Space */}
        </Grid>
      </Grid>

      <Divider sx={{ mt: 4, mb: 4 }} />

      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item md={8} lg={8}>
          <Paragraph id="introduction">
            Hi, in this blog post, you will learn everything about the{" "}
            <HighlightText>new safari facelift 2023</HighlightText> from the overview, reviews, variants, mileage,
            on-road price, etc. This is the best place to get a complete overview or information about Tata Safari Car
            2023.
          </Paragraph>
          <Paragraph>
            Tata Automobiles launched a brand-new SUV named Tata Safari Facelift 2023 car earlier this year in October.
            Tata Safari is one of the most iconic SUVs in India as it has been manufacturing branded cars for over two
            decades in India. The safari had evolved from off-road cars to sophisticated or feature-rich family cars. If
            you are looking for a hot, modern, safest, best build quality, feature-hit branded SUV, then Tata Safari is
            the best choice.
          </Paragraph>

          <HeadingTwo id="tata-safari-key-features" title="Tata Safari Key Features:" />
          <Paragraph>
            However, the Tata Safari facelift comes with a hot stylish design, a feature-rich infotainment system,
            advanced safety features, a spacious cabin, and a powerful diesel engine. It is the best choice for those
            who want a family car that can also handle adventure.
          </Paragraph>
          <Paragraph>
            Ok wait, let’s check into some detailed key features and highlights of Tata Safari facelift 2023.
          </Paragraph>

          <HeadingThree id="the-grand-design" title="The Grand Design:" />
          <Paragraph>
            Tata Safari facelift comes with new noticeable cosmetic changes that will give a more contemporary look to
            this branded new SUV. Below is a list of key design updates.
          </Paragraph>

          <HeadingThree id="new-parametric-grill" title="New Parametric Grill:" />

          <BlogPostRightImage
            paragraphText="
            The Safari comes with a new parametric grill which applies a stunning look to the SUV where we cannot stop looking at it. 
          "
            imageSrc={grillImage}
            imageAltText="tata-safari-parametric-grill-image"
            imageAlignment="left"
          />

          <HeadingThree id="bi-led-projector-headlights" title="BI-LED Projector Headlights:" />

          <BlogPostRightImage
            paragraphText="
            It has Bi-functional LED projector headlights that apply a good throw of light ahead. It also has a safari branding strip below the projector lamps.
          "
            imageSrc={fullLedProjectorImage}
            imageAltText="tata-safari-bi-led-projector-headlights"
            imageAlignment="right"
          />

          <HeadingThree id="end-to-end-connected-LED-DRLS" title="End-to-end connected LED DRLs:" />

          <BlogPostRightImage
            paragraphText="
           The new Safari has vertically oriented LED headlights and a connected DRL setup that runs across the width of the bonnet. It comes with a welcome light when you unlock your car. 
          "
            imageSrc={connectedLEDDRLs}
            imageAltText="end-to-end-connected-led-drls-tata-safari"
            imageAlignment="left"
          />

          <HeadingThree id="signature-connected-led-taillamp" title="Signature Connected LED Taillamp:" />

          <BlogPostRightImage
            paragraphText="
           It has a new signature connected LED taillamp where it runs all over the rearview. It has a stunning look from the rear view during nights when the LED taillamp is functional.
          "
            imageSrc={signatureLedTailLamp}
            imageAltText="signature-connected-led-taillamp"
            imageAlignment="right"
          />

          <HeadingThree id="new-r19-dual-tone-spider-alloys" title="New R19 Dual Tone Spider Alloys:" />

          <BlogPostRightImage
            paragraphText="
           The New Safari has 19-inch alloy wheels with a stunning design that applies great aerodynamics which results in great stability and durability of this SUV.
          "
            imageSrc={alloyWheels}
            imageAltText="tata-safari-alloy-image"
            imageAlignment="left"
          />

          <HeadingThree id="signature-safari-mascot-on-doors" title="Signature Safari Mascot on Doors:" />

          <BlogPostRightImage
            paragraphText="
           The new safari has the “safari” signature badging on all doors as shown in the image. It applies a great look to the SUV even from the left and right view of the car.
          "
            imageSrc={singatureMascot}
            imageAltText="tata-safari-signature-mascot"
            imageAlignment="right"
          />

          <HeadingThree id="iconic-roof-rails-with-chrome-inserts" title="Iconic Roof rails with chrome Inserts:" />

          <BlogPostRightImage
            paragraphText="
           New It comes with Roof rails on the top of the SUV. It just applies a good look but who else uses these rails for carrying luggage on top of a family SUV? It is very useful for those who go on adventures frequently.
          "
            imageSrc={roofRails}
            imageAltText="tata-safari-iconic-roof-rails-image"
            imageAlignment="left"
          />

          <HeadingThree
            id="oyster-white-and-titan-brown-interior-theme"
            title="Oyster white and Titan Brown Interior Theme:"
          />

          <BlogPostRightImage
            paragraphText="
           You would fall in love with this branded new SUV once you step into it. As of now, it has the best interior theme where you will feel diligent and happy without any reason.
          "
            imageSrc={interiorTheme}
            imageAltText="tata-safari-interior-theme"
            imageAlignment="right"
          />

          <HeadingThree id="persona-based-interior-themes" title="Persona Based Interior Themes:" />

          <BlogPostRightImage
            paragraphText="
           The new safari has a customizable ambient light feature where you can manually set the ambient lights depending on your mood using the infotainment system. You automatically elevate your luxurious feeling with persona-based interior themes.
          "
            imageSrc={safariPersona}
            imageAltText="tata-safari-persona-image"
            imageAlignment="left"
          />

          <HeadingThree
            id="steering-wheel-illuminated-logo"
            title="New Dual Tone 4 Spoke steering wheel with Illuminated Logo:"
          />

          <BlogPostRightImage
            paragraphText="
           The new Safari facelift comes with a dual-tone 4-spoke steering wheel with an illuminated “Tata” logo on it. It has a crystal clear steering wheel, but upon using it there may be a chance of scratches. But, it’s ok to live with it.
          "
            imageSrc={safariSteeringWheel}
            imageAltText="steering-wheel-illuminated-logo"
            imageAlignment="right"
          />

          <HeadingThree id="safari-seats" title="Benecke Kaliko Oyster white Leatherette seats:" />

          <BlogPostRightImage
            paragraphText="
          It comes with ultra-premium seats with the deco stitch that elegantly ties comfort with styles. You feel “Reserved only for you” once you sit in this comfortable seat.
          "
            imageSrc={safariSeats}
            imageAltText="tata-safari-seats-image"
            imageAlignment="left"
          />
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={["introduction", "tata-safari-key-features", "the-grand-design"]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#tata-safari-key-features" onClick={scrollIntoView} className="listItemLinkContent">
                    Tata Safari Key Features
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#the-grand-design" onClick={scrollIntoView} className="listItemLinkContent">
                    The Grand Design
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    The Safest Space
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    ADAS
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    The Tech Appeal
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    The Power Play
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    The Comfort Zone
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Specifications
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Colors
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Persona
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Price
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Downloads
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussions
                  </a>
                </li>
              </Scrollspy>

              {/* Social Sharing Icons Are below */}
              <Box>
                <Sharing url={completeURL} title={SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title} />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TataSafari;

TataSafari.getLayout = function getLayout(page) {
  return (
    <>
      <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>
    </>
  );
};
