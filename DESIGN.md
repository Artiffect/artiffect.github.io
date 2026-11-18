---
name: alison0525 개발 블로그
description: 국내 기술 블로그의 표준 레이아웃을 단정하게 마감한 한국어 개인 개발 블로그
colors:
  background: "#ffffff"
  foreground: "#16181b"
  sub: "#454a51"
  muted: "#f1f3f5"
  muted-foreground: "#6e747c"
  border: "#e6e7e9"
  accent: "#12b886"
  accent-ink: "#087f5b"
  accent-foreground: "#ffffff"
  background-dark: "#121314"
  foreground-dark: "#ecedee"
  sub-dark: "#b4b8be"
  muted-dark: "#1f2124"
  muted-foreground-dark: "#8e949b"
  border-dark: "#2a2c2f"
  accent-dark: "#20c997"
  accent-ink-dark: "#63e6be"
  accent-foreground-dark: "#121314"
  callout-warning: "#b35c00"
  callout-warning-dark: "#ffa94d"
  callout-danger: "#c92a2a"
  callout-danger-dark: "#ff8787"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "17.5px"
    fontWeight: 700
    lineHeight: 1.375
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.85
  body-sm:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Pretendard Variable, Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  mono:
    fontFamily: "Google Sans Code, ui-monospace, monospace"
    fontSize: "0.88em"
    fontWeight: 400
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  chip-gap: "8px"
  item-y: "24px"
  section: "40px"
  sidebar-gap: "72px"
  sidebar: "220px"
  list-max: "1152px"
  reading-max: "768px"
components:
  tag-chip:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "28px"
  tag-chip-hover:
    backgroundColor: "{colors.border}"
    textColor: "{colors.accent-ink}"
  tag-chip-sm:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.full}"
    padding: "0 10px"
    height: "26px"
  tag-chip-active:
    backgroundColor: "{colors.accent-ink}"
    textColor: "{colors.background}"
    rounded: "{rounded.full}"
  nav-link:
    textColor: "{colors.sub}"
    padding: "8px 10px"
  nav-link-active:
    textColor: "{colors.foreground}"
  nav-icon:
    textColor: "{colors.sub}"
    rounded: "{rounded.md}"
    size: "36px"
  side-cat:
    textColor: "{colors.sub}"
    padding: "6px 0"
  side-cat-active:
    textColor: "{colors.foreground}"
  cat-tab:
    textColor: "{colors.sub}"
    padding: "12px 0"
  cat-tab-active:
    textColor: "{colors.foreground}"
  post-item-title:
    textColor: "{colors.foreground}"
    typography: "{typography.title}"
  post-item-title-hover:
    textColor: "{colors.accent-ink}"
  post-thumbnail:
    backgroundColor: "{colors.muted}"
    rounded: "{rounded.lg}"
    width: "168px"
    height: "104px"
  adjacent-link:
    rounded: "{rounded.xl}"
    padding: "16px 20px"
  code-inline:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: "2px 6px"
  code-block:
    rounded: "{rounded.xl}"
---

# Design System: alison0525 개발 블로그

## Overview

**Creative North Star: "잘 정리된 기술 서가"**

토스·우아한형제들·velog처럼 한국 개발자가 익숙하게 읽는 기술 블로그의 표준 배치를, 그 기준 블로그들 수준의 마감으로 옮긴 세계다. 흰 바탕 위에 무채색 잉크 네 단계(제목·본문 `foreground`, 요약 `sub`, 날짜·개수 `muted-foreground`, 구분선 `border`)가 위계를 만들고, 색은 청록 하나만 쓴다. 장식이 아니라 정돈이 인상을 만든다: 1px 구분선, 그림자 없는 평면, Pretendard 한 서체.

밀도는 "훑기 좋은 목록 + 편히 읽는 본문"의 두 박자다. 목록 화면은 넓은 틀(최대 1152px)에 왼쪽 220px 사이드바와 오른쪽 글 목록을 두고, 글 본문은 768px 한 단으로 좁혀 17px / 1.85 행간의 긴 한글 읽기에 집중한다. 글은 연도별로 묶이고, 날짜는 한국식(`2026. 11. 16.`)으로 표기한다.

분류는 "카테고리 1개 + 태그 여러 개"이고, 두 분류는 모양으로 구분된다. 카테고리는 굵기와 청록 점으로 켜지는 목록, 태그는 velog식 둥근 칩이다. 다크 모드는 같은 위계를 그대로 반전한다.

**Key Characteristics:**
- 흰 바탕 + 무채색 잉크 네 단계, 포인트는 청록 하나
- Pretendard로 제목과 본문, 고정폭(Google Sans Code)은 코드에만
- 카테고리는 목록(굵게 + 청록 점), 태그는 둥근 칩
- 1px 구분선, 그림자 없음, 제목 위 라벨 없음
- 사이드바는 1024px 이상에서만, 모바일은 밑줄 카테고리 탭
- 한국식 날짜, `word-break: keep-all`

## Colors

무채색 잉크 단계 위에 청록 한 가지를 두 농도로만 쓰는 절제된 팔레트다.

### Primary
- **표시용 청록** (`accent`, 다크 `accent-dark`): 면적이 작은 "표시"에만 쓴다. 활성 카테고리 점, 상단 메뉴 활성 밑줄, 모바일 탭 활성 밑줄, 읽기 진행 막대, 포커스 윤곽선, 텍스트 커서, 선택 영역(25% 혼합), 코드 강조 줄(10%), OG 이미지 아래 띠. 흰 바탕에서 대비가 낮아(2.55:1) 글자색으로는 쓰지 않는다.
- **글자용 진한 청록** (`accent-ink`, 다크 `accent-ink-dark`): 청록이 글자가 될 때의 값. 본문 링크, 태그 칩 글자, 목록 제목 호버, 글 상단 카테고리 링크, 목차 현재 항목, 메모 상자(note·info·tip 등) 색. 흰 바탕 5.0:1, 칩 바탕 위 4.5:1.

### Neutral
- **종이 흰색** (`background`, 다크 `background-dark`): 모든 화면의 바탕. 면 구분용 회색 판은 쓰지 않는다.
- **먹색** (`foreground`, 다크 `foreground-dark`): 제목, 본문, 활성 메뉴·카테고리 글자.
- **보조 잉크** (`sub`, 다크 `sub-dark`): 글 요약, 비활성 메뉴·카테고리, 인용문, 프로필 소개.
- **연회색 잉크** (`muted-foreground`, 다크 `muted-foreground-dark`): 날짜, 글 수, 연도 머리, 사이드바 소제목, 푸터.
- **칩 바탕** (`muted`, 다크 `muted-dark`): 태그 칩, 인라인 코드, 프로필 자리 표시, 코드 복사 버튼 바탕.
- **구분선** (`border`, 다크 `border-dark`): 모든 1px 선. 헤더·푸터 경계, 목록 항목 사이, 썸네일·이웃 글 카드 테두리. 태그 칩 호버 바탕도 이 값이다.

### Semantic (메모 상자 전용)
- **경고 호박색** (`callout-warning`, 다크 `callout-warning-dark`): warning·caution·attention 메모 상자에만.
- **위험 빨강** (`callout-danger`, 다크 `callout-danger-dark`): danger·error·bug·fail 계열 메모 상자에만.

### Named Rules
**The One Teal Rule.** 포인트 색은 청록 하나다. 정보성 메모 상자도 청록으로 통일하고, 호박색·빨강은 경고·위험 메모 상자에만 남긴다.

**The Ink-or-Mark Rule.** 청록이 글자가 되면 `accent-ink`, 점·밑줄·막대처럼 표시가 되면 `accent`. 둘을 바꿔 쓰지 않는다.

## Typography

**Display Font:** Pretendard Variable (Pretendard, -apple-system, system-ui 대체)
**Body Font:** Pretendard Variable
**Label/Mono Font:** Google Sans Code (ui-monospace 대체), 코드에만

**Character:** 한 서체가 굵기와 크기만으로 위계를 만든다. 제목은 700에 자간을 살짝 좁히고(-0.025em), 숫자는 표 숫자(tnum)로 정렬한다.

### Hierarchy
- **Display** (700, 28px / sm 이상 36px, 1.25): 글 상세 제목. `text-pretty`.
- **Headline** (700, 24px / sm 이상 30px): 목록·아카이브·검색·소개·404 페이지 제목. 목록 화면 제목은 24px 고정.
- **Title** (700, 17.5px / sm 이상 20px, 1.375): 글 목록 항목 제목. 프로필 이름은 17px 700.
- **Body** (400, 17px, 1.85): 글 본문(`app-prose`). 본문 단 폭 최대 768px.
- **Body-sm** (400, 15px, 1.625): 글 요약(2줄 말줄임), 빈 상태 문구, 페이지 설명. 상단 메뉴도 15px.
- **Label** (400, 13px, tnum): 날짜·카테고리 메타, 글 수, 푸터. 태그 칩은 13.5px 500, 작은 칩은 13px 500. 연도 머리는 14px 600.
- **Mono** (0.88em): 인라인 코드와 코드 블록.

### Named Rules
**The One Family Rule.** 제목과 본문은 모두 Pretendard다. 고정폭은 코드에만 쓰고 라벨·숫자·날짜를 고정폭으로 꾸미지 않는다.

**The Keep-All Rule.** 문서 전체에 `word-break: keep-all`과 `overflow-wrap: anywhere`를 건다. 한글은 띄어쓰기 단위로 줄바꿈하고, 긴 영단어·URL만 끊는다.

**The Korean Date Rule.** 날짜는 `YYYY. MM. DD.`, 연도가 이미 보이는 곳(아카이브)은 `MM. DD.`로 쓴다.

## Layout

- **목록 화면**(홈, /posts, 카테고리, 태그): 최대 1152px 틀, 좌우 여백 16 / 24 / 48px(기본 / sm / lg). 1024px 이상에서 220px 사이드바와 본문 열 사이 72px 간격의 2열이 되고, 사이드바는 위에서 40px 떨어져 따라 붙는다(sticky).
- **사이드바 순서**: 프로필(64px 둥근 사각 자리 표시 → 이름 → 소개 → 글자 링크) → 카테고리 목록과 글 수 → 태그 칩(12개까지, 넘치면 "전체 태그 보기"). 섹션 사이 40px.
- **모바일·태블릿(<1024px)**: 사이드바를 숨기고 목록 위에 가로 스크롤 밑줄 탭(전체 → 카테고리들 → "태그")을 둔다. 마지막 "태그" 탭은 숨겨진 사이드바 태그 칩의 입구다.
- **글 목록**: 연도별로 묶고, 연도 머리는 숫자 + 남은 폭을 채우는 1px 선. 항목은 위아래 24px, 사이 1px 구분선. 썸네일은 실제 이미지가 있을 때만 오른쪽에 붙고, 없으면 글이 폭 전체를 쓴다.
- **글 상세·단일 페이지**: 768px 한 단 가운데 정렬. 1280px 이상에서 목차가 본문 오른쪽 여백에 붙고, 그보다 좁으면 떠 있는 목차 버튼으로 바뀐다.
- **헤더**: 높이 64px(sm 이상 72px), 사이트명 왼쪽, 글·소개·검색·테마 오른쪽, 아래 1px 선.
- **리듬**: 칩 사이 8px(사이드바 6px), 항목 24px, 섹션 40px.

## Elevation & Depth

평면 시스템이다. 깊이는 그림자가 아니라 1px 구분선과 잉크 농도 차이로 만든다. 바탕은 한 장의 흰 종이이고, 카드·썸네일·코드 블록은 테두리로만 경계를 짓는다. 호버는 바탕을 `muted`→`border`로 한 단 짙게 하거나 테두리를 진하게(전경 25%) 하는 정도다.

### Named Rules
**The Flat Paper Rule.** 그림자를 쓰지 않는다. 경계는 1px `border` 선, 강조는 굵기와 청록 표시로 한다. 예외는 하나: 본문 위에 떠 있는 버튼(글 상세의 모바일 목차·맨 위로 버튼과 목차 팝오버)은 아래 글과 겹쳐 보이지 않도록 부드러운 그림자를 허용한다.

## Shapes

모서리는 요소 크기에 비례해 부드러워진다. 작은 조작 요소는 6px(아이콘 버튼, 인라인 코드, 복사 버튼), 썸네일과 떠 있는 목차 판은 8px, 이웃 글 카드와 코드 블록은 12px, 프로필 자리 표시는 16px. 태그 칩만 완전한 알약(9999px)이라 카테고리 목록과 모양으로 구분된다. 선은 언제나 1px이고, 인용문 왼쪽 선만 2px다.

## Components

### Chips (태그)
velog식 둥근 칩. 태그임을 모양만으로 알린다.
- **Style:** `muted` 바탕, `accent-ink` 글자, 알약 모양. 기본 28px 높이·좌우 12px·13.5px 500(글 목록·글 상단), 작은 칩 26px·좌우 10px·13px(사이드바, 글 수를 연회색으로 덧붙임).
- **State:** 호버는 바탕이 `border`로 한 단 짙어진다. 현재 보고 있는 태그는 반전(`accent-ink` 바탕, `background` 글자, 글 수는 70%).
- 글 목록에서는 줄 전체 링크 위에 따로 눌리도록 올라와 있다.

### Category List (사이드바)
- 소제목 "카테고리" 13px 600 연회색. 항목은 14.5px `sub`, 오른쪽에 글 수(13px 연회색).
- 활성: `foreground` 700, 글자 왼쪽 바깥 14px 자리에 6px 청록 점.

### Navigation
- **상단 메뉴:** 15px `sub`, 호버 `foreground`. 활성은 `foreground` 600에 청록 2px 밑줄(offset 8px). "글"은 홈·목록·카테고리·태그에서 모두 켜진다. 검색·테마는 36px 아이콘 버튼(6px 모서리, SVG 아이콘).
- **모바일 카테고리 탭:** 14.5px `sub`, 탭 사이 20px, 아래 1px 선. 활성은 `foreground` 700에 청록 2px 안쪽 밑줄.
- **페이지 이동:** 위 1px 선, 이전·다음 글자 링크(`sub`→`foreground`)와 가운데 `3 / 7` 연회색 숫자.
- **푸터:** 위 1px 선, 13px 연회색 글자 링크(아카이브·RSS·GitHub). 소셜은 아이콘이 아니라 글자로.

### Post List Item (시그니처)
- 제목(Title) → 요약 2줄(`sub` 15px) → 태그 칩 → 날짜·카테고리(13px 연회색). 줄 전체가 링크이고 호버 시 제목만 `accent-ink`로 바뀐다.
- 썸네일은 실제 이미지가 있을 때만: 88×66px(모바일) / 168×104px(sm 이상), 8px 모서리, 1px 테두리.

### Cards / Containers
- **이웃 글 카드:** 12px 모서리, 1px `border`, 안쪽 16px 20px. 위에 13px 연회색 "이전 글/다음 글", 아래 제목 600 두 줄. 호버 시 테두리만 진해진다. 그림자 없음.

### Reading (글 본문)
- 링크는 `accent-ink`에 40% 청록 밑줄(offset 4px), 호버 시 밑줄이 진해진다.
- 인용문은 왼쪽 2px `border` 선, `sub` 색, 기울임 없음.
- 인라인 코드는 `muted` 바탕 6px 모서리. 코드 블록은 12px 모서리 1px 테두리, 하이라이트 테마는 라이트 min-light / 다크 github-dark-default.
- 메모 상자 제목은 한국어(메모·정보·팁·중요·주의·위험·예시·질문·인용).
- 글 상단: 제목 → 날짜 · 카테고리(청록 글자 링크) · 수정일 → 태그 칩 → 1px 선 → 본문.

### OG 이미지
1200×630 흰 바탕, 좌우 80px·위아래 72px 여백, Pretendard 700 제목(66px, 40자 넘으면 56px), `sub` 32px 요약, 왼쪽 아래 사이트명·카테고리, 오른쪽 아래 태그 칩 최대 3개, 아래에 14px 청록(`accent`) 띠.

## Do's and Don'ts

### Do:
- **Do** 청록이 글자일 때는 `accent-ink`(#087f5b / 다크 #63e6be), 점·밑줄·막대일 때는 `accent`를 쓴다.
- **Do** 카테고리는 목록(굵게 + 6px 청록 점), 태그는 알약 칩으로 그려 두 분류를 모양으로 구분한다.
- **Do** 경계는 1px `border` 선으로, 호버는 바탕 한 단(`muted`→`border`) 또는 테두리 농도로 표현한다.
- **Do** 글 목록은 연도별로 묶고 날짜를 `YYYY. MM. DD.`로 쓴다. 숫자에는 tnum을 건다.
- **Do** 썸네일은 실제 이미지가 있을 때만 보이고, 없으면 글이 폭 전체를 쓰게 한다.
- **Do** 다크 모드에서도 같은 위계와 같은 역할 이름의 토큰을 쓴다.

### Don't:
- **Don't** 제목 위에 작은 라벨(kicker, eyebrow)을 두지 않는다.
- **Don't** 청록 외의 포인트 색을 들이지 않는다. 호박색·빨강은 경고·위험 메모 상자 전용이다.
- **Don't** 그림자로 깊이를 만들지 않는다. (본문 위에 떠 있는 버튼만 예외)
- **Don't** 고정폭 서체를 코드 밖(라벨, 날짜, 장식)에 쓰지 않는다.
- **Don't** 1024px 미만에서 사이드바를 보이지 않는다. 그 자리는 밑줄 카테고리 탭이 대신한다.
- **Don't** 썸네일이 없는 글에 자리 표시 이미지를 채우지 않는다.
