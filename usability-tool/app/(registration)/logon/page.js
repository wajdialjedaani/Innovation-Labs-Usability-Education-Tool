import "@/styles/logon.scss"

export default function Logon(){
  return (
    <main>
      <article className="registration-container">
        <h1 className="registration-title">Register</h1>
        <div>
          <label htmlFor="registration-email-input">Email</label>
          <input
            type="email"
            id="registration-email-input"
            placeholder="Enter Email"
          />
        </div>

        <div>
          <label htmlFor="registration-password-input">Password</label>
          <input
            type="password"
            id="registration-password-input"
            placeholder="Enter Password"
          />
        </div>

        <div>
          <label htmlFor="registration-password-confirm-input"
            >Confirm Password</label
          >
          <input
            type="password"
            id="registration-password-confirm-input"
            placeholder="Confirm Password"
          />
        </div>

        <button className="registraion-confirm-btn">Confirm</button>

        <small
          >Already have an account?
          <a href="#" className="registration-login-link">Log in</a></small
        >
      </article>
    </main>
  )
}