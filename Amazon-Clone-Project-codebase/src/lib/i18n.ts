export type Lang = "en" | "pt";

type Dict = Record<string, string>;

export const translations: Record<Lang, Dict> = {
  en: {
    // Hero
    "hero.alt": "AMAzone hexagonal tech-tree logo",
    "hero.title": "AMAzone COOP30",
    "hero.tagline": "In autonomy, we trust!",

    // Intro
    "intro.alt": "Wooden boats on a calm river, evoking a sense of tranquility and connection to nature.",
    "intro.p1":
      "AMAzone COOP30 is a Temporary Autonomous Zone (TAZ) located in the FREEzone, in Praça da Bandeira, in Belém (PA), from November 14th to 22nd, 2025. It is a space for free interaction and cultural expression, where the Spirit of Dialogue and Time will be our masters for nine days. Through discussion circles and the co-creation of regenerative solutions, we will slow down our daily rush to listen to ourselves, feel, and reconnect with ourselves, with each other, and with Nature. We will bring together cooperatives, associations, startups, artists, activists, scientists, entrepreneurs, impact investors, and traditional communities in an experience of self-management, cooperation, regeneration, innovation, and a culture of P.E.A.C.E. AMAzone — here integrity is the axis, autonomy is the path, regeneration is the destination, and love is the law.",
    "intro.p1.span": "",
    "intro.quote": "",

    // Vision
    "vision.title": "Vision",
    "vision.body":
      "AMAzone COOP30 is a sociocultural experiment that demonstrates, in practice, how well-being, permaculture, science, art, technology, and spirituality can walk together toward a regenerative future. It is a living demonstration of how intentional communities can inspire a model for the future based on integrity, autonomy, resilience, interdependence, and well-being.",

    // Mission
    "mission.title": "Mission",
    "mission.lead":
      "To activate autonomous territories (lands without borders) and build a phygital network (physical + digital) of G.A.I.A. Guardians — Great Alliance of Integrity & Autonomy — by integrating:",
    "mission.items.0": "Regenerative Design",
    "mission.items.1": "Holistic Management",
    "mission.items.2": "Systemic Thinking",
    "mission.items.3": "Art and Activism",
    "mission.items.4": "Bioeconomy",
    "mission.items.5": "Conscious AI, Web3 & Technology",
    "mission.items.6": "Open Innovation & Cooperativism",
    "mission.items.7": "Ancestral Knowledge & Quantum Physics",

    // Platform
    "platform.title": "Platform — AMAzone.network",
    "platform.lead":
      "AMAzone.network is the phygital platform of the movement and the community's permanent ecosystem.",
    "platform.features": "Key functionalities:",
    "platform.feature.impact.title": "Gamified Impact Social Network",
    "platform.feature.impact.desc": "Engage with missions, actions and impact.",
    "platform.feature.map.title": "Dashboard for Mapping and Developing Projects",
    "platform.feature.map.desc": "Map projects, actions, communities and events.",
    "platform.feature.dao.title": "Participatory Governance in DAO",
    "platform.feature.dao.desc": "Community-led decisions and transparent processes.",
    "platform.feature.green.title": "Issuance and Commercialization of Green Assets",
    "platform.feature.green.desc": "Create and trade nature-backed assets.",
    "platform.feature.market.title": "Bioeconomy Marketplace and Financing",
    "platform.feature.market.desc": "Marketplace for regenerative products and projects.",
    "platform.feature.learning.title": "Digital Learning with Streaming, Courses, and Communities",
    "platform.feature.learning.desc": "Learn, train and share knowledge online.",
    "platform.image.alt": "AMAzone network platform",

    // Thematic Axes
    "axes.title": "Thematic Axes",
    "axes.lead.prefix": "The AMAzone COOP30 program integrates the central themes of ",
    "axes.lead.span": "glocal regeneration",
    "axes.lead.suffix": ":",
    "axes.1": "Ecological Jurisprudence, Rights of Nature, common use of land, sea, and space. Autonomous Beings & Territories",
    "axes.2": "Preservation and Restoration of Forests, Mangroves, Savannas, Oceans, and Ecosystems",
    "axes.3": "Circular Bioeconomy, Commons, Holistic Management, Minimalism & Post-Growth",
    "axes.4": "Bioregional Funds, Natural Capital, Regenerative Finance (ReFi), and Green Asset Generation",
    "axes.5": "Healthy Food Sovereignty, Agroforestry, Syntropic Agriculture, Regenerative Livestock, and Family Farming",
    "axes.6": "Liquid Democracy, Gamification (Play2Earn), XR & Blockchain",
    "axes.7": "Art, Culture, and Living Learning (Free Education)",
    "axes.8": "Gender Equanimity, Youth, and Social Development",
    "axes.9": "Indigenous Culture, Knowledge, Healing, Land, and Space Rights",
    "axes.10": "Conflict Resolution, Dialogues for Peace (Ahimsa), Roerich Pact, and Banner of Peace",
    "axes.11": "Smart, Sustainable & Regenerative Cities, Ecovillages, and Neighborhoods",
    "axes.12": "Conscious AI, Data Centers, Space Exploration, and Quantum Computing",
    "axes.13": "Integral Health, Medicines, Practices, Well-being, and Self-knowledge",
    "axes.14": "Sanitation, Treatment, and Water Management Credits",
    "axes.15": "Platform Cooperativism, Bioregionalism, Systemic Change, and Networked Societies",

    // Location
    "location.title": "Location; AMAzone @ FREEzone — Praça da Bandeira, Belém (PA)",
    "location.venue.title": "FREEzone Details",
    "location.venue.line1": "AMAzone @ FREEzone — Praça da Bandeira, Belém (PA)",
    "location.venue.line2": "The FREEzone will be dimensioned in different domes, a main stage, bioeconomy fair, and",
    "location.venue.line2.strong": "experience zones",
    "location.image.alt": "Venue image",
    "location.camps.title": "",
    "location.camps.intro": "",
    "location.item.1": "",
    "location.item.2": "",
    "location.item.3": "",
    "location.item.4": "",
    "location.item.5": "",
    "location.item.6": "",
    "location.item.7": "",

    // Deliverables
    "deliverables.title": "Deliverables and Legacy",
    "deliverable.1.title": "Datalake by Cristal",
    "deliverable.1.desc": "Datalake by Cristal",
    "deliverable.2.title": "AMAzone Think & DAO Tank",
    "deliverable.2.desc": "Decentralized ecosystem governance",
    "deliverable.3.title": "Regenerative Confederation of G.A.I.A",
    "deliverable.3.desc": "Network of cooperatives, associations, and movements",
    "deliverable.4.title": "BiomaH Credits",
    "deliverable.4.desc": "New metric and asset based on holistic land management and data mined by humans and AI",

    // Pricing
    "pricing.title": "Values and Tickets",
    "pricing.th.category": "Category",
    "pricing.th.value": "Value (R$)",
    "pricing.th.includes": "Includes",

    // Codex
    "codex.title": "Codex — 17 A.D.A.s (Agreements for Autonomous Development)",
    "codex.subtitle": "17 A.D.A.s — Agreements for Autonomous Development",
    "codex.p1":
      "AMAzone is our Zone of Love. We believe that every living system — whether a forest, a community, or a code — needs principles to maintain its harmony. Just as Burning Man established its 10 Principles to sustain a culture of autonomy and expression, and the Toltecs left their 5 Agreements as a path to inner integrity, we present the 17 A.D.A.s — Agreements for Autonomous Development: our SDGs of Love, the ethical and energetic foundation that sustains the Village.",
    "codex.p2":
      "The A.D.A.s are the code for the human and social software operating in the territory. They remind us how to act, speak, create, and coexist in freedom, care, and mutual responsibility. For the Temporary Zone of Love and Autonomy to function in peace and wholeness, it is essential that every person is conscious of these agreements, as it is through them that the Village vibrates in harmony, beauty, and truth.",
    "codex.list.1": "Radical Inclusion — Everyone is welcome. Diversity is strength, not separation.",
    "codex.list.2": "Gifting — Giving is the basis of abundance. Generosity creates bonds and strengthens the collective spirit.",
    "codex.list.3": "Radical Self-Reliance — Each person is responsible for themselves. Autonomy begins with inner confidence.",
    "codex.list.4": "Radical Self-Expression — Being authentic is honoring your soul. Expressing yourself with truth is freedom.",
    "codex.list.5": "Communal Effort — Nothing flourishes alone. Everything that exists in the Village is built collectively.",
    "codex.list.6": "Civic Responsibility — Freedom is a commitment to the whole. Care for the space and for others.",
    "codex.list.7": "Leave No Trace — Walk the Earth without harming it. Leave the place and the people more alive than before.",
    "codex.list.8": "Participation — There are no spectators. The Village exists through active presence.",
    "codex.list.9": "Immediacy — Life happens now. The present is the real time of creation.",
    "codex.list.10": "Integrate Polarities and Activate Integrity — We are light and shadow, strength and vulnerability. Integrate to live in coherence.",
    "codex.list.11": "Be the Legacy — Build, teach, touch hearts, and transform people. Leave a legacy, not traces.",
    "codex.list.12": "Radical Autonomy — Love is the Law — Freedom is born from the purity of the heart and consciousness.",
    "codex.list.13": "Be Impeccable with Your Word — Speech creates worlds; use it with truth and care.",
    "codex.list.14": "Don't Take Anything Personally — What others say or do reflects them, not you.",
    "codex.list.15": "Don't Make Assumptions — Clarify, ask, and communicate with transparency.",
    "codex.list.16": "Always Give Your Best — Do what you can with presence and love.",
    "codex.list.17": "Be Skeptical, but Learn to Listen — Question with discernment and keep an open heart.",
    "codex.quote":
      "For peace to reign in our Temporary Zone of Love and Autonomy, each of us must honor these agreements with presence, respect, joy, and love.",

    // Closing Quote
    "closing.alt": "AMAzone COOP30 Logo",
    "closing.blockquote": "AMAzone COOP30 is the hope that genuine and regenerative cooperation will be our legacy in Belém.",
    "closing.banner": "Join, cooperate, regenerate.",
    "closing.cta": "Come along — let's build this regenerative future in communion.",

    // Switcher
    "lang.en": "English",
    "lang.pt": "Português",
  },
  pt: {
    // Hero
    "hero.alt": "Logotipo hexagonal tech-tree AMAZONE",
    "hero.title": "AMAzone COOP30",
    "hero.tagline": "Em autonomia, nós confiamos!",

    // Intro
    "intro.alt": "Barcos de madeira em um rio calmo, evocando tranquilidade e conexão com a natureza.",
    "intro.p1":
      "O AMAzone COOP30 é uma Zona Autônoma Temporária (TAZ) localizada na FREEzone, na Praça da Bandeira, em Belém (PA), de 14 a 22 de novembro de 2025. É um espaço de livre interação e expressão cultural, onde o Espírito do Diálogo e do Tempo serão nossos mestres por nove dias. Através de rodas de conversa e da co-criação de soluções regenerativas, Vamos desacelerar nosso ritmo da “correria diária” para nos ouvir, sentir e reconectar com nós mesmos, com o outro e com a Natureza. Reuniremos cooperativas, associações, startups, artistas, ativistas, cientistas, empreendedores, investidores de impacto e comunidades tradicionais em uma experiência de autogestão, cooperação, regeneração, inovação e cultura de P.A.Z. AMAzone — aqui a integridade é o eixo, a autonomia é o caminho, a regeneração é o destino e o amor é a lei.",
    "intro.p1.span": "",
    "intro.quote": "",

    // Vision
    "vision.title": "Visão",
    "vision.body":
      "AMAzone COOP30 é um experimento sociocultural que demonstra, na prática, como o bem viver, a permacultura, a ciência, a arte, a tecnologia e a espiritualidade podem caminhar juntos rumo a um futuro regenerativo. É uma demonstração viva de como comunidades intencionais podem inspirar um modelo de futuro baseado em integridade, autonomia, resiliência, interdependência e bem viver.",

    // Mission
    "mission.title": "Missão",
    "mission.lead":
      "Ativar territórios autônomos (terras sem fronteiras) e construir uma rede phigital (física + digital) de Guardiões de G.A.I.A. — Grande Aliança de Integridade & Autonomia — integrando:",
    "mission.items.0": "Design Regenerativo",
    "mission.items.1": "Gestão Holística",
    "mission.items.2": "Pensamento Sistêmico",
    "mission.items.3": "Arte e Ativismo",
    "mission.items.4": "Bioeconomia",
    "mission.items.5": "IA Consciente, Web3 & Tecnologia",
    "mission.items.6": "Inovação Aberta & Cooperativismo",
    "mission.items.7": "Saberes Ancestrais & Física Quântica",

    // Platform
    "platform.title": "Plataforma — AMAzone.network",
    "platform.lead":
      "A AMAzone.network é a plataforma phygital do movimento e o ecossistema permanente da comunidade.",
    "platform.features": "Principais funcionalidades:",
    "platform.feature.impact.title": "Rede Social de Impacto Gamificada",
    "platform.feature.impact.desc": "Engaje com missões, ações e impacto.",
    "platform.feature.map.title": "Dashboard para Mapear e Desenvolver Projetos",
    "platform.feature.map.desc": "Mapeie projetos, ações, comunidades e eventos.",
    "platform.feature.dao.title": "Governança Participativa em DAO",
    "platform.feature.dao.desc": "Decisões da comunidade e processos transparentes.",
    "platform.feature.green.title": "Emissão e Comercialização de Ativos Verdes",
    "platform.feature.green.desc": "Crie e negocie ativos lastreados na natureza.",
    "platform.feature.market.title": "Marketplace de Bioeconomia e Financiamento",
    "platform.feature.market.desc": "Marketplace para produtos e projetos regenerativos.",
    "platform.feature.learning.title": "Aprendizado Digital com Streaming, Cursos e Comunidades",
    "platform.feature.learning.desc": "Aprenda, forme-se e compartilhe conhecimento online.",
    "platform.image.alt": "Plataforma AMAzone",

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

    // Location
    "location.title": "Local; AMAzone @ FREEzone — Praça da Bandeira, Belém (PA)",
    "location.venue.title": "Detalhes da FREEzone",
    "location.venue.line1": "AMAzone @ FREEzone — Praça da Bandeira, Belém (PA)",
    "location.venue.line2": "A FREEzone será dimensionada em diferentes domos, palco principal, feira da bioeconomia e",
    "location.venue.line2.strong": "zonas de experiência",
    "location.image.alt": "Imagem do local",
    "location.camps.title": "",
    "location.camps.intro": "",
    "location.item.1": "",
    "location.item.2": "",
    "location.item.3": "",
    "location.item.4": "",
    "location.item.5": "",
    "location.item.6": "",
    "location.item.7": "",

    // Deliverables
    "deliverables.title": "Entregas e Legado",
    "deliverable.1.title": "Datalake por Cristal",
    "deliverable.1.desc": "Datalake por Cristal",
    "deliverable.2.title": "AMAzone Think & DAO Tank",
    "deliverable.2.desc": "Governança descentralizada do ecossistema",
    "deliverable.3.title": "Confederação Regenerativa de G.A.I.A",
    "deliverable.3.desc": "Rede de cooperativas, associações e movimentos",
    "deliverable.4.title": "Créditos BiomaH",
    "deliverable.4.desc": "Nova métrica e ativo baseados em gestão holística da terra e dados minerados por humanos e IA",

    // Pricing
    "pricing.title": "Valores e Ingressos",
    "pricing.th.category": "Categoria",
    "pricing.th.value": "Valor (R$)",
    "pricing.th.includes": "Inclui",

    // Codex
    "codex.title": "Códex — 17 A.D.A.s (Acordos para o Desenvolvimento Autônomo)",
    "codex.subtitle": "17 A.D.A.s — Acordos para o Desenvolvimento Autônomo",
    "codex.p1":
      "AMAzone é nossa Zona do Amor. Acreditamos que todo sistema vivo — seja uma floresta, uma comunidade ou um código — precisa de princípios para manter sua harmonia. Assim como o Burning Man estabeleceu seus 10 Princípios para sustentar uma cultura de autonomia e expressão, e os Toltecas deixaram seus 5 Acordos como um caminho para a integridade interior, apresentamos os 17 A.D.A.s — Acordos para o Desenvolvimento Autônomo: nossos ODS do Amor, a base ética e energética que sustenta a Vila.",
    "codex.p2":
      "Os A.D.A.s são o código do software humano e social que opera no território. Eles nos lembram como agir, falar, criar e coexistir em liberdade, cuidado e responsabilidade mútua. Para que a Zona Temporária de Amor e Autonomia funcione em paz e inteireza, é essencial que cada pessoa esteja consciente desses acordos, pois é através deles que a Vila vibra em harmonia, beleza e verdade.",
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
    "codex.list.11": "Seja o Legado — Construa, ensine, toque corações e transforme pessoas. Deixe legado, não rastros.",
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
    "closing.blockquote": "AMAzone COOP30 é a esperança de que a cooperação genuína e regenerativa seja nosso legado em Belém.",
    "closing.banner": "Junte-se, coopere, regenere.",
    "closing.cta": "Venha junto — vamos construir este futuro regenerativo em comunhão.",

    // Switcher
    "lang.en": "English",
    "lang.pt": "Português",
  },
};

