import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
    const {register,handleSubmit, formState:{errors}}=useForm();

    const handleRegistration =(data)=>{
        console.log('After Submite: ', data)
    }
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
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
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
