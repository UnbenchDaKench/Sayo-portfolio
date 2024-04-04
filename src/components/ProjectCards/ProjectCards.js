import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function ProjectCards({ project }) {
  return (
    <Card sx={{ width: "35%", mr: "2%", mt: "2%", backgroundColor: "#d9b08c" }}>
      <CardHeader
        title={project.title}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{
          objectPosition: "center",
          objectFi: "cover",
        }}
        image={project.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.shortDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProjectCards;
