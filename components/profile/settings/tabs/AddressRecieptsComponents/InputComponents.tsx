import { FC } from "react";
import { SvgCheckMark } from "../../../../../helpers/svgs/basketSvg";

export const ModalButton: FC<any> = ({ text }) => (
  <input
    type="submit"
    className="px-4 text-sm xl:text-base py-2 xl:py-3.5 rounded-full bg-[#00ACE9] text-white drop-shadow-md xl:w-full cursor-pointer"
    value={text}
  />
);

export const ReceiptTypeCheckbox: FC<any> = ({ content }) => (
  <div className="w-1/2">
    <label htmlFor={content.label} className="flex items-center gap-1 select-none">
      <input
        type="radio"
        defaultChecked={content.label === content.type}
        name={content.name}
        id={content.label}
        value={content.label}
        className="hidden peer"
      />
      <div className="w-5 h-4 xl:w-5 xl:h-5 border border-[#00ACE9] text-transparent peer-checked:text-white peer-checked:bg-[#00ACE9] flex xl:rounded-full items-center justify-center transition-colors duration-100 ease-in-out">
        <div className="w-3 h-2 xl:w-3 xl:h-3">
          <SvgCheckMark />
        </div>
      </div>
      <div className="text-sm xl:text-base xl:font-bold">{content.label}</div>
    </label>
  </div>
);
export const TextAreaInput: FC<any> = ({ content }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={content.id} className="px-6 text-sm font-medium">
        {content.label}
      </label>
      <textarea
        name={content.name}
        id={content.id}
        defaultValue={content.defaultValue}
        required
        rows={3}
        className="text-sm w-full px-6 py-2 xl:py-3.5 rounded-[1.3rem] drop-shadow-input-shadow border border-[#c6c6c665] bg-[#FCFCFC] outline-none font-bold h-max"
      />
    </div>
  );
};

export const TextInput: FC<any> = ({ content }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label htmlFor={content.id} className="px-6 text-sm font-light xl:font-medium">
        {content.label}
      </label>
      <input
        type="text"
        name={content.name}
        id={content.id}
        required
        defaultValue={content?.defaultValue}
        className="text-sm h-12 w-full px-6 py-2 xl:py-3.5 rounded-full drop-shadow-input-shadow border border-[#c6c6c665] bg-[#FCFCFC] outline-none font-bold no-appearance"
      />
    </div>
  );
};

export const InputSelect: FC<any> = ({ label, children }) => (
  <div className="flex flex-col w-full gap-1">
    <label className="px-6 text-sm xl:font-medium">{label}</label>
    <div className="relative group">
      <select className="peer appearance-none h-12 w-full bg-[#FCFCFC] px-6 py-2 xl:py-3 outline-none font-semibold text-[#A0A2AF] rounded-full drop-shadow-input-shadow text-sm">
        {children}
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 26.883 15.423"
        fill="#A0A2AF"
        className="peer-focus:rotate-0 transform rotate-180 transition-all ease-in-out duration-300 absolute right-2 top-4 w-3 h-3 xl:w-4 xl:h-4 mr-4 fill-[#00ACE9]"
      >
        <path
          d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
          transform="translate(-1630.656 -746.402)"
        />
      </svg>
    </div>
  </div>
);
