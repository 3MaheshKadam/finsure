"use client";
import React, { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';

const emi = ({ serviceData, onClose }) => {
  const [emiData, setEMIData] = useState({
    amount: '',
    tenure: '',
    rate: ''
  });
  const [emiResult, setEMIResult] = useState(null);

  useEffect(() => {
    if (serviceData) {
      setEMIData({
        amount: serviceData.minAmount.toString(),
        tenure: '12',
        rate: serviceData.minRate.toString()
      });
    }
  }, [serviceData]);

  const calculateEMI = () => {
    const principal = parseFloat(emiData.amount);
    const rate = parseFloat(emiData.rate) / 12 / 100;
    const tenure = parseFloat(emiData.tenure);

    if (principal && rate && tenure) {
      const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      const totalAmount = emi * tenure;
      const totalInterest = totalAmount - principal;

      setEMIResult({
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest)
      });
    } else {
      setEMIResult(null); // Reset if inputs are invalid
    }
  };

  if (!serviceData) {
    return null;
  }

  return (
    <div className="bg-blue-50 border-t border-blue-200 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Calculator className="h-6 w-6 mr-2" style={{ color: serviceData.color }} />
              EMI Calculator
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount (₹)</label>
                  <input
                    type="number"
                    value={emiData.amount}
                    onChange={(e) => setEMIData({...emiData, amount: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter loan amount"
                    min={serviceData.minAmount}
                    max={serviceData.maxAmount}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    value={emiData.rate}
                    onChange={(e) => setEMIData({...emiData, rate: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter interest rate"
                    step="0.1"
                    min="0"
                    max="30"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tenure (Months)</label>
                  <input
                    type="number"
                    value={emiData.tenure}
                    onChange={(e) => setEMIData({...emiData, tenure: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter tenure in months"
                    min="6"
                    max="360"
                  />
                </div>
                
                <button
                  onClick={calculateEMI}
                  className="w-full text-white py-3 rounded-lg font-semibold transition-colors"
                  style={{ backgroundColor: serviceData.color }}
                >
                  Calculate EMI
                </button>
              </div>
            </div>
            
            <div>
              {emiResult && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-4">EMI Calculation Results</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monthly EMI:</span>
                      <span className="font-bold text-lg" style={{ color: serviceData.color }}>
                        ₹{emiResult.emi.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Amount:</span>
                      <span className="font-semibold">₹{emiResult.totalAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Interest:</span>
                      <span className="font-semibold">₹{emiResult.totalInterest.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">Important Note:</p>
                    <p>This is an indicative calculation. Actual EMI may vary based on processing fees, insurance, and other charges.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default emi;