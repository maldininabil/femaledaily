import baseUrl from "configs/api/url";
import ApiRequest from "configs/api/config";

const API = {};

// Driver
API.getWP = ApiRequest.get(baseUrl.wp);

export default API;