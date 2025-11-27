import React from 'react'
import useAuth from '../../../Hooks/useAuth';
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';



const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: parcels = [] } = useQuery({
        queryKey: ['myPaecels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`)
            return res.data
        }

    })
    return (
        <div className='my-5 px-5'>
            <p>My Parcels: {parcels.length}</p>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcels, index) => 
                                <tr key={index._id}>
                                    <th>{index+1}</th>
                                    <td>{parcels.parcelName}</td>
                                    <td>{parcels.cost}</td>
                                    <td>Blue</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyParcels;
