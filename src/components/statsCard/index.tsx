import { Box, Container, Paper, Typography } from "@mui/material";

const StatsCards = () => {
  const stats = [
    { number: "05", label: "Global Excellence Centers", color: "#E5D4FF" },
    { number: "50+", label: "Awards & Certifications", color: "#E8F5D0" },
    { number: "90%", label: "Returning Client Rate", color: "#D4F1F4" },
    { number: "94.7%", label: "Employee Happiness Index", color: "#FFF4D4" },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "hsl(var(--background))" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {stats.map((stat, index) => (
            <Paper
              key={index}
              sx={{
                p: 4,
                backgroundColor: stat.color,
                borderRadius: 4,
                textAlign: "center",
                height: "100%",
              }}
              elevation={0}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 600,
                  color: "#000",
                  mb: 1,
                  fontSize: { xs: "3rem", md: "4rem" },
                }}
              >
                {stat.number}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontSize: "1rem",
                }}
              >
                {stat.label}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StatsCards;
