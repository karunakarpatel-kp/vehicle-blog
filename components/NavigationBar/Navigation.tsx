import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className=" border w-full no-underline  border-black ">
      <ul className="list-none flex">
        <li className="col-start-2 border flex-1">
          <Link href="/" className="no-underline">
            Logo
          </Link>
        </li>
        <li className="col-start-2 border flex-1">
          <Link href="/" className="no-underline">
            Home
          </Link>
        </li>
        <li className="col-start-2 border flex-1">
          <Link href="/" className="no-underline">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
