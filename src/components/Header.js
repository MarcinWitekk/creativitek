"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { House, Moon, User, Pickaxe, Phone } from "lucide-react";
import "./header.css";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(null);
  const pathname = usePathname();
  
  useEffect(() => {
    setIsVisible(true);
    setActiveStartLink(pathname);
    
  }, []);

  const setActiveStartLink = (name) => {
    const menu = document.querySelector(".menu");
    const menuItems = menu.querySelectorAll("a");

    menuItems.forEach((child) => {
      if (child.id === name.substring(1)) {
        child.classList.add("bg-[#f0f0f0]", "dark:bg-black", "!border-[#c3c3c3]");
      }
    });
  };

  const handleClick = (e) => {
    const activeElement = e.target;
    const menubar = e.target.closest(".menu").querySelectorAll("a");
    const activeId = e.target.id;

    if (activeElement.id === active) {
      return;
    }

    menubar.forEach((child) => {
      child.classList.remove("bg-[#f0f0f0]", "dark:bg-black", "!border-[#c3c3c3]");
    });
    activeElement.classList.add("bg-[#f0f0f0]", "dark:bg-black", "!border-[#c3c3c3]");
    setActive(activeId);
  };

  return (
    <header className="fixed bottom-8 flex w-full items-center justify-center px-4 pt-4 md:top-0 md:bottom-auto md:justify-between md:bg-gradient-to-b md:from-white md:from-[0%] md:to-transparent md:to-[70%]">
      <div className="hidden md:block dark:text-black">
        <div className="max-h-[40px] ">
            <Image
              src="/creativitek_short_logo.png" 
              alt="Avatart image" 
              width={100} 
              height={100} 
              loading="eager"
              className="absolute -top-2" 
            />
        </div>
      </div>
      <div
        className={`menu bg-white dark:bg-black flex items-center text-sm font-medium shadow-lg rounded-2xl sm:gap-4 border border-[#95959526] px-2 py-1 md:gap-6 md:px-4 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]  
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100vh] md:-translate-y-[100vh]  opacity-0"}`}
      >
        <Link href="/" onClick={handleClick} id="home" className="*:pointer-events-none menu-item flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] dark:hover:bg-black border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <House className="w-4 h-4 text-black dark:text-white" />
          <span>
            Home
          </span>
        </Link>
        <Link href="/about" onClick={handleClick} id="about" className="*:pointer-events-none menu-item flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] dark:hover:bg-black border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <User className="w-4 h-4 text-black dark:text-white" />
          <span>
            About
          </span>
        </Link>
        <Link href="/work" onClick={handleClick} id="work" className="*:pointer-events-none menu-item flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] dark:hover:bg-black border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <Pickaxe className="w-4 h-4 text-black dark:text-white" />
          <span>
            Work
          </span>
        </Link>
        <Link href="/contact" onClick={handleClick} id="contact" className="*:pointer-events-none menu-item flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] dark:hover:bg-black border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <Phone className="w-4 h-4 text-black dark:text-white" />
          <span>
            Contact
          </span>
        </Link>
      </div>
      <div className="hidden md:block">
        <Moon className="w-4 h-4 text-black cursor-pointer" />
      </div>
    </header>
  );
}
