import axios from "axios";

export const fetch = async (query, page) => {
    const accesKey = "AzNe0YqFSLGXPNbdb-xQ96ak6KjMMJUnAL2Ax2-ZP_w";
    const response = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${accesKey}`. {
            params: {
                query,
                page,
                per_page: 26,
            }
        }
    );
    return response.data;
}