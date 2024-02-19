//348551046442

"use client";
import "@/styles/logon.scss";
import { useState } from "react";

import { signIn } from "@/lib/firebase/auth";
import Link from "next/link";

import { IoClose } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

import { useRouter } from "next/navigation";

export default function Logon() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [logonError, setLogOnError] = useState(null);
  const [errorDismissed, setErrorDismissed] = useState(false);
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await signIn(formData.email, formData.password);
      //Go to main if successful
      router.replace("/main");
    } catch (error) {
      setErrorDismissed(false);
      setLogOnError(error);
    } finally {
      setStatus("idle");
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

          <button
            className="registraion-confirm-btn"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "idle" ? "Log in" : "Logging in..."}
          </button>
        </form>

        <small className="registration-account-check">
          Don't have an account?
          <Link href="/register" className="registration-login-link">
            Sign Up
          </Link>
        </small>
        <Link
          href="/home"
          className="back-arrow-button"
          aria-label="Go back to home page"
        >
          <FaArrowCircleLeft className="back-arrow" size="2em" />
        </Link>
      </article>
    </main>
  );
}
