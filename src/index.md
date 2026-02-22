---
layout: base
title: "Daily Hot Issues"
---

<header>
  <p>{{ today.now | readableDate }}</p>
  <h1>Financial Hot Issues Daily</h1>
  <p>매일 글로벌 금융·재테크 뉴스 중 의미 있는 5개만 골라 요약·분석합니다.</p>
</header>

{% for issue in collections.issues %}
<article class="issue-card">
  <div class="issue-meta">
    <span>{{ issue.data.issueRank }}위</span>
    <span>{{ issue.data.date | readableDate }}</span>
  </div>
  <h3>{{ issue.data.title }}</h3>
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
  <p style="margin-top:16px; font-size:0.8rem; color:rgba(255,255,255,0.6);">출처:
    {% for src in issue.data.source %}
      <a href="{{ src }}" target="_blank" rel="noreferrer">{{ src }}</a>{% if loop.last %}{% else %}, {% endif %}
    {% endfor %}
  </p>
  {% endif %}
</article>
{% endfor %}
