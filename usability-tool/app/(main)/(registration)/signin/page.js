//348551046442
//348551046442

"use client";

import styles from "@/styles/logon.module.scss";

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
      className={`${styles.registrationForm}`}
      onSubmit={handleSubmit((data) => handleReset(data))}
    >
      <div className={`${styles.formFloating} form-floating mb-3`}>
        <input
          id="emailInput"
          className={`form-control ${styles.formControl} ${
            errors.email ? "is-invalid" : null
          }`}
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
        <p className={`${styles.emailSentPopup}`}>
          An email was sent with instructions for resetting your password.
        </p>
      ) : null}
      <button className={`${styles.registrationConfirmBtn}`} type="submit">
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
      <main
        className={`text-center mx-auto mt-5 col-md-10 col-lg-5 p-5 shadow rounded position-relative ${styles.formContainer}`}
      >
        <h1 className={`${styles.registrationTitle}`}>Log In</h1>
        <form
          onSubmit={handleSubmit((data) => {
            handleRegister(data);
          })}
        >
          <div className={`form-floating mb-3 ${styles.formFloating}`}>
            <input
              id="emailInput"
              className={`form-control ${errors.email ? "is-invalid" : null} ${
                styles.formControl
              }`}
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
            />
            <label htmlFor="emailInput" className="form-label">
              Email
            </label>
            <div class="invalid-feedback fw-bold">{errors.email?.message}</div>
          </div>

          <div className={`form-floating mb-3 ${styles.formFloating}`}>
            <input
              id="passwordInput"
              className={`form-control ${
                errors.password ? "is-invalid" : null
              } ${styles.formControl}`}
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
              className={`${styles.registrationLink} ${styles.resetLink}`}
            >
              Forgot your Password?
            </button>
            <div className="invalid-feedback fw-bold">
              {errors.password?.message}
            </div>
          </div>

          <button
            className={`${styles.registrationConfirmBtn} mb-3`}
            disabled={status === "submitting"}
          >
            {status === "idle" ? "Log In" : "Logging In..."}
          </button>
        </form>
        <small className={`${styles.registrationAccountCheck}`}>
          Don't have an account?
          <Link href="/register" className={`${styles.registrationLink}`}>
            Sign Up
          </Link>
        </small>
        <Link
          className={`${styles.backArrowButton}`}
          href="/home"
          aria-label="Go back to the home page"
          replace
        >
          <i
            className={`bi bi-arrow-left-circle-fill h2 ${styles.backArrow}`}
          ></i>
        </Link>
      </main>
    </>
  );
}
