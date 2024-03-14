import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const MarkDownLayout = (props: any) => {
  return (
    <>
      <section className="p-7 mt-10 mb-4 prose-lg prose-slate  md:prose-lg lg:prose-xl dark:prose-invert  lg:max-w-screen-lg m-auto min-h-full  prose-h1:leading-slug">
        {props.children}
      </section>
    </>
  );
};

export default MarkDownLayout;
