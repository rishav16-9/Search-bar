import React from "react";


const Search = ({
  id,
  type,
  onChange,
  value,
  placeholder,
  onFocus,
  onBlur,
}) => {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        value={value}
        id={id}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        className="px-6 pt-6  pb-1  p-2
            placeholder-black text-md text-black 
            w-96
            bg-[transparent]
            border-black  border-l-0 border-r-0 border-t-0 border-b
            focus: outline-none"
      />
    </div>
  );
};

export default Search;
