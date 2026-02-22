# Financial Hot Issues Daily Blog

| 항목 | 설명 |
| --- | --- |
| 목적 | 마틴님을 위한 글로벌 금융·재테크/증시 핫이슈를 매일 5건 선별하여 분석하고, Cloudflare Pages를 통해 신속하게 배포하는 블로그 운영입니다. |
| 플랫폼 | `Eleventy` 정적 사이트 → GitHub 저장소 → Cloudflare Pages (무료) │ 글로벌 CDN · TLS · 자동 배포 · Workers 확장 가능 |
| 콘텐츠 | 매일 오전 주요 뉴스 5건(핵심 요약/시장 영향/투자자 체크리스트) · Markdown 기반 · SEO/OG 메타 포함 |

## 구성 요소
1. **Eleventy 정적 사이트** (`src/`)
   - `src/_includes/layouts/base.njk`: 전체 페이지 레이아웃, 시각 스타일.
   - `src/content/issues/*.md`: 각 이슈(2026-02-22 기준 5건 예시) → front matter에 `issueRank`, `tags`, `source` 명시.
   - `src/index.md`: 최신 이슈를 순차적으로 보여주는 대시보드.
   - `src/_data/site.json` + `src/_data/today.js`: 사이트 정보 및 기준 날짜.
2. **빌드/배포**
   - `package.json`: Eleventy + RSS/syntaxhighlight 플러그인 · `npm run build` 호출.
   - `dist/`: 빌드 결과물 (Cloudflare Pages에 업로드).
3. **Cloudflare Pages**
   - GitHub 저장소와 연동 → `npm install` + `npm run build` 자동 실행 → `dist/` 배포.
   - 무료 TLS, CDN, WAF 조정, 커스텀 도메인/페이지 룰 바로 설정.
   - (향후) Workers + KV/R2로 뉴스 캐싱·구독폼 확장 가능.

## 콘텐츠 작성 워크플로
1. **뉴스 수집 (매일 오전)**
   - 한경/매경/Reuters/Bloomberg/FT 등에서 글로벌 증시·금리·통화·정책·기술 분야 중 오늘 주목할 만한 5가지 이슈 선정.
   - 각 이슈에 대해 ① 핵심 요약 ② 시장 영향 ③ 개인 투자자 체크리스트 ④ 참고 링크로 정리.
2. **Markdown 템플릿**
   - `src/content/issues/YYYY-MM-DD-issue-XX.md` 형식. 반드시 `issueRank`로 1~5위를 명시.
   - `tags`, `summary`, `source` 필드로 검색/출처 확보.
3. **검수/배포**
   - 작성 완료 후 로컬에서 `npm run build` → `dist/` 확인.
   - GitHub에 커밋/푸시 → Cloudflare Pages에서 자동 빌드.
4. **운영보고**
   - 빌드/배포 상태, 다음 예고 이슈, 필요 자료 등을 Notion/Notion-like 문서로 공유.
   - 이상 징후(빌드 실패, 스크립트 에러)는 즉시 “작업중” 메시지를 보내드립니다.

## Cloudflare Pages 세팅 가이드
1. GitHub 저장소 생성 (`finance-hot-issues-blog` 권장).
2. Cloudflare Pages에서 "Connect to Git" 선택 → 저장소 선택.
3. Build 설정
   - Build command: `npm run build`
   - Build output directory: `dist`
4. 배포 이후 도메인 연결, 페이지 룰, WAF/Easy HTTPS 적용.
5. 배포 실패 시 Cloudflare 빌드 로그 확인/패키지 충돌 조정:
   - Node 버전: `^18` 이상 권장 → `package.json`에 `engines` 추가 가능.

## 다음 단계
- 클라우드플레어 계정과 GitHub 연결 (제가 대리로 연결도 가능합니다).
- 콘텐츠 캘린더 · 주간 주제(예: 금융포럼 일정) 설정.
- 향후 Workers + KV를 통해 실시간 뉴스 요약 또는 구독자 메일 발송 자동화.
