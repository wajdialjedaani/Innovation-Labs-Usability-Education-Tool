//348551046442

"use client";
import "@/styles/logon.scss";
import { useState } from "react";

import { createAccount } from "@/lib/firebase/auth";
import { nav } from "@/lib/tools/redirect";

import { IoClose } from "react-icons/io5";
import Link from "next/link";

import { info } from "sass";
import { IconContext } from "react-icons";

export default function Logon() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConf: "",
  });

  const [logonError, setLogOnError] = useState(null);
  const [errorDismissed, setErrorDismissed] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.password === formData.passwordConf) {
      //Call firebase
      const { result, error } = await createAccount(
        formData.email,
        formData.password
      );
      if (error) {
        console.error(error);
        setErrorDismissed(false);
        setLogOnError(error);
      } else {
        console.error(result);
        //Go to main page
        nav("/main");
      }
    } else {
      alert("Passwords do not match");
    }
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <main className="registration-main">
      {logonError && !errorDismissed ? (
        <div className="registration-error-popup">
          <h1>Error</h1>
          <h3>{`${logonError}`}</h3>
          <IconContext.Provider
            value={{ color: "white", size: "40", className: "error-close" }}
          >
            <IoClose onClick={() => setErrorDismissed(true)} />
          </IconContext.Provider>
        </div>
      ) : null}
      <article className="registration-container">
        <h1 className="registration-title">Register</h1>
        <form className="registration-form" onSubmit={handleSubmit}>
          <label
            className="registration-form-label"
            htmlFor="registration-email-input"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            className="registration-form-input"
            id="registration-email-input"
            placeholder="Enter Email"
            onChange={handleFormChange}
            value={formData.email}
            required
          />

          <label
            className="registration-form-label"
            htmlFor="registration-password-input"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="registration-form-input"
            id="registration-password-input"
            placeholder="Enter Password"
            onChange={handleFormChange}
            value={formData.password}
            required
          />

          <label
            className="registration-form-label"
            htmlFor="registration-password-confirm-input"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="passwordConf"
            className="registration-form-input"
            id="registration-password-confirm-input"
            placeholder="Confirm Password"
            onChange={handleFormChange}
            value={formData.passwordConf}
            required
          />

          <button className="registraion-confirm-btn" type="submit">
            Confirm
          </button>
        </form>

        <small className="registration-account-check">
          Already have an account?
          <Link href="/signin" className="registration-login-link">
            Log in
          </Link>
        </small>
      </article>
    </main>
  );
}
