import { FC, useState } from "react";
import { SvgDelete, SvgEdit } from "../../../../../helpers/svgs/settingSvg";
import ReceiptModal from "./ReceiptModal";

const ReceiptAddress: FC<any> = ({ content }) => {
  const [addressModal, setAddressModal] = useState<boolean>(false);
  return (
    <>
      {addressModal && (
        <ReceiptModal
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
      <div className="flex xl:grid xl:grid-cols-2 xl:col-span-2 p-4 xl:p-8 text-sm bg-white rounded-3xl text-[#A0A2AF] shadow-md font-medium xl:border xl:border-[#C6C6C69c]">
        <div className="flex w-full flex-col gap-4 border-r border-[#00abe965]">
          <h3 className="text-[#00ACE9] font-bold">{content.addressName}</h3>
          <h3 className="font-bold">{content.name}</h3>
          <p className="leading-relaxed whitespace-pre-line">{content.address}</p>
          <p>{content.telNo}</p>
        </div>
        <div className="flex flex-col w-full gap-4 pl-2 xl:pl-4">
          <h3 className="text-[#00ACE9] font-bold">{content.receiptType}</h3>
          <h3 className="font-bold">{content.firmName}</h3>
          <p className="leading-relaxed whitespace-pre-line">{content.taxOffice}</p>
          <p>{content.taxNumber}</p>
        </div>

        <div className="flex flex-col justify-between pb-2 xl:flex-row xl:col-span-2 xl:mt-5">
          <div className="flex items-center gap-1 xl:justify-end" onClick={() => setAddressModal((pre: any) => !pre)}>
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

export default ReceiptAddress;
