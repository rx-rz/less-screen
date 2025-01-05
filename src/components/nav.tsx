import { DownloadButtonOne } from "./download-btn-one";

export const Navigation = () => {
  return (
    <nav
      className="hidden justify-between md:flex z-20 border-[#19191a] w-[95%] items-center p-2 max-w-7xl mx-auto sticky top-2 rounded-full"
      id="nav"
    >
      <a href="/">
        <img src="/logo.webp" alt="" className="w-12 h-12" />
      </a>
      <div className="flex gap-8 text-lg">
        <a href="#features" className=" hover:text-white">
          Features
        </a>
        <a href="#product" className=" hover:text-white">
          Product
        </a>
        <a href="#android" className=" hover:text-white">
          Android
        </a>
      </div>
      <div className="mr-4">
        <DownloadButtonOne />
      </div>
    </nav>
  );
}