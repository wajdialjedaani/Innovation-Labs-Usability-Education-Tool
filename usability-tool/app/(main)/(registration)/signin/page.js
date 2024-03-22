//348551046442
//348551046442

"use client";
import "@/styles/logon.scss";
import { useState } from "react";
import { signIn, sendPasswordResetEmail } from "@/lib/firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Modal from "@/components/Modal";

function ResetPassword() {
  const [status, setStatus] = useState("idle");
  const [emailSent, setEmailSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleReset(data) {
    console.log(data);
    setStatus("submitting");
    try {
      await sendPasswordResetEmail(data.email);
      setEmailSent(true);
    } catch (e) {
      console.error(e);
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form
      className="registration-form"
      onSubmit={handleSubmit((data) => handleReset(data))}
    >
      <div className="form-floating mb-3">
        <input
          id="emailInput"
          className={`form-control ${errors.email ? "is-invalid" : null}`}
          type="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        <label htmlFor="emailInput" className="form-label">
          Email
        </label>
        <div class="invalid-feedback">{errors.email?.message}</div>
      </div>

      {emailSent ? (
        <p className="email-sent-popup">
          An email was sent with instructions for resetting your password.
        </p>
      ) : null}
      <button className="registration-confirm-btn" type="submit">
        {status === "idle" ? "Send Reset Link" : "Sending..."}
      </button>
    </form>
  );
}

export default function Logon() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState("idle");
  const [modal, setModal] = useState(null);

  const [resetModal, setResetModal] = useState(null);

  function renderModal(component, heading) {
    setModal(
      <Modal toggleFunction={() => setModal(null)} heading={heading}>
        {component}
      </Modal>
    );
  }

  function renderResetModal(component, heading) {
    setResetModal(
      <Modal toggleFunction={() => setResetModal(null)} heading={heading}>
        {component}
      </Modal>
    );
  }

  async function handleRegister(data) {
    setStatus("submitting");
    //Call firebase
    try {
      await signIn(data.email, data.password);
      router.replace("/main");
    } catch (error) {
      console.error(error);
      renderModal(<h3>{error}</h3>, "Log In Error");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <>
      {modal}
      {resetModal}
      <main className="text-center mx-auto mt-5 col-md-10 col-lg-5 p-5 form-container shadow rounded position-relative">
        <h1 className="registration-title">Log In</h1>
        <form
          onSubmit={handleSubmit((data) => {
            handleRegister(data);
          })}
        >
          <div className="form-floating mb-3">
            <input
              id="emailInput"
              className={`form-control ${errors.email ? "is-invalid" : null}`}
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
            />
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <div class="invalid-feedback">{errors.email?.message}</div>
          </div>

          <div className="mb-3 form-floating">
            <input
              id="passwordInput"
              className={`form-control ${
                errors.password ? "is-invalid" : null
              }`}
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Password"
            />
            <label htmlFor="passwordInput">Password</label>
            <button
              onClick={() =>
                renderResetModal(<ResetPassword />, "Reset Password")
              }
              type="button"
              className="registration-link reset-link"
            >
              Forgot your Password?
            </button>
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>

          <button
            className="registration-confirm-btn mb-3"
            disabled={status === "submitting"}
          >
            {status === "idle" ? "Log In" : "Logging In..."}
          </button>
        </form>
        <small className="registration-account-check">
          Don't have an account?
          <Link href="/register" className="registration-link">
            Sign Up
          </Link>
        </small>
        <Link
          className="back-arrow-button"
          href="/home"
          aria-label="Go back to the home page"
          replace
        >
          <i className="bi bi-arrow-left-circle-fill h2 back-arrow"></i>
        </Link>
      </main>
    </>
  );
}

/*
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
              </button> 
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
              replace
              >
              <FaArrowCircleLeft className="back-arrow" size="2em" />
              </Link>
              </article>
              </main>
              </>
              );
            }
            
            */
