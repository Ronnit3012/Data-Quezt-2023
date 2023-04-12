import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const DashboardCard1 = () => {
  return (
    <Link to='/analytics/average-ratio'> 
    <div className="bg-white shadow-lg rounded-lg border border-slate-200">
        <div className="px-5 py-5">
            Average Ratio
        </div>
    </div>
    </Link>
  )
}

export default DashboardCard1;