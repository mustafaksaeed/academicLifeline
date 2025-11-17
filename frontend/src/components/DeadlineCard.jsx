import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

const DeadlineCard = ({ value, title }) => {
  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          borderRadius: "10px",
          width: "200px",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardActionArea>
          <Typography
            variant="subtitle1"
            component="div"
            align="center"
            style={{ margin: "1rem 1rem 0rem 1rem" }}
          >
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
