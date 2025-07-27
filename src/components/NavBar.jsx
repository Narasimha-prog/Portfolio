import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHover = (index, e) => {
    const link = e.currentTarget.getBoundingClientRect();
    if (indicatorRef.current) {
      const parentLeft =
        e.currentTarget.parentElement.getBoundingClientRect().left;
      indicatorRef.current.style.width = `${link.width}px`;
      indicatorRef.current.style.left = `${link.left - parentLeft}px`;
    }
    setActiveIndex(index);
  };

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all w-full duration-300",
        isScrolled ? "py-2" : "py-3"
      )}
    >
      <div className="flex items-center w-full">
        {/* Left: Logo */}
        <div className="flex-1 text-left ml-10">
          <a href="#hero" className="text-xl font-bold text-primary">
            <span className="text-foreground">LNReddy</span> Portfolio
          </a>
        </div>

        {/* Center: Nav Menu (desktop only) */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <div className="flex items-center px-6 py-2 bg-background/40 backdrop-blur-md rounded-full shadow-md">
            <div className="relative flex space-x-6 px-4">
              <div
                ref={indicatorRef}
                className="absolute top-1/2 -translate-y-1/2 h-8 bg-primary rounded-full transition-all duration-300"
                style={{ width: "0px", left: "0px" }}
              />
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onMouseEnter={(e) => handleHover(index, e)}
                  className="relative z-10 px-3 py-1 text-foreground hover:text-primary-foreground transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Theme Toggle & Mobile Toggle */}
        <div className="flex-1 flex justify-end mr-4 items-center">
          <ThemeToggle />

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50 mr-10"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (slide from right) */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-64 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transform transition-transform duration-300 md:hidden",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
       <div className="absolute top-12 right-0 bg-background/95 backdrop-blur-md rounded-lg shadow-lg p-4 w-40 flex flex-col space-y-2 animate-in fade-in slide-in-from-top-2 rounded-full">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
