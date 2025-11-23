import React from "react";
import { Input } from "./ui/input";

const SearchBox = () => {
  return (
    <form>
      <Input
        placeholder="Search Here..."
        className="h-9 rounded-full bg-gray-50 hover:bg-gray-100 border-0 px-4 w-full shadow-sm"
      />
    </form>
  );
};

export default SearchBox;
