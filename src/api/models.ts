import { string } from "yup";

export interface UserDTO {
  id: string;
  name: string;
  email: string;
}

export interface TagDTO {
  name: string;
  user: UserDTO;
}
