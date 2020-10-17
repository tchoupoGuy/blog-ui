type myBlogEnv = "dev" | "staging" | "prod";

type myBlogEnvConfig = {
  API_BASE: string;
  API_KEY: string;
};

export const MY_BLOG_ENV: myBlogEnv =
  (`${process.env.MY_BLOG_ENV}` as myBlogEnv) || "dev";

const dev: myBlogEnvConfig = {
  API_BASE: "http://localhost:8000/api/",
  API_KEY: `${process.env.NEXT_PUBLIC_MY_BLOG_API_KEY}`,
};

const staging: myBlogEnvConfig = {
  API_BASE: "https://staging-api.com/api/v1/",
  API_KEY: `${process.env.NEXT_PUBLIC_MY_BLOG_API_KEY}`,
};

const prod: myBlogEnvConfig = {
  API_BASE: "https://production/api/v1/",
  API_KEY: `${process.env.NEXT_PUBLIC_MY_BLOG_API_KEY}`,
};

const envs: Record<myBlogEnv, myBlogEnvConfig> = {
  dev,
  prod,
  staging,
};

export const CONFIG: myBlogEnvConfig = envs[MY_BLOG_ENV];
