import { Pagination, Poster, User } from "../@types/global.type";

export enum NewspaperSectionType {
  TopNewsCard = "TopNewsCard",
  NewsSummarySection = "NewsSummarySection",
  FullArticleSection = "FullArticleSection",
  HeaderBanner = "HeaderBanner",
}

export type NewspaperSection = {
  id: number;
  newsPaperId: number;
  type: NewspaperSectionType;
  title: string[];
  image: string;
  paragraph: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
};

export type Newspaper = {
  id: number;
  title: string;
  description: string;
  views: number;
  posterId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  sections: NewspaperSection[];
  user: User;
  poster: Poster;
};

export type GetTodayNewsPapersParams = Pagination;

export type GetTodayNewsPapersResponse = {
  data: Newspaper[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
};
