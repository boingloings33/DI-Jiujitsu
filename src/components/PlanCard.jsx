import {
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function PricingCard({ title, subtitle, price, bullets }) {
  return (
    <Card
      sx={{
        border: "1px solid #DCD9D0", // stroke color
        bgcolor: "#FCFBF9",
        mx: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        px: 3,
        py: 4,
        borderRadius: 0,
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 0 }}>
        {/* Title */}
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>

        {/* Subtitle */}
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {subtitle}
        </Typography>

        {/* Price */}
        <Box sx={{ display: "flex", alignItems: "baseline", mb: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 300 }}>
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
            / month
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Bullet list */}
        <List dense>
          {bullets.map((item, index) => (
            <ListItem key={index} disableGutters>
              <ListItemIcon sx={{ minWidth: 30 }}>
                <CheckIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </CardContent>

      {/* Join Us button */}
      <Box sx={{ mt: 2, textAlign: "center" }}>
        <Button variant="outlined" color="primary" fullWidth>
          Join Us
        </Button>
      </Box>
    </Card>
  );
}
