import { FC, useState } from "react";
import { SvgShowMore } from "../../../helpers/svgs/supportSvg";
import styles from "../feedback/FilterDropDown.module.scss";

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

const SelectDropDown: FC<any> = () => {
  const [state, setState] = useState<any>("Please Make a Selection");
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="text-sm text-center">
      <div className="relative dropdown group" onClick={() => setModal((pre: any) => !pre)}>
        <label className="rounded-full outline-none group-hover:text-white group-hover:cursor-pointer">
          <div
            className={`group bg-[#F4F5F7] relative flex justify-center px-3 py-3 rounded-full border border-[#00b2b280]  text-light text-center text-[#7E8096] ${
              state !== "Please Make a Selection" && "font-bold"
            }`}
          >
            {state}
            <div className="absolute w-6 h-6 right-4 top-3">
              <SvgShowMore />
            </div>
          </div>
        </label>
        {modal && (
          <div className="absolute z-40 shadow-sm left-0 top-[100%] right-0 bg-white border border-[#00b2b280] rounded-3xl hidden group-hover:grid opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in-out">
            <div className="flex flex-col p-1">
              {selectList &&
                selectList.map(({ id, title }) => (
                  <ItemsList key={id} title={title} setState={setState} state={state} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ItemsList: FC<any> = ({ title, setState, state }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full px-2">
        <button type="button"
          className={`font-medium w-full py-0.5 ${
            state === title ? "text-[#4CBEC5]" : "hover:text-[#4CBEC5] text-[#7E8096]"
          }`}
          onClick={(e) => {
            setState(title);
          }}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default SelectDropDown;
