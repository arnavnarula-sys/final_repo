// API Configuration for email submissions
// Backend server URL - update this if your backend runs on a different port/host

export const API_CONFIG = {
  // Backend API base URL
  baseUrl: "http://localhost:3001/api",

  // API endpoints
  endpoints: {
    emailSubmissions: "/email-submissions",
    health: "/health"
  }
};

// Helper function to get full API URL
export function getApiUrl(endpoint) {
  return `${API_CONFIG.baseUrl}${API_CONFIG.endpoints[endpoint] || endpoint}`;
}


