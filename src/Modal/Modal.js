import React from "react";
import ReactDOM from "react-dom";
import ModalToDisplay from "./ModalToDisplay";

const Modal = () => {
  return (
    <div>
      {ReactDOM.createPortal(
        <ModalToDisplay />,
        document.getElementById("portal")
      )}
    </div>
  );
};

export default Modal;
