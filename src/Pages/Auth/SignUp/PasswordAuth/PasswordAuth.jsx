// library
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
//Style
import "../SignUp.css";
// component
import LeftSignUpLayout4 from "../Components/LeftSignUpLayout4";
import NoticeIcon from "../Components/NoticeIcon";
import WrongIcon from "../Components/WrongIcon";
import RightIcon from "../Components/RightIcon";
// import LockIcon from "../Components/LockIcon";
import PasswordIcon from "../Components/PasswordIcon";
import ArrowRight from "../Components/ArrowRight";
import Legal from "../Components/Legal";

export default function PasswordAuth() {
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMsg, seterrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result1 = EMAIL_REGEX.test(email);
    console.log(result1);
    console.log(email);
    setValidEmail(result1);
  }, [email]);

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
  }, [email, pwd, matchPwd]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    // try {
    //     const response = await axios.post('url', JSON.stringify({email, pwd}));
    //     console.log(response.data);
    //     setSuccess(true);
    //     setEmail('');
    //     setPwd('');
    //     setValidMatch('')
    //     toggleModal();

    // } catch (error) {
    //     if (!error?.response){
    //         seterrorMsg('No Server Response');
    //     } else {
    //         seterrorMsg('Registration Failed')
    //     }
    //     errorRef.current.focus();
    // }

    console.log(email, pwd);
    setSuccess(true);
    toggleModal();
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
                  className="modal-button"
                  onClick={() => {
                    navigate("#");
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
              <div className="user_email-wrapper">
                <label htmlFor="email">
                  Username
                  <span className={validEmail ? "valid" : "hide"}>
                    <i>{<RightIcon />}</i>
                  </span>
                  <span className={validEmail || !email ? "hide" : "invalid"}>
                    <i>{<WrongIcon />}</i>
                  </span>
                </label>

                {/* <span className="icon">
                  {" "}
                  <i>{<LockIcon />}</i>
                </span> */}

                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="emailnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p
                  id="emailnote"
                  className={
                    emailFocus && email && !validEmail
                      ? "error-message"
                      : "offscreen"
                  }
                >
                  - Must be a valid email address
                </p>
              </div>

              <div className="user_password-wrapper">
                <label htmlFor="password">
                  Password
                  <span className={validPwd ? "valid" : "hide"}>
                    <i>{<RightIcon />}</i>
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <i>{<WrongIcon />}</i>
                  </span>
                </label>

                <div className="form-field">
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  <div>
                    {" "}
                    <i>{<PasswordIcon />}</i>
                  </div>
                </div>

                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "error-message" : "offscreen"
                  }
                >
                  - 8 to 24 characters
                  <br />- Must include uppercase and lowercase letters, a number{" "}
                  <br />
                  and a special character
                  <br />- Allowed special characters: !,@,#$%
                </p>
              </div>

              <div className="user_password-wrapper">
                <label htmlFor="confirm_pwd">
                  Re-enter Password
                  <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <i>{<RightIcon />}</i>
                  </span>
                  <span
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  >
                    <i>{<WrongIcon />}</i>
                  </span>
                </label>

                <div className="form-field">
                  <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  <span>
                    {" "}
                    <i>{<PasswordIcon />}</i>
                  </span>
                </div>
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "error-message" : "offscreen"
                  }
                >
                  Input must match the first password input field
                  <br />
                </p>
              </div>

              <button
                className="button-wrapper"
                disabled={
                  !validEmail || !validPwd || !validMatch ? true : false
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
