import React, { FC } from "react";

const SalesRules: FC<any> = () => {
  return (
    <div className="xl:bg-[#F4F5F7] rounded-3xl px-4 xl:px-8 xl:py-12 grid gap-8 select-none text-sm">
      <div className="grid xl:hidden grid-cols-2 xl:grid-cols-5 col-span-3 gap-x-2 xl:gap-x-10 gap-y-3 xl:gap-y-6 start text-[#7E8096]">
        <label htmlFor="pharmacies" className="order-1 h-max bg-white shadow-lg rounded-3xl border border-[#C6C6C665]">
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" id="pharmacies" className="hidden peer" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgMedicine />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Pharmacies{"\n"}&nbsp;
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label htmlFor="medicals" className="order-2 h-max bg-white shadow-lg rounded-3xl border border-[#C6C6C665]">
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="medicals" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgStretescope />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Medicals{"\n"}&nbsp;
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="tradespeople"
          className="order-3 h-max bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="tradespeople" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgTooth />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Tradespeople
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="facility-service-providers"
          className="order-4 xl:order-6 bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="facility-service-providers" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgFacilityServiceProviders />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Facility Service{"\n"}Providers
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="without-gln-uts-code"
          className="order-7 -mt-8 mb-8 bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="without-gln-uts-code" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgGLN_UTSCode />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Without {"\n"}GLN-UTS Code
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="warehouses-manufacturers"
          className="order-8 bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="warehouses-manufacturers" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgWarehouse />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Warehouses and {"\n"}Manufacturers
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="Contractors"
          className="order-5 xl:order-4 bg-white shadow-lg rounded-3xl border border-[#C6C6C665] h-max"
        >
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-4 ">
            <input type="checkbox" className="hidden peer" id="Contractors" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgPaw />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Contractors
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
            <div className="w-full h-2 border-t border-[#00b2b2b2] "></div>

            <div className="flex flex-col gap-3">
              <label htmlFor="individual" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="individual" id="individual" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Individual
              </label>
              <label htmlFor="corporate" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="corporate" id="corporate" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Corporate
              </label>
            </div>
          </div>
        </label>
        <label
          htmlFor="health-professionals"
          className="order-6 xl:order-5 bg-white shadow-lg rounded-3xl border border-[#C6C6C665] h-max"
        >
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="health-professionals" />
            <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
              <SvgDoctor />
            </div>
            <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
              Health {"\n"}Professionals
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
            <div className="w-full border-t border-[#00b2b2b2] rounded h-2"></div>
            <div className="flex flex-col gap-3">
              <label htmlFor="physician" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="physician" id="physician" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Physician
              </label>
              <label htmlFor="family-physician" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="family-physician" id="family-physician" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Family Physician
              </label>
              <label htmlFor="nurse" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="nurse" id="nurse" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Nurse
              </label>
            </div>
          </div>
        </label>
      </div>
      <div className="hidden w-full xl:flex">
        <div className="grow grid grid-cols-3 gap-x-2 xl:gap-x-10 gap-y-3 xl:gap-y-6 start text-[#7E8096]">
          <label
            htmlFor="pharmacies-2"
            className="col-span-1 order-1 h-max bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" id="pharmacies-2" className="hidden peer" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgMedicine />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Pharmacies{"\n"}&nbsp;
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="medicals-2"
            className="col-span-1 order-2 h-max bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="medicals-2" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgStretescope />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Medicals{"\n"}&nbsp;
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="tradespeople-2"
            className="col-span-1 order-3 h-max bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="tradespeople-2" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgTooth />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Tradespeople
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="facility-service-providers-2"
            className="col-span-1 order-4 xl:order-6 bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="facility-service-providers-2" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgFacilityServiceProviders />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Facility Service{"\n"}Providers
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="without-gln-uts-code-2"
            className="order-7 bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="without-gln-uts-code-2" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgGLN_UTSCode />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Without {"\n"}GLN-UTS Code
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="warehouses-manufacturers-2"
            className="order-8 bg-white shadow-lg rounded-3xl border border-[#C6C6C665]"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="warehouses-manufacturers-2" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgWarehouse />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Warehouses and {"\n"}Manufacturers
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className="grow ml-10 grid grid-cols-2 gap-x-2 xl:gap-x-10 gap-y-3 xl:gap-y-6 start text-[#7E8096]">
          <label
            htmlFor="Contractors-2"
            className="order-5 xl:order-4 bg-white shadow-lg rounded-3xl border border-[#C6C6C665] h-max"
          >
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-4 ">
              <input type="checkbox" className="hidden peer" id="Contractors-2" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgPaw />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Contractors
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
              <div
                className="w-full h-2 border-t border-[#00b2b2b2]
              "
              ></div>

              <div className="flex flex-col gap-3">
                <label htmlFor="individual-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="individual" id="individual-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Individual
                </label>
                <label htmlFor="corporate-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="corporate" id="corporate-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Corporate
                </label>
              </div>
            </div>
          </label>
          <label
            htmlFor="health-professionals-2"
            className="order-6 xl:order-5 bg-white shadow-lg rounded-3xl border border-[#C6C6C665] h-max"
          >
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="health-professionals-2" />
              <div className="w-16 h-20 peer-checked:text-[#4CBEC5]">
                <SvgDoctor />
              </div>
              <h3 className="text-center peer-checked:text-[#5E4F9C]  mb-4 font-bold whitespace-pre-line">
                Health {"\n"}Professionals
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
              <div className="w-full border-t border-[#00b2b2b2] h-2"></div>
              <div className="flex flex-col gap-3">
                <label htmlFor="physician-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="physician" id="physician-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Physician
                </label>
                <label htmlFor="family-physician-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="family-physician" id="family-physician-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Family Physician
                </label>
                <label htmlFor="nurse-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="nurse" id="nurse-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-[#00B1B2] rounded-md peer-checked:bg-[#5E4F9C] peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Nurse
                </label>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center w-full col-span-3 xl:col-span-1 xl:flex-none xl:justify-start xl:mt-10">
        <button type="button" className="font-medium xl:font-bold bg-[#5E4F9C] text-white px-10 py-3 rounded-full text-base">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const SvgCheckMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23.205 17.662">
    <path
      id="Path_250"
      data-name="Path 250"
      d="M8283.864,955.082a3.427,3.427,0,0,1-2.351-1.009c-1.852-1.776-3.69-3.615-5.464-5.466a3.2,3.2,0,0,1-.042-4.717,3.16,3.16,0,0,1,2.266-.968,3.66,3.66,0,0,1,2.458,1.02c.611.554,1.215,1.154,1.792,1.786.366.4.709.828,1.07,1.279.048.058.1.118.144.178l2.333-2.348c2.129-2.144,4.148-4.177,6.18-6.2a3.887,3.887,0,0,1,2.709-1.219,3.167,3.167,0,0,1,2.357,1.068,3.213,3.213,0,0,1-.086,4.51c-3.6,3.671-7.337,7.407-11.094,11.1a3.21,3.21,0,0,1-2.272.981Z"
      transform="translate(-8274.993 -937.42)"
      fill="currentColor"
    />
  </svg>
);

const SvgMedicine = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 103.965 110.809">
    <path
      id="Path_251"
      data-name="Path 251"
      d="M7957.61,771.154a17.21,17.21,0,0,0-24.706-12.613c-3,1.554-5.878,3.34-8.82,5.005-.261.148-.489.452-.921.292v-1.162c0-5.41-.039-10.82.015-16.229a13.227,13.227,0,0,0-2.831-8.518c-3.28-4.249-6.456-8.578-9.684-12.867a1.925,1.925,0,0,1-.5-1.26c.032-1.622.029-3.246,0-4.868a.921.921,0,0,1,.6-.979,6.372,6.372,0,0,0,3.722-5.989c.052-3.172.063-6.348,0-9.52a6.488,6.488,0,0,0-6.746-6.76q-19.257-.034-38.515,0a6.393,6.393,0,0,0-6.644,6.5c-.074,3.352-.052,6.707,0,10.06a6.151,6.151,0,0,0,3.635,5.687,1.055,1.055,0,0,1,.68,1.148c-.034,1.478-.04,2.958,0,4.435a2.344,2.344,0,0,1-.546,1.569c-3.276,4.343-6.508,8.72-9.808,13.045a12.631,12.631,0,0,0-2.663,8.018c.05,9.881.015,19.763.02,29.644q0,6.059.037,12.116a8.76,8.76,0,0,0,1.042,3.933,10.706,10.706,0,0,0,10.2,6.192q16.66.024,33.322-.013a1.632,1.632,0,0,1,1.553.83,16.909,16.909,0,0,0,9.163,6.839,11.758,11.758,0,0,1,2.732.791h4.328c.073-.064.142-.177.22-.184a14.746,14.746,0,0,0,6.117-1.957c9.044-5.2,18.177-10.255,27.072-15.7C7956.115,784.708,7958.717,778.61,7957.61,771.154ZM7866.9,711.381q-.006-4.324,0-8.648c.007-1.97.774-2.725,2.763-2.725q18.866,0,37.731,0c1.942,0,2.769.81,2.778,2.742q.021,4.377,0,8.757c-.008,1.99-.825,2.779-2.851,2.78q-9.405,0-18.811,0-9.352,0-18.7,0C7867.608,714.287,7866.9,713.581,7866.9,711.381Zm-7.089,29.638c3.506-4.666,7-9.342,10.518-14a4.1,4.1,0,0,0,.909-2.69c-.04-1.621.014-3.245-.023-4.867-.014-.608.07-.869.794-.867q16.5.039,32.993,0c.761,0,.9.268.859.927a17.674,17.674,0,0,0,0,2.486c.065.767-.2.954-.95.95-5.805-.032-11.61-.018-17.415-.018-.253,0-.5,0-.758,0-1.582.031-2.533.867-2.51,2.2.022,1.288.956,2.113,2.482,2.12,3.281.017,6.562.005,9.843.005,3.173,0,6.346.015,9.519-.012a1.451,1.451,0,0,1,1.337.652q4.9,6.594,9.847,13.148a7.712,7.712,0,0,1,1.384,2.78c.122.488.09.864-.584.748a3.246,3.246,0,0,0-.54,0H7858.31A6.718,6.718,0,0,1,7859.809,741.019Zm36.927,52.709q-15.844-.054-31.688-.009a6.648,6.648,0,0,1-6.819-7.131c.069-1.546.006-1.549,1.5-1.549h18.17c6.2,0,12.4.019,18.6-.021.919-.006,1.056.22.863,1.083a14.964,14.964,0,0,0,.092,6.646C7897.6,793.385,7897.639,793.731,7896.736,793.728Zm2.963-13.7a1.3,1.3,0,0,1-1.288.711q-19.632-.028-39.265.005c-.786,0-.923-.239-.921-.964q.036-14.982,0-29.963c0-.8.249-.917.968-.915q14.711.036,29.422.016c9.627,0,19.254.024,28.881-.031,1.173-.007,1.378.344,1.366,1.422q-.087,7.57,0,15.143a1.718,1.718,0,0,1-1.039,1.738q-6.375,3.632-12.686,7.373A15.645,15.645,0,0,0,7899.7,780.024Zm32.279,13.967c-3.788,2.139-7.542,4.337-11.317,6.5a12.315,12.315,0,0,1-5.734,1.654c-6.366-.016-11.391-3.791-13.028-9.365a12.751,12.751,0,0,1,5.448-14.493c3.815-2.371,7.767-4.521,11.632-6.814.7-.416.828.015,1.079.449q4.716,8.176,9.438,16.346c.9,1.556,1.785,3.121,2.706,4.665C7932.479,793.4,7932.581,793.651,7931.978,793.991Zm15.5-9.016c-3.444,2.152-7.025,4.086-10.529,6.143-.5.3-.706.2-.983-.281q-6.1-10.615-12.25-21.206c-.307-.529-.244-.75.288-1.052,3.379-1.915,6.7-3.927,10.107-5.8a12.944,12.944,0,0,1,19.331,9.426c.1.6.086,1.221.129,1.9A12.64,12.64,0,0,1,7947.478,784.975Zm-69.845-57.714a2.153,2.153,0,1,0,.078-4.3,2.154,2.154,0,0,0-.078,4.3Z"
      transform="translate(-7853.892 -695.668)"
      fill="currentColor"
    />
  </svg>
);

const SvgStretescope = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 117.776 112.053">
    <path
      id="Path_249"
      data-name="Path 249"
      d="M8345.247,757.414a13.526,13.526,0,0,0-9.809-10.777c-1.694-.522-1.748-.456-1.708-2.286a20.652,20.652,0,0,0-2.687-11.34c-4.793-8.048-14.785-10.644-22.464-5.656-5.614,3.647-8.2,9.015-8.216,15.646q-.034,18.57-.007,37.14a23.971,23.971,0,0,1-5.68,16.086,19.411,19.411,0,0,1-27.192,2.559c-6.506-5.372-8.7-12.515-8.356-20.674.019-.406.106-.638.549-.7,3.21-.431,4.573-2.59,5.119-5.5a25.2,25.2,0,0,0,.169-5.733c-.05-1.168.313-1.617,1.424-1.943,11.391-3.345,20.7-13.831,20.218-27.191-.031-.875.291-2.044-.152-2.548-.525-.6-1.732-.233-2.625-.168-.993.071-1.168-.272-1.167-1.2.016-7.9-.065-15.791-.038-23.686.019-5.419-3.381-9.207-7.5-10.114-.526-.116-.718-.472-.927-.9a5.8,5.8,0,0,0-6.5-3.173,5.846,5.846,0,0,0-.308,11.335,5.757,5.757,0,0,0,6.585-2.729c.353-.609.657-.7,1.254-.394a6.028,6.028,0,0,1,3.438,5.877c.013,7.282.063,14.564.091,21.847,0,.99.334,2.274-.156,2.89-.52.654-1.861.141-2.841.216a1.037,1.037,0,0,1-.229,0c-.569-.092-.7.171-.7.707a35.918,35.918,0,0,1-.163,4.934,15,15,0,0,1-7.178,11.318,17.316,17.316,0,0,1-14.579,1.855,15.306,15.306,0,0,1-10.819-10.751,22.947,22.947,0,0,1-.595-7.18c.012-.71-.175-.926-.89-.9-1.416.056-2.836,0-4.254.026-.552.012-.81-.076-.808-.732.024-8.278-.013-16.557.039-24.836a5.688,5.688,0,0,1,3.238-5.187c.677-.366,1.1-.468,1.6.436a5.406,5.406,0,0,0,5.375,2.837,5.815,5.815,0,0,0,5.526-5.462,5.959,5.959,0,0,0-4.273-6.081,5.844,5.844,0,0,0-6.949,3.242,1.257,1.257,0,0,1-.893.784c-4.516.976-7.664,5.118-7.6,10.275.092,7.205.024,14.411.02,21.617,0,.99.332,2.279-.16,2.89-.52.644-1.862.135-2.844.206a1.651,1.651,0,0,1-.344,0c-.464-.063-.572.157-.574.59-.014,3.3-.093,6.6.841,9.809,2.961,10.18,9.8,16.5,19.731,19.673.8.254,1.063.53,1.064,1.376,0,2.442-.279,4.911.438,7.312.633,2.117,1.859,3.783,4.1,4.192,1.188.217,1.35.676,1.318,1.7a28.109,28.109,0,0,0,3.949,16.144c4.762,7.624,11.577,12.036,20.653,12.011,9.035-.024,15.8-4.472,20.524-12.05,3.027-4.857,3.991-10.256,3.965-15.922-.057-12.035-.012-24.07-.023-36.105a16.765,16.765,0,0,1,.52-4.316,13.361,13.361,0,0,1,10.786-9.89c4.953-.633,9.8,2.024,12.423,6.784,1.637,2.965,1.839,6.181,1.82,9.467,0,.9-.247,1.22-1.124,1.409a13.573,13.573,0,0,0-10.644,12.409,13.725,13.725,0,0,0,26.836,4.911c.174-.555.069-1.224.589-1.66V758C8345.19,757.89,8345.291,757.619,8345.247,757.414Zm-76.282-54.566a1.883,1.883,0,0,1-1.942-1.84,1.937,1.937,0,0,1,1.9-2.022,2,2,0,0,1,1.968,1.976A1.947,1.947,0,0,1,8268.965,702.848Zm-23.559-3.863a1.947,1.947,0,0,1,1.9,1.906,1.879,1.879,0,0,1-1.831,1.951,1.933,1.933,0,0,1-2.037-1.878A1.993,1.993,0,0,1,8245.406,698.985Zm-12.059,47.686a21.947,21.947,0,0,1-1.7-7.688c-.031-.593.1-.8.729-.781,1.416.046,2.837.062,4.251,0,.771-.037.929.24.98.957a18.908,18.908,0,0,0,10.519,16.268c9.886,5.261,22.585,1.753,28.031-7.626a18.967,18.967,0,0,0,2.559-8.718c.033-.68.188-.981.907-.872a7.832,7.832,0,0,0,1.147.01c2.062,0,2.062,0,1.806,2.114a24.207,24.207,0,0,1-18.749,20.622,24.629,24.629,0,0,1-6.279.775C8246.763,761.866,8237.377,755.958,8233.348,746.671Zm22.388,26.893a1.966,1.966,0,0,1-2.218-1.7c-.477-1.958-.2-3.955-.272-5.933-.02-.491.273-.419.595-.4,1.106.062,2.213.1,3.32.152v-.119c.992,0,1.99.066,2.975-.022.712-.063,1.021.022.962.839-.124,1.746.159,3.51-.248,5.248-.341,1.457-.885,1.925-2.363,1.94C8257.569,773.574,8256.651,773.578,8255.735,773.564Zm85.774-13.387a9.774,9.774,0,1,1-9.508-10.14A9.685,9.685,0,0,1,8341.51,760.177Zm-9.749-6.263a5.9,5.9,0,0,0-5.873,5.932,5.832,5.832,0,0,0,5.838,5.822,5.91,5.91,0,0,0,5.912-5.9A5.974,5.974,0,0,0,8331.761,753.914Zm0,7.815a1.9,1.9,0,0,1-1.941-1.964,1.951,1.951,0,0,1,1.912-1.9,2.015,2.015,0,0,1,1.964,1.987A1.961,1.961,0,0,1,8331.761,761.729Z"
      transform="translate(-8227.707 -695.046)"
      fill="currentColor"
    />
  </svg>
);

const SvgTooth = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110.725 111.321">
    <path
      id="Path_247"
      data-name="Path 247"
      d="M8650.243,708.137c.5,0,1,.017,1.506.051a23.887,23.887,0,0,1,6.563,1.7l.982.353a24,24,0,0,0,8.159,1.333q.376,0,.755-.01a29.72,29.72,0,0,0,10-2.36,17.006,17.006,0,0,1,6.068-1.106q.675,0,1.358.051a18.6,18.6,0,0,1,17.355,15.731c.76,4.719.044,9.375-.843,13.7-1.209,5.91-3.426,9.6-6.961,15.141a5.621,5.621,0,0,0-.905,2.395c-.214,1.715-.45,3.427-.688,5.14l-.135.321c-.034.248-.289,2.148-.355,2.417a2.856,2.856,0,0,0,0,2.165c.424.669,1.233.692,1.948.712a3.928,3.928,0,0,1,.941.1,2.051,2.051,0,0,0,.59.1c.99,0,1.111-.983,1.157-1.354l.123-1.023c.169-1.432.344-2.492.606-3.923.1-.543.158-1.092.214-1.622a7.994,7.994,0,0,1,.971-3.629c3.162-4.977,5.269-8.2,6.632-13.752,1.278-5.209,2.442-11.383,1.381-17.686-1.438-8.542-6.292-14.6-14.428-18a22.392,22.392,0,0,0-8.677-1.778,24.6,24.6,0,0,0-9.221,1.884,20.662,20.662,0,0,1-16.207-.063,22.853,22.853,0,0,0-11.579-1.622,23.5,23.5,0,0,0-12.383,5.239l3.173,3.6A18.347,18.347,0,0,1,8650.243,708.137Zm15.935,47.652a4.4,4.4,0,0,1,1.242-.187c2.057,0,3.648,1.622,4.054,4.132q1.046,6.45,2.13,12.894c.434,2.589.44,2.846.867,5.436.053.311.172,1.04.975,1.04a1.543,1.543,0,0,0,.341-.041c.469-.1.944-.174,1.421-.247.327-.05.655-.1.982-.159l.088-.015a1.13,1.13,0,0,0,.836-.43.817.817,0,0,0,.109-.658s-.06-.426-.075-.522l-.371-2.466q-1.088-6.559-2.2-13.119c-.067-.392-.124-.788-.183-1.183a15.018,15.018,0,0,0-.981-4.044,8.81,8.81,0,0,0-8.094-5.357,9.367,9.367,0,0,0-.988.053,8.644,8.644,0,0,0-7.709,7.279c-.949,5.406-1.861,10.911-2.745,16.233-.367,2.212-1.622,9.76-1.622,9.76-.39,2.364-.781,4.729-1.2,7.088a3.976,3.976,0,0,1-3.888,3.414l-.107,0a4,4,0,0,1-3.915-3.645l-.146-1c-.082-.548-.164-1.1-.239-1.645l-.937-6.906c-.989-7.283-2.013-14.813-2.979-22.223a13.8,13.8,0,0,0-2-5.787,35.4,35.4,0,0,1-5.05-10.973c-.506-1.851-.76-2.78-2.063-2.78a10.3,10.3,0,0,0-1.986.335,1.218,1.218,0,0,0-1.09,1.716,39.619,39.619,0,0,0,5.464,13,16.168,16.168,0,0,1,2.236,6.762c1.352,10.368,2.76,20.6,4.087,30.191a8.8,8.8,0,0,0,8.307,7.707c.117.005.348.007.349.007a8.523,8.523,0,0,0,8.506-6.882c.858-4.369,1.589-8.834,2.293-13.152.3-1.8.59-3.6.893-5.392q.412-2.445.82-4.893c.572-3.426,1.145-6.851,1.746-10.272A3.7,3.7,0,0,1,8666.178,755.789Zm-35.272-22.115.319-.3a14.393,14.393,0,0,0,1.227-1.263,1.184,1.184,0,0,1,.132-.141,1.806,1.806,0,0,1,.2.186c2.849,2.9,5.209,5.261,7.426,7.418.429.417.457.573.19,1.042a10.185,10.185,0,0,0-1.646,5.086,7.932,7.932,0,0,0,7.99,8,9.049,9.049,0,0,0,3.119-.567c.954-.351,1.9-.733,2.839-1.116.674-.274,1.348-.548,2.026-.81a1.3,1.3,0,0,0,.845-.69,1.249,1.249,0,0,0-.127-.994,11.844,11.844,0,0,1-.8-1.983c-.187-.618-.535-.931-1.032-.931a1.909,1.909,0,0,0-.723.181c-1.566.652-3.343,1.39-5.128,2.01a3.553,3.553,0,0,1-1.158.208,2.954,2.954,0,0,1-2.239-1.075,3,3,0,0,1-.586-3.386c.217-.524.48-1.049.736-1.558l.309-.623c1.147-2.35.876-3.987-.969-5.839l-1.551-1.559c-1.94-1.952-3.946-3.971-5.957-5.923a1.715,1.715,0,0,1-.4-.463s.034-.1.3-.293a6.725,6.725,0,0,0,.97-.917c.105-.115.212-.229.32-.34,1.423-1.451,1.413-2.693-.033-4.149q-.989-1-1.984-1.992-1.538-1.539-3.067-3.089a1.541,1.541,0,0,0-.189-.156c1.229-1.747,1.166-2.436-.337-4.028l-2.727-2.886q-6.126-6.491-12.25-12.985a10.827,10.827,0,0,0-1.8-1.613l-.14-.094c-3.033-1.959-3.076,1.336-3.076,1.336v25.8l1.947,1.682c1.352,1.167,2.7,2.336,4.065,3.491a2.94,2.94,0,0,0,1.87.833,2.359,2.359,0,0,0,1.618-.718c.095-.088.154-.128.167-.147a1.884,1.884,0,0,1,.229.21c1.563,1.6,3.248,3.283,5.151,5.152a2.787,2.787,0,0,0,1.942.979A2.868,2.868,0,0,0,8630.905,733.674Zm-11.1-10.224a1.415,1.415,0,0,1-.15.136c-.016-.015-.035-.036-.058-.062a.861.861,0,0,0-.146-.137c-.307-.264-.648-.512-.99-.758a5.088,5.088,0,0,1-1.683-1.616,4.732,4.732,0,0,1-.145-2.267c.032-.4.063-.8.063-1.183,0-3.156,0-13.166,0-13.166l1.688,1.792c3.068,3.253,6.038,6.4,9.022,9.536.021.024.041.045.055.062-.021.025-.052.057-.095.1C8624.415,718.814,8622.012,721.218,8619.808,723.45Zm5.243,1.578c-.026-.027-.05-.049-.067-.069l.044-.044c1.02-.973,2.026-1.989,3-2.971l.923-.929c.9.925,1.821,1.839,2.737,2.753l1.2,1.2-1.232,1.23c-.87.866-1.741,1.732-2.595,2.616-.051.052-.089.087-.116.111a1,1,0,0,1-.1-.092C8627.5,727.409,8626.108,726.051,8625.051,725.028Zm97.5,25.38a3.053,3.053,0,0,0-2.216-1.394,3.313,3.313,0,0,0-2.26,1.24L8693.5,774.822c-.115.113-.229.225-.338.344a2.47,2.47,0,0,0,.007,3.634,5.682,5.682,0,0,0,.792.774.956.956,0,0,1,.139.121,1.376,1.376,0,0,1-.181.2l-.462.447c-1.7,1.642-3.447,3.34-5.068,5.116-.434.477-.691.541-.886.541a2.475,2.475,0,0,1-.969-.3,20.211,20.211,0,0,0-8.541-2.033,17.921,17.921,0,0,0-10.066,3.209,10.054,10.054,0,0,0-4.827,7.85,10.25,10.25,0,0,0,4.15,8.425,17.6,17.6,0,0,0,10.993,3.583,17.894,17.894,0,0,0,10.94-3.493,10.6,10.6,0,0,0,4.16-7.007,9.145,9.145,0,0,0-2.061-6.836.753.753,0,0,1-.061-.083c.038-.045.1-.106.148-.151l.075-.074q.737-.735,1.478-1.465c1.363-1.348,2.772-2.742,4.117-4.158.3-.32.41-.343.417-.343s.112.017.412.339a3.422,3.422,0,0,0,2.3,1.382,3.631,3.631,0,0,0,2.383-1.388l3.164-3.165q7.537-7.533,15.066-15.072c.419-.42.816-.862,1.214-1.3.175-.2.675-.743.675-.743V750.559Zm-36.673,49.356a12.871,12.871,0,0,1-7.557,2.183,13.044,13.044,0,0,1-7.8-2.3c-1.806-1.385-2.719-2.978-2.639-4.607.084-1.717,1.252-3.359,3.289-4.625a13.086,13.086,0,0,1,7.032-1.9h.105a12.538,12.538,0,0,1,7.542,2.213c1.836,1.331,2.813,2.877,2.824,4.47C8688.684,796.809,8687.716,798.387,8685.874,799.764Zm31.734-38.084-1.543,1.541q-7.856,7.845-15.7,15.705a1.859,1.859,0,0,1-.2.178,1.046,1.046,0,0,1-.124-.13,7.216,7.216,0,0,0-.984-.911c-.461-.375-.982-.8-.974-1.1s.65-.832,1.12-1.218c.285-.235.568-.47.8-.7,0,0,17.884-17.89,17.9-17.91v.3c0,1.215-.008,2.43.015,3.645C8717.934,761.3,8717.867,761.42,8717.608,761.68Z"
      transform="translate(-8611.945 -695.412)"
      fill="currentColor"
    />
  </svg>
);

const SvgPaw = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 123.63 107.735">
    <path
      id="Path_261"
      data-name="Path 261"
      d="M9064.181,804.94a16.616,16.616,0,0,1-6.166-1.186c-7.616-3.031-11.43-3.522-14.417-3.6-.381-.007-.74-.009-1.1-.009a43.809,43.809,0,0,0-17.636,3.383,18.53,18.53,0,0,1-7.019,1.394,18.084,18.084,0,0,1-17.508-13.868,16.051,16.051,0,0,1,1.563-12.577q1.169-1.934,2.334-3.88c4.313-7.187,8.771-14.618,13.978-21.272,5.8-7.413,13.276-11.171,22.219-11.171a35.7,35.7,0,0,1,6.36.6c8.013,1.458,14.471,5.856,19.192,13.071,4.437,6.78,8.97,13.851,13.474,21.017a18.4,18.4,0,0,1,1.624,16.929,17.869,17.869,0,0,1-12.625,10.659,18.652,18.652,0,0,1-4.274.514Zm-23.119-58.117c-8.573.291-15.224,3.7-19.765,10.143-5.219,7.4-9.965,15.071-14.771,22.934a12.878,12.878,0,0,0,2.334,16.717,12.69,12.69,0,0,0,8.8,3.621,15.742,15.742,0,0,0,6.023-1.3,45.238,45.238,0,0,1,17.432-3.537q.725,0,1.456.024a44.438,44.438,0,0,1,15.891,3.473,15.552,15.552,0,0,0,6.02,1.319,12.5,12.5,0,0,0,5.33-1.2,13.434,13.434,0,0,0,7.4-8.382,13.755,13.755,0,0,0-1.752-11.3c-4.485-7.134-8.977-14.149-13.352-20.851-4.878-7.474-11.928-11.4-20.953-11.661h-.043Zm49.09,24.558a13.4,13.4,0,0,1-13.228-12.418,18.5,18.5,0,0,1,13.293-18.976,15.262,15.262,0,0,1,4.048-.562c6.452,0,11.675,4.44,13.02,11.056a1.906,1.906,0,0,0,.248.977v3.969a3.874,3.874,0,0,0-.4,1.429,3.312,3.312,0,0,1-.056.372,18.574,18.574,0,0,1-14.982,14.011A13.419,13.419,0,0,1,9090.151,771.381Zm4.015-27.228a10.6,10.6,0,0,0-2.106.217c-5.682,1.159-10.277,6.788-10.466,12.817a9.381,9.381,0,0,0,2.482,6.922,8.477,8.477,0,0,0,6.161,2.522,10.632,10.632,0,0,0,2.576-.327,13.972,13.972,0,0,0,10-13.648C9102.511,747.649,9098.955,744.153,9094.166,744.153Zm-94.107,10.368a13.676,13.676,0,0,1-6.991-1.943,18.476,18.476,0,0,1-8.918-12.934,1.847,1.847,0,0,0-.247-.907v-4.406a3.443,3.443,0,0,0,.419-1.422,2.866,2.866,0,0,1,.044-.307c1.448-6.54,6.67-10.935,13-10.935.291,0,.586.01.882.029,5.371.344,9.592,3.067,12.543,8.092,3.864,6.58,3.906,12.919.124,18.841a12.794,12.794,0,0,1-10.852,5.892Zm-2.563-28.188a8.621,8.621,0,0,0-7.894,5.433c-2.512,5.8.149,13.6,5.7,16.7a9.8,9.8,0,0,0,4.795,1.323,8.08,8.08,0,0,0,5.876-2.507c2.024-2.064,2.89-4.618,2.9-8.54a13.325,13.325,0,0,0-6.8-11.121A9.059,9.059,0,0,0,8997.5,726.333Zm71.116,16.456c-5.562,0-10.413-3.274-12.979-8.755a19.11,19.11,0,0,1-.246-14.861,18.855,18.855,0,0,1,9.98-10.74,15.144,15.144,0,0,1,5.908-1.225,14.338,14.338,0,0,1,13.407,9.606,18.792,18.792,0,0,1,1.231,6.765c-.326,7.342-3.2,12.757-8.8,16.5a15.327,15.327,0,0,1-8.506,2.709Zm2.613-30.858a10.14,10.14,0,0,0-4.432,1.039c-6.427,3.094-9.791,11.7-7.2,18.418,1.589,4.117,5.034,6.673,8.991,6.673a10.491,10.491,0,0,0,5.144-1.408c4.549-2.535,7.056-6.875,7.451-12.9a14.418,14.418,0,0,0-.865-5.133A9.649,9.649,0,0,0,9071.225,711.931Zm-39.518,24.85a16.037,16.037,0,0,1-13.324-7.419,21.9,21.9,0,0,1-3.795-12.456c.215-7.224,2.8-12.625,7.909-16.473a15.4,15.4,0,0,1,9.291-3.228,16.313,16.313,0,0,1,12.047,5.691c6.945,7.646,6.836,20.964-.232,28.5a16.284,16.284,0,0,1-11.895,5.384Zm.141-34.836a10.484,10.484,0,0,0-5.877,1.809c-4.23,2.853-6.405,7.174-6.649,13.21a17.159,17.159,0,0,0,3.32,10.266,11.433,11.433,0,0,0,9.207,4.844,10.688,10.688,0,0,0,7.354-2.939,16.967,16.967,0,0,0,.1-24.134A10.723,10.723,0,0,0,9031.848,701.945Z"
      transform="translate(-8983.902 -697.205)"
      fill="currentColor"
    />
  </svg>
);

const SvgDoctor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 111.838 111.853">
    <path
      id="Path_262"
      data-name="Path 262"
      d="M9444.684,803.754c-.484,0-.97,0-1.455-.012a1.994,1.994,0,0,1-2.144-1.863c-.013-.857-.033-1.714-.053-2.572a88.654,88.654,0,0,1,.131-9.691c.46-5.229,3.334-8.781,8.786-10.859a2.569,2.569,0,0,0,1.9-2.713c-.073-2.328-.048-4.675-.01-6.864a2.35,2.35,0,0,0-2.065-2.639c-2.4-.456-4.741-1.01-7.335-1.635a3.316,3.316,0,0,0-.779-.1,2.453,2.453,0,0,0-2.147,1.356c-2.516,4.255-5.108,8.566-7.615,12.735l-1.024,1.7a2.833,2.833,0,0,1-2.128,1.647,2.781,2.781,0,0,1-2.095-1.616l-1.395-2.318q-3.642-6.049-7.26-12.116a2.465,2.465,0,0,0-2.153-1.385,3.131,3.131,0,0,0-.757.1c-2.651.656-5.124,1.213-7.558,1.7a2.11,2.11,0,0,0-1.864,2.3c.019,4.464.035,9.652-.011,14.732a2.5,2.5,0,0,0,1.681,2.443,8.807,8.807,0,0,1,5.484,8.262,8.688,8.688,0,0,1-5.09,8.4,8.925,8.925,0,0,1-4.127,1.005,9.281,9.281,0,0,1-8.313-5.258,9.186,9.186,0,0,1,4.5-12.355,2.7,2.7,0,0,0,1.8-2.737c-.03-2.567-.029-5.135-.028-7.7q0-2.57-.008-5.14l.011-.039a1.868,1.868,0,0,0-.346-1.585,1.633,1.633,0,0,0-1.272-.554,2.472,2.472,0,0,0-.488.052c-3.209.633-6.847,1.349-9.839,3.8a16.3,16.3,0,0,0-5.251,7.541c-1.877,5.628-7.415,22.215-7.415,22.215-.044.14-.087.28-.144.415a2.062,2.062,0,0,1-1.9,1.337,2.09,2.09,0,0,1-.685-.119,1.964,1.964,0,0,1-1.283-2.494c.706-2.139,1.4-4.284,2.091-6.43,1.852-5.733,3.767-11.663,5.921-17.376,2.466-6.539,7.491-10.691,14.936-12.34l4.32-.959q6.923-1.538,13.851-3.05a2.177,2.177,0,0,0,1.9-2.395c-.04-2.051-.041-4.229,0-6.658a2.616,2.616,0,0,0-1.328-2.455,27.039,27.039,0,0,1-12.427-17.371,19.358,19.358,0,0,1-.55-3.83c-.165-5.311-.117-10.554-.043-16.367a13.857,13.857,0,0,1,3.314-8.712,29.877,29.877,0,0,1,19.7-11.046c.084.007.15.011.218.011a1.668,1.668,0,0,0,.89-.246h5.855a1.843,1.843,0,0,0,.712.212,29.506,29.506,0,0,1,20.224,10.987,13.8,13.8,0,0,1,3.379,8.787c.045,4.495.027,9.07.011,13.495l-.007,2.016a20.943,20.943,0,0,1-.6,4.686,27.052,27.052,0,0,1-12.416,17.378,2.646,2.646,0,0,0-1.338,2.452c.041,2.177.041,4.416,0,6.655a2.177,2.177,0,0,0,1.893,2.4c6.579,1.42,12.556,2.74,18.27,4.038,7.878,1.789,12.952,6.376,15.512,14.023q.826,2.463,1.644,4.928c1.059,3.186,2.118,6.372,3.2,9.549.267.785.517,1.574.768,2.364.543,1.714,1.105,3.484,1.839,5.2v1.042c-.025.042-.051.085-.074.132-.675,1.349-1.391,1.505-1.871,1.505a2.176,2.176,0,0,1-.227-.012c-.714-.075-1.508-.346-1.98-1.785q-1.8-5.457-3.621-10.9l-1.09-3.267q-.406-1.216-.818-2.428c-.538-1.587-1.095-3.227-1.605-4.845-1.982-6.289-6.3-10.178-12.837-11.56l-.821-.17c-.517-.1-1.033-.209-1.546-.331a2.437,2.437,0,0,0-.564-.072,1.624,1.624,0,0,0-1.185.475,1.952,1.952,0,0,0-.5,1.42c.018,2.031.029,4.2,0,6.338a1.949,1.949,0,0,0,1.588,2.02l.131.041a12.644,12.644,0,0,1,8.86,10,13.3,13.3,0,0,1,.218,2.627c.029,3.346.021,6.74.009,9.93-.006,1.738-.776,2.518-2.5,2.526l-1.572,0q-.658,0-1.316-.005a2.079,2.079,0,0,1-2.294-1.8,2.009,2.009,0,0,1,1.86-2.3,1.792,1.792,0,0,0,1.719-1.928c-.016-.865-.007-1.732,0-2.6a49.236,49.236,0,0,0-.128-5.089,8.5,8.5,0,0,0-8.638-7.8c-.145,0-.289,0-.437.009a8.674,8.674,0,0,0-8.263,8.54c-.041,1.359-.034,2.729-.027,4.055,0,.928.01,1.857,0,2.785a1.86,1.86,0,0,0,1.738,2.04,2,2,0,0,1,1.844,2.288,2.067,2.067,0,0,1-2.293,1.8C9445.85,803.749,9445.267,803.754,9444.684,803.754Zm-41.062-14.35a5.142,5.142,0,0,0-5.137,5.07,5.156,5.156,0,0,0,5.1,5.159,5.157,5.157,0,0,0,5.166-5.09,5.045,5.045,0,0,0-1.472-3.607,5.113,5.113,0,0,0-3.637-1.532Zm18.14-36.806a1.66,1.66,0,0,0-1.22.485,2.148,2.148,0,0,0-.5,1.622c.03,1.726.031,3.576,0,5.655a4.229,4.229,0,0,0,.652,2.372c.92,1.493,1.818,3,2.717,4.506l1.181,1.976,3.882,6.452,1.175-1.25.1-.105a2.069,2.069,0,0,0,.343-.415l2.194-3.649q2.35-3.907,4.7-7.811a3.435,3.435,0,0,0,.466-1.843l0-.684c-.009-1.71-.018-3.478.011-5.208a2.1,2.1,0,0,0-.493-1.606,1.645,1.645,0,0,0-1.213-.481,3.112,3.112,0,0,0-.737.1,27.049,27.049,0,0,1-6.3.762,25.555,25.555,0,0,1-6.227-.774A2.943,2.943,0,0,0,9421.761,752.6Zm-6.235-34.075a3.421,3.421,0,0,0-2.572,1.3c-1.907,2.116-3.643,3.667-5.913,4.356a1.85,1.85,0,0,0-1.358,2.132l.008.1a23.258,23.258,0,0,0,23.342,22.937c.08.005.219.008.361.008a23.61,23.61,0,0,0,4.072-.487c10.5-1.983,18.742-12.165,18.363-22.7l0-.086a1.805,1.805,0,0,0-1.329-1.9c-2.616-.785-4.5-2.8-6.33-4.758a2.756,2.756,0,0,0-2.061-.994,3.543,3.543,0,0,0-1.257.259,33.549,33.549,0,0,1-23.752.142A4.627,4.627,0,0,0,9415.525,718.523Zm13.063-22.483a25.455,25.455,0,0,0-20.57,9.865,8.875,8.875,0,0,0-2.215,5.179c-.084,1.579-.066,3.145-.048,4.8.008.726.018,1.472.018,2.246v3.161l3.628-3.676c1.023-1.039,1.992-2.022,2.968-3s1.453-1.17,1.884-1.17a4.69,4.69,0,0,1,1.747.522,29.829,29.829,0,0,0,25.55-.016,4.539,4.539,0,0,1,1.711-.517c.415,0,.884.193,1.827,1.135.986.986,1.951,1.993,2.915,3,.432.451,2,2.076,2,2.076l1.832-1.036v-6.056a10.57,10.57,0,0,0-2.5-6.872,25.188,25.188,0,0,0-17.693-9.5C9430.6,696.087,9429.578,696.04,9428.588,696.04Z"
      transform="translate(-9372.839 -691.901)"
      fill="currentColor"
    />
  </svg>
);

const SvgFacilityServiceProviders = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110.798 110.818">
    <path
      id="Path_252"
      data-name="Path 252"
      d="M7960.945,1187.867c0-.048,0-.095-.012-.136a11.347,11.347,0,0,0-10.837-8.549c-.529-.01-1.058-.018-1.587-.018-.444,0-.888.006-1.33.023l-.12,0a1.405,1.405,0,0,1-1.086-.419,1.432,1.432,0,0,1-.282-1.148c.151-1.187-.276-2.132-1.524-3.37-6.559-6.508-13.48-13.428-20.571-20.569a4.05,4.05,0,0,0-3.126-1.306q-14.775.026-29.554.021l-21.7,0c-2.268,0-3.151.881-3.152,3.142l0,3.892c0,4.518-.007,9.037.021,13.554a1.859,1.859,0,0,1-.426,1.4,1.693,1.693,0,0,1-1.246.424l-.151,0c-.583-.021-1.167-.039-1.749-.039a12.3,12.3,0,0,0-4.823.791,11.175,11.175,0,0,0-6.84,7.673,1.357,1.357,0,0,0-.034.208,1.961,1.961,0,0,1-.335.973v69.278a1.514,1.514,0,0,1,.308.829,11.235,11.235,0,0,0,8.667,8.442,1.3,1.3,0,0,1,.7.231h91.073a1.745,1.745,0,0,1,1.03-.27h.1a1.032,1.032,0,0,0,.168-.008,11.185,11.185,0,0,0,8.382-8.2.843.843,0,0,0,.019-.121,1.638,1.638,0,0,1,.351-.88v-64.868A1.654,1.654,0,0,1,7960.945,1187.867Zm-37.206-26.7,13.119,13.175-6.859,0q-2.147,0-4.3-.008a1.849,1.849,0,0,1-1.952-1.969q-.014-3.413-.006-6.823Zm-52.29-3.371a1.864,1.864,0,0,1,1.415-.425h.015q6.213.019,12.426.016h19.526c4.017,0,8.033,0,12.078-.02a1.594,1.594,0,0,1,1.86,1.849c-.046,3.518-.037,7.1-.028,10.56l0,2.268a6.9,6.9,0,0,0,7.244,7.29h.6q2.794.006,5.588.008c2.214,0,4.427-.005,6.705-.024a1.844,1.844,0,0,1,1.406.447,1.869,1.869,0,0,1,.429,1.4c-.072,3.355-.045,6.639-.009,9.41a1.512,1.512,0,0,1-1.726,1.786q-7.572-.024-15.142-.022t-15.152.017a1.871,1.871,0,0,1-1.859-1.164c-1.136-2.319-2.292-4.626-3.449-6.934l-1.378-2.753a11.234,11.234,0,0,0-10.875-6.728c-1.5,0-9.494,0-9.494,0-2.944,0-5.887,0-8.864.018a1.506,1.506,0,0,1-1.742-1.736c.049-5.306.047-9.729-.006-13.921A1.81,1.81,0,0,1,7871.449,1157.8Zm84.832,93.49c0,4.327-2.582,6.912-6.9,6.913h-86.913c-4.446,0-7-2.567-7-7.042v-64.417c0-4.425,2.537-6.963,6.961-6.964h.463l15.442.007c4.245,0,8.489-.005,12.773-.022a6.621,6.621,0,0,1,6.45,3.992c.89,1.821,1.8,3.634,2.706,5.447,1.035,2.067,2.071,4.135,3.081,6.215a3.109,3.109,0,0,0,3.192,1.941q11.184-.027,22.368-.022l20.432,0c4.413,0,6.945,2.544,6.945,6.98Q7956.283,1227.8,7956.281,1251.289Zm0-59.282,0,2.2-1.171-.623a12.562,12.562,0,0,0-6.08-1.253c-.535,0-1.07.014-1.606.032l-.171,0a1.574,1.574,0,0,1-1.2-.419,1.681,1.681,0,0,1-.381-1.275c.067-1.6.042-3.225.009-4.883a1.661,1.661,0,0,1,.376-1.254,1.362,1.362,0,0,1,1.018-.38c.067,0,.139,0,.217.01.246.02.493.027.739.027s.49-.006.735-.013.516-.013.775-.013a7.925,7.925,0,0,1,1.916.2,6.273,6.273,0,0,1,4.821,5.962C7956.289,1190.869,7956.286,1191.416,7956.282,1192.007Zm-42.867,18.728a18.023,18.023,0,0,1,6.883.9.655.655,0,0,0,.576-1.162,21.967,21.967,0,1,0-.014,36.506.656.656,0,0,0-.577-1.166,18.021,18.021,0,1,1-6.868-35.075Z"
      transform="translate(-7850.476 -1152.377)"
      fill="currentColor"
    />
  </svg>
);

const SvgGLN_UTSCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 114.701 111.853">
    <g id="Group_138" data-name="Group 138" transform="translate(-8229.245 -1151.859)">
      <path
        id="Path_253"
        data-name="Path 253"
        d="M8343.71,1193l0-.03a19.223,19.223,0,0,0-10.092-14.272c-1.429-.766-1.8-1.42-1.674-2.918a14.265,14.265,0,0,0-.168-4.422c-.711-3.069-3.253-4.828-6.974-4.828-.176,0-.354,0-.536.011a6.259,6.259,0,0,0-6.1,5.447,11.326,11.326,0,0,0-.071,1.789c0,.177,0,.352,0,.539a8.125,8.125,0,0,1-.085,1.712,4.385,4.385,0,0,1-1.158.093s-.67,0-.7-.006c0-.019,0-.358,0-.358.035-2.486.069-5.056-.022-7.589a16.5,16.5,0,0,0-6.625-12.794c-3.028-2.4-6.614-3.511-11.28-3.511-.692,0-1.432.025-2.2.075a2.4,2.4,0,0,0-.09,4.763c.646.064,1.29.073,1.889.073h1.268a11.915,11.915,0,0,1,12.008,10.1,32.188,32.188,0,0,1,.225,6.218c-.027.98-.055,1.99-.041,3.006l-2.8-.006c-.672,0-1.345,0-2.052.025v-.063c.025-2.261.02-4.483.01-6.751-.022-4.653-3.027-7.666-7.656-7.674q-6.107-.011-12.211-.011t-12.205.013c-4.6.009-7.586,2.993-7.612,7.6-.013,2.443-.022,4.647.012,6.865v.016h-.006c-.842-.022-1.685-.037-2.526-.037-.759,0-1.519.012-2.274.044h-.073c0-.039,0-.086,0-.145.027-1.478.022-2.956.019-4.433q0-1.1,0-2.207c.018-7.389,5.184-12.555,12.563-12.562h9.082c1.87,0,.631,0,2.5-.005a3.048,3.048,0,0,0,2.253-.773,2.305,2.305,0,0,0,.625-1.716c-.013-.713-.314-2.372-2.835-2.376q-2.043,0-4.089-.014c-1.744-.007-.379-.014-2.123-.014q-3.022,0-6.046.04a16.728,16.728,0,0,0-16.562,14.128,28.646,28.646,0,0,0-.257,5.754c.018.807.036,1.614.024,2.419v.092a7.522,7.522,0,0,1-.114,1.719,3.266,3.266,0,0,1-1.078.092l-.751-.006a36.032,36.032,0,0,0-.013-3.695c-.23-3.58-2.987-5.894-7.021-5.894h-.12a6.367,6.367,0,0,0-6.715,6.712l0,.573c-.01,1.231-.019,2.5.016,3.762.007.235.007.235-.239.355-7.749,3.82-11.7,10.1-11.726,18.654-.046,12.387-.034,24.982-.023,37.161l.009,9.679a19.94,19.94,0,0,0,19.964,20.242c11.683.034,23.911.051,36.346.051q19.219,0,38.442-.05a19.852,19.852,0,0,0,19.353-15.165,7.084,7.084,0,0,0,.137-.777,2.256,2.256,0,0,1,.291-1.025l.15-.2v-53.427Zm-20.749-18.456c0-.537-.008-1.075.01-1.612a1.458,1.458,0,0,1,1.574-1.53c.176-.009.343-.014.5-.014,1.569,0,2.058.338,2.059,2.451v1.083a4.3,4.3,0,0,0,.044.916c.022.2.06.5.063.634a4.8,4.8,0,0,1-.687-.128,6.585,6.585,0,0,0-.987-.173c-.7-.046-1.354-.069-1.989-.069-.19,0-.383,0-.594.007C8322.969,1175.584,8322.965,1175.063,8322.961,1174.54Zm-51.325-2.668c0-.891-.007-1.783,0-2.674.017-1.863.852-2.695,2.708-2.7q6.129-.012,12.259-.011t12.26.011c1.855,0,2.69.837,2.707,2.7.008.885,0,1.772,0,2.658,0,1.339-.012,2.725.023,4.092a1.364,1.364,0,0,1,0,.158c-.045,0-.184.006-.185.006q-3.7-.029-7.406-.023l-7.4,0-7.4,0c-2.469,0-4.938,0-7.436.023-.063,0-.113,0-.153-.005,0-.041,0-.094,0-.161C8271.647,1174.586,8271.641,1173.206,8271.636,1171.872Zm-25.5.892c.044-.665.249-1.376,2.126-1.376.1,0,.211,0,.321.007,1.079.046,1.619.555,1.653,1.556.016.518.012,1.037.007,1.555s-.008,1.063.009,1.594c-.247-.01-.493-.015-.74-.015a23.343,23.343,0,0,0-3.4.266c0-.174-.006-.348-.01-.522C8246.086,1174.768,8246.07,1173.766,8246.137,1172.764Zm92.935,70.66a15.058,15.058,0,0,1-15.352,15.379q-7.466.016-14.934.014l-22.181-.007-21.954.006q-7.581,0-15.161-.012a15.128,15.128,0,0,1-15.037-12.036,14.76,14.76,0,0,1-.325-3.228q0-9.753,0-19.506,0-13.886.008-27.773a15.169,15.169,0,0,1,15.347-15.29q18.56-.008,37.117-.006t37.117.006a15.048,15.048,0,0,1,15.354,15.4Q8339.089,1219.895,8339.071,1243.424Z"
        fill="currentColor"
      />
      <path
        id="Path_254"
        data-name="Path 254"
        d="M8292.041,1203.419a17.724,17.724,0,0,1,6.767.882.644.644,0,0,0,.566-1.142,21.594,21.594,0,1,0-.014,35.886.645.645,0,0,0-.567-1.146,17.715,17.715,0,1,1-6.752-34.48Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const SvgWarehouse = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 109.288 110.929">
    <g id="Group_142" data-name="Group 142" transform="translate(-8612.672 -1160.302)">
      <g id="Group_141" data-name="Group 141">
        <g id="Group_140" data-name="Group 140">
          <g id="Group_139" data-name="Group 139">
            <path
              id="Path_255"
              data-name="Path 255"
              d="M8716.478,1183.007v1.338q0,40.968-.03,81.936c0,1.14.31,1.41,1.368,1.308,1.014-.1,2.053.054,3.067-.044.954-.091,1.091.3,1.076,1.132-.046,2.533-.013,2.533-2.5,2.533q-16.387,0-32.774.021c-.894,0-1.23-.127-1.2-1.132.082-2.53.023-2.532,2.507-2.532,3.034,0,6.07-.036,9.1.023.9.017,1.2-.144,1.193-1.136q-.062-18.891,0-37.782c0-1.07-.335-1.187-1.259-1.185-14.339.028-28.678.01-43.016.04-.974,0-1.356-.152-1.312-1.248.1-2.413.029-2.415,2.4-2.415q20.94,0,41.879.02c.974,0,1.354-.154,1.31-1.248-.1-2.411-.029-2.413-2.4-2.413q-21,0-41.993.021c-.9,0-1.225-.143-1.192-1.138.08-2.525.024-2.526,2.511-2.526q20.938,0,41.879.021c.9,0,1.224-.144,1.191-1.138-.08-2.523-.023-2.524-2.513-2.524q-20.94,0-41.879.021c-.906,0-1.221-.15-1.189-1.14.08-2.523.024-2.524,2.514-2.524q20.938,0,41.879.021c.907,0,1.22-.152,1.188-1.141-.08-2.52-.023-2.521-2.516-2.521h-60.429c-2.111,0-2.638-.516-2.639-2.588,0-2.01-.006-4.021,0-6.031,0-1.66.62-2.3,2.234-2.305q32.376,0,64.753,0c1.621,0,2.209.665,2.209,2.446q0,34.538-.027,69.077c0,1.087.229,1.379,1.336,1.344,2.918-.091,5.841-.056,8.761-.012.7.01.873-.169.873-.873q-.029-41.879.013-83.758c0-1.059-.653-1.015-1.255-1.16q-21.289-5.149-42.575-10.3a7,7,0,0,0-3.434.012q-21.391,5.193-42.8,10.314c-.842.2-1.036.537-1.032,1.348.032,7.131,0,14.263.039,21.394,0,.868-.185,1.139-1.095,1.116-2.568-.064-2.569-.018-2.569-2.579v-20.106c-1.06.25-2.012.482-2.967.7a1.838,1.838,0,0,1-2.489-1.926c-.024-2.238-.014-4.476,0-6.715.008-1.371.414-1.871,1.788-2.2q25.371-6.135,50.736-12.292a9.052,9.052,0,0,1,4.446.048q25.031,6.074,50.073,12.1c1.885.455,2.214.877,2.215,2.813,0,1.973,0,3.946,0,5.918-.008,1.915-.89,2.612-2.733,2.185C8718.326,1183.417,8717.444,1183.224,8716.478,1183.007Zm1.82-3.348c0-.931-.061-1.731.018-2.518s-.194-1.091-.974-1.277q-24.5-5.879-48.986-11.817a4.347,4.347,0,0,0-2.111.019q-17.256,4.194-34.521,8.354c-4.854,1.173-9.711,2.338-14.561,3.527-.333.082-.879-.046-.849.643.043,1,.011,2.009.011,3.065.535-.125.939-.217,1.343-.314q24.438-5.893,48.874-11.795a3.19,3.19,0,0,1,1.563.008q12.188,2.952,24.381,5.88Zm-51.1,22.353h28.677c2.4,0,2.339,0,2.421-2.387.036-1.035-.25-1.281-1.279-1.279q-29.076.051-58.15.025c-2.513,0-2.462,0-2.534,2.5-.028.95.219,1.169,1.165,1.165C8647.394,1202,8657.295,1202.012,8667.2,1202.012Z"
              fill="currentColor"
            />
          </g>
        </g>
        <path
          id="Path_256"
          data-name="Path 256"
          d="M8647.162,1271.21h-31.97c-1.946,0-2.511-.558-2.512-2.488q0-28.5,0-57c0-1.849.583-2.422,2.459-2.422q15.759,0,31.517,0c1.861,0,2.441.579,2.442,2.441,0,8.533.015,17.066-.019,25.6,0,.862.177,1.122,1.09,1.118,9.709-.037,19.418-.023,29.127-.023,2.03,0,2.58.538,2.58,2.532q0,13.881,0,27.762c0,1.921-.571,2.483-2.517,2.483Zm16.414-3.642c4.59,0,9.18-.011,13.77.013.639,0,.914-.068.911-.833q-.05-11.949,0-23.9c0-.68-.228-.8-.837-.788-1.859.036-3.719.059-5.576-.008-.8-.029-.911.265-.9.959.036,2.541.019,5.083.013,7.625,0,1.724-.616,2.358-2.3,2.361q-5.007.01-10.016,0c-1.623,0-2.248-.642-2.252-2.288-.008-2.58-.036-5.16.019-7.739.016-.775-.235-.931-.949-.912-1.819.048-3.643.06-5.461-.005-.783-.027-.911.245-.909.952q.035,11.835,0,23.671c0,.782.248.912.952.907C8654.547,1267.553,8659.062,1267.568,8663.576,1267.568Zm-32.7-29.136c4.552,0,9.105-.016,13.657.016.715.005.948-.145.944-.914q-.047-11.835,0-23.671c0-.719-.146-.971-.917-.945-1.817.062-3.642.055-5.461,0-.726-.02-.957.157-.941.92.052,2.578.024,5.159.018,7.738,0,1.638-.638,2.279-2.261,2.283q-5.008.012-10.015,0c-1.646,0-2.282-.631-2.288-2.253-.01-2.618-.021-5.236.011-7.853.008-.614-.116-.852-.792-.835-1.9.048-3.795.062-5.689,0-.776-.028-.829.287-.828.916q.028,11.835-.01,23.671c0,.861.3.949,1.032.944C8621.847,1238.416,8626.362,1238.432,8630.876,1238.432Zm.014,29.136q6.829,0,13.656,0c.466,0,.938.159.933-.682q-.05-12.063-.009-24.127c0-.548-.151-.7-.7-.695-1.935.031-3.87.04-5.8,0-.649-.015-.817.18-.809.817.035,2.617.021,5.235.012,7.853,0,1.627-.644,2.265-2.273,2.269q-5.008.01-10.016,0c-1.633,0-2.269-.639-2.273-2.267-.009-2.618-.022-5.235.012-7.852.009-.634-.153-.836-.807-.821-1.857.045-3.719.052-5.575,0-.738-.021-.937.178-.935.926q.044,11.836,0,23.672c0,.738.182.938.928.932C8621.785,1267.55,8626.337,1267.568,8630.89,1267.568Zm32.72-18.21c1.023,0,2.049-.025,3.07.01.5.017.649-.13.643-.634q-.042-3.015,0-6.03c.006-.494-.131-.648-.636-.641q-3.013.04-6.028,0c-.494-.006-.648.132-.643.635q.042,3.015,0,6.03c-.006.494.131.66.637.641C8661.636,1249.331,8662.623,1249.358,8663.609,1249.358Zm-32.773,0c1.024,0,2.049-.026,3.071.011.5.018.643-.144.636-.64q-.04-3.015,0-6.03c.007-.5-.145-.642-.641-.636q-3.015.039-6.029,0c-.5-.007-.642.145-.636.64q.038,3.015,0,6.03c-.007.5.144.653.64.635C8628.863,1249.333,8629.85,1249.358,8630.836,1249.358Zm.159-36.363c-1.208,0-2.842-.475-3.51.125-.767.689-.194,2.347-.227,3.583-.03,1.131-.41,2.66.162,3.29.655.722,2.205.195,3.365.219,1.207.025,2.839.439,3.511-.17.765-.695.193-2.349.226-3.585.029-1.131.408-2.652-.161-3.293C8633.7,1212.425,8632.153,1213.046,8631,1212.995Z"
          fill="currentColor"
        />
        <path
          id="Path_257"
          data-name="Path 257"
          d="M8667.33,1178.342c1.252,0,2.5-.028,3.755.005a5.453,5.453,0,0,1,.075,10.9c-2.578.06-5.16.065-7.738,0a5.452,5.452,0,0,1,.039-10.9C8664.749,1178.308,8666.04,1178.343,8667.33,1178.342Zm0,7.281c1.134,0,2.269.015,3.4-.005a1.826,1.826,0,1,0,.021-3.63q-3.458-.03-6.918,0a1.82,1.82,0,1,0-.021,3.627C8664.983,1185.643,8666.155,1185.622,8667.327,1185.623Z"
          fill="currentColor"
        />
        <path
          id="Path_258"
          data-name="Path 258"
          d="M8674.595,1262.215c0,1.711,0,1.711-1.7,1.711-1.937,0-1.937,0-1.937-1.931,0-1.711,0-1.711,1.7-1.711C8674.595,1260.284,8674.595,1260.284,8674.595,1262.215Z"
          fill="currentColor"
        />
        <path
          id="Path_259"
          data-name="Path 259"
          d="M8639.892,1234.79c-1.717,0-1.717,0-1.717-1.7,0-1.944,0-1.944,1.925-1.944,1.718,0,1.718,0,1.718,1.7C8641.817,1234.79,8641.817,1234.79,8639.892,1234.79Z"
          fill="currentColor"
        />
        <path
          id="Path_260"
          data-name="Path 260"
          d="M8641.817,1262.109c0,1.817,0,1.817-1.825,1.817s-1.817,0-1.817-1.825,0-1.817,1.824-1.817S8641.817,1260.284,8641.817,1262.109Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default SalesRules;
