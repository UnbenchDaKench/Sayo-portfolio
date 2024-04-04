import React from 'react'
import {Box, Typography} from "@mui/material"
import FadeInTransition from '../fadeIn/FadeInTransition';
import "./IntroSection.scss"

function IntroSection() {
  return (
    <Box
      className="intro"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        className="typewriter"
        sx={{
          width: {
            md: "550px",
            mt: "5%",
          },
        }}
      >
        <span className="intro-title">
          Hey there, I'm
          <span className="intro-name"> Sayo </span>
        </span>
        <span className="cursor--blinking">|</span>
      </Box>
      <FadeInTransition>
        <Box
          className="intro-paragraph"
          sx={{
            height: "250px",
            width: { xs: "340px", sm: "600px" },
            mb: {
              sm: "50px",
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat Alternates",
              fontSize: { xs: "20px", sm: "30px" },
            }}
          >
            I'm a game designer and artist currently based in Oakville, Ontario.
            I have a passion for creating things and I hope that shines through
            this portfolio!
          </Typography>
        </Box>
      </FadeInTransition>
    </Box>
  );
}

export default IntroSection