import React from 'react'
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const {role, roleLoading}=useRole()

    if (loading || roleLoading) {
        return (
            <div className=" h-[60vh] flex items-center justify-center">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }


    if(role !== 'admin'){
        return <div><h1 className='text-5xl text-red-400'>Access Forbidden</h1></div>
    }
    return children;
}
export default AdminRoute;