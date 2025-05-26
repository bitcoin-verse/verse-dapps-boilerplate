import React from "react";

interface LoaderIconProps {
  size?: string | number;
}

const LoaderIcon: React.FC<LoaderIconProps> = ({ size = 16 }) => {
  return (
    <svg
      className={`h-${size} w-${size} animate-rotate`}
      data-icon="loader"
      viewBox="0 0 16 16"
      fill="none"
      width={size}
      height={size}
    >
      <rect width="300" height="100" fill="#0a0a2c" />
      <circle
        className="rotate"
        cx="8"
        cy="8"
        r="7"
        style={{ stroke: "url(#Pattern)" }}
        strokeWidth="2"
        transform-origin="8 8"
      />
      <path
        className="rotate"
        transform-origin="8 8"
        d="M9 15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15C7 14.4477 7.44772 14 8 14C8.55228 14 9 14.4477 9 15Z"
        fill="url(#dot)"
      />
      <defs>
        <linearGradient
          id="dot"
          x1="9"
          y1="15"
          x2="8"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8698B1" />
          <stop offset="1" stopColor="#8597B0" />
        </linearGradient>
        <linearGradient id="Gradient1" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#454E5B" />
          <stop offset="100%" stopColor="#0a0a2c" />
        </linearGradient>
        <linearGradient id="Gradient2" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#454E5B" />
          <stop offset="100%" stopColor="#8597B0" />
        </linearGradient>
        <pattern
          id="Pattern"
          x="0"
          y="0"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <g transform="rotate(0, 8, 8)">
            <rect
              shapeRendering="crispEdges"
              x="0"
              y="0"
              width="8"
              height="16"
              fill="url(#Gradient1)"
            />
            <rect
              shapeRendering="crispEdges"
              x="8"
              y="0"
              width="8"
              height="16"
              fill="url(#Gradient2)"
            />
          </g>
        </pattern>
      </defs>
    </svg>
  );
};

export default LoaderIcon;
