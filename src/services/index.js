import { handleAsync } from "utils";
import { API } from "configs";

export const getWP = async (payload = {}) => {
    const [res] = await handleAsync(API.getWP(payload));
    if (res) {
        const data = res.axiosResponse.data;
        return data;
    }
};