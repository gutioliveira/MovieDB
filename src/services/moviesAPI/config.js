import axios from 'axios';
import urls from '../../config/constants/urls';
import I18n from 'react-native-i18n';

export const API = ({baseURL = urls.baseUrl, timeout = 3000, headers = {}, shouldUseInterceptor = true} = {}) => {

    const _headers = {
        'content-type': 'application/json;charset=utf-8',
        ...headers
    };

    const _axios = axios.create({baseURL, timeout, headers: _headers});


    if (shouldUseInterceptor){
        _axios.interceptors.response.use(
            res => {
                return Promise.resolve(res.data);
            },
            err => {
                return Promise.reject(err);
            }
        );
    }

    return _axios;
};

export const get = ({url, params = {api_key: '5645453ff13b07c49f880f587f466070', language: I18n.currentLocale()}, extraParams, apiParams = undefined} = {}) => {
    let _params = {
        ...params,
        ...extraParams
    };
    return API(apiParams).get(url, {params: _params});
};
