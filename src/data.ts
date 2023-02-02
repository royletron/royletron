import { getCollection } from "astro:content";
import {
  getPermalink,
  getBlogPermalink,
  getAsset,
  cleanSlug,
} from "./utils/permalinks";

export async function getCategories() {
  const posts = await getCollection("post");
  return posts.reduce<string[]>(
    (categories, post) =>
      post.data.category && categories.includes(post.data.category)
        ? categories
        : post.data.category
        ? [...categories, post.data.category]
        : categories,
    []
  );
}

export const headerData = {
  links: [
    {
      text: "About",
      links: [
        {
          text: "🦹‍♀️ Me!",
          href: getPermalink("/about"),
        },
        {
          text: "🗣 Talks",
          href: getPermalink("/about/talks"),
        },
        {
          text: "🧙‍♀️ Code",
          href: getPermalink("/about/code"),
        },
        {
          text: "🎓 Training",
          href: getPermalink("/about/training"),
        },
      ],
    },
    {
      text: "Hiring",
      href: "https://cv.royletron.dev",
    },
  ],
  actions: [],
};

export async function getHeaderData() {
  const categories = await getCategories();
  return {
    ...headerData,
    links: [
      {
        text: "Latest",
        href: getBlogPermalink(),
      },
      {
        text: "Posts",
        links: categories.map((category) => ({
          text: category,
          href: getPermalink(cleanSlug(category), "category"),
        })),
      },
      ...headerData.links,
    ],
  };
}
