import classes from "./Result.module.css";

import ResultItem from "./ResultItem";

export default function ResultList({ data, initialInvestment }) {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((yearData) => (
          <ResultItem
            key={data.year}
            data={yearData}
            initialInvestment={initialInvestment}
          />
        ))}
      </tbody>
    </table>
  );
}
