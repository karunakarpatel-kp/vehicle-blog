import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className={
        "h-13  bg-slate-900 dark:bg-slate-900 dark:border-t dark:border-t-slate-700 grid grid-cols-12 items-center"
      }
    >
      {/* Desktop */}
      <div className="hidden md:invisible md:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
        left
      </div>
      <div className="col-span-9 md:col-span-4 border-0 border-green-800">
        <p className="text-white font-semibold text-base p-4 md:p-0 after:content-['_↗']">
          All Rights Reserved @Karunakar Patel
        </p>
      </div>
      <div className="hidden md:block col-span-6 border-0 border-purple-400">
        <ul className="list-none flex space-x-0 text-white justify-end">
          <li>
            <Link href="/" className=" text-white p-2 px-3 underline underline-offset-4 rounded-md ">
              Facebook
            </Link>
          </li>
          <li>
            <Link href="/" className=" text-white p-2 px-3 underline-offset-4 rounded-md ">
              Twitter
            </Link>
          </li>
          <li>
            <Link href="/" className=" text-white p-2 px-3 underline-offset-4 rounded-md ">
              Instagram
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:invisible md:flex col-span-1 border border-white self-stretch justify-center items-center ">
        Right
      </div>
    </div>
  );
};

export default Footer;
