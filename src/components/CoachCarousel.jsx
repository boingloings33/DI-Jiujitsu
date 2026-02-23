import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Typography, Divider, Skeleton } from "@mui/material";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const CoachImage = ({ src, alt, imagePosition }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: { xs: "auto", md: "5 / 8" },
        overflow: "hidden",
      }}
    >
      {!isLoaded && (
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: 1,
            backgroundColor: "rgba(220, 217, 208, 0.35)",
            animationDuration: "0.5s",
          }}
        />
      )}
      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        sx={{
          height: { xs: "300px", md: "90%" },
          width: "101%",
          objectFit: "cover",
          objectPosition: {
            xs: imagePosition || "50% 20%",
            md: "center center",
          },
          mb: { xs: 1, md: 0 },
          opacity: isLoaded ? 1 : 0,
        }}
      />
    </Box>
  );
};

const CoachCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
      <Box
        className="embla__viewport"
        ref={emblaRef}
        sx={{ overflow: "hidden", height: { xs: "auto", md: 400 } }}
      >
        <Box
          className="embla__container"
          sx={{
            display: "flex",
            touchAction: "pan-y pinch-zoom",
            marginLeft: { xs: 0, md: "-1.5rem" },
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
                    order: { xs: 1, md: 0 },
                  }}
                >
                  <CoachImage
                    src={slide.image}
                    alt={slide.title}
                    imagePosition={slide.imagePosition}
                  />
                </Box>

                {/* Text column */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "flex-start", md: "center" },
                    py: { xs: 0, md: 4 },
                    textAlign: "left",
                    order: { xs: 0, md: 1 },
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
                      fontSize: { xs: "0.95rem", md: "0.95rem" },
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
          gridTemplateColumns: { xs: "auto 1fr auto", md: "auto 1fr" },
          justifyContent: "space-between",
          gap: { xs: "1rem", md: "1.2rem" },
          mt: { xs: 0, md: 4 },
          alignItems: "center",
        }}
      >
        <Box
          className="embla__buttons"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: "0.6rem",
            alignItems: "center",
            order: { xs: 1, md: 0 },
          }}
        >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </Box>
        </Box>

        <Box
          className="embla__dots"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            order: { xs: 2, md: 1 },
            gap: "0.4rem",
          }}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "block", md: "none" },
            order: 3,
          }}
        >
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>
      </Box>
    </Box>
  );
};

export default CoachCarousel;
