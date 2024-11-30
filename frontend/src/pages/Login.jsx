import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { loginimage } from "../assets";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const verify = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
    console.log(auth.id);
  }, [auth._id, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <section className="bg-white w-full max-w-4xl rounded-lg shadow-lg p-8 md:flex">
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={loginimage} alt="Login" className="w-[80%]" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center md:ml-10">
          <h1 className="text-[30px] font-bold text-darkgreen mb-8">Log In</h1>
          <form className="w-full">
            {/* Email */}
            <div className="mb-6">
              <input
                type="text"
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white border border-gray-300 rounded transition focus:outline-none focus:border-darkgreen"
                placeholder="Email address"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>

            {/* Password */}
            <div className="mb-6 flex items-center border border-gray-300 rounded">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white focus:outline-none"
                placeholder="Password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              />
              <span
                className="px-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>

            {/* Error Message */}
            {auth.loginStatus === "rejected" && (
              <p className="text-rose-900 mb-4 text-center">
                Invalid credentials.
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-darkgreen text-white py-3 rounded font-medium transition hover:shadow-lg focus:outline-none"
              onClick={verify}
            >
              {auth.loginStatus === "pending" ? "Loading..." : "Sign In"}
            </button>

            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded-sm mr-2 cursor-pointer"
                />
                <label className="text-black">Remember me</label>
              </div>
              <Link to="/reqrespass" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <div className="flex justify-center mt-4">
              <p className="text-black">New to Find Care?</p>
              <Link to="/signup" className="ml-2 text-cyan-700 font-bold">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
