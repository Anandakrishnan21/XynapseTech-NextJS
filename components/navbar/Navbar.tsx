"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { ModeToggle } from "../mode-toggle";
export default function Navbar() {
  const [isNavShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const setShadow = () => {
      if (window.pageYOffset > 0) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", setShadow);
    return () => {
      window.removeEventListener("scroll", setShadow);
    };
  }, []);

  return (
    <>
      <header className="w-full transition-all fixed top-0 bg-white dark:bg-slate-950">
        <nav
          className={`h-full flex flex-row items-center justify-between px-6 lg:px-10 py-6 ${
            isNavShadow ? "shadow dark:shadow-gray-900" : null
          }`}
        >
          <Logo />
          <div className="flex items-center">
            <ModeToggle />
            <NavItem />
          </div>
        </nav>
      </header>
      
    </>
  );
}
