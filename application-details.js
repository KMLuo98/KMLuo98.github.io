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
      highlights: ['论文总结与双语关键词', '学者画像、照片与研究方向', 'PDF 批注与科研图谱'],
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
        ['paper-analysis', 'AI 论文总结与双语关键词', [
          '导入后先提取 PDF 可读取的文字，再调用模型分析。书目信息与科学内容分别保存：题名、作者、机构、DOI 等来自原文，找不到的字段可留空并手动补全。',
          '论文总结按研究问题、模型与方法、主要发现、局限与待核验事项组织。分析只覆盖节选时，会标明范围；扫描页、图像和不可提取的公式需要结合原文查看。',
          '为单篇论文生成 8–10 组中英文关键词，按学科领域、具体问题、方法、现象或结论分层。两种语言都可用于检索；可以单独补全关键词或手动修订。'
        ]],
        ['discovery', '双语检索与发表版本核对', [
          '在库内按标题、作者或关键词模糊搜索，组合期刊多选、发表日期范围和排序；通过成对的中英文关键词与可选的 AI 扩词提高检索覆盖率。',
          '在同一页面检索 Crossref 学术文献或 Bing 公开网页，并可带着同一检索词打开 Google Scholar、Bing 和知网。',
          '文献编辑器支持按 DOI 匹配并审阅元数据；发现可核实的 arXiv 和正式发表对应关系时，保留来源链接，方便对照两个版本。'
        ]],
        ['reader', 'PDF 阅读、批注与补充材料', [
          '桌面端可并排查看 PDF 和文献信息、拖动调整分栏；移动端优先显示文献信息。支持连续滚动、跳转页码和打开原始 PDF。',
          '阅读时可添加云端批注，重新登录后继续查看；支持上传并预览补充材料，在原文与补充材料之间切换。',
          '可编辑提取出的参考文献，便于回到原文核对。'
        ]],
        ['authors', '学者画像与公开指标', [
          '从库内署名建立学者档案，把姓名及别名、论文列表、历年机构、ORCID 和学术主页放在一起。可从论文直接打开作者档案，回查有关联的研究。',
          '可查询 ORCID、Google Scholar、ResearchGate 和机构等公开资料，结合姓名、机构及 ORCID 核对身份，再辅助补齐缺失字段。作者档案可查看公开论文数、引用数、h-index、i10-index 等可核实指标及其来源。',
          '公开指标缺失时留空；库内论文与合作次数按个人文献库统计。查看共同署名时，也可选择加入公开文献检索结果。'
        ]],
        ['author-photos', '自动查找作者照片', [
          '从已关联的学术主页、机构页面和其他公开来源查找头像；结合姓名变体、机构和 ORCID 等已有线索核对身份，匹配可靠时才自动补齐空白头像，并记录出处。',
          '已有头像会保留。没有可靠匹配时可查看带出处的候选图、扩大检索范围后自行确认，或上传自己的图片并裁剪。保存的头像可用于作者档案和作者网络。'
        ]],
        ['author-keywords', '学者关键词与研究方向概括', [
          '汇总同一作者已解析的库内论文，可包含预印本和未发表稿件。模型综合多篇论文的标题、关键词和总结，输出约 10 组双语研究关键词，以及一段简短的研究方向概括。',
          '先提炼总体领域，再归纳反复出现的研究问题、常用方法和现象。这是对库内论文样本的概括；增补论文后可重新生成，也可手动调整关键词。'
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
        ['export', '引用导出与下载', [
          '可为多篇文献导出 BibTeX、RIS、CSL JSON、GB/T 或 APA 文本；PDF 支持逐个下载，也可将选中文献合并为单个 PDF。',
          '文献移入回收站后仍可恢复。'
        ]],
        ['api', 'AI 服务与外部只读 API', [
          '照片与学者档案使用公开资料检索；论文总结、双语关键词与学者研究方向由 DeepSeek 等模型服务处理。这些功能在应用内发起，结果保存到对应记录中。',
          '在「API 与集成」创建可撤销的只读令牌后，自己的脚本可查询和读取文献、获取临时 PDF 下载链接、导出引文或读取引文与作者网络。令牌不具备修改文献或调用 AI 分析的权限。'
        ], ['查看只读 API 文档 ↗', 'https://kmluo98.github.io/paper-atlas/openapi.json']],
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
      highlights: ['AI paper summaries & bilingual keywords', 'Scholar profiles, photos & research interests', 'PDF annotations & research networks'],
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
        ['paper-analysis', 'AI paper summaries and bilingual keywords', [
          'Paper Atlas extracts readable text from a PDF and sends it for model analysis. Bibliographic facts and the research summary are saved separately. Missing details such as a DOI or affiliation can be left blank and corrected later.',
          'Summaries cover the research question, model and methods, main findings, and limitations or points to verify. The reader shows when only part of the document was analyzed. Scans, images, and formulas that could not be extracted still need to be checked in the PDF.',
          'Keyword analysis aims for 8–10 paired Chinese and English terms, organized from field and research question to methods, phenomena, or findings. Both languages are searchable. Keywords can be regenerated separately or edited by hand.'
        ]],
        ['discovery', 'Bilingual search and publication matching', [
          'Search your library by title, author, or keyword with fuzzy matching, multiple journal filters, date ranges, and sorting. Paired Chinese and English terms and optional AI query expansion broaden the search.',
          'Search Crossref for scholarly works or Bing for public web results from the workspace. Carry the same query over to Google Scholar, Bing, or CNKI.',
          'Look up a DOI in the paper editor and review the proposed metadata. Verified links between arXiv and published versions make it easier to check both records.'
        ]],
        ['reader', 'PDF reading, annotations, and supplements', [
          'On desktop, resize the panes to read the PDF beside its metadata. On mobile, paper information comes first. The reader supports continuous scrolling, page jumps, and opening the original PDF.',
          'Save cloud annotations as you read and pick up where you left off after signing in. Attach and preview supplementary files and switch between them and the main paper.',
          'Extracted references are editable so you can check them against the original.'
        ]],
        ['authors', 'Scholar profiles and public metrics', [
          'Build a scholar profile from author records in your library. It brings names and aliases, papers, dated affiliations, ORCID identifiers, and academic profiles together. Open an author’s profile from a paper to explore their related work.',
          'Look up public records such as ORCID, Google Scholar, ResearchGate, and institutional pages. Available name, affiliation, and ORCID evidence helps identify the person before missing fields are filled in. Profiles can show sourced publication and citation counts, h-index, and i10-index when available.',
          'Unverified public metrics are left blank. Library publication and collaboration counts describe the papers in your collection. You can optionally include public literature searches when reviewing coauthorship.'
        ]],
        ['author-photos', 'Automatic author photo matching', [
          'Search linked academic profiles, institutional pages, and other public sources for portraits. The app checks name variants and available affiliation or ORCID evidence before saving a match, and records its source.',
          'Existing photos are kept. If the match is unclear, inspect source-linked candidates, broaden the search and confirm a result, or upload and crop a photo. Saved portraits can appear in author profiles and the author network.'
        ]],
        ['author-keywords', 'Scholar keywords and research interests', [
          'The model uses the titles, keywords, and summaries of analyzed papers by one author in your library, including preprints and unpublished manuscripts. It synthesizes about ten paired Chinese and English keywords and a short description of the research areas represented.',
          'The result highlights recurring questions, methods, and phenomena across the paper set. It reflects the work in the library, and you can regenerate it when more papers are added or edit the keywords yourself.'
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
        ['export', 'Citation export and downloads', [
          'Export selected records as BibTeX, RIS, CSL JSON, GB/T, or APA text. Download individual PDFs or merge selected papers into one file.',
          'Papers placed in the recycle bin can be restored.'
        ]],
        ['api', 'AI services and the external read-only API', [
          'Public-source lookup supports portraits and scholar profiles. Model services such as DeepSeek produce paper summaries, bilingual keywords, and research-interest descriptions. These actions run in the app and save results to the relevant record.',
          'Create a revocable read-only token in API & Integration. Your scripts can use it to retrieve papers, request temporary PDF download links, export references, or read citation and author networks. It cannot modify papers or start AI analysis.'
        ], ['View the API reference ↗', 'https://kmluo98.github.io/paper-atlas/openapi.json']],
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
          '模型结合主题、正文等邮件信息匹配你保存的类别及说明；没有合适类别时保留未分类，也可用已设置的分组辅助整理联系人。',
          '分类结果与邮件一起保存，不用在每次打开时重新计算；手动分类优先。修改类别含义后可重新判断相关邮件，失败可查看原因并重试。'
        ]],
        ['reading', '阅读、翻译与附件预览', [
          '阅读页同时显示正文、收发邮箱、时间及联系人信息。邮件 HTML 在隔离的阅读区呈现，外部图片默认不加载。',
          '翻译聚焦最新正文，避免反复翻译整串引用历史；较长邮件可分段翻译并接续，已完成的译文按邮件和语言保存。',
          '可在应用内预览支持的附件，也可单独下载；移动端先呈现正文，便于快速阅读。'
        ]],
        ['compose', '富文本写信与草稿恢复', [
          '支持富文本排版、签名、To／Cc／Bcc 联系人补全、内嵌图片和拖放附件，发送前可以预览附件。',
          '提供回复要点或已有草稿后，模型可结合原邮件背景生成建议正文；用户审阅后再填入编辑器。发送前可核对发件邮箱、收件人和正文。',
          '支持云端草稿、邮件格式保留和意外退出后的草稿恢复。接入的服务商允许时，也可读取原邮箱草稿和已发送邮件。'
        ]],
        ['contacts', '联系人与往来邮件', [
          '提供卡片及列表视图、姓名索引和可编辑分组，可保存多个邮箱别名、机构、照片与备注。重复联系人可在确认后合并。',
          '在联系人详情查看双向往来邮件，按主题、正文或邮箱查找，免去在各邮箱分别搜索。',
          '可参考来往邮件和邮箱域名核对联系人，也能自己上传、裁剪或修改照片。'
        ]],
        ['contact-lookup', '联系人资料补全与照片匹配', [
          '可用邮箱相关线索、往来邮件和公开资料查询联系人姓名、机构或个人主页。匹配到的信息以带出处的建议呈现，可修改后确认保存。',
          '照片查找可使用公开个人主页、机构页面和其他公开来源。可核对候选图及来源，再选择保存；也可以保留空白或上传自选图片。'
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
          'The model considers message subjects and bodies against your saved category descriptions. It can leave an unmatched message uncategorized or suggest groups for contacts using your saved groups.',
          'Classifications are saved with messages. Manual choices take priority, and changing category meanings can trigger reclassification. Failed requests can be inspected and retried.'
        ]],
        ['reading', 'Read, translate, and preview attachments', [
          'Read the message beside sender, receiving account, date, and contact information. Email HTML is displayed in an isolated reader, with remote images off by default.',
          'Translate the latest message body without reprocessing the quoted thread. Long messages can be translated in resumable sections, and results are saved by message and language.',
          'Preview supported attachments in the app or download them. The mobile reader presents the message body first.'
        ]],
        ['compose', 'Rich-text composition and draft recovery', [
          'Compose with rich formatting, signatures, contact autocomplete for To, Cc, and Bcc, inline images, and drag-and-drop attachments. Preview supported files before sending.',
          'Provide reply points or an existing draft to generate suggested copy in the context of the original message. Review the suggestion before inserting it, and confirm the sending account, recipients, and body before submitting.',
          'Keep formatted cloud drafts and recover interrupted writing. Provider drafts and sent mail can also be accessed where the connection supports them.'
        ]],
        ['contacts', 'Contacts and correspondence', [
          'Browse contacts in card or list view with a name index and editable groups. Store aliases, affiliations, photos, and notes. Review and merge duplicate contacts when needed.',
          'Open a contact’s correspondence to see incoming and outgoing messages together, and search by subject, body, or address.',
          'Use correspondence and address domains as clues when checking a contact, or upload, crop, and replace their photo yourself.'
        ]],
        ['contact-lookup', 'Contact enrichment and photo matching', [
          'Use email clues, correspondence, and public sources to look up a name, affiliation, or profile page. Review and edit source-linked suggestions before saving them.',
          'Find photo candidates on public profiles, institutional pages, and other public sources. Review the candidate and its source before choosing a photo, leave the field empty, or upload your own.'
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

