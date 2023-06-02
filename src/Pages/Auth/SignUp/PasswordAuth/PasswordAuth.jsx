// library
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//Style
import "../SignUp.css";
// component
import LeftSignUpLayout4 from "../Components/LeftSignUpLayout4";
import NoticeIcon from "../Components/NoticeIcon";
import WrongIcon from "../Components/WrongIcon";
// import LockIcon from "../Components/LockIcon";
import PasswordIcon, { AltPasswordIcon } from "../Components/PasswordIcon";
import ArrowRight from "../Components/ArrowRight";
import Legal from "../Components/Legal";

export default function PasswordAuth() {
  const userid_REGEX = /^[A-Za-z][A-Za-z0-9_]{6,29}$/;
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  const [isVisible, setVisible] = useState(false);
  const [isAltVisible, setAltVisible] = useState(false);

  const useridRef = useRef();
  const errorRef = useRef();

  const [userid, setUserid] = useState("");
  const [validUserid, setValidUserid] = useState(false);
  const [useridFocus, setUseridFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMsg, seterrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  const togglePasswordVisibility = () => {
    setVisible(!isVisible);
  };

  const toggleAltPasswordVisibility = () => {
    setAltVisible(!isAltVisible);
  };

  useEffect(() => {
    useridRef.current.focus();
  }, []);

  useEffect(() => {
    const result1 = userid_REGEX.test(userid);
    console.log(result1);
    console.log(userid);
    setValidUserid(result1);
  }, [userid]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    seterrorMsg("");
  }, [userid, pwd, matchPwd]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    const data = { username: userid, password: pwd, confirmPassword: matchPwd };
    e.preventDefault();
    try {
      const response = await axios.patch(
        "https://cash2go-backendd.onrender.com/api/v1/user/signup",
        data
      );
      console.log(response.data);
      setSuccess(true);
      toggleModal();
    } catch (error) {
      if (!error?.response) {
        seterrorMsg("No Server Response");
      } else if (error.response?.status === 490) {
        seterrorMsg("username taken");
      } else {
        seterrorMsg("Registration Failed");
      }
      errorRef.current.focus();
    }

    // console.log(userid, pwd);
    // setSuccess(true);
    // toggleModal();
  };

  return (
    <>
      <div className="layout-component">
        <>
          <LeftSignUpLayout4 />
        </>
        <div className="form-wrapper">
          {success && modal && (
            <section className="modal-background">
              <div onClick={toggleModal}></div>
              <div className="modal-container">
                <NoticeIcon />
                <h1 className="modal-title">Congratulations !!!</h1>
                <p className="modal-message">
                  Your signup for our Cash2Go app is now complete. Get ready to
                  unlock great financial posibilities and achieve your goals.
                </p>
                <button className="close-modal" onClick={toggleModal}>
                  {" "}
                  <i>{<WrongIcon />}</i>
                </button>
                <button
                  className="continue-button"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Continue
                </button>
              </div>
            </section>
          )}
          <section>
            <p
              ref={errorRef}
              className={errorMsg ? "error-message" : "offscreen"}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            {/* <h1 className="title">Sign-Up</h1> */}
            <form onSubmit={handelSubmit}>
              <div className="user_userid-wrapper">
                <label htmlFor="userid">Username</label>

                {/* <span className="icon">
                  {" "}
                  <i>{<LockIcon />}</i>
                </span> */}

                <div className="user_email-wrapper">
                  <input
                    type="userid"
                    id="userid"
                    ref={useridRef}
                    autoComplete="off"
                    onChange={(e) => setUserid(e.target.value)}
                    required
                    aria-invalid={validUserid ? "false" : "true"}
                    aria-describedby="useridnote"
                    onFocus={() => setUseridFocus(true)}
                    onBlur={() => setUseridFocus(false)}
                  />
                  <div
                    id="useridnote"
                    className={
                      useridFocus && userid && !validUserid
                        ? "error-message"
                        : "offscreen"
                    }
                  >
                    <span>Must start with an alphabeth</span>
                    <span>Must not be less than 7 chracters</span>
                    <span>Numbers allowed</span>
                  </div>
                </div>
              </div>

              <div className="user_password-wrapper">
                <label htmlFor="password">Password</label>

                <div className="form-field">
                  <div onClick={togglePasswordVisibility}>
                    {isVisible ? <PasswordIcon /> : <AltPasswordIcon />}
                  </div>
                  <input
                    type={isVisible ? "text" : "password"}
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                </div>

                <div
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "error-message" : "offscreen"
                  }
                >
                  <span>8 to 24 characters</span>
                  <span>
                    Must include uppercase and lowercase letters, a number and a special character
                  </span>
                  <span>Allowed special characters: !,@,#$%</span>
                </div>
              </div>

              <div className="user_password-wrapper">
                <label htmlFor="confirm_pwd">Re-enter Password</label>

                <div className="form-field">
                  <div onClick={toggleAltPasswordVisibility}>
                    {isAltVisible ? <PasswordIcon /> : <AltPasswordIcon />}
                  </div>
                  <input
                    type={isAltVisible ? "text" : "password"}
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                </div>
                <div
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "error-message" : "offscreen"
                  }
                >
                  <span>Input must match the first password input field</span>
                </div>
              </div>

              <button
                className="button-wrapper"
                disabled={
                  !validUserid || !validPwd || !validMatch ? true : false
                }
              >
                <span className="button-text">Sign Up</span>
                <ArrowRight />
              </button>
            </form>
            <Legal />
          </section>
        </div>
      </div>
    </>
  );
}
