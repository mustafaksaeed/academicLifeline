import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

const DeadlineCard = ({ value, title }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Typography variant="subtitle1" component="div" align="center">
            {title}
          </Typography>
          <Typography gutterBottom variant="h3" component="div" align="center">
            {value}
          </Typography>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default DeadlineCard;

//total assignments, due this week, completed
