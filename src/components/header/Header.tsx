import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import LogoSection from "./LogoSection";
import HeaderNav from "./HeaderNav";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={cn(
        "relative",
        location.pathname === "/restaurants" ? "bg-white" : "bg-primary",
      )}
    >
      <div
        className={cn(
          `w-[76rem] mx-auto py-4 `,
          "flex justify-between items-center",
          location.pathname !== "/"
            ? "shadow-md w-full px-[9.85rem]"
            : "shadow-none ",
        )}
      >
        <LogoSection show={show} />

        <HeaderNav />
      </div>

      {show && (
        <div
          className={cn(
            "fixed top-4 left-1/2 -translate-x-1/2 z-50",
            "bg-primary backdrop-blur-3xl rounded-2xl shadow-xl",
            "px-8 py-4 w-[90%] max-w-5xl",
            "transition-all duration-300",
          )}
        >
          <div className="flex justify-between items-center">
            <LogoSection show={show} />

            <HeaderNav />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
