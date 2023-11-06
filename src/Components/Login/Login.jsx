import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "/login.svg";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ggLogo from "/google.png"
const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const handleLogin = (e) => {
    const email = e.email;
    const pass = e.password;

    const toastLoad = toast.loading("Logging In....");
    // console.log(email,pass)
    // if(user.email)

    login(email, pass)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state ? location?.state :"/");
        toast.success("Logged In", { id: toastLoad });
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.message}`, { id: toastLoad });
      });
  };
  const handleGoogle = () => {
    const toastLoad = toast.loading("Logging In....");
    googleLogin()
      .then((result) => {
        toast.success("Logged In", { id: toastLoad });
        console.log(result.user)
        navigate(location?.state ? location?.state :"/");

      })
      .catch((error) => {
        toast.error(`${error.message}`, { id: toastLoad });
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password")}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-44 right-12"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <label className="label">
                <h1 className="font-medium">
                  New Here?{" "}
                  <Link to="/register" className="text-sky-500">
                    Register
                  </Link>{" "}
                  Now
                </h1>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-400 text-white">Login</button>
            </div>
          </form>
          <div onClick={handleGoogle} className="flex justify-center items-center mb-4 border rounded-lg text-lg bg-sky-200 font-medium text-gray-600 border-sky-500 p-2  gap-2 w-80 mx-auto"> <img src={ggLogo} className="w-6" alt="" /> 
            <h1>Login With Google</h1></div>
            
        </div>
      </div>
    </div>
  );
};

export default Login;
