// 소개 페이지(/about) 내용. 이력서 기준으로 정리한다.
export const ABOUT = {
  role: "백엔드 개발자",
  headline: "문제를 먼저 재현해 보고, 근거를 갖고 고르는 백엔드 개발자입니다",
  intro:
    "팀 프로젝트에서 외부 API 응답을 기다리는 동안 DB 커넥션이 묶이는 문제를 만난 뒤로, 짐작으로 고치기보다 같은 상황을 테스트 환경에서 재현해 원인부터 확인합니다. 방법이 여러 개면 장단점을 비교해 지금 상황에 맞는 것을 고르고, 왜 그렇게 정했는지는 PR과 문서로 남깁니다.",
  links: [{ label: "GitHub", href: "https://github.com/Artiffect" }],
  skills: [
    {
      group: "백엔드",
      items: [
        "Java",
        "Kotlin",
        "Spring Boot",
        "Spring Security",
        "JPA",
        "QueryDSL",
      ],
    },
    {
      group: "데이터·메시징",
      items: ["PostgreSQL", "MySQL", "Redis", "Kafka", "Elasticsearch"],
    },
    {
      group: "인프라·테스트",
      items: ["AWS(EC2, S3)", "Docker", "GitHub Actions", "k6"],
    },
  ],
  projects: [
    {
      name: "합방",
      period: "2026.10 – 2026.11",
      summary: "인플루언서 출연 중개와 강의 판매 플랫폼(MSA)",
      role: "회원·검색 담당",
      team: "팀 5명",
      note: "세미 프로젝트 우수팀",
      highlights: "JWT(RS256) 인증, Kafka outbox, Elasticsearch 한국어 검색",
    },
    {
      name: "캠핑가자",
      period: "2026.06 – 2026.07",
      summary: "공공 데이터 기반 캠핑장 예약 플랫폼",
      role: "CI/CD·인프라, 검색, 알림 담당",
      team: "팀 5명",
      highlights:
        "GitHub Actions 배포 자동화, SSE 실시간 알림, QueryDSL 검색 최적화",
    },
    {
      name: "카공데이",
      period: "2026.04 – 2026.05",
      summary: "카공하기 좋은 카페를 찾는 지도 서비스",
      role: "카페 검색, 데이터 수집 배치, Kotlin 전환 담당",
      team: "팀 5명",
      highlights:
        "지도 영역 검색, Spring Batch 수집, Java → Kotlin 단계적 전환",
    },
  ] as {
    name: string;
    period: string;
    summary: string;
    role: string;
    team: string;
    note?: string;
    highlights: string;
  }[],
  education: [
    {
      name: "프로그래머스 데브코스 백엔드 단기심화",
      period: "2026.09 – 2026.11",
    },
    {
      name: "프로그래머스 데브코스 클라우드 기반 백엔드 엔지니어링",
      period: "2026.01 – 2026.07",
    },
    { name: "서경대학교 컴퓨터과학과", period: "졸업" },
  ],
  certifications: [
    { name: "ADsP", org: "한국데이터산업진흥원", date: "2026.11" },
    { name: "SQLD", org: "한국데이터산업진흥원", date: "2025.12" },
    { name: "정보처리기사", org: "한국산업인력공단", date: "2025.12" },
  ],
  blog: "공부한 것, 만든 것, 찍은 것을 기록합니다. 네트워크, 운영체제, 데이터베이스, 자료구조·알고리즘, 보안, Java, Spring, JPA를 매일 한 편씩 정리하고, 찍은 사진은 사진 카테고리에 모읍니다.",
};
