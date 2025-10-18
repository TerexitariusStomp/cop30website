export type Lang = "en" | "pt";

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  en: {
    // Hero
    "hero.alt": "AMAZONE hexagonal tech-tree logo",
    "hero.title": "AMAZONE COOP30",
    "hero.tagline": "In autonomy, we trust",

    // Intro
    "intro.alt": "Wooden boats on a calm river, evoking a sense of tranquility and connection to nature.",
    "intro.p1":
      "The AMAzone COOP30 is a Temporary Autonomous Zone (TAZ) connected to the People's Summit and the Indigenous and Quilombola Camp at COP30, located on the Guamá River, in Belém (PA), from November 5th to 22nd, 2025. We are a living bridge between ancestry and innovation, bringing together cooperatives, associations, startups, artists, activists, scientists, impact investors, and communities in an experience of ",
    "intro.p1.span": "cooperation, regeneration and culture",
    "intro.quote": "Here, integrity is the axis, autonomy is the path, and love is the law.",

    // Vision
    "vision.title": "Vision",
    "vision.body":
      "The AMAzone Village is a socio-cultural experiment that demonstrates, in practice, how good living, permaculture, science, art, technology and spirituality can walk together towards a regenerative future. It is a living demonstration of how the indigenous and intentional communities can inspire a future model based on integrity, autonomy, resilience and interdependence.",

    // Mission
    "mission.title": "*Mission",
    "mission.lead":
      "To activate autonomous territories (lands without borders) and build a phygital (physical + digital) network of Guardians of G.A.I.A. (Great Alliance of Integrity & Autonomy), integrating:",
    "mission.items.0": "Regenerative Design",
    "mission.items.1": "Holistic Management",
    "mission.items.2": "Systemic Thinking",
    "mission.items.3": "Art and Activism",
    "mission.items.4": "Bioeconomy",
    "mission.items.5": "Conscious AI, Web3 & Technology",
    "mission.items.6": "Open Innovation",
    "mission.items.7": "Ancestral Knowledge",

    // Roadmap
    "roadmap.title": "Road Map to AMAzone",
    "roadmap.1.date": "October 23–24 — São Paulo",
    "roadmap.1.content": "PATH to COOP30 — Caravans Gathering Pre-COP at Path Festival.",
    "roadmap.1.link": "https://festivalpath.com.br/",
    "roadmap.2.date": "November 1 — Belém",
    "roadmap.2.content":
      "Launch of the AMAzone.network platform: a gamified phygital platform to map and develop projects in network; promote events, courses, training, crowdfunding, marketplace, and streaming with onchain (Web3) integration.",
    "roadmap.3.date": "November 5–21 — Belém (TAZ)",
    "roadmap.3.content":
      "AMAzone COOP30 — Temporary Autonomous Zone: A Regenerative Future Territory; a cultural, scientific, and regenerative village integrated with the Indigenous Camp and neighboring the People's Summit.",
    "roadmap.4.date": "November 23–29 — Breves — Marajó Island (PAZ)",
    "roadmap.4.content":
      "AMAzone POC30 — Permaculture Autonomous Zone: A permacultural autonomous zone where we will test regenerative practices through 30 PoCs (Proof of Concepts) and present data through a DeSci (Decentralized Science) methodology. Formation of the 0r1Gen Think & DAO Tank and training of the AMAzone Guardians, who will be agents of conservation and restoration of the Amazon Biome, integrated with the creation of the BiomaH Credit, endorsed by Dr. Carlos Nobre.",

    // Platform
    "platform.title": "AMAzone.network Platform",
    "platform.lead":
      "The AMAzone.network is the phygital platform of the movement and the permanent ecosystem of the community.",
    "platform.features": "Main Features:",
    "platform.feature.impact.title": "Social Impact",
    "platform.feature.impact.desc": "Gamified impact social network",
    "platform.feature.map.title": "Map & Develop Projects",
    "platform.feature.map.desc": "Dashboard to map and develop projects, actions, communities and events during and beyond COP30",
    "platform.feature.dao.title": "DAO Governance",
    "platform.feature.dao.desc": "Participatory DAO governance system",
    "platform.feature.exchange.title": "Symbolic Exchange",
    "platform.feature.exchange.desc": "Symbolic exchange and donation system",
    "platform.feature.green.title": "Green Assets",
    "platform.feature.green.desc": "Issuance and commercialization of green assets",
    "platform.feature.market.title": "Marketplace",
    "platform.feature.market.desc": "Bioeconomy marketplace and regenerative project crowdfunding",
    "platform.feature.learning.title": "Digital Learning",
    "platform.feature.learning.desc": "Streaming, online courses, and communities",
    "platform.image.alt": "AMAzone network platform",

    // Thematic Axes
    "axes.title": "Thematic Axes",
    "axes.lead.prefix": "The AMAzone COOP30 program integrates the central themes of ",
    "axes.lead.span": "glocal regeneration",
    "axes.lead.suffix": ":",
    "axes.1": "Ecological Jurisprudence, Rights of Nature, common use of the land, sea and space. Autonomous Beings & Territories",
    "axes.2": "Preservation and Restoration of Forests, Mangroves, Savannas, Oceans, and Ecosystems",
    "axes.3": "Circular Bioeconomy, Commons, Holistic Management, Minimalism & Post-Growth",
    "axes.4": "Bioregional Funds, Natural Capital, Regenerative Finance (ReFi) and Green Asset Generation",
    "axes.5": "Healthy Food Sovereignty, Agriforestry, Syntropic Farming, Regenerative Cattle and Family Agriculture",
    "axes.6": "Liquid Democracy, Gamification (Play2Earn), XR & Blockchain",
    "axes.7": "Art, Culture, and Living Learning (Free Education)",
    "axes.8": "Gender equanimity, youth and social development",
    "axes.9": "Indigenous Culture, Wisdom, Healings, Land and Space rights",
    "axes.10": "Conflict Resolution, Dialogues for Peace (Ahimsa), Roerich Pact and Banner of Peace",
    "axes.11": "Smart, Sustainable & Regenerative Cities, Ecovillages and Neighborhoods",
    "axes.12": "Conscious AI, Data Centers, Space exploration and Quantum Computing",
    "axes.13": "Integral Health, Medicines, Practices, Wellness and Self-Knowledge",
    "axes.14": "Sanitation credits, Water treatment & management",
    "axes.15": "Platform cooperativism, bioregionalism, systemic change and network societies",

    // Activities
    "activities.image.alt": "People in canoes on a river in a forest setting",
    "activities.title": "Activities and Experiences",
    "activities.lead":
      "The AMAzone COOP30 is an immersive gathering that unites body, mind, and spirit, science and art, ancestry and technology. During the event, there will be:",
    "activities.group.learning": "Learning & Knowledge",
    "activities.group.showcase": "Showcase & Innovation",
    "activities.group.culture": "Culture & Healing",
    "activities.item.1": "Workshops, lectures, and masterclasses",
    "activities.item.2": "Vision councils and forums",
    "activities.item.3": "Thematic panels and project launches",
    "activities.item.4": "Fairs, exhibitions, and showcases",
    "activities.item.5": "Regenerative hackathons and impact bootcamps",
    "activities.item.6": "Concerts, ceremonies, rituals, and night experiences",
    "activities.item.7": "Healing spaces and integrative practices",
    "activities.item.8": "Boat rides",
    "activities.item.9": "Videomapping & multisensory dinners and experiences",
    "activities.item.10": "Ecstatic Dance, Contact and Improvisation",

    // Location
    "location.title": "Location: AMAzone Village",
    "location.venue.title": "Venue Details",
    "location.venue.line1": "Venue: Espaço Nautiko — Guamá Riverfront, Belém (PA) — next door to UFPA",
    "location.venue.line2":
      "The venue will be a living TAZ (Temporary Autonomous Zone), featuring camping, glamping, a main stage, restaurants, art gallery, wellness tent, plenary, exhibition booths, multimedia art, and community areas. The site will include ",
    "location.venue.line2.strong": "waste management and greywater treatment",
    "location.camps.title": "Camps & Thematic Villages",
    "location.camps.intro": "The territory will be divided into villages and experience zones, including:",
    "location.image.alt": "Venue image",
    "location.item.1": "Camping & Glamping Zones",
    "location.item.2": "Indigenous Village & Village of Love",
    "location.item.3": "Altar of Intentions — Art Installation for Prayer, Ceremonies & Structured Water",
    "location.item.4": "HUBiomaH — Innovation and Bioeconomy",
    "location.item.5": "Startup Societies Village — Ethical AI, Web3 and DAO",
    "location.item.6": "G.A.I.A. Village — Articulation of Autonomous Territories and Ecovillage Network",
    "location.item.7": "AMAzone Guardians' Camp — Regenerative Leadership Training",

    // Platform imagery alt (additional)
    "platform.image.extra.alt": "Platform additional image",

    // Deliverables
    "deliverables.title": "Deliverables and Legacy",
    "deliverable.1.title": "AMAzone Think & DAO Tank",
    "deliverable.1.desc": "Decentralized governance of the ecosystem",
    "deliverable.2.title": "Regenerative Confederation of G.A.I.A",
    "deliverable.2.desc": "(Great Alliance for Integrity and Autonomy) — Network of cooperatives, associations, and movements",
    "deliverable.3.title": "BiomaH Credits",
    "deliverable.3.desc": "New metric and asset based on holistic land management and data mined by humans and AI",
    "deliverable.4.title": "AMAzone Guardians Network",
    "deliverable.4.desc": "Training and certification of regenerative leaders to protect and originate BiomaH credits and green assets",
    "deliverable.5.title": "AMAzone Cartography — Living Archive of the Amazon Communities",
    "deliverable.5.desc": "Data, art, medicines and stories from the Amazon territories",

    // Pricing
    "pricing.title": "Values and Tickets",
    "pricing.th.category": "Category",
    "pricing.th.value": "Value (U$)",
    "pricing.th.includes": "Includes",

    // Codex
    "codex.title": "AMAzone COOP30 CODEX",
    "codex.subtitle": "17 A.D.A.s — Agreements for Autonomous Development",
    "codex.p1":
      "AMAzone is our Love Village. We believe that every living system — whether a forest, a community, or a code — needs principles to maintain its harmony. Just as Burning Man established its 10 Principles to sustain a culture of autonomy and expression, and the Toltecs left their 5 Agreements as a path to inner integrity, we present the 17 A.D.A.s — Agreements for Autonomous Development: our Love SDGs, the ethical and energetic foundation that sustains the Village.",
    "codex.p2":
      "The A.D.A.s are the code of the human and social software that runs within the territory. They remind us how to act, speak, create, and coexist in a space of freedom, care, and mutual responsibility. For the Temporary Zone of Love and Autonomy (T.A.Z.) to function in peace and wholeness, it is essential that each person is aware and conscious of these agreements, for it is through them that the Village vibrates in harmony, beauty, and truth.",
    "codex.list.1": "Radical Inclusion — Everyone is welcome. Diversity is strength, not separation.",
    "codex.list.2": "Gift — Giving is the foundation of abundance. Generosity creates bonds and strengthens the collective spirit.",
    "codex.list.3": "Radical Self-Reliance — Each person is responsible for themselves. Autonomy begins with inner trust.",
    "codex.list.4": "Radical Self-Expression — Being authentic is honoring your soul. Expressing truthfully is freedom.",
    "codex.list.5": "Communal Effort — Nothing flourishes alone. Everything that exists in the Village is built collectively.",
    "codex.list.6": "Civic Responsibility — Freedom is commitment to the whole. Care for space and for each other.",
    "codex.list.7": "Leave No Trace — Walk the Earth without harming it. Leave the place and people more alive than before.",
    "codex.list.8": "Participation — There are no spectators. The Village exists through active presence.",
    "codex.list.9": "Immediacy — Life happens now. The present is the real time of creation.",
    "codex.list.10": "Integrate Polarities and Activate Integrity — We are light and shadow, strength and vulnerability. Integrate to live in coherence.",
    "codex.list.11": "Be the Legacy — Build, teach, touch hearts, and transform people. Leave legacy, not traces.",
    "codex.list.12": "Radical Autonomy — Love is the Law — Freedom is born from the purity of heart and consciousness.",
    "codex.list.13": "Be Impeccable with Your Word — Speech creates worlds; use it with truth and care.",
    "codex.list.14": "Don't Take Anything Personally — What others say or do reflects them, not you.",
    "codex.list.15": "Don't Make Assumptions — Clarify, ask, and communicate with transparency.",
    "codex.list.16": "Always Do Your Best — Do what you can with presence and love.",
    "codex.list.17": "Be Skeptical but Learn to Listen — Question with discernment, and keep your heart open.",
    "codex.quote":
      "For peace to reign in our Temporary Zone of Love and Autonomy, each of us must honor these agreements with presence, respect, joy, and love.",

    // Closing Quote
    "closing.alt": "AMAzone COOP30 Logo",
    "closing.blockquote": "AMAzone COOP30 is the hope that genuine and regenerative cooperation will come to life in Belém.",
    "closing.banner": "Join-COOPerate-Regenerate",
    "closing.cta": "Come together and let's build this regenerative future in common unity.",

    // Switcher
    "lang.en": "English",
    "lang.pt": "Português",
  },
  pt: {
    // Hero
    "hero.alt": "Logotipo hexagonal tech-tree AMAZONE",
    "hero.title": "AMAZONE COOP30",
    "hero.tagline": "Em autonomia, confiamos",

    // Intro
    "intro.alt": "Barcos de madeira em um rio calmo, evocando tranquilidade e conexão com a natureza.",
    "intro.p1":
      "A AMAzone COOP30 é uma Zona Autônoma Temporária (TAZ) conectada à Cúpula dos Povos e ao Acampamento Indígena e Quilombola na COP30, localizada às margens do rio Guamá, em Belém (PA), de 5 a 22 de novembro de 2025. Somos uma ponte viva entre ancestralidade e inovação, reunindo cooperativas, associações, startups, artistas, ativistas, cientistas, investidores de impacto e comunidades em uma experiência de ",
    "intro.p1.span": "cooperação, regeneração e cultura",
    "intro.quote": "Aqui, a integridade é o eixo, a autonomia é o caminho, e o amor é a lei.",

    // Vision
    "vision.title": "Visão",
    "vision.body":
      "A Vila AMAzone é um experimento sociocultural que demonstra, na prática, como o bem viver, a permacultura, a ciência, a arte, a tecnologia e a espiritualidade podem caminhar juntos rumo a um futuro regenerativo. É uma demonstração viva de como os povos indígenas e as comunidades intencionais podem inspirar um modelo de futuro baseado em integridade, autonomia, resiliência e interdependência.",

    // Mission
    "mission.title": "*Missão",
    "mission.lead":
      "Ativar territórios autônomos (terras sem fronteiras) e construir uma rede figital (física + digital) de Guardiões de G.A.I.A. (Grande Aliança de Integridade & Autonomia), integrando:",
    "mission.items.0": "Design Regenerativo",
    "mission.items.1": "Gestão Holística",
    "mission.items.2": "Pensamento Sistêmico",
    "mission.items.3": "Arte e Ativismo",
    "mission.items.4": "Bioeconomia",
    "mission.items.5": "IA Consciente, Web3 & Tecnologia",
    "mission.items.6": "Inovação Aberta",
    "mission.items.7": "Saberes Ancestrais",

    // Roadmap
    "roadmap.title": "Roteiro para a AMAzone",
    "roadmap.1.date": "23–24 de outubro — São Paulo",
    "roadmap.1.content": "PATH para a COOP30 — Encontro das Caravanas Pré-COP no Festival Path.",
    "roadmap.1.link": "https://festivalpath.com.br/",
    "roadmap.2.date": "1º de novembro — Belém",
    "roadmap.2.content":
      "Lançamento da plataforma AMAzone.network: uma plataforma figital gamificada para mapear e desenvolver projetos em rede; promover eventos, cursos, formações, financiamento coletivo, marketplace e streaming com integração onchain (Web3).",
    "roadmap.3.date": "5–21 de novembro — Belém (TAZ)",
    "roadmap.3.content":
      "AMAzone COOP30 — Zona Autônoma Temporária: Um Território de Futuro Regenerativo; uma vila cultural, científica e regenerativa integrada ao Acampamento Indígena e vizinha à Cúpula dos Povos.",
    "roadmap.4.date": "23–29 de novembro — Breves — Ilha do Marajó (PAZ)",
    "roadmap.4.content":
      "AMAzone POC30 — Zona Autônoma de Permacultura: Uma zona autônoma permacultural onde testaremos práticas regenerativas por meio de 30 PoCs (Provas de Conceito) e apresentaremos dados por uma metodologia DeSci (Ciência Descentralizada). Formação do 0r1Gen Think & DAO Tank e treinamento dos Guardiões da AMAzone, que serão agentes de conservação e restauração do Bioma Amazônico, integrados à criação do Crédito BiomaH, endossado pelo Dr. Carlos Nobre.",

    // Platform
    "platform.title": "Plataforma AMAzone.network",
    "platform.lead":
      "A AMAzone.network é a plataforma figital do movimento e o ecossistema permanente da comunidade.",
    "platform.features": "Principais funcionalidades:",
    "platform.feature.impact.title": "Impacto Social",
    "platform.feature.impact.desc": "Rede social de impacto gamificada",
    "platform.feature.map.title": "Mapear & Desenvolver Projetos",
    "platform.feature.map.desc": "Dashboard para mapear e desenvolver projetos, ações, comunidades e eventos durante e além da COP30",
    "platform.feature.dao.title": "Governança DAO",
    "platform.feature.dao.desc": "Sistema de governança participativa em DAO",
    "platform.feature.exchange.title": "Troca Simbólica",
    "platform.feature.exchange.desc": "Sistema de troca simbólica e doações",
    "platform.feature.green.title": "Ativos Verdes",
    "platform.feature.green.desc": "Emissão e comercialização de ativos verdes",
    "platform.feature.market.title": "Marketplace",
    "platform.feature.market.desc": "Marketplace de bioeconomia e financiamento de projetos regenerativos",
    "platform.feature.learning.title": "Aprendizado Digital",
    "platform.feature.learning.desc": "Streaming, cursos online e comunidades",
    "platform.image.alt": "Plataforma AMAzone",
    "platform.image.extra.alt": "Imagem adicional da plataforma",

    // Thematic Axes
    "axes.title": "Eixos Temáticos",
    "axes.lead.prefix": "O programa AMAzone COOP30 integra os temas centrais da ",
    "axes.lead.span": "regeneração glocal",
    "axes.lead.suffix": ":",
    "axes.1": "Jurisprudência Ecológica, Direitos da Natureza, uso comum da terra, do mar e do espaço. Seres & Territórios Autônomos",
    "axes.2": "Preservação e Restauração de Florestas, Manguezais, Savanas, Oceanos e Ecossistemas",
    "axes.3": "Bioeconomia Circular, Comuns, Gestão Holística, Minimalismo & Pós-Crescimento",
    "axes.4": "Fundos Biorregionais, Capital Natural, Finanças Regenerativas (ReFi) e Geração de Ativos Verdes",
    "axes.5": "Soberania Alimentar Saudável, Agrofloresta, Agricultura Sintrópica, Pecuária Regenerativa e Agricultura Familiar",
    "axes.6": "Democracia Líquida, Gamificação (Play2Earn), XR & Blockchain",
    "axes.7": "Arte, Cultura e Aprendizagem Viva (Educação Livre)",
    "axes.8": "Equanimidade de gênero, juventude e desenvolvimento social",
    "axes.9": "Cultura Indígena, Saberes, Cura, Direitos à Terra e ao Espaço",
    "axes.10": "Resolução de Conflitos, Diálogos pela Paz (Ahimsa), Pacto de Roerich e Bandeira da Paz",
    "axes.11": "Cidades Inteligentes, Sustentáveis & Regenerativas, Ecovilas e Bairros",
    "axes.12": "IA Consciente, Data Centers, Exploração Espacial e Computação Quântica",
    "axes.13": "Saúde Integral, Medicinas, Práticas, Bem-Estar e Autoconhecimento",
    "axes.14": "Créditos de saneamento, tratamento e gestão da água",
    "axes.15": "Cooperativismo de plataforma, biorregionalismo, mudança sistêmica e sociedades em rede",

    // Activities
    "activities.image.alt": "Pessoas em canoas em um rio, em ambiente florestal",
    "activities.title": "Atividades e Experiências",
    "activities.lead":
      "A AMAzone COOP30 é um encontro imersivo que une corpo, mente e espírito, ciência e arte, ancestralidade e tecnologia. Durante o evento, haverá:",
    "activities.group.learning": "Aprendizado & Conhecimento",
    "activities.group.showcase": "Vitrine & Inovação",
    "activities.group.culture": "Cultura & Cura",
    "activities.item.1": "Oficinas, palestras e masterclasses",
    "activities.item.2": "Conselhos de visão e fóruns",
    "activities.item.3": "Painéis temáticos e lançamentos de projetos",
    "activities.item.4": "Feiras, exposições e vitrines",
    "activities.item.5": "Hackathons regenerativos e bootcamps de impacto",
    "activities.item.6": "Shows, cerimônias, rituais e experiências noturnas",
    "activities.item.7": "Espaços de cura e práticas integrativas",
    "activities.item.8": "Passeios de barco",
    "activities.item.9": "Videomapping & jantares e experiências multissensoriais",
    "activities.item.10": "Ecstatic Dance, Contato e Improvisação",

    // Location
    "location.title": "Local: Vila AMAzone",
    "location.venue.title": "Detalhes do Local",
    "location.venue.line1": "Venue: Espaço Nautiko — Orla do rio Guamá, Belém (PA) — ao lado da UFPA",
    "location.venue.line2":
      "A localização será uma TAZ viva (Zona Autônoma Temporária), com camping, glamping, palco principal, restaurantes, galeria de arte, tenda de bem-estar, plenária, estandes de exposição, arte multimídia e áreas de convivência. O espaço incluirá ",
    "location.venue.line2.strong": "gestão de resíduos e tratamento de águas cinzas",
    "location.camps.title": "Acampamentos & Vilas Temáticas",
    "location.camps.intro": "O território será dividido em vilas e zonas de experiência, incluindo:",
    "location.image.alt": "Imagem do local",
    "location.item.1": "Zonas de Camping & Glamping",
    "location.item.2": "Aldeia Indígena & Vila do Amor",
    "location.item.3": "Altar das Intenções - Instalação de Arte para Oração, Cerimônias & Água Estruturada",
    "location.item.4": "HUBiomaH — Inovação e Bioeconomia",
    "location.item.5": "Vila de Sociedades Startup — IA Ética, Web3 e DAO",
    "location.item.6": "Vila G.A.I.A. — Articulação de Territórios Autônomos e Rede de Ecovilas",
    "location.item.7": "Acampamento dos Guardiões da AMAzone — Formação em Liderança Regenerativa",

    // Platform imagery alt (additional)
    "platform.image.extra.alt": "Imagem adicional da plataforma",

    // Deliverables
    "deliverables.title": "Entregas e Legado",
    "deliverable.1.title": "AMAzone Think & DAO Tank",
    "deliverable.1.desc": "Governança descentralizada do ecossistema",
    "deliverable.2.title": "Confederação Regenerativa de G.A.I.A",
    "deliverable.2.desc": "(Grande Aliança de Integridade e Autonomia) — Rede de cooperativas, associações e movimentos",
    "deliverable.3.title": "Créditos BiomaH",
    "deliverable.3.desc": "Nova métrica e ativo baseados em gestão holística da terra e dados minerados por humanos e IA",
    "deliverable.4.title": "Rede de Guardiões da AMAzone",
    "deliverable.4.desc": "Formação e certificação de lideranças regenerativas para proteger e originar créditos BiomaH e ativos verdes",
    "deliverable.5.title": "Cartografia AMAzone — Arquivo Vivo das Comunidades da Amazônia",
    "deliverable.5.desc": "Dados, artes, medicinas e histórias dos territórios amazônicos",

    // Pricing
    "pricing.title": "Valores e Ingressos",
    "pricing.th.category": "Categoria",
    "pricing.th.value": "Valor (U$)",
    "pricing.th.includes": "Inclui",

    // Codex
    "codex.title": "CÓDEX AMAzone COOP30",
    "codex.subtitle": "17 A.D.A.s — Acordos para o Desenvolvimento Autônomo",
    "codex.p1":
      "AMAzone é nossa Vila do Amor. Acreditamos que todo sistema vivo — seja uma floresta, uma comunidade ou um código — precisa de princípios para manter sua harmonia. Assim como o Burning Man estabeleceu seus 10 Princípios para sustentar uma cultura de autonomia e expressão, e os Toltecas deixaram seus 5 Acordos como um caminho para a integridade interior, apresentamos os 17 A.D.A.s — Acordos para o Desenvolvimento Autônomo: nossos ODS do Amor, a base ética e energética que sustenta a Vila.",
    "codex.p2":
      "Os A.D.A.s são o código do software humano e social que roda no território. Eles nos lembram como agir, falar, criar e coexistir em um espaço de liberdade, cuidado e responsabilidade mútua. Para que a Zona Temporária de Amor e Autonomia (T.A.Z.) funcione em paz e inteireza, é essencial que cada pessoa esteja ciente e consciente desses acordos, pois é através deles que a Vila vibra em harmonia, beleza e verdade.",
    "codex.list.1": "Inclusão Radical — Todos são bem-vindos. A diversidade é força, não separação.",
    "codex.list.2": "Presente — Dar é a base da abundância. A generosidade cria laços e fortalece o espírito coletivo.",
    "codex.list.3": "Autossuficiência Radical — Cada pessoa é responsável por si. A autonomia começa na confiança interior.",
    "codex.list.4": "Expressão Pessoal Radical — Ser autêntico é honrar sua alma. Expressar-se com verdade é liberdade.",
    "codex.list.5": "Esforço Coletivo — Nada floresce sozinho. Tudo o que existe na Vila é construído coletivamente.",
    "codex.list.6": "Responsabilidade Cívica — Liberdade é compromisso com o todo. Cuidado com o espaço e com o outro.",
    "codex.list.7": "Não Deixe Rastro — Caminhe pela Terra sem feri-la. Deixe o lugar e as pessoas mais vivos do que antes.",
    "codex.list.8": "Participação — Não há espectadores. A Vila existe pela presença ativa.",
    "codex.list.9": "Imediatismo — A vida acontece agora. O presente é o tempo real da criação.",
    "codex.list.10": "Integrar Polaridades e Ativar a Integridade — Somos luz e sombra, força e vulnerabilidade. Integre para viver em coerência.",
    "codex.list.11": "Seja o Legado — Construir, ensinar, tocar corações e transformar pessoas. Deixe legado, não rastros.",
    "codex.list.12": "Autonomia Radical — O Amor é a Lei — A liberdade nasce da pureza do coração e da consciência.",
    "codex.list.13": "Seja Impecável com a Palavra — A fala cria mundos; use-a com verdade e cuidado.",
    "codex.list.14": "Não Leve Nada para o Lado Pessoal — O que os outros dizem ou fazem reflete eles, não você.",
    "codex.list.15": "Não Faça Suposições — Esclareça, pergunte e comunique com transparência.",
    "codex.list.16": "Dê Sempre o Seu Melhor — Faça o que puder com presença e amor.",
    "codex.list.17": "Seja Cético, mas Aprenda a Ouvir — Questione com discernimento e mantenha o coração aberto.",
    "codex.quote":
      "Para que a paz reine em nossa Zona Temporária de Amor e Autonomia, cada um de nós deve honrar esses acordos com presença, respeito, alegria e amor.",

    // Closing Quote
    "closing.alt": "Logotipo AMAzone COOP30",
    "closing.blockquote": "AMAzone COOP30 é a esperança de que a cooperação genuína e regenerativa ganhe vida em Belém.",
    "closing.banner": "Junte-se-COOPere-Regeneremos",
    "closing.cta": "Venha junto e vamos construir este futuro regenerativo em comunhão.",

    // Switcher
    "lang.en": "English",
    "lang.pt": "Português",
  },
};

