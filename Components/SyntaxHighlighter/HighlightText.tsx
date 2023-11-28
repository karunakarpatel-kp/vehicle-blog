import React from "react";

interface highlightTextProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export const HighlightText = (props: highlightTextProps) => {
  return (
    <>
      <strong className="customCode">{props.children}</strong>
    </>
  );
};
