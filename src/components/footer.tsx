import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="max-w-6xl mx-auto w-[95%]">
      <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center w-full border-b border-[#19191a] pb-4">
        <div>
          <a href="/">
            <img src="/logo.webp" alt="" className="w-12 h-12" />
          </a>
        </div>
        <div>
          <div className="text-xs flex flex-col gap-2 ">
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
            <Link to={"/terms-of-use"}>Terms of Use</Link>
          </div>
        </div>
      </div>
      <p className="text-xs my-6 md:text-left text-center">
        LESSSCREEN LLC © All rights reserved
      </p>
    </footer>
  );
};
