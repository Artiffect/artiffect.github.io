import type { CollectionEntry } from "astro:content";
import { CATEGORIES } from "@/data/categories";
import { postFilter } from "./postFilter";

/** 공개 글 기준 카테고리별 글 수. 글이 없는 카테고리는 뺀다. */
export function getCategoryCounts(posts: CollectionEntry<"posts">[]) {
  const visible = posts.filter(postFilter);
  return {
    total: visible.length,
    categories: CATEGORIES.map(c => ({
      ...c,
      count: visible.filter(p => p.data.category === c.slug).length,
    })).filter(c => c.count > 0),
  };
}
