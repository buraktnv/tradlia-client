import { FC } from "react";
import { SvgCheckMark, SvgMngCargo, SvgDomesticCargo } from "../../../../helpers/svgs/settingSvg";
import InputAddvert from "../../commonComponents/InputAddvert";

const ShippingCompanies: { id: number; selectId: string; name: string }[] = [
  { id: 0, selectId: "firstShippingCompany", name: "FedEx" },
  { id: 1, selectId: "secondShippingCompany", name: "UPS" },
];
const Shipment: FC<any> = () => {
  return (
    <div className="grid gap-3 xl:gap-[0.75rem]">
      <div className="rounded-card border border-line bg-surface shadow-card rounded-3xl xl:px-[2rem] xl:py-[3rem]">
        <div className="px-5 pb-4 xl:px-10 leading-3 text-successDark xl:text-lg py-2 xl:py-0 xl:pb-4 font-semibold xl:font-bold font-ubuntu">
          Shipping Company Selection
        </div>
        <div className="grid gap-4 xl:grid-cols-2 xl:gap-4">
          <div className="drop-shadow-input-shadow">
            <ShippingCompanySelection text="First Shipping Company Preference" id={0} />
          </div>
          <div className="drop-shadow-input-shadow">
            <ShippingCompanySelection text="Second Shipping Company Preference" id={1} />
          </div>
        </div>
      </div>
      <div className="rounded-card border border-line bg-surface shadow-card rounded-3xl flex flex-col justify-evenly items-start gap-3 xl:gap-6 xl:px-[2rem] xl:py-[3rem]">
        <div className="px-5 xl:px-10 text-successDark xl:text-lg xl:pt-0 font-bold xl:font-bold font-ubuntu">
          Shipping Campaign Selection
        </div>
        <div className="flex items-center gap-4 px-5 xl:px-10">
          <label htmlFor="shipping_campaign_1">
            <input type="checkbox" name="shipping_campaign_1" id="shipping_campaign_1" className="hidden peer" />
            <div className="flex items-center cursor-pointer text-transparent peer-checked:text-white justify-center w-6 h-6 border border-success rounded-md peer-checked:bg-success peer-checked:border-transparent">
              <div className="w-3.5 h-3.5">
                <SvgCheckMark />
              </div>
            </div>
          </label>
          <label htmlFor="shipping_campaign_1">
            <InputAddvert
              placeholder="$1,000.00"
              type="text"
              separate="bg-white py-3 xl:py-2.5 text-center xl:placeholder:font-bold text-base text-ink-muted rounded-full xl:px-0 text-ink-muted text-sm font-bold"
            />
          </label>
          <label htmlFor="shipping_campaign_1" className="cursor-pointer text-ink-muted text-sm font-bold font-ubuntu">
            Free Shipping Above!
          </label>
        </div>
        <div className="flex items-center gap-4 px-5 xl:px-10">
          <label htmlFor="shipping_campaign_2">
            <input type="checkbox" name="shipping_campaign_2" id="shipping_campaign_2" className="hidden peer" />

            <div className="flex items-center cursor-pointer text-transparent peer-checked:text-white justify-center w-6 h-6 border border-success rounded-md peer-checked:bg-success peer-checked:border-transparent">
              <div className="w-3.5 h-3.5">
                <SvgCheckMark />
              </div>
            </div>
          </label>
          <label htmlFor="shipping_campaign_2" className="cursor-pointer text-ink-muted text-sm font-bold font-ubuntu">
            I Don't Want to Run a Shipping Campaign!
          </label>
        </div>
        <div className="text-xs xl:text-[0.85rem] text-ink-muted px-5 xl:px-10 font-ubuntu">
          Offer free shipping options to buyers with Tradlia&apos;s special shipping agreements and boost your sales
          performance.
        </div>
      </div>
      <div className="rounded-card border border-line bg-surface shadow-card xl:h-full rounded-3xl xl:px-[2rem] xl:py-[3rem] py-2">
        <div className="px-5 xl:px-10 text-successDark xl:text-lg xl:pb-4 xl:pt-0 font-semibold xl:font-bold font-ubuntu">
          Other Sales Settings
        </div>
        <div className="grid gap-3 py-4 xl:gap-4">
          <div className="">
            <div className="grid gap-3 xl:grid-cols-8 xl:gap-8">
              <div className="col-span-3">
                <div className="space-y-1 ">
                  <label htmlFor="1" className=" xl:font-medium  text-ink-muted px-5 xl:ml-5 font-ubuntu">
                    Shipping Dispatch Day
                  </label>
                  <div className="relative group">
                    <select className="peer appearance-none w-full h-full bg-white px-6 py-3 xl:py-3.5 pl-5 xl:pl-10 outline-none font-bold text-ink-muted xl:text-ink-muted rounded-full border border-line drop-shadow-input-shadow">
                      <option value="same-day-shipping">Same Day Shipping</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 26.883 15.423"
                      fill="currentColor"
                      className="peer-focus:rotate-0 transition-all ease-in-out duration-300 absolute right-3 top-5 w-4 h-4 mr-4 fill-success xl:group-hover:fill-success transform rotate-180"
                    >
                      <path
                        d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                        transform="translate(-1630.656 -746.402)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-3 xl:col-span-2">
                <div className="space-y-1">
                  <label htmlFor="2" className="xl:font-medium font-ubuntu text-ink-muted px-5 xl:ml-5">
                    Shipping Departure Time
                  </label>
                  <div className="relative group">
                    <select className="peer appearance-none w-full h-full bg-white px-6 py-3 xl:py-3.5 pl-5 xl:pl-10 outline-none font-bold text-ink-muted xl:text-ink-muted rounded-full border border-line drop-shadow-input-shadow">
                      <option value="17:00">17:00</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 26.883 15.423"
                      fill="currentColor"
                      className="peer-focus:rotate-0 transition-all ease-in-out duration-300 absolute right-3 top-5 w-4 h-4 mr-4 fill-success xl:group-hover:fill-success transform rotate-180"
                    >
                      <path
                        d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                        transform="translate(-1630.656 -746.402)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="w-full space-y-1">
                  <label htmlFor="3" className="xl:font-medium font-ubuntu text-ink-muted px-5 xl:ml-5">
                    I Don't Want Orders Below Amount
                  </label>
                  <div className="relative group">
                    <select className="peer appearance-none w-full h-full bg-white px-6 py-3 xl:py-3.5 pl-5 xl:pl-10 outline-none font-bold text-ink-muted xl:text-ink-muted rounded-full border border-line drop-shadow-input-shadow">
                      <option value="$100">$100</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 26.883 15.423"
                      fill="currentColor"
                      className="peer-focus:rotate-0 transition-all ease-in-out duration-300 absolute right-3 top-5 w-4 h-4 mr-4 fill-success xl:group-hover:fill-success transform rotate-180"
                    >
                      <path
                        d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                        transform="translate(-1630.656 -746.402)"
                      />
                    </svg>
                  </div>
                  <div className="text-ink-muted text-sm px-5 xl:px-10 font-ubuntu">
                    Valid when amount is greater than 0.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-3 xl:col-span-2">
              <div>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label inline-block mb-2 xl:font-medium font-ubuntu  text-ink-muted px-5 xl:ml-5"
                >
                  Member Note
                </label>
                <textarea
                  className="form-control block w-full px-5 xl:px-10 py-3 xl:py-5 text-base font-bold text-gray-700 bg-white bg-clip-padding border border-line drop-shadow-input-shadow rounded-3xl transition ease-in-out shadow-md m-0 focus:text-gray-700 focus:bg-white focus:border-success focus:outline-none"
                  id="exampleFormControlTextarea1"
                  rows={5}
                  placeholder="Your Note"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="flex justify-center text-center font-ubuntu font-medium xl:font-bold h-max items-center xl:text-md w-max px-5 xl:py-3.5 py-2 mx-auto sm:mx-7 rounded-pill bg-success px-6 py-2.5 font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-successDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400">
        Save Changes
      </button>
    </div>
  );
};

export default Shipment;

const ShippingCompanySelection: FC<any> = (props: any) => {
  return (
    <div className="flex flex-col xl:gap-4 px-5 xl:px-10 pb-4 py-3 xl:py-6 text-sm bg-white border border-line border-line rounded-2xl text-ink-muted drop-shadow-brand font-medium">
      <h3 className="text-successDark font-bold font-ubuntu">{props.text}</h3>
      <div className="flex justify-center h-12 xl:items-center">
        <label htmlFor={props.id}>
          <div className="relative grid items-center justify-center grid-cols-5 gap-4 group ">
            <input type="checkbox" name={props.id} id={props.id} className="hidden peer" />
            <div className="col-span-2 mr-4 xl:mr-8">
              <ShippingCompanyIcon id={props.id} />
            </div>
            <div className="text-ink-muted grid col-span-1 font-semibold font-ubuntu border-r-2 border-l-black ">
              {ShippingCompanies[props.id].name}
            </div>
            <div className="col-span-1 text-center font-ubuntu">Tradlia Partnered</div>
            <div className="flex items-center mx-auto text-transparent peer-checked:text-white justify-center w-5 h-5 border border-success rounded-md peer-checked:bg-success peer-checked:border-transparent">
              <div className="w-3 h-3">
                <SvgCheckMark />
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
const ShippingCompanyIcon: FC<any> = (props: any) => {
  switch (props.id) {
    case 0:
      return <SvgDomesticCargo />;
    case 1:
      return <SvgMngCargo />;
    default:
      return <div></div>;
  }
};
