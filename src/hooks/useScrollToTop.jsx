import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This is a custom hook that will scroll to the top of the page when the route changes
function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default useScrollToTop;
