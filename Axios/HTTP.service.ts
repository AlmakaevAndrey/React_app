import { AxiosInstance } from 'axios';
import axiosInstance from '../API/Config/Axios.config';

abstract class HttpService {
    private readonly _api: AxiosInstance = axiosInstance;

    protected get API(): AxiosInstance {
        return this._api;
    }
}

export default HttpService;
