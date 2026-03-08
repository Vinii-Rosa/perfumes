import axios from "axios";

const API_URL_PRODUCT = process.env.REACT_APP_API_URL + "/product";
console.log("API URL:", API_URL_PRODUCT);

export async function getPerfumes() {
    try {
        const response = await axios.get(`${API_URL_PRODUCT}/getAll`);
        return response.data;
    } catch (error) {
        console.error("Error getting perfumes:", error);
        throw error;
    }
}