import { FC, useState } from "react";
import { SvgShowMore } from "../../../../helpers/svgs/supportSvg";

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
    <div className="w-full text-center">
      <div className="relative dropdown group" onClick={() => setModal((pre: any) => !pre)}>
        <label className="rounded-full outline-none group-hover:text-white group-hover:cursor-pointer">
          <div
            className={`group relative flex bg-canvas h-10 items-center justify-center px-3 py-1 rounded-full border border-line font-light xl:font-medium text-sm text-center text-ink-muted ${
              state !== "Please Select" && "font-medium "
            }`}
          >
            {state}
            <div
              className={`transform transition ease-in-out duration-300 absolute w-6 h-6 right-4 top-1.5 ${
                modal && "rotate-180"
              }`}
            >
              <SvgShowMore />
            </div>
          </div>
        </label>
        {modal && (
          <div className="absolute z-40 shadow-sm left-0 top-[100%] right-0 bg-white border border-line rounded-3xl grid opacity-100 transition-all duration-150 ease-in-out">
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
      <div className="flex items-center justify-center w-full h-10 px-2">
        <button type="button"
          className={`font-medium w-full py-0.5 ${
            state === title ? "font-medium text-brand-600" : "text-ink-muted hover:text-brand-600"
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
