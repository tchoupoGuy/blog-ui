import { myBlogRequest } from "./request";

import { TagDTO, UserDTO } from "./models";

export const TagAPI = {
  /**
   * Get all tags
   */
  getAll: (token: string) =>
    myBlogRequest<TagDTO[]>({
      method: "GET",
      path: ["tag-list"],
      token: token,
    }),

  createTag: (token: string, newTag: TagDTO) =>
    myBlogRequest<any>({
      method: "GET",
      path: ["tag"],
      token: token,
      data: newTag,
    }),
};
