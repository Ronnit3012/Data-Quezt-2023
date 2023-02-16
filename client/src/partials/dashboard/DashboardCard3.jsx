import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const DashboardCard3 = () => {
  return (
    <Link to='/analytics/payment-and-discharge'> 
    <div className="bg-white shadow-lg rounded-lg border border-slate-200">
        <div className="px-5 py-5">
            Payment and Discharge
        </div>
    </div>
    </Link>
  )
}

export default DashboardCard3;