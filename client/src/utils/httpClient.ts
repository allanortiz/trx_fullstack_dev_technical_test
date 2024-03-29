import axios, { AxiosRequestConfig } from "axios";

export function getApiUrl() {
  const url = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || "";
  return `${url}`;
}

const getInstance = (config?: AxiosRequestConfig) => {
  // const transformRequest = [].concat(function (data) {
  //   if (!data) {
  //     return;
  //   }

  //   return data;
  // }, axios.defaults.transformRequest);

  // const transformResponse = [].concat(axios.defaults.transformResponse, function (data) {
  //   if (!data) {
  //     return;
  //   }

  //   return data;
  // });

  return axios.create({
    baseURL: "/",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    // transformRequest,
    // transformResponse,
    ...config,
  });
};

const httpClient = getInstance({
  baseURL: getApiUrl(),
  headers: {},
});

export default httpClient;
