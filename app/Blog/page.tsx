import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is the Basic Description for the Blog Page",
};

const BlogPage = () => {
  return (
    <>
      <p>This is the New Page which is related to Blog Page</p>
    </>
  );
};

export default BlogPage;
