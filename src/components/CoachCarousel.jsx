import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography, Divider } from "@mui/material";
import { NextButton, PrevButton, usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) => Math.min(Math.max(number, min), max);

const CoachCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on("reinit", setTweenFactor)
      .on("reinit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slidefocus", tweenOpacity);
  }, [emblaApi, tweenOpacity, setTweenFactor]);

  return (
    <Box className="embla" sx={{ maxWidth: "100%", margin: "auto" }}>
      <Box className="embla__viewport" ref={emblaRef} sx={{ overflow: "hidden" }}>
        <Box
          className="embla__container"
          sx={{
            display: "flex",
            touchAction: "pan-y pinch-zoom",
            marginLeft: { xs: 0, md: "-1.5rem" },
            height: {
              xs: "auto",
              md: 460,
              lg: 520,
            },
          }}
        >
          {slides.map((slide, index) => (
            <Box
              className="embla__slide"
              key={index}
              sx={{
                flex: "0 0 100%",
                minWidth: 0,
                paddingLeft: { xs: 0, md: "1.5rem" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 4 },
                  alignItems: "stretch",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                {/* Image column */}
                <Box
                  sx={{
                    flex: { xs: "none", md: "0 0 40%" },
                    maxWidth: { xs: "100%", md: 320 },
                    width: { xs: "100%", md: "auto" },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: { xs: "16 / 9", md: "2 / 4" },
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component="img"
                      src={slide.image}
                      alt={slide.title}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: { xs: "50% 20%", md: "center center" },
                      }}
                    />
                  </Box>
                </Box>

                {/* Text column */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "flex-start", md: "center" },
                    py: { xs: 2, md: 4 },
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "text.primary",
                      mb: 2,
                    }}
                  >
                    {slide.title}
                  </Typography>

                  <Divider
                    sx={{
                      width: 64,
                      mb: 3,
                      borderColor: "text.secondary",
                      opacity: 0.4,
                      mr: "auto",
                    }}
                  />

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      whiteSpace: "pre-wrap",
                      fontSize: { md: "0.95rem" },
                      multiline: true,
                      mb: { xs: 0, md: 20, lg: 14 },
                    }}
                  >
                    {slide.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        className="embla__controls"
        sx={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          justifyContent: "space-between",
          gap: { xs: "1rem", md: "1.2rem" },
          mt: { xs: 3, md: 4 },
        }}
      >
        <Box
          className="embla__buttons"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "0.6rem",
            alignItems: "center",
          }}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>

        <Box
          className="embla__dots"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} onClick={() => onDotButtonClick(index)} selected={index === selectedIndex} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CoachCarousel;
