import React from "react";
import "./HorizontalGallery.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: "flex",
//       flexDirection: "row",
//       flexWrap: "nowrap", // Ensures images stay in a single row
//       overflowX: "auto", // Enable horizontal scrolling if needed
//       "&::-webkit-scrollbar": {
//         display: "none", // Hide scrollbars
//       },
//     },
//     image: {
//       width: 150,
//       height: 150,
//       margin: theme.spacing(0.5),
//       objectFit: "cover",
//     },
//   }));

function HorizontalGallery({ images, handleImageClicked }) {
  // const classes = useStyles()

  return (
    <ImageList
      sx={{
        // flexWrap: "nowrap", // Ensures images stay in a single row
        // overflowX: "scroll", // Enable horizontal scrolling if needed
        overflow: "auto",
        "&::-webkit-scrollbar": {
          display: "none", // Hide scrollbars
        },
        width: "90%",
        borderRadius: "3%",
        mt:"100px"
      }}
      cols={1}
      rowHeight={250}
    >
      <ImageListItem sx={{ display: "flex", flexDirection: "row" }}>
        {images.map((item, index) => (
          <img
            key={item.img}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            sx={{
              width: 150,
              height: 150,
              margin: 0.5,
              objectFit: "cover",
            }}
            onClick={() => handleImageClicked(index)}
          />
        ))}
      </ImageListItem>
    </ImageList>
  );
}

export default HorizontalGallery;
