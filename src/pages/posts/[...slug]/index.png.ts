import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getCategoryLabel } from "@/data/categories";
import { renderOgImage } from "@/utils/renderOgImage";
import { getPostSlug } from "@/utils/getPostPaths";
import { postFilter } from "@/utils/postFilter";
import config from "@/config";

export async function getStaticPaths() {
  if (!config.features.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("posts").then(p =>
    p.filter(post => postFilter(post) && !post.data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: getPostSlug(post.id, post.filePath) },
    props: post,
  }));
}

/** 글별 OG 이미지 */
export const GET: APIRoute = async ({ props }) => {
  if (!config.features.dynamicOgImage) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }

  const png = await renderOgImage({
    title: props.data.title,
    footer: `${config.site.title} · ${getCategoryLabel(props.data.category)}`,
    chips: props.data.tags,
  });

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
