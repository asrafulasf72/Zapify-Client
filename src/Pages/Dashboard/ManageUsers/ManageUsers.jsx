import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useAxiosSecure } from '../../../Hooks/useAxiosSecure';
import { FaUserShield } from 'react-icons/fa6';
import { FiShieldOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const [searchText, setSearchText]=useState('')
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users', searchText],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?SearchText=${searchText}`)
            return res.data
        }
    })


    const handleMakeAdmin = (user) => {
        const roleInfo = { role: 'admin' };

        Swal.fire({
            title: "Agree With The Cost!",
            text: `Do you want to add ${user.displayName} to the admin role?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Make Admin"
        }).then(async (result) => {

            // Run axios ONLY when user confirms
            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/users/${user._id}/role`, roleInfo);

                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} Marked As Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    };

    const handleMakeUser = (user) => {
        const roleInfo = { role: 'user' };

        Swal.fire({
            title: "Are you sure?",
            text: `Remove Admin role from ${user.displayName}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make User"
        }).then(async (result) => {

            if (result.isConfirmed) {
                const res = await axiosSecure.patch(`/users/${user._id}/role`, roleInfo);

                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.displayName} role set to User`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    };

    return (
        <div>
            <h1 className='text-center text-5xl'>Manage Your User From Here</h1>
            <p>User: {users.length}</p>

            <div className="my-10 px-2">
                <form>
                    <label className="input">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e)=> setSearchText(e.target.value)} type="search" name="location" required placeholder="Search" />
                    </label>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Admin Action</th>
                            <th>Others Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.displayName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>
                                    {user.role}
                                </td>
                                <td className='flex gap-2'>

                                    {
                                        user.role === 'admin' ? <button onClick={() => handleMakeUser(user)} className='btn bg-red-400'><FiShieldOff /></button> : <button onClick={() => handleMakeAdmin(user)} className='btn bg-green-400'><FaUserShield /></button>
                                    }


                                </td>
                                <td>
                                    Actions
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ManageUsers;