import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    passsword: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  // const emailIsValid =
  //   enteredValues.email !== "" && !enteredValues.email.includes("@");
  // const emailIsValid = didEdit.email && !enteredValues.email.includes("@");
  const emailIsValid =
    didEdit.email &&
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  // const passwordIsInValid =
  //   didEdit.password && enteredValues.passsword.trim().length < 6;
  const passwordIsInValid =
    didEdit.password && !hasMinLength(enteredValues.passsword, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prev) => ({
      ...prev,
      [identifier]: value,
    }));

    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          value={enteredValues.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          error={emailIsValid && "Please enter a valid email address."}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            value={enteredValues.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
          <div className="control-error">
            {emailIsValid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.passsword}
          onChange={(e) => handleInputChange("passsword", e.target.value)}
          error={
            passwordIsInValid && "Password should be at least 6 characters"
          }
        />

        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            value={enteredValues.passsword}
            onChange={(e) => handleInputChange("passsword", e.target.value)}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
