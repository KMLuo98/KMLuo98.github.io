(() => {
  const activities=[...(window.academicActivities||[])].sort((a,b)=>b.date.localeCompare(a.date));
  const lang=()=>localStorage.getItem('site-language')||'en';
  const text=v=>typeof v==='string'?v:(v?.[lang()]||v?.en||'');
  const el=(tag,cls,value)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(value)n.textContent=value;return n};
  const date=v=>new Intl.DateTimeFormat(lang()==='zh'?'zh-CN':'en',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(`${v}T00:00:00Z`));
  const row = (item, index) => {
    const link = el('a', 'activity-row');
    link.href = './activity.html?id=' + encodeURIComponent(item.id);
    const number = el('span', 'activity-number', String(index + 1).padStart(2, '0'));
    number.setAttribute('aria-hidden', 'true');
    const body = el('div', 'activity-row-body');
    const timestamp = el('time', 'activity-date', date(item.date));
    timestamp.dateTime = item.date;
    const heading = document.querySelector('[data-activities="archive"]') ? 'h2' : 'h3';
    body.append(timestamp, el(heading, 'activity-row-title', text(item.title)),
      el('p', 'activity-subtitle', text(item.subtitle)),
      el('span', 'activity-read-more', lang() === 'zh' ? '查看详情 →' : 'Read more →'));
    link.append(number, body);
    return link;
  };
  const labels = [...document.querySelectorAll('[data-activity-zh]')].map(node => [node, node.textContent]);
  const renderLists = () => {
    const chinese = lang() === 'zh';
    labels.forEach(([node, english]) => { node.textContent = chinese ? node.dataset.activityZh : english; });
    for (const mode of ['latest', 'archive']) {
      const list = document.querySelector('[data-activities="' + mode + '"]');
      if (list && activities.length) list.replaceChildren(...activities.map(row));
    }
    if (document.querySelector('[data-activities="archive"], [data-activities="detail"]')) {
      document.documentElement.lang = chinese ? 'zh-CN' : 'en';
      if (chinese) document.title = '学术活动 | 罗恺明';
    }
  };
  renderLists();
  window.addEventListener('languagechange', renderLists);
  const detail=document.querySelector('[data-activities="detail"]'); if(!detail)return; const item=activities.find(x=>x.id===new URLSearchParams(location.search).get('id')); if(!item){detail.replaceChildren(el('h1','',lang()==='zh'?'活动未找到':'Activity unavailable'));return}; const header=el('header','activity-detail-header');header.append(el('time','activity-date',date(item.date)),el('h1','',text(item.title)),el('p','activity-detail-subtitle',text(item.subtitle)));const gallery=el('div','activity-gallery');item.images.forEach(photo=>{const fig=el('figure','activity-figure');const img=document.createElement('img');img.className='activity-image';img.src=photo.src;img.alt=text(photo.alt);img.loading='lazy';fig.append(img,el('figcaption','',text(photo.caption)));gallery.append(fig)});const prose=el('div','activity-prose');(item.paragraphs[lang()]||item.paragraphs.en).forEach(p=>prose.append(el('p','',p)));detail.replaceChildren(header,gallery,prose);
})();

