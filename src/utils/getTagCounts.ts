import type { CollectionEntry } from "astro:content";
import { getUniqueTags } from "./getUniqueTags";
import { postFilter } from "./postFilter";
import { slugifyStr } from "./slugify";

/** 공개 글 기준 태그별 글 수. 글 수 많은 순, 같으면 이름순. */
export function getTagCounts(posts: CollectionEntry<"posts">[]) {
  const visible = posts.filter(postFilter);
  return getUniqueTags(posts)
    .map(t => ({
      ...t,
      count: visible.filter(p => p.data.tags.some(x => slugifyStr(x) === t.tag))
        .length,
    }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}
