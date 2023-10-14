import React from "react";
import ReactDOM from "react-dom";
import { useRef } from "react";
const Wallet = ({ children, open, onClose }) => {
  const modalRef = useRef();
  const handleBgClick = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    } else {
      onClose();
    }
  };
  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      onClick={(e) => handleBgClick(e)}
      className="fixed top-0 left-0 h-screen w-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
    >
      <div ref={modalRef} className="relative w-full max-w-md max-h-full ">
        {children}
      </div>
    </div>,
    document.getElementById("models")
  );
};

export default Wallet;
