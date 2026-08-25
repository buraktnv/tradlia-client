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
    <form onSubmit={onSubmit} className="relative w-full" role="search">
      <span className="absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none" aria-hidden="true">
        <Image src={"/images/navbar/searchIcon.svg"} width={16} height={16} alt="" />
      </span>
      <input
        type="search"
        autoComplete="off"
        className="drop-shadow-input-shadow h-10 w-full text-sm border px-11 pr-24 rounded-pill border-line bg-surface text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
        placeholder="Search product, barcode, brand or member…"
        aria-label="Search products"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-0 h-10 px-5 rounded-pill bg-brand-600 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
