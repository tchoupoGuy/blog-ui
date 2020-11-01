import { myBlogRequest } from "./request";

import { TagDTO, UserCredentialDTO } from "./models";

export const TagAPI = {
  /**
   * Get all tags
   */
  getAll: (token: string) =>
    myBlogRequest<TagDTO[]>({
      method: "GET",
      path: ["my-blog"],
      token: token,
    }),

  createTag: (token: string, newTag: TagDTO) =>
    myBlogRequest<any>({
      method: "POST",
      path: ["my-blog/tags/"],
      token: token,
      data: newTag,
    }),
};

export const AuthAPI = {
  signIn: (user: UserCredentialDTO) =>
    myBlogRequest<any>({
      method: "POST",
      path: ["login"],
      data: user,
    }),

  completeNewPassword: (password: string) =>
    myBlogRequest<any>({
      method: "POST",
      path: ["password"],
      data: password,
    }),
};
