import React from "react";

const MarkDownLayout = (props: any) => {
  return (
    <section className="p-7 mt-10 mb-4 prose-md prose-slate md:prose-lg lg:prose-xl dark:prose-invert  lg:max-w-screen-lg m-auto min-h-full shadow-lg prose-h1:leading-slug">
      {props.children}
    </section>
  );
};

export default MarkDownLayout;
