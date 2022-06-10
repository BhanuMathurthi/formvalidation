import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpValidation = () => {
  const PHONE_REGEX = /^[6-9]\d{9}$/;

  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const [data, setData] = useState("");
  const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();

    const verifyotpurl = "https://strofesapps.live/junglewatch/user/verifyOTP";

    axios
      .post(
        verifyotpurl,
        JSON.stringify({
          otp,
          phone,
        })
      )
      .then((response) => {
        const details = response.json();
        setData(details.data);

        if (details.data === "verified") {
          return navigate("/welcomepage");
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // const sendOTP = (e) => {
  //   e.preventDefault();

  //   const verifyotpurl = "https://strofesapps.live/junglewatch/user/verifyOTP";

  //   axios
  //     .post(
  //       verifyotpurl,
  //       JSON.stringify({
  //         otp,
  //         phone,
  //       })
  //     )
  //     .then((res) => {
  //       const details = res.data;
  //       setData(details);

  //       // const details = res.json();
  //       // setData(details);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });

  //   // alert("Entered OTP is " + otp.join(""));
  // };

  const resendOTP = () => {
    const resendotpurl = "https://strofesapps.live/junglewatch/user/resendOTP";
    axios
      .post(
        resendotpurl,
        JSON.stringify({
          phone,
        })
      )
      .then((res) => {
        const details = res.json().data;
        setData(details);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <>
      <section style={{ backgroundColor: "#888" }}>
        <div className="container">
          <div className="row vh-100 justify-content-center align-items-center">
            <div className="col-md-8 col-lg-4">
              <div
                style={{
                  paddingTop: "3rem",
                  paddingRight: "1rem",
                  paddingBottom: "3rem",
                  paddingLeft: "1rem",

                  width: "350px",
                  margin: "0 auto",
                  padding: "10px",
                  borderRadius: "20px",
                  background: "#fff",
                  border: "none",
                  height: "380px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "0",
                  wordWrap: "break-word",
                  backgroundClip: "border-box",
                  border: "1px solid rgba(0,0,0,.125)",
                  borderRadius: "0.95rem",
                }}
                className="card"
              >
                <h5 className="pt-4">Mobile phone verification</h5>

                {error && <p className="text-danger">Invalid OTP</p>}

                <span
                  style={{ color: "#989696b8", fontSize: "15px" }}
                  className="my-2"
                >
                  Enter the OTP sent to you to verify your identity
                </span>
                <form onSubmit={verifyOTP}>
                  <div className="d-flex flex-row mt-3">
                    {otp.map((data, index) => {
                      return (
                        <input
                          style={{ backgroundColor: "#e3e1e1" }}
                          type="text"
                          name="otp"
                          maxLength="1"
                          className="form-control mx-1"
                          key={index}
                          value={data}
                          onChange={(e) => handleChange(e.target, index)}
                          onFocus={(e) => e.target.select()}
                        />
                      );
                    })}
                  </div>

                  {/* <p className="pt-2">OTP Entered - {otp.join("")}</p> */}
                  <button className="btn btn-primary">Verify OTP</button>

                  <div className="text-center mt-3">
                    <p style={{ fontSize: "15px" }}>Don't receive the code?</p>
                    <button onClick={resendOTP} className="btn btn-link">
                      Resend OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtpValidation;
