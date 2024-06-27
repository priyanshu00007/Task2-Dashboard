"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Search = ({ placeholder }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const params = new URLSearchParams(searchParams);
    params.set("q", form.query.value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input name="query" defaultValue={q} placeholder={placeholder} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
