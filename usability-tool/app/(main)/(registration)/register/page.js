//348551046442

"use client";
import "@/styles/logon.scss";
import { useState } from "react";
import { createAccount } from "@/lib/firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Modal from "@/components/Modal";

export default function Logon() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [status, setStatus] = useState("idle");
  const [modal, setModal] = useState(null);

  function renderModal(component, heading) {
    setModal(
      <Modal toggleFunction={() => setModal(null)} heading={heading}>
        {component}
      </Modal>
    );
  }

  async function handleRegister(data) {
    setStatus("submitting");
    //Call firebase
    try {
      await createAccount(
        data.email,
        data.password,
        data.firstName,
        data.lastName
      );
      router.replace("/main");
    } catch (error) {
      console.error(error);
      renderModal(<h3>{error}</h3>, "Registration Error");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <>
      {modal}
      <main className="text-center mx-auto mt-5 col-md-10 col-lg-5 p-5 form-container shadow rounded position-relative">
        <h1 className="registration-title">Register</h1>
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
          <div className="mb-3 input-group">
            <div className="form-floating">
              <input
                id="firstNameInput"
                className={`form-control ${
                  errors.firstName ? "is-invalid" : null
                }`}
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
                placeholder="First Name"
              />
              <label htmlFor="firstNameInput">First Name</label>
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            </div>
            <div className="form-floating">
              <input
                id="lastNameInput"
                className={`form-control ${
                  errors.lastName ? "is-invalid" : null
                }`}
                type="text"
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last Name"
              />
              <label htmlFor="lastNameInput">Last Name</label>
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
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
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <div className="mb-3 form-floating">
            <input
              id="passwordConfirmInput"
              className={`form-control ${
                errors.passwordConf ? "is-invalid" : null
              }`}
              type="password"
              {...register("passwordConf", {
                required: "Password confirmation is required",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Passwords do not match";
                  }
                },
              })}
              placeholder="Confirm Password"
            />
            <label htmlFor="passwordConfirmInput">Confirm Password</label>
            <div className="invalid-feedback">
              {errors.passwordConf?.message}
            </div>
          </div>
          <button
            className="registration-confirm-btn mb-3"
            disabled={status === "submitting"}
          >
            {status === "idle" ? "Register" : "Registering..."}
          </button>
        </form>
        <small className="registration-account-check">
          Already have an account?
          <Link href="/signin" className="registration-link">
            Log In
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
