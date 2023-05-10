"use client";

import React, { useState } from "react";
import { FaTwitter, FaInstagram, FaEdit } from "react-icons/fa";

export const SocialButtons = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [twitterUrl, setTwitterUrl] = useState("https://twitter.com/");
  const [instagramUrl, setInstagramUrl] = useState("https://instagram.com/");

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleEditTwitterUrl = () => {
    const newUrl = prompt("Please enter your Twitter URL", twitterUrl);
    if (newUrl !== null) {
      setTwitterUrl(newUrl);
    }
  };

  const handleEditInstagramUrl = () => {
    const newUrl = prompt("Please enter your Instagram URL", instagramUrl);
    if (newUrl !== null) {
      setInstagramUrl(newUrl);
    }
  };

  return (
    <>
      <div className="buttons">
        {/* ... your existing code ... */}
        <>
          <div>
            <div>
              <div className="komon-5-2">
                <div className="h-6 pl-3 mb-1 mt-4 md:mb-2 ">
                  <span className="bg-white opacity-80 text-dark-100 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="black"
                      aria-hidden="true"
                      className="mr-1 h-4 w-4"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                        clip-rule="evenodd"
                      ></path>{" "}
                      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z"></path>{" "}
                    </svg>
                    <p className="text-xs font-medium font-euclid-triangle text-slate-900">
                      Official community
                    </p>
                  </span>
                </div>
              </div>
            </div>
            {/* socials button */}
            <div>
              <div className="komon-5-1">
                <div className="h-0 pl-3 mt-0 mb-4 md:mb-4"></div>
              </div>
            </div>
          </div>
        </>

        <div>
          <div className="komon-5-1">
            <div className="h-0 pl-3 mt-0 mb-12 md:mb-14">
              <span
                className="bg-white opacity-80 text-black text-xs font-medium inline-flex items-center pl-1 pr-2.5 py-1 rounded-md mr-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                {/* ... your existing svg and p tags ... */}
                <span className="bg-white opacity-80 text-dark-100 text-xs font-medium inline-flex items-center pl-1 pr-2.5 py-1 rounded-md mr-2">
                  <svg
                    fill="#171810"
                    width="28px"
                    height="26px"
                    viewBox="0 0 36 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>link icon</title>
                    <path d="M17.6,24.32l-2.46,2.44a4,4,0,0,1-5.62,0,3.92,3.92,0,0,1,0-5.55l4.69-4.65a4,4,0,0,1,5.62,0,3.86,3.86,0,0,1,1,1.71A2,2,0,0,0,21.1,18l1.29-1.28a5.89,5.89,0,0,0-1.15-1.62,6,6,0,0,0-8.44,0L8.1,19.79a5.91,5.91,0,0,0,0,8.39,6,6,0,0,0,8.44,0l3.65-3.62c-.17,0-.33,0-.5,0A8,8,0,0,1,17.6,24.32Z"></path>
                    <path d="M28.61,7.82a6,6,0,0,0-8.44,0l-3.65,3.62c.17,0,.33,0,.49,0h0a8,8,0,0,1,2.1.28l2.46-2.44a4,4,0,0,1,5.62,0,3.92,3.92,0,0,1,0,5.55l-4.69,4.65a4,4,0,0,1-5.62,0,3.86,3.86,0,0,1-1-1.71,2,2,0,0,0-.28.23l-1.29,1.28a5.89,5.89,0,0,0,1.15,1.62,6,6,0,0,0,8.44,0l4.69-4.65a5.92,5.92,0,0,0,0-8.39Z"></path>
                    <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
                  </svg>
                  <p className="text-xs font-medium font-euclid-triangle text-black">
                    Link social Media accounts
                  </p>
                </span>
              </span>

              {dropdownVisible && (
                <div className="bg-white opacity-90 absolute mt-2 rounded-md shadow-lg w-40 z-100">
                  <div className="py-2">
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-xs items-center px-4 py-2 hover:bg-gray-100 text-slate-900"
                    >
                      <FaTwitter className="mr-2" />
                      Link Twitter
                      <FaEdit
                        className="ml-2 cursor-pointer"
                        onClick={handleEditTwitterUrl}
                      />
                    </a>
                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex text-xs items-center px-4 py-2 hover:bg-gray-100 text-slate-900"
                    >
                      <FaInstagram className="mr-2" />
                      Link Instagram
                      <FaEdit
                        className="ml-2 cursor-pointer"
                        onClick={handleEditInstagramUrl}
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
