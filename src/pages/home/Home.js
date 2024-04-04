import {
  Box,
  Divider,
  Typography,
  List,
  ListItem,
  SvgIcon,
} from "@mui/material";
import React, { useState, useRef } from "react";
import "./Home.scss";
import "../../fonts.scss";
import FadeInOnScroll from "../../components/fadeInOnScroll/FadeInOnScroll";
import HorizontalGallery from "../../components/imageList/horizontalGallery/HorizontalGallery";
import { Art } from "../../data/Art";
import { GameDesign } from "../../data/GameDesign";
import ProjectCards from "../../components/ProjectCards/ProjectCards";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import figma from "../../images/icons/figma.svg";
import HomeAnimation from "../../images/gif/gear-to-controller.gif";
import IntroSection from "../../components/introSection/IntroSection";
import AboutMeSection from "../../components/aboutMeSection/AboutMeSection";
import ArtSection from "../../components/artSection/ArtSection";
import GameDesignSection from "../../components/gameDesignSection/GameDesignSection";

const ArtList = Art;
const GameDesignProjects = GameDesign;

function Home() {
  const [imageClicked, setImageClicked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef(null);
  const handleImageClicked = (index) => {
    setImageClicked(true);
    setImageIndex(index);
    console.log(index);
  };
  const handleSliderClose = () => {
    setImageClicked(false);
  };
  return (
    <Box
      className="home-page"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        id="Home"
        component="img"
        src={HomeAnimation}
        sx={{
          height: "500px",
          width: "500px",
          objectFit: "cover",
          // objectPosition: "center",
          paddingTop: { xs: "80px", sm: "20px" },
          marginBottom: "0px",
          alignSelf: "center",
        }}
      ></Box>
      {imageClicked && (
        <ImageSlider
          handleImageClicked={handleImageClicked}
          handleSliderClose={handleSliderClose}
          imageClicked={imageClicked}
          images={ArtList}
          imageIndex={imageIndex}
        />
      )}
      <IntroSection />
      <FadeInOnScroll>
        <AboutMeSection />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <ArtSection handleImageClicked={handleImageClicked} />
      </FadeInOnScroll>
      <FadeInOnScroll>
        <GameDesignSection />
      </FadeInOnScroll>
    </Box>
  );
}

export default Home;
