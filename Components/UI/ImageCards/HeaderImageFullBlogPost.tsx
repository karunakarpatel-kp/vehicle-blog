import { Box } from "@mui/system";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface HeaderImageFullBlogPostProps {
  alt: string;
  image: StaticImageData;
}

const HeaderImageFullBlogPost = (props: HeaderImageFullBlogPostProps) => {
  const { alt, image } = props;
  return (
    <>
      <Box
        // width={990}
        height={450}
        bgcolor="#ECECEC"
        mt={2}
        mb={2}
        textAlign="center"
        position="relative"
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
        }}
      >
        <Image
          alt={alt}
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width : 1200px) 50vw, 33vw"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88h8AAu0B9XNPCQQAAAAASUVORK5CYII="
        />
      </Box>
    </>
  );
};

export default HeaderImageFullBlogPost;
