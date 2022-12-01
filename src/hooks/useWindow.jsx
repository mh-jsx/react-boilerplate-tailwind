import { useEffect, useState } from "react";

// This is a custom hook that will return the window width.
export const useWindowHeight = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerHeight);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerHeight);
        };

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowWidth;
};


// This is a custom hook that will return the window width.
const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return windowWidth;
};

export default useWindowWidth;
