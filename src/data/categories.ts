/**
 * 글 카테고리 목록.
 *
 * - 글 frontmatter의 `category`에는 아래 slug 중 하나를 쓴다.
 *   하위 카테고리가 있으면 하위 slug만 쓴다. (예: `category: network` → CS 공부 · 네트워크)
 * - 이 배열 순서대로 사이드바와 모바일 칩에 표시된다. 글이 없는 카테고리는 숨긴다.
 * - slug는 상위·하위를 통틀어 겹치면 안 된다. 페이지는 /categories/<slug>/ 로 자동 생성.
 */
export const CATEGORIES = [
  {
    slug: "cs",
    label: "CS 공부",
    children: [
      { slug: "network", label: "네트워크" },
      { slug: "os", label: "운영체제" },
      { slug: "database", label: "데이터베이스" },
      { slug: "algorithm", label: "자료구조·알고리즘" },
      { slug: "security", label: "보안" },
    ],
  },
  {
    slug: "backend",
    label: "백엔드",
    children: [
      { slug: "java", label: "Java" },
      { slug: "spring", label: "Spring" },
      { slug: "jpa", label: "JPA" },
    ],
  },
  { slug: "coding-test", label: "코딩테스트" },
  { slug: "project-log", label: "프로젝트 기록" },
  { slug: "infra", label: "인프라" },
  { slug: "retrospective", label: "회고" },
  { slug: "photo", label: "사진" },
  { slug: "etc", label: "기타" },
] as const;

type TopCategory = (typeof CATEGORIES)[number];
type ChildCategory = Extract<
  TopCategory,
  { children: unknown }
>["children"][number];

export type CategorySlug = TopCategory["slug"] | ChildCategory["slug"];

export type CategoryInfo = {
  slug: CategorySlug;
  label: string;
  parent?: { slug: CategorySlug; label: string };
};

/** 상위·하위 카테고리를 한 줄로 편 목록 (상위 다음에 그 하위가 온다) */
export const ALL_CATEGORIES: CategoryInfo[] = CATEGORIES.flatMap(top => [
  { slug: top.slug, label: top.label },
  ...("children" in top
    ? top.children.map(child => ({
        slug: child.slug,
        label: child.label,
        parent: { slug: top.slug, label: top.label },
      }))
    : []),
]);

/** content.config.ts의 z.enum()에 넘기기 위한 slug 목록 */
export const CATEGORY_SLUGS = ALL_CATEGORIES.map(c => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];

export function getCategory(slug: CategorySlug): CategoryInfo {
  return ALL_CATEGORIES.find(c => c.slug === slug) ?? { slug, label: slug };
}

/** 글 목록·글 상단·OG 이미지에 보일 이름. 하위면 "CS 공부 · 네트워크" */
export function getCategoryLabel(slug: CategorySlug): string {
  const { label, parent } = getCategory(slug);
  return parent ? `${parent.label} · ${label}` : label;
}

/** 이 카테고리 페이지에 모을 slug들: 자기 자신 + 하위 카테고리 */
export function getCategoryFamily(slug: CategorySlug): CategorySlug[] {
  return [
    slug,
    ...ALL_CATEGORIES.filter(c => c.parent?.slug === slug).map(c => c.slug),
  ];
}

/** 사이드바·탭에서 켤 상위 카테고리 slug (하위면 부모) */
export function getTopCategorySlug(slug: CategorySlug): CategorySlug {
  return getCategory(slug).parent?.slug ?? slug;
}
