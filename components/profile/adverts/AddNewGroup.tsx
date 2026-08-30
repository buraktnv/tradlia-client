import { FC, useState } from "react";
import { SvgDownload, SvgFilterTabIcon1, SvgFilterTabIcon2 } from "../../../helpers/svgs/adverts";
import DateDropdown from "../feedback/DateDropdown";
import FilterDropdown from "../feedback/FilterDropdown";

const ItemList = [
  {
    id: 0,
    name: "bulk-product-sample(1).xlsx",
    creationDate: "21-08-2021 17:19",
    total: 5,
    uploaded: 4,
    updated: 1,
    incorrect: 0,
    waiting: 2,
  },
  {
    id: 1,
    name: "bulk-product-sample(2).xlsx",
    creationDate: "20-02-2021 13:11",
    total: 5,
    uploaded: 7,
    updated: 2,
    incorrect: 0,
    waiting: 0,
  },
  {
    id: 2,
    name: "bulk-product-sample(2).xlsx",
    creationDate: "20-02-2021 13:11",
    total: 5,
    uploaded: 7,
    updated: 2,
    incorrect: 0,
    waiting: 0,
  },
  {
    id: 3,
    name: "bulk-product-sample(1).xlsx",
    creationDate: "21-08-2021 17:19",
    total: 5,
    uploaded: 4,
    updated: 1,
    incorrect: 0,
    waiting: 2,
  },
  {
    id: 4,
    name: "bulk-product-sample(1).xlsx",
    creationDate: "21-08-2021 17:19",
    total: 5,
    uploaded: 4,
    updated: 1,
    incorrect: 0,
    waiting: 2,
  },
  {
    id: 5,
    name: "bulk-product-sample(2).xlsx",
    creationDate: "20-02-2021 13:11",
    total: 5,
    uploaded: 7,
    updated: 2,
    incorrect: 0,
    waiting: 0,
  },
  {
    id: 0,
    name: "bulk-product-sample(1).xlsx",
    creationDate: "21-08-2021 17:19",
    total: 5,
    uploaded: 4,
    updated: 1,
    incorrect: 0,
    waiting: 2,
  },
];

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Answered", active: false },
  { id: 2, title: "Unanswered", active: false },
  { id: 3, title: "1 Star", active: false },
  { id: 4, title: "2 Stars", active: false },
  { id: 5, title: "3 Stars", active: false },
  { id: 6, title: "4 Stars", active: false },
  { id: 7, title: "5 Stars", active: false },
];

const AddNewGroup: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="grid gap-4 text-sm">
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="flex justify-between w-full px-6 xl:px-2 py-1 rounded-full border border-line bg-canvas">
        <div className="flex w-full h-10 sm:justify-around xl:justify-between gap-28 xl:gap-6 xl:px-6">
          <FilterDropdown filterList={filterList} />
          <DateDropdown />
        </div>

        <div className="hidden gap-2 text-sm font-medium xl:flex">
          <button type="button" className="bg-gradient-to-r from-brand-400 to-brand-500 text-white px-4 py-2 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1">
            Excel Standards
          </button>
          <button type="button" className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-4 py-2 rounded-pill focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1">
            Sample Excel File
          </button>
          <button type="button"
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-danger to-dangerDark text-white px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            Upload File
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2 mx-2 text-sm font-medium xl:hidden">
        <button type="button" className="bg-gradient-to-r from-brand-400 to-brand-500 text-white px-2 py-2 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400">
          Excel Standards
        </button>
        <button type="button" className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-2  py-2 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400">
          Sample Excel File
        </button>
        <button type="button"
          onClick={() => setOpenModal(true)}
          className="bg-gradient-to-r from-danger to-dangerDark text-white px-6 py-2 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          Upload File
        </button>
      </div>
      <div>
        <div className="bg-canvas font-medium text-ink-muted text-sm grid grid-cols-2 xl:grid-cols-9 py-2.5 px-6 rounded-card">
          <div className="col-span-1 xl:col-span-2">File</div>
          <div className="col-span-1 xl:col-span-2 xl:pl-6">Creation Date</div>
          <div className="hidden text-center xl:block">Total</div>
          <div className="hidden text-center xl:block">Uploaded</div>
          <div className="hidden text-center xl:block">Updated</div>
          <div className="hidden text-center xl:block">Errors</div>
          <div className="hidden text-center xl:block">Pending Approval</div>
        </div>
        <div className="py-4">{ItemList && ItemList.map((content) => <Item key={content.id} content={content} />)}</div>
      </div>
    </div>
  );
};

const Item: FC<any> = ({ content }) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-9 px-8 py-2 font-medium text-ink-soft rounded-full cursor-pointer ">
      <div className="col-span-1 xl:col-span-2 text-brand-600">{content.name}</div>
      <div className="col-span-1 xl:col-span-2 xl:pl-6">{content.creationDate}</div>
      <div className="hidden text-center xl:block">{content.total}</div>
      <div className="hidden text-center xl:block">{content.uploaded}</div>
      <div className="hidden text-center xl:block">{content.updated}</div>
      <div className="hidden text-center xl:block">{content.incorrect}</div>
      <div className="hidden text-center xl:block">{content.waiting}</div>
    </div>
  );
};
const Modal: FC<any> = ({ setOpenModal }) => {
  return (
    <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full">
      <div onClick={() => setOpenModal(false)} className="absolute w-full h-full bg-ink/60 backdrop-blur-sm "></div>
      <div className="z-20 flex flex-col items-center py-8 space-y-6 bg-white border w-max rounded-3xl xl:p-8">
        <button type="button"
          onClick={() => setOpenModal(false)}
          className=" text-dangerDark xl:text-lg border border-dangerTint rounded-full w-[80%] xl:w-full py-0.5 xl:py-1"
        >
          Bulk Add Products via Excel
        </button>

        <div className="w-[25%] h-15 text-danger">
          <SvgDownload />
        </div>

        <div className="flex flex-col items-center w-full space-y-3">
          <div className="flex flex-col w-full">
            <button type="button"
              onClick={() => setOpenModal(false)}
              className="py-0.5 xl:py-1  text-white text-lg bg-gradient-to-r from-danger to-dangerDark font-semibold border rounded-full w-[80%] xl:w-full ml-8 xl:ml-0"
            >
              Upload File
            </button>
          </div>
          <div className=" w-[50%]">
            <button type="button"
              onClick={() => setOpenModal(false)}
              className="py-0.5 xl:py-1 text-white text-lg bg-gradient-to-r from-amber-400 to-amber-500 font-medium rounded-full w-full"
            >
              Start Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewGroup;
