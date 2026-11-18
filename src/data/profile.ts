import type { ImageMetadata } from "astro";

/**
 * 사이드바 프로필.
 * 비워 둔 항목은 기본값으로 표시된다: 이름 → config의 author, 소개 → config의 description,
 * 사진 → 이름 첫 글자 타일.
 */
export const PROFILE: {
  name?: string;
  bio?: string;
  avatar?: ImageMetadata; // src/assets/images/에 넣고 import해서 지정
  links: { label: string; href: string }[];
} = {
  // TODO: 이름·소개·사진이 정해지면 채우기
  links: [{ label: "GitHub", href: "https://github.com/Artiffect" }],
};
