import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';
import Sidebar from './partials/Sidebar';
import Header from './partials/Header';
import "./App.css";

// Import pages
import Dashboard from './pages/Dashboard';
import AverageRatio from './pages/AverageRatio';
import PercentageInsured from './pages/PercentageInsured';
import PaymentAndDischarge from './pages/PaymentAndDischarge'
import MedicarePayments from './pages/MedicarePayments';
import ClassificationOfDRG from './pages/ClassificationOfDRG';
import BoxPLot from './pages/BoxPlot';
import Prediction from './pages/Prediction';

function App() {

  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="h-full">

          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/analytics/average-ratio" element={<AverageRatio />} />
            <Route path="/analytics/percentage-insured" element={<PercentageInsured />} />
            <Route path="/analytics/payment-and-discharge" element={<PaymentAndDischarge />} />
            <Route path="/analytics/medicare-payment" element={<MedicarePayments />} />
            <Route path="/analytics/classification-of-drg" element={<ClassificationOfDRG />} />
            <Route path="/analytics/boxplot" element={<BoxPLot />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
