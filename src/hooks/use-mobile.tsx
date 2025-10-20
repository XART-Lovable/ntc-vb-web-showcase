import * as React from "react";
import { isBrowser } from "../lib/browser-utils";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Kontrola, zda jsme v prohlížeči, aby nedošlo k chybě při statickém generování
    if (!isBrowser) return;
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Výchozí hodnota pro server-side rendering je desktop
  return isBrowser ? !!isMobile : false;
}
