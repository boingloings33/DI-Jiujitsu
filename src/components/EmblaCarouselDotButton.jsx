import React, { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const useDotButton = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on('reinit', onInit).on('reinit', onSelect).on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  };
};

export const DotButton = ({ selected, onClick }) => {
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        WebkitTapHighlightColor: 'transparent',
        WebkitAppearance: 'none',
        appearance: 'none',
        backgroundColor: 'transparent',
        touchAction: 'manipulation',
        display: 'inline-flex',
        textDecoration: 'none',
        cursor: 'pointer',
        border: 0,
        padding: 0,
        margin: 0,
        width: { xs: '2.2rem', md: '2.6rem' },
        height: { xs: '2.2rem', md: '2.6rem' },
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        position: 'relative',
        '&:before': {
          content: '""',
          width: { xs: '1.1rem', md: '1.4rem' },
          height: { xs: '1.1rem', md: '1.4rem' },
          borderRadius: '50%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: alpha('#113D5D', 0.3),
        },
        '&:after': {
          content: '""',
          width: { xs: '1.1rem', md: '1.4rem' },
          height: { xs: '1.1rem', md: '1.4rem' },
          borderRadius: '50%',
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'primary.main',
          opacity: selected ? 1 : 0,
          transition: 'opacity 0.3s ease',
        },
      }}
    />
  );
};
