import React, { useState } from "react";

const OTPBox = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
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
                height: "350px",
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
              <span
                style={{ color: "#989696b8", fontSize: "15px" }}
                className="my-2"
              >
                Enter the OTP sent to you to verify your identity
              </span>
              <div className="d-flex flex-row mt-3">
                {otp.map((data, index) => {
                  return (
                    <input
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

              <p className="pt-2">OTP Entered - {otp.join("")}</p>
              <button
                onClick={(e) => alert("Entered OTP is " + otp.join(""))}
                className="btn btn-primary"
              >
                Verify OTP
              </button>

              <div className="text-center mt-3">
                <span
                  style={{ color: "#989696b8", fontSize: "15px" }}
                  className="d-block "
                >
                  Don't receive the code?
                </span>
                <span className="font-weight-bold text-danger cursor">
                  Resend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OTPBox;
