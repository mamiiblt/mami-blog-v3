export interface ConfigField {
  key: string;
  value: any;
  type: "string" | "array" | "object" | "number" | "boolean";
  description?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
}

export interface AdminState {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  success: string | null;
  config: Record<string, any>;
  posts: BlogPost[];
  successTimeout?: NodeJS.Timeout;
}
