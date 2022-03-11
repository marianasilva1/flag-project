import { useEffect, useState } from "react";

export function useScroll() {
  const [scroll, setScroll] = useState(true);

  let lastScroll = window.scrollY;
  const controlNavbar = () => {
    //>90 para o caso de ser um mini scroll a barra nao desaparecer logo
    if (window.scrollY > 90) {
      if (lastScroll > window.scrollY) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      lastScroll = window.scrollY;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return {
    scroll,
    setScroll,
  };
}
