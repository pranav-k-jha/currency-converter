import "./App.css";
import CurrencyRow from "./CurrencyRow.jsx";

const App = () => {
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
