# 금융 핫이슈 블로그 구성안 및 운영 캘린더

## 1. 목표
- 매일 오전(key time: 아시아 기준 08:30) 글로벌 금융·재테크·증시 분야 핫이슈 5개를 분석해 Markdown 포스트로 축적.
- Cloudflare Pages + Eleventy 기반으로 자동 배포 (무료/신뢰성 확보).
- 마틴님이 부담 없이 검토할 수 있도록 메모리/캘린더 기반 보고 체계 마련.

## 2. 플랫폼/자동화 흐름
1. **작성 → Git**: 제가 뉴스를 조사하고 Markdown 포스트를 생성합니다.
2. **Git → Cloudflare Pages**: GitHub 리포지토리 → Cloudflare Pages 빌드 → Dist 배포.
3. **모니터링**: Cloudflare 빌드 로그 + `npm run build` 로컬 빌드 → 실패 시 즉시 리포트.
4. **확장**:
   - GET/POST Workers 영구 링크를 추가해 뉴스 자동 수집.
   - KV/R2에 뉴스 아카이브 저장 → Razor/Claw forms.

## 3. 콘텐츠 구조
| 필드 | 내용 |
| --- | --- |
| title | 이슈 제목 (한글) |
| date | 발표일(ISO) |
| summary | 1줄 핵심 메세지 |
| issueRank | 1~5 순위(숫자) |
| tags | `['금리', '글로벌', 'ETF']` 등 |
| source | 참고 링크 배열 |

포스트 본문은 `## 핵심 요약`, `## 시장 영향`, `## 투자자 체크리스트` 섹션으로 고정.

## 4. 매일 일정
- **07:30**: 주요 뉴스 사이트 · 리서치 보고서 확인.
- **08:00**: 5개 이슈 확정 및 마크다운 템플릿 작성.
- **08:15**: `npm run build` → `dist` 확인 → 이상 없으면 Git 커밋.
- **08:20**: Cloudflare Pages에서 자동 배포 확인 후 Slack/Notion/필요한 채널로 "완료" 또는 "작업중" 보고.
- **12:00**: 시장 상황 변동 시 즉시 알림 (예: 이슈 추가 필요).

## 5. 관리 포인트
- `_data/site.json`과 `_data/today.js`로 메타 유지.
- `issueRank`로 정렬 → `index`에서 상위 5건만 노출(선택 필터 추가 가능).
- SEO/OG/스킴 마크업은 이후 `partials/head.njk`로 확장 예정.

## 6. 향후 확장
1. Slack/Telegram 알림 (Cloudflare Build webhook + automation).
2. Workers KV를 활용한 뉴스 아카이브/검색.
3. 구독자(메일링) 등록 폼 및 `Cloudflare Pages Functions`으로 간단한 AI 요약 제공.
