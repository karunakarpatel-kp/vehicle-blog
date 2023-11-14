import Paragraph from "@Components/Elements/Paragraph/Paragraph";
import { Box, Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import grillImage from "@TataImages/cocooned-safety-safari-2023.jpg";
import Typography from "@mui/material/Typography/Typography";

interface BlogPostRightImageProps {
  paragraphText: string;
  imageSrc: string | StaticImageData;
  imageAltText: string;
  imageAlignment: string;
}

const BlogPostRightImage = (props: BlogPostRightImageProps) => {
  const { paragraphText, imageSrc, imageAltText, imageAlignment } = props;
  return (
    <>
      <Grid
        container
        mb={2}
        sx={{
          border: { xs: "none", lg: "1px solid rgba(91, 98, 173, 0.2)" },
          borderRadius: 1,
        }}
        spacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
        // flexDirection={{ xs: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row" }}
        flexDirection={
          imageAlignment === "right"
            ? { xs: "column-reverse", sm: "column-reverse", md: "column-reverse", lg: "row" }
            : { xs: "row", sm: "row", md: "row", lg: "row" }
        }
      >
        {imageAlignment === "left" && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <Box position="relative" sx={{ width: "100%", height: "auto" }}>
              <Image src={imageSrc} alt={imageAltText} width={390} height={240} />
            </Box>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: { xs: "left", sm: "left", md: "left", lg: "center" },
          }}
        >
          {/* <Paragraph>{paragraphText}</Paragraph> */}
          <Typography variant="brandParagraph" p={{ xs: 0, sm: 0, md: 0, lg: 1 }}>
            {paragraphText}
          </Typography>
        </Grid>
        {imageAlignment === "right" && (
          <Grid item xs={12} sm={12} md={12} lg={6} mt={{ xs: 0, sm: 0, md: 0, lg: 0 }}>
            <Box position="relative" sx={{ width: "100%", height: "auto" }}>
              <Image src={imageSrc} alt={imageAltText} width={390} height={240} />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default BlogPostRightImage;
