import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
  // Always start false so server render and first client render agree
  // (avoids hydration mismatches). The real value is set in the effect.
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    const handleChange = () => setMatches(matchMedia.matches);

    // Set the real value on mount
    handleChange();

    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
