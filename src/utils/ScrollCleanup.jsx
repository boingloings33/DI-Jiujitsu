import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollCleanup() {
  const location = useLocation();

  useEffect(() => {
    // kill all ScrollTriggers on route change
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [location.pathname]);

  return null;
}
export default ScrollCleanup;
