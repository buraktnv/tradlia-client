import { FC, useState } from "react";
import { SvgShowMore } from "../../../helpers/svgs/supportSvg";

const selectList = [
  { id: 0, title: "Order Tracking", active: true },
  { id: 1, title: "Shipping Tracking and Delivery", active: false },
  { id: 2, title: "Order Return Process", active: false },
  { id: 3, title: "Order Cancellation Process", active: false },
  { id: 4, title: "About Product Details", active: false },
  { id: 5, title: "Payment Options", active: false },
  { id: 6, title: "Technical Issues", active: false },
  { id: 7, title: "About Gift Vouchers", active: false },
  { id: 8, title: "Membership and Account Management", active: false },
  { id: 9, title: "Your Suggestions", active: false },
];

const DEFAULT_LABEL = "Please Select";

const SelectDropDown: FC<any> = ({ onSelect }) => {
  const [state, setState] = useState<string>(DEFAULT_LABEL);
  const [open, setOpen] = useState<boolean>(false);

  const choose = (title: string) => {
    setState(title);
    setOpen(false);
    if (onSelect) onSelect(title);
  };

  return (
    <div className="relative text-sm text-center">
      <button type="button" onClick={() => setOpen((pre) => !pre)} className="w-full outline-none">
        <div
          className={`relative flex justify-center px-3 py-3 rounded-full border border-[#00b2b280] bg-[#F4F5F7] text-light text-center text-[#7E8096] ${
            state !== DEFAULT_LABEL && "font-bold"
          }`}
        >
          {state}
          <div className={`absolute w-6 h-6 right-4 top-3 transition-transform duration-150 ${open && "rotate-180"}`}>
            <SvgShowMore />
          </div>
        </div>
      </button>
      {open && (
        <div className="absolute z-40 left-0 top-[100%] right-0 bg-white border border-[#00b2b280] rounded-3xl shadow-sm grid transition-all duration-150 ease-in-out">
          <div className="flex flex-col p-1">
            {selectList &&
              selectList.map(({ id, title }) => (
                <ItemsList key={id} title={title} state={state} onClick={() => choose(title)} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ItemsList: FC<any> = ({ title, state, onClick }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full px-2">
        <button
          type="button"
          className={`font-medium w-full py-0.5 ${
            state === title ? "text-[#4CBEC5]" : "hover:text-[#4CBEC5] text-[#7E8096]"
          }`}
          onClick={onClick}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default SelectDropDown;
