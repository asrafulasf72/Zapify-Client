import React from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaUserCheck } from 'react-icons/fa6';
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ApproveRider = () => {

    const axiosSecure = useAxiosSecure();
    const { data: riders = [], refetch } = useQuery({
        queryKey: ['riders', 'pending'],
        queryFn: async () => {
            const res = await axiosSecure.get('/riders')
            return res.data
        }
    })

    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email:rider.riderEmail}

        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then((res) => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Rider Status set to ${status}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleApproval = (rider) => {
                 updateRiderStatus(rider, 'Approved')
    }

    const handleReject=(rider)=>{
             updateRiderStatus(rider, 'Rejected')
    }

    return (
        <div>
            <h1>Approve Rider Page Will be here</h1>
            <p>Rider Panding Approval: {riders.length}</p>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Application Status</th>
                            <th>Work Status</th>
                            <th>District</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            riders.map((rider, index) => <tr key={rider._id}>
                                <th>{index + 1}</th>
                                <td>{rider.riderName}</td>
                                <td>{rider.riderEmail}</td>
                                <td>
                                    <p className={`${rider.status === 'Approved' ? 'text-green-600' : 'text-red-500'}`}>{rider.status}</p>
                                </td>
                                <td>{rider.workStatus}</td>
                                <td>{rider.riderDistrict}</td>
                                <td className='flex gap-3'>
                                    <button onClick={() => handleApproval(rider)} className='btn'><FaUserCheck /></button>
                                    <button onClick={()=>handleReject(rider)} className='btn'><IoPersonRemoveSharp /></button>
                                    <button className='btn'><FaRegTrashAlt /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ApproveRider;