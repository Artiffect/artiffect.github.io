import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";
import { CATEGORY_SLUGS } from "@/data/categories";

export const BLOG_PATH = "src/content/posts";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      // 카테고리 1개 (필수) — 목록은 src/data/categories.ts
      category: z.enum(CATEGORY_SLUGS),
      // 태그 여러 개 (선택) — 없으면 칩을 표시하지 않음
      tags: z.array(z.string()).default([]),
      // 글 목록에 보일 작은 썸네일 (선택). 글 파일 기준 상대 경로, 예: ./assets/thumb.png
      thumbnail: image().optional(),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      hideToc: z.boolean().optional(),
      // An empty value means "not set", so the site timezone applies.
      timezone: z
        .string()
        .optional()
        .transform(tz => tz || undefined),
    }),
});

export const PHOTOS_PATH = "src/content/photos";

// 사진 갤러리 (/photos). 한 장 = md 파일 하나(frontmatter만). pnpm photo:add 로 만든다.
const photos = defineCollection({
  loader: glob({ pattern: "*.md", base: `./${PHOTOS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      // 설명 한 줄 (선택)
      caption: z.string().optional(),
      date: z.date(),
      camera: z.string().optional(),
      lens: z.string().optional(),
    }),
});

export const collections = { posts, photos };
