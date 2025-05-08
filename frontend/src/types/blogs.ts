// Base type containing common metadata fields
export type BlogPost = {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  readable_publish_date: string;
  social_image: string;
  tag_list: string;
  tags: string[];
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  published_timestamp: string;
  reading_time_minutes: number;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    user_id?: number; // Optional, since it was only present in one version
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
  organization?: {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
  };
};

// Extended type that includes blog content (HTML and Markdown)
export type Blog = BlogPost & {
  body_html: string;
  body_markdown: string;
};

export type BlogPosts = BlogPost[];
