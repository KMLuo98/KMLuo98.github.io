(() => {
  const activities = [...(window.academicActivities || [])].sort((a, b) => b.date.localeCompare(a.date));
  const lang = () => localStorage.getItem('site-language') || 'en';
  const text = value => typeof value === 'string' ? value : (value?.[lang()] || value?.en || '');
  const el = (tag, cls, value) => { const node = document.createElement(tag); if (cls) node.className = cls; if (value) node.textContent = value; return node; };
  const date = value => new Intl.DateTimeFormat(lang() === 'zh' ? 'zh-CN' : 'en', { year:'numeric', month:'long', day:'numeric', timeZone:'UTC' }).format(new Date(`${value}T00:00:00Z`));
  const card = item => { const link=el('a','activity-card'); link.href=`./activity.html?id=${encodeURIComponent(item.id)}`; const img=document.createElement('img'); img.className='activity-image'; img.src=item.images[0].src; img.alt=text(item.images[0].alt); img.loading='lazy'; link.append(img); const body=el('div','activity-card-content'); body.append(el('time','activity-date',date(item.date)),el('h3','',text(item.title)),el('p','activity-subtitle',text(item.subtitle)),el('span','activity-read-more',lang()==='zh'?'查看详情 →':'Read more →')); link.append(body); return link; };
  const latest = document.querySelector('[data-activities="latest"]'); if (latest && activities.length) latest.replaceChildren(card(activities[0]));
  const archive = document.querySelector('[data-activities="archive"]'); if (archive) archive.replaceChildren(...activities.map(card));
  const detail = document.querySelector('[data-activities="detail"]'); if (!detail) return;
  const item=activities.find(x=>x.id===new URLSearchParams(location.search).get('id')); if(!item){detail.replaceChildren(el('h1','',lang()==='zh'?'活动未找到':'Activity unavailable'));return;}
  const header=el('header','activity-detail-header'); header.append(el('time','activity-date',date(item.date)),el('h1','',text(item.title)),el('p','activity-detail-subtitle',text(item.subtitle))); const gallery=el('div','activity-gallery'); item.images.forEach(photo=>{const figure=el('figure','activity-figure');const img=document.createElement('img');img.className='activity-image';img.src=photo.src;img.alt=text(photo.alt);img.loading='lazy';figure.append(img,el('figcaption','',text(photo.caption)));gallery.append(figure);}); const prose=el('div','activity-prose'); (item.paragraphs[lang()] || item.paragraphs.en).forEach(p=>prose.append(el('p','',p))); detail.replaceChildren(header,gallery,prose);
})();


