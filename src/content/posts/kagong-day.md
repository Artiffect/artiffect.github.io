---
title: 카공데이 프로젝트 소개
pubDatetime: 2026-11-22T10:00:00+09:00
description: 카공하기 좋은 카페를 지도에서 찾는 서비스 카공데이에서 카페 검색과 찜, 카페 데이터 수집 배치, Kotlin 전환, CI/CD를 맡은 내용을 정리합니다.
category: kagong-day
tags:
  - project
  - spring-batch
  - kotlin
thumbnail: ./assets/kagong-day/thumb.svg
draft: false
---

카공데이는 카공(카페에서 공부)하기 좋은 카페를 지도에서 찾는 서비스입니다. 2026년 4월부터 5월까지 프로그래머스 데브코스에서 5명이 함께 만들었습니다. 2차 프로젝트에서 Java로 서비스를 만들고, 이어진 3차 프로젝트에서 같은 팀이 백엔드를 Kotlin으로 옮기고 배포까지 했습니다.

저는 카페 검색과 찜, 카페 데이터 수집 배치를 맡았고, 프론트에서는 지도 연동과 기본 화면 틀을 만들었습니다. 3차 프로젝트에서는 Kotlin 전환과 CI/CD, Docker Compose 구성을 맡았습니다.

## 서비스

기존 카페 서비스는 위치와 메뉴 위주라 공부하기 좋은 곳인지는 가 봐야 알 수 있었습니다. 카공데이는 혼잡도, 콘센트, 분리된 공간 같은 카공 환경 정보를 카카오맵 위에 보여 줍니다. 마음에 드는 카페는 찜해 두고, 리뷰를 남기고, 아직 없는 카페는 직접 제보할 수 있습니다. 제보한 카페는 관리자가 승인하면 지도에 올라갑니다.

## 지도 영역 검색과 찜

지도를 움직이면 화면에 보이는 영역 안의 카페가 나옵니다. 지도 화면의 남서쪽, 북동쪽 좌표를 받아 그 범위 안의 카페를 찾는데, 여기에 콘센트, 와이파이, 혼잡도 등 8가지 조건이 붙을 수도 있고 안 붙을 수도 있습니다. 조건 조합마다 쿼리를 따로 만들지 않고 QueryDSL로 들어온 조건만 이어 붙였습니다.

찜은 추가, 취소, 목록 페이징을 만들었고, 이미 찜한 카페를 다시 찜하면 409로 응답했습니다. 카페 상세 응답에는 찜 수와 로그인한 회원이 찜했는지를 함께 담았습니다.

## 카페 데이터 수집 배치

카페 데이터는 카카오 로컬 API로 서울 상권 15곳을 돌며 모았고, 수집 작업은 Spring Batch로 만들었습니다. 이름과 주소가 같으면 같은 카페로 보고 중복 저장을 막았고, 스타벅스나 메가커피 같은 프랜차이즈는 자동으로 분류했습니다.

처음 만든 배치는 Reader가 카카오 API를 직접 불렀습니다. Spring Batch의 chunk 처리에서는 Reader도 트랜잭션 안에서 돌기 때문에, API 응답을 기다리는 동안 DB 커넥션을 계속 붙잡고 있었습니다. 3차 프로젝트에서 이 부분을 고치면서 세 가지 방법을 비교했습니다.

- **타임아웃만 추가:** 무한정 기다리는 일은 막지만, 트랜잭션 안에서 API를 부르는 구조는 그대로입니다.
- **Reader에 `NOT_SUPPORTED` 전파 적용:** Reader에서만 트랜잭션을 끊을 수 있지만 설정이 복잡하고 코드만 봐서는 의도를 알기 어렵습니다.
- **API 호출을 트랜잭션 앞으로 분리:** 카카오 API는 `CafeApiClient`가 먼저 불러 두고, 트랜잭션 안의 `ListItemReader`는 메모리에 있는 목록에서 꺼내기만 합니다.

구조가 가장 분명한 세 번째 방법을 골랐고, API 호출에는 연결 3초, 읽기 5초 타임아웃도 함께 걸었습니다.

## Java에서 Kotlin으로 전환

Kotlin 전환은 한 번에 하지 않고 SecurityConfig와 JwtTokenProvider, 공통 응답, 카페 도메인, 배치, 테스트 순서로 나눠 PR을 올렸습니다. PR마다 빌드가 깨지지 않게 했고, 아직 Java로 남은 코드가 Kotlin 코드를 부를 수 있도록 `@JvmStatic`으로 호환을 맞췄습니다.

## 배포와 모니터링

3차 프로젝트에서는 GitHub Actions로 CI와 CD 워크플로를 만들고, 배포용 `docker-compose.prod.yml`을 작성했습니다. Prometheus와 Grafana로 모니터링 환경도 함께 띄웠습니다. 배포 환경에서 카카오 OAuth 리다이렉트 주소와 API 키 같은 환경변수가 빠져 생긴 문제들도 PR로 하나씩 고쳤습니다.

## 기술

- **백엔드:** Kotlin, Java, Spring Boot, Spring Security, Spring Batch, JPA, QueryDSL
- **데이터:** MySQL(2차), PostgreSQL, Redis(3차)
- **인프라:** AWS EC2, RDS, Nginx, Docker, GitHub Actions, Prometheus, Grafana
- **프론트:** Next.js, React, TypeScript, 카카오맵 SDK

## 링크

- [GitHub (2차, Java)](https://github.com/prgrms-be-devcourse/NBE9-11-2-Team11)
- [GitHub (3차, Kotlin)](https://github.com/prgrms-be-devcourse/NBE9-11-3-Team11)
