import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <>
      <Link href="/" className="underline mr-5 text-cyan-700">
        Home Page
      </Link>
      <Link href="/Blog" className="underline mr-5 text-cyan-700">
        Blog
      </Link>
      <Link href="/seo" className="underline mr-5 text-cyan-700">
        SEO{" "}
      </Link>
      <Link href="/Blog/blogPosts" className="underline mr-5 text-cyan-700">
        Blog Posts Page
      </Link>

      <Link href="/Blog/nextjs-installation" className="underline mr-5 text-cyan-700">
        Nextjs Installation
      </Link>

      <Link href="/Blog/nextjs-router" className="underline mr-5 text-cyan-700">
        Nextjs Router
      </Link>

      <Link href="/Blog/two" className="underline mr-5 text-cyan-700">
        Two Page
      </Link>
      <Link href="/Blog/maruti" className="underline mr-5 text-cyan-700">
        Maruti
      </Link>
      <Link href="/Blog/vw" className="underline mr-5 text-cyan-700">
        Volkswagen
      </Link>
    </>
  );
};

export default Navigation;
