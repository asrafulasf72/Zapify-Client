import React from 'react'
import useRole from '../../../Hooks/useRole';
import AdminDashboardHome from './AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';

 const DashboardHome = () => {
    const {role, roleLoading}=useRole();
      if (roleLoading) {
    return (
      <div className=" h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  if(role==='admin'){
    return <AdminDashboardHome></AdminDashboardHome>
  }else if(role === 'rider'){
    return <RiderDashboardHome></RiderDashboardHome>
  }else{
    return <UserDashboardHome></UserDashboardHome>
  }
}
export default DashboardHome;
