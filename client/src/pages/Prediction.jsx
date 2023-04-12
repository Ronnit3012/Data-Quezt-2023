import React, { useState } from 'react';
import axios from 'axios';

const Prediction = () => {
  const [discharges, setDischarges] = useState(null);
  const [covered, setCovered] = useState(null);
  const [total, setTotal] = useState(null);
  const [medicare, setMedicare] = useState(null);
  const[result, setResult] = useState(null);

  const handleSubmit = async () => {
    const obj = {
        discharges,
        covered,
        total,
        medicare,
    }
    console.log(obj);
    try {
        const response = await axios.post('http://localhost:8000/process_form/', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
        setResult(response.data.result);
    } catch (error) {
        setResult('Something went wrong!');
    }
  }

  return (
    <>
        <p className='ml-10 my-3 font-bold text-2xl'>Prediction</p>
        {result && <p className='ml-10 my-3 font-bold'>{result} % Chances of people buying Insurance in this area</p>}
        <div className='flex justify-center items-center'>
            <div className="bg-white shadow-lg rounded-lg border border-slate-200 p-10">
                <form className="w-[400px] max-w-xl">
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label htmlFor="discharges" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">No. of Discharges</label>
                            <input type="number" id="discharges" name="discharges" onChange={(e) => setDischarges(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" step={0.01} placeholder="" required></input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label htmlFor="covered" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Average Covered Charge</label>
                            <input type="number" id="covered" name="covered" onChange={(e) => setCovered(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" step={0.01} placeholder="" required></input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label htmlFor="total" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Average Total Payment</label>
                            <input type="number" id="total" name="total" onChange={(e) => setTotal(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="" step={0.01} required></input>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label htmlFor="medicare" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Average Medicare Payment</label>
                            <input type="number" id="medicare" name="medicare" onChange={(e) => setMedicare(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" placeholder="" step={0.01} required></input>
                        </div>
                    </div>
                    <div className="flex justify-center item-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit} type="button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Prediction;