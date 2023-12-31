export const BASE_URLS = {
  HOME_PAGE_BASE_URL: "https://www.vehiclemasti.com",
  CARS_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars",
  TATA_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars/tata",
  KIA_PAGE_BASE_URL: "https://www.vehiclemasti.com/cars/kia",
}

export const blogPostURLS = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  CARS_PAGE_ABSOLUTE: BASE_URLS.CARS_PAGE_BASE_URL,
  CARS_PAGE_RELATIVE: "/cars",

  TATA_COMPANY_OBJ: {
    TATA_PAGE_ABSOLUTE: BASE_URLS.TATA_PAGE_BASE_URL,
    TATA_PAGE_RELATIVE: "/cars/tata",
    TATA_SAFARI_ABSOLUTE_URL: `${BASE_URLS.TATA_PAGE_BASE_URL}/tata_safari`,
    TATA_SAFARI_RELATIVE_URL: "/cars/tata/tata_safari",
  },

  KIA_COMPANY_OBJ: {
    KIA_PAGE_ABSOLUTE: BASE_URLS.KIA_PAGE_BASE_URL,
    KIA_PAGE_RELATIVE: "/cars/kia",
    KIA_SELTOS_ABSOLUTE_URL: `${BASE_URLS.KIA_PAGE_BASE_URL}/kia_seltos`,
    KIA_SELTOS_RELATIVE_URL: "/cars/kia/kia_seltos",
  },
}

export const SEO_OBJ = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore the world of programming with Karunakar Patel, where we delve into the exciting landscape of programming knowledge. Here, you'll find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming. let's learn together step by step.",
    lastUpdateTime: "2023-10-20T19:07:55+00:00",
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: "image in here...!",
    featuredImageAltText: "a-person-with-computer",
  },

  // Cars HomePage with URL /cars
  CARS_PAGE: {
    absoluteURL: blogPostURLS.CARS_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CARS_PAGE_RELATIVE,
    title: "Cars page title",
    description: "cars page description",
    lastUpdateTime: "2023-10-20T19:07:55+00:00",
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: "image in here...!",
    featuredImageAltText: "a-person-with-computer",
  },

  //  Tata HomePage with URL /cars/tata
  TATA_HOMEPAGE: {
    absoluteURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_PAGE_RELATIVE,
    title: "TATA page title in here",
    description: " Tata page description",
    lastUpdateTime: "2023-10-20T19:07:55+00:00",
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: "image in here...!",
    featuredImageAltText: "a-person-with-computer",
    TATA_PAGES_OBJ: {
      TATA_SAFARI: {
        absoluteURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_SAFARI_ABSOLUTE_URL,
        relativeURL: blogPostURLS.TATA_COMPANY_OBJ.TATA_SAFARI_RELATIVE_URL,
        title: "Tata Safari URL in here",
        description: "Tata Safari Description in here...",
        publishedTime: "2023-10-20T19:07:55+00:00",
        lastUpdateTime: "2023-10-28T07:07:55+00:00",
        tags: [
          { tag: "Cars", href: `${blogPostURLS.CARS_PAGE_RELATIVE}` },
          { tag: "Tata", href: `${blogPostURLS.TATA_COMPANY_OBJ.TATA_PAGE_RELATIVE}` },
          { tag: "Tata Safari", href: `${blogPostURLS.TATA_COMPANY_OBJ.TATA_SAFARI_RELATIVE_URL}` },
        ],
        featuredImage: "image in here...!",
        featuredImageAltText: "a-person-with-computer",
      },
    },
  },

  //   Kia Automobiles with URL /cars/kia
  KIA_HOMEPAGE: {
    absoluteURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_PAGE_RELATIVE,
    title: "Kia Homepage title in here",
    description: "Kia page description",
    lastUpdateTime: "2023-10-20T19:07:55+00:00",
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: "image in here...!",
    featuredImageAltText: "a-person-with-computer",
    KIA_PAGES_OBJ: {
      KIA_SELTOS: {
        absoluteURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_SELTOS_ABSOLUTE_URL,
        relativeURL: blogPostURLS.KIA_COMPANY_OBJ.KIA_SELTOS_RELATIVE_URL,
        title: "Kia Seltos URL in here",
        description: "Kia Seltos Description in here...",
        publishedTime: "2023-10-20T19:07:55+00:00",
        lastUpdateTime: "2023-10-28T07:07:55+00:00",
        tags: [
          { tag: "Cars", href: `${blogPostURLS.CARS_PAGE_RELATIVE}` },
          { tag: "Kia", href: `${blogPostURLS.KIA_COMPANY_OBJ.KIA_PAGE_RELATIVE}` },
          { tag: "Kia Seltos", href: `${blogPostURLS.KIA_COMPANY_OBJ.KIA_SELTOS_RELATIVE_URL}` },
        ],
        featuredImage: "image in here...!",
        featuredImageAltText: "a-person-with-computer",
      },
    },
  },
}

export const blogPostsObj = [
  {
    id: 0,
    url: `${blogPostURLS.TATA_COMPANY_OBJ.TATA_SAFARI_RELATIVE_URL}`,
    title: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.title}`,
    description: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.description}`,
    lastUpdateTime: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.publishedTime}`,
    tags: SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.tags!,
    featuredImage: SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImage,
    featuredImageAltText: `${SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ.TATA_SAFARI.featuredImageAltText}`,
  },
  {
    id: 1,
    url: `${blogPostURLS.KIA_COMPANY_OBJ.KIA_SELTOS_RELATIVE_URL}`,
    title: `${SEO_OBJ.KIA_HOMEPAGE.KIA_PAGES_OBJ.KIA_SELTOS.title}`,
    description: `${SEO_OBJ.KIA_HOMEPAGE.KIA_PAGES_OBJ.KIA_SELTOS.description}`,
    lastUpdateTime: `${SEO_OBJ.KIA_HOMEPAGE.KIA_PAGES_OBJ.KIA_SELTOS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.KIA_HOMEPAGE.KIA_PAGES_OBJ.KIA_SELTOS.publishedTime}`,
    tags: SEO_OBJ.KIA_HOMEPAGE.KIA_PAGES_OBJ.KIA_SELTOS.tags!,
    featuredImage: SEO_OBJ.KIA_HOMEPAGE.KIA_PAGES_OBJ.KIA_SELTOS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.KIA_HOMEPAGE.KIA_PAGES_OBJ.KIA_SELTOS.featuredImageAltText}`,
  },
]
