(() => {
  const copy = {
    en: {
      section: 'Applications', paper: 'Literature Management · Paper Atlas', mail: 'Email Management · Mail Atlas',
      paperBrief: 'A personal PDF library with cloud annotations, bilingual search, an author directory, and citation, author, and topic networks.',
      mailBrief: 'A unified inbox with custom AI categories, saved translations, rich-text composition, and draft recovery.',
      details: 'Project details →', credit: 'Developed with Codex.', back: '← Back to homepage',
      open: 'Open application ↗', skip: 'Skip to content', language: 'Language',
      gallery: 'Interface preview',
      galleryNote: 'Screenshots of the interface with fictional sample data. Select a screenshot to open it at full size.',
      features: 'Features', start: 'Getting started', allApps: 'All applications →', notFound: 'Project not found'
    },
    zh: {
      section: '应用开发', paper: '文献管理系统 · Paper Atlas', mail: '邮箱系统 · Mail Atlas',
      paperBrief: '个人云端 PDF 文献库，支持批注、双语检索、作者库、引文与研究方向图谱。',
      mailBrief: '统一管理多个邮箱，支持自定义 AI 分类、译文保存、富文本写信和草稿恢复。',
      details: '项目详情 →', credit: '基于 Codex 开发。', back: '← 返回个人主页',
      open: '访问应用 ↗', skip: '跳到正文', language: '语言',
      gallery: '界面预览', galleryNote: '界面截图使用虚构的示例数据。点击可查看大图。',
      features: '特色功能', start: '如何开始', allApps: '全部应用 →', notFound: '未找到该项目'
    }
  };
  const urls = {paper: 'https://kmluo98.github.io/paper-atlas/', mail: 'https://kmluo98.github.io/mail/'};
  const detail = document.getElementById('application-detail');
  const select = document.getElementById('app-language');
  const getLanguage = () => {
    try { return localStorage.getItem('site-language') === 'zh' ? 'zh' : 'en'; }
    catch { return 'en'; }
  };
  const make = (tag, value, className) => {
    const node = document.createElement(tag);
    if (value) node.textContent = value;
    if (className) node.className = className;
    return node;
  };
  const list = (items, ordered = false) => {
    const result = make(ordered ? 'ol' : 'ul');
    result.append(...items.map(value => make('li', value)));
    return result;
  };
  function render(lang = getLanguage()) {
    const labels = copy[lang];
    document.querySelectorAll('[data-app-text]').forEach(node => {
      const label = labels[node.dataset.appText];
      if (label) node.textContent = label;
    });
    if (!detail) return;

    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    const id = new URLSearchParams(location.search).get('project');
    const project = id === 'paper' || id === 'mail' ? window.applicationDetails?.[id] : null;
    if (!project) {
      document.getElementById('application-not-found').hidden = false;
      return;
    }
    const content = project[lang];
    document.title = content.title + ' | Kaiming Luo';
    document.getElementById('app-heading').textContent = content.title;
    document.getElementById('app-intro').textContent = content.intro;
    document.getElementById('app-open').href = urls[id];
    document.getElementById('app-highlights').replaceChildren(...list(content.highlights).children);
    document.getElementById('app-steps').replaceChildren(...list(content.steps, true).children);

    document.getElementById('app-gallery').replaceChildren(...project.images.map((asset, index) => {
      const [title, description] = content.gallery[index];
      const path = './assets/app-showcase/' + asset.file;
      const figure = make('figure', null, 'app-figure');
      const link = make('a');
      link.href = path;
      link.target = '_blank';
      link.rel = 'noopener';
      const image = make('img');
      image.src = path;
      image.alt = title;
      image.width = asset.width;
      image.height = asset.height;
      image.loading = 'lazy';
      image.decoding = 'async';
      link.append(image);
      const caption = make('figcaption');
      caption.append(make('strong', title), make('span', description));
      figure.append(link, caption);
      return figure;
    }));

    const featureNav = document.getElementById('app-feature-nav');
    const features = document.getElementById('app-features');
    featureNav.replaceChildren();
    features.replaceChildren();
    for (const [key, title, bullets, resource] of content.features) {
      const link = make('a', title);
      link.href = '#feature-' + key;
      featureNav.append(link);
      const section = make('section', null, 'app-feature');
      section.id = 'feature-' + key;
      const items = list(bullets);
      if (resource) {
        const [label, url] = resource;
        const item = make('li');
        const reference = make('a', label);
        reference.href = url;
        reference.target = '_blank';
        reference.rel = 'noopener';
        item.append(reference);
        items.append(item);
      }
      section.append(make('h3', title), items);
      features.append(section);
    }
    detail.hidden = false;
  }
  render();
  window.addEventListener('languagechange', () => render());
  if (select) {
    select.value = getLanguage();
    select.addEventListener('change', () => {
      const lang = select.value === 'zh' ? 'zh' : 'en';
      try { localStorage.setItem('site-language', lang); } catch {}
      render(lang);
    });
  }
})();

