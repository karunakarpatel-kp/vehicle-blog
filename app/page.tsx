import { SEO_OBJ, blogPostURLS, blogPostsObj } from "@/Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: SEO_OBJ.HOME_PAGE.title,
  description: "Simple Description",
};

export default function Home() {
  return (
    <>
      {blogPostsObj.map((singleBlogPost) => {
        return (
          <Link href={singleBlogPost.url} key={singleBlogPost.id} className="no-underline">
            <div
              key={singleBlogPost.id}
              className="w-2/6 border shadow-2xl mt-5 mb-5 m-auto p-5 no-underline hover:bg-slate-100"
            >
              <h1>{singleBlogPost.title}</h1>
              <p>{singleBlogPost.description}</p>
              <Image src={singleBlogPost.featuredImage} alt={singleBlogPost.featuredImageAltText} />
              <div>
                {singleBlogPost.tags.map((singleTag) => {
                  return (
                    <>
                      <div className="underline">{singleTag.tag}</div>
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
}
