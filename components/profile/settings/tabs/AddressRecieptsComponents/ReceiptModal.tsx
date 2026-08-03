import { FC, useEffect, useState } from "react";
import { InputSelect, ModalButton, ReceiptTypeCheckbox, TextAreaInput, TextInput } from "./InputComponents";

const ReceiptModal: FC<any> = ({ setModal, content }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute md:fixed top-0 bottom-0 left-0 right-0 z-[999999] w-full h-full">
      <div
        className={`bg-[#000000be] fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setModal((pre: any) => !pre), 300);
        }}
      ></div>
      <div className="flex justify-center w-full my-8 h-max">
        <div
          className={`w-full mx-5 my-6 xl:my-0 xl:mx-0 xl:w-[43.75%] bg-[#F4F5F7] h-full rounded-3xl px-3 py-8 z-10 transition-all duration-300 ease-in-out xl:p-[2rem] ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <p className="border border-[#00ACE9] text-[#00ACE9] text-center rounded-full py-3">{content.subject}</p>
          <form className="mt-3 text-[#A0A2AF] flex flex-col gap-3 xl:gap-[1.5rem] mb-2">
            <TextInput
              content={{
                id: 0,
                name: "addressHeader",
                label: "Address Title *",
                defaultValue: content.addressName,
              }}
            />
            <TextInput
              content={{
                id: 1,
                name: "nameSurname",
                label: "Your Full Name *",
                defaultValue: content.name,
              }}
            />
            <div className="grid grid-cols-4 gap-4 xl:grid-cols-3">
              <div className="col-span-2 xl:col-span-1">
                <InputSelect label={"Country *"}>
                  <option>{content.country}</option>
                </InputSelect>
              </div>
              <div className="col-span-2 xl:col-span-1">
                <InputSelect label={"State *"}>
                  <option>{content.city}</option>
                </InputSelect>
              </div>
              <div className="col-span-4 xl:col-span-1">
                <InputSelect label={"City *"}>
                  <option>{content.town}</option>
                </InputSelect>
              </div>
            </div>
            <TextAreaInput
              content={{
                id: 2,
                name: "address",
                label: "Address",
                defaultValue: content.address,
              }}
            />

            <div className="grid gap-4 xl:grid-cols-3">
              <div className="xl:col-span-1">
                <InputSelect label={"Zip Code *"}>
                  <option>{content.postcode}</option>
                </InputSelect>
              </div>
              <div className="xl:col-span-2">
                <TextInput
                  content={{
                    id: 3,
                    name: "addressHeader",
                    label: "Phone Number *",
                    defaultValue: content.telNo,
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-2 px-6">Invoice Type *</div>
              <div className="xl:bg-[#FCFCFC] xl:border xl:border-[#c6c6c665] py-3 px-6 rounded-full flex gap-12 xl:gap-2 drop-shadow-md">
                <ReceiptTypeCheckbox
                  content={{
                    name: "receiptType",
                    label: "Individual",
                    type: content.receiptType,
                  }}
                />
                <ReceiptTypeCheckbox
                  content={{
                    name: "receiptType",
                    label: "Corporate",
                    type: content.receiptType,
                  }}
                />
              </div>
            </div>
            <TextInput
              content={{
                id: 4,
                name: "firmName",
                label: "Company Name *",
                defaultValue: content.firmName,
              }}
            />
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-1 ">
                <TextInput
                  content={{
                    id: 4,
                    name: "taxOffice",
                    label: "Tax Office *",
                    defaultValue: content.taxOffice,
                  }}
                />
              </div>
              <div className="col-span-1">
                <TextInput
                  content={{
                    id: 4,
                    name: "taxNumber",
                    label: "Tax Number *",
                    defaultValue: content.taxNumber,
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="ml-9 xl:ml-0 xl:col-span-1">
                <ModalButton text={"Save Changes"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;
