export type Entity = {
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface IUser extends Entity {
  email: string;
  name: string;
  avatar?: string;
}

export interface ILogin {
  email: string;
  password: string;
}
