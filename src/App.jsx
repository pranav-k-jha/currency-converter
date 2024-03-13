import "./App.css"
import CurrencyRow from "./CurrencyRow"

const App = () => {
  return (
    <>
    <h1>Covert</h1>
    <CurrencyRow/>
    <div className="equals">=</div>
    <CurrencyRow/>
    </>
  )
}

export default App