import { useEffect, useState } from "react";

/** True when the user prefers reduced motion (SSR-safe: false until mounted). */
const usePrefersReducedMotion = (): boolean => {
  const [reduced, setReduced] = useState<boolean>(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
};

export default usePrefersReducedMotion;
