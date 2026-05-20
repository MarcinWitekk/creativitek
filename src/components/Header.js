import { House, Moon, User, Pickaxe, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="flex fixed justify-center px-4 w-full items-center bottom-8 md:top-0 pt-4 md:bottom-auto md:justify-between
    md:bg-gradient-to-b from-white from-0% to-transparent to-70%">
      <div className="hidden md:block">Creativitek</div>
      <div className="menu flex items-center gap-4 text-sm font-medium shadow-lg  rounded-2xl gap-2 border border-[#95959526] bg-white px-2 py-1 md:gap-6 md:px-4">
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