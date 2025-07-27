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
    const [activeIndex, setActiveIndex] = useState(null);

    const desktopIndicatorRef = useRef(null);
    const mobileIndicatorRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDesktopHover = (index, e) => {
        const link = e.currentTarget.getBoundingClientRect();
        const parentLeft =
            e.currentTarget.parentElement.getBoundingClientRect().left;

        if (desktopIndicatorRef.current) {
            desktopIndicatorRef.current.style.width = `${link.width}px`;
            desktopIndicatorRef.current.style.left = `${link.left - parentLeft}px`;
        }
        setActiveIndex(index);
    };

    const handleMobileHover = (index, e) => {
        const link = e.currentTarget.getBoundingClientRect();
        const parentTop =
            e.currentTarget.parentElement.getBoundingClientRect().top;

        if (mobileIndicatorRef.current) {
            mobileIndicatorRef.current.style.width = `${link.width}px`;
            mobileIndicatorRef.current.style.height = `${link.height}px`;
            mobileIndicatorRef.current.style.top = `${link.top - parentTop}px`;
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

                {/* Desktop Menu */}
                <div className="flex-1 hidden md:flex items-center justify-center">
                    <div className="flex items-center px-6 py-2 bg-background/40 backdrop-blur-md rounded-full shadow-md">
                        <div className="relative flex space-x-6 px-4">
                            <div
                                ref={desktopIndicatorRef}
                                className="absolute top-1/2 -translate-y-1/2 h-8 bg-primary rounded-full transition-all duration-300"
                                style={{ width: "0px", left: "0px" }}
                            />
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onMouseEnter={(e) => handleDesktopHover(index, e)}
                                    className="relative z-10 px-3 py-1 text-foreground hover:text-primary-foreground transition-colors duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Theme Toggle & Mobile Button */}
                <div className="flex-1 flex justify-end items-center mr-4 space-x-4">
  <div className="flex items-center">
    <ThemeToggle />
  </div>
  <button
    onClick={() => setMenuOpen((prev) => !prev)}
    className="md:hidden p-2 text-foreground flex items-center justify-center"
  >
    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
</div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "fixed top-16 right-4 bg-background/95 backdrop-blur-md rounded-xl shadow-lg px-4 py-3 w-44 flex flex-col space-y-2 transition-all duration-300",
                        isMenuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                    )}
                >
                    {/* Indicator for Mobile */}
                    <div
                        ref={mobileIndicatorRef}
                        className="absolute  bg-primary/20 rounded-md transition-all duration-300"
                        style={{ width: "0px", height: "0px", top: "0px" }}
                    />
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onMouseEnter={(e) => handleMobileHover(index, e)}
                            // onClick={() => setMenuOpen(false)}
                            className="relative z-10 px-2 py-2 text-foreground hover:text-primary transition-colors duration-300 rounded-md"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};
