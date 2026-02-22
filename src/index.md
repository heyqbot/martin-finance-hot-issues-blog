---
layout: base
title: "Daily Hot Issues"
---

<section aria-label="Intro">
  <p><strong>Latest update: </strong>{{ today.now | readableDate }}</p>
  <p>매일 글로벌 금융·재테크 뉴스 중 의미 있는 5개만 골라 요약·분석합니다. 각 이슈는 정보 출처를 명시하고, 투자자 체크리스트와 함께 실전 관점에서 해석합니다.</p>
</section>

<section aria-label="Issue tracker">
  <h2>오늘의 핫이슈</h2>
  {% for issue in collections.issues %}
  <article class="issue-card" aria-labelledby="issue-{{ issue.fileSlug }}">
    <div class="issue-meta">
      <span>{{ issue.data.issueRank }}위</span>
      <span>{{ issue.data.date | readableDate }}</span>
    </div>
    <h3 id="issue-{{ issue.fileSlug }}">{{ issue.data.title }}</h3>
    <p>{{ issue.data.summary }}</p>
    <div class="tags">
      {% for tag in issue.data.tags %}
        <span class="tag">#{{ tag }}</span>
      {% endfor %}
    </div>
    <div>
      {{ issue.templateContent | safe }}
    </div>
    {% if issue.data.source %}
    <p class="issue-source">출처:
      {% for src in issue.data.source %}
        <a href="{{ src }}" target="_blank" rel="noreferrer">{{ src }}</a>{% if loop.last %}{% else %}, {% endif %}
      {% endfor %}
    </p>
    {% endif %}
  </article>
  {% endfor %}
</section>
