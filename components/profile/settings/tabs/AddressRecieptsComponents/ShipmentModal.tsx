import { FC, useEffect, useState } from "react";
import { InputSelect, ModalButton, TextAreaInput, TextInput } from "./InputComponents";

const ShipmentModal: FC<any> = ({ setModal, content }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute md:fixed top-0 bottom-0 left-0 right-0 z-[999999] w-full h-full">
      <div
        className={`bg-ink/60 backdrop-blur-sm fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setModal(false), 300);
        }}
      ></div>
      <div className="flex justify-center w-full my-8 h-max">
        <div
          className={`w-full mx-5 my-6 xl:my-0 xl:mx-0 xl:w-[43.75%] rounded-card border border-line bg-surface shadow-card px-3 py-8 z-10 transition-all duration-300 ease-in-out xl:p-[2rem] ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <p className="border border-brand-300 text-brand-600 text-center rounded-full py-2 xl:py-3">
            {content.subject}
          </p>
          <form className="mt-3 text-ink-muted flex flex-col gap-3 xl:gap-[1.5rem] mb-2">
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
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
              <InputSelect label={"Country *"}>
                <option>{content.country}</option>
              </InputSelect>
              <InputSelect label={"State *"}>
                <option>{content.city}</option>
              </InputSelect>
              <div className="col-span-2 xl:col-span-1">
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

            <div className="grid grid-cols-5 gap-4 xl:gap-y-[1.5rem] xl:grid-cols-3">
              <div className="col-span-5 xl:col-span-1">
                <InputSelect label={"Zip Code *"}>
                  <option>{content.postcode}</option>
                </InputSelect>
              </div>
              <div className="col-span-5 xl:col-span-2">
                <TextInput
                  content={{
                    id: 0,
                    name: "addressHeader",
                    label: "Phone Number *",
                    defaultValue: content.telNo,
                  }}
                />
              </div>
              <div className="ml-6 xl:ml-0 xl:col-span-1">
                <ModalButton text={"Save Changes"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShipmentModal;
