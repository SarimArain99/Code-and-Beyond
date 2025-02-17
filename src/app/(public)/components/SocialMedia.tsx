import React from "react";

function SocialMedia() {
  return (
    <footer className="flex justify-between items-center lg:mx-20 lg:flex-row flex-col pt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-2xl font-bold pb-5">Follow Us on:</h1>
        <div className="flex gap-x-5 items-center">
          <span>
            <svg
              className="h-10 w-10  text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </span>
          <span>
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </span>
          <span>
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </span>
          <span>
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 mb-10">
        <p className="uppercase mt-20 text-white lg:text-2xl text-lg font-bold sm:text-start text-center">
          Subscribe to Our Newsletter
        </p>
        <div className="flex gap-x-5 sm:flex-row flex-col gap-y-5 md:items-start items-center">
          <input
            type="email"
            placeholder="Email address"
            className="outline-none p-3 w-full"
          />
          <button className="uppercase bg-[#17b909] p-3 w-36 text-white">
            Submit
          </button>
        </div>
      </div>
    </footer>
  );
}

export default SocialMedia;
