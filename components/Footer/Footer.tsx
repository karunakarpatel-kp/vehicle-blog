import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        className={
          "h-17  bg-slate-900 dark:bg-slate-900 dark:border-t dark:border-t-slate-800 md:ml-0 pl-2 grid grid-cols-12 absolute bottom-0 w-full "
        }
      >
        {/* Desktop */}
        <div className="hidden md:invisible md:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          left
        </div>
        <div className="col-span-9 md:col-span-4 border-0 border-green-800 mt-1 ml-0 cursor-pointer text-white flex items-center font-semibold text-base">
          Karunakar Patel @All Rights Reserved
        </div>
        <div className="hidden md:block col-span-6 border-0 border-purple-400 m-0 p-0 items-center ">
          <ul className="list-none flex space-x-6 text-white justify-end mt-3">
            <li>
              <Link href="/" className="text-white">
                <FaFacebookSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white">
                <FaTwitterSquare size={25} />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <ImInstagram size={23} className="pt-0" />
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="text-white">
                <FaPinterestSquare size={23} className="pt-0" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:invisible md:flex col-span-1 border border-white self-stretch justify-center items-center ">
          Right
        </div>
      </div>
    </>
  );
};

export default Footer;
