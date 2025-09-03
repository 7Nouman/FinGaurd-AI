import React from 'react';

const ResultCard = ({ result }) => {
  if (!result) return null;

  const badgeByRisk = (risk) => {
    if (risk === 'High') return { text: 'High Risk', cls: 'bg-[#2a0e12] text-red-300 border-red-800/40', icon: '⛔' };
    if (risk === 'Medium') return { text: 'Medium Risk', cls: 'bg-[#231b0e] text-yellow-300 border-yellow-800/40', icon: '⏳' };
    return { text: 'Low Risk', cls: 'bg-[#0f2117] text-green-300 border-green-800/40', icon: '✅' };
  };

  const badge = badgeByRisk(result.risk);

  return (
    <div className="bg-[#11111a] border border-[#1f1f2a] rounded-2xl p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Risk Assessment</h3>
        <span className={`inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full border ${badge.cls}`}>
          <span className="text-xs">{badge.icon}</span>
          {badge.text}
        </span>
      </div>

      <div className="bg-[#0e0e16] border border-[#232338] rounded-xl p-4 text-gray-300">
        {result.reason}
      </div>
    </div>
  );
};

export default ResultCard;
