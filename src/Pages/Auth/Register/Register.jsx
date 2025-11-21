import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";

const Register = () => {
    const {register,handleSubmit, formState:{errors}}=useForm();
    const {registerUser}=useAuth();

    const handleRegistration =(data)=>{
        console.log('After Submite: ', data)
        registerUser(data.email, data.password)
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
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" {...register('email', {required: true})} placeholder="Email" />
          {errors.email?. type==='required' && <p className="text-red-500">Email Is required</p>}


          <label className="label">Password</label>
          <input type="password" className="input" {...register('password', {required: true, minLength: 6, pattern:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/})} placeholder="Password" />
           {
            errors.password?.type==='required' && <p className="text-red-500">Password Is required</p>
           }
           {
            errors.password?.type==='minLength' && <p className="text-red-500">Password Must be 6 character longer</p>
           }
           {
            errors.password?.type==='pattern' && <p className="text-red-500">Password must include: uppercase, lowercase, number, and special character.</p>
           }



          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already have an account? <Link to='/login' className="text-blue-400">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
