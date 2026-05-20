const BASE_URL = "https://chedmed.online/api/v1";

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Invalid credentials");
    }

    return await response.json();
  } catch (error) {
    console.error("Service Error:", error);
    throw error;
  }
};