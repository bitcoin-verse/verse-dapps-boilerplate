import React from "react";

interface VerseLogoProps {
  size?: string;
}

const VerseLogo: React.FC<VerseLogoProps> = ({ size = "100%" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="32.5" cy="31" rx="23.5" ry="23" fill="#ffffff"></ellipse>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.0001 64C49.673 64 64 49.6731 64 32C64 14.3269 49.673 0 32.0001 0C14.327 0 0 14.3269 0 32C0 49.6731 14.327 64 32.0001 64ZM31.9864 52.7372C24.3288 39.5157 12.3779 18.8812 12.3779 18.8812H29.403L32.8195 24.7778H22.7083L35.4625 46.7352C35.4625 46.7352 33.344 50.3935 31.9864 52.7372ZM37.0429 44.0067L51.5949 18.8812H44.6503L37.0324 32.0591L34.3546 27.445H27.4321L37.0429 44.0067Z"
        fill="#0085FF"
      ></path>
    </svg>
  );
};

export default VerseLogo;
