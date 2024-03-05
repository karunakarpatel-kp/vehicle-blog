import React from "react";

const Layout = (props: any) => {
  return (
    <>
      <p>This is the layout for simple-tech</p>
      {props.children}
    </>
  );
};

export default Layout;
