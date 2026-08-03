import { FC, useEffect, useState } from "react";
import { SvgSuccess } from "../../helpers/svgs/entegratorSvg";

const IntegratorModal: FC<any> = ({ setModal }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute md:fixed top-0 left-0 z-[9999] flex w-full h-full">
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
          className={`bg-white flex flex-col justify-center items-center gap-5 rounded-3xl p-12 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <SvgSuccess />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-2xl font-bold text-[#4cbec5]">Success!</p>
            <p className="text-lg text-[#7E8096]">Your Information Has Been Updated</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratorModal;
