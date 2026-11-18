import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://alison0525.github.io/",
    title: "alison0525", // TODO: 사이트 제목 정하기
    description: "개발 기록과 프로젝트, 사진을 모아 두는 곳", // TODO: 한 줄 소개 정하기
    author: "alison0525", // TODO: 표시할 작성자 이름
    profile: "https://github.com/alison0525",
    ogImage: "default-og.jpg",
    lang: "ko",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 10,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/alison0525" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
