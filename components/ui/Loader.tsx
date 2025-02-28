"use client";
import { useState, useEffect } from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  const [loadingTime, setLoadingTime] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoadingTime(false);
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }, 500); // Match the transition duration
    }, 1000); // 1 second

    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    // Cleanup the timer and restore scrolling when the component unmounts
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {loadingTime && (
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-white z-20 transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Triangle
            visible={true}
            height="80"
            width="80"
            color="#0179FE" // Changed color to blue
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
};

export default Loader;
