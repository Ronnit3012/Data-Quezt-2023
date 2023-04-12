import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DashboardCard2 = () => {
    // const navigate = useNavigate();
  return (
    <Link to='/analytics/percentage-insured'> 
    <div className="bg-white shadow-lg rounded-lg border border-slate-200">
        <div className="px-5 py-5">
            Percentage Insured
        </div>
    </div>
    </Link>
  )
}

export default DashboardCard2;