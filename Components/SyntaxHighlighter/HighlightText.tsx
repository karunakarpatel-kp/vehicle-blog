import React from "react";

interface highlightTextProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const HighlightText = (props: highlightTextProps) => {
  return (
    <>
      <strong className="customCode">{props.children}</strong>
    </>
  );
};

export default HighlightText;
