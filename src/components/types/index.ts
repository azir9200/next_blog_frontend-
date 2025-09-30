export type TPost = {
  id: number;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
};
