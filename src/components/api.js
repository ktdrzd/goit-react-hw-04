import axios from "axios";

export const fetch = async (query, page) => {
    const accessKey = "8EeWQKyGcZl2ihyI--zxq0z_CbJm5j9tV_lSduiO4jY";
    const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=26`, {
            params: {
                query,
                page,
                per_page: 26,
            }
        }
    );
    return response.data;
}

export default fetch;