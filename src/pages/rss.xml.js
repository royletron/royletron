import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allPosts = (await getCollection("post")).filter((p) => p.data.published === true);
  return rss({
    // `<title>` field in output xml
    title: 'Royletron',
    // `<description>` field in output xml
    description: '👋 I am Royletron, a software engineer',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: allPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: post.url,
      pubDate: new Date(post.data.publishDate).toUTCString(),
      link: post.data.permalink,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}