import React from 'react'
import {Box, Typography, Divider} from "@mui/material"
import { GameDesign } from "../../data/GameDesign";
import ProjectCards from '../ProjectCards/ProjectCards';

const GameDesignProjects = GameDesign;

function GameDesignSection() {
  return (
    <Box
      className="game-design"
      id="GameDesign"
      sx={{
        height: "45%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Coming Soon</h2>
      {/* <Box
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
            Game Design
          </Typography>
        </span>

        <Divider
          sx={{
            width: "30%",
          }}
        />
      </Box>
      <Box>
        <Box
          sx={{
            ml: "8%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {GameDesignProjects.map((project, index) => (
            <ProjectCards key={index} project={project} />
          ))}
        </Box>
      </Box> */}
    </Box>
  );
}

export default GameDesignSection