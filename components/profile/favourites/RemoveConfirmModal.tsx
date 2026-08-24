import { FC } from "react";
import { SvgWarning } from "../../../helpers/svgs/favoriteSvg";
import PortalModal from "../../shared/PortalModal";

const RemoveConfirmModal: FC<any> = ({ setModal, deleteFavorites }) => {
  return (
    <PortalModal open onClose={() => setModal(false)} panelClassName="px-10 py-8 w-max">
      <div className="flex flex-col gap-3">
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
            onClick={() => setModal(false)}
          >
            No
          </button>
          <button type="button"
            className="px-10 py-2 bg-gradient-to-r from-[#FF3A67] to-[#FF003C] border border-transparent text-white rounded-full font-medium"
            onClick={() => {
              deleteFavorites();
              setModal(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </PortalModal>
  );
};

export default RemoveConfirmModal;
