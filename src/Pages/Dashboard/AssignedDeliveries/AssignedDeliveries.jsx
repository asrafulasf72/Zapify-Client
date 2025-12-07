import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useAuth from '../../../Hooks/useAuth';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AssignedDeliveries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['parcels', user.email, 'rider-assign'],
        queryFn: async () => {
            const res = await axiosSecure.get(`parcels/rider?riderEmail=${user.email}&deliveryStatus=rider-assign`)
            return res.data
        }
    })

    const handleDeliveredStatus = (parcel,status) => {
        const statusInfo = {
             deliveryStatus: status, 
             riderId:parcel.riderId,
             trackingId:parcel.trackingId
            
            }
        let message=`Parcel Status Update With ${status.split('_').join(' ')}`
        axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
            .then((res) => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <h1>Parcel Pending Pickup: {parcels.length}</h1>
            {
                console.log(parcels)
            }

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Parcel Name</th>
                            <th>Confirm</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => <tr key={parcel._id}>
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>
                                    {
                                        parcel.deliveryStatus === 'rider-assign' ? <>
                                            <button onClick={() => handleDeliveredStatus(parcel,'rider_arriving')} className='btn btn-primary text-black'>Accept</button>
                                            <button className='btn btn-warning text-black ms-2'>Reject</button>
                                        </> : <button className='btn btn-primary text-black'>Accepted</button>
                                    }
                                </td>
                                 <td>
                                    <button onClick={()=>handleDeliveredStatus(parcel, 'parcel_PickedUp')} className='btn btn-primary text-black'>Marked As Picked Up</button>
                                    <button onClick={()=>handleDeliveredStatus(parcel, 'parcel_Delivered')} className='btn btn-primary text-black mx-2'>Marked As Delivered</button>
                                 </td>
                            </tr>

                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AssignedDeliveries;