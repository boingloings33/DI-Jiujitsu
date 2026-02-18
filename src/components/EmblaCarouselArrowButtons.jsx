import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reinit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = ({ disabled, onClick }) => {
  return (
    <Box
      component="button"
      onClick={onClick}
      disabled={disabled}
      sx={{
        WebkitTapHighlightColor: "transparent",
        WebkitAppearance: "none",
        appearance: "none",
        backgroundColor: "transparent",
        touchAction: "manipulation",
        display: "inline-flex",
        textDecoration: "none",
        cursor: disabled ? "default" : "pointer",
        border: 0,
        padding: 0,
        margin: 0,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: disabled ? alpha("#113D5D", 0.3) : "primary.main",
        width: { xs: "3rem", md: "3.2rem" },
        height: { xs: "3rem", md: "3.2rem" },
        zIndex: 1,
        borderRadius: 0, // Sharp edges
        color: disabled ? alpha("#113D5D", 0.3) : "primary.main",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: disabled ? "transparent" : alpha("#113D5D", 0.05),
          transform: disabled ? "none" : "scale(1.1)",
        },
        "&:active": {
          transform: disabled ? "none" : "scale(0.95)",
          boxShadow: disabled ? "none" : `inset 0 2px 4px ${alpha("#000", 0.2)}`,
        },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 532 532"
        sx={{
          width: "35%",
          height: "35%",
        }}
      >
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </Box>
    </Box>
  );
};

export const NextButton = ({ disabled, onClick }) => {
  return (
    <Box
      component="button"
      onClick={onClick}
      disabled={disabled}
      sx={{
        WebkitTapHighlightColor: "transparent",
        WebkitAppearance: "none",
        appearance: "none",
        backgroundColor: "transparent",
        touchAction: "manipulation",
        display: "inline-flex",
        textDecoration: "none",
        cursor: disabled ? "default" : "pointer",
        border: 0,
        padding: 0,
        margin: 0,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: disabled ? alpha("#113D5D", 0.3) : "primary.main",
        width: { xs: "3rem", md: "3.2rem" },
        height: { xs: "3rem", md: "3.2rem" },
        zIndex: 1,
        borderRadius: 0, // Sharp edges
        color: disabled ? alpha("#113D5D", 0.3) : "primary.main",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: disabled ? "transparent" : alpha("#113D5D", 0.05),
          transform: disabled ? "none" : "scale(1.1)",
        },
        "&:active": {
          transform: disabled ? "none" : "scale(0.95)",
          boxShadow: disabled ? "none" : `inset 0 2px 4px ${alpha("#000", 0.2)}`,
        },
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 532 532"
        sx={{
          width: "35%",
          height: "35%",
        }}
      >
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </Box>
    </Box>
  );
};
