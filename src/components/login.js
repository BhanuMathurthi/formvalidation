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
  const userRef = useRef();

  const PHONE_REGEX = /^[6-9]\d{9}$/;
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*-]{2})[A-Za-z\d!@#$%^&*-]{8,12}$/;

  const [phonenum, setPhonenum] = useState("");
  const [validPhonenum, setValidPhonenum] = useState(false);
  const [phonenumFocus, setPhonenumFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [data, setData] = useState([]);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [err, setErr] = useState("");

  useEffect(() => {
    setValidPhonenum(PHONE_REGEX.test(phonenum));
  }, [phonenum]);

  useEffect(() => {
    setErrMsg("invalid phone number");
  }, [phonenum]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("Invalid password");
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
    }

    const url = "https://strofesapps.live/junglewatch/user/login";

    axios
      .post(url, {
        "phonenum": "",
        "pwd": "",

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
                              className={validPhonenum ? "valid" : "hide"}
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              className={
                                validPhonenum || !phonenum ? "hide" : "invalid"
                              }
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
                              phonenumFocus && !validPhonenum
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
                            className={
                              pwdFocus && !validPwd
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
                              !validPhonenum && !validPwd ? true : false
                            }
                          >
                            Login
                          </button>
                          <p className="text-dark">
                            <br />
                            <span className="line">
                              <Link
                                className="text-danger"
                                style={{ textDecoration: "none" }}
                                to="/forgot-password"
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
