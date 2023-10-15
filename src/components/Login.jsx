import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Login = () => {
  let { signInUser } = useContext(authContext);

  let loginHandler = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <p>
                New in here? Please{" "}
                <Link className="text-blue-400" to="/register">
                  Register
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
