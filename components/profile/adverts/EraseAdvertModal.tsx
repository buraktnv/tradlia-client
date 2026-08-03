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
        className={`bg-[#000000be] fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setOpenModal2(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`bg-white flex flex-col items-center justify-center gap-3 rounded-3xl px-5 py-8 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="w-[25%] h-15 text-[#FF516B]">
            <SvgExclamation />
          </div>

          <div className="flex flex-col items-center w-full space-y-3">
            <div className="flex flex-col items-center text-2xl font-bold text-[#FB295A] leading-6 w-full">
              <p>Selected Listings</p>
              <p>Be Unpublished?</p>
            </div>
            <div className="text-[#7E8096] text-lg ">53 Selected Listings</div>
            <div className="flex space-x-4 w-[90%]">
              <button type="button"
                onClick={() => setOpenModal2(false)}
                className=" py-2 text-[#7E8096] text-xl border border-[#00B1B265] font-medium rounded-full w-full"
              >
                No
              </button>
              <button type="button"
                onClick={() => setOpenModal2(false)}
                className=" py-2 text-white text-xl bg-gradient-to-r from-[#FF516B] to-[#FF0045] font-semibold rounded-full w-full"
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
