import { Box } from "@mui/material";
import { useState, useEffect } from "react";

const ReadingProgressBar = () => {
  const [width, setWidth] = useState(0);
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    setWidth(percent);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHeight);
    return () => window.removeEventListener("scroll", scrollHeight);
  });
  return (
    <>
      <Box
        sx={{
          width: `${width}%`,
          height: 2,
          backgroundColor: "white",
          position: "fixed",
          top: "62px",
          zIndex: 9999999,
          left: 0,
        }}
      ></Box>
    </>
  );
};
export default ReadingProgressBar;
