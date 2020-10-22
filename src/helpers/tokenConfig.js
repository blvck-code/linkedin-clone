// Helper function
export const tokenConfig = (getState) => {
  // Get token
  const token = localStorage.token;
  // const token = getState().authState.data.token;

  // Add
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Add token to config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
