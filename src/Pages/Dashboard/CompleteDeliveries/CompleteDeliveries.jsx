import React from 'react'
import useAuth from '../../../Hooks/useAuth';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompleteDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user.email, 'rider-assign'],
        queryFn: async () => {
            const res = await axiosSecure.get(`parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_Delivered`)
            return res.data
        }
    })

   const calculateRiderPayOut=(parcel)=>{
    if(parcel.senderDistrict === parcel.recevierDistrict){
        return parcel.cost*0.8
    }else{
        return parcel.cost*0.6
    }
   }

    return (
        <div>
            <h1>Completed Deliveries:{parcels.length}</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Created At</th>
                            <th>PickUp District</th>
                            <th>PayOut</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>{parcel.createdAt}</td>
                                <td>{parcel.senderDistrict}</td>
                                <td>{calculateRiderPayOut(parcel)}</td>
                                <td>
                                    <button className='btn btn-primary text-black'>Find Rider</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CompleteDeliveries;
