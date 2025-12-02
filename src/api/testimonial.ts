const API_BASE_URL = "http://localhost:5270";

export interface TestimonialApiItem {
  strTestimonialGUID: string;
  strPersonName: string;
  strPersonDesignation?: string | null;
  strCompanyName?: string | null;
  strTestimonialContent: string;
  strAvatarImagePath?: string | null;
  bolIsActive?: boolean;
  bolIsPublished?: boolean;
  dtPublishedOn?: string | null;
  dtCreatedOn?: string;
  strCreatedByGUID?: string | null;
  dtUpdatedOn?: string | null;
  strUpdatedByGUID?: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface TestimonialApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

const normaliseTestimonials = (items: TestimonialApiItem[]): TestimonialApiItem[] => {
  return items
    .filter((item) => item.bolIsActive !== false && item.bolIsPublished !== false)
    .map((item) => {
      let avatarUrl = item.strAvatarImagePath ?? "";
      if (avatarUrl) {
        const trimmed = avatarUrl.replace(/^\/+/, "");
        avatarUrl = `${API_BASE_URL}/${trimmed}`;
      }

      return {
        ...item,
        strAvatarImagePath: avatarUrl || undefined,
      };
    });
};

export async function fetchTestimonials(): Promise<TestimonialApiItem[]> {
  const response = await fetch(`${API_BASE_URL}/api/Testimonial`);

  if (!response.ok) {
    throw new Error(`Failed to fetch testimonials: ${response.status} ${response.statusText}`);
  }

  const json = (await response.json()) as TestimonialApiResponse<TestimonialApiItem[] | TestimonialApiItem>;
  const data = json.data;
  const items = Array.isArray(data) ? data : data ? [data] : [];

  return normaliseTestimonials(items);
}


