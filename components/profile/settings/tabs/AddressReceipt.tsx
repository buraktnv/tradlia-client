import React, { FC, useState } from "react";
import { SvgPlus } from "../../../../helpers/svgs/basketSvg";
import ReceiptAddress from "./AddressRecieptsComponents/ReceiptAddress";
import ReceiptModal from "./AddressRecieptsComponents/ReceiptModal";
import ShipmentAddress from "./AddressRecieptsComponents/ShipmentAddress";
import ShipmentModal from "./AddressRecieptsComponents/ShipmentModal";

const AddressReceipt: FC<any> = () => {
  const [addNewShippingAddressModal, setAddNewShippingAddressModal] = useState<boolean>(false);
  const [addNewReceiptAddressModal, setAddNewReceiptAddressModal] = useState<boolean>(false);
  return (
    <div className="grid xl:gap-[3rem]">
      <div className="rounded-card border border-line bg-surface shadow-card rounded-3xl xl:p-[2rem] xl:pb-[3rem]">
        <div className="pl-8 text-ink-muted py-4 font-bold">My Delivery Addresses</div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          <ShipmentAddress
            content={{
              addressName: "Business Address",
              name: "James Anderson",
              address: "123 Commerce St, Floor 4 \nNew York, NY 10001",
              telNo: "+1 (555) 012-3456",
            }}
          />
          <ShipmentAddress
            content={{
              addressName: "Home Address",
              name: "James Anderson",
              address: "456 Oak Avenue, Apt 2B \nChicago, IL 60601",
              telNo: "+1 (555) 045-6789",
            }}
          />
          {addNewShippingAddressModal && (
            <ShipmentModal setModal={setAddNewShippingAddressModal} content={{ subject: "Add New Address" }} />
          )}
          <div
            className="flex sm:col-span-2 flex-col items-center justify-center gap-4 px-8 py-8 text-sm bg-white rounded-3xl text-ink-muted shadow-md font-medium cursor-pointer xl:border xl:border-line"
            onClick={() => setAddNewShippingAddressModal((pre) => !pre)}
          >
            <div className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] text-brand-600 xl:mt-4">
              <SvgPlus />
            </div>
            <div className="font-medium xl:font-semibold text-ink-muted">Add New Address</div>
          </div>
        </div>
      </div>
      <div className="rounded-card border border-line bg-surface shadow-card rounded-3xl xl:px-8 py-4 xl:pb-8">
        <div className="pl-8 text-ink-muted py-4 font-bold">My Invoice Addresses</div>
        <div className="grid gap-4 xl:grid-cols-3 xl:gap-12">
          <ReceiptAddress
            content={{
              addressName: "Business Address",
              name: "James Anderson",
              address: "123 Commerce St, Floor 4 \nNew York, NY 10001",
              telNo: "+1 (555) 012-3456",
              receiptType: "Corporate",
              firmName: "TechRetail Inc \nMain \nBranch",
              taxOffice: "Central Tax Office",
              taxNumber: "TX-30947271",
            }}
          />
          {addNewReceiptAddressModal && (
            <ReceiptModal setModal={setAddNewReceiptAddressModal} content={{ subject: "Add New Address" }} />
          )}
          <div
            className="flex flex-col items-center justify-center gap-4 px-8 py-8 text-sm bg-white rounded-3xl text-ink-muted shadow-md font-medium cursor-pointer xl:border xl:border-line"
            onClick={() => setAddNewReceiptAddressModal((pre) => !pre)}
          >
            <div className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[3rem] text-brand-600 xl:mt-4">
              <SvgPlus />
            </div>
            <div className="font-medium xl:font-semibold text-ink-muted">Add New Address</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressReceipt;
