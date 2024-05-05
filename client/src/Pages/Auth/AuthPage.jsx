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
      <div className="Auth_container2 w-[300px] h-[250px] relative left-[25px] sm:left-[500px] md:left-[700px] lg:left-[1500px]">
        <p className="User_Details">
          <div className="Chanel_logo_App">
            <p className="profile w-[50px]">
              {User.image ? (
                <>
                  <img
                    src={User.image}
                    alt=""
                    className="rounded-full w-[50px] h-[50px]"
                  />{" "}
                </>
              ) : (
                <>{User?.email.charAt(0).toUpperCase()} </>
              )}
            </p>
          </div>
          <div className="email_Auth text-md  md:ms-[0px] lg:ms-[0px]">
            {User?.email}
          </div>
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
