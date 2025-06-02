export default function Form({ value, onChange }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Invesment</label>
          <input
            type="text"
            id="initialInvestment"
            value={value.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Invesment</label>
          <input
            type="number"
            id="annualInvestment"
            min={0}
            value={value.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="text"
            id="expectedReturn"
            value={value.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            value={value.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}
