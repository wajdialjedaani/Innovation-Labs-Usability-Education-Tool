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
import { FaArrowCircleLeft } from "react-icons/fa";

import { useRouter } from "next/navigation";

export default function Logon() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConf: "",
  });

  const [logonError, setLogOnError] = useState(null);
  const [errorDismissed, setErrorDismissed] = useState(false);
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.password === formData.passwordConf) {
      setStatus("submitting");
      //Call firebase
      try {
        await createAccount(
          formData.email,
          formData.password,
          formData.firstName,
          formData.lastName
        );
        router.replace("/main");
      } catch (error) {
        console.error(error);
        setErrorDismissed(false);
        setLogOnError(error);
      } finally {
        setStatus("idle");
      }
    } else {
      setLogOnError("Passwords do not match");
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
          <div className="name-inputs-container">
            <div className="name-input">
              <label
                className="registration-form-label"
                htmlFor="registration-firstName-input"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="registration-form-input"
                id="registration-firstName-input"
                placeholder="Enter First Name"
                onChange={handleFormChange}
                value={formData.firstName}
                required
              />
            </div>
            <div>
              <label
                className="registration-form-label"
                htmlFor="registration-lastName-input"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="registration-form-input"
                id="registration-lastName-input"
                placeholder="Enter First Name"
                onChange={handleFormChange}
                value={formData.lastName}
                required
              />
            </div>
          </div>

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

          <button
            className="registraion-confirm-btn"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "idle" ? "Register" : "Registering"}
          </button>
        </form>

        <small className="registration-account-check">
          Already have an account?
          <Link href="/signin" className="registration-login-link">
            Log in
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
