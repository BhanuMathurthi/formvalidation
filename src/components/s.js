{/* <form onSubmit={handleSubmit}>
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
                              !validPhonenum || !validPwd ? true : false
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
                        </form> */}