# alison0525.github.io

개인 개발 블로그 · 포트폴리오. [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 테마 기반.

## 명령어

| 명령어                      | 설명                                          |
| --------------------------- | --------------------------------------------- |
| `pnpm install`              | 의존성 설치                                   |
| `pnpm dev`                  | 개발 서버 (`localhost:4321`)                  |
| `pnpm build`                | 타입 체크 + 빌드 + 검색 인덱스 생성 (`dist/`) |
| `pnpm preview`              | 빌드 결과 미리보기                            |
| `pnpm lint` / `pnpm format` | 린트 / 포맷                                   |

## 글 쓰기

`src/content/posts/`에 `.md` 또는 `.mdx` 파일을 추가한다.

```md
---
title: 글 제목
pubDatetime: 2026-11-17T09:00:00+09:00
description: 목록과 검색 결과에 보일 한 줄 요약
tags:
  - astro
draft: false # true면 사이트에 노출되지 않음
---
```

- `pubDatetime`이 미래 날짜면 그날까지 배포 사이트에서 숨겨진다.
- 작성 중인 글은 `src/content/posts/_drafts/`에 둔다. git에서 제외되므로 레포와 배포 사이트에 올라가지 않고, `pnpm dev`에서는 미리 볼 수 있다 (`draft: false`일 때). 다 쓰면 `posts/` 바로 아래로 옮겨 커밋한다.
- `src/content/posts/tailwind-typography.md`: 마크다운 문법 참고용 (draft)

## 설정

- 사이트 정보·기능 켜고 끄기: `astro-paper.config.ts`
- UI 문구(한국어): `src/i18n/lang/ko.ts`

## 배포

`main`에 푸시하면 GitHub Actions가 빌드해 GitHub Pages에 배포한다.

## License

테마는 MIT 라이선스 (© Sat Naing) — `LICENSE` 참고.
