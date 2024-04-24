import React from "react";
import { GoogleLogout } from "react-google-login";
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUser } from "../../Actions/CurrentUser.js";
import "./Auth.css";
function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {
  const dispatch = useDispatch();
  {
    console.log("auth user authPage", User);
  }
  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out SuccessFully");
  };

  return (
    <div className="Auth_container" onClick={() => setAuthBtn(false)}>
      <div className="Auth_container2">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="profile">
              {User.image ? (
                <>
                  <img
                    src={User.image}
                    alt=""
                    className="rounded-full"
                    width={"70px"}
                    height={"70px"}
                  />{" "}
                </>
              ) : (
                <>{User?.email.charAt(0).toUpperCase()} </>
              )}
            </p>
          </div>
          <div className="email_Auth">{User?.email}</div>
        </p>
        <div className="btns_Auth">
          {User.name ? (
            <>
              {
                <Link to={`/channel/${User._id}`} className="btn_Auth">
                  Your Channel
                </Link>
              }
            </>
          ) : (
            <>
              <input
                type="submit"
                className="btn_Auth"
                value="Create Your Channel"
                onClick={() => setEditCreateChanelBtn(true)}
              />
            </>
          )}

          <div>
            <GoogleLogout
              clientId={
                "565866976001-kogc3n05n90ug8i92r0t40tl8co0fhse.apps.googleusercontent.com"
              }
              onLogoutSuccess={onLogOutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_Auth">
                  <BiLogOut />
                  Log Out
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
