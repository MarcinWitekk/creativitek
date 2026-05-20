"use client";

import { useEffect, useState } from "react";
import { House, Moon, User, Pickaxe, Phone } from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="fixed bottom-8 flex w-full items-center justify-center px-4 pt-4 md:top-0 md:bottom-auto md:justify-between md:bg-gradient-to-b md:from-white md:from-[0%] md:to-transparent md:to-[70%]">
      <div className="hidden md:block">Creativitek</div>
      <div
        className={`menu flex items-center gap-4 text-sm font-medium shadow-lg rounded-2xl gap-2 border border-[#95959526] bg-white px-2 py-1 md:gap-6 md:px-4 transform-gpu transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-[100vh] md:-translate-y-[100vh] opacity-0"}`}
      >
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <House className="w-4 h-4 text-black" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <User className="w-4 h-4 text-black" />
          <span>About</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <Pickaxe className="w-4 h-4 text-black" />
          <span>Work</span>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-[#f0f0f0] border border-transparent hover:border-[#c3c3c3] rounded-xl transition-all duration-300 cursor-pointer">
          <Phone className="w-4 h-4 text-black" />
          <span>Contact</span>
        </div>
      </div>
      <div className="hidden md:block">
        <Moon className="w-4 h-4 text-black cursor-pointer" />
      </div>
    </header>
  );
}
