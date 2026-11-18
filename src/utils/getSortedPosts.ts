import type { CollectionEntry } from "astro:content";
import { postFilter } from "./postFilter";

/**
 * 공개 글을 작성일(pubDatetime) 최신순으로 정렬한다.
 * (수정일 기준이면 오래된 글을 고쳤을 때 연도별 묶음 순서가 뒤섞여서 작성일 기준으로 바꿈)
 *
 * Note: filtering respects drafts and scheduled posts via `postFilter()`.
 */
export function getSortedPosts(posts: CollectionEntry<"posts">[]) {
  return posts
    .filter(postFilter)
    .sort(
      (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
    );
}
