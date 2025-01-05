import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`md:hidden w-[95%] mx-auto top-2 sticky z-20 ${
        isOpen && "bg-[#141417]"
      }`}
    >
      <div
        className={`flex justify-between w-full ${isOpen && "px-4 py-2"}`}
      >
        <div className="text-xl font-bold">LESSSCREEN</div>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <AlignJustify />}
        </button>
      </div>
      {isOpen && (
        <>
          <div className="w-full text-lg flex items-center flex-col justify-center gap-4 absolute h-24 mt-2 bg-[#141417]">
            <a
              className="opacity-90 hover:opacity-100 transition-opacity duration-200"
              onClick={() => setIsOpen(false)}
              href="#features"
            >
              Features
            </a>
            <a
              className="opacity-90 hover:opacity-100 transition-opacity duration-200"
              onClick={() => setIsOpen(false)}
              href="#product"
            >
              Product
            </a>
          </div>
        </>
      )}
    </nav>
  );
};
