import { countryData } from "./assets/data.js";
import { useState } from "react";
import "./index.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const data = Object.entries(countryData);

  return (
    <div className="app-container">
      <form className="form-container">
        <label htmlFor="countySelector" className="label">
          Select your country:
        </label>
        <select
          id="countySelector"
          name="country"
          className="select"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">--Select a country--</option>
          <optgroup label="Countries">
            {data.map(([code, name]) => (
              <option value={code} key={code}>
                {name}
              </option>
            ))}
          </optgroup>
        </select>
        <div className="selected-country-info">
          Your selected country is:{" "}
          <span id="selectedCounty">
            {selectedCountry ? countryData[selectedCountry] : ""}
          </span>
        </div>
      </form>
    </div>
  );
}

export default App;

// import './index.css'

// import { countryData } from "./assets/data.js";

// import { useState } from "react";

// function App() {
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const data = Object.entries(countryData);
//   // console.log("this", data);

//   // console.log(1);

//   return (
//     <>
//       <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
//         <form
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <label
//             htmlFor="countySelector"
//             style={{ marginBottom: "10px", fontSize: "18px" }}
//           >
//             Select your county:
//           </label>
//           <select
//             id="countySelector"
//             name="county"
//             style={{
//               padding: "10px",
//               fontSize: "16px",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//               width: "200px",
//             }}
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//           >
//             <option value="">--Select a country--</option>
//             <optgroup label="Countries">
//               {data.map(([code, name]) => (
//                 <option value={code} key={code}>
//                   {name}
//                 </option>
//               ))}
//             </optgroup>
//           </select>
//           <div style={{ marginTop: "20px", fontSize: "16px" }}>
//             Your selected county is:{" "}
//             <span id="selectedCounty">{countryData[selectedCountry]}</span>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;
