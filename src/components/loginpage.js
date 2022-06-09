import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  // const userRef = useRef();

  const PHONE_REGEX = /^[6-9]\d{9}$/;
  const PASSWORD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*-]{2})[A-Za-z\d!@#$%^&*-]{8,12}$/;

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [data, setData] = useState([]);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [err, setErr] = useState("");

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
    setValidPassword(PASSWORD_REGEX.test(password));
  }, [phone, password]);

  useEffect(() => {
    setErrMsg("invalid phone number");
  }, [phone]);

  useEffect(() => {
    setErrMsg("Invalid password");
  }, [password]);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = PHONE_REGEX.test(phone);
    const v2 = PASSWORD_REGEX.test(password);

    if (v1 && v2) {
      setSuccess(true);
    }

    const url = "https://strofesapps.live/junglewatch/user/login";

    axios
      .post(url, {
        phone,
        password,
      })
      .then((res) => {
        const details = res.data;
        setData({ details });
      })
      .catch((error) => {
        setErr(error.res);
      });
  };

  return (
    <>
      {success ? (
        <section
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "150px" }}
        >
          <h1 className="text-primary text-center fs-3">
            Successfully Logged in, Thank You
          </h1>{" "}
          &nbsp; &nbsp;
          <p>
            <span className="line my-2">
              <Link className="text-secondary my-2" to="/">
                Back to home
              </Link>
            </span>
          </p>
        </section>
      ) : (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                  style={{ borderRadius: "25px" }}
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center text-primary h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                          Login
                        </p>
                        <form onSubmit={handleSubmit}>
                          <label className="text-dark" htmlFor="phone">
                            Phone:
                            <FontAwesomeIcon
                              icon={faCheck}
                              className={validPhone ? "valid" : "hide"}
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              className={
                                validPhone || !phone ? "hide" : "invalid"
                              }
                            />
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            autoComplete="off"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            aria-invalid={validPhone ? "false" : "true"}
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                          />
                          <p
                            id="phonenote"
                            className={
                              phoneFocus && !validPhone
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must be an indian mobile number
                            <br />
                            upto 10 digits <br />
                          </p>

                          <label className="text-dark" htmlFor="password">
                            Password:
                            <FontAwesomeIcon
                              icon={faCheck}
                              className={validPassword ? "valid" : "hide"}
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              className={
                                validPassword || !password ? "hide" : "invalid"
                              }
                            />
                          </label>
                          <input
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPassword ? "false" : "true"}
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                          />
                          <p
                            id="pwdnote"
                            className={
                              passwordFocus && !validPassword
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            At least 8 characters and at most 12 characters.
                            <br />
                            At least one Uppercase character & one numeric & At
                            least two special characters
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
                            className="mt-4 btn btn-success"
                            disabled={
                              !validPhone && !validPassword ? true : false
                            }
                          >
                            Login
                          </button>
                          <p className="text-dark">
                            <br />
                            <span className="line">
                              <Link
                                to="/forgotpassword"
                                className="text-danger"
                                style={{ textDecoration: "none" }}
                              >
                                forgot password?
                              </Link>
                            </span>
                          </p>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
