import Navigation from "@/components/Navigation";
import React from "react";

interface SEOLayoutProps {
  children: React.ReactNode;
}

const SEOLayoutPage = (props: SEOLayoutProps) => {
  return (
    <>
      {/* <Navigation /> */}
      <p>This is the Custom Layout For SEO Related Pages</p>
      {props.children}
    </>
  );
};

export default SEOLayoutPage;
