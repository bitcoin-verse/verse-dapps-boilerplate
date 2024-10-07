import React, { type FunctionComponent, useEffect, useRef } from "react";
import lottie from "lottie-web";
import loaderAnimation from "./loader.json";

const LoaderDots: FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return undefined;

    lottie.loadAnimation({
      container: ref.current,
      name: "loader-dots",
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: loaderAnimation,
    });

    return () => {
      lottie.destroy("loader-dots");
    };
  }, [ref]);

  return (
    <div className="h-full w-full">
      <div
        className="m-auto flex h-full w-16 transform items-center justify-center"
        ref={ref}
      />
    </div>
  );
};

export default LoaderDots;
