import axios, { Method } from "axios";

import { CONFIG } from "../env";

type myBlogRequestParams = {
  path: string[];
  method: Method;
  data?: any;
  params?: any;
  token?: string;
};

export async function myBlogRequest<T = any>({
  method,
  path,
  data,
  params,
  token,
}: myBlogRequestParams) {
  return axios
    .request<T>({
      method,
      baseURL: CONFIG.API_BASE,
      url: path.join("/"),
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json",
      },

      data: JSON.stringify(data),
      params,
    })
    .then((res) => res.data);
}
