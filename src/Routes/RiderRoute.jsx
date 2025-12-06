import React from 'react'
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/useRole';

 const RiderRoute = ({children}) => {
   const { user, loading } = useAuth();
    const {role, roleLoading}=useRole()

    if (loading ||!user|| roleLoading) {
        return (
            <div className=" h-[60vh] flex items-center justify-center">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }


    if(role !== 'rider'){
        return <div><h1 className='text-5xl text-red-400'>Access Forbidden</h1></div>
    }
    return children;
}
export default RiderRoute;