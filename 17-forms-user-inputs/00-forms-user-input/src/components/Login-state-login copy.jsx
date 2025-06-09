import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    passsword: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  // function handleEmailChange(e) {
  //   setEnteredEmail(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setEnteredPassword(e.target.value);
  // }

  function handleInputChange(identifier, value) {
    setEnteredValues((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            // value={enteredEmail}
            // onChange={handleEmailChange}
            value={enteredValues.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            // value={enteredPassword}
            // onChange={handlePasswordChange}
            value={enteredValues.passsword}
            onChange={(e) => handleInputChange("passsword", e.target.value)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        {/* type button means page won't be refreshed on submission and default type of button is submit */}
        {/* <button type="button" className="button" onClick={handleSubmit}>
          Login
        </button> */}
        <button className="button">Login</button>
      </p>
    </form>
  );
}
