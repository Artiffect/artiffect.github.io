import type { CollectionEntry } from "astro:content";
import { CATEGORIES, getCategoryFamily } from "@/data/categories";
import { postFilter } from "./postFilter";

/**
 * 공개 글 기준 카테고리별 글 수. 글이 없는 카테고리는 뺀다.
 * 상위 카테고리의 수는 하위 카테고리 글까지 합친 값이다.
 */
export function getCategoryCounts(posts: CollectionEntry<"posts">[]) {
  const visible = posts.filter(postFilter);
  const countOf = (slug: Parameters<typeof getCategoryFamily>[0]) => {
    const family = getCategoryFamily(slug);
    return visible.filter(p => family.includes(p.data.category)).length;
  };

  return {
    total: visible.length,
    categories: CATEGORIES.map(top => ({
      slug: top.slug,
      label: top.label,
      count: countOf(top.slug),
      children: ("children" in top ? top.children : [])
        .map(child => ({ ...child, count: countOf(child.slug) }))
        .filter(child => child.count > 0),
    })).filter(c => c.count > 0),
  };
}
