"use client";
import React, { useState } from "react";

const TOC = (props: any) => {
  const [openTOC, setOpenTOC] = useState<boolean>(false);
  const onTOCClickHandler = () => {
    setOpenTOC(!openTOC);
  };

  const openTOCStyles = openTOC ? " h-72 transition-all duration-1000" : "transition-all duration-1000";
  return (
    <div
      className={`text-red-500 border border-black w-full cursor-pointer` + openTOCStyles}
      onClick={onTOCClickHandler}
    >
      {props.children}
    </div>
  );
};

export default TOC;
