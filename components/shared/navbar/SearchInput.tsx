import Image from "next/image";
import { FC, FormEvent, useState } from "react";
import { useRouter } from "next/router";

const SearchInput: FC = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = value.trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  //TODO items center creates a bug in the parent div
  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <span className="absolute top-2.5 left-3">
        <Image src={"/images/navbar/searchIcon.svg"} width={16} height={16} alt="search" />
      </span>
      <input
        className="h-10 w-full text-sm border px-9 py-2 rounded-full border-[#66bebc] focus:outline-none font-light"
        placeholder="search product name, barcode, brand or member"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 text-gray-100 text-sm h-10 px-5 bg-gradient-to-r from-[#66C1BF] to-[#009f9a] rounded-full"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
