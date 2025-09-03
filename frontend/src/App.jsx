import React, { useState } from 'react';
import ResultCard from './components/ResultCard';
import { getApiUrl } from './config';

function App() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScan = async () => {
    if (!message.trim()) {
      setError('Please enter a message to scan.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${getApiUrl()}/scan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to scan message. Please check if the backend is running.');
      console.error('Scan error:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadDemoText = () => {
    setMessage('Guaranteed 200% return in 7 days! Join our Telegram group now for IPO allotments.');
  };

  return (
    <div className="min-h-screen bg-[#0b0b13] text-white py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="text-3xl">🛡️</div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              <span className="text-white">Fin</span><span className="text-purple-400">Guard</span> <span className="text-white">AI</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg">Advanced fraud detection for financial messages</p>
        </div>

        {/* Message Scanner Card */}
        <div className="bg-[#11111a] border border-[#1f1f2a] rounded-2xl p-6 sm:p-8 mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
              <span>Message Scanner</span>
            </h2>
            <button onClick={loadDemoText} className="text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4">Load demo text</button>
          </div>

          <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Enter financial message to analyze:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Guaranteed 200% return in 7 days! Join our Telegram group now for IPO allotments."
            className="w-full h-36 sm:h-32 px-4 py-3 rounded-xl bg-[#0e0e16] border border-[#232338] text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
            disabled={loading}
          />

          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleScan}
              disabled={loading || !message.trim()}
              className={`w-full sm:w-auto justify-center inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                loading || !message.trim()
                  ? 'bg-[#3a3a55] cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-500 to-fuchsia-600 hover:opacity-95'
              }`}
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-transparent border-t-white"></div>
                  <span>Scanning...</span>
                </div>
              ) : (
                <>
                  <span>⚡</span>
                  <span>Scan Message</span>
                </>
              )}
            </button>

            <button
              onClick={loadDemoText}
              className="w-full sm:w-auto justify-center inline-flex items-center px-6 py-3 rounded-xl border border-[#2a2a3d] text-gray-200 hover:bg-[#1a1a24]"
            >
              Demo
            </button>
          </div>

          {error && (
            <div className="mt-5 bg-[#221a1a] border border-red-800/40 text-red-300 rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-4">
            <ResultCard result={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
