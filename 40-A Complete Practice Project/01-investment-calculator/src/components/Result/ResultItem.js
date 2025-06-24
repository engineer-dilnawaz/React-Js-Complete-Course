const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ResultItem({ data, initialInvestment }) {
  return (
    <tr>
      <td>{data.year}</td>
      <td>{formatter.format(data.savingsEndOfYear)}</td>
      <td>{formatter.format(data.yearlyInterest)}</td>
      <td>
        {formatter.format(
          data.savingsEndOfYear -
            initialInvestment -
            data.yearlyContribution * data.year
        )}
      </td>
      <td>
        {formatter.format(
          initialInvestment + data.yearlyContribution * data.year
        )}
      </td>
    </tr>
  );
}
