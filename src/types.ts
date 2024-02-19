export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: {
    src: string;
    width: number;
    height: number;
    format: string;
  };

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: unknown;
  content?: string;
}

export type MetaSEO = {
  title?: string;
};
