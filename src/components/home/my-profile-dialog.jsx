import React from "react";
import close from "../../assets/close.svg";
import flag from "../../assets/common/flag.svg";
import "../form/index.css";
import DeleteProfile from "./delete-profile-dialog";

const MyProfileDialog = ({ setShowMyProfileDialog }) => {
  const [showDeleteAccount, setShowDeleteAccount] = React.useState(false);
  return (
    <div className="login-dialog-wrap">
      {showDeleteAccount && (
        <div className="model-parent">
          <div
            className="model-wrap w-[100%]"
            style={{ width: "80%", top: "200px" }}
          >
            <DeleteProfile setShowDeleteAccount={setShowDeleteAccount} />
          </div>
        </div>
      )}
      <div className="flex items-center gap-[10px] justify-end">
        <img src={flag} />
        <img
          src={close}
          className="cursor-pointer"
          onClick={() => setShowMyProfileDialog(false)}
        />
      </div>
      <div className="login-header">
        <h1 className="form-title">My Profile</h1>
      </div>

      <div className="login-dialog-text-fields-wrap">
        <div className="login-single-text-field-wrap">
          <label>Full Name</label>
          <input />
        </div>
        <div className="login-single-text-field-wrap">
          <label>Email</label>
          <input />
        </div>
        <div className="login-single-text-field-wrap">
          <label>Password</label>
          <input placeholder="*******" className="px-[10px] py-[10px]" />
        </div>

        <div className="logn-register-option flex items-center">
          <input
            type="checkbox"
            className="h-[21px] w-[21px] border border-[2px] border-[#E1E1E1]"
          />
          <p>I’d like to receive marketing email updates from TaxReady.uk </p>
        </div>
        <div className="mt-[60px] flex items-center justify-between">
          <button
            onClick={() => setShowDeleteAccount(true)}
            className="pointer"
          >
            <p className="archivo text-[24px] text-[#D3984E] leading-[26px]">
              Delete account
            </p>
          </button>
          <div className="flex items-center gap-[16px]">
            <button
              className="border border-[1px] border-[#B7C0C5] h-[67px] w-[162px] archivo text-[#5E7D8C] text-[24px] leading-[26px]"
              onClick={() => setShowMyProfileDialog(false)}
            >
              Cancel
            </button>
            <button className="border border-[1px] border-[#B7C0C5] h-[67px] w-[162px] archivo text-[#FFFFFF] text-[24px] bg-[#003049] leading-[26px]">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfileDialog;
