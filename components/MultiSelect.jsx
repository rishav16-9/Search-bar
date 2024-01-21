// import React, { useState, useEffect } from "react";

// interface MultiSelectDropdownProps {
//   options: iProfile[];
// }

// export interface iProfile {
//   name: string;
//   email: string;
//   photo: string;
//   username: string;
// }

// const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options }) => {
//   const [selectedValues, setSelectedValues] = useState<iProfile[]>([]);
//   const [searchText, setSearchText] = useState<string>("");
//   const [filteredOptions, setFilteredOptions] = useState<iProfile[]>(options);

//   useEffect(() => {
//     setFilteredOptions(
//       options.filter(
//         (option) =>
//           option.name.toLowerCase().includes(searchText.toLowerCase()) &&
//           !selectedValues.find((selected) => selected.email === option.email)
//       )
//     );
//   }, [searchText, selectedValues, options]);

//   const handleSelect = (profile: iProfile) => {
//     setSelectedValues([...selectedValues, profile]);
//     setSearchText("");
//   };

//   const handleRemove = (profile: iProfile) => {
//     setSelectedValues(selectedValues.filter((item) => item.email !== profile.email));
//   };

//   return (
//     <div>
//       <div>
//         {selectedValues.map((profile) => (
//           <div key={profile.email} className="chip">
//             {profile.name}
//             <span onClick={() => handleRemove(profile)}>x</span>
//           </div>
//         ))}
//       </div>
//       <div className="dropdown">
//         <input
//           type="text"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           placeholder="Search..."
//         />
//         <ul>
//           {filteredOptions.map((profile) => (
//             <li key={profile.email} onClick={() => handleSelect(profile)}>
//               {profile.name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default MultiSelectDropdown;
