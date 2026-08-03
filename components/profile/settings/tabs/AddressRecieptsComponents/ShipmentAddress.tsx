import { FC, useState } from "react";
import { SvgDelete, SvgEdit } from "../../../../../helpers/svgs/settingSvg";
import ShipmentModal from "./ShipmentModal";

const ShipmentAddress: FC<any> = ({ content }) => {
  const [addressModal, setAddressModal] = useState<boolean>(false);
  return (
    <>
      {addressModal && (
        <ShipmentModal
          setModal={setAddressModal}
          content={{
            ...content,
            country: "United States",
            city: "New York",
            town: "Manhattan",
            postcode: "10001",
            subject: "Update Address Information",
          }}
        />
      )}
      <div className="xl:grid flex gap-12 xl:gap-4 px-4 xl:px-8 py-4 xl:py-8 text-sm bg-white rounded-3xl text-[#A0A2AF] drop-shadow-brand font-light xl:font-medium xl:border xl:border-[#C6C6C6]">
        <div>
          <h3 className="text-[#00ACE9] font-bold">{content.addressName}</h3>
          <h3 className="pb-1 font-bold xl:pb-0 xl:font-medium">{content.name}</h3>
          <p className="pb-2 leading-3 whitespace-pre-line xl:leading-relaxed xl:pb-0">{content.address}</p>
          <p>{content.telNo}</p>
        </div>
        <div className="flex flex-col justify-between xl:flex xl:flex-row">
          <div className="flex items-center gap-1" onClick={() => setAddressModal((pre: any) => !pre)}>
            <div className="w-5 h-5 cursor-pointer text-[#00ACE9]">
              <SvgEdit />
            </div>
            <p className="hidden xl:block">Edit</p>
          </div>
          <div className="w-5 h-5 cursor-pointer text-[#A0A2AF]">
            <SvgDelete />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShipmentAddress;
