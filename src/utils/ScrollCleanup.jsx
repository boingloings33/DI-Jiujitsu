import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollCleanup() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // kill all ScrollTriggers on route change
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [location.pathname]);

  return null;
}
export default ScrollCleanup;
