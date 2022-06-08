import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CountrySelect from "react-bootstrap-country-select";
import axios from "axios";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9])(?=.*[!@#$%^&*-]{2})[A-Za-z\d!@#$%^&*-]{8,12}$/;

const Register = () => {
  const userRef = useRef();

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const [user, setUser] = useState("");
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [organization, setOrganization] = useState("");
  const [organizationFocus, setOrganizationFocus] = useState(false);

  const [country, setCountry] = useState("");
  const [countryFocus, setCountryFocus] = useState(false);

  const [phonenum, setPhonenum] = useState("");
  const [validPhonenum, setValidPhonenum] = useState(false);
  const [phonenumFocus, setPhonenumFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [success, setSuccess] = useState(false);

  const [address, setAddress] = useState("");

  // const [value, setValue] = useState(null);

  // const [data, setData] = useState([]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    setValidPhonenum(PHONE_REGEX.test(phonenum));
    setValidPwd(PWD_REGEX.test(pwd));
  }, [email, phonenum, pwd]);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PHONE_REGEX.test(phonenum);
    const v3 = PWD_REGEX.test(pwd);

    if (v1 && v2 && v3) {
      setSuccess(true);
    }
    // const url = "https://strofesapps.live/junglewatch/user/register";

    // axios
    //   .post(url, {
    //     user: "",
    //     email: "",
    //     phonenum: "",
    //     pwd: "",
    //     organization: "",
    //     country: "",
    //     lat: "",
    //     lng: "",
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.response);
    //   });
  };

  return (
    <>
      {success ? (
        <section
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "150px" }}
        >
          <h2 className="my-4 text-success text-center">
            Registration Success!
          </h2>{" "}
          <br />
          <p className="mx-2">
            <Link className="btn btn-success text-light" to="/login">
              Login
            </Link>
          </p>
        </section>
      ) : (
        <section className="py-5" style={{ backgroundColor: "#eee" }}>
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
                          Sign Up
                        </p>

                        <form onSubmit={handleSubmit}>
                          <label className="text-dark" htmlFor="fullname">
                            Full Name:
                          </label>
                          <input
                            type="text"
                            id="fullname"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                          />
                          <label className="text-dark" htmlFor="email">
                            Email:
                            <FontAwesomeIcon
                              icon={faCheck}
                              className={validEmail ? "valid" : "hide"}
                            />
                            <FontAwesomeIcon
                              icon={faTimes}
                              className={
                                validEmail || !email ? "hide" : "invalid"
                              }
                            />
                          </label>
                          <input
                            type="email"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                          />
                          <p
                            id="emailnote"
                            className={
                              emailFocus && !validEmail
                                ? "instructions"
                                : "offscreen"
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Should be a valid email
                            <br />
                            Allowed special characters: <br />
                            <span aria-label="at symbol">@</span>{" "}
                          </p>

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
                            autoComplete="off"
                            onChange={(e) => setPhonenum(e.target.value)}
                            value={phonenum}
                            required
                            aria-invalid={validPhonenum ? "false" : "true"}
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

                          <label className="text-dark" htmlFor="organization">
                            Organization:
                          </label>
                          <input
                            type="text"
                            value={organization}
                            id="organization"
                            autoComplete="off"
                            onChange={(e) => setOrganization(e.target.value)}
                            required
                            onFocus={() => setOrganizationFocus(true)}
                            onBlur={() => setOrganizationFocus(false)}
                          />

                          <label className="text-dark" htmlFor="country">
                            Country:
                          </label>
                          <CountrySelect
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            id="country"
                            required
                            onFocus={() => setCountryFocus(true)}
                            onBlur={() => setCountryFocus(false)}
                          />

                          <label className="text-dark" htmlFor="address">
                            Address:
                          </label>

                          <div className="text-center text-success">
                            <strong>
                              <p>{status}</p>
                              {lat && <p>Latitude: {lat}</p>}
                              {lng && <p>Longitude: {lng}</p>}
                            </strong>
                          </div>

                          <input
                            type="text"
                            id="address"
                            autoComplete="on"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            required
                          />

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
                            className="my-3 btn btn-warning"
                            disabled={
                              !validPwd || !validEmail || !validPhonenum
                                ? true
                                : false
                            }
                          >
                            Sign Up
                          </button>
                        </form>

                        <p style={{ color: "orange" }}>
                          Already registered?
                          <br />
                          <span className="line my-2">
                            <Link
                              className="btn btn-success text-light my-2"
                              to="/login"
                            >
                              Login
                            </Link>
                          </span>
                        </p>
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
};

export default Register;
