//348551046442

"use client";
import "@/styles/logon.scss";
import { useState } from "react";

import { signIn } from "@/lib/firebase/auth";
import { nav } from "@/lib/tools/redirect";

import { IoClose } from "react-icons/io5";

import { info } from "sass";
import { IconContext } from "react-icons";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Logon() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [logonError, setLogOnError] = useState(null);
  const [errorDismissed, setErrorDismissed] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const { result, error } = await signIn(formData.email, formData.password);
    if (error) {
      console.error(error);
      setErrorDismissed(false);
      setLogOnError(error);
    } else {
      console.log(result);
      router.push("/main");
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
        <h1 className="registration-title">Sign In</h1>
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

          <button className="registraion-confirm-btn" type="submit">
            Confirm
          </button>
        </form>

        <small className="registration-account-check">
          Don't have an account?
          <Link href="/register" className="registration-login-link">
            Sign Up
          </Link>
        </small>
      </article>
    </main>
  );
}
