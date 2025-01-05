import { Plus, X } from "lucide-react";
import {  useState } from "react";

type Props = {
  question: string;
  answer: string;
};

export const FAQ = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="py-4  border-[#19191a] cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <summary className="flex justify-between items-center ">
        <p className="text-lg w-[85%]">{question}</p>
        <button className="w-fit">
          {!isOpen ? <Plus stroke="#19191a" /> : <X stroke="#19191a" />}
        </button>
      </summary>
      <p className="mt-6 text-xs md:text-sm">{answer}</p>
    </details>
  );
};
