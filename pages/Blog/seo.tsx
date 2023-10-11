import React, { useRef } from "react";
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

import { NextPageWithLayout } from "../_app";
import {
  LineShareButton,
  LineIcon,
  FacebookMessengerShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import Sharing from "@Components/SocialShare/Sharing";

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

export const code1 = `function App() {
  return (
      <SyntaxHighlighter children={code} language="javascript" style={dracula} />
  );
}
// this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully

function createChildren(style, useInlineStyles) {
  let childrenCount = 0;
  return children => {
    childrenCount += 1;
    return children.map((child, i) => createElement({
      node: child,
      style,
      useInlineStyles,
      key:\`\${codesegmentsdf}\`
    }));
  }
}`;

const Seo: NextPageWithLayout = () => {
  const scrollIntoView = () => {
    window.scrollTo({
      top: 0,
      left: window.innerHeight,
      behavior: "smooth",
    });
  };

  const pageUrl = useRouter();
  const url = "https://www.karunakarpatel.com";
  const completeURL = url + pageUrl.asPath;

  return (
    <>
      <HeaderSection
        title="Tata safari - A new era of endowed cars"
        description="This is the Description of the webpate"
        image="https://image-url"
        url="https://blog-page-url"
        publishedTime="2023-01-07T21:58:00+00:00"
        lastUpdatedTime="2023-01-07T21:58:00+00:00"
      />

      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>

      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title="Tata safari - A new era of endowed cars" id="Heading Number One" />

          <Subtitle text="Learn how to create and customize a Multiselect component with Material UI and React By Karunakar Patel and he is making out this BlogPost...!" />

          <LastUpdateTags
            lastUpdatedTime="Jan 21, 2023"
            tags={[
              { tag: "seo", href: "/Blog/seo" },
              { tag: "material ui", href: "/mui" },
              { tag: "karunakar Patel", href: "/" },
            ]}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost image={coding} alt="Image Alt Text In Here..." />
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
          <Paragraph text="Hi this is an another paragraph {}" />

          <Ccode>Code block Out the Paragraph</Ccode>

          <Paragraph>
            This is one of the best paragraph in my life and i was about to include <Ccode>Code</Ccode> in this best of
            the mui component in which you will able to learn all the components like <Ccode>FormControl</Ccode> of the
            mui component...!
          </Paragraph>

          {/* <SyntaxHighlight>{code1}</SyntaxHighlight> */}

          <Paragraph>
            Hi this is the simple code executed by me using the following command called <Ccode>npm run start</Ccode> in
            the command line and then you will be able to start the server successfully running at{" "}
            <Ccode>localhost:3000</Ccode>
          </Paragraph>

          <Paragraph text="This is how the preview of the Code looks like This is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks likeThis is how the preview of the Code looks like" />

          {/* <SandboxCode /> */}

          <Paragraph text="Multiselect in Material UI is an extended feature to the regular select or dropdown menu that enables users to select multiple values within the same input field." />
          <Paragraph text="`hi` sdlfk `<code>one</code>`" />
          <Paragraph text="This is the most important MUi code in which where you will learn all the type of techniques in which you will be able to run the programming code within no time." />
          <Typography variant="brandParagraph" mb={3}>
            Here in below is the Syntax Highlighters
          </Typography>

          {/* <SyntaxHighlight>{code1}</SyntaxHighlight> */}

          <Paragraph text="In this tutorial, we’ll learn how to create a multiselect component using Select and Autocomplete with a customized menu list and removable tags/chips as values." />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project. lorem" />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project." />
          <Paragraph text="Multiselect in Material UI is an extended feature to the regular select or dropdown menu that enables users to select multiple values within the same input field." />

          <Paragraph text="Multiselect in Material UI is an extended feature to the regular select or dropdown menu that enables users to select multiple values within the same input field." />

          <HeadingTwo
            id="headingNumberOne"
            title="This is heading Number Two in this whole text field is some of the major fields in heading Number Two"
          />
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paragraph
                text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co "
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box minHeight={300} bgcolor="lightgrey"></Box>
            </Grid>
          </Grid>
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          aperiam ab necessitatibus, deserunt nostrum neque, tempore ad eaque nobis laboriosam numquam facere. Possimus
          co "
          />
          <HeadingTwo
            id="one"
            title="One This is heading Number Three in this whole text field is some of the major fields in heading Number Two"
          />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project." />
          <Paragraph text="MUI provides a couple of convenient options to get a feature-rich multiselect component included in our project." />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem "
          />
          <HeadingThree
            id="two"
            title="This is heading number three dudei in which one of the best possible ways to get Heading dude...!"
          />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          co "
          />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          adipisci rerum architecto voluptatum autem repellat possimus libero nostrum suscipit quod. Fuga officiis
          co "
          />
          <HeadingFour title="Four Heading Labore expedita perspiciatis, amet, natus atque" />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          co "
          />
          <Paragraph
            text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atque
          co "
          />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <HeadingFive title="Heading number five of the karunakar patel blog post." />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <HeadingSix title="This is the heading number six of the blog post idiot....!" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
          <Paragraph text="Paragraph Hi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore expedita perspiciatis, amet, natus atqueco" />
        </Grid>

        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            {/* <Stack direction="column" spacing={1}>
              <TableOfContents TableOfContentsList={TableOfContentsList} />
              <ArticleDetails ArticleDetailsList={ArticleDetailsList} />
            </Stack> */}
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={["one", "two"]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#one" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                    One of the Main Heading is Here...!
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#one" onClick={scrollIntoView} className="listItemLinkContent">
                    Learn How to set up Tailwind for React js{" "}
                  </a>
                  {/* Inner Container */}
                  <ol className="innerListItemContainer">
                    <li className="listItemContent">
                      <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                        One of the Main Heading is Here...!
                      </a>
                    </li>

                    <li className="listItemContent">
                      <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                        One of the Main Heading is Here...!
                      </a>
                    </li>
                  </ol>
                </li>
                <li className="listItemContent">
                  <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                    One of the Main Heading is Here...!
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#two" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussion
                  </a>
                </li>
              </Scrollspy>

              {/* Social Sharing Icons Are below */}
              <Box>
                <Sharing url={completeURL} title="This is the title of the Blog Post" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Seo;

Seo.getLayout = function getLayout(page) {
  return (
    <>
      <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>
    </>
  );
};
