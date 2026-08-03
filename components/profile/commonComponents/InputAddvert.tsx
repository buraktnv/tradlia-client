import React, { FC } from "react";
const InputAddvert: FC<any> = ({ placeholder, type, separate }: any) => {
  return (
    <input
      type={type}
      id="search"
      className={`appearance-none ${separate} p-2 xl:p-3 w-full placeholder:font-normal placeholder:text-[#7E8096] xl:placeholder:xl:text-[#A0A2AF] text-sm text-[#7E8096] xl:text-[#A0A2AF] outline-none border border-[#c6c6c66b] drop-shadow-input-shadow`}
      placeholder={placeholder}
      required
    />
  );
};

export default InputAddvert;
