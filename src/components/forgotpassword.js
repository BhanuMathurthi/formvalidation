import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  const userRef = useRef();

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const forgotPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center text-primary h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form onSubmit={handleSubmit}>
                        <label className="text-dark" htmlFor="email">
                          Email:
                        </label>
                        <input
                          type="email"
                          id="email"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          aria-invalid={validEmail ? "false" : "true"}
                          aria-describedby="uidnote"
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
                        />
                        <button
                          className="mt-4 btn btn-success"
                          disabled={!validEmail ? true : false}
                        >
                          Forgot Password
                        </button>
                        <p className="fs-6">
                          <br />
                          <span className="line">
                            <Link
                              style={{ textDecoration: "none" }}
                              className="text-warning"
                              to="/"
                            >
                              Back to Home Page
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
    </>
  );
};

export default Forgot;
