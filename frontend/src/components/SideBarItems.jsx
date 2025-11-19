import Button from "@mui/material/Button";
import Box from "@mui/material/Box"; // Good for general div-like containers
import Typography from "@mui/material/Typography"; // Good for text/headings

const SideBarItems = () => {
  const sidebarItems = ["Dashboard", "Assignments", "Courses", "Calendar"];
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
        {sidebarItems.map((info) => (
          <Button
            key={info}
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
            {info}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default SideBarItems;
