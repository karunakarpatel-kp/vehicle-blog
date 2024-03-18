import textToImageWelcomeImage from "./public/hi.jpg";

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
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

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
};

interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",
};

interface Tag {
  tag: string;
  href: string;
}

interface BlogPage {
  absoluteURL: string;
  relativeURL: string;
  title: string;
  description: string;
  lastUpdateTime: string;
  publishedTime: string;
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
  changeFrequency: "weekly" | "always" | "never" | "daily" | "monthly";
}
interface Tag {
  tag: string;
  href: string;
}

interface HomePage extends BlogPage {
  tags: { tag: string; href: string }[];
}
interface PolicyPage extends BlogPage {}
interface ContactPage extends BlogPage {}
interface DisclaimerPage extends BlogPage {}

interface ImageCompressionToolPage extends BlogPage {
  tags: Tag[];
}

interface SEOObjProps {
  HOME_PAGE: HomePage;
  POLICY_PAGE: PolicyPage;
  CONTACT_PAGE: ContactPage;
  DISCLAIMER_PAGE: DisclaimerPage;
  FIRST_BLOG_POST: DisclaimerPage;
}

export const SEO_OBJ: SEOObjProps = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "AI Text to Image Genertor",
    description:
      "Our ai text to image generator utilizes advanced artificial intelligence algorithms to convert plain text into hd images. Whether you're creating social media graphics, presentations, or artistic designs, our platform simplifies the conversion process, offering a seamless user experience.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-25T12:38:42+05:30",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "ai-text-to-image-generator",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [
      { tag: "ai-text-image-generator", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "text-to-image-ai-tool", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "text-to-image-generator", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | AITextToImageGenerator",
    description:
      "Welcome to ai text to image generator privacy policy. In here you can find all the details about privacy policy of AITextToImageGenerator",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-25T12:38:42+05:30",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "ai-text-to-image-generator",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "weekly",
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | AITextToImageGenerator",
    description:
      "Welcome to ai text to image generator contact page. In here you can find all the details of about ai-text-to-image-generator contact information and a way to contact administrator of the ai text to image generator site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-25T12:38:42+05:30",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "ai-text-to-image-generator",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "weekly",
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "How to install tailwind css in Next.js application",
    description:
      "Welcome to ai-text-to-image-generator disclaimer page. In here you can find all the details of about AITextToImageGenerator Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-25T12:38:42+05:30",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "ai-text-to-image-generator",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "weekly",
  },

  FIRST_BLOG_POST: {
    absoluteURL: "hi",
    relativeURL: "hi",
    title: "A complete guide to install Tailwind css in Next.js application",
    description:
      "Welcome to ai-text-to-image-generator disclaimer page. In here you can find all the details of about AITextToImageGenerator Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2024-02-25T12:38:42+05:30",
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: "ai-text-to-image-generator",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "weekly",
  },
};

export const blogPostsObj = [
  {
    id: 1,
    url: "/Blog/nextjs-installation",
    title: SEO_OBJ.FIRST_BLOG_POST.title,
    description: SEO_OBJ.FIRST_BLOG_POST.description,
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },

  {
    id: 2,
    url: "/Blog/nextjs-router",
    title: "KIA Seltos Blog Post In Here...!",
    description: SEO_OBJ.FIRST_BLOG_POST.description,
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },
  {
    id: 3,
    url: "/Blog/nextjs-router",
    title: SEO_OBJ.FIRST_BLOG_POST.title,
    description: SEO_OBJ.FIRST_BLOG_POST.description,
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },

  {
    id: 4,
    url: "/Blog/nextjs-router",
    title: "TATA ADAS Features",
    description: "lorem Karunakar simple Description",
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },

  {
    id: 5,
    url: "/Blog/nextjs-router",
    title: "Tata Safari Blog Post",
    description: "lorem Karunakar simple Description",
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },

  {
    id: 6,
    url: "/Blog/nextjs-router",
    title: "Nextjs Router, This is the wonderfull place to learn bro...!",
    description: SEO_OBJ.FIRST_BLOG_POST.description,
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },
  {
    id: 7,
    url: "/cars/tata/tata-harrier",
    title: "Tata Harrier, This is the wonderfull place to Tata Harrier...!",
    description: SEO_OBJ.FIRST_BLOG_POST.description,
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },

  {
    id: 8,
    url: "/cars/tata/tata_safari",
    title: "Tata Safari Blog Post In Here...!",
    description: SEO_OBJ.FIRST_BLOG_POST.description,
    lastUpdateTime: SEO_OBJ.FIRST_BLOG_POST.lastUpdateTime,
    publishedTime: SEO_OBJ.FIRST_BLOG_POST.publishedTime,
    tags: [
      { tag: "Cars", href: "url" },
      { tag: "Tata", href: "url" },
      { tag: "Tata Safari", href: "url" },
    ],
    featuredImage: textToImageWelcomeImage,
    featuredImageAltText: SEO_OBJ.FIRST_BLOG_POST.featuredImageAltText,
  },
];
