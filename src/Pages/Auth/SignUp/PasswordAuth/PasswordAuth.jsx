//Style
import "./PasswordAuth.css";
//Components
import LeftSignUpLayout from "./components/LeftSignUpLayout";
import Legal from "./components/Legal";
import {
  IconWrong,
  ArrowRight,
  IconRight,
  LockIcon,
  PasswordIcon,
  NoticeIcon,
} from "./components/icons";
//Libraries
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

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
      <div className="signup-layout">
        <>
          <LeftSignUpLayout />
        </>
        <div className="form-wrapper">
          {success && modal && (
            <section className="modal">
              <div className="overlay" onClick={toggleModal}></div>
              <div className="modal-content">
                <h1 className="black big">
                  <i className="notice-icon">{<NoticeIcon />}</i> <br />
                  Congratulations !!!
                </h1>
                <p className="sbtn-text black">
                  Your signup for our Cash2Go app is now complete. Get ready to
                  unlock great financial posibilities and achieve your goals.
                </p>
                <button className="close-modal" onClick={toggleModal}>
                  {" "}
                  <i>{<IconWrong />}</i>
                </button>
                <button
                  className="modal-button"
                  onClick={() => {
                    navigate("#");
                  }}
                >
                  <p className="sbtn-text">Continue</p>
                </button>
              </div>
            </section>
          )}
          <section>
            <p
              ref={errorRef}
              className={errorMsg ? "errorMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <h1 className="form-name">Sign-Up</h1>
            <form onSubmit={handelSubmit}>
              <label htmlFor="email" className="label">
                Username
                <span className={validEmail ? "valid" : "hide"}>
                  <i>{<IconRight />}</i>
                </span>
                <span className={validEmail || !email ? "hide" : "invalid"}>
                  <i>{<IconWrong />}</i>
                </span>
              </label>

              <span>
                {" "}
                <i>{<LockIcon />}</i>
              </span>
              <div className="input-container">
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
                ></input>
              </div>

              <p
                id="emailnote"
                className={
                  emailFocus && email && !validEmail
                    ? "instructions"
                    : "offscreen"
                }
              >
                - Must be a valid email address
              </p>

              <label htmlFor="password" className="label">
                Password
                <span className={validPwd ? "valid" : "hide"}>
                  <i>{<IconRight />}</i>
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                  <i>{<IconWrong />}</i>
                </span>
              </label>

              <span>
                {" "}
                <i>{<PasswordIcon />}</i>
              </span>
              <div className="input-container">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                ></input>
              </div>

              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                - 8 to 24 characters
                <br />
                - Must include uppercase and lowercase letters, a number <br />
                and a special character
                <br />- Allowed special characters: !,@,#$%
              </p>

              <label htmlFor="confirm_pwd" className="label">
                Re-enter Password
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                  <i>{<IconRight />}</i>
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                  <i>{<IconWrong />}</i>
                </span>
              </label>

              <span>
                {" "}
                <i>{<PasswordIcon />}</i>
              </span>
              <div className="input-container">
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                ></input>
              </div>

              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                Input must match the first password input field
                <br />
              </p>
              <button
                className="submit-button"
                disabled={
                  !validEmail || !validPwd || !validMatch ? true : false
                }
              >
                <span className="sbtn-text">Sign Up</span>
                <ArrowRight />
              </button>
            </form>
            <div className="legal-wrapper">
              <Legal />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
