import { useState } from "react";
import { validateEmail } from "../../utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function SimpleFormsApp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    if (!firstName | !isValidPassword() | !email | !validateEmail(email) | !["individual", "business"].includes(role)) {
      return false
    }
    return true;
  };

  const clearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword({
      value: "",
      isTouched: false,
    })
    setRole('')
  };

  const isValidPassword = () => {
    return password.isTouched && password.value.length < 8 ? false : true
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="SimpleFormsApp">
      <h2>Simple form with basic validation:</h2>
      <p>No third party library used.</p>
      <hr />
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input className="form-control" value={password.value}
              onChange={(e) => setPassword({ ...password, value: e.target.value })}
              onBlur={() => setPassword({ ...password, isTouched: true })}
              placeholder="Password" />
            {isValidPassword() ? '' : <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SimpleFormsApp;
