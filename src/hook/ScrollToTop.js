import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScroll } from "./MenuScrollHook";

export default function ScrollToTop() {
  const pathname = useLocation();
  const { setScroll } = useScroll();

  useEffect(() => {
    //in the browser chrome the path in the slidershow does not work so this might be a solution ???
    if (window.location.href.includes("#")) {
      //because by following the path the header hidden part of the content.
      setScroll(false);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, setScroll]);

  return null;
}
