"use client";
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@Components/NavigationBar/Navigation";
import { useState } from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const onDarkModeBtnClickHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <html lang="en" className={darkMode ? "dark transition-colors duration-100" : "transition-all duration-300"}>
      <body className=" bg-white dark:bg-slate-900 dark:prose-invert prose prose-stone min-h-screen max-w-full">
        <Navigation />
        <header>{/* Header Goes Here */}</header>
        <main className="border-0 border-white grid grid-cols-12">
          <section className="hidden md:invisible md:block md:col-span-1 border-2 border-green-800">One</section>
          <section className="col-span-12 md:col-span-10 border-0 border-red-500 m-auto w-full">
            <article>{props.children}</article>
          </section>
          <section className="hidden md:col-span-1 md:block md:invisible border border-slate-500">Two</section>
        </main>
        <section>
          <div
            className="darkMode fixed bottom-10 right-0 border bg-black text-white border-slate-700 p-2 px-4 cursor-pointer rounded-s-2xl dark:bg-white dark:text-black shadow-inner"
            onClick={onDarkModeBtnClickHandler}
          >
            {!darkMode ? "DRK" : "LHT"}
          </div>
        </section>
        <footer>{/* Footer Goes Here */}</footer>
      </body>
    </html>
  );
};

export default RootLayout;
