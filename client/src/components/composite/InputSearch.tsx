'use client';

import Input from '../basic/inputs/Input';
import { LuSearch } from 'react-icons/lu';
import { IoFilter } from 'react-icons/io5';
import { useEffect, useState } from 'react';

type InputSearchProps = {
  placeholder?: string;
  onSearchChange?: (queryString: string) => void;
  onFilterClick?: () => void;
  onChange?: (event: any) => void;
};

export const InputSearch = ({
  placeholder,
  onSearchChange,
  onChange,
  onFilterClick,
}: InputSearchProps): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timoutId = setTimeout(() => {
      onSearchChange?.(inputValue);
    }, 500);

    return () => {
      clearTimeout(timoutId);
    };
  }, [inputValue]);

  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  return (
    <Input
      type="text"
      startContent={<LuSearch className="text-black w-4 h-4" />}
      endContent={<IoFilter className="text-black w-4 h-4 cursor-pointer" onClick={onFilterClick} />}
      onChange={handleOnChange}
      placeholder={placeholder}
      value={inputValue}
    />
  );
};
