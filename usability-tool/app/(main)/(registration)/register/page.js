//348551046442

"use client";
import "@/styles/logon.scss";
import { useState } from "react";

import { createAccount } from "@/lib/firebase/auth";

import { IoClose } from "react-icons/io5";
import Link from "next/link";

import { IconContext } from "react-icons";
import { FaArrowCircleLeft } from "react-icons/fa";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

export default function Logon() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConf: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  console.log(errors);

  const [logonError, setLogOnError] = useState(null);
  const [errorDismissed, setErrorDismissed] = useState(false);
  const [status, setStatus] = useState("idle");

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formData);
  //   if (formData.password === formData.passwordConf) {
  //     setStatus("submitting");
  //     //Call firebase
  //     try {
  //       await createAccount(
  //         formData.email,
  //         formData.password,
  //         formData.firstName,
  //         formData.lastName
  //       );
  //       router.replace("/main");
  //     } catch (error) {
  //       console.error(error);
  //       setErrorDismissed(false);
  //       setLogOnError(error);
  //     } finally {
  //       setStatus("idle");
  //     }
  //   } else {
  //     setLogOnError("Passwords do not match");
  //   }
  // }

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
    <main className="text-center mx-auto mt-5 col-md-4 p-5 form-container">
      <h1 className="registration-title">Register</h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="needs-validation"
        noValidate
      >
        <div className="form-floating mb-3 has-validation">
          <input
            id="emailInput"
            className="form-control"
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
          <label htmlFor="emailInput" className="form-label">
            Email
          </label>
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="mb-3 input-group">
          <div className="form-floating">
            <input
              id="firstNameInput"
              className="form-control"
              type="text"
              {...register("firstName", { required: "First name is required" })}
              placeholder="First Name"
            />
            <label htmlFor="firstNameInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              id="lastNameInput"
              className="form-control"
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last Name"
            />
            <label htmlFor="lastNameInput">Last Name</label>
          </div>
        </div>
        <div className="mb-3 form-floating">
          <input
            id="passwordInput"
            className="form-control"
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
        </div>
        <div className="mb-3 form-floating">
          <input
            id="passwordConfirmInput"
            className="form-control"
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
        </div>
        <button className="registration-confirm-btn">Submit</button>
      </form>
    </main>
  );
}
