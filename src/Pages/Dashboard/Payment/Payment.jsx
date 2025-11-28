import React from 'react'
import { useParams } from 'react-router';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

 const Payment = () => {
    const {paymentId}=useParams();
    const axiosSecure=useAxiosSecure();
    const {isLoading,data: parcel}=useQuery({
        queryKey:['parcels', paymentId],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/parcels/${paymentId}`)
            return res.data
        }
    })

    const handlePayment= async()=>{
        const paymentInfo={
            cost:parcel.cost,
            parcelId:parcel._id,
            senderEmail:parcel.senderEmail,
            parcelName:parcel.parcelName
        }

        const res= await axiosSecure.post('/create-checkout-session',paymentInfo)
        window.open(res.data.url, "_blank");
    }

    if(isLoading){
        return (
      <div className=" h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
    }
  return (
    <div className='px-5 py-5'>
        <p>Please Pay ${parcel.cost} For your Parcel: {parcel.parcelName}</p>
        <button onClick={handlePayment} className="btn btn-primary text-black font-bold mt-2">Pay Now</button>
    </div>
  )
}
export default Payment;