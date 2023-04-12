import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const DashboardCard4 = () => {
  return (
    <Link to='/analytics/medicare-payment'> 
    <div className="bg-white shadow-lg rounded-lg border border-slate-200">
        <div className="px-5 py-5">
            Medicare Payments
        </div>
    </div>
    </Link>
  )
}

export default DashboardCard4;