import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import LoginWithGoogleBtn from "../SocialLogin/LoginWithGoogleBtn";
import axios from "axios";
import { useAxiosSecure } from "../../../Hooks/useAxiosSecure";

const Register = () => {
    const {register,handleSubmit, formState:{errors}}=useForm();
    const {registerUser,UpdateUserProfile}=useAuth();
    const location=useLocation();
    const navigate=useNavigate();

    const axiosSecure=useAxiosSecure();

    const handleRegistration =(data)=>{
        console.log('After Submite: ', data.photo[0])
        const profileImg=data.photo[0]
        registerUser(data.email, data.password)
        .then((res)=>{
          console.log(res.user)

          // Store the Image Get the Photo URL
           const formData= new FormData();
           formData.append('image', profileImg)
            const imageURL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_host_Key}`
           axios.post(imageURL, formData)
           .then((res)=>{
             const photoURL=res.data.data.url



              const userInfo={
                  email:data.email,
                  displayName:data.name,
                  photoURL:photoURL,

              }
            // Create User In the DataBase 

               axiosSecure.post('/users', userInfo)
               .then((res)=>{
                if(res.data.insertedId){
                  console.log("User Created In Dataase")
                }
               })


            //  Update Profile Here
             const updateProfile={
               displayName:data.name,
               photoURL:photoURL,
             }
             UpdateUserProfile(updateProfile)
             .then()
             .catch(error=>console.log(error))
             navigate(location?.state || '/')
           })
          // Update Profile
        }).catch((error)=>{
          console.log(error)
        })
    }
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Create An Account</h3>
        <p className="text-center">Register With Zapify!</p>
      <form onSubmit={handleSubmit(handleRegistration)} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" {...register('name', {required: true})} placeholder="Your Name" />
          {errors.name?. type==='required' && <p className="text-red-500">Name Is required</p>}

          <label className="label">Photo</label>
          <input type="file" className="file-input" {...register('photo', {required: true})} placeholder="Your Photo" />
          {errors.name?. type==='required' && <p className="text-red-500">Photo Is required</p>}

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
        <p>Already have an account? <Link state={location.state} to='/login' className="text-blue-400">Login</Link></p>
      </form>
      <LoginWithGoogleBtn />
    </div>
  );
};

export default Register;
