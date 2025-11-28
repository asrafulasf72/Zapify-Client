import React from 'react'
import { Link } from 'react-router';

 const PaymentcanCeled = () => {
  return (
       <div className=" h-[60vh] flex flex-col items-center justify-center">
           <h1 className='text-red-400 font-bold text-4xl'>Oops You Canceled Payment</h1>
           <Link to='/dashboard/my-parcels'><button className='btn btn-primary text-black mt-2.5'>Try Again</button></Link>
      </div>
  )
}
export default PaymentcanCeled;