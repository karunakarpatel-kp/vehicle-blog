import { Metadata } from "next";

import React from "react";

const CustomMetaData = (props: Metadata) => {
  const metaDataObj = {
    title: "Next.js Application",
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: ["Vehiclemasti", "cars", "tata", "kia"],
    authors: [{ name: "Karunakar Patel", url: process.env.HOME_PAGE_BASE_URL }],
    creator: "Karunakar Patel",
    publisher: "Karunakar Patel",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
  return metaDataObj;
};

export default CustomMetaData;
