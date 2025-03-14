import { API_BASE_URL } from "@/configs/global.config";
import { GetRandomPostsParams, GetRandomPostsResponse } from "./post.type";
import { generateQueryParams } from "@/utils/generate-query-params.util";
import { PostUrls } from "./post.url";

export const getRandomPostsAction = async (
  params: GetRandomPostsParams
): Promise<GetRandomPostsResponse> => {
  const queryParams = generateQueryParams(params);

  const url = `${PostUrls.getRandomPosts}${
    queryParams ? `?${queryParams}` : ""
  }`;

  const res = await fetch(`${API_BASE_URL}${url}`, {
    next: { revalidate: 24 * 60 * 60 },
  });

  return res.json();
};
