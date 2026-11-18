/**
 * 글 카테고리 목록.
 *
 * - 글 frontmatter의 `category`에는 아래 `slug` 중 하나를 쓴다. (예: `category: backend`)
 * - 이 배열 순서대로 사이드바와 모바일 칩에 표시된다.
 * - 카테고리를 추가하려면 여기에 한 줄 넣으면 된다. 페이지(/categories/<slug>/)는 자동 생성.
 */
export const CATEGORIES = [
  { slug: "backend", label: "백엔드" },
  { slug: "infra", label: "인프라" },
  { slug: "frontend", label: "프론트엔드" },
  { slug: "retrospective", label: "회고" },
  { slug: "etc", label: "기타" },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];

/** content.config.ts의 z.enum()에 넘기기 위한 slug 목록 */
export const CATEGORY_SLUGS = CATEGORIES.map(c => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];

export function getCategoryLabel(slug: CategorySlug): string {
  return CATEGORIES.find(c => c.slug === slug)?.label ?? slug;
}
