import React from 'react';
import merchantBg from '../../../assets/be-a-merchant-bg.png'
import locationMerchant from '../../../assets/location-merchant.png'

const Merchant = () => {
    return (
        <div className='bg-secondary p-10 my-10 rounded-2xl relative'>
            <img className='absolute top-0.5 right-1' src={merchantBg} alt="" />
             <div className='flex gap-3 flex-col md:flex-row items-center'>
                <div className='flex-1'>
                    <h1 className='text-base-100 text-[1.6rem] font-semibold'>Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className='text-base-200 text-[1rem] font-normal'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className='flex flex-col md:flex-row gap-4 mt-5'>
                        <button className='bg-primary px-5 py-2 rounded-full text-[1.2rem] font-bold'>Become a Merchant</button>
                        <button className='border-2 border-primary text-primary rounded-full text-[1.2rem] font-bold px-5 py-2'>Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div className='flex-1'>
                     <img src={locationMerchant} alt="" />
                </div>
             </div>
        </div>
    );
};

export default Merchant;