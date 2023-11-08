import seoImage from "@Public/seo.jpg";
import nextjsInstallImage from "@Public/nextjs_install.png";

interface blogPostURLSProps {
  NEXTJS_INSTALLATION_RELATIVE: string;
  NEXTJS_INSTALLATION_ABSOLUTE: string;
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;
  CARS_PAGE_RELATIVE: string;
  CARS_PAGE_ABSOLUTE: string;
}

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
  };
}

export const BASE_URL: { HOME_PAGE_BASE_URL: string; CARS_PAGE_BASE_URL: string } = {
  HOME_PAGE_BASE_URL: "https://www.vehiclemasti.com",
  CARS_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars",
};

export const blogPostURLS: blogPostURLSProps = {
  HOME_PAGE_ABSOLUTE: BASE_URL.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",
  CARS_PAGE_ABSOLUTE: BASE_URL.CARS_PAGE_BASE_URL,
  CARS_PAGE_RELATIVE: "/cars",
  NEXTJS_INSTALLATION_RELATIVE: "/cars/seo",
  NEXTJS_INSTALLATION_ABSOLUTE: `${BASE_URL.CARS_PAGE_BASE_URL}/seo`,
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

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Title of Vehicle Masti",
    description: "Description of Vehicle Masti",
    // lastUpdateTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },
  // Cars_Page  ==> /cars
  CARS_PAGE: {
    absoluteURL: blogPostURLS.CARS_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CARS_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patel's Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    // lastUpdateTime: "2023-10-20T19:19:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },
  // nextjs_installation
  NEXTJS_INSTALLATION: {
    absoluteURL: blogPostURLS.NEXTJS_INSTALLATION_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_INSTALLATION_RELATIVE,
    title: "Tata Safari: Everything You Need to Know to Own it.",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Cars", href: `${blogPostURLS.CARS_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_INSTALLATION.title}`,
    description: `${SEO_OBJ.NEXTJS_INSTALLATION.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_INSTALLATION.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_INSTALLATION.tags!,
    featuredImage: SEO_OBJ.NEXTJS_INSTALLATION.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_INSTALLATION.featuredImageAltText}`,
  },
];
