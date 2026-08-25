import React, { FC } from "react";

const SalesRules: FC<any> = () => {
  return (
    <div className="rounded-card border border-line bg-surface shadow-card rounded-3xl px-4 xl:px-8 xl:py-12 grid gap-8 select-none text-sm">
      <div className="grid xl:hidden grid-cols-2 xl:grid-cols-5 col-span-3 gap-x-2 xl:gap-x-10 gap-y-3 xl:gap-y-6 start text-ink-muted">
        <label htmlFor="retail-chains" className="order-1 h-max rounded-card border border-line bg-surface shadow-card">
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" id="retail-chains" className="hidden peer" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgStorefront />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Retail Chains{"\n"}&nbsp;
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label htmlFor="workshops" className="order-2 h-max rounded-card border border-line bg-surface shadow-card">
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="workshops" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgWrench />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Workshops{"\n"}&nbsp;
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="tradespeople"
          className="order-3 h-max rounded-card border border-line bg-surface shadow-card"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="tradespeople" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgHardHat />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Tradespeople
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="facility-service-providers"
          className="order-4 xl:order-6 rounded-card border border-line bg-surface shadow-card"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="facility-service-providers" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgFacilityServiceProviders />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Facility Service{"\n"}Providers
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="without-gln-uts-code"
          className="order-7 -mt-8 mb-8 rounded-card border border-line bg-surface shadow-card"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="without-gln-uts-code" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgGLN_UTSCode />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Without {"\n"}GLN-UTS Code
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="warehouses-manufacturers"
          className="order-8 rounded-card border border-line bg-surface shadow-card"
        >
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="warehouses-manufacturers" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgWarehouse />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Warehouses and {"\n"}Manufacturers
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
        <label
          htmlFor="Contractors"
          className="order-5 xl:order-4 rounded-card border border-line bg-surface shadow-card h-max"
        >
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-4 ">
            <input type="checkbox" className="hidden peer" id="Contractors" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgVest />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Contractors
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
            <div className="w-full h-2 border-t border-line "></div>

            <div className="flex flex-col gap-3">
              <label htmlFor="individual" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="individual" id="individual" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Individual
              </label>
              <label htmlFor="corporate" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="corporate" id="corporate" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
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
          htmlFor="procurement-teams"
          className="order-6 xl:order-5 rounded-card border border-line bg-surface shadow-card h-max"
        >
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-4">
            <input type="checkbox" className="hidden peer" id="procurement-teams" />
            <div className="w-16 h-20 peer-checked:text-brand-600">
              <SvgBadge />
            </div>
            <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
              Procurement {"\n"}Teams
            </h3>
            <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
            <div className="w-full border-t border-line rounded h-2"></div>
            <div className="flex flex-col gap-3">
              <label htmlFor="buyers" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="buyers" id="buyers" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Buyers
              </label>
              <label htmlFor="planners" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="planners" id="planners" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Planners
              </label>
              <label htmlFor="managers" className="flex items-center gap-1 cursor-pointer">
                <input type="checkbox" name="managers" id="managers" className="hidden peer" />
                <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                  <div className="w-3 h-3">
                    <SvgCheckMark />
                  </div>
                </div>
                Managers
              </label>
            </div>
          </div>
        </label>
      </div>
      <div className="hidden w-full xl:flex">
        <div className="grow grid grid-cols-3 gap-x-2 xl:gap-x-10 gap-y-3 xl:gap-y-6 start text-ink-muted">
          <label
            htmlFor="retail-chains-2"
            className="col-span-1 order-1 h-max rounded-card border border-line bg-surface shadow-card"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" id="retail-chains-2" className="hidden peer" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgStorefront />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
                Retail Chains{"\n"}&nbsp;
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="workshops-2"
            className="col-span-1 order-2 h-max rounded-card border border-line bg-surface shadow-card"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="workshops-2" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgWrench />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
                Workshops{"\n"}&nbsp;
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="tradespeople-2"
            className="col-span-1 order-3 h-max rounded-card border border-line bg-surface shadow-card"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="tradespeople-2" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgHardHat />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
                Tradespeople
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="facility-service-providers-2"
            className="col-span-1 order-4 xl:order-6 rounded-card border border-line bg-surface shadow-card"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="facility-service-providers-2" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgFacilityServiceProviders />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
                Facility Service{"\n"}Providers
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="without-gln-uts-code-2"
            className="order-7 rounded-card border border-line bg-surface shadow-card"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="without-gln-uts-code-2" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgGLN_UTSCode />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
                Without {"\n"}GLN-UTS Code
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
          <label
            htmlFor="warehouses-manufacturers-2"
            className="order-8 rounded-card border border-line bg-surface shadow-card"
          >
            <div className="flex flex-col items-center justify-center gap-3 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="warehouses-manufacturers-2" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgWarehouse />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
                Warehouses and {"\n"}Manufacturers
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
            </div>
          </label>
        </div>
        <div className="grow ml-10 grid grid-cols-2 gap-x-2 xl:gap-x-10 gap-y-3 xl:gap-y-6 start text-ink-muted">
          <label
            htmlFor="Contractors-2"
            className="order-5 xl:order-4 rounded-card border border-line bg-surface shadow-card h-max"
          >
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-4 ">
              <input type="checkbox" className="hidden peer" id="Contractors-2" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgVest />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
                Contractors
              </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
              <div
                className="w-full h-2 border-t border-line
              "
              ></div>

              <div className="flex flex-col gap-3">
                <label htmlFor="individual-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="individual" id="individual-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Individual
                </label>
                <label htmlFor="corporate-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="corporate" id="corporate-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
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
            htmlFor="procurement-teams-2"
            className="order-6 xl:order-5 rounded-card border border-line bg-surface shadow-card h-max"
          >
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-4">
              <input type="checkbox" className="hidden peer" id="procurement-teams-2" />
              <div className="w-16 h-20 peer-checked:text-brand-600">
                <SvgBadge />
              </div>
              <h3 className="text-center peer-checked:text-brand-700  mb-4 font-bold whitespace-pre-line">
            Procurement {"\n"}Teams
          </h3>
              <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
              <div className="w-full border-t border-line h-2"></div>
              <div className="flex flex-col gap-3">
                <label htmlFor="buyers-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="buyers" id="buyers-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Buyers
                </label>
                <label htmlFor="planners-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="planners" id="planners-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Planners
                </label>
                <label htmlFor="managers-2" className="flex items-center gap-1 cursor-pointer">
                  <input type="checkbox" name="managers" id="managers-2" className="hidden peer" />
                  <div className="flex items-center text-transparent peer-checked:text-white justify-center w-5 h-5 border border-brand-300 rounded-md peer-checked:bg-brand-600 peer-checked:border-transparent">
                    <div className="w-3 h-3">
                      <SvgCheckMark />
                    </div>
                  </div>
                  Managers
                </label>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center w-full col-span-3 xl:col-span-1 xl:flex-none xl:justify-start xl:mt-10">
        <button type="button" className="font-medium xl:font-bold bg-brand-600 text-white px-10 py-3 rounded-full text-base">
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

const SvgStorefront = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110 110">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 20 H100 L106 46 A10 10 0 0 1 86 46 A10 10 0 0 1 66 46 A10 10 0 0 1 46 46 A10 10 0 0 1 26 46 A10 10 0 0 1 10 46 Z M18 54 H92 V100 H18 Z M60 72 H82 V100 H60 Z M28 64 H48 V82 H28 Z"
    />
  </svg>
);

const SvgWrench = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110 110">
    <path
      fill="currentColor"
      d="M86 6 a28 28 0 0 0 -27 35 L20 80 a12 12 0 0 0 17 17 l39 -39 a28 28 0 0 0 35 -27 l-16 16 -18 -4 -4 -18 Z"
    />
  </svg>
);

const SvgHardHat = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110 110">
    <path
      fill="currentColor"
      d="M20 68 Q20 30 55 30 Q90 30 90 68 Z M10 68 H100 A6 6 0 0 1 100 80 H10 A6 6 0 0 1 10 68 Z M48 30 H62 V18 Q62 12 55 12 Q48 12 48 18 Z"
    />
  </svg>
);

const SvgVest = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110 110">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M30 14 L46 8 Q55 20 64 8 L80 14 L86 100 H24 Z M40 40 H70 V48 H40 Z M40 62 H70 V70 H40 Z"
    />
  </svg>
);

const SvgBadge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 110 110">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M30 18 H80 A8 8 0 0 1 88 26 V94 A8 8 0 0 1 80 102 H30 A8 8 0 0 1 22 94 V26 A8 8 0 0 1 30 18 Z M42 8 H68 V20 H42 Z M55 40 a11 11 0 1 0 0.001 0 Z M36 64 H74 V70 H36 Z M36 78 H62 V84 H36 Z"
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
