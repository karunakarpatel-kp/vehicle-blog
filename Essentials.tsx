import tataImage from "@TataImages/tata-design.jpg";
import TataPersona from "@TataImages/iconic-roof-rails-with-chrome-inserts-27-23.jpg";
import TataWelcomeImage from "@TataImages/safari-overview-d-banner-27-23.jpg";
import vehicleMasti from "@Public/welcome-vehiclemasti.png";
import { StaticImageData } from "next/image";

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
  CARS_PAGE_BASE_URL: string;
  TATA_PAGE_BASE_URL: string;
  KIA_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: "https://www.vehiclemasti.com",
  CARS_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars",
  TATA_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars/tata",
  KIA_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars/kia",
};

interface TATA_COMPANY_OBJ {
  TATA_PAGE_ABSOLUTE: string;
  TATA_PAGE_RELATIVE: string;
  TATA_BLOG_PAGES: {
    TATA_SAFARI_ABSOLUTE_URL: string;
    TATA_SAFARI_RELATIVE_URL: string;
  };
}
interface KIA_COMPANY_OBJ {
  KIA_PAGE_ABSOLUTE: string;
  KIA_PAGE_RELATIVE: string;
  KIA_BLOG_PAGES: {
    KIA_SELTOS_ABSOLUTE_URL: string;
    KIA_SELTOS_RELATIVE_URL: string;
    KIA_SELTOS2_ABSOLUTE_URL: string;
    KIA_SELTOS2_RELATIVE_URL: string;
  };
}
interface Blog_Post_URL_Props {
  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  CARS_PAGE_ABSOLUTE: string;
  CARS_PAGE_RELATIVE: string;
  TATA_COMPANY_OBJ: TATA_COMPANY_OBJ;
  KIA_COMPANY_OBJ: KIA_COMPANY_OBJ;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  CARS_PAGE_ABSOLUTE: BASE_URLS.CARS_PAGE_BASE_URL,
  CARS_PAGE_RELATIVE: "/cars",

  TATA_COMPANY_OBJ: {
    TATA_PAGE_ABSOLUTE: BASE_URLS.TATA_PAGE_BASE_URL,
    TATA_PAGE_RELATIVE: "/cars/tata",
    TATA_BLOG_PAGES: {
      TATA_SAFARI_ABSOLUTE_URL: `${BASE_URLS.TATA_PAGE_BASE_URL}/tata_safari`,
      TATA_SAFARI_RELATIVE_URL: "/cars/tata/tata_safari",
    },
  },

  KIA_COMPANY_OBJ: {
    KIA_PAGE_ABSOLUTE: BASE_URLS.KIA_PAGE_BASE_URL,
    KIA_PAGE_RELATIVE: "/cars/kia",
    KIA_BLOG_PAGES: {
      KIA_SELTOS_ABSOLUTE_URL: `${BASE_URLS.KIA_PAGE_BASE_URL}/kia_seltos`,
      KIA_SELTOS_RELATIVE_URL: "/cars/kia/kia_seltos",

      KIA_SELTOS2_ABSOLUTE_URL: `${BASE_URLS.KIA_PAGE_BASE_URL}/kia_seltos2`,
      KIA_SELTOS2_RELATIVE_URL: "/cars/kia/kia_seltos2",
    },
  },
};

export const SEO_OBJ = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Vehicle Masti: A hub for Automobile enthusiasts.",
    description:
      "Welcome to VehicleMasti Blog! This is the perfect place for people who love automobiles whether you are a car enthusiast or a casual driver. You'll find easy-to-understand articles, maintenance tips, and reviews about different automobile manufacturers. Our engaging content provides to all levels of automotive interest. Stay updated and dive into the exciting world of Innovative automobiles with us! Join our community and let's learn and grow together in the world of automobiles!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "a-person-with-computer",
  },

  // Cars HomePage with URL /cars
  CARS_PAGE: {
    absoluteURL: blogPostURLS.CARS_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CARS_PAGE_RELATIVE,
    title: "Cars: A Hub for Cars Enthusiasts | VehicleMasti",
    description:
      "Welcome to VehicleMasti, a car informational page where I share my passion for cars and everything related to them. Here, I will write about different types of cars, their features, advantages, reviews, latest news, prices, comparisons, disadvantages, tips, tricks, and many more. Stay updated with the latest news about cars and let us learn and grow together in the world of innovative cars.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "a-person-with-computer",
  },

  //  Tata HomePage with URL /cars/tata
  TATA_HOMEPAGE: {
    absoluteURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_PAGE_RELATIVE,
    title: "Tata Automobiles: A Hub for Tata Cars Enthusiasts | VehicleMasti",
    description:
      "Welcome to VehicleMasti, a Tata Motors car informational page where I share my passion for Tata cars and everything related to them. Here, I will write about different variants of Tata cars, their features, advantages, reviews, latest news, prices, comparisons, disadvantages, tips, tricks, and many more. Stay updated with the latest news about different variants of Tata cars and let us learn and grow together in the world of innovative Tata cars.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: vehicleMasti,
    featuredImageAltText: "a-person-with-computer",
    TATA_PAGES_OBJ: {
      TATA_SAFARI: {
        absoluteURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_BLOG_PAGES.TATA_SAFARI_ABSOLUTE_URL,
        relativeURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_BLOG_PAGES.TATA_SAFARI_RELATIVE_URL,
        title: "Tata Safari Facelift 2023: A closer look into modern SUV.",
        description:
          "Here is the ultimate guide to the Tata Safari SUV, where everything you need to know about this car. Here, I will highlight the Tata Safari 2023 facelift car, prices, reviews, exterior, interior, mileage, color, images, facelift, on-road prices, power, comfort, and many more about the Tata Safari car. Read on to find out more.",
        publishedTime: "2023-11-14T09:07:55+00:00",
        lastUpdateTime: `${dynamicLastUpdatedTime()}`,
        tags: [
          { tag: "Cars", href: `${blogPostURLS.CARS_PAGE_RELATIVE}` },
          { tag: "Tata", href: `${blogPostURLS.TATA_COMPANY_OBJ.TATA_PAGE_RELATIVE}` },
          { tag: "Tata Safari", href: `${blogPostURLS.TATA_COMPANY_OBJ.TATA_BLOG_PAGES.TATA_SAFARI_RELATIVE_URL}` },
        ],
        featuredImage: TataWelcomeImage,
        featuredImageAltText: "a-person-with-computer",
      },
    },
  },

  //   Kia Automobiles with URL /cars/kia
  // KIA_HOMEPAGE: {
  //   absoluteURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_PAGE_ABSOLUTE,
  //   relativeURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_PAGE_RELATIVE,
  //   title: "Kia Automobiles: A hub for Kia Cars enthusiast | VehicleMasti",
  //   description:
  //     "Welcome to VehicleMasti, a Kia Motors car informational page where I share my passion for Kia cars and everything related to them. Here, I will write about different variants of Kia cars, their features, advantages, reviews, latest news, prices, comparisons, disadvantages, tips, tricks, and many more. Stay updated with the latest news about different variants of Kia cars and let us learn and grow together in the world of innovative Kia cars.",
  //   lastUpdateTime: `${dynamicLastUpdatedTime()}`,
  //   publishedTime: "2023-10-20T19:07:55+00:00",
  //   featuredImage: tataImage,
  //   featuredImageAltText: "a-person-with-computer",
  //   KIA_PAGES_OBJ: {
  //     KIA_SELTOS: {
  //       absoluteURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_BLOG_PAGES.KIA_SELTOS_ABSOLUTE_URL,
  //       relativeURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_BLOG_PAGES.KIA_SELTOS_RELATIVE_URL,
  //       title: "Kia Seltos URL in here",
  //       description: "Kia Seltos Description in here...",
  //       publishedTime: "2023-10-20T19:07:55+00:00",
  //       lastUpdateTime: `${dynamicLastUpdatedTime()}`,
  //       tags: [
  //         { tag: "Cars", href: `${blogPostURLS.CARS_PAGE_RELATIVE}` },
  //         { tag: "Kia", href: `${blogPostURLS.KIA_COMPANY_OBJ.KIA_PAGE_RELATIVE}` },
  //         { tag: "Kia Seltos", href: `${blogPostURLS.KIA_COMPANY_OBJ.KIA_BLOG_PAGES.KIA_SELTOS_RELATIVE_URL}` },
  //       ],
  //       featuredImageAltText: "a-person-with-computer",
  //       featuredImage: tataImage,
  //     },
  //   },
  // },
};

export const blogPostsObj = [
  {
    id: 0,
    url: `${blogPostURLS.TATA_COMPANY_OBJ.TATA_BLOG_PAGES.TATA_SAFARI_RELATIVE_URL}`,
    title: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title}`,
    description: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.description}`,
    lastUpdateTime: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.publishedTime}`,
    tags: SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.tags!,
    featuredImage: SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImage,
    featuredImageAltText: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImageAltText}`,
  },
];
