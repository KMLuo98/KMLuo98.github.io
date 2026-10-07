(() => {
  const select = document.getElementById('language-select');
  if (!select) return;
  const translations = { zh: ['关于', '活动', '研究方向', '出版物', '新闻与科普'], en: ['About', 'Activities', 'Research', 'Publications', 'News & Outreach'] };
  const apply = lang => { document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'; document.querySelectorAll('nav a').forEach((a, i) => { if (translations[lang][i]) a.textContent = translations[lang][i]; }); const map = { 'about-title': lang === 'zh' ? '关于' : 'About', 'research-title': lang === 'zh' ? '研究方向' : 'Research Interests', 'publications-title': lang === 'zh' ? '出版物' : 'Publications', 'service-title': lang === 'zh' ? '学术服务' : 'Academic Service', 'outreach-title': lang === 'zh' ? '新闻与科普' : 'News & Outreach' }; Object.entries(map).forEach(([id, text]) => { const node = document.getElementById(id); if (node) node.textContent = text; }); localStorage.setItem('site-language', lang); };
  const saved = localStorage.getItem('site-language') || 'en'; select.value = saved; apply(saved); select.addEventListener('change', () => apply(select.value));
})();
