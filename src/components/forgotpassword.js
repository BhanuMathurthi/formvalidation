import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  const userRef = useRef();

  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,30}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,30}[a-zA-Z0-9])?)*$/;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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
      <section style={{ minHeight: "150px" }}>
        <h1 className="text-light">Login</h1>
        <form onSubmit={handleSubmit}>
          <label className="text-light" htmlFor="email">
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
          <p className="fs-6 text-light">
            <br />
            <span className="line">
              <Link style={{ textDecoration: "none" }} className="" to="/">
                Back to Home Page
              </Link>
            </span>
          </p>
        </form>
      </section>
    </>
  );
};

export default Forgot;
