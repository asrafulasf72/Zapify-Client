import axios from 'axios'
import React, { useEffect } from 'react'
import useAuth from './useAuth'
import { useNavigate } from 'react-router'

const axiosSecure= axios.create({
    baseURL:'http://localhost:3000'
})

export const useAxiosSecure = () => {
       const {user,userLogout}=useAuth()
       const navigate=useNavigate()
  useEffect(()=>{
     const reqInterceptors = axiosSecure.interceptors.request.use((config)=>{
       config.headers.Authorization=`Bearer ${user?.accessToken}`
       return config
     })


    //  Interceptors response

    const responseInterceptor = axiosSecure.interceptors.response.use((response)=>{
          
      return response
    },
    (error)=>{
      console.log(error)

      const statusCode=error.status
      if(statusCode === 401 || statusCode === 403){
           userLogout()
           .then(()=>{
                navigate('/login') 
           })
      }


      return Promise.reject(error)
    })

      return ()=>{
          axiosSecure.interceptors.request.eject(reqInterceptors)
          axiosSecure.interceptors.response.eject(responseInterceptor)
      }

  },[user, userLogout, navigate])
  return axiosSecure;
}
