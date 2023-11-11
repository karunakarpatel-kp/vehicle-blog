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
import { blogPostsObj, blogPostURLS, SEO_OBJ } from "Essentials";
import { NextPageWithLayout } from "pages/_app";
import HighlightText from "@Components/SyntaxHighlighter/HighlightText";
import ScrollableTabs from "@Components/UI/Tabs/BasicTabs";
import BasicTable from "@Components/UI/Tables/BasicTable";

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
  const url = "https://www.karunakarpatel.com";
  const completeURL = url + pageUrl.asPath;

  const convertedLastUpdatedTime = (lastUpdateTime: string) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(lastUpdateTime);
    const day = date.getDate();
    const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
    const year = date.getFullYear();
    // console.log(`${day}/${month}/${year}`, "DATE");
    return `${day}, ${month}, ${year}`;
  };

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
            lastUpdatedTime={convertedLastUpdatedTime(SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime)}
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
            Hi, in this article you will learn how to install the next js react framework in a step-by-step manner. In
            the evolving landscape of web development, staying ahead of the software curve is essential. No matter what,
            whether you are a seasoned or aspiring coder, Next.js is the name that you should become intimately familiar
            with.
          </Paragraph>
          <Paragraph>
            As a software engineer and a programming blogger, I have had the privilege of witnessing the Nextjs rise in
            the software industry. In this article, I want to take you on a journey through the remarkable framework
            which we lean into its core concepts, advantages, its disadvantages and mostly explore why it is a game
            changer in the software industry and even get our hands dirty with the installation and initial setup of
            Next js framework.
          </Paragraph>

          <HeadingTwo id="what_is_next.js" title="What is Next.js?" />
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Paragraph>
                Nextjs is a popular framework for building full-stack web applications, particularly React-based
                applications which was developed and maintained by Vercel. Next.js simplifies the process of building
                modern, server-rendered react applications or statically-generated applications which include some key
                concepts like server-side Rendering (SSR), static site generation(SSG), Routing, Inbuilt styling, SEO,
                Optimization, etc... and mostly supports Typescript.
              </Paragraph>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box minHeight={300} bgcolor="lightgrey"></Box>
            </Grid>
          </Grid>
          <Paragraph text="Okay, now let's get our hands dirty with the installation of Next.js." />

          {/* Tabs in Here */}
          <ScrollableTabs />

          {/* SECOND HEADING */}
          <HeadingTwo id="install_next.js" title="Install Next.js" />

          <Paragraph text="To install Next.js, you need to have Node.js installed on your local machine. Make sure that you have the latest LTS version of node.js. To check the version of node.js just type node -v in your terminal and compare the version with the LTS version listed on the Node.js official website. " />

          <Paragraph text="After installing node.js, you will have the npm command available in the command line, where we use npm to install all the required libraries." />

          <Paragraph text="Before getting, there are two ways in which we can install Next.js, one is the Automatic Installation and the other is manual Installation. Both work in the same way. The automatic installation will complete all the setup by one single command whereas less manual installation will complete by two to three commands. It's up to you which installation method you choose, either way in this article I will explain both ways of installation methods." />

          {/* <BasicTable /> */}
          <BasicTable />
          <Paragraph text="Let's dig into Automatic Installation of Next.js " />

          <HeadingThree id="automatic_installation_of_next.js" title="Automatic Installation of Next.js" />

          <Paragraph>
            Just to start a new Next.js app use the command create-next-app, which sets all the required libraries
            automatically for you. Just run the below command
          </Paragraph>

          <SyntaxHighlight>npx create-next-app@latest</SyntaxHighlight>

          <Paragraph>
            If you face any error with the <Ccode>npx</Ccode> command, then try to install <Ccode>npx</Ccode> in your
            local machine by command <Ccode>npm install -g npx </Ccode> which helps to install <Ccode>npx</Ccode>{" "}
            globally, and rerun the above command to restart installation.
          </Paragraph>

          <Paragraph>During the installation process, you will see the following prompts in the command line</Paragraph>

          <HeadingFour id="manual_installation_of_next.js" title="Manual Installation of Next.js" />

          <Paragraph text="To manually install the Next.js application, just install the required packages by below command " />

          <SyntaxHighlight>npm install next@latest react@latest react-dom@latest</SyntaxHighlight>

          <Paragraph text="This will create a folder, then open the package.json file copy and paste the following scripts" />

          <HeadingFour id="create_app_directory" title="Create app directory" />

          <Paragraph>
            In this whole Next.js application, there were two App Router and Pages Router available to organize the
            application folder structure and navigate between the pages. It is recommended to use App Router if you are
            working on a new Next.js application.
          </Paragraph>

          <Paragraph>
            Create an app/ folder, then add a <Ccode>layout.tsx</Ccode> and <Ccode>page.tsx</Ccode> file. These will be
            rendered when the user visits the root of your application (/) as a landing page.
          </Paragraph>

          <Paragraph>
            Create a root layout inside <Ccode>app/layout.tsx</Ccode> with the required <Ccode>html</Ccode> and{" "}
            <Ccode>body</Ccode> tags as shown below
          </Paragraph>

          <Paragraph>
            Then create a home page <HighlightText>app/page.tsx</HighlightText> with some content in it. Here the naming
            conventions are much more important.
          </Paragraph>

          <Paragraph>
            All the above steps would be an example of an App Router. To learn more and play around with App Router in
            here(using the App Router).
          </Paragraph>

          <Paragraph>
            As, of now we have successfully completed all the required steps. Now, run the development server
          </Paragraph>

          <HeadingThree id="run_the_development_server_of_next.js" title="Run the development server of Next.js:" />

          <Paragraph>
            Run <Ccode>npm run dev</Ccode> to start the development server, then visit{" "}
            <Ccode>http://localhost:3000</Ccode> to view the Next.js application in the browser. Feel free to edit{" "}
            <Ccode>app/layout.tsx</Ccode> or <Ccode>pages/index.tsx</Ccode> file to see the updated changes in your
            browser.
          </Paragraph>

          <HeadingThree id="frequently_asked_questions" title="Frequently asked questions" />

          <HeadingFour title="What is Next.js?" />
          <Paragraph>
            Next.js is a powerful open-source React framework designed to streamline web application development. It
            combines the benefits of server-side rendering (SSR) and static site generation (SSG), improving performance
            and SEO. Developers appreciate its intuitive file-based routing, automatic code splitting, built-in API
            route creation, simplifying project structure, built-in Styling, etc... This framework is recognized for its
            developer friendliness and capability to build high-performing web experiences.
          </Paragraph>

          <HeadingFour title="What is eslint in Next.js?" />
          <Paragraph>
            ESLint can help Next.js developers maintain consistent code formatting, attach to coding standards, and
            catch common programming mistakes. It can be configured with specific rules and configurations, which can be
            tailored to meet the coding standards and best practices of a particular project or organization. By
            integrating ESLint into a Next.js project, developers can ensure that their codebase remains clean,
            readable, and free from common coding errors. This can enhance code quality, collaboration among team
            members, and overall project maintainability.
          </Paragraph>

          <HeadingFour title="Why use Next.js?" />
          <Paragraph>
            Next.js is a popular choice for web development for several reasons which include improved performance,
            developer productivity, SEO-friendly, Automatic code splitting, Rich Ecosystem, CSS Handling, API Routes,
            and Security.
          </Paragraph>

          <HeadingFour title="Is Next.js frontend or backend?" />

          <Paragraph>
            Next.js is primarily a frontend framework, but it has features that blur the lines between frontend and
            backend development. often used to build the front end of web applications.
          </Paragraph>

          <Paragraph>
            However, Next.js also supports server-side rendering (SSR) and serverless functions through its API routes,
            which can be used for backend-related tasks. These features allow developers to build parts of the backend
            logic within the Next.js application. I especially useful for handling server-side rendering, routing, and
            APIs, effectively making Next.js a full-stack solution for many web applications.
          </Paragraph>

          <Paragraph>
            In summary, Next.js is a frontend framework, but it has the flexibility to handle certain backend tasks,
            making it a popular choice for building full-stack web applications.
          </Paragraph>

          <HeadingFour title="Why Next.js app is good for SEO?" />

          <Paragraph>
            Next.js is well regarded for its SEO capabilities due to several features that improve a search engine
            visibility which include, Server-side rendering, Fast initial page load, Dynamic meta tags, structured data
            support, Mobile Optimization, etc... Next.js simplifies the process of creating SEO friendly web
            application.
          </Paragraph>

          <HeadingFour title="Why use Next.js over React js?" />

          <Paragraph>
            Next.js and React are not direct competitors but rather complementary technologies. React is a JavaScript
            library for building user interfaces, while Next.js is a framework built on top of React. Your choice
            between the two depends on the specific requirements and goals of your web application.
          </Paragraph>
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
                items={[
                  "introduction",
                  "what_is_next.js",
                  "install_next.js",
                  "automatic_installation_of_next.js",
                  "manual_installation_of_next.js",
                  "create_app_directory",
                  "run_the_development_server_of_next.js",
                  "frequently_asked_questions",
                  "discussions",
                ]}
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
                  <a href="#introduction" onClick={scrollIntoView} className="listItemLinkContent">
                    Tata Safari Key Features
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#what_is_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    The Grand Design
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#install_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    The Safest Space
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#automatic_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    ADAS
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#manual_installation_of_next.js" onClick={scrollIntoView} className="listItemLinkContent">
                    The Tech Appeal
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#create_app_directory" onClick={scrollIntoView} className="listItemLinkContent">
                    The Power Play
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a
                    href="#run_the_development_server_of_next.js"
                    onClick={scrollIntoView}
                    className="listItemLinkContent"
                  >
                    The Comfort Zone
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#frequently_asked_questions" onClick={scrollIntoView} className="listItemLinkContent">
                    Specifications
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Colors
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Persona
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Price
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Downloads
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
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
