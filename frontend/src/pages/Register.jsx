import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginimage } from "../assets";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const [isMatching, setIsMatching] = useState(false);

  // Password Confirmation Logic
  const confirmPass = () => {
    if (user.password === user.confirmPass && user.password.length > 3) {
      setIsMatching(true);
    } else {
      setIsMatching(false);
    }
  };

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
    confirmPass();
  }, [auth._id, navigate, user.password, user.confirmPass]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMatching) {
      dispatch(registerUser(user));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8 md:flex">
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={loginimage} alt="Sign Up" className="w-[80%]" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center md:ml-10">
          <h1 className="text-[30px] font-bold text-darkgreen mb-8">
            Create an Account
          </h1>

          {auth.registerStatus === "success" && (
            <div className="font-bold mb-5">
              {toast.success("Successfully registered, Welcome!", {
                position: "top-center",
              })}
            </div>
          )}

          <form className="w-full" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Full Name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <input
                type="email"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Email Address"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <input
                type="password"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Confirm Password"
                onChange={(e) =>
                  setUser({ ...user, confirmPass: e.target.value })
                }
              />
            </div>

            {/* Password Match Check */}
            {isMatching ? (
              <p className="text-green-600 font-bold mb-4">
                Passwords match, proceed.
              </p>
            ) : (
              user.confirmPass && (
                <p className="text-red-600 font-bold mb-4">
                  Passwords do not match.
                </p>
              )
            )}

            {/* Remember Me */}
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                className="h-4 w-4 text-darkgreen border-gray-300 rounded mr-2"
              />
              <label className="text-gray-800">Remember me</label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`inline-block w-full px-7 py-3 bg-darkgreen text-white font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out ${
                isMatching
                  ? "cursor-pointer"
                  : "cursor-not-allowed pointer-events-none"
              }`}
            >
              {auth.registerStatus === "pending" ? "Submitting..." : "Sign Up"}
            </button>

            {/* Error Message */}
            {auth.registerStatus === "rejected" && (
              <p className="text-red-600 mt-4">
                {auth.registerError || "An error occurred. Please try again."}
              </p>
            )}

            {/* Already have an account */}
            <p className="mt-6 text-center">
              Already have an account?{" "}
              <Link to="/Login" className="text-blue-600 font-bold">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Register;
