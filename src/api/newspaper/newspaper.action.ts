import { API_BASE_URL } from "@/configs/global.config";
import {
  GetTodayNewsPapersParams,
  GetTodayNewsPapersResponse,
} from "./newspaper.type";
import { NewspaperUrls } from "./newspaper.url";
import { generateQueryParams } from "@/utils/generate-query-params.util";

export const getTodayNewspapers = async (
  params: GetTodayNewsPapersParams
): Promise<GetTodayNewsPapersResponse> => {
  const queryParams = generateQueryParams(params);

  const url = `${NewspaperUrls.General}${queryParams ? `?${queryParams}` : ""}`;

  const res = await fetch(`${API_BASE_URL}${url}`, {
    next: { revalidate: 24 * 60 * 60 },
  });

  return res.json();
};
