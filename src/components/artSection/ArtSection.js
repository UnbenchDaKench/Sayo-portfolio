import React from 'react'
import {Box, Typography, Divider} from "@mui/material"
import HorizontalGallery from '../imageList/horizontalGallery/HorizontalGallery';
import { Art } from "../../data/Art";

const ArtList = Art;

function ArtSection({ handleImageClicked }) {
  return (
    <Box
      className="art"
      id="Art"
      sx={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        mt: {
          xs: "200px",
          sm: "0",
        },
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
        />
        <span>
          <Typography variant="h4" sx={{ fontFamily: "Playfair Display" }}>
            Artwork
          </Typography>
        </span>

        <Divider
          sx={{
            width: "30%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Typography></Typography>
        <Box sx={{ ml: "8%" }}>
          <HorizontalGallery
            images={ArtList}
            handleImageClicked={handleImageClicked}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ArtSection