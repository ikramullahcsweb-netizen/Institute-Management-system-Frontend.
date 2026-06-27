const BASE_URL = "https://dummyjson.com";

export const signupUser = async (userData) => {
  const response = await fetch(`${BASE_URL}/users/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName: userData.first_name,
      lastName: userData.last_name,
      email: userData.email_address,
      password: userData.password,
    }),
  });
  if (!response.ok) throw new Error("Signup failed");
  return await response.json();
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`http://localhost:3000/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email_address: credentials.email_address, 
        password: credentials.password,
      }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Login failed");
    
    return data; 
  } catch (error) {
    throw error;
  }
};