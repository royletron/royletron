import { trim } from "~/utils/utils";
import slugify from "slugify";

export const trimSlash = (s: string) => trim(trim(s, "/"));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join("/");
  return "/" + paths + (paths ? "/" : "");
};

const BASE_PATHNAME = "/";

export const cleanSlug = (text = "") =>
  trimSlash(text)
    .split("/")
    .map((slug) => slugify(slug, { lower: true }))
    .join("/");

export const POST_PERMALINK_PATTERN = trimSlash("/%slug%");

export const BLOG_BASE = cleanSlug("blog");
export const CATEGORY_BASE = cleanSlug("category");
export const TAG_BASE = cleanSlug("tag");

export const getCanonical = (path = ""): string | URL =>
  new URL(path, "https://royletron.dev");

/** */
export const getPermalink = (slug = "", type = "page"): string => {
  let permalink: string;

  switch (type) {
    case "category":
      permalink = createPath(CATEGORY_BASE, trimSlash(slug.toLowerCase()));
      break;

    case "tag":
      permalink = createPath(TAG_BASE, trimSlash(slug));
      break;

    case "post":
      permalink = createPath(trimSlash(slug));
      break;

    case "page":
    default:
      permalink = createPath(slug);
      break;
  }

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink("/");

/** */
export const getBlogPermalink = (): string => getPermalink(BLOG_BASE);

/** */
export const getAsset = (path: string): string =>
  "/" +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join("/");

/** */
const definitivePermalink = (permalink: string): string =>
  createPath(BASE_PATHNAME, permalink);
