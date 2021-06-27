import axios from 'axios';

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