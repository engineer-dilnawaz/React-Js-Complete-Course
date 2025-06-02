import { formatter } from "../util/investment";

export default function Result({ result }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((r) => (
          <tr key={r.year}>
            <td>{r.year}</td>
            <td>$10</td>
            <td>{formatter.format(r.interest)}</td>
            <td>{formatter.format(r.valueEndOfYear)}</td>
            <td>{formatter.format(r.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
