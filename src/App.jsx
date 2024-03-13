import { useEffect, useState } from "react";

import "./App.css";
import CurrencyRow from "./CurrencyRow.jsx";

const BASE_URL = "https://open.er-api.com/v6/latest/USD";

const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => 
        setCurrencyOptions([data.base_codes, ...Object.keys(data.rates)])
);}, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
};

export default App;
