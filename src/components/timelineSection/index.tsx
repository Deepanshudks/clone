import { Box, Container, Typography } from "@mui/material";

const TimelineSection = () => {
  const years = [
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
  ];

  return (
    <Box sx={{ py: 12, backgroundColor: "hsl(var(--background))" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            color: "hsl(var(--foreground))",
            mb: 8,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            fontWeight: 700,
          }}
        >
          The <span style={{ color: "hsl(var(--primary))" }}>appinventiv</span>{" "}
          Story
        </Typography>

        {/* Timeline */}
        <Box sx={{ position: "relative", mb: 8 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                height: 2,
                backgroundColor: "hsl(var(--muted))",
                zIndex: 0,
              },
            }}
          >
            {years.map((year, index) => (
              <Box
                key={year}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: index === 0 ? 16 : 12,
                    height: index === 0 ? 16 : 12,
                    borderRadius: "50%",
                    backgroundColor:
                      index === 0 ? "hsl(var(--primary))" : "hsl(var(--muted))",
                    mb: 2,
                  }}
                />
                <Typography
                  sx={{
                    color:
                      index === 0
                        ? "hsl(var(--foreground))"
                        : "hsl(var(--muted-foreground))",
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    fontWeight: index === 0 ? 600 : 400,
                  }}
                >
                  {year}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;
