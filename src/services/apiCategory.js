import axios from "axios";

const getCategory = async () => {
  try {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/category/`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getCategory };
