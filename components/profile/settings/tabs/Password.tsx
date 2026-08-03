import { FC } from "react";
import SubmitButton from "../../commonComponents/SubmitButton";
import InputText from "../common/InputText";
import InputAddvert from "../../commonComponents/InputAddvert";

const Password: FC = () => {
  return (
    <div className="xl:bg-[#F4F5F7] flex flex-col rounded-3xl h-full w-full space-y-7 px-2 py-3 my-5 xl:my-0 xl:p-[2rem]">
      <div className="w-full space-y-3 xl:w-2/4 xl:space-y-7 ">
        <div className="">
          <InputAddvert
            placeholder="Enter Your Current Password"
            type="text"
            separate="bg-white py-3 xl:py-3.5 pl-7 xl:pl-10 xl:placeholder:font-medium font-medium text-sm text-[#A0A2AF] rounded-full"
          />
        </div>

        <div className="">
          <InputAddvert
            placeholder="Enter Your New Password"
            type="text"
            separate="bg-white py-3 xl:py-3.5 pl-7 xl:pl-10 xl:placeholder:font-medium font-medium text-sm text-[#A0A2AF] rounded-full"
          />
        </div>

        <div className="">
          <InputAddvert
            placeholder="Re-enter Your New Password"
            type="text"
            separate="bg-white py-3 xl:py-3.5 pl-7 xl:pl-10 xl:placeholder:font-medium font-medium text-sm text-[#A0A2AF] rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center self-center justify-between xl:flex-none xl:self-start">
        <SubmitButton text="Save Changes" />
      </div>
    </div>
  );
};

export default Password;
