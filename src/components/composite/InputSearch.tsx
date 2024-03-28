"use client";

import Input from "../basic/Input";
import { LuSearch } from "react-icons/lu";
import { IoFilter } from "react-icons/io5";

type InputSearchProps = {
  placeholder?: string;
  onFilterClick?: () => void;
};

export const InputSearch = ({
  placeholder,
  onFilterClick,
}: InputSearchProps): JSX.Element => {
  return (
    <Input
      type="text"
      startContent={<LuSearch className="text-black w-4 h-4" />}
      endContent={
        <IoFilter
          className="text-black w-4 h-4 cursor-pointer"
          onClick={onFilterClick}
        />
      }
      placeholder={placeholder}
    />
  );
};
