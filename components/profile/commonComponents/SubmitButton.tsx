import React, { FC } from "react";

const SubmitButton: FC<any> = ({ text }: any) => {
  return <button type="button" className="font-bold px-5 xl:px-11 py-3 rounded-full bg-[#f9b000] text-white text-sm">{text}</button>;
};

export default SubmitButton;
