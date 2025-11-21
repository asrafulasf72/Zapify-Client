import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";

const Login = () => {

    const {register,handleSubmit, formState:{errors}}=useForm();

    const { signInUser}=useAuth()


    const handleLogin=(data)=>{
      console.log('form Data', data)
        signInUser(data.email, data.password)
        .then((res)=>{
            console.log(res.user)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-3xl text-center">Welcome Back</h3>
        <p className="text-center">Please Login Here!</p>
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">

            {/* Email Field */}
          <label className="label">Email</label>
          <input type="email" className="input" {...register('email', {required:true})} placeholder="Email" />
          {
            errors.email?.type==='required' && <p className='text-red-500'>Email Is Required</p>
          }

          {/* Password Field */}
          <label className="label">Password</label>
          <input type="password" className="input" {...register('password')} placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Are you New to Zapify?<Link className="text-blue-400" to='/register'>Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
