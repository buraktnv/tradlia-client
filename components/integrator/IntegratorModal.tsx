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
        <p className="font-display text-2xl font-bold text-ink">Success!</p>
        <p className="text-lg leading-relaxed text-ink-soft">{HIRE_ME_COPY.integratorSuccess}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="rounded-pill bg-brand-400 px-8 py-2.5 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
      >
        Close
      </button>
    </PortalModal>
  );
};

export default IntegratorModal;
