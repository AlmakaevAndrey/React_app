import axios, { AxiosInstance, RawAxiosRequestHeaders, AxiosRequestConfig } from "axios";
import ProjectHelper from 'Utils/ProjectHelper';
import { API_TOKEN } from 'Constants/Token';
import { BASE_URL } from 'Constants/Api';

const getHeaders = (): RawAxiosRequestHeaders => {
    if (!ProjectHelper.useHardCodeToken) {
        return { "Content-Type": 'application/json; charset=utf-8'};
    }
  
    return {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": 'application/json; charset=utf-8'
    };
};

const setRequestHeaders = (request: AxiosRequestConfig): void => {
    request.headers = getHeaders();
};

const getAxios = (): AxiosInstance => {
    const axiosInstance = axios.create({ baseURL: BASE_URL });
    axiosInstance.interceptors.request.use(request => {
        setRequestHeaders(request);
        return request;
    });
  
    return axiosInstance;
};

export default getAxios();
