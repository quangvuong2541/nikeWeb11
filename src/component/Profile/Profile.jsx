import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import * as action from "./module/action/profileAction";

export const Profile = () => {
  const dispatch = useDispatch();
  const profileForm = useRef(null);
  const { token } = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitUpdate = (body) => {
    profileForm.current.reset();

    dispatch(action.profileAction(body, token, navigate));
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <form
        onSubmit={handleSubmit(onSubmitUpdate)}
        className="profile__form"
        id="profileForm"
        ref={profileForm}
      >
        <label htmlFor="">Name:</label>
        <input type="text" id="name" name="name" {...register("name")} />
        <br />
        <label htmlFor="">Email:</label>
        <input type="text" id="email" name="email" {...register("email")} />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          {...register("password")}
        />
        <br />
        <label htmlFor="">Age:</label>
        <input type="text" id="age" name="age" {...register("age")} />
        <br />

        <button type="submit" className="btn-flat btn-hover">
          Update
        </button>
      </form>
    </div>
  );
};
