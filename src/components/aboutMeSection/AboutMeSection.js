import React from 'react'
import {Box, Typography, Divider} from "@mui/material"
import ProfilePicture from "../../images/profilePicture/profile-picture.jpg";
import SkillsList from "../../components/skills/SkillsList";
import FadeInOnScroll from "../fadeInOnScroll/FadeInOnScroll";

function AboutMeSection() {
  return (
    <Box
      className="about-me"
      id="About"
      sx={{
        height: "700px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          ml: "8%",
        }}
        className="section-header"
      >
        <Divider
          sx={
            {
              // width: "30%",
            }
          }
        />
        <span>
          <Typography variant="h4" sx={{ fontFamily: "Playfair Display" }}>
            About Me
          </Typography>
        </span>

        <Divider
          sx={{
            width: "30%",
          }}
        />
      </Box>
      <Box
        className="about-me-container"
        sx={{
          display: "flex",
          height: "90%",
          width: "100%",
          justifyContent: { sm: "center" },
          alignItems: { xs: "center" },
          // justifyContent: "space-between",
          mt: "0",
          mb: "6%",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          pt: {
            xs: "80px",
            sm: "0",
          },
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: "30%", sm: "auto" },
            height: { xs: "auto", sm: "50%" },
            objectFit: "cover",
            objectPosition: "center",
            ml: "1%",
            borderRadius: "10%",
          }}
          src={ProfilePicture}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { sm: "60%" },
          }}
        >
          <Typography
            sx={{
              width: { xs: "90%", sm: "100%" },
              fontSize: {
                xs: "15px",
                sm: "15px",
                md: "20px",
              },
              textAlign: "left",
              ml: {
                xs: "15px",
                md: "5%",
              },
              fontFamily: "Montserrat Alternates",
            }}
          >
            I’m currently in Sheridan College for the Honours Bachelor of Game
            Design Program. I’ve always loved playing video games and designing
            and making things that can evoke an emotion in people. Whether that
            be art, jewelry, a game, or a bookmark, I’ve always just loved
            making things that can leave an impact.
          </Typography>
          <br></br>
          <Typography
            sx={{
              width: { xs: "90%", sm: "100%" },
              fontSize: {
                xs: "15px",
                sm: "15px",
                md: "20px",
              },
              textAlign: "left",
              ml: {
                xs: "15px",
                md: "5%",
              },
              fontFamily: "Montserrat Alternates",
            }}
          >
            Here are some of the techonologies I am skilled in using:
          </Typography>
          <FadeInOnScroll>
            <SkillsList />
          </FadeInOnScroll>

          <Typography
            sx={{
              width: { xs: "90%", sm: "100%" },
              fontSize: {
                xs: "15px",
                sm: "15px",
                md: "20px",
              },
              textAlign: "left",
              ml: {
                xs: "15px",
                md: "5%",
              },
              fontFamily: "Montserrat Alternates",
            }}
          >
            When I am not working on projects, I enjoy playing soccer (both
            indoor and outdoor) and I like to read books and write stories.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMeSection