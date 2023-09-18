import axios from "axios";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3500/api/auth/signup",
      userData
    );
    return response;
  } catch (error) {
    throw error;
  }
};
