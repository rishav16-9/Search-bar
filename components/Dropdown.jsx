// Dropdown.tsx
import React from "react";

const Dropdown = ({ profiles, onItemSelected }) => {
  return (
    <div className="overflow-y-scroll bg-amber-200 overflow-x-hidden h-full w-96 rounded-lg border-black">
      {
        profiles.map((item, index) => (
          <div key={item.name}>
            <div
              role="button"
              className="flex gap-5 justify-center items-center p-2"
              onClick={()=>onItemSelected(item)}
            >
              <div>{item.email}</div>
              <div>{item.name}</div>
              <img
                src={item.photo}
                alt={item.name}
                className="rounded-full object-cover h-11"
              />
            </div>
            <hr className="border-black w-full" />
          </div>
        )
      ) }
    </div>
  );
};

export default Dropdown;
