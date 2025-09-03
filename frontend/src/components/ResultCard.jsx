import React from 'react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getRiskIcon = (risk) => {
    switch (risk) {
      case 'High':
        return '🔴';
      case 'Medium':
        return '🟡';
      case 'Low':
        return '🟢';
      default:
        return '⚪';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <div className="space-y-4">
        {/* Risk Level */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{getRiskIcon(result.risk)}</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Risk Level</h3>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(result.risk)}`}>
              {result.risk} Risk
            </span>
          </div>
        </div>

        {/* Fraud Type */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🏷</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Fraud Type</h3>
            <span className="text-gray-700">{result.fraud_type}</span>
          </div>
        </div>

        {/* Reason */}
        <div className="flex items-start space-x-3">
          <span className="text-2xl">📌</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Reason</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{result.reason}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
