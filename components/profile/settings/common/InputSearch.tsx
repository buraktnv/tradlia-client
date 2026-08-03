import { FC } from "react";

interface InputSearchProps {
  placeholder: string;
}

const InputSearch: FC<InputSearchProps> = ({ placeholder }) => (
  <input
    type="search"
    className="bg-white px-3 py-4 pl-10 w-full font-semibold text-[#A0A2AF] rounded-full outline-none"
    placeholder={placeholder}
  />
);

export default InputSearch;
