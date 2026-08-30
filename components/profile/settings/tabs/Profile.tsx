import { FC } from "react";
import InputSelect from "../common/InputSelect";
import InputText from "../common/InputText";
import InputAddvert from "../../commonComponents/InputAddvert";
import { SvgShowMore } from "../../../../helpers/svgs/category";

const Profile: FC = () => {
  return (
    <div className="rounded-card border border-line bg-surface shadow-card rounded-3xl w-full h-full text-sm xl:p-[2rem]">
      <div className="flex flex-col xl:mx-0">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-4 xl:col-span-2 ">
            <div className="space-y-1">
              <label htmlFor="1" className="text-ink-muted ml-10">
                Your Full Name *
              </label>
              <InputText placeholder="James Anderson" />
            </div>
          </div>
          <div className="col-span-4 xl:col-span-1 ">
            <div className="space-y-1 group">
              <label htmlFor="2" className=" text-ink-muted ml-10">
                Date of Birth *
              </label>
              <div className="relative flex w-full h-full">
                <input
                  type="date"
                  name=""
                  id=""
                  defaultValue={"2000-01-05"}
                  className="peer appearance-none w-full h-full bg-white px-6 py-3 xl:py-3.5 pl-10 outline-none xl:font-medium text-ink-muted xl:text-ink-muted rounded-full border border-line drop-shadow-input-shadow"
                />
                <div className="pointer-events-none absolute right-3 top-5 mr-2 h-4 w-4 rotate-180 fill-current text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-hover:rotate-0">
                  <SvgShowMore />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 xl:col-span-1 ">
            <div className="space-y-1">
              <label className="text-ink-muted ml-10">Gender *</label>
              <InputSelect>
                <option>Female</option>
                <option>Male</option>
              </InputSelect>
            </div>
          </div>
        </div>

        <div className="grid items-center grid-cols-3 gap-5 mt-8">
          <div className="col-span-3 space-y-1 xl:col-span-1">
            <label htmlFor="4" className=" text-ink-muted ml-10">
              Phone 1 *
            </label>

            <InputAddvert
              placeholder="+1 (555) 012-3456"
              type="number"
              separate="py-3 xl:py-3.5 xl:py-4 pl-10 xl:pl-10 xl:placeholder:font-medium font-medium text-sm text-ink-muted rounded-full "
            />
          </div>
          <div className="col-span-3 space-y-1 xl:col-span-1">
            <label htmlFor="5" className=" text-ink-muted ml-10">
              Phone 2 *
            </label>

            <InputAddvert
              placeholder="+1 (555) 045-6789"
              type="number"
              separate="py-3 xl:py-3.5 pl-10 xl:pl-10 xl:placeholder:font-medium font-medium text-sm text-ink-muted rounded-full "
            />
          </div>
        </div>
        <div className="grid items-center grid-cols-3 gap-5 mt-8">
          <div className="col-span-3 space-y-1 xl:col-span-1">
            <label htmlFor="6" className=" text-ink-muted ml-10">
              Email *
            </label>

            <InputAddvert
              placeholder="james.anderson@email.com"
              type="email"
              separate="py-3 xl:py-3.5 pl-10 xl:pl-10 xl:placeholder:font-medium font-medium text-sm text-ink-muted rounded-full "
            />
          </div>
        </div>
        <div className="grid grid-cols-5 px-16 mt-6 xl:px-0 xl:mt-10 drop-shadow-input-shadow">
          <button type="button" className="bg-brand-400 py-3 xl:py-3.5 w-full font-medium text-white rounded-full mx-5 xl:mx-0 col-span-4 xl:col-span-1">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const InputDate: FC<any> = () => (
  <div>
    <label htmlFor=""></label>
    <input type="date" name="" id="" />
  </div>
);

export default Profile;
