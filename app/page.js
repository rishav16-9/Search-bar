"use client";
import React from "react";
import Dropdown from "@/components/Dropdown";
import Search from "@/components/Input";
import { profile } from "@/services/data";
import { ChangeEvent, useEffect, useState } from "react";
import Chip from "@/components/Chip";
export default function Home() {
  const data = profile();
  const [searchText, setSearchText] = useState("");
  const [filteredOption, setFilteredOption] = useState(data);
  const [selectedValue, setSelectedValue] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setFilteredOption(
      data.filter(
        (updateData) =>
          updateData.name.toLowerCase().includes(searchText.toLowerCase()) &&
          !selectedValue.find((selected) => selected.email === updateData.email)
      )
    );
  }, [searchText, selectedValue]);

  const handleSelect = (value) => {
    setSelectedValue([...selectedValue, value]);
    setSearchText("");
    console.log(selectedValue);
  };
  const showDropdown = (e) => {
    setSearchText(e.target.value);
  };
  const handleRemove = (item) => {
    setSelectedValue((prevSelected) =>
      prevSelected.filter((pro) => pro.email !== item.email)
    );
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 200);
  };
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className=" relative bg-amber-200 bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-4/5 lg:max-w-md rounded-md w-full h-auto  flex flex-col items-center justify-center">
        <div>
          <Search
            placeholder="Add new user..."
            onChange={showDropdown}
            id="name"
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={searchText}
          />
          <div
            className={`${
              searchText || isFocused ? "block" : "hidden"
            } absolute h-64 w-full`}
          >
            <div className={"absolute h-64 w-full"}>
              <Dropdown
                profiles={filteredOption}
                onItemSelected={handleSelect}
              />
            </div>
          </div>
          <div>
            <Chip chipValue={selectedValue} handleRemove={handleRemove} />
          </div>
        </div>
      </div>
    </div>
  );
}
