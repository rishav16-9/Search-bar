import { X } from "lucide-react";
import React, { useEffect, useState } from "react";



const Chip= ({ chipValue, handleRemove }) => {
  return (
    <div className="flex flex-wrap flex-row gap-5 items-center justify-center mt-2">
      {chipValue.map((item) => (
        <div key={item.email}>
          <div className="bg-white w-auto  flex gap-3 p-2 rounded-full">
            {item.name}
            <button onClick={()=>{handleRemove(item)}} className="btn">
              <X size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chip;
