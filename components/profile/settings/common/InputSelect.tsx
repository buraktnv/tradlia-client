import { FC, ReactNode } from "react";

interface InputSelectProps {
  children: ReactNode;
}
const InputSelect: FC<InputSelectProps> = ({ children }) => (
  <div className="relative group">
    <select className="peer appearance-none w-full h-full bg-white px-6 py-3 xl:py-3.5 pl-10 outline-none xl:font-medium text-[#7E8096] xl:text-[#A0A2AF] rounded-full border border-[#C6C6C665] drop-shadow-input-shadow">
      {children}
    </select>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 26.883 15.423"
      fill="#A0A2AF"
      className="peer-focus:rotate-0 transition-all ease-in-out duration-300 absolute right-3 top-5 w-4 h-4 mr-4 fill-[#EA5B0C] xl:group-hover:fill-[#EA5B0C] transform rotate-180"
    >
      <path
        d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
        transform="translate(-1630.656 -746.402)"
      />
    </svg>
  </div>
);

export default InputSelect;
