const API_BASE_URL = "http://localhost:5270";

export interface CaseStudyApiItem {
  strCaseStudyGUID: string;
  strTitle: string;
  strOverview?: string | null;
  strSlug?: string;
  strCoverImage?: string | null;
  // SEO metadata returned from the API
  strMetaTitle?: string | null;
  strMetaDescription?: string | null;
  strMetaKeywords?: string | null;
  bolIsStructuredFormat?: boolean;
  strStructuredContent?: string | null;
  strContent?: string | null;
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

interface CaseStudyApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

const normaliseCaseStudies = (items: CaseStudyApiItem[]): CaseStudyApiItem[] => {
  return items
    .filter((item) => item.bolIsPublished !== false && item.bolIsActive !== false)
    .map((item) => {
      let imageUrl = item.strCoverImage ?? "";
      if (imageUrl) {
        const trimmed = imageUrl.replace(/^\/+/, "");
        imageUrl = `${API_BASE_URL}/${trimmed}`;
      }

      return {
        ...item,
        strCoverImage: imageUrl,
      };
    });
};

export async function fetchCaseStudies(): Promise<CaseStudyApiItem[]> {
  const response = await fetch(`${API_BASE_URL}/api/CaseStudy`);

  if (!response.ok) {
    throw new Error(`Failed to fetch case studies: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as CaseStudyApiResponse<CaseStudyApiItem[] | CaseStudyApiItem>;
  const data = json.data;
  const items = Array.isArray(data) ? data : data ? [data] : [];

  return normaliseCaseStudies(items);
}


