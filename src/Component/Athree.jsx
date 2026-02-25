import { Box, Grid, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupsIcon from "@mui/icons-material/Groups";
import HubIcon from "@mui/icons-material/Hub";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const stats = [
  { icon: <AttachMoneyIcon fontSize="large" />, value: "3", label: "Million Revenue in 2017" },
  { icon: <GroupsIcon fontSize="large" />, value: "24", label: "Colleagues & Counting" },
  { icon: <HubIcon fontSize="large" />, value: "260", label: "Successful Projects" },
  { icon: <WorkspacePremiumIcon fontSize="large" />, value: "19", label: "Years of Experience" },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        backgroundColor: "Tan", // Changed to blue for better contrast
        py: 6, // padding top & bottom instead of fixed height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",                   


      }}
              

    >
      <Grid container spacing={4} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index} textAlign="center">
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                backgroundColor: "Camel", // Slightly darker for contrast
                border: "4px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
                color: "white",
              }}
            >
              {stat.icon}
            </Box>

            <Typography variant="h4" fontWeight="bold" color="white">
              {stat.value}
            </Typography>

            <Typography variant="body2" color="white">
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
