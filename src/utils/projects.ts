import type { CollectionEntry } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import config from "@/config";
import { resolveTimezone } from "./resolveTimezone";

dayjs.extend(utc);
dayjs.extend(timezone);

type Project = CollectionEntry<"projects">;

/**
 * 공개 프로젝트 정렬: order 작은 순 → 시작일 최신순. draft는 뺀다.
 * (order가 없는 프로젝트는 order가 있는 프로젝트 뒤로 간다)
 */
export function getSortedProjects(projects: Project[]) {
  return projects
    .filter(p => !p.data.draft)
    .sort((a, b) => {
      const ao = a.data.order ?? Infinity;
      const bo = b.data.order ?? Infinity;
      if (ao !== bo) return ao - bo;
      return b.data.startDate.getTime() - a.data.startDate.getTime();
    });
}

/** 본문(--- 아래)이 있는 프로젝트만 상세 페이지를 만든다 */
export function hasProjectPage(project: Project) {
  return Boolean(project.body?.trim());
}

/** 주소에 쓸 이름: id의 마지막 부분. 예: "_drafts/study-room" → "study-room" */
export function getProjectSlug(id: string) {
  return id.split("/").at(-1) ?? id;
}

/** 상세 페이지 주소. 예: /projects/study-room/ */
export function getProjectUrl(
  id: string,
  locale: string | undefined = config.site.lang
) {
  return getRelativeLocaleUrl(locale, `projects/${getProjectSlug(id)}/`);
}

/** 한국식 기간 표기(월까지). 예: "2026. 03. ~ 2026. 06.", "2026. 11. ~ 진행 중" */
export function formatPeriod({ startDate, endDate }: Project["data"]) {
  const tz = resolveTimezone(config.site.timezone);
  const month = (d: Date) => dayjs(d).tz(tz).format("YYYY. MM.");
  return {
    startIso: startDate.toISOString(),
    label: `${month(startDate)} ~ ${endDate ? month(endDate) : "진행 중"}`,
  };
}
