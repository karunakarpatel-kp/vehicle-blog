import { createTheme } from "@mui/material/styles";

interface themeColorProps {
  primaryMain: string;
  secondaryMain: string;
  headingColor: string;
  ReadmoreArticleColor: string;
  tagBgColor: string;
  tabtextColor: string;
  LastUpdateTagsColor: string;
  blogPostBrandSubheading: string;
}

export const themeColors: themeColorProps = {
  // primaryMain: "#284A98",
  primaryMain: "#36106A",

  // secondaryMain: "#ffca3c",

  secondaryMain: "#130A1C",
  headingColor: "rgb(48,52,59)",
  ReadmoreArticleColor: "#36106A",
  // tagBgColor: "#8AAAE5",
  tagBgColor: "#ECECEC",
  // tabtextColor: "#ECECEC",
  tabtextColor: "#7F61A4",
  LastUpdateTagsColor: "#9EA4B2",
  blogPostBrandSubheading: "rgb(192,192,192)",
};

// Updating the Typography Variant Props

declare module "@mui/material/styles" {
  interface TypographyVariants {
    brandTitle: React.CSSProperties;
    brandDescriptionParagraph: React.CSSProperties;
    blogPostBrandTitle: React.CSSProperties;
    blogPostBrandSubheading: React.CSSProperties;
    blog: React.CSSProperties;
    brandParagraph: React.CSSProperties;
    blogPostBrandHeadingTwo: React.CSSProperties;
    blogPostBrandHeadingThree: React.CSSProperties;
    blogPostBrandHeadingFour: React.CSSProperties;
    blogPostBrandHeadingFive: React.CSSProperties;
    blogPostBrandHeadingSix: React.CSSProperties;
    brandingSectionIntro: React.CSSProperties;
  }
  // Allow configuration using 'createTheme'
  interface TypographyVariantsOptions {
    brandTitle: React.CSSProperties;
    brandDescriptionParagraph: React.CSSProperties;
    blogPostBrandTitle: React.CSSProperties;
    blogPostBrandSubheading: React.CSSProperties;
    blog: React.CSSProperties;
    brandParagraph: React.CSSProperties;
    blogPostBrandHeadingTwo: React.CSSProperties;
    blogPostBrandHeadingThree: React.CSSProperties;
    blogPostBrandHeadingFour: React.CSSProperties;
    blogPostBrandHeadingFive: React.CSSProperties;
    blogPostBrandHeadingSix: React.CSSProperties;
    brandingSectionIntro: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    brandTitle: true;
    brandDescriptionParagraph: true;
    blogPostBrandTitle: true;
    blogPostBrandSubheading: true;
    blog: true;
    brandParagraph: true;
    blogPostBrandHeadingTwo: true;
    blogPostBrandHeadingThree: true;
    blogPostBrandHeadingFour: true;
    blogPostBrandHeadingFive: true;
    blogPostBrandHeadingSix: true;
    brandingSectionIntro: true;
  }
}

// Start 'createTheme'

let Theme = createTheme({
  palette: {
    primary: {
      main: themeColors.primaryMain,
    },
    secondary: {
      main: themeColors.secondaryMain,
    },
  },
  // Components
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
        },
      },
    },
  },
});

Theme = createTheme(Theme, {
  typography: {
    // For all the Paragraph Items in the Blog Post/Pages
    brandParagraph: {
      fontSize: "1.26rem",
      fontWeight: "400",
      fontFamily: "WotfardLight",

      color: "rgb(31,34,38)",
      lineHeight: "2rem",
      letterSpacing: "0",

      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.2rem",
        lineHeight: "36px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.2rem",
        lineHeight: "36px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    // Image On Top Title Goes Here
    brandTitle: {
      fontFamily: "Wotfard",

      fontSize: "1.6rem",
      letterSpacing: "0",
      fontWeight: "600",
      lineHeight: "2.5rem",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "30px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "30px",
      },
      // For Larger Screens
      [Theme.breakpoints.between("md", "lg")]: {
        // border: "1px solid green",
        fontSize: "1.3rem",
        lineHeight: "30px",
      },
    },

    // For HomePage Card Description
    brandDescriptionParagraph: {
      fontSize: "1.1rem",
      fontWeight: "normal",
      fontFamily: "WotfardLight",
      color: "#8890a0",
      lineHeight: "2rem",
      letterSpacing: "0px",

      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.1rem",
        lineHeight: "30px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.2rem",
        lineHeight: "36px",
      },
      // For Larger Screens
      [Theme.breakpoints.between("md", "lg")]: {
        // border: "1px solid green",
        fontSize: "1.1rem",
        lineHeight: "33px",
      },
    },

    blogPostBrandSubheading: {
      fontSize: "1.2rem",
      fontWeight: "400",
      fontFamily: "WotfardLight",
      lineHeight: "30px",
      letterSpacing: "0px",
      color: themeColors.blogPostBrandSubheading,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.1rem",
        lineHeight: "33px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.1rem",
        lineHeight: "34px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    blogPostBrandTitle: {
      fontFamily: "Wotfard",

      fontSize: "2rem",
      letterSpacing: "0",
      fontWeight: "600",
      lineHeight: "2.5rem",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "35px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.4rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    blogPostBrandHeadingTwo: {
      fontFamily: "Wotfard",
      fontSize: "1.3rem",
      letterSpacing: "0",
      fontWeight: "599",
      lineHeight: "40px",
      textTransform: "capitalize",
      color: themeColors.primaryMain,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.2rem",
        lineHeight: "33px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    blogPostBrandHeadingThree: {
      fontFamily: "Wotfard",
      fontSize: "1.29rem",
      fontWeight: "599",
      letterSpacing: "0",
      lineHeight: "40px",
      textTransform: "capitalize",
      color: themeColors.primaryMain,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.2rem",
        lineHeight: "30px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    blogPostBrandHeadingFour: {
      fontFamily: "Wotfard",
      fontSize: "1.27rem",
      letterSpacing: "0",
      fontWeight: "599",
      lineHeight: "40px",
      textTransform: "capitalize",
      color: themeColors.primaryMain,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.2rem",
        lineHeight: "30px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    blogPostBrandHeadingFive: {
      fontFamily: "Wotfard",

      fontSize: "1.25rem",
      letterSpacing: "0",
      fontWeight: "599",
      lineHeight: "40px",
      textTransform: "capitalize",
      color: themeColors.primaryMain,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.2rem",
        lineHeight: "30px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    blogPostBrandHeadingSix: {
      fontFamily: "Wotfard",

      fontSize: "1.199rem",
      letterSpacing: "0",
      fontWeight: "599",
      lineHeight: "40px",
      textTransform: "capitalize",
      color: themeColors.primaryMain,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.1rem",
        lineHeight: "30px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },

    brandingSectionIntro: {
      fontFamily: "Wotfard",
      fontSize: "1.3rem",
      letterSpacing: "0",
      fontWeight: "400",
      lineHeight: "36px",
      // textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.133rem",
        lineHeight: "33px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.2rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.between("md", "lg")]: {
        // border: "1px solid green",
        fontSize: "1.1999rem",
        lineHeight: "39px",
      },
    },

    h1: {
      fontFamily: "Wotfard",

      fontSize: "2rem",
      letterSpacing: "0",
      fontWeight: "600",
      lineHeight: "2.5rem",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.4rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.4rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h2: {
      fontFamily: "Wotfard",

      fontSize: "1.5rem",
      letterSpacing: "0",
      // fontWeight: "bold",
      lineHeight: "40px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h3: {
      fontFamily: "Wotfard",

      fontSize: "1.4rem",
      letterSpacing: "0",
      // fontWeight: "bold",
      lineHeight: "36px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h4: {
      fontFamily: "Wotfard",

      fontSize: "1.3rem",
      letterSpacing: "0",
      // fontWeight: "bold",
      lineHeight: "36px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h5: {
      fontFamily: "Wotfard",
      fontSize: "1.3rem",

      letterSpacing: "0",
      // fontWeight: "bold",
      lineHeight: "36px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    h6: {
      fontFamily: "Wotfard",
      fontSize: "1.3rem",

      letterSpacing: "0",
      // fontWeight: "bold",
      lineHeight: "36px",
      textTransform: "capitalize",
      color: themeColors.headingColor,
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.2rem",
        lineHeight: "33px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.3rem",
        lineHeight: "39px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    body1: {
      fontSize: "1.1rem",

      fontWeight: "normal",
      fontFamily: "Wotfard",
      color: "#8890a0",
      lineHeight: "2rem",
      letterSpacing: "0px",

      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.2rem",
        lineHeight: "36px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.2rem",
        lineHeight: "36px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
    body2: {
      fontSize: "1.3rem",

      fontWeight: "normal",
      fontFamily: "Wotfard",
      lineHeight: "36px",
      letterSpacing: "0px",
      // For Mobile (Extra Small Screens)
      [Theme.breakpoints.down("sm")]: {
        // border: "1px solid red",
        fontSize: "1.0rem",
        // lineHeight: "36px",
      },
      // For Medium or Mobile Phones (landScapes)
      [Theme.breakpoints.between("sm", "md")]: {
        // border: "1px solid black",
        fontSize: "1.0rem",
        // lineHeight: "36px",
      },
      // For Larger Screens
      [Theme.breakpoints.up("md")]: {
        // border: "1px solid green",
      },
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          brandParagraph: "p",
          brandDescriptionParagraph: "p",
          blogPostBrandSubheading: "p",
          blogPostBrandTitle: "h1",
          brandTitle: "h1",
          blogPostBrandHeadingTwo: "h2",
          blogPostBrandHeadingThree: "h3",
          blogPostBrandHeadingFour: "h4",
          blogPostBrandHeadingFive: "h5",
          blogPostBrandHeadingSix: "h6",
          brandingSectionIntro: "h6",
        },
      },
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": {
          fontFamily: "Wotfard",
          src: 'url(/fonts/Wotfard-Regular.otf) format("truetype")',
          fontWeight: "normal",
          fontStyle: "normal",
          fontDisplay: "swap",
        },
      },
    },
  },
});

export default Theme;
