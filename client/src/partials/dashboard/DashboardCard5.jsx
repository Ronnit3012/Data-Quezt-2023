import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const DashboardCard5 = () => {
  return (
    <Link to='/analytics/classification-of-drg'> 
    <div className="bg-white shadow-lg rounded-lg border border-slate-200">
        <div className="px-5 py-5">
            Classification of DRG
        </div>
    </div>
    </Link>
  )
}

export default DashboardCard5