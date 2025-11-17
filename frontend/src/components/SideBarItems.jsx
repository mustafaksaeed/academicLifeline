import Button from "@mui/material/Button";
import Box from "@mui/material/Box"; // Good for general div-like containers
import Typography from "@mui/material/Typography"; // Good for text/headings

const SideBarItems = () => {
  const sidebarItems = ["Dashboard", "Assignments", "Courses", "Calendar"];
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: "grey.50",
        height: "100%",
      }}
    >
      {/* Title/Header Styling */}
      <Typography
        variant="h6"
        sx={{
          mb: 3, // Margin Bottom: 3 units (24px by default)
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Deadline Tracker
      </Typography>

      {/* Button Container Styling */}
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
            variant="text" // 'text' or 'ghost' buttons look better in sidebars than 'contained'
            fullWidth // Makes the button take up 100% of the width
            sx={{
              justifyContent: "flex-start", // Align text to the left
              "&:hover": {
                backgroundColor: "grey", // Subtle hover effect
              },
              color: "text.primary", // Ensure text color is readable
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
