import { FC, useEffect, useState } from "react";
import { SvgWarning } from "../../../helpers/svgs/favoriteSvg";

const RemoveConfirmModal: FC<any> = ({ setModal, deleteFavorites }) => {
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
          setTimeout(() => setModal(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`bg-white flex flex-col gap-3 rounded-3xl px-12 py-8 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="h-full mx-auto">
            <div className="w-24 h-24 xl:w-32 xl:h-32">
              <SvgWarning />
            </div>
          </div>
          <div className="text-2xl text-center whitespace-pre-line text-[#FB295A] font-bold">
            Remove from {"\n"}Favourites?
          </div>
          <div className="text-[#7E8096] text-center text-base">This Action Cannot Be Undone!</div>
          <div className="grid w-full grid-cols-2 gap-2">
            <button type="button"
              className="px-10 py-2 border border-[#00B1B29c] rounded-full text-[#7E8096] font-medium"
              onClick={() => {
                setFade(false);
                setTimeout(() => setModal(() => false), 300);
              }}
            >
              No
            </button>
            <button type="button"
              className="px-10 py-2 bg-gradient-to-r from-[#FF3A67] to-[#FF003C] border border-transparent text-white rounded-full font-medium"
              onClick={() => {
                deleteFavorites();
                setFade(false);
                setModal(() => false, 300);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveConfirmModal;
