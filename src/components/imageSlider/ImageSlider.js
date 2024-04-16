import React, { useRef, useEffect, useState } from "react";
import "./ImageSlider.scss";
import { IconButton, Paper, Box, Drawer } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ImageSlider({ handleSliderClose, imageClicked, images, imageIndex }) {
  const [width, setWidth] = useState("");
  const [height, setheight] = useState("");
  const [index, setIndex] = useState(imageIndex);

  const modalRef = useRef();
  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleSliderClose();
    }
  };

  const nextImage = () => {
    if (index < images.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };
  const lastImage = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  useEffect(() => {
    const img = new Image();

    img.src = images[index].img;

    img.onload = () => {
      setWidth(img.width);
      setheight(img.height);
    };

    if (imageClicked) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [imageClicked, imageIndex, width, height, images, index]);
  return (
    <Paper
      id="image-modal"
      elevation={3}
      sx={{
        position: "fixed",
        zIndex: 2,
        width: "80%",
        height: "90vh",
        mt: {
          xs: width > height ? "10%" : "10%",
          md: width > height ? "1%" : "3%",
        },
        alignSelf: "center",
        display: "block",
        backgroundColor: "#bde8f1",
      }}
    >
      <div ref={modalRef}>
        <IconButton
          sx={{
            position: "absolute",
            right: "0",
          }}
          onClick={handleSliderClose}
        >
          <CancelIcon />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            left: "5%",
            top: "40%",
            width: "60px",
            height: "60px",
          }}
          onClick={lastImage}
        >
          <ArrowBackIosIcon sx={{ height: "100%", width: "100%" }} />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            left: "91%",
            top: "40%",
            width: "60px",
            height: "60px",
          }}
          onClick={nextImage}
        >
          <ArrowForwardIosIcon sx={{ height: "100%", width: "100%" }} />
        </IconButton>

        {width !== "" && height !== "" && (
          <Box
            component="img"
            src={images[index].img}
            sx={{
              objectPosition: "center",
              objectFit: "cover",

              width: {
                xs: "100%",
                sm: width > height ? "100%" : "auto",
              },
              height: {
                xs: "auto",
                sm: height >= width ? "90vh" : "auto",
              },
              mt: {
                xs: width > height ? "35%" : "0%",
                md: width > height ? "7%" : "0%",
                xl: width > height ? "2%" : "0%",
              },
            }}
          />
        )}
      </div>
    </Paper>
  );
}

export default ImageSlider;
