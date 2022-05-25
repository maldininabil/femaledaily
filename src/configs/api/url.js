import appConfig from "../appConfigs";

export const config = appConfig;

const baseUrl = {
    wp: `${config.url.api}hqms/FDN-WP/0.1/wp`,
};

export default baseUrl;