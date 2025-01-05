import { Download } from "lucide-react";

export const DownloadButtonOne = () => {
  return (
    <button className="flex items-center  bg-[#242831]  shadow-inner inset-4 gap-2 text-xs shadow-[#9ca3af] backdrop-blur-lg border border-[#9ca3af] text-white rounded-full px-4 py-2">
      <Download size={15} /> Download
    </button>
  );
};
