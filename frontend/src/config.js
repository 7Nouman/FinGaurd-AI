// API Configuration
export const API_CONFIG = {
  // Development
  development: 'http://localhost:8000',
  // Production - Update this with your deployed backend URL
  production: 'https://your-backend-url.railway.app',
  // Current environment
  current: import.meta.env.MODE === 'production' ? 'production' : 'development'
};

export const getApiUrl = () => {
  return API_CONFIG[API_CONFIG.current];
};
