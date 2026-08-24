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
      <div className="border border-[#00b2b280] px-6 py-3 text-center text-lg text-[#4CBEC5] rounded-full">
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
        className="border rounded-[1.3rem] p-4 mt-4 outline-none text-[#7E8096]"
      ></textarea>
      <button
        type="button"
        onClick={handleCreate}
        className="w-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white rounded-full py-2 font-bold text-lg"
      >
        Create
      </button>
    </PortalModal>
  );
};

export default SupportModal;
