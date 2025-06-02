import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [investmentValue, setInvestmentValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function onChange(key, value) {
    setInvestmentValue((prev) => ({
      ...prev,
      [key]: +value,
    }));
  }

  const annualData = calculateInvestmentResults(investmentValue);

  return (
    <>
      <Header />
      <Form value={investmentValue} onChange={onChange} />
      <Result result={annualData} />
    </>
  );
}

export default App;
