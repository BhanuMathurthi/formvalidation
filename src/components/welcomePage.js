import React from "react";

export default function WelcomePage() {
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#449e8b" }}>
        <div className="container d-flex align-items-center justify-content-center h-100">
          <p className="text-dark h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">
            <span className="text-warning">Registration Success!</span> Welcome
            to the home page
          </p>
        </div>
      </section>
    </>
  );
}
