import { NextPage } from "next";
import Image from "next/image";
import { FC, useState } from "react";
import IntegratorModal from "../../components/integrator/IntegratorModal";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import { SvgShowMore } from "../../helpers/svgs/entegratorSvg";

const Integrators: NextPage = () => {
  const [select, setSelect] = useState<any>("Our Account");
  return (
    <ProfileLayout>
      <div className="border-xl xl:bg-[#F4F5F7] rounded-3xl px-4 sm:px-8 xl:py-10 mb-4 xl:mb-0 gap-6 flex flex-col text-sm">
        <div className="flex xl:ml-2 ">
          <label htmlFor="1" className="relative rounded-full shadow-sm bg-[#4CBEC5] w-full xl:w-1/5">
            <select
              id="1"
              onChange={(e) => setSelect(e.target.value)}
              className="w-full px-5 py-2 text-white bg-transparent rounded-full outline-none appearance-none peer xl:px-8 xl:py-3"
            >
              <option className="bg-[#4CBEC5]" value="Our Account">
                Our Account
              </option>
              <option className="bg-[#4CBEC5]" value="Bi Invoice">
                Bi Invoice
              </option>
            </select>
            <div className="absolute w-3 h-3 text-white transition duration-300 ease-in-out transform rotate-180 peer-focus:rotate-0 right-6 top-3 xl:top-5">
              <SvgShowMore />
            </div>
          </label>
        </div>
        <div className="w-full space-y-2 xl:ml-2">
          <p className="text-[#4CBEC5] xl:pl-4 font-medium ml-5">Status *</p>
          <div className="flex">
            <label htmlFor="2" className="relative z-10 w-full bg-white rounded-full shadow-sm xl:w-1/5">
              <select
                id="2"
                defaultValue={"Inactive"}
                className="peer px-5 xl:px-8 pr-24 py-2 xl:py-3 w-full font-medium text-[#4CBEC5] xl:text-[#A0A2AF] text-sm border border-[#00B1B2] xl:border-[#C6C6C69C] bg-transparent rounded-full outline-none appearance-none"
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="peer-focus:rotate-0 transform rotate-180 transition ease-in-out duration-300 absolute w-3 h-3 right-6 top-3 xl:top-5 text-[#4CBEC5]">
                <SvgShowMore />
              </div>
            </label>
          </div>
        </div>
        {select === "Our Account" ? <CardOne /> : <CardTwo />}
      </div>
      <div className="hidden xl:ml-10 xl:block">
        <Image src="/images/photos/entegrator.svg" width={1000} height={100} alt="logo" />
      </div>
    </ProfileLayout>
  );
};

const CardOne = () => (
  <>
    <div className="space-y-2 xl:mx-2">
      <p className="text-[#4CBEC5] font-medium xl:px-4 ml-5">Your Product XML Link *</p>
      <div className="relative ">
        <input
          type="text"
          className="w-full py-2 text-[12px] font-medium xl:font-normal xl:text-sm xl:py-3 rounded-full shadow-sm border border-[#00B1B2] xl:border-[#C6C6C69C] outline-none px-5 xl:px-9 text-[#A0A2AF] placeholder:text-[#7E8096] xl:placeholder:text-[#A0A2AF]"
          placeholder="https://cdn1.xmlbankasi.com/p1/lxxxvlkhzqxg/image/data/xml/tradlia.xml"
        />
        <div className="absolute top-[3px] right-1">
          <button type="button" className="bg-[#4CBEC5] text-white px-8 py-1.5 xl:py-2.5 rounded-full text-sm font-medium">
            Check
          </button>
        </div>
      </div>
    </div>
    <div className="space-y-2 xl:mx-2 ">
      <p className="text-[#4CBEC5] font-medium xl:px-4 ml-5">Your Product Order Link</p>
      <input
        type="text"
        className="w-full py-2 xl:py-3 rounded-full font-medium xl:font-normal text-[12px] xl:text-sm  shadow-sm border border-[#00B1B2] xl:border-[#C6C6C69C] outline-none px-5 xl:px-9 text-[#A0A2AF] placeholder:text-[#7E8096] xl:placeholder:text-[#A0A2AF]"
        placeholder="https://www.tradlia.com/en/entegra/orders/194/tFe6xANd9Xm1WQiU"
      />
    </div>
    <div className="xl:pt-6 xl:mx-6 ">
      <p className="xl:px-4 font-extrabold text-[#FB295A]">Dear Valued Member,</p>
      <p className="xl:px-4 xl:pr-0 py-2 xl:py-0 xl:leading-8 text-[#FB295A] my-4">
        After receiving this Integra Order XML from TRADLIA.COM, you need to contact the Integra Support Team and share
        the following text.
      </p>
      <div className="leading-5 ">
        <p className="xl:px-4 xl:pr-0 font-bold text-[#FB295A]">
          &ldquo;The barcodes in my Order XML are the same as the barcodes in Integra. Please match the products in my
          Order XML with the barcodes in Integra and configure the XML
        </p>
        <p className="xl:px-4 font-bold text-[#FB295A]">settings accordingly.&rdquo;</p>
      </div>

      <p className="xl:px-4 text-sm text-[#FB295A] my-5">Thank you very much for your valuable cooperation.</p>
      <p className="xl:px-4  text-[#FB295A]">www.tradlia.com</p>
    </div>
  </>
);

const CardTwo: FC<any> = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal && <IntegratorModal setModal={setModal} />}
      <div className="space-y-2 xl:mx-2">
        <p className="text-[#4CBEC5] font-medium px-4 xl:ml-5">ClientName *</p>
        <div className="relative ">
          <input
            type="text"
            className="w-full py-2 xl:py-3 text-[12px] font-medium xl:font-normal xl:text-sm rounded-full  shadow-sm border border-[#00B1B2] xl:border-[#C6C6C69C] outline-none px-4 xl:px-9 text-[#A0A2AF] placeholder:text-[#7E8096] xl:placeholder:text-[#A0A2AF]"
            placeholder="ixZUbeLpkcQzqmOH"
          />
        </div>
      </div>
      <div className="space-y-2 xl:mx-2 ">
        <p className="text-[#4CBEC5] font-medium px-4 xl:ml-5">ClientSecretKey *</p>
        <input
          type="text"
          className="w-full py-2 xl:py-3 text-[12px] font-medium xl:font-normal xl:text-sm rounded-full  shadow-sm border border-[#00B1B2] xl:border-[#C6C6C69C] outline-none px-4 xl:px-9 text-[#A0A2AF] placeholder:text-[#7E8096] xl:placeholder:text-[#A0A2AF]"
          placeholder="ixZUbeLpkcQzqmOH"
        />
      </div>
      <div className="w-full pb-52">
        <button type="button"
          onClick={() => setModal(true)}
          className="w-full xl:w-1/5 bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white px-3 py-2 rounded-full text-base shadow-sm xl:ml-2"
        >
          Reset Information
        </button>
      </div>
    </>
  );
};

export default Integrators;
