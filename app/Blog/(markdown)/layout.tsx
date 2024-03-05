import Navigation from "@/components/Navigation";
import React from "react";

const MarkDownLayout = (props: any) => {
  return (
    <>
      {/* <Navigation /> */}
      <p style={{ color: "blue" }}>This is related to markdown Layout</p>
      <article className="p-7 m-auto  prose prose-stone shadow-2xl">{props.children}</article>
    </>
  );
};

export default MarkDownLayout;
