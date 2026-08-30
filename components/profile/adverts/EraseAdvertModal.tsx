import { FC, useEffect, useState } from "react";
import { SvgExclamation } from "../../../helpers/svgs/adverts";

const EraseModal: FC<any> = ({ setOpenModal2 }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full md:fixed">
      <div
        className={`bg-ink/60 backdrop-blur-sm fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setOpenModal2(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`flex flex-col items-center justify-center gap-3 rounded-card bg-surface px-6 py-8 shadow-modal z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="w-[25%] h-15 text-danger">
            <SvgExclamation />
          </div>

          <div className="flex flex-col items-center w-full space-y-3">
            <div className="font-display flex w-full flex-col items-center text-2xl font-bold leading-6 text-dangerDark">
              <p>Selected Listings</p>
              <p>Be Unpublished?</p>
            </div>
            <div className="text-lg text-ink-muted">53 Selected Listings</div>
            <div className="flex space-x-4 w-[90%]">
              <button type="button"
                onClick={() => setOpenModal2(false)}
                className="w-full rounded-pill border border-line px-4 py-2 font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                No
              </button>
              <button type="button"
                onClick={() => setOpenModal2(false)}
                className="w-full rounded-pill bg-danger px-4 py-2 font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-dangerDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EraseModal;
