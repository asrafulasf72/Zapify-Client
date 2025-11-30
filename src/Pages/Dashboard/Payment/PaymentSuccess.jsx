import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';

 const PaymentSuccess = () => {
     const [paymentInfo, setPaymentinfo]=useState({})
    const [searchParams]=useSearchParams();
    const sessionId=searchParams.get('session_id')
    const axiosSecure=useAxiosSecure();

    useEffect(()=>{
         if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then((res)=>{
               // console.log(res.data)
               setPaymentinfo({
                  transactionId:res.data.transactionId,
                  trackingId:res.data.trackingId
               })
            })
         }
    },[sessionId, axiosSecure])


  return (
     <div className=" h-[60vh] flex flex-col items-center justify-center">
           <h1 className='text-green-400 font-bold text-4xl'>Payment Successfully Done!</h1>
           <p>Transaction Id: {paymentInfo.transactionId}</p>
           <p>Tracking Id: {paymentInfo.trackingId}</p>
      </div>
  )
}
export default PaymentSuccess;