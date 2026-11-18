import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import config from "@/config";
import { resolveTimezone } from "./resolveTimezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/** 사이트 시간대 기준 한국식 날짜. 예: { label: "2026. 11. 14.", year: 2026 } */
export function formatDate(date: Date, postTimezone?: string) {
  const d = dayjs(date).tz(
    resolveTimezone(postTimezone ?? config.site.timezone)
  );
  return {
    iso: d.toISOString(), // <time datetime>용
    label: d.format("YYYY. MM. DD."),
    year: d.year(), // 연도별 묶음용
  };
}
