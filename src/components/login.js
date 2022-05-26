import { useState, useRef, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Login = () => {
  const userRef = useRef();

  const PHONE_REGEX = /^[6-9]\d{9}$/;
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-]{2}).{8,24}$/;

  const [phonenum, setPhonenum] = useState("");
  const [validPhonenum, setValidPhonenum] = useState(false);
  const [phonenumFocus, setPhonenumFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidPhonenum(PHONE_REGEX.test(phonenum));
  }, [phonenum]);

  useEffect(() => {
    setErrMsg("");
  }, [phonenum]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = PHONE_REGEX.test(phonenum);
    const v2 = PWD_REGEX.test(pwd);

    if (v1 && v2) {
      setSuccess(true);
      return;
    }
  };

  return (
    <>
      {success ? (
        <section
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "150px" }}
        >
          <h1 className="text-light text-center fs-3">
            Successfully Logged in, <br />
            Thank You
          </h1>
        </section>
      ) : (
        <section style={{ minHeight: "150px" }}>
          <h1 className="text-light">Login</h1>
          <form onSubmit={handleSubmit}>
            <label className="text-light" htmlFor="phone">
              Phone:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPhonenum ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPhonenum || !phonenum ? "hide" : "invalid"}
              />
            </label>
            <input
              type="tel"
              id="phone"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setPhonenum(e.target.value)}
              value={phonenum}
              required
              aria-invalid={validPhonenum ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setPhonenumFocus(true)}
              onBlur={() => setPhonenumFocus(false)}
            />
            <p
              id="phonenote"
              className={
                phonenumFocus && !validPhonenum ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be an indian mobile number
              <br />
              upto 10 digits <br />
            </p>

            <label className="text-light" htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and 2
              special characters.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <button
              className="mt-4 btn btn-success"
              disabled={!validPhonenum || !validPwd ? true : false}
            >
              Login
            </button>
            <p className="text-light">
              <br />
              <span className="line">
                <Link style={{ textDecoration: "none" }} to="/forgot-password">
                  forgot password?
                </Link>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
