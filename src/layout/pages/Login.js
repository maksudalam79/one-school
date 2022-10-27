import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contex/AuthProvider";

const Login = () => {
  const { providerLogin, signIn, providerGithub } = useContext(AuthContext);
  const [error, setError] = useState("");
 
  const googleProvider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handlergoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handlergithubSignin = () => {
    providerGithub(githubprovider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handlarLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from,{ replace: true });
        

      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  
  // const changeCursor = () => {
  //   setCursor(prevState => {
  //     if(prevState === displayName){
  //       return 'pointer';
  //     }
  //     return 'crosshair';
  //   });
  // }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlarLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div>
                <p>{error}</p>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-2">Login</button>
              <button
                onClick={handlergoogleSignin}
                className="btn btn-info mb-2"
              >
                <FaGoogle></FaGoogle> Log in with google
              </button>
              <button
                onClick={handlergithubSignin}
                className="btn btn-success mb-2"
              >
                <FaGithub></FaGithub> Log in with Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
