import { FC, useEffect, useState } from "react";
import SelectDropDown from "./SelectDropDown";

const ShipmentModal: FC<any> = ({ setModal }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute md:fixed z-[9999] top-0 bottom-0 left-0 right-0">
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
          className={`bg-white flex flex-col gap-4 rounded-3xl px-6 xl:px-12 py-8 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="xl:px-8 px-6 py-3 text-[#4CBEC5] border border-[#00b2b280] rounded-full text-center text-lg">
            Create New Support Request
          </div>
          <SelectDropDown />

          <textarea
            name="message"
            id="message"
            cols={20}
            rows={5}
            placeholder={"Your Message"}
            className="border rounded-[1.3rem] p-4 mt-4 outline-none text-[#7E8096]"
          ></textarea>
          <button type="button" className="w-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white rounded-full py-2 font-bold text-lg">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentModal;
