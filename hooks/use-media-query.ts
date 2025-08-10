import * as React from "react";

export function useMediaQuery({ query }: { query: number }) {
  const [mediaQuery, setMediaQuery] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${query - 1}px)`);
    const onChange = () => {
      setMediaQuery(window.innerWidth < query);
    };
    mql.addEventListener("change", onChange);
    setMediaQuery(window.innerWidth < query);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return !!mediaQuery;
}

