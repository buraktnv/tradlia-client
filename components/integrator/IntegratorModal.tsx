import { FC } from "react";
import PortalModal from "../../components/shared/PortalModal";
import { HIRE_ME_COPY } from "../../helpers/config";
import { SvgSuccess } from "../../helpers/svgs/entegratorSvg";

interface IntegratorModalProps {
  open: boolean;
  onClose: () => void;
}

const IntegratorModal: FC<IntegratorModalProps> = ({ open, onClose }) => {
  return (
    <PortalModal open={open} onClose={onClose} panelClassName="flex flex-col items-center justify-center gap-5 py-10 text-center">
      <SvgSuccess />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-2xl font-bold text-[#4CBEC5]">Success!</p>
        <p className="text-lg text-[#7E8096]">{HIRE_ME_COPY.integratorSuccess}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="rounded-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] px-8 py-2 text-sm font-bold text-white"
      >
        Close
      </button>
    </PortalModal>
  );
};

export default IntegratorModal;
