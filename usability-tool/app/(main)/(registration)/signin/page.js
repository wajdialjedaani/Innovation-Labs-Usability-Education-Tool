//348551046442

"use client";
import "@/styles/logon.scss";
import { useState } from "react";

import { signIn, sendPasswordResetEmail } from "@/lib/firebase/auth";
import Link from "next/link";

import { IoClose } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

import { useRouter } from "next/navigation";

import Modal from "@/components/Modal";

function ResetPassword() {
  const [status, setStatus] = useState("idle");
  const [emailSent, setEmailSent] = useState(false);
  const [passwordData, setPasswordData] = useState({
    email: "",
  });

  function handleFormChange(e) {
    const { value } = e.target;
    setPasswordData({ email: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await sendPasswordResetEmail(passwordData.email);
      setEmailSent(true);
    } catch (e) {
      console.error(e);
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label className="registration-form-label" htmlFor="reset-password-email">
        Email
      </label>
      <input
        type="email"
        name="email"
        className="registration-form-input"
        id="reset-password-email"
        placeholder="Enter Email"
        onChange={handleFormChange}
        value={passwordData.email}
        required
      />
      {emailSent ? (
        <p className="email-sent-popup">
          An email was sent with instructions for resetting your password.
        </p>
      ) : null}
      <button className="registraion-confirm-btn" type="submit">
        {status === "idle" ? "Send Reset Link" : "Sending..."}
      </button>
    </form>
  );
}

export default function Logon() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [logonError, setLogOnError] = useState(null);
  const [errorDismissed, setErrorDismissed] = useState(false);
  const [status, setStatus] = useState("idle");

  const [modal, setModal] = useState(null);

  function renderModal(component, heading) {
    setModal(
      <Modal toggleFunction={() => setModal(null)} heading={heading}>
        {component}
      </Modal>
    );
  }

  async function handleSubmit(e) {
    console.log(e);
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
    <>
      {modal}
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
              {/* <button
                onClick={() =>
                  renderModal(<ResetCred cred="email" />, "Reset Your Email")
                }
                type="button"
                className="registration-link reset-link"
              >
                Forgot your Email?
              </button> */}
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
              <button
                onClick={() =>
                  renderModal(<ResetPassword />, "Reset Your Password")
                }
                type="button"
                className="registration-link reset-link"
              >
                Forgot your Password?
              </button>
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
            <Link href="/register" className="registration-link">
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
    </>
  );
}
