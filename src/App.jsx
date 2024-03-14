import { useEffect, useState } from "react";

import "./App.css";
import CurrencyRow from "./CurrencyRow.jsx";

const BASE_URL = "https://open.er-api.com/v6/latest/USD";


const App = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const firstCurrency = Object.keys(data.rates)[1];
        setCurrencyOptions([...Object.keys(data.rates)]);
        setFromCurrency(data.base_code);
        setToCurrency(firstCurrency);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e=> setFromCurrency(e.target.value)}
        
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e=> setToCurrency(e.target.value)}
      />
    </>
  );
};

export default App;
