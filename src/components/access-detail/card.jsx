import React from "react";
import buttonArrow from "../../assets/user-info/button-arrow.png";
import Progress from "../common/progress";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { REDIRECT_URL } from "../../config/constants";

const Card = () => {
  const token = sessionStorage.getItem("code") || "";
  const navigate = useNavigate();

  const handleLogin = async () => {
    window.open(REDIRECT_URL, "__blank");
  };

  return (
    <div className="card-positioning-wrap">
      <Progress title="10% complete" width="10%" />
      <div className="main-card-wrap">
        <div>
          <h1 className="form-title">Access your details</h1>
          <p className="form-sub-title">
            HMRC requires you to log in to your Government Gateway through an
            external link to grant the application access to your filing
            information.{" "}
            <span>
              Rest assured, HMRC prioritizes your privacy and will not share
              your login credentials with this app.
            </span>
          </p>
        </div>
        <div>
          <p className="form-second-sub-title">
            Click the button below to login to link to your HMRC account:
          </p>
        </div>

        <div className="form-login-hmrc-btn pointer" onClick={handleLogin}>
          <p>Login to HMRC Gateway</p>
        </div>

        <div>
          <p className="form-light-sub-title">
            If you do not have a HMRC login, please set one up by
            <span
              style={{
                color: "rgba(158, 176, 185, 1)",
                fontWeight: "600",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://www.gov.uk/log-in-register-hmrc-online-services",
                  "__blank"
                )
              }
            >
              {" "}
              clicking here.
            </span>
          </p>
        </div>

        <div className="card-button-wrap mt-40">
          <button
            className="back form-back-button"
            onClick={() => navigate("/start")}
          >
            Back
          </button>
          <button
            className="next-btn active-color form-next-button"
            onClick={() => navigate("/confirm-detail")}
          >
            <p>Next</p>
            <img src={buttonArrow} />
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Card;
