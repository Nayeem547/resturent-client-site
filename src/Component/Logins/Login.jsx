import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const  Login = () => {
      
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();


    const handleGooglSignIN = () => {
        signInWithPopup(auth, provider)
        .then()
        .catch()
    }

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);
      
    if(password.length < 6){
        setRegisterError('Password Should Be a leat 6 character or Longer');
        return;
    }
    else if(!/[A-Z]/.test(password)){
        setRegisterError('Your Password should be at least one Upper Case Charecters')
        return;
    }
    else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
        setRegisterError('Your password should not contain special characters');
        return;
    }
    

    setRegisterError('');
    setSuccess();

    signIn(email, password)
    .then(result =>{
        console.log(result.user);
        setSuccess();
        swal("Done", "User Login Succesful", "success");
        navigate(location?.state ? location.state : "/");
    })
    .catch(error => {
        console.error(error);
        swal("Sorry!", "Email Already Used!", "error");
    })
  };
     
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
              <h2 className=" text-2xl font-semibold " >Please Sign In</h2>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className=" flex justify-center text-center items-center " >
                <input
                  name="password"
                  type={ showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />  <span className=" pl-2 " onClick={() => setShowPassword(!showPassword)} >
                      {
                          showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                      }
                </span>
                </div>
               
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control space-y-3 mt-6">
                <button className="btn btn-primary">Login</button>
                <button className='btn btn-primary' onClick={handleGooglSignIN} > Google</button>
              </div>
              
            </form>
           {
              registerError && <p className="w-64 pl-4 pr-4 pb-2 text-[#fc032c] text-sm italic  " >{registerError}</p>
           }
           <p className=' pl-4 pr-4 pb-2' >New to this website Please <Link className=' text-blue-400 ' to="/signUp">SignUp</Link>  </p>
          </div>
        </div>
      </div>
    );
};

export default Login;