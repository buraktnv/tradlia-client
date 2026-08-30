import { FC, useState } from "react";
import { toast } from "react-toastify";
import PortalModal from "../../shared/PortalModal";
import SelectDropDown from "./SelectDropDown";

interface SupportModalProps {
  setModal: (value: boolean) => void;
  onCreate: (ticket: { subject: string; message: string }) => void;
}

const SupportModal: FC<SupportModalProps> = ({ setModal, onCreate }) => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleCreate = () => {
    if (!subject) {
      toast.error("Please choose a topic for your request.");
      return;
    }
    if (!message.trim()) {
      toast.error("Please write a message for your request.");
      return;
    }
    onCreate({ subject, message: message.trim() });
    toast.success("Your support request has been created.");
    setModal(false);
  };

  return (
    <PortalModal open onClose={() => setModal(false)} panelClassName="flex flex-col gap-4">
      <div className="rounded-pill border border-brand-200 bg-brand-50 px-6 py-3 text-center font-display text-lg font-medium text-brand-700">
        Create New Support Request
      </div>
      <SelectDropDown onSelect={setSubject} />

      <textarea
        name="message"
        id="message"
        cols={20}
        rows={5}
        placeholder={"Your Message"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-card border border-line bg-surface p-4 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 mt-4"
      ></textarea>
      <button
        type="button"
        onClick={handleCreate}
        className="w-full rounded-pill bg-brand-400 py-2.5 font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
      >
        Create
      </button>
    </PortalModal>
  );
};

export default SupportModal;
