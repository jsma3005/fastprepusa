import axios from 'axios';

// export const baseURL = 'http://74.208.251.128/';
export const baseURL = 'http://fastprepusa.com/';

export const API = {
    get: ({url, params, ...rest}) =>
        axios({
            method: 'GET',
            url,
            params,
            baseURL,
            ...rest
        })
};