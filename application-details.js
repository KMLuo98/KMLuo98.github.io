// Illustrations are screenshots of the deployed interfaces loaded with fictional data.
window.applicationDetails = {
  paper: {
    images: [
      {file: 'paper-library.webp', width: 1440, height: 910},
      {file: 'paper-network.webp', width: 1440, height: 910}
    ],
    zh: {
      title: '文献管理系统 · Paper Atlas',
      intro: '面向科研阅读与写作的个人云端工作台。导入论文后，可以在同一处完成资料整理、双语检索、PDF 阅读与批注、研究关系分析和引用导出。',
      highlights: ['批量导入与 AI 解析', '原文阅读与云端批注', '引文、作者与主题网络'],
      gallery: [
        ['个人文献库', '示例文献库中的双语关键词、期刊与日期筛选、收藏和解析状态。'],
        ['引文网络', '根据示例文献之间的引用关系绘图，右侧可在公开引文计数和库内引文计数之间切换。']
      ],
      features: [
        ['library', '导入与整理', [
          '支持多选 PDF、文件夹和 ZIP 批量导入；逐篇处理，单篇解析失败时保留原文件，也可随后重试。',
          'AI 辅助提取标题、作者、机构、期刊、发表时间、DOI、参考文献和研究关键词。可手动修订与补全，也能保留未发表稿件。',
          '支持标签、收藏、列表与卡片视图，并按 DOI 或规范化标题识别潜在重复记录，便于检查。'
        ]],
        ['discovery', '双语检索与发表版本核对', [
          '在库内按标题、作者或关键词模糊搜索，组合期刊多选、发表日期范围和排序；通过成对的中英文关键词与可选的 AI 扩词提高检索覆盖率。',
          '在同一页面检索 Crossref 学术文献或 Bing 公开网页，并可带着同一检索词打开 Google Scholar、Bing 和知网。',
          '文献编辑器支持按 DOI 匹配并审阅元数据；发现可核实的 arXiv 和正式发表对应关系时，保留来源链接，方便对照两个版本。'
        ]],
        ['reader', 'PDF 阅读、批注与补充材料', [
          '桌面端可并排查看 PDF 和文献信息、拖动调整分栏；移动端优先显示文献信息。支持连续滚动、跳转页码和打开原始 PDF。',
          '阅读时可添加云端批注，重新登录后继续查看；支持上传并预览补充材料，在原文与补充材料之间切换。',
          '结构化总结按研究问题、方法、主要结论和局限组织；可编辑提取出的参考文献，便于回到原文核对。'
        ]],
        ['authors', '作者库与合作分析', [
          '从个人文献库汇集作者及其论文，支持按姓名和别名检索与核对 ORCID；可补充机构及时间、照片、研究关键词和公开主页。',
          '在可核实的来源基础上显示公开论文数、引用数、h-index 等指标及来源。对身份或指标无法确认的记录保留空缺，避免将同名作者合并。',
          '查看所选作者的共同署名情况与合作次数，并可按需加入公开检索结果；统计以已纳入的文献及证据为范围。'
        ]],
        ['networks', '三个互补的网络视图', [
          '引文网络：按所选文献的 DOI 或完整标题匹配引用关系，并将库内被引数和公开索引计数分开显示。',
          '作者网络：用共著边展示合作关系，可查看不同合作群体、突出核心作者，并按需打开作者头像显示。',
          '研究方向网络：根据论文标题及可用的摘要或总结识别主题相近的论文，可查看主题区域和相邻论文。图谱支持选文范围、拖动、缩放及 SVG 导出。'
        ]],
        ['assistant', '带文献库上下文的 AI 对话', [
          '全站助手与独立对话页使用同一套个人会话，可按任务切换、接着上次的对话阅读和整理资料。',
          '可自行开启文献库检索，也可提供文件或图片作为上下文；适合比较论文的方法、整理阅读笔记和梳理研究问题。',
          '支持导出对话；模型生成的总结和判断适合作为线索，重要结论可回到原文核对。'
        ]],
        ['export', '引用导出、下载与集成', [
          '可为多篇文献导出 BibTeX、RIS、CSL JSON、GB/T 或 APA 文本；PDF 支持逐个下载，也可将选中文献合并为单个 PDF。',
          '提供可撤销的只读 API 令牌，供自己的工具查询文献或获取引用数据。文献移入回收站后仍可恢复。'
        ]],
        ['workspace', '跨设备与个人设置', [
          '登录后访问独立的云端文献库、资料与批注。界面可切换中文和英文，支持字号和外观调整。',
          '图片扫描型 PDF 可能需要 OCR；解析覆盖范围与状态可在文献详情查看。公开引文与作者指标取决于可用数据源。'
        ]]
      ],
      steps: ['导入一批 PDF，核对自动提取的标题、关键词和发表信息。', '用筛选和阅读器整理研究主题，为关键页添加批注。', '在图谱中找相关论文和作者，再导出写作所需的引用。']
    },
    en: {
      title: 'Literature Management · Paper Atlas',
      intro: 'A personal research workspace for organizing a PDF library, reading and annotating papers, finding connections between studies, and preparing references for writing.',
      highlights: ['Batch import & AI extraction', 'PDF reader & cloud annotations', 'Citation, author & topic networks'],
      gallery: [
        ['Personal library', 'Sample papers show bilingual keywords, journal and date filters, favorites, and analysis status.'],
        ['Citation network', 'Links connect papers in a sample library. The ranking panel switches between public citation counts and citations within the library.']
      ],
      features: [
        ['library', 'Import and organize papers', [
          'Import multiple PDFs, folders, or ZIP archives. Papers are processed individually, so a failed analysis leaves the original file in place and can be retried.',
          'AI assists with extracting titles, authors, affiliations, journals, publication dates, DOIs, references, and research keywords. You can edit the records and keep unpublished papers in the same library.',
          'Organize papers using tags, favorites, and list or card views. Potential duplicates can be flagged by DOI or normalized title for review.'
        ]],
        ['discovery', 'Bilingual search and publication matching', [
          'Search your library by title, author, or keyword with fuzzy matching, multiple journal filters, date ranges, and sorting. Paired Chinese and English terms and optional AI query expansion broaden the search.',
          'Search Crossref for scholarly works or Bing for public web results from the workspace. Carry the same query over to Google Scholar, Bing, or CNKI.',
          'Look up a DOI in the paper editor and review the proposed metadata. Verified links between arXiv and published versions make it easier to check both records.'
        ]],
        ['reader', 'PDF reading, annotations, and supplements', [
          'On desktop, resize the panes to read the PDF beside its metadata. On mobile, paper information comes first. The reader supports continuous scrolling, page jumps, and opening the original PDF.',
          'Save cloud annotations as you read and pick up where you left off after signing in. Attach and preview supplementary files and switch between them and the main paper.',
          'Structured summaries cover the question, methods, findings, and limitations. Extracted references are editable so you can check them against the original.'
        ]],
        ['authors', 'Author directory and collaboration analysis', [
          'Browse authors and their papers from your library. Search by name or alias, check ORCID identities, and add dated affiliations, photos, research keywords, or public profiles.',
          'View source-linked metrics such as publication and citation counts and h-index when a reliable match is available. Unresolved identities and missing metrics stay unresolved rather than being assigned to a namesake.',
          'Review shared publications and coauthorship counts for selected researchers, with optional public lookup. Results reflect the papers and evidence included in the analysis.'
        ]],
        ['networks', 'Three views of the research network', [
          'Citation view: match references by DOI or full title. Public counts and citations within the selected library are shown separately.',
          'Author view: explore coauthorship links and groups, highlight core authors, and show author photos when available.',
          'Research topics: use titles and available abstracts or summaries to see related papers and topic regions. Network views support paper selection, dragging, zooming, and SVG export.'
        ]],
        ['assistant', 'AI conversations with library context', [
          'The floating assistant and dedicated chat page share personal conversations. Switch between tasks and resume earlier reading or research discussions.',
          'Choose whether to retrieve from your library, or supply files and images as context. Use the assistant to compare approaches, organize notes, or work through a research question.',
          'Export conversations for later use. Check important claims in generated summaries against the original papers.'
        ]],
        ['export', 'Citation export, downloads, and integration', [
          'Export selected records as BibTeX, RIS, CSL JSON, GB/T, or APA text. Download individual PDFs or merge selected papers into one file.',
          'Use revocable read-only API tokens to retrieve records or citations from your own tools. Papers placed in the recycle bin can be restored.'
        ]],
        ['workspace', 'Across devices and languages', [
          'Sign in to access your own cloud library, profile, and annotations. The interface supports English and Chinese, with adjustable typography and appearance.',
          'Scanned PDFs may require OCR. Check paper details for analysis status and coverage. Public citation and author metrics depend on the available sources.'
        ]]
      ],
      steps: ['Import a set of PDFs and review the extracted titles, keywords, and publication records.', 'Use filters and the reader to organize a topic, then annotate key pages.', 'Follow related papers and authors in the networks and export the references you need.']
    }
  },
  mail: {
    images: [
      {file: 'mail-inbox.webp', width: 1440, height: 910},
      {file: 'mail-reader.webp', width: 1440, height: 1190}
    ],
    zh: {
      title: '邮箱系统 · Mail Atlas',
      intro: '将多个邮箱收进同一个私人工作台。可集中筛选和处理来信、查看联系人往来、翻译正文、撰写富文本邮件，并保留可跨设备访问的草稿和归档。',
      highlights: ['多邮箱统一收件箱', '可调整的 AI 分类与翻译', '富文本写信与草稿恢复'],
      gallery: [
        ['统一收件箱', '示例来信展示不同邮箱的标签、联系人、分类、未读状态和筛选工具。'],
        ['邮件阅读与翻译', '示例邮件的原文与联系人信息并排显示，可在同页查看已保存的译文。']
      ],
      features: [
        ['accounts', '多邮箱接入与同步', [
          '使用与 Paper Atlas 通用的账户登录，按需授权个人、学校或工作邮箱。连接方式包括 IMAP/SMTP，以及适用的 Gmail 和 Outlook／Microsoft 365 授权方式。',
          '为邮箱设置名称和颜色，在全部邮箱和单个邮箱间切换。可配置同步检查间隔，手动刷新或按批次加载更早的邮件。',
          '处理收件箱、已发送、草稿、归档、垃圾邮件与其他可用文件夹。同步受网络、授权和服务商支持限制，连接问题可在设置查看。'
        ]],
        ['inbox', '快速筛选与处理来信', [
          '按主题、正文、发件人、邮箱、类别、未读或星标筛选。点击未读提示可定位未读邮件，收件箱可隐藏广告。',
          '类别和收发统计可用作筛选入口，便于查看收到、发出、未读及未回复的邮件。列表列宽可调整，并记住当前浏览器的设置。',
          '支持多选处理、星标、归档和移入垃圾箱，误删后可从垃圾箱恢复。'
        ]],
        ['classification', '可自定义的 AI 分类', [
          '可自行增删类别、编写分类说明，设置颜色和图标并拖动排序，让分类更适合个人工作习惯。',
          '分类结果与邮件一起保存，不用在每次打开时重新计算；手动分类优先。修改类别含义后可重新判断相关邮件，失败可查看原因并重试。'
        ]],
        ['reading', '阅读、翻译与附件预览', [
          '阅读页同时显示正文、收发邮箱、时间及联系人信息。邮件 HTML 在隔离的阅读区呈现，外部图片默认不加载。',
          '翻译聚焦最新正文，避免反复翻译整串引用历史；较长邮件可分段翻译并接续，已完成的译文按邮件和语言保存。',
          '可在应用内预览支持的附件，也可单独下载；移动端先呈现正文，便于快速阅读。'
        ]],
        ['compose', '富文本写信与草稿恢复', [
          '支持富文本排版、签名、To／Cc／Bcc 联系人补全、内嵌图片和拖放附件，发送前可以预览附件。',
          'AI 可以协助起草和润色，用户审阅后再填入编辑器；发送前可核对发件邮箱、收件人和正文。',
          '支持云端草稿、邮件格式保留和意外退出后的草稿恢复。接入的服务商允许时，也可读取原邮箱草稿和已发送邮件。'
        ]],
        ['contacts', '联系人与往来邮件', [
          '提供卡片及列表视图、姓名索引和可编辑分组，可保存多个邮箱别名、机构、照片与备注。重复联系人可在确认后合并。',
          '在联系人详情查看双向往来邮件，按主题、正文或邮箱查找，免去在各邮箱分别搜索。',
          '可根据公开来源辅助查找联系人资料或照片，建议有出处可核对，也支持自己上传、裁剪或修改照片。'
        ]],
        ['archive', '导出邮件与归档', [
          '可导出当前、选中或筛选范围内的记录。JSON 和 CSV 适合整理正文及元数据，EML 保留单封原件，MBOX 适合批量归档。',
          '桌面、平板和手机可访问已同步邮件与个人设置；实际收发需要有效的邮箱授权，AI 功能也依赖已配置的模型服务。'
        ]]
      ],
      steps: ['登录后连接邮箱，为每个账户设置便于识别的标签和颜色。', '同步来信，设置分类规则，再用筛选与未读定位查看重点邮件。', '在阅读页翻译或回顾往来，撰写回复，或将需要保留的邮件导出归档。']
    },
    en: {
      title: 'Email Management · Mail Atlas',
      intro: 'A private workspace for managing several mailboxes together. Filter incoming mail, review correspondence, translate messages, compose rich-text replies, and keep drafts and archives accessible across devices.',
      highlights: ['Unified inbox', 'Configurable AI classification & translation', 'Rich-text editor & draft recovery'],
      gallery: [
        ['Unified inbox', 'Sample messages show account labels, senders, categories, unread status, and filters.'],
        ['Reading and translation', 'A sample message appears alongside contact details, with a saved translation available in the same view.']
      ],
      features: [
        ['accounts', 'Connected mailboxes and synchronization', [
          'Sign in with the same account as Paper Atlas and authorize personal, school, or work mailboxes as needed. Connection options include IMAP/SMTP and compatible Gmail or Outlook/Microsoft 365 authorization.',
          'Give each mailbox a label and color. Switch between all accounts and a single mailbox, set the check interval, refresh manually, or load older messages in batches.',
          'Access incoming, sent, draft, archived, junk, and other available folders. Sync timing depends on the network, authorization, and provider support; connection issues appear in settings.'
        ]],
        ['inbox', 'Find and process messages quickly', [
          'Filter by subject, body, sender, mailbox, category, unread status, or stars. Jump to unread mail from the unread indicator or hide advertising messages in the inbox.',
          'Use category and correspondence counts to filter received, sent, unread, or unanswered messages. Adjust columns to suit your screen and retain those widths in the browser.',
          'Select multiple messages to organize, star, archive, or move them to the trash. Trashed messages can be recovered.'
        ]],
        ['classification', 'Custom AI classification', [
          'Create your own categories and descriptions. Choose colors and icons, then reorder categories around your workflow.',
          'Classifications are saved with messages. Manual choices take priority, and changing category meanings can trigger reclassification. Failed requests can be inspected and retried.'
        ]],
        ['reading', 'Read, translate, and preview attachments', [
          'Read the message beside sender, receiving account, date, and contact information. Email HTML is displayed in an isolated reader, with remote images off by default.',
          'Translate the latest message body without reprocessing the quoted thread. Long messages can be translated in resumable sections, and results are saved by message and language.',
          'Preview supported attachments in the app or download them. The mobile reader presents the message body first.'
        ]],
        ['compose', 'Rich-text composition and draft recovery', [
          'Compose with rich formatting, signatures, contact autocomplete for To, Cc, and Bcc, inline images, and drag-and-drop attachments. Preview supported files before sending.',
          'Ask AI for a draft or wording suggestions and review the text before inserting it. Confirm the sending account, recipients, and body before submitting the message.',
          'Keep formatted cloud drafts and recover interrupted writing. Provider drafts and sent mail can also be accessed where the connection supports them.'
        ]],
        ['contacts', 'Contacts and correspondence', [
          'Browse contacts in card or list view with a name index and editable groups. Store aliases, affiliations, photos, and notes. Review and merge duplicate contacts when needed.',
          'Open a contact’s correspondence to see incoming and outgoing messages together, and search by subject, body, or address.',
          'Review suggestions for profile details or portraits against public sources, or upload and crop your own contact photos.'
        ]],
        ['archive', 'Export and archive messages', [
          'Export the current message, a selection, or results in scope. JSON and CSV capture content and metadata; EML preserves a single original; MBOX is suited to batch archives.',
          'Use synchronized messages and settings across desktop, tablet, and phone. Sending and receiving require valid mailbox authorization, and AI features depend on the configured model service.'
        ]]
      ],
      steps: ['Sign in, connect your mailboxes, and set recognizable labels and colors.', 'Sync incoming mail, define categories, and use filters to find messages that need attention.', 'Translate or review correspondence, draft a reply, or export messages for archiving.']
    }
  }
};

