import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const ModalToDisplay = () => {
  return (
    <>
      <div className="modal-data">
        <div className="model-content">
          <Link to="/">
            <AiOutlineCloseCircle
              className="close-icon"
              style={{ fill: "url(#blue-gradient)" }}
            />
          </Link>
          <span className="icons-modals">
            <svg width="0" height="0">
              <linearGradient
                id="blue-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#006dff" offset="0%" />
                <stop stopColor="red" offset="100%" />
              </linearGradient>
            </svg>
            <FaReact
              className="rotate-react-icon"
              style={{ fill: "url(#blue-gradient)" }}
            />
          </span>
          <p>
            this is the modal using portal <span>reactjs</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ModalToDisplay;
