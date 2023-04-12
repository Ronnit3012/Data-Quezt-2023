import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DashboardCard6 = () => {
  return (
    <Link to='/analytics/boxplot'> 
    <div className="bg-white shadow-lg rounded-lg border border-slate-200">
        <div className="px-5 py-5">
            Box plot
        </div>
    </div>
    </Link>
  )
}

export default DashboardCard6;