import type { APIRoute } from "astro";
import { renderOgImage } from "@/utils/renderOgImage";
import config from "@/config";

/** 사이트 기본 OG 이미지 (글이 아닌 페이지용) */
export const GET: APIRoute = async () => {
  const png = await renderOgImage({
    title: config.site.title,
    description: config.site.description,
    footer: new URL(config.site.url).hostname,
  });

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
