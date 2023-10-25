import "@/styles/logon.scss";

export default function Logon() {
  return (
    <main className="registration-main">
      <article className="registration-container">
        <h1 className="registration-title">Register</h1>
        <div>
          <label
            className="registration-form-label"
            htmlFor="registration-email-input"
          >
            Email
          </label>
          <input
            type="email"
            className="registration-form-input"
            id="registration-email-input"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <label
            className="registration-form-label"
            htmlFor="registration-password-input"
          >
            Password
          </label>
          <input
            type="password"
            className="registration-form-input"
            id="registration-password-input"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <label
            className="registration-form-label"
            htmlFor="registration-password-confirm-input"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="registration-form-input"
            id="registration-password-confirm-input"
            placeholder="Confirm Password"
          />
        </div>

        <button className="registraion-confirm-btn">Confirm</button>

        <small className="registration-account-check">
          Already have an account?
          <a href="#" className="registration-login-link">
            Log in
          </a>
        </small>
      </article>
    </main>
  );
}
