"use client";
import React from "react";
import HeadingText from "../Text/HeadingText";
import Image from "next/image";

const ShareSvg = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" />
      <path
        d="M12 14.6667C11.4444 14.6667 10.9722 14.4723 10.5833 14.0834C10.1944 13.6945 10 13.2223 10 12.6667C10 12.5889 10.0056 12.5084 10.0167 12.425C10.0278 12.3417 10.0444 12.2667 10.0667 12.2L5.36667 9.46671C5.17778 9.63337 4.96667 9.76393 4.73333 9.85837C4.5 9.95282 4.25556 10 4 10C3.44444 10 2.97222 9.8056 2.58333 9.41671C2.19444 9.02782 2 8.5556 2 8.00004C2 7.44449 2.19444 6.97226 2.58333 6.58337C2.97222 6.19449 3.44444 6.00004 4 6.00004C4.25556 6.00004 4.5 6.04726 4.73333 6.14171C4.96667 6.23615 5.17778 6.36671 5.36667 6.53337L10.0667 3.80004C10.0444 3.73337 10.0278 3.65837 10.0167 3.57504C10.0056 3.49171 10 3.41115 10 3.33337C10 2.77782 10.1944 2.3056 10.5833 1.91671C10.9722 1.52782 11.4444 1.33337 12 1.33337C12.5556 1.33337 13.0278 1.52782 13.4167 1.91671C13.8056 2.3056 14 2.77782 14 3.33337C14 3.88893 13.8056 4.36115 13.4167 4.75004C13.0278 5.13893 12.5556 5.33337 12 5.33337C11.7444 5.33337 11.5 5.28615 11.2667 5.19171C11.0333 5.09726 10.8222 4.96671 10.6333 4.80004L5.93333 7.53337C5.95556 7.60004 5.97222 7.67504 5.98333 7.75837C5.99444 7.84171 6 7.92226 6 8.00004C6 8.07782 5.99444 8.15837 5.98333 8.24171C5.97222 8.32504 5.95556 8.40004 5.93333 8.46671L10.6333 11.2C10.8222 11.0334 11.0333 10.9028 11.2667 10.8084C11.5 10.7139 11.7444 10.6667 12 10.6667C12.5556 10.6667 13.0278 10.8612 13.4167 11.25C13.8056 11.6389 14 12.1112 14 12.6667C14 13.2223 13.8056 13.6945 13.4167 14.0834C13.0278 14.4723 12.5556 14.6667 12 14.6667ZM12 4.00004C12.1889 4.00004 12.3472 3.93615 12.475 3.80837C12.6028 3.6806 12.6667 3.52226 12.6667 3.33337C12.6667 3.14449 12.6028 2.98615 12.475 2.85837C12.3472 2.7306 12.1889 2.66671 12 2.66671C11.8111 2.66671 11.6528 2.7306 11.525 2.85837C11.3972 2.98615 11.3333 3.14449 11.3333 3.33337C11.3333 3.52226 11.3972 3.6806 11.525 3.80837C11.6528 3.93615 11.8111 4.00004 12 4.00004ZM4 8.66671C4.18889 8.66671 4.34722 8.60282 4.475 8.47504C4.60278 8.34726 4.66667 8.18893 4.66667 8.00004C4.66667 7.81115 4.60278 7.65282 4.475 7.52504C4.34722 7.39726 4.18889 7.33337 4 7.33337C3.81111 7.33337 3.65278 7.39726 3.525 7.52504C3.39722 7.65282 3.33333 7.81115 3.33333 8.00004C3.33333 8.18893 3.39722 8.34726 3.525 8.47504C3.65278 8.60282 3.81111 8.66671 4 8.66671ZM12 13.3334C12.1889 13.3334 12.3472 13.2695 12.475 13.1417C12.6028 13.0139 12.6667 12.8556 12.6667 12.6667C12.6667 12.4778 12.6028 12.3195 12.475 12.1917C12.3472 12.0639 12.1889 12 12 12C11.8111 12 11.6528 12.0639 11.525 12.1917C11.3972 12.3195 11.3333 12.4778 11.3333 12.6667C11.3333 12.8556 11.3972 13.0139 11.525 13.1417C11.6528 13.2695 11.8111 13.3334 12 13.3334Z"
        fill="#1D1B20"
      />
    </svg>
  );
};
const shareContent = async () => {
  const imageFile = await fetch("/og-image.jpg").then((res) => res.blob()); // Replace with your image URL
  const file = new File([imageFile], "image.jpg", { type: "image/jpeg" }); // Create a File object

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Master Baker Studio!",
        text: "Hey I found donuts for you!",
        url: window.location.href, // Share the current page URL
        files: [file], // Include the image file
      });
      console.log("Content shared successfully!");
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  } else {
    console.log("Web Share API is not supported in this browser.");
  }
};
const Header = () => {
  return (
    <div className="bg-[#FFD9CE]">
      <div className="flex  absolute w-full px-3 py-1 justify-between items-center">
        <Image src={"/master-baker.svg"} width={150} height={200} alt="" />
        <button
          onClick={shareContent}
          className="bg-[#FFDE11]  cursor-pointer  rounded-full p-2"
        >
          <ShareSvg />
        </button>
      </div>

      <Image
        className="w-full"
        priority
        src={"/chocolate-drop.svg"}
        alt=""
        width={400}
        height={400}
      />
    </div>
  );
};

export default Header;
