# artiffect.github.io

개인 개발 블로그 · 포트폴리오. [Astro](https://astro.build) + [AstroPaper](https://github.com/satnaing/astro-paper) 테마 기반.

디자인 기록: `PRODUCT.md`(사이트 목적·결정), `DESIGN.md`(디자인 규칙).

## 명령어

| 명령어                           | 설명                                          |
| -------------------------------- | --------------------------------------------- |
| `pnpm install`                   | 의존성 설치                                   |
| `pnpm dev`                       | 개발 서버 (`localhost:4321`)                  |
| `pnpm build`                     | 타입 체크 + 빌드 + 검색 인덱스 생성 (`dist/`) |
| `pnpm preview`                   | 빌드 결과 미리보기                            |
| `pnpm lint` / `pnpm format`      | 린트 / 포맷                                   |
| `pnpm photo:add <경로> ["설명"]` | 사진 갤러리에 사진 추가 (아래 "사진 추가")    |

## 글 쓰기

`src/content/posts/`에 `.md` 또는 `.mdx` 파일을 추가한다.

```md
---
title: 글 제목
pubDatetime: 2026-11-17T09:00:00+09:00
description: 목록과 검색 결과에 보일 한 줄 요약
category: network # 필수. src/data/categories.ts의 slug 중 하나 (하위가 있으면 하위 slug)
tags: # 선택. velog처럼 칩으로 표시
  - spring
  - jpa
thumbnail: ./assets/thumb.png # 선택. 목록 오른쪽 작은 이미지 (글 파일 기준 경로)
draft: false # true면 사이트에 노출되지 않음
---
```

- 카테고리 (하위가 있으면 하위 slug를 쓴다. 화면에는 "CS 공부 · 네트워크"처럼 표시)
  - CS 공부: 네트워크 `network` · 운영체제 `os` · 데이터베이스 `database` · 자료구조·알고리즘 `algorithm` · 보안 `security`
  - 백엔드: Java `java` · Spring `spring` · JPA `jpa`
  - 프로젝트: 합방 `hapbang` · 캠핑가자 `camping-gaja` · 카공데이 `kagong-day`
  - 코딩테스트 `coding-test` · 인프라 `infra` · 회고 `retrospective` · 사진 `photo` · 기타 `etc`
- `pubDatetime`이 미래 날짜면 그날까지 배포 사이트에서 숨겨진다.
- 작성 중인 글은 `src/content/posts/_drafts/`에 둔다. git에서 제외되므로 레포와 배포 사이트에 올라가지 않고, `pnpm dev`에서는 미리 볼 수 있다 (`draft: false`일 때). 다 쓰면 `posts/` 바로 아래로 옮겨 커밋한다.

## 사진 추가

```sh
pnpm photo:add "~/Pictures/DSC_0912.JPG" "설명 한 줄"
```

- 긴 쪽 2400px로 줄이고 메타데이터(위치 포함)를 지운 사진을 `src/content/photos/images/`에, 정보 파일을 `src/content/photos/<날짜>-<파일명>.md`에 만든다. 원본은 그대로 둔다.
- 촬영 날짜·카메라·렌즈는 원본 EXIF에서 읽는다. 설명은 나중에 md 파일에서 고쳐도 된다.
- 추가한 사진은 `/photos`(사진만 모아 보기)에 최신순으로 모인다.
- 사진 글(`category: photo`)에 넣을 때는 같은 파일을 상대 경로로 쓴다. 글이 `posts/` 바로 아래에 있으면 `![설명](../photos/images/20261115-dsc_0912.jpg)`.

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
