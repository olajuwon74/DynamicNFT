import { extend } from 'umi-request';
import { notification } from 'antd';
import { getToken } from '@/utils/authority'

//export const API_URL = "https://app.us.aiphoto.video";
export const API_URL = "https://app.apn1.aiphoto.video";

const codeMessage = {
  200: '200',
  201: '201',
  202: '202',
  204: '204',
  400: '400',
  401: '401',
  403: '403',
  404: '404',
  406: '406',
  410: '410',
  422: '422',
  500: '500',
  502: '502',
  503: '503',
  504: '504',
};

const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    if(status == 302){
      window.location.href = '/user/login'
      return;
    }

    if(status == 401){
      window.location.href = '/user/login'
      return;
    }

    if(status == 500){
      //window.location.href = '/user/login'
      return;
    }

    notification.error({
      message: `error ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'error',
      message: 'error',
    });
  }
  return response;
};

const request = extend({
  errorHandler,
  headers: {
      "version": "1.1"
  },
  credentials: 'include',
});

const fetch = (url, options, withAuth) => {
  return new Promise((resolve, reject) => {

    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDg1MzY4ODYsInVzZXJuYW1lIjoie1wic2VydmljZU5hbWVcIjpcInBtc1NoaXJvVXNlclNlcnZpY2VcIixcInVzZXJuYW1lXCI6XCJoYWNrYXRob25cIn0ifQ.LolYAJ4IuxDsPymvlG5xPsT-jPAfSZZaQQjTsU2TCiQ';//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc4NjkyOTIsInVzZXJuYW1lIjoie1wic2VydmljZU5hbWVcIjpcInBtc1NoaXJvVXNlclNlcnZpY2VcIixcInVzZXJuYW1lXCI6XCJhZG1pblwifSJ9.CqOJLtaPpaQfB_HQGa4yLSpk04Ot8nGH7zI5MtoPuik';//getToken();
    if ((withAuth == null || withAuth ) && token && token[0]) {
      options = { ...options, headers: { Authorization: token } }
    }

    request( API_URL+url, options).then(res => {
      const status = res.code;
      switch (status) {
        case 302:{
          window.location.href = '/user/login'
          return;
        }
        case 401:{
          window.location.href = '/user/login'
          return;
        }
        case 403:{
          window.location.href = '/user/login'
          return;
        }
        case 500:{
          //window.location.href = '/enhancer/index'
          return;
        }
        default: {
          resolve(res)
        }
      }
    }).catch(e => reject(e))
  })
}



export default fetch;
