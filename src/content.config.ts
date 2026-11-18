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

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const PROJECTS_PATH = "src/content/projects";

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${PROJECTS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // 목록에 보일 한두 줄 요약
      description: z.string(),
      // 기간. 화면에는 월까지만 표시한다 (예: 2026. 03. ~ 2026. 06.)
      startDate: z.date(),
      // 비워 두면 "진행 중"
      endDate: z.date().optional(),
      // 예: "개인", "팀 4명"
      team: z.string().optional(),
      // 기술 스택. 회색 글자로 "A · B · C"처럼 나열 (태그 칩 아님)
      stack: z.array(z.string()).default([]),
      github: z.url().optional(),
      demo: z.url().optional(),
      // 목록 오른쪽 작은 썸네일 (선택). 파일 기준 상대 경로
      thumbnail: image().optional(),
      // 작을수록 위. 없으면 시작일 최신순
      order: z.number().optional(),
      draft: z.boolean().optional(),
    }),
});

export const collections = { posts, pages, projects };
