import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";

import "./index.css";
import { setModal } from "./module/action/modal";

export const Modal = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.modalReducer);

  return (
    <div
      className={`modal ${showModal ? "active" : ""}`}
      onClick={() => dispatch(setModal(!showModal))}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <SignIn />
        {/* <SignUp /> */}
      </div>
    </div>
  );
};
