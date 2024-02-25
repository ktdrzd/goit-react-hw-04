import axios from "axios";

const accessKey = "WXscGX51EC0JKCUzK7D3LVs7YYNeKVokrtLiFwXU6LA";

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
