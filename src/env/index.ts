type myBlogEnv = "dev" | "staging" | "prod";

type myBlogEnvConfig = {
  REACT_APP_BACKEND_URL: string;
};

export const MY_BLOG_ENV: myBlogEnv =
  (`${process.env.MY_BLOG_ENV}` as myBlogEnv) || "dev";

const dev: myBlogEnvConfig = {
  REACT_APP_BACKEND_URL: "http://localhost:8000/api/",
};

const staging: myBlogEnvConfig = {
  REACT_APP_BACKEND_URL: "https://staging-api.com/api/",
};

const prod: myBlogEnvConfig = {
  REACT_APP_BACKEND_URL: "https://production-api.com/api/",
};

const envs: Record<myBlogEnv, myBlogEnvConfig> = {
  dev,
  prod,
  staging,
};

export const CONFIG: myBlogEnvConfig = envs[MY_BLOG_ENV];
