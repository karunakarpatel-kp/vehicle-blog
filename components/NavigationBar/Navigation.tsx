"use client";
import Link from "next/link";
import React from "react";
import Logo from "public/Logo.svg";
import Image from "next/image";

const Navigation = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState<boolean>(false);
  const onOpenClickHandler = () => {
    console.log(openMobileMenu, "OPEN");
    setOpenMobileMenu(true);
  };
  const onCloseClickHandler = () => {
    console.log(openMobileMenu, "CLOSE");
    setOpenMobileMenu(false);
  };
  return (
    <>
      <div
        className={
          !openMobileMenu
            ? "h-24  bg-slate-700 dark:bg-slate-900 dark:border-b dark:border-b-slate-800 grid grid-cols-12 items-center"
            : ""
        }
      >
        {/* Desktop */}
        <div className="hidden md:invisible md:flex col-span-1 border-0 border-white self-stretch justify-center items-center ">
          left
        </div>
        <div className="col-span-9 md:col-span-4 border-0 border-green-800">
          <h1 className="text-white font-semibold text-2xl p-4 md:p-0 after:content-['_↗']">Company Logo</h1>
        </div>
        <div className="hidden md:block col-span-6 border-0 border-purple-400">
          <ul className="list-none flex space-x-2 text-white justify-end">
            <li>
              <Link
                href="/"
                className=" text-white p-2 px-6 border no-underline rounded-md hover:bg-purple-500 hover:text-white ease-in-out after:content-['_↗']"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Blog/nextjs-installation"
                className=" text-white p-2 px-6 border no-underline rounded-md hover:bg-purple-500 hover:text-white ease-in-out"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className=" text-white p-2 px-6 border no-underline rounded-md hover:bg-purple-500 hover:text-white ease-in-out"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden border-0 col-span-3 flex justify-center">
          <button className="text-white bg-slate-500 py-1 px-4" onClick={onOpenClickHandler}>
            Open
          </button>
        </div>

        <div className="hidden md:invisible md:flex col-span-1 border border-white self-stretch justify-center items-center ">
          Right
        </div>
      </div>

      {/* Mobile */}

      <div
        className={
          openMobileMenu
            ? "mobile block md:block bg-slate-900 w-full h-screen p-0 m-0 fixed top-0 right-0 ease-in-out"
            : "hidden"
        }
      >
        <h1 className="text-white font-semibold  text-xl mt-2 p-3 ">Company Logo</h1>
        <div className={openMobileMenu ? "absolute right-5 top-5" : ""}>
          <button className="text-white bg-slate-500 px-9 py-1" onClick={onCloseClickHandler}>
            Close
          </button>
        </div>
        <ul className="list-none  text-white p-0 m-0">
          <li className="p-3 m-0">
            <Link href="/" className="border-b block no-underline text-white pb-2" onClick={onCloseClickHandler}>
              Home
            </Link>
          </li>
          <li className="p-3 m-0 -mt-2">
            <Link
              href="/Blog/nextjs-installation"
              className="border-b block no-underline text-white pb-2 m-0"
              onClick={onCloseClickHandler}
            >
              Blog
            </Link>
          </li>
          <li className="p-3 m-0 -mt-2">
            <Link href="/" className="border-b block no-underline text-white pb-2 m-0" onClick={onCloseClickHandler}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
