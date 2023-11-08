import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext, auth } from '../Provider/AuthProvider';
import { FaEye, FaEyeSlash} from "react-icons/fa";
import swal from 'sweetalert';


const SignUp = () => {
      
    const provider = new GoogleAuthProvider();
     
    const {createUser} = useContext(AuthContext);
   
    const navigate = useNavigate()
   

    const handleGooglSignIN = () => {
        signInWithPopup(auth, provider)
        .then()
        .catch()
    }


    // const {createUser} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');

    const [success, setSuccess] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const img = form.get('img');
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password);
          
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
    
        createUser( email, password, name, img)
        .then(result =>{
            console.log(result.user);
            const user = {email, name, img};
            
            fetch(`https://resturent-manage-server.vercel.app/user`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(user),
              })
                .then((res) => res.json() )
                .then(data => {
                    console.log(data);
                })
            setSuccess();
            swal("Done", "Registration Succesfully Created", "success");
        })
        .catch(error => {
            console.error(error);
            swal("Sorry!", "Email Already Used!", "error");
        })
      };

    return (
        <div className="hero min-h-screen bg-base-200 flex justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              
            <form onSubmit={handleRegister} className="card-body">
            <h2 className=" text-2xl font-semibold " >Please SignUp</h2>

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="img"
                  type="text"
                  placeholder="img"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
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
                <button className="btn btn-primary">Register</button>
               
              </div>
            </form>
           {
              registerError && <p className="w-64 pl-4 pr-4 pb-2 text-[#fc032c] text-sm italic  " >{registerError}</p>
           }
           <p className=' pl-4 pr-4 pb-2' >Already have an account please<Link className=' text-blue-600 ' to="/signin">Login</Link>  </p>
          </div>
        </div>
        <div className=' border py-16  px-16 bg-white rounded-xl flex flex-col gap-8 text-2xl font-semibold ' >
            Google Sign Up
        <button className='btn btn-primary' onClick={handleGooglSignIN} > Google</button>
        </div>
        
      </div>
    );
};

export default SignUp;