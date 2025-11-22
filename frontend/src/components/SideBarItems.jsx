import Box from "@mui/material/Box"; // Good for general div-like containers
import Typography from "@mui/material/Typography"; // Good for text/headings
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const SideBarItems = () => {
  const sidebarItems = [
    "Dashboard",
    "Assignments",
    "Add Course",
    "Courses",
    "Calendar",
  ];
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "#ECF4E8",
        height: "100%",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Deadline Tracker
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {sidebarItems.map((info, index) => (
          <Button
            key={index}
            variant="text"
            fullWidth
            sx={{
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "grey",
              },
              color: "text.primary",
            }}
          >
            <Link
              to={`/${info.split("").join("").replace(" ", "").toLowerCase()}`}
            >
              {info}
            </Link>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SideBarItems;
