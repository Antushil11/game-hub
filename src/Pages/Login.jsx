import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";


const Login = () => {
  // Sign In
  const {
    signIn,
    
    setUser,
    
    signInWithEmailFunc,
    sendPassResetEmailFunc,
  } = use(AuthContext);
  // console.log(user);
  const location = useLocation();
  const [show, setShow] = useState(false);

  const emailRef = useRef(null);

  const navigate = useNavigate();
  // console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        
        const user = result.user;
        setUser(user);
        toast.success("Login successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };

  const handleGoogleSignin = () => {
    signInWithEmailFunc()
      .then((result) => {
        console.log(result);
        // navigate(from)
        toast.success("signUp successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  
  const handleForgetPassword = () => {
    // console.log(e.target.email)
    const email = emailRef.current.value;
    sendPassResetEmailFunc(email)
      .then(() => {
        toast.success("cheak your email. Reset your password.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md text-white backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <h2 className="font-semibold text-2xl text-center py-4">
          Login your account
        </h2>
       
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* password */}
              <div className="relative">
                <label className="label text-white">Password</label>
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input text-gray-200"
                  placeholder="Password"
                />

                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-6 bottom-4 cursor-pointer z-50"
                >
                  {show ? (
                    <FaEye className="w-8"></FaEye>
                  ) : (
                    <IoEyeOff className="w-8"></IoEyeOff>
                  )}
                </span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="link link-hover"
                >
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-4 text-white "
              >
                Login
              </button>
              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="font-semibold text-center  pt-5">
                {" "}
                Dont’t Have An Account ?{" "}
                <Link
                  to={"/auth/register"}
                  className="text-secondary text-[12px]"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        
      </div>
    </div>
  );
};

export default Login;
