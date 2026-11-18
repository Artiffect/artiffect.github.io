# artiffect.github.io

개인 개발 블로그 · 포트폴리오. [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 테마 기반.

디자인 기록: `PRODUCT.md`(사이트 목적·결정), `DESIGN.md`(디자인 규칙).

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
category: backend # 필수. src/data/categories.ts의 slug 중 하나
tags: # 선택. velog처럼 칩으로 표시
  - spring
  - jpa
thumbnail: ./assets/thumb.png # 선택. 목록 오른쪽 작은 이미지 (글 파일 기준 경로)
draft: false # true면 사이트에 노출되지 않음
---
```

- 카테고리: 백엔드 `backend` · 인프라 `infra` · 프론트엔드 `frontend` · 회고 `retrospective` · 기타 `etc`
- `pubDatetime`이 미래 날짜면 그날까지 배포 사이트에서 숨겨진다.
- 작성 중인 글은 `src/content/posts/_drafts/`에 둔다. git에서 제외되므로 레포와 배포 사이트에 올라가지 않고, `pnpm dev`에서는 미리 볼 수 있다 (`draft: false`일 때). 다 쓰면 `posts/` 바로 아래로 옮겨 커밋한다.
- `src/content/posts/tailwind-typography.md`: 마크다운 문법 참고용 (draft)

## 프로젝트 추가

`src/content/projects/`에 `.md` 파일을 추가한다. 파일 이름이 주소가 된다 (`study-room.md` → `/projects/study-room/`).

```md
---
title: 스터디룸 예약 서비스
description: 목록에 보일 한두 줄 요약
startDate: 2026-03-01 # 필수. 일까지 쓴다 (화면에는 2026. 03.)
endDate: 2026-06-30 # 선택. 비우면 "진행 중"
team: 팀 4명 # 선택. 예: 개인
stack: [Spring Boot, JPA, MySQL] # 회색 글자로 나열
github: https://github.com/... # 선택
demo: https://... # 선택
thumbnail: ./assets/thumb.png # 선택. 목록 오른쪽 작은 이미지
order: 1 # 선택. 작을수록 위. 없으면 시작일 최신순
draft: false
---

## 문제

...
```

- 본문(`---` 아래)을 쓰면 상세 페이지가 생기고 목록 제목이 그쪽으로 연결된다. 본문이 없으면 제목은 GitHub(없으면 데모)로 연결된다.
- 하위 폴더에 넣어도 주소는 파일 이름만 쓴다. 폴더가 달라도 파일 이름이 같으면 안 된다.
- 작성 중인 프로젝트는 `src/content/projects/_drafts/`에 둔다 (git 제외).

## 설정

- 사이트 정보·기능 켜고 끄기: `astro-paper.config.ts`
- 카테고리 추가·이름 변경: `src/data/categories.ts`
- 사이드바 프로필(이름·소개·사진·링크): `src/data/profile.ts`
- 색상(라이트/다크): `src/styles/theme.css`
- UI 문구(한국어): `src/i18n/lang/ko.ts`

## 배포

`main`에 푸시하면 GitHub Actions가 빌드해 GitHub Pages에 배포한다.

## License

테마는 MIT 라이선스 (© Sat Naing) — `LICENSE` 참고.
