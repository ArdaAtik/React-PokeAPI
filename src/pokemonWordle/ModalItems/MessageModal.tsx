import { useState } from "react";
import "./modalStyle.css";
import { FaTimesCircle } from "react-icons/fa";

interface modalProp {
  msg: string;
  name: string;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MessageModal = ({ setOpenModal, msg, name }: modalProp) => {
  return (
    <div className="modalBackground ">
      <div className="modalContainer bg-dark">
        <div className="titleCloseBtn">
          <button
            className="bg-dark  text-white"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <FaTimesCircle />
          </button>
        </div>

        <div className="body text-white">
          <p>
            {msg} {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
