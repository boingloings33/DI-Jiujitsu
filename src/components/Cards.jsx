import { Box, Card, CardMedia, CardContent, Typography, Link } from "@mui/material";
import img from "../assets/card-2.jpg";
const cards = [
  {
    title: "Adult Jiu Jitsu",
    description:
      "Build confidence, fitness, and real-world self defense through structured training designed for all skill levels.",
    image: img,
    href: "/programs",
  },
  {
    title: "Kids Program",
    description:
      "Help your child develop discipline, coordination, and confidence in a fun, safe, and supportive environment.",
    image: img,
    href: "/programs",
  },
  {
    title: "Women’s Self Defense",
    description:
      "Learn practical techniques while building strength and awareness in a welcoming, empowering community.",
    image: img,
    href: "/programs",
  },
];

export default function PathsSection() {
  return (
    <Box sx={{ py: 6 }}>
      {/* Layout container (NO MUI Grid component) */}
      <Box
        sx={{
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, minmax(0, 1fr))",
          },
        }}
      >
        {cards.map((card, i) => (
          <Card
            key={i}
            sx={{
              height: "100%",
              borderRadius: 0,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minWidth: 0,

              // smooth baseline
              transition: "transform 220ms ease, box-shadow 220ms ease",
              boxShadow: 0,

              // hover effects
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
                cursor: "pointer",
              },

              // image zoom on hover
              "&:hover .cardMediaBg": {
                transform: "scale(1.05)",
              },

              // link/arrow nudge on hover
              "&:hover .cardCta": {
                transform: "translateX(4px)",
              },
            }}
          >
            <CardMedia
              component="div"
              sx={{
                height: 220,
                overflow: "hidden",
              }}
            >
              <Box
                className="cardMediaBg"
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 300ms ease",
                  willChange: "transform",
                }}
              />
            </CardMedia>

            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                backgroundColor: "backgroundAlt",
              }}
            >
              <Typography variant="h4" sx={{ mb: 1 }}>
                {card.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  overflowWrap: "anywhere",
                  wordBreak: "break-word",
                }}
              >
                {card.description}
              </Typography>

              <Link href={card.href} underline="none" sx={{ mt: "auto", width: "fit-content" }}>
                <Typography
                  variant="subtitle2"
                  className="cardCta"
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "transform 220ms ease, color 220ms ease",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Explore Path&nbsp;›
                </Typography>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
