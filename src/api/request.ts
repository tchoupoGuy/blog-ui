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
  console.log(`MY_BLOG_ENV **--> ${process.env.REACT_APP_BACKEND_URL}`);
  return axios
    .request<T>({
      method,
      baseURL: `${process.env.REACT_APP_BACKEND_URL}`,
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
