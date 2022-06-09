// import React from "react";

// export default function sampl() {
//   return (
//     <div>
//       {success ? (
//         <section
//           className="d-flex align-items-center justify-content-center"
//           style={{ minHeight: "150px" }}
//         >
//           <h2 className="my-4 text-success text-center">
//             Registration Success!
//           </h2>{" "}
//           <br />
//           <p className="mx-2">
//             <Link className="btn btn-success text-light" to="/login">
//               Login
//             </Link>
//           </p>
//         </section>
//       ) : (
//         <section className="py-5" style={{ backgroundColor: "#eee" }}>
//           <div className="container h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-lg-12 col-xl-11">
//                 <div
//                   className="card text-black"
//                   style={{ borderRadius: "25px" }}
//                 >
//                   <div className="card-body p-md-5">
//                     <div className="row justify-content-center">
//                       <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                         <p className="text-center text-primary h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                           Sign Up
//                         </p>

//                         <form onSubmit={handleSubmit}>
//                           <div className="row mt-3">
//                             <div className="col">
//                               <label className="text-dark" htmlFor="firstname">
//                                 First Name:
//                               </label>
//                               <input
//                                 ref={userRef}
//                                 type="text"
//                                 id="firstname"
//                                 className="form-control text-dark"
//                                 aria-label="First name"
//                                 autoComplete="off"
//                                 onFocus={() => setFirstnameFocus(true)}
//                                 onBlur={() => setFirstnameFocus(false)}
//                                 onChange={(e) => setFirstname(e.target.value)}
//                                 required
//                               />
//                             </div>
//                             <div className="col">
//                               <label className="text-dark" htmlFor="lastname">
//                                 Last Name:
//                               </label>
//                               <input
//                                 type="text"
//                                 id="lastname"
//                                 className="form-control text-dark"
//                                 aria-label="Last name"
//                                 autoComplete="off"
//                                 onFocus={() => setLastnameFocus(true)}
//                                 onBlur={() => setLastnameFocus(false)}
//                                 onChange={(e) => setLastname(e.target.value)}
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <label className="text-dark" htmlFor="email">
//                             Email:
//                             <FontAwesomeIcon
//                               icon={faCheck}
//                               className={validEmail ? "valid" : "hide"}
//                             />
//                             <FontAwesomeIcon
//                               icon={faTimes}
//                               className={
//                                 validEmail || !email ? "hide" : "invalid"
//                               }
//                             />
//                           </label>
//                           <input
//                             type="email"
//                             id="email"
//                             autoComplete="off"
//                             onChange={(e) => setEmail(e.target.value)}
//                             value={email}
//                             required
//                             aria-invalid={validEmail ? "false" : "true"}
//                             onFocus={() => setEmailFocus(true)}
//                             onBlur={() => setEmailFocus(false)}
//                           />
//                           <p
//                             id="emailnote"
//                             className={
//                               emailFocus && !validEmail
//                                 ? "instructions"
//                                 : "offscreen"
//                             }
//                           >
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Should be a valid email
//                             <br />
//                             Allowed special characters: <br />
//                             <span aria-label="at symbol">@</span>{" "}
//                           </p>

//                           <label className="text-dark" htmlFor="phone">
//                             Phone:
//                             <FontAwesomeIcon
//                               icon={faCheck}
//                               className={validPhone ? "valid" : "hide"}
//                             />
//                             <FontAwesomeIcon
//                               icon={faTimes}
//                               className={
//                                 validPhone || !phone ? "hide" : "invalid"
//                               }
//                             />
//                           </label>
//                           <input
//                             type="tel"
//                             id="phone"
//                             autoComplete="off"
//                             onChange={(e) => setPhone(e.target.value)}
//                             value={phone}
//                             required
//                             aria-invalid={validPhone ? "false" : "true"}
//                             onFocus={() => setPhoneFocus(true)}
//                             onBlur={() => setPhoneFocus(false)}
//                           />
//                           <p
//                             id="phonenote"
//                             className={
//                               phoneFocus && !validPhone
//                                 ? "instructions"
//                                 : "offscreen"
//                             }
//                           >
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             Must be an indian mobile number
//                             <br />
//                             upto 10 digits <br />
//                           </p>

//                           <label className="text-dark" htmlFor="organization">
//                             Organization:
//                           </label>
//                           <input
//                             type="text"
//                             value={organization}
//                             id="organization"
//                             autoComplete="off"
//                             onChange={(e) => setOrganization(e.target.value)}
//                             required
//                             onFocus={() => setOrganizationFocus(true)}
//                             onBlur={() => setOrganizationFocus(false)}
//                           />

//                           {/* <label className="text-dark" htmlFor="country">
//                             Country:
//                           </label>
//                           <CountrySelect
//                             value={country}
//                             onChange={(e) => setCountry(e.target.value)}
//                             id="country"
//                             required
//                             onFocus={() => setCountryFocus(true)}
//                             onBlur={() => setCountryFocus(false)}
//                           /> */}

//                           <label className="text-dark" htmlFor="address">
//                             Address:
//                           </label>

//                           <div className="text-center text-success">
//                             <strong>
//                               <p>{status}</p>
//                               {lat && <p>Latitude: {lat}</p>}
//                               {lng && <p>Longitude: {lng}</p>}
//                             </strong>
//                           </div>

//                           <input
//                             type="text"
//                             id="address"
//                             autoComplete="on"
//                             onChange={(e) => setAddress(e.target.value)}
//                             value={address}
//                             required
//                           />

//                           <label className="text-dark" htmlFor="password">
//                             Password:
//                             <FontAwesomeIcon
//                               icon={faCheck}
//                               className={validPassword ? "valid" : "hide"}
//                             />
//                             <FontAwesomeIcon
//                               icon={faTimes}
//                               className={
//                                 validPassword || !password ? "hide" : "invalid"
//                               }
//                             />
//                           </label>
//                           <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPassword(e.target.value)}
//                             value={password}
//                             required
//                             aria-invalid={validPassword ? "false" : "true"}
//                             onFocus={() => setPasswordFocus(true)}
//                             onBlur={() => setPasswordFocus(false)}
//                           />
//                           <p
//                             id="pwdnote"
//                             className={
//                               passwordFocus && !validPassword
//                                 ? "instructions"
//                                 : "offscreen"
//                             }
//                           >
//                             <FontAwesomeIcon icon={faInfoCircle} />
//                             At least 8 characters and at most 12 characters.
//                             <br />
//                             At least one Uppercase character & one numeric & At
//                             least two special characters
//                             <br />
//                             Allowed special characters:{" "}
//                             <span aria-label="exclamation mark">!</span>{" "}
//                             <span aria-label="at symbol">@</span>{" "}
//                             <span aria-label="hashtag">#</span>{" "}
//                             <span aria-label="dollar sign">$</span>{" "}
//                             <span aria-label="percent">%</span>{" "}
//                             <span aria-label="percent">&</span>{" "}
//                             <span aria-label="percent">^</span>
//                           </p>

//                           <button
//                             className="my-3 btn btn-warning"
//                             disabled={
//                               !validPassword && !validEmail && !validPhone
//                                 ? true
//                                 : false
//                             }
//                           >
//                             Sign Up
//                           </button>
//                         </form>

//                         <p style={{ color: "orange" }}>
//                           Already registered?
//                           <br />
//                           <span className="line my-2">
//                             <Link
//                               className="btn btn-success text-light my-2"
//                               to="/login"
//                             >
//                               Login
//                             </Link>
//                           </span>{" "}
//                           &nbsp;
//                           <span className="line my-2">
//                             <Link
//                               className="btn btn-success text-light my-2"
//                               to="/otpbox"
//                             >
//                               Otp validation
//                             </Link>
//                           </span>
//                         </p>
//                       </div>
//                       <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                         <img
//                           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                           className="img-fluid"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }