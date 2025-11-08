import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediately scroll to top on route change
    window.scrollTo(0, 0);
    
    // Also use scrollTo with smooth behavior as fallback
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto' // Use 'auto' for instant scroll
      });
    }, 0);
  }, [pathname]);

  // Handle initial page load/refresh
  useEffect(() => {
    // Prevent scroll restoration on page load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Ensure page starts at top on initial load
    window.scrollTo(0, 0);
    
    // Additional check after a short delay to handle any async content
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default ScrollToTop;

