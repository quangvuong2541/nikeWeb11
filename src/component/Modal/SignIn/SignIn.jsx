import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import { login } from "./module/action/signin";

export const SignIn = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signin">
      <figure className="signin__logo">
        <svg
          className="pre-logo-svg"
          height="60px"
          width="60px"
          fill="#111"
          viewBox="0 0 69 32"
        >
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
        </svg>
      </figure>

      <h2 className="signin__heading">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>

      <input
        className="signin__input"
        name="email"
        type="email"
        placeholder="Email address"
        {...register("email")}
      />
      {/* <span>Please enter a valid email address.</span> */}
      <input
        className="signin__input"
        name="password"
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      {/* <span>Please enter a password.</span> */}

      <div className="signin__help">
        <div className="signin__keep">
          <input type="checkbox" id="keep" />
          <label htmlFor="keep">Keep me signed in</label>
        </div>
        <div className="signin__forgot">Forgotten your password?</div>
      </div>

      <div className="signin__policy">
        <p>
          By logging in, you agree to Nike's <span>Privacy Policy</span> and{" "}
          <span>Terms of Use</span>.
        </p>
      </div>

      <button type="submit" className="btn-flat btn-hover signin__btn">
        SIGN IN
      </button>

      <div className="signin__signup">
        <p>
          Not a Member? <span>Join Us.</span>
        </p>
      </div>
    </form>
  );
};
