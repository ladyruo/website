$(function () {
	var languageList = {
		'language': {
			'tag1': {
				cn: '首页',
				en: 'Home',
			},
			'tag2': {
				cn: '产品与服务',
				en: 'Products and Services',
			},
			'tag3': {
				cn: '底层联盟链',
				en: 'Union Chain',
			},
			'tag4': {
				cn: '开放平台',
				en: 'Open Platform',
			},
			'tag5': {
				cn: '解决方案',
				en: 'Solutions',
			},
			'tag6': {
				cn: '物流追溯',
				en: 'Logistics Tracing',
			},
			'tag7': {
				cn: '商品溯源',
				en: 'Commodity traceability',
			},
			'tag8': {
				cn: '数字存证',
				en: 'Digital Certificate',
			},
			'tag9': {
				cn: '公益慈善',
				en: 'Public Welfare Charity',
			},
			'tag10': {
				cn: '供应链金融',
				en: 'Supply Chain Finance',
			},
			'tag11': {
				cn: '版权保护',
				en: 'Copyright Protection',
			},
			'tag12': {
				cn: '资讯',
				en: 'News',
			},
			'tag13': {
				cn: '关于我们',
				en: 'About',
			},
			'tag14': {
				cn: '性能优越',
				en: 'Superior Performance',
			},
			'tag15': {
				cn: '性能高达10000+TPS的底层联盟链平台，能满足不同企业级的客户需求。',
				en: 'The underlying unnion chain platform with a performance of up to 10,000 + TPS can meet the needs of different enterprise-level customers.',
			},
			'tag16': {
				cn: '安全可靠',
				en: 'Safe And Reliable',
			},
			'tag17': {
				cn: '多层加密机制、隐私保护机制、业务隔离机制，层层把控数据安全。',
				en: 'Multi-layer encryption mechanism, privacy protection mechanism, business isolation mechanism, and control data security at every layer.',
			},
			'tag18': {
				cn: '扩展灵活',
				en: 'Flexible Expansion',
			},
			'tag19': {
				cn: '多语言多类型虚拟机、共识机制和 看替换的数据库类型等，让底层扩 展更加灵活。',
				en: 'Multi-language and multi-type virtual machines, consensus mechanism, and database types to be replaced, etc., make the underlying extension more flexible.',
			},
			'tag20': {
				cn: '高可用性',
				en: 'High Availability',
			},
			'tag21': {
				cn: '节点动态增删、一键启动联盟链和 可视化监控平台，能无障碍的满足 用户需求。',
				en: 'Dynamic addition and deletion of nodes, one-click activation of the union chain and visual monitoring platform can meet user needs without any obstacles.',
			},
			'tag22': {
				cn: '了解更多 >',
				en: 'more >',
			},
			'tag23': {
				cn: '面向政府、企业的高性能、高安全、可拓展的 企业级联盟链平台。支持节点动态增删、多链 安全隔离、一键上链等特性。',
				en: 'High-performance, high-security, and scalable enterprise-level union chain platform for governments and enterprises. Supports dynamic addition and deletion of nodes, multi-chain security isolation, and one-click chaining.',
			},
			'tag24': {
				cn: '为企业和开发者提供区块链基础设施，支持数 据快速上链、合约部署管理、网络监控、安全 监测查询等。',
				en: 'Provide blockchain infrastructure for enterprises and developers, support fast data upload, contract deployment management, network monitoring, security monitoring and query, etc.',
			},
			'tag25': {
				cn: '为企业、政府等机构提供区块链 + 产业模式切 实可行的底层私链、联盟链和应用场景解决方案。',
				en: 'Provide practical bottom-chain private chain, union chain and application scenario solutions for enterprises, governments and other institutions with blockchain + industry model',
			},
			'tag26': {
				cn: '智子链具有行能优越、安全可靠、扩展灵活、便捷可用的特性，能很好地支撑政府、企业等机构基于区块链的应用诉求。',
				en: "Sophon Chain has the characteristics of superior performance, security and reliability, flexible expansion, convenience and availability, and can well support government, enterprises and other institutions' application requirements based on blockchain.",
			},
			'tag27': {
				cn: '高速交易验证签名',
				en: 'High-speed verification',
			},
			'tag28': {
				cn: '高性能共识算法',
				en: 'High-performance consensus',
			},
			'tag29': {
				cn: '多层加密机制',
				en: 'Multi-layer encryption',
			},
			'tag30': {
				cn: '隐私保护机制',
				en: 'Privacy protection',
			},
			'tag31': {
				cn: '业务隔离机制',
				en: 'Business isolation',
			},
			'tag32': {
				cn: '数据库类型可替换',
				en: 'Replaceable database types',
			},
			'tag33': {
				cn: '可插拔共识机制',
				en: 'Pluggable consensus',
			},
			'tag34': {
				cn: '多语言虚拟机',
				en: 'Multilingual Virtual Machine',
			},
			'tag35': {
				cn: '一键启动联盟链',
				en: 'One-click start alliance chain',
			},
			'tag36': {
				cn: '可视化监控平台',
				en: 'Visual monitoring platform',
			},
			'tag37': {
				cn: '节点动态调整',
				en: 'Node dynamic adjustment',
			},
			'tag38': {
				cn: '开放平台构建于智子链基础实施之上，让您在弹性、开放的云平台上快速构建自己应用。极大的降低您实现区块链底层技术的成本，简化区块链构建和运维工作，同时面对各行业领域场景，满足您的个性化需求。',
				en: 'The open platform is built on the basic implementation of Sophon Chain, allowing you to quickly build your own application on a flexible, open cloud platform. Greatly reduce the cost of implementing the underlying technology of the blockchain, simplify the construction and operation and maintenance of the blockchain, and at the same time face the scenes of various industries to meet your individual needs.',
			},
			'tag39': {
				cn: '智子链开放平台提供完整的基础实施和服务，包括标准接口、合约模板、合约部署、安全监测等',
				en: "Sophon Chain open platform provides complete basic implementation and services, including standard interfaces, contract templates, contract deployment, security monitoring, etc",
			},
			'tag40': {
				cn: '标准接口',
				en: 'Standard interface',
			},

			'tag41': {
				cn: '合约模板',
				en: 'Contract template',
			},
			'tag42': {
				cn: '合约部署',
				en: 'Contract deployment',
			},

			'tag43': {
				cn: '安全检测',
				en: 'Node dynamic adjustment',
			},
			'tag44': {
				cn: '开发者无需关心区块链底层服务，只需将精力投放在应用业务层上。开放平台支持智能合约一键部署。',
				en: "Developers don't need to care about the underlying services of the blockchain, they only need to focus on the application business layer. The open platform supports one-click deployment of smart contracts.",
			},


			'tag45': {
				cn: '根据开发者不同的需求，平台提供多种常用智能合约模板。涵盖金融、房产、汽车、商品、物流、理疗等领域',
				en: 'According to the different needs of developers, the platform provides a variety of commonly used smart contract templates. Covering financial, real estate, automotive, commodity, logistics, physiotherapy and other fields',
			},
			'tag46': {
				cn: '平台为开发者提供合约安全检测服务，避免合约漏洞，造成损失。',
				en: "The platform provides developers with contract security inspection services to avoid contract loopholes and cause losses.",
			},
			'tag47': {
				cn: '利用区块链技术，通过其独特的、不可篡改的分布式账本记录特性与物联网、AI、大数据等技术相结合，对快件实现从源头的寄件、取件、入库、出库、运输、派件和签收的全程可追溯',
				en: "Utilizing blockchain technology, through its unique and immutable distributed ledger record characteristics combined with the Internet of Things, AI, big data and other technologies, the express delivery, origination, pickup, inbound, outbound, Full traceability of shipping, dispatch and receipt",
			},
			'tag48': {
				cn: "全程可追溯",
				en: "Full traceability",
			},
			'tag49': {
				cn: "实现从源头的寄件、取件、入库、出库、运输、派件和签收所有信息上链存储，确保快件全程可追溯。",
				en: "Realize all the information from the source to send, pick up, warehousing, warehousing, transportation, dispatching and signing on-chain storage to ensure the express traceability throughout.",
			},

			'tag50': {
				cn: "打破信息孤岛",
				en: "Breaking Information Silos",
			},
			'tag51': {
				cn: "支持所有快递企业加入，具有统一的标准，资源共享，信息共通。",
				en: "Support all courier companies to join, with unified standards, resource sharing, and common information.",
			},

			'tag52': {
				cn: "数据存证",
				en: "Data Storage",
			},
			'tag53': {
				cn: "区块链的特性确保上链的内容、图片等信息无法篡改，能够为纠纷和理赔提供可信的存证数据。",
				en: "The characteristics of the blockchain ensure that the information and pictures on the chain cannot be tampered with, and can provide credible evidence for disputes and claims.",
			},

			'tag54': {
				cn: "降低监管成本",
				en: "Reduce Regulatory Costs",
			},

			'tag55': {
				cn: "监管部门、保险机构能够从链上随时调取快递、物流信息。大大降低了监管和举证的成本。",
				en: "Supervision departments and insurance institutions can retrieve express and logistics information at any time from the chain. Significantly reduces the cost of supervision and proof.",
			},

			'tag56': {
				cn: "应用案例",
				en: "Application Case",
			},
			'tag57': {
				cn: "链上快递",
				en: "Chain Express",
			},
			'tag58': {
				cn: "区块链+物流",
				en: "Blockchain + Logistics",
			},

			'tag59': {
				cn: "《链上快递》基于智子链底层联盟链开发，将物寄件、收件、入库、运输、派件和签收环节全部信息上链。用户分别使用小程序、APP、管理后台和物联网设备进行信息录入，确保上链信息真实且不可篡改。同时支持物流联盟节点动态加入和信息共享。方便用户、企业、保险机构、政府部门实时查询存证数据。",
				en: "Chain express is based on the development of sophon chain's underlying alliance chain. It links all the information of goods sending, receiving, warehousing, transportation, sending and signing. Users use small programs, apps, management background and Internet of things devices to input information respectively to ensure that the information on the chain is authentic and cannot be tampered with. At the same time, it supports dynamic joining and information sharing of logistics alliance nodes. It is convenient for users, enterprises, insurance institutions and government departments to query the data of certificates in real time.",
			},

			'tag60': {
				cn: "结合区块链和物联网技术，打造可追踪的去信任化商品智慧溯源系统，实现全品类、全过程商品信息上链存储。将商品质量溯源、监管和行业联调整合，以此提升商品生产销售信息的互通和共享效率。",
				en: "Combining blockchain and Internet of Things technologies, we create a traceable and trusted product intelligence source tracing system to realize the entire category and the entire process of commodity information on-chain storage. Combining product quality tracing, supervision, and industry-wide adjustments to improve the efficiency of the communication and sharing of product production and sales information.",
			},
			'tag61': {
				cn: "全程追溯",
				en: "Full Traceability",
			},
			'tag62': {
				cn: "将商品的生成、存储、运输、销售、消费等所有信息上链存储，确保商品全品类、全程可追溯。",
				en: "All information such as the generation, storage, transportation, sales, and consumption of products are stored on the chain to ensure that the entire product category and traceability can be traced.",
			},

			'tag63': {
				cn: "个体溯源",
				en: "Individual Traceability",
			},

			'tag64': {
				cn: "支持最小单位的个体化商品溯源，每个单位都有唯一的身份标识，能够有效的避免以假乱真。",
				en: "It supports the traceability of the individualized products of the smallest unit, and each unit has a unique identity, which can effectively avoid falsehood.",
			},

			'tag65': {
				cn: "智慧溯源",
				en: "Wisdom Traceability",
			},
			'tag66': {
				cn: "通过IOT和AI设备代替人工，确保录入的数据准确无误，让数据接近100%真实可靠。",
				en: "IOT and AI devices are used instead of manual labor to ensure that the data entered is accurate and that the data is close to 100% authentic and reliable.",
			},
			'tag67': {
				cn: "高效监管",
				en: "Efficient Supervision",
			},

			'tag68': {
				cn: "监管部门、保险机构能够从链上随时查看商品溯源信息。大大降低了监管和举证的成本，提高了监管效率。",
				en: "Supervisory departments and insurance institutions can view the product traceability information at any time from the chain. Greatly reduced the cost of supervision and proof, and improved the efficiency of supervision.",
			},

			'tag69': {
				cn: "疫苗溯源",
				en: "Vaccine traceability",
			},

			'tag70': {
				cn: "区块链+溯源",
				en: "Blockchain + Traceability",
			},
			'tag71': {
				cn: "建立数字与物理链接，为每只疫苗赋予唯一的数字ID，将疫苗的全生命周期信息，包括从疫苗前期研发、试验、批准、生产、质检、采购、存储、运输、接种等各环节的信息，与监督部门、质检部门、原材料供应商、疫苗生产企业、销售商、仓储物流企业、医院等各个节点的相关责任人信息都实时登记，达到疫苗链条信息的公开透明、严谨记录、合法规范、公众监督。",
				en: "Establish digital and physical links, assign unique digital IDs to each vaccine, and provide information on the entire life cycle of the vaccine, including information from pre-vaccination R & D, testing, approval, production, quality inspection, procurement, storage, transportation, vaccination, etc. The information is registered in real time with the relevant responsible person information of the supervision department, quality inspection department, raw material supplier, vaccine manufacturing enterprise, seller, storage and logistics enterprise, hospital and other nodes, so as to achieve open, transparent, rigorous records and legality of vaccine chain information. Standardization and public supervision.",
			},
			'tag72': {
				cn: "利用区块链技术，通过其独特的、不可篡改的分布式账本记录特性能很好的解决合同、票据、交易凭证、发票等文本内容作假和重复质押问题。",
				en: "Using blockchain technology, through its unique and tamper proof distributed ledger recording features, it can solve the problem of forgery and repeated pledge of contract, bill, transaction voucher, invoice and other text content.",
			},

			'tag73': {
				cn: "数据同步共享",
				en: "Data Synchronization Sharing",
			},

			'tag74': {
				cn: "文本票据、合同、发票等存证资料电子化并分布式存储在各个同步节点账本，保证数据一致性和可共享。",
				en: "Text documents, contracts, invoices and other documentary data are electronically and distributed stored in the ledger of each synchronization node to ensure data consistency and shareability.",
			},
			'tag75': {
				cn: "隐私保护",
				en: "Privacy Protection",
			},

			'tag76': {
				cn: "采用多重签名机制，确保上链数据经过相关角色签名上链。非公开数据需授权签名后方可查看",
				en: "Multi-signature mechanism is adopted to ensure that the data on the chain is signed and linked by the relevant roles. Non-public data can only be viewed after authorized signature.",
			},

			'tag77': {
				cn: "低公证成本",
				en: "Low Notarization Cost",
			},
			'tag78': {
				cn: "区块链的特性确保上链的数据存证信息无法篡改，能够为司法部门快速提供可信存证。",
				en: "The characteristics of the blockchain ensure that the on-chain data storage information cannot be tampered with, and can quickly provide trusted storage for the judicial department.",
			},

			'tag79': {
				cn: "自定义模板",
				en: "Custom Template",
			},

			'tag80': {
				cn: "提供常用存证智能合约模板，同时支持自定义模板。",
				en: "Provides commonly used smart contract templates for deposit certificates, and supports custom templates.",
			},
			'tag81': {
				cn: "打个欠条",
				en: "Make An IOU",
			},

			'tag82': {
				cn: "区块链+借贷",
				en: "Blockchain + Loan",
			},

			'tag83': {
				cn: "《打个欠条》基于智子链底层联盟链开发的应用，用以解决民间借贷出现抵赖、欠条丢失而造成的纠纷问题。该应用将纸质欠条电子化，并存储到区块链上，确保欠条内容真实且不可篡改，达到可信存证的目的。每笔欠条需要借出和借入双方签名上链，并广播到区块链上，在保护用户隐私基础上，任何授权单位都可在浏览器中查看。",
				en: "'Make An IOU' is based on the application developed by Sophon Chain's underlying alliance chain to resolve disputes caused by non-payment of loans and loss of IOUs. The application digitizes paper IOUs and stores them on the blockchain to ensure that the contents of the IOUs are authentic and cannot be tampered with, to achieve the purpose of credible storage.Each IOU needs to be signed by the lending and borrowing parties to be on the chain and broadcast to the blockchain. On the basis of protecting user privacy, any authorized unit can view it in the browser.",
			},
			'tag84': {
				cn: "区块链数据不可篡改的数据存储特性，天然适合用在社会公益场景。在满足项目参与者隐私保护及其他相关法律法规要求的前提下，有条件地进行公示，方便社会监督，助力社会公益的健康发展。",
				en: "The non-tamperable data storage characteristics of blockchain data are naturally suitable for use in social public welfare scenarios. Under the premise of meeting the privacy protection of project participants and other relevant laws and regulations, conditional publicity is conducted to facilitate social supervision and help the healthy development of social public welfare.",
			},

			'tag85': {
				cn: "受助信息真实有效",
				en: "Information True And Valid",
			},

			'tag86': {
				cn: "受助人的信息将在调研机构核查后，利用身份认证组件记入区块链，保证受助人的个人信息和捐赠申请真实有效。",
				en: "The information of the aided person will be recorded in the blockchain using the identity authentication component after being checked by the research institution to ensure that the personal information and donation application of the aided person are true and valid.",
			},
			'tag87': {
				cn: "信息透明",
				en: "Information Transparency",
			},

			'tag88': {
				cn: "每笔款项流通都被储存在链上，各方均可进行监督，对每一笔捐赠都了如指掌，保证公益项目的公开性和透明性。",
				en: "Every money circulation is stored on the chain, and all parties can monitor it, and every donation is well known to ensure the publicity and transparency of public welfare projects.",
			},

			'tag89': {
				cn: "降低交易成本",
				en: "Lower Transaction Cost",
			},
			'tag90': {
				cn: "不需要第三方机构参与，使用区块链技术的民间公益组织将大大降低经营成本。",
				en: "There is no need for third-party organizations to participate, and civil society organizations using blockchain technology will greatly reduce operating costs.",
			},

			'tag91': {
				cn: "不可伪造",
				en: "Unforgeable",
			},

			'tag92': {
				cn: "受助人信息和每笔善款使用都实时上链存储，一旦上链，所有资料不可篡改和伪造，具有天然可信的特性。",
				en: "Recipient information and the use of each donation are stored on-chain in real time. Once it is on the chain, all information cannot be tampered with and forged, and has natural and reliable characteristics",
			},
			'tag93': {
				cn: "链信筹",
				en: "CTF",
			},

			'tag94': {
				cn: "区块链+慈善",
				en: "Blockchain + Charity",
			},

			'tag95': {
				cn: "《链信筹》基于智子链底层联盟链开发的应用，用于受助人信息不够真实有效、善款去向不透明、公众监管难以查看等传统公益慈善问题。链信筹将受助人、审核机构、执行机构、捐助人、公众、监管部门纳入新的慈善系统，结合区块链技术，打造完全公开透明的新慈善系统。",
				en: "'CTF' is an application developed on the basis of the Sophon Chain underlying alliance chain. It is used for traditional public welfare and charity issues such as the lack of real and effective information of the recipients, the opacity of the funds, and the difficulty of public supervision. Chain Credit raises the recipients, auditing agencies, executive agencies, donors, the public, and regulatory agencies into the new charity system, and combines blockchain technology to create a completely open and transparent new charity system.",
			},
			'tag96': {
				cn: "解决中小企业与金融机构间的信息不对称、推动核心企业信用穿透多级，解决部分中小企业融资难题。",
				en: "Solve the information asymmetry between SMEs and financial institutions, promote core corporate credit penetration through multiple levels, and solve some of the financing difficulties.",
			},
			'tag97': {
				cn: "融资难问题",
				en: "Difficult Financing problem",
			},
			'tag98': {
				cn: "基于区块链的信息能实时共享和可视化，依托核心企业信用背书，能降低中小企业的融资成本，解决融资难问题。",
				en: "Blockchain-based information can be shared and visualized in real time. Relying on the endorsement of core corporate credit can reduce the financing cost of SMEs and solve the problem of difficult financing.",
			},
			'tag99': {
				cn: "构建信任生态",
				en: "Building Trust Ecology",
			},
			'tag100': {
				cn: "通过区块链的价值连接和可信基础，引导更多资金为实体经济服务，推动供应链+金融生态圈健康稳定发展",
				en: "Through the value connection and trusted foundation of the blockchain, guide more funds to serve the real economy, and promote the healthy and stable development of the supply chain + financial ecosystem",
			},
			'tag101': {
				cn: "易监管验真",
				en: "Easy Supervision And Verification",
			},
			'tag102': {
				cn: "不可篡改的分布式数据库真实有效地记录企业间交易信息，为资金方和监管费提供可追溯的资产确权和验真渠道。",
				en: "The non-tamperable distributed database records the transaction information between enterprises truly and effectively, and provides a traceable asset verification and authenticity verification channel for funders and supervision fees.",
			},
			'tag103': {
				cn: "互利共生",
				en: "Mutualism",
			},

			'tag104': {
				cn: "通过区块链价值传递，围绕核心企业，将金融机构和中小企业纳入生态圈，实现互利共生。",
				en: "Through the value transfer of blockchain, financial institutions and small and medium-sized enterprises will be brought into the ecosystem around core enterprises to achieve mutual benefit and symbiosis.",
			},
			'tag105': {
				cn: "链融融",
				en: "Chain Financing",
			},
			'tag106': {
				cn: "区块链+金融",
				en: "Blockchain + Finance",
			},
			'tag107': {
				cn: "《链融融》基于智子链底层联盟链开发的应用，用于在线办理企业应收账款的签发、承兑、保兑、支付、转让、质押、兑付等业务。依托区块链分布式账簿的安全性和共享性，将企业应收账款设为在线支付结算和融资工具，帮助企业更好的去杠杆，降成本，解决融资难问题。",
				en: "Chain financing is based on the application developed by the bottom alliance chain of sophon chain. It is used for online business of issuing, accepting, confirming, paying, transferring, pledging, cashing and so on. Relying on the security and sharing of blockchain distributed account books, enterprise receivables are set as online payment settlement and financing tools to help enterprises better de leverage, reduce costs and solve financing problems.",
			},

			'tag108': {
				cn: "为作品内容生产机构或内容运营企业提供基于区块链技术的一站式线上版权保护解决方案。包含原创登记、版权监测、电子数据采集与公证、司法维权诉讼等",
				en: "Provide one-stop online copyright protection solutions based on blockchain technology for production content production organizations or content operation enterprises. Including original registration, copyright monitoring, electronic data collection and notarization, judicial lawsuits, etc.",
			},
			'tag109': {
				cn: "三“证”合一",
				en: "Three 'Proofs' In One",
			},
			'tag110': {
				cn: "为作者提供区块链版权存证、区块链侵权取证渠道，并可开具作品登记证书。",
				en: "Provide authors with blockchain copyright certification, blockchain infringement evidence collection channels, and issue work registration certificates",
			},
			'tag111': {
				cn: "侵权检测",
				en: "Infringement Detection",
			},
			'tag112': {
				cn: "系统自动将录入的内容进行侵权检测，侵权内容将被拒绝，原创内容则自动上链存储，颁发登记证书。",
				en: "The system will automatically perform infringement detection on the entered content, the infringing content will be rejected, and the original content will be automatically stored on the chain to issue a registration certificate.",
			},
			'tag113': {
				cn: "司法效力",
				en: "Judicial Effect",
			},
			'tag114': {
				cn: "版权存证、交易等全链路信息上链存储。无法篡改和多方透明共享，提高版权的公信力和司法效力。",
				en: "Full-link information such as copyright certificates and transactions are stored on-chain. It cannot be tampered with and transparently shared by multiple parties, which improves the credibility and judicial effectiveness of copyright.",
			},
			'tag115': {
				cn: "举证快捷",
				en: "Quick Proof",
			},

			'tag116': {
				cn: "公众、监管和司法部门能随时从区块链查询证实有效的版权信息。创作者可一键举证直达法院。",
				en: "The public, regulatory, and judicial departments can check the valid copyright information from the blockchain at any time. Creators can go straight to court with one click.",
			},
			'tag117': {
				cn: "版上钉钉",
				en: "Copyright Nailed",
			},
			'tag118': {
				cn: "区块链+版权",
				en: "Blockchain + Copyright",
			},
			'tag119': {
				cn: "《版上钉钉》基于智子链底层联盟链开发的版权保护系统。作者可将作品（不限于文字、图片、声音、视频等形式）电子化并登记录入系统，系统自动进行侵权检测，原创内容将进行版权存证，并提供登记证书。版权授权、版权交易等记录也将上链存储，达到版权可追踪的目的。",
				en: '"Copyright Nailed" is a copyright protection system based on the Sophon Chain underlying alliance chain. Authors can electronically record works (not limited to text, pictures, sound, video, etc.) into the system, the system will automatically perform infringement detection, original content will be subject to copyright registration, and a registration certificate will be provided. Records of copyright authorization and copyright transactions will also be stored on the chain for the purpose of tracking copyright.',
			},

			'tag120': {
				cn: "一览公司要闻、技术成果、行业活动和媒体报道",
				en: "At a glance company news, technological achievements, industry activities and media report",
			},
			'tag121': {
				cn: "关键字：智子链、雾计算、联系我们",
				en: "KeyWords:Sophon Chain,Fog Computing,Contact Us",
			},
			'tag122': {
				cn: "智子链是杭州雾计算科技有限公司旗下联盟链服务平台，专注于提供区块链+产业解决方案，让区块链应用真实落地。我们的使命是让世界更加透明可信！",
				en: "SOPHON CHAIN is a blockchain underlying and service platform under Hangzhou Fog Computing Technology Co., Ltd., focusing on providing solutions such as blockchain + traceability, charity, certificate deposit, supply chain finance, copyright, etc., to make blockchain applications truly landing. Our mission is to make the world more transparent and credible!",
			},
			'tag123': {
				cn: "雾计算科技坐落在区块链技术发展前沿城市——杭州，是一家专业的区块链技术服务公司。公司长期深耕于区块链领域，是区块链技术的先行者和探路者。在钱包开发、分布式评测、联盟链、区块链+产业具有多年的探索和研发经验。2019年，雾计算成为《浙江省区块链技术应用协会》副会长单位和《杭州市区块链应用专业委员会》副主任委员单位，旨在为区块链+行业与产业的发展赋能。",
				en: "Fog Computing Technology is a professional blockchain technology service company located in Hangzhou, a leading city in the development of blockchain technology. The company has been deeply involved in the field of blockchain for a long time and is a pioneer and explorer of blockchain technology. He has many years of exploration and R & D experience in wallet development, distributed evaluation, union chain, blockchain + industry. In 2019, Fog Computing became the Vice Chairman Unit of 'Zhejiang Block chain Technology Application Association' and the Vice Chairman Unit' of Hangzhou Blockchain Application Professional Committee', aiming to empower the development of the blockchain + industry and industry.",
			},
			'tag124': {
				cn: "联系我们",
				en: "Contact Us",
			},
			'tag125': {
				cn: "杭州市滨江区世贸中心2601",
				en: "2601, Shimao center, Binjiang District, Hangzhou",
			},




		}
	}

	$('.top .navbar-toggle').click(function () {
		var fa = $(this).find('.fa');
		var fabars = fa.hasClass('fa-bars');
		if (fabars) {
			fa.removeClass('fa-bars').addClass('fa-close');
			$('.top').css({
				'background-color': '#1976D2'
			});
			$('.top .navbar-collapse').css({
				'background-color': 'rgba(0,0,0,0.7)',
				'z-index': '9999'
			});
		} else {
			fa.removeClass('fa-close').addClass('fa-bars');
			$('.top').css({
				'background': 'none'
			});
		}
	});


	$('.top .panel-heading>a').click(function () {
		var icon = $(this).find('.glyphicon');
		var aria_expanded = $(this).attr('aria-expanded');
		if (aria_expanded == 'false') {
			icon.removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
		} else {
			icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
		}
	})
	$("#gototop").click(function () {
		//$('body,html').animate({scrollTop:0},1000);
		if ($('html').scrollTop()) {
			$('html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		}
		$('body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$(".business-bar  .business-bar-item").click(function (e) {
		var id = $(this).attr('data-id')
		var type = $(this).attr('data-type')
		var terminal = $(this).attr('data-terminal')
		$(this).siblings().removeClass('active'); // 删除其他兄弟元素的样式
		$(this).addClass('active');
		if (terminal && terminal === 'pc') {
			$(this).append($('#' + type).find(".media-icon-arrow"));
		}
		console.log($('#' + type).find(".business-bar-img"))
		$('#' + type).find(".business-bar-img").attr("src", 'imgs/chart_' + id + '.png')
	});
	// 
	$(".nav-language  span").click(function (e) {
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var type = $(this).attr('data-type')
		var path = $(this).attr('data-path')

		switchLanguage(type, path)

	});
	$(document).ready(function () {
		$('.default-open').find('.dropdown-menu').css("display","block")
		$('#navbar').width($(window).width())
		var language = sessionStorage.getItem('language')
		if (language) {
			$("#" + language).click()
		}

	})

	function switchLanguage(type, path) {
		sessionStorage.setItem('language', type)
		var elTags = document.getElementsByName("switch-tag");
		var jsTags = [].slice.call(document.getElementsByName("switch-tag"));
		var language = languageList['language']

		jsTags.forEach(function (el, i) {
			var element = elTags[i]
			var tag = elTags[i].dataset.tag
			element.innerText = language[tag][type]
		})
		if (type === 'en') {
			document.title = 'SOPHON CHAIN-Blockchain technology service platform under FOG COMPUTING technology'
			document.querySelector('meta[name="keywords"]').setAttribute('content', 'Sophon Chain,Fog computing,blockchain technology company,Blockchain underlying platform,Blockchain solution,Blockchain + Industry,Blockchain services');
			document.querySelector('meta[name="description"]').setAttribute('content', 'SOPHON CHAIN is a blockchain underlying and service platform under Hangzhou Fog Computing Technology Co., Ltd., focusing on providing solutions such as blockchain + traceability, charity, certificate deposit, supply chain finance, copyright, etc., to make blockchain applications truly landing. Our mission is to make the world more transparent and credible!');
			if (path === 'index') {
				window.switchHomeNews(1)
			} else if (path === 'news') {
				window.switchNewsList(1)
			} else if (path === 'new_detail') {
				window.switchNewsDetail(1)
			}
		} else if (type === 'cn') {
			document.title = '智子链-雾计算科技旗下区块链技术服务平台'
			document.querySelector('meta[name="keywords"]').setAttribute('content', '智子链，sophon chain，雾计算，区块链技术公司，区块链底层平台，区块链解决方案，区块链+产业，区块链服务');
			document.querySelector('meta[name="description"]').setAttribute('content', '智子链是杭州雾计算科技有限公司旗下区块链底层和服务平台，专注于提供区块链+溯源、慈善、存证、供应链金融、版权等解决方案，让区块链应用真实落地。我们的使命是让世界更加透明可信！');
			if (path === 'index') {
				window.switchHomeNews(0)
			} else if (path === 'news') {
				window.switchNewsList(0)
			} else if (path === 'new_detail') {
				window.switchNewsDetail(0)
			}
		}

	}

})