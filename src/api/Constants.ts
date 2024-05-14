import axios from "axios";
import { getToken } from "../auth";

export const API_URL = "http://localhost:8080";

export const MyAxios = axios.create({
    baseURL:API_URL,
});

export const PrivateAxios = axios.create({
    baseURL:API_URL,
});

PrivateAxios.interceptors.request.use(config =>{
    const token = getToken();
    if(token){
        config.headers.common.Authorization = `Bearer ${token}`
        return config
    }
    return config
},error => Promise.reject(error));