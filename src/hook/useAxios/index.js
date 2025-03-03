import { notification } from "antd";
import axios from "axios";

export const useAxios = () => {
  const request = ({ url, method = "GET", header, params, body }) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}/${url}`,
      method,
      header: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        ...header,
      },

      params: {
        ...params,
      },
      data: { ...body },
    })
      .then((data) => data.data)
      .catch((error) => notification.error({ message: error.message }));
  };
  return request;
};
export const useAxiosUser = () => {
  const request = ({ url, method = "GET", header, params, body }) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL_USER}/${url}`,
      method,
      header: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
        ...header,
      },

      params: {
        ...params,
      },
      data: { ...body },
    })
      .then((data) => data.data)
      .catch((error) => notification.error({ message: error.message }));
  };
  return request;
};
