import React from "react";
import { Modal, ModalBody } from "reactstrap";
type AppProps = {
  isOpen: boolean;
  toggle?: any;
  message?: string | null;
  onPress: () => void;
  statusCode?: any;
  title: string;
  buttonText: string;
  type: string;
};

const ErrorSuccessModal = ({ isOpen, toggle, message, statusCode, buttonText, title, onPress, type }: AppProps) => {
  return (
    <>
      <Modal centered isOpen={isOpen} toggle={toggle}>
        <ModalBody>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <img src={type === "error" ? Error : type === "warning" ? Warning : Success} alt="img" className="mt-3" />
            <h3 className="mt-3">{title}</h3>
            <p className="text-center">{message}</p>
            <button
              className="btn btn-primary w-50 mt-2 mb-3"
              onClick={onPress}
              // style={{ borderRadius: '37px' }}
            >
              {buttonText}
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ErrorSuccessModal;
