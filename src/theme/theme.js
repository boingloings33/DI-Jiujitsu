// src/theme/theme.js
import { createTheme, alpha } from "@mui/material/styles";
const CINZEL = '"Cinzel", serif';
const LATO = '"Lato", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';
const BRAND = {
  primary: "#113D5D",
  secondary: "#006255",
  background: "#F9F7F2",
  backgroundAlt: "#FAF8F2",
  stroke: "rgba(220, 217, 208, 0.5)",
  textPrimary: "#113D5D",
  textSecondary: "#666666",
  textTertiary: "#F7F7F7",
  textGreen: "#006255",
  textFooterAlt: "#B3BFC5",
};

const TOKENS = {
  divider: BRAND.stroke,
  actionHover: alpha(BRAND.primary, 0.06),
  actionSelected: alpha(BRAND.primary, 0.1),
  focusRing: alpha(BRAND.secondary, 0.28),
};

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: { main: BRAND.primary },
    secondary: { main: BRAND.secondary },

    background: {
      default: BRAND.background,
      paper: BRAND.backgroundAlt,
    },

    text: {
      primary: BRAND.textPrimary,
      secondary: BRAND.textSecondary,
      tertiary: BRAND.textTertiary,
      green: BRAND.textGreen,
      footerAlt: BRAND.textFooterAlt,
    },

    divider: TOKENS.divider,

    success: { main: BRAND.secondary },
  },

  typography: {
    h1: {
      fontFamily: CINZEL,
      fontWeight: "bold",
      fontSize: "72px",
      lineHeight: 1.25,
      color: BRAND.textTertiary,
    },
    h2: {
      fontFamily: CINZEL,
      fontWeight: "bold",
      fontSize: "48px",
      lineHeight: 1.25,
    },

    // BODY / PARAGRAPHS (Lato Light 20)
    body1: {
      fontFamily: LATO,
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: 1.6,
    },

    // CARD DESCRIPTION (Lato Reg 14) + Footer nav (Lato reg 14)
    body2: {
      fontFamily: LATO,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.55,
    },

    // HERO PRE-TITLE (Lato Reg 16)
    subtitle1: {
      fontFamily: LATO,
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.4,
      letterSpacing: "0.6px",
      textTransform: "uppercase",
    },

    // SECTION-CONTENT PRE-TITLE (Lato Bold 12)
    subtitle2: {
      fontFamily: LATO,
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: 1.4,
      letterSpacing: "1px",
      textTransform: "uppercase",
    },

    // Buttons generally (keep your no-uppercase preference)
    button: {
      fontFamily: LATO,
      fontWeight: 700,
      textTransform: "none",
    },

    // ---- Custom variants (non-standard but super useful) ----
    navbarLink: {
      fontFamily: LATO,
      fontWeight: "regular",
      fontSize: "14px",
      lineHeight: 20,
      letterSpacing: "1.4px",
    },

    heroSubheader: {
      fontFamily: LATO,
      fontWeight: 300,
      fontSize: "20px",
      lineHeight: 1.55,
    },

    cardLink: {
      fontFamily: LATO,
      fontWeight: 700,
      fontSize: "12px",
      lineHeight: 1.4,
      letterSpacing: "0.6px",
      textTransform: "uppercase",
    },

    footerAlt: {
      fontFamily: LATO,
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: 1.4,
    },
    footerSubtitle: {
      fontFamily: CINZEL,
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: 1.4,
      letterSpacing: "1.8px",
      color: BRAND.textTertiary,
    },

    footerNav: {
      fontFamily: LATO,
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: 1.4,
      letterSpacing: "1.8px",
      color: BRAND.textTertiary,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: BRAND.background,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${TOKENS.divider}`,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          border: `1px solid ${TOKENS.divider}`,
          boxShadow: "none",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          paddingInline: 16,
          paddingBlock: 4,
          fontWeight: 400,
          textTransform: "uppercase",
        },
        containedPrimary: {
          backgroundColor: BRAND.primary,
          color: BRAND.textTertiary,
          "&:hover": {},
        },
        outlined: {
          borderColor: alpha(BRAND.primary, 1),
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: alpha(BRAND.primary, 0.45),
            backgroundColor: TOKENS.actionHover,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: BRAND.backgroundAlt,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: TOKENS.divider,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(BRAND.primary, 0.35),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: BRAND.secondary,
            borderWidth: 2,
          },
        },
        input: {
          paddingBlock: 12,
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: BRAND.textSecondary,
          "&.Mui-focused": {
            color: BRAND.secondary,
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: TOKENS.divider,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: BRAND.primary,
          color: BRAND.textTertiary,
          borderRadius: 10,
        },
      },
    },
  },
});

theme.typography.navbarLink &&
  (theme.components = {
    ...theme.components,
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          navbarLink: "span",
          heroSubheader: "p",
          cardLink: "span",
          footerAlt: "p",
        },
      },
    },
  });

export default theme;
