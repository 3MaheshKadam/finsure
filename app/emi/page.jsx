"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Info } from "lucide-react";

export default function EmiPage() {
  // Static service data (replace later with API if needed)
  const serviceData = {
    minAmount: 50000,
    maxAmount: 5000000,
    minRate: 9,
    color: "#2563eb",
  };

  const [emiData, setEMIData] = useState({
    amount: "",
    tenure: "",
    rate: "",
  });

  const [emiResult, setEMIResult] = useState(null);

  useEffect(() => {
    setEMIData({
      amount: serviceData.minAmount.toString(),
      tenure: "12",
      rate: serviceData.minRate.toString(),
    });
  }, []);

  const calculateEMI = () => {
    const principal = parseFloat(emiData.amount);
    const rate = parseFloat(emiData.rate) / 12 / 100;
    const tenure = parseFloat(emiData.tenure);

    if (!principal || !rate || !tenure) {
      setEMIResult(null);
      return;
    }

    const emi =
      (principal * rate * Math.pow(1 + rate, tenure)) /
      (Math.pow(1 + rate, tenure) - 1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    setEMIResult({
      emi: Math.round(emi),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
    });
  };

  return (
    <main className="min-h-screen bg-blue-50 border-t border-blue-200 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {/* Header */}
          <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-6">
            <Calculator
              className="h-6 w-6 mr-2"
              style={{ color: serviceData.color }}
            />
            EMI Calculator
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Inputs */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  value={emiData.amount}
                  min={serviceData.minAmount}
                  max={serviceData.maxAmount}
                  onChange={(e) =>
                    setEMIData({ ...emiData, amount: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={emiData.rate}
                  onChange={(e) =>
                    setEMIData({ ...emiData, rate: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tenure (Months)
                </label>
                <input
                  type="number"
                  min="6"
                  max="360"
                  value={emiData.tenure}
                  onChange={(e) =>
                    setEMIData({ ...emiData, tenure: e.target.value })
                  }
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                onClick={calculateEMI}
                className="w-full text-white py-3 rounded-lg font-semibold"
                style={{ backgroundColor: serviceData.color }}
              >
                Calculate EMI
              </button>
            </div>

            {/* Right: Result */}
            <div>
              {emiResult && (
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">
                    EMI Calculation Results
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monthly EMI</span>
                      <span
                        className="font-bold text-lg"
                        style={{ color: serviceData.color }}
                      >
                        ₹{emiResult.emi.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Total Amount</span>
                      <span>
                        ₹{emiResult.totalAmount.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span>Total Interest</span>
                      <span>
                        ₹{emiResult.totalInterest.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-2" />
                  <p className="text-sm text-blue-800">
                    This is an indicative EMI calculation. Actual EMI may vary
                    based on processing fees and other charges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
