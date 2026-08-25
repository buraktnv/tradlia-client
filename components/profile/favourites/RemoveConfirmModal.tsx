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
        <div className="font-display text-2xl font-bold text-center whitespace-pre-line text-dangerDark">
          Remove from {"\n"}Favourites?
        </div>
        <div className="text-ink-soft text-center text-base">This Action Cannot Be Undone!</div>
        <div className="grid w-full grid-cols-2 gap-2">
          <button type="button"
            className="rounded-pill border border-line px-10 py-2 font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
            onClick={() => setModal(false)}
          >
            No
          </button>
          <button type="button"
            className="rounded-pill bg-danger px-10 py-2 font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-dangerDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
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
