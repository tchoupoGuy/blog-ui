import { string } from "yup";

export interface UserDTO {
  id: string;
  name: string;
  email: string;
}

export interface TagDTO {
  name: string;
}
export interface UserCredentialDTO {
  username: string;
  password: string;
}
