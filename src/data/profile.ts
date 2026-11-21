import type { ImageMetadata } from "astro";
import avatar from "@/assets/images/profile.png";

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
  // 사진: GitHub 프로필 사진 (https://github.com/Artiffect)
  avatar,
  links: [{ label: "GitHub", href: "https://github.com/Artiffect" }],
};
