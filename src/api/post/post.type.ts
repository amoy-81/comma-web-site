import { Pagination, User } from "../@types/global.type";

export type Post = {
  id: number;
  text_content: string;
  image_content: string;
  created_at: string;
  updated_at: string;
  user: Pick<User, "id" | "name" | "email" | "avatar">;
  likeCount: number;
  hasLike: boolean;
};

export type GetRandomPostsParams = Pagination;

export type GetRandomPostsResponse = Post[];
