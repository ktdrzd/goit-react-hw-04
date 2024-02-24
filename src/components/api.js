import axios from "axios";

const accessKey = "8EeWQKyGcZl2ihyI--zxq0z_CbJm5j9tV_lSduiO4jY";

export const fetch = async (query, page = 1 ) => {
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accessKey}`, {
        params: {
            query,
            page,
            per_page: 26,
        },
    });
    return response.data;
}

// export default fetch;