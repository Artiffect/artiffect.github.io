---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/posts","src/pages/tags","src/components"]
---

## Scope

홈(/)과 글 목록 계열(/posts, /tags/*, /categories/*), 그리고 이들이 공유하는 헤더·사이드바·목록 항목. Visitor mode: Read.

## Audience and job

채용 담당자·면접관이 링크로 들어와 30초 안에 "누구의, 어떤 분야 블로그인지" 파악하고 글을 골라 읽는다. 개발자는 카테고리·태그로 주제를 찾는다.

## Constraints

- 사용자가 category standard(표준 국내 기술 블로그)를 직접 선택. 기준: 토스 기술 블로그, 우아한형제들, velog, leerob.com.
- 프로필 이름·사진·소개는 미정 — 자리 표시를 단정하게 처리하고 지어내지 않는다.
- 프로젝트·사진 메뉴는 해당 페이지가 생길 때 추가.

## Direction contract

THESIS: 국내 기술 블로그의 표준 레이아웃을 그 기준 블로그들 수준의 마감으로. 템플릿(AstroPaper)의 고정폭·남색·주황 흔적을 지우고, 첫 화면에 사람과 분야와 최신 글이 동시에 보이게 한다.

OWN-WORLD: 밝은 바탕 위 무채색 잉크 단계(제목·본문·보조·구분선), 포인트 색 하나는 링크·활성 카테고리·태그 칩에만. Noto Sans KR 본문, 코드만 고정폭. 둥근 칩, 1px 구분선, 그림자 없음. 다크 모드는 같은 위계를 반전.

STORY: 방문자는 왼쪽 프로필로 누구인지 알고, 카테고리 글 수로 주력 분야를 읽고, 오른쪽 목록에서 제목·요약·태그로 글을 골라 들어간다.

FIRST VIEWPORT: 상단 헤더(사이트명 왼쪽, 글·소개·검색·테마 오른쪽). 아래 240px 사이드바(프로필 → 카테고리 목록+글 수 → 태그 칩)와 오른쪽 글 리스트(제목 18~20px 굵게, 요약 2줄, 태그 칩+날짜·카테고리, 오른쪽 작은 썸네일; 썸네일 없으면 폭 전체). 모바일은 사이드바 대신 목록 위 가로 스크롤 카테고리 칩.

FORM: canon — the category standard, chosen by the user over the rolled direction. seed:4704915d7662ddd3

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
