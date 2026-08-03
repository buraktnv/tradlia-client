import Image from "next/image";
import { FC } from "react";

const SearchInput: FC = () => {
  //TODO items center creates a bug in the parent div
  return (
    <div className="relative w-full">
      <span className="absolute top-2.5 left-3">
        <Image src={"/images/navbar/searchIcon.svg"} width={16} height={16} alt="search" />
      </span>
      <input
        className="h-10 w-full text-sm border px-9 py-2 rounded-full border-[#66bebc] focus:outline-none font-light"
        placeholder="search product name, barcode, brand or member"
      />
      <button type="button" className="absolute right-0 top-0 text-gray-100 text-sm h-10 px-5 bg-gradient-to-r from-[#66C1BF] to-[#009f9a] rounded-full">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
