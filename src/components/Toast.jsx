import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/fontawesome-free-solid";
import "react-toastify/dist/ReactToastify.css";

function Toast(type, message) {
  switch (type) {
    case "success":
      return toast.success(
        <div>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ marginBottom: "6px" }}
          />
          <p>{message}</p>
        </div>
      );
    case "error":
      return toast.error(
        <div>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ marginBottom: "6px" }}
          />
          <p>{message} </p>
        </div>
      );
    case "warning":
      return toast.warning(
        <div>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ marginBottom: "6px" }}
          />
          <p>{message}</p>
        </div>
      );
    case "info":
      return toast.info(
        <div>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ marginBottom: "6px" }}
          />
          <p>{message}</p>
        </div>
      );
    default:
      return toast.warning(
        <div>
          <FontAwesomeIcon
            icon={faInfoCircle}
            style={{ marginBottom: "6px" }}
          />
          <p>Toast not defined...</p>
        </div>
      );
  }
}

export default Toast;
