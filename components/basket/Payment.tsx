import Link from "next/link";
import React, { FC, useState } from "react";
import { SvgActiveCardBg, SvgShowMore } from "../../helpers/svgs/basketSvg";
import Sidebar from "./Sidebar";

const Payment: FC<any> = ({ setActivePage, activePage }) => {
  const [agreementShowFull, setAgreementShowFull] = useState<boolean>(false);
  const [state, setState] = useState<any>(1);
  const tradliaSalesAgreement =
    "ARTICLE 1- PARTIES TO THE AGREEMENT \n \n SELLER:\n Title: TRADLIA Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, doloribus nihil tempore animi dolorum, unde quaerat corporis rerum dolores nesciunt ab? Tempore ipsa a eligendi voluptas reprehenderit! Sit, velit animi!";
  return (
    <div className="container grid grid-cols-12 gap-8 px-3 xl:px-0 mx-auto mt-6 min-h-[80vh]">
      <div className="flex flex-col col-span-12 xl:col-span-9 ">
        {state === 1 ? (
          <StateOne setState={setState} />
        ) : state === 2 ? (
          <StateTwo setState={setState} />
        ) : (
          <StateThree setState={setState} />
        )}
        {state === 1 ? (
          <div className="grid gap-5 xl:gap-[1.5rem]">
            <DeliveryInfo
              content={{
                addressName: "Work Address",
                name: "John Miller",
                address: "123 Commerce St, Suite 100 \nPortland, OR 97201",
                telNo: "+1 (555) 012-3456",
              }}
            />

            <ReceiptInfo
              content={{
                addressName: "Work Address",
                name: "John Miller",
                address: "123 Commerce St, Suite 100 \nPortland, OR 97201",
                telNo: "+1 (555) 012-3456",
                receiptType: "Corporate",
                firmName: "John Miller \nPharmacy \nGroup",
                taxOffice: "Portland Tax Office",
                taxNumber: "TX-12345678",
              }}
            />
          </div>
        ) : state === 2 ? (
          <div className="grid gap-5">
            <div className="bg-white xl:bg-[#F4F5F9] rounded-2xl xl:rounded-3xl px-3 py-5 h-56">
              <div className="text-[#7E8096] font-bold pl-6 pt-4">Pay by Credit Card</div>
            </div>
            <div className="bg-white xl:bg-[#F4F5F9] rounded-2xl xl:rounded-3xl xl:px-[2rem] px-3 py-5">
              <div className="text-[#7E8096] font-bold pl-6 pt-4 pb-3">Sales Agreement</div>
              <div className="relative flex justify-between items-center bg-white shadow-sm border border-[#00B1B265] rounded-2xl px-3 xl:px-6 pt-5 pb-2 text-[12px] xl:text-sm">
                <p className="whitespace-pre-line font-medium text-[#A0A2AF]">
                  {tradliaSalesAgreement.slice(0, !agreementShowFull ? 60 : tradliaSalesAgreement.length)}
                </p>
                <div
                  className="absolute top-0 flex items-center justify-center h-full peer right-3"
                  onClick={() => setAgreementShowFull((pre: boolean) => !pre)}
                >
                  <div
                    className={`w-4 h-4 text-[#4cbec5] transform transition ease-in-out duration-300 ${
                      agreementShowFull && "rotate-180"
                    }`}
                  >
                    <SvgShowMore />
                  </div>
                </div>
              </div>
              <div className="px-3 py-4">
                <label htmlFor={"salesAgreement"} className="flex items-center gap-2">
                  <div className="border rounded-[5px] border-[#4CBEC5] w-5 h-5 flex items-center justify-center">
                    <input type="checkbox" name="" id={"salesAgreement"} className="hidden peer" />
                    <div className="w-3.5 h-3.5 rounded-[4px] peer-checked:bg-[#4CBEC5]"></div>
                  </div>
                  <p className="font-bold text-[#4CBEC5] text-[11px] xl:text-sm">
                    &quot;I Have Read and Accept the Sales Agreement&quot;
                  </p>
                </label>
              </div>
            </div>
          </div>
        ) : (
          "..."
        )}
      </div>
      <div className="col-span-12 xl:col-span-3">
        <Sidebar setActivePage={setActivePage} activePage={activePage} />
      </div>
    </div>
  );
};

const ActiveCard: FC<any> = ({ name }) => {
  return (
    <div className="relative flex items-center justify-between sm:justify-center sm:px-12 px-3 text-[10px] leading-3 sm:text-sm py-3.5 cursor-pointer">
      <div className="absolute -top-0.5 left-0 sm:w-[100%] w-[108px] h-[50px] sm:h-[4rem]">
        <SvgActiveCardBg />
      </div>
      <div className="text-[#4CBEC5] z-30 font-bold">{name}</div>
    </div>
  );
};

const FinishedCard: FC<any> = ({ name }) => {
  return (
    <div className="flex items-center justify-center sm:px-12 px-2 text-[10px] leading-3 sm:text-sm py-2 sm:h-[3rem] text-white bg-[#4CBEC5] rounded-full">
      <div className="font-bold">{name}</div>
    </div>
  );
};

const Card: FC<any> = ({ name }) => {
  return (
    <div className="flex items-center justify-center sm:px-12 px-2 text-[10px] leading-3 sm:text-sm py-2 sm:h-[3rem] text-[#7E8096] border border-[#00B1B265] rounded-full">
      <div className="font-bold">{name}</div>
    </div>
  );
};

const DeliveryInfo: FC<any> = ({ content }) => {
  return (
    <div className="bg-white xl:bg-[#F4F5F9] rounded-2xl px-3 xl:px-[2rem] pt-4 xl:pt-6 xl:pb-12 pb-10">
      <div className="text-[#7E8096] font-bold pl-6 text-base py-2">My Delivery Addresses</div>
      <div className="bg-white shadow-sm border border-[#00B1B265] rounded-2xl px-6 py-3 text-sm">
        <div className="flex items-center justify-between">
          <div className="font-bold text-[#4CBEC5] leading-relaxed">{content.addressName}</div>
          <Link
            href="/profile/settings"
            className="text-[#F59C00] cursor-pointer select-none">
            Change
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex xl:flex-row flex-col xl:items-center gap-3 text-[#A0A2AF]">
            <div className="font-bold">{content.name} </div>
            <div className="w-[1px] h-4 bg-[#00B1B265] hidden xl:block"></div>
            <div className="flex items-center gap-3 font-medium">
              {content.address}
              <div className="w-[1px] h-4 bg-[#00B1B265] hidden xl:block"></div>
            </div>
            <div className="flex items-center gap-3 font-bold">{content.telNo}</div>
          </div>
          <div className="flex items-center justify-center px-4 cursor-pointer">
            <div className="w-4 h-3 text-[#4cbec5]">
              <SvgShowMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReceiptInfo: FC<any> = ({ content }) => {
  return (
    <div className="bg-white xl:bg-[#F4F5F9] rounded-2xl px-3 xl:px-[2rem] pt-4 xl:pt-6 xl:pb-12 pb-10">
      <div className="text-[#7E8096] font-bold pl-6 text-base py-2">My Invoice Information</div>
      <div className="bg-white grid shadow-sm border border-[#00B1B265] rounded-2xl px-6 py-3 text-sm relative">
        <div className="flex items-center justify-between">
          <div className="font-bold text-[#4CBEC5] leading-relaxed">{content.addressName}</div>
          <Link
            href="/profile/settings"
            className="text-[#F59C00] cursor-pointer select-none">
            Change
          </Link>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <div className="flex xl:flex-row flex-col xl:items-center gap-3 text-[#A0A2AF] font-bold">
                  <div className="font-bold">{content.name} </div>
                  <div className="w-[1px] h-4 bg-[#00B1B265] hidden xl:block"></div>
                  <div className="flex items-center gap-3 font-medium">
                    {content.address}
                    <div className="w-[1px] h-4 bg-[#00B1B265] hidden xl:block"></div>
                  </div>
                  <div className="flex items-center gap-3 font-bold">{content.telNo}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between">
                <div className="font-bold text-[#4CBEC5] leading-relaxed">{content.receiptType}</div>
              </div>
              <Link
                href="/profile/settings"
                className="text-[#F59C00] cursor-pointer select-none absolute right-5 mt-1">
                Change
              </Link>
              <div className="flex justify-between">
                <div className="flex items-center gap-3 text-[#A0A2AF] font-bold">
                  <div className="font-bold">{content.firmName} </div>
                  <div className="w-[1px] h-4 bg-[#00B1B265]"></div>
                  <div className="flex items-center gap-1 font-medium">
                    {content.taxOffice}: {content.taxNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4">
            <div className="w-4 h-3 text-[#4cbec5]">
              <SvgShowMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StateOne: FC<any> = ({ setState }) => (
  <div className="flex items-center justify-center mb-6 cursor-pointer xl:gap-6">
    <div onClick={() => setState(1)}>
      <ActiveCard name="Delivery Information" />
    </div>
    <div className="w-6 xl:w-16 xl:h-2 h-1 border border-[#00B1B265] rounded-full"></div>
    <div onClick={() => setState(2)}>
      <Card name="Payment Information" />
    </div>
    <div className="w-6 xl:w-16 xl:h-2 h-1 border border-[#00B1B265] rounded-full"></div>
    <div onClick={() => setState(3)}>
      <Card name="Complete Order" />
    </div>
  </div>
);

const StateTwo: FC<any> = ({ setState }) => (
  <div className="flex items-center justify-center mb-6 cursor-pointer xl:gap-6">
    <div onClick={() => setState(1)}>
      <FinishedCard name="Delivery Information" />
    </div>
    <div className="w-6 xl:w-16 xl:h-2 h-1 border border-[#00B1B265] rounded-full bg-[#4CBEC5]"></div>
    <div onClick={() => setState(2)}>
      <ActiveCard name="Payment Information" />
    </div>
    <div className="w-6 xl:w-16 xl:h-2 h-1 border border-[#00B1B265] rounded-full"></div>
    <div onClick={() => setState(3)}>
      <Card name="Complete Order" />
    </div>
  </div>
);

const StateThree: FC<any> = ({ setState }) => (
  <div className="flex items-center justify-center mb-6 cursor-pointer xl:gap-6">
    <div onClick={() => setState(1)}>
      <FinishedCard name="Delivery Information" />
    </div>
    <div className="w-6 xl:w-16 xl:h-2 h-1 border border-[#00B1B265] rounded-full bg-[#4CBEC5]"></div>
    <div onClick={() => setState(2)}>
      <FinishedCard name="Payment Information" />
    </div>
    <div className="w-6 xl:w-16 xl:h-2 h-1 border border-[#00B1B265] rounded-full bg-[#4CBEC5]"></div>
    <div onClick={() => setState(3)}>
      <ActiveCard name="Complete Order" />
    </div>
  </div>
);

export default Payment;
