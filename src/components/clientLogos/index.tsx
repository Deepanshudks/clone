import { Box, Container, Typography } from "@mui/material";

const ClientLogos = () => {
  const clients = [
    "IKEA",
    "Google",
    "BCG",
    "KFC",
    "TGI FRIDAYS",
    "moo",
    "Krispy Kreme",
    "Hardees",
    "BAJAJ Allianz",
    "Domino's",
    "SUPERSHE",
    "WIMPY",
    "EMPIRE HOTELS",
    "jobget",
    "ASIAN BANK",
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
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            lineHeight: 1.3,
          }}
        >
          Our Efforts Have Transformed How You Experience These Global Leaders
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: 4,
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          {clients.map((client, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "hsl(var(--foreground))",
                fontSize: { xs: "1rem", md: "1.5rem" },
                fontWeight: 700,
                textAlign: "center",
                p: 2,
              }}
            >
              {client}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ClientLogos;
