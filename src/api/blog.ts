const API_BASE_URL = "http://localhost:5270";

export interface BlogApiItem {
  strBlogGUID: string;
  strTitle: string;
  strSlug?: string;
  strDescription: string;
  strBlogImage?: string | null;
  dtPublishedOn?: string | null;
  strAuthorName?: string | null;
  strCategoryName?: string | null;
  bolIsPublished?: boolean;
  bolIsActive?: boolean;
  Category?: {
    strCategoryGUID?: string;
    strCategoryName?: string;
    strCategorySlug?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  } | null;
  // Allow additional properties from the API without strict typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface BlogApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export async function fetchBlogs(): Promise<BlogApiItem[]> {
  const response = await fetch(`${API_BASE_URL}/api/Blog`);

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as BlogApiResponse<BlogApiItem[] | BlogApiItem>;
  const data = json.data;

  const items = Array.isArray(data) ? data : data ? [data] : [];

  // Filter to published/active blogs and normalise image URL
  return items
    .filter((item) => item.bolIsPublished !== false && item.bolIsActive !== false)
    .map((item) => {
      let imageUrl = item.strBlogImage ?? "";
      if (imageUrl) {
        // Ensure we have an absolute URL to the image
        const trimmed = imageUrl.replace(/^\/+/, "");
        imageUrl = `${API_BASE_URL}/${trimmed}`;
      }

      return {
        ...item,
        strBlogImage: imageUrl,
        // Prefer explicit strCategoryName if present, otherwise use nested Category.strCategoryName
        strCategoryName: item.strCategoryName ?? item.Category?.strCategoryName ?? null,
      };
    });
}


