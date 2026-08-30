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
          className={`relative flex justify-center rounded-pill border border-line bg-canvas px-4 py-3 text-center text-sm text-ink-soft transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
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
        <div className="absolute left-0 right-0 top-[100%] z-40 grid overflow-hidden rounded-card border border-line bg-surface shadow-pop">
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
            state === title ? "font-medium text-brand-600" : "text-ink-soft hover:text-brand-600"
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
