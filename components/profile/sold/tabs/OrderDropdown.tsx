import { FC, useState } from "react";
import { SvgShowMore } from "../../../../helpers/svgs/soldSvg";

const selectList = [
  { id: 0, title: "Product Features", active: true },
  { id: 1, title: "Delivery & Shipping", active: false },
  { id: 2, title: "Return & Cancellation", active: false },
  { id: 3, title: "Service & Technical Support", active: false },
];

const OrderDropdown: FC<any> = () => {
  const [state, setState] = useState<any>("Please Select");
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className=" text-center">
      <div className="relative dropdown group" onClick={() => setModal((pre: any) => !pre)}>
        <label className="rounded-full outline-none group-hover:text-white group-hover:cursor-pointer">
          <div
            className={`group bg-[#F4F5F7] relative flex justify-center px-3 py-1 rounded-full border border-[#00b2b280] font-medium text-sm text-center text-[#7E8096] ${
              state !== "Please Select" && "font-medium "
            }`}
          >
            {state}
            <div className="absolute w-4 h-4 right-2 top-1.5">
              <SvgShowMore />
            </div>
          </div>
        </label>
        {modal && (
          <div className="absolute z-40 shadow-sm left-0 top-[100%] right-0 bg-white border border-[#00b2b280] rounded-3xl grid opacity-100 transition-all duration-150 ease-in-out">
            <div className="flex flex-col p-1 text-sm">
              {selectList &&
                selectList.map(({ id, title }) => (
                  <ItemsList key={id} title={title} setState={setState} setModal={setModal} state={state} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ItemsList: FC<any> = ({ title, setState, setModal, state }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full px-2">
        <button type="button"
          className={`font-medium w-full py-0.5 ${
            state === title ? "text-[#4CBEC5]" : "hover:text-[#4CBEC5] text-[#7E8096]"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setState(title);
            setModal(false);
          }}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default OrderDropdown;
