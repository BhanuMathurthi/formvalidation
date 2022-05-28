import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,30}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,30}[a-zA-Z0-9])?)*$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-]{2}).{8,24}$/;

const Register = () => {
  const userRef = useRef();

  const [user, setUser] = useState("");
  // const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  // const [emailFocus, setEmailFocus] = useState(false);

  const [phonenum, setPhonenum] = useState("");
  const [validPhonenum, setValidPhonenum] = useState(false);
  // const [phonenumFocus, setPhonenumFocus] = useState(false);

  const [address, setAddress] = useState("");

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  // const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PHONE_REGEX.test(phonenum);
    const v3 = PWD_REGEX.test(pwd);

    if (v1 && v2 && v3) {
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
          <h2 className="text-light  text-center">Registration Success!</h2>
          <p>
            <Link
              className="text-light btn btn-success"
              style={{ textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </section>
      ) : (
        <section>
          <h1 className="text-light">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <label className="text-light" htmlFor="fullname">
              Full Name:
            </label>
            <input
              type="text"
              id="fullname"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-describedby="uidnote"
              // onFocus={() => setUserFocus(true)}
              // onBlur={() => setUserFocus(false)}
            />
            <label className="text-light" htmlFor="email">
              Email:
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? "hide" : "invalid"}
              />
            </label>
            <input
              type="email"
              id="email"
              // ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              // onFocus={() => setEmailFocus(true)}
              // onBlur={() => setEmailFocus(false)}
            />
            <p
              id="emailnote"
              className={
                // emailFocus && !validEmail ? "instructions" : "offscreen"
                !validEmail ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              0 to 30 characters.
              <br />
              Allowed special characters: <br />
              <span aria-label="at symbol">@</span>{" "}
            </p>

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
              // ref={userRef}
              autoComplete="off"
              onChange={(e) => setPhonenum(e.target.value)}
              value={phonenum}
              required
              aria-invalid={validPhonenum ? "false" : "true"}
              aria-describedby="uidnote"
              // onFocus={() => setPhonenumFocus(true)}
              // onBlur={() => setPhonenumFocus(false)}
            />
            <p
              id="phonenote"
              className={
                // phonenumFocus && !validPhonenum ? "instructions" : "offscreen"
                !validPhonenum ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be an indian mobile number
              <br />
              upto 10 digits <br />
            </p>

            <label className="text-light" htmlFor="address">
              Address:
            </label>

            <input
              type="text"
              id="address"
              // ref={userRef}
              autoComplete="on"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
              aria-describedby="uidnote"
            />

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
              // onFocus={() => setPwdFocus(true)}
              // onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              // className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              className={!validPwd ? "instructions" : "offscreen"}
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
              <span aria-label="percent">%</span>{" "}
              <span aria-label="percent">&</span>{" "}
              <span aria-label="percent">^</span>
            </p>

            <button
              className="my-3 btn btn-warning"
              disabled={
                !validPwd || !validEmail || !validPhonenum ? true : false
              }
            >
              Sign Up
            </button>
          </form>
          <p className="text-light">
            Already registered?
            <br />
            <span className="line">
              <Link className="btn btn-success my-2" to="/login">
                Login
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
