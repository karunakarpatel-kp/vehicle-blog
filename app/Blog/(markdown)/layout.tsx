import Navigation from "@/components/Navigation";
import React from "react";

const MarkDownLayout = (props: any) => {
  return (
    <>
      {/* <Navigation /> */}
      <article className="p-7 mt-4 mb-4 m-auto prose prose-slate lg:prose-lg   prose-img:rounded-xl  min-h-full max-w-max sm:w-6/6 lg:w-3/6 ">
        {props.children}
      </article>
    </>
  );
};

export default MarkDownLayout;
