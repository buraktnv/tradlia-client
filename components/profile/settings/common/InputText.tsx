import { FC } from "react";

interface InputSearchProps {
  placeholder: string;
}

const InputText: FC<InputSearchProps> = ({ placeholder }) => (
  <input
    type="text"
    className="bg-white px-3 py-3 xl:py-3.5 pl-10 w-full xl:font-medium text-sm placeholder:text-[#7E8096] xl:placeholder:text-[#A0A2AF] text-[#7E8096] xl:text-[#A0A2AF] rounded-full outline-none border border-[#C6C6C665] drop-shadow-input-shadow"
    placeholder={placeholder}
  />
);

export default InputText;
