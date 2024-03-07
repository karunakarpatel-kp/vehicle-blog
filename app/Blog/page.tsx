import { blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "This is the Basic Description for the Blog Page",
};

const BlogPage = () => {
  return (
    <>
      {blogPostsObj.map((singleBlogPost) => {
        return (
          <Link href={singleBlogPost.url} key={singleBlogPost.id}>
            <div key={singleBlogPost.id} className="w-2/6 border shadow-2xl mt-5 mb-5 m-auto p-5">
              <h1>{singleBlogPost.title}</h1>
              <p>{singleBlogPost.description}</p>
              <Image src={singleBlogPost.featuredImage} alt={singleBlogPost.featuredImageAltText} />
              <div>
                {singleBlogPost.tags.map((singleTag) => {
                  return (
                    <>
                      <div>{singleTag.tag}</div>
                    </>
                  );
                })}
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BlogPage;
