import React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import sampleImage from "../../../public/seo.jpg";
import Image, { StaticImageData } from "next/image";
import { themeColors } from "../../Theme/Theme";
import { Box } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

type ImageOnTopCardProps = {
  Title: string;
  Description: string;
  href: string;
  ImageSrc: StaticImageData;
  ImageAlt: string;
  tags: { tag: string; href: string }[];
};

const ImageOnTopCard: React.FC<ImageOnTopCardProps> = (props: ImageOnTopCardProps) => {
  const router = useRouter();

  const { Title, Description, href, ImageSrc, ImageAlt, tags } = props;

  const textTruncate = (Description: string) => {
    return <>{Description?.length > 100 ? `${Description.substring(0, 105)}.....` : Description} </>;
  };

  const onCardClickHandler = () => {
    router.push(href);
  };
  return (
    <>
      <Card sx={{ maxWidth: { xs: "100%", sm: "100%", md: 330, lg: 330 }, mb: { xs: 3 } }} elevation={0}>
        <CardActionArea onClick={onCardClickHandler}>
          <CardMedia sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}>
            <Image src={ImageSrc} alt={ImageAlt} width={330} height={212} />
          </CardMedia>
          <CardContent sx={{ padding: "5px 10px" }}>
            <Typography gutterBottom variant="brandTitle" fontWeight={600}>
              {Title}
            </Typography>
            <Typography variant="brandDescriptionParagraph">{textTruncate(Description)}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ flexWrap: "wrap", mt: -1 }}>
          {tags.length > 0 &&
            tags.map((singleTag, index) => {
              return (
                <Link href={singleTag.href} key={index}>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: themeColors.tagBgColor,
                      color: themeColors.tabtextColor,
                      fontWeight: "normal",
                      borderRadius: 13,
                      pt: 0,
                      pb: 0,
                      mt: 1,
                      "&:hover": {
                        backgroundColor: themeColors.tagBgColor,
                        textDecoration: "underline",
                      },
                    }}
                    disableElevation
                  >
                    {singleTag.tag}
                  </Button>
                </Link>
              );
            })}
        </CardActions>
      </Card>
    </>
  );
};

export default ImageOnTopCard;
