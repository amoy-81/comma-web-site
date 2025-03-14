export type Pagination = {
  page?: number;
  pageSize?: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: UserRoles;
  bio: string;
  created_at: string;
  updated_at: string;
};

export enum UserRoles {
  NORMAL_USER = "NORMAL_USER",
  GOLD_USER = "GOLD_USER",
  VERIFYED_USER = "VERIFYED_USER",
  SUPER_USER = "SUPER_USER",
}

export type Poster = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
};
