// Iconic Board Game Meeple Palette (12 Distinct Colors)
const MEEPLE_COLORS = [
  { id: 'bg-red-600', name: 'Rojo', hex: '#dc2626' },
  { id: 'bg-blue-600', name: 'Azul', hex: '#2563eb' },
  { id: 'bg-emerald-600', name: 'Verde', hex: '#059669' },
  { id: 'bg-amber-500', name: 'Amarillo', hex: '#d97706' },
  { id: 'bg-violet-600', name: 'Morado', hex: '#7c3aed' },
  { id: 'bg-orange-500', name: 'Naranja', hex: '#ea580c' },
  { id: 'bg-slate-800', name: 'Negro', hex: '#1e293b' },
  { id: 'bg-cyan-600', name: 'Cian', hex: '#0891b2' },
  { id: 'bg-rose-500', name: 'Rosa', hex: '#e11d48' },
  { id: 'bg-teal-600', name: 'Teal', hex: '#0d9488' },
  { id: 'bg-amber-800', name: 'Café', hex: '#78350f' },
  { id: 'bg-slate-400', name: 'Gris', hex: '#94a3b8' }
];

// SVG generator for classic board game Meeples (Carcassonne style)
function getMeepleSvg(colorKeyOrHex, size = 22) {
  const map = {
    'bg-red-600': '#dc2626',
    'bg-blue-600': '#2563eb',
    'bg-blue-500': '#2563eb',
    'bg-emerald-600': '#059669',
    'bg-emerald-500': '#059669',
    'bg-amber-500': '#d97706',
    'bg-violet-600': '#7c3aed',
    'bg-orange-500': '#ea580c',
    'bg-slate-800': '#1e293b',
    'bg-cyan-600': '#0891b2',
    'bg-rose-500': '#e11d48',
    'bg-teal-600': '#0d9488',
    'bg-amber-800': '#78350f',
    'bg-slate-400': '#94a3b8',
    'bg-fuchsia-600': '#c026d3'
  };
  const fill = map[colorKeyOrHex] || colorKeyOrHex || '#dc2626';
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="${fill}" class="shrink-0 inline-block drop-shadow-2xs" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">
    <circle cx="50" cy="22" r="14"/>
    <path d="M 33 42 C 21 42 12 53 12 65 C 12 71 17 73 21 73 C 26 73 29 67 33 66 C 35 77 34 86 33 96 L 47 96 L 49 74 L 51 74 L 53 96 L 67 96 C 66 86 65 77 67 66 C 71 67 74 73 79 73 C 83 73 88 71 88 65 C 88 53 79 42 67 42 Z"/>
  </svg>`;
}

// Global Image URL Sanitizer (Direct clean HTTPS URLs without broken third-party proxies)
function getSafeImageUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== 'string') return '';
  let url = rawUrl.trim();
  if (!url) return '';
  if (url.startsWith('data:')) return url; // Base64 user uploaded photo

  // 1. Unwrap any legacy weserv.nl or wsrv.nl URLs
  if (url.includes('weserv.nl') || url.includes('wsrv.nl')) {
    const match = url.match(/[?&]url=([^&]+)/i) || url.match(/url=([^&]+)/i);
    if (match && match[1]) {
      url = decodeURIComponent(match[1]);
    }
  }

  // 2. Unwrap any wp.com proxy URLs
  if (url.includes('.wp.com/')) {
    url = url.replace(/^https?:\/\/[a-z0-9]+\.wp\.com\//i, 'https://');
    url = url.split('?')[0];
  }

  // 3. Fix double slashes
  if (url.startsWith('//')) {
    url = 'https:' + url;
  }

  // 4. Ensure HTTPS
  if (url.startsWith('http://')) {
    url = url.replace('http://', 'https://');
  }

  return url;
}

// Default friends for first load (founder Elvis)
const DEFAULT_FRIENDS = [
  { id: 'u1', name: 'Elvis', color: 'bg-red-600', initials: 'EL', phone: '999999999', pin: '1234', role: 'admin' }
];

// Curated database with instant metadata, reviews & REAL official box art
const POPULAR_GAMES_CATALOG = [
  {
    names: ['arcs', 'arcs: collapse and conflict', 'arcs juego', 'arcs board game'],
    title: 'Arcs',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 90,
    image: 'https://cf.geekdo-images.com/39lQ1j3vU_H24w6E9X6Wbg__itemrep/img/93cRzXG2cT3j9v4Jt04V-h547X4=/fit-in/500x500/filters:strip_icc()/pic6832367.png',
    description: 'Aclamada ópera espacial de ciencia ficción y estrategia diseñada por Cole Wehrle. En un imperio galáctico al borde del colapso, los jugadores maniobran flotas estelares, compiten por ambiciones cambiantes y gestionan recursos con un innovador sistema de cartas y control de iniciativa.'
  },
  {
    names: ['nemesis'],
    title: 'Nemesis',
    minPlayers: 1,
    maxPlayers: 5,
    durationMin: 120,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/Q30o_Itemrep_pic3860051/pic3860051.jpg&w=500&output=jpg',
    description: 'Juego de supervivencia y ciencia ficción donde los tripulantes despiertan de la hibernación en una nave infestada de alienígenas hostiles con objetivos secretos y desconfianza mutua.'
  },
  {
    names: ['dune imperium', 'dune: imperium'],
    title: 'Dune: Imperium',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/pic5666597.jpg&w=500&output=jpg',
    description: 'Combina construcción de mazos (deck-building) y colocación de trabajadores en el árido planeta Arrakis. Lidera una de las Grandes Casas para controlar la especia y el imperio.'
  },
  {
    names: ['gloomhaven'],
    title: 'Gloomhaven',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 120,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/pic2437871.jpg&w=500&output=jpg',
    description: 'Monumental juego cooperativo de combate táctico y exploración de mazmorras en un mundo de fantasía persistente y cambiante sin azar de dados.'
  },
  {
    names: ['everdell'],
    title: 'Everdell',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 60,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/pic3918905.jpg&w=500&output=jpg',
    description: 'Encantador juego de colocación de trabajadores y construcción de ciudades donde lideras a un grupo de criaturas del bosque para edificar el valle antes del invierno.'
  },
  {
    names: ['cascadia'],
    title: 'Cascadia',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/pic5100613.jpg&w=500&output=jpg',
    description: 'Premio Spiel des Jahres. Juego de colocación de losetas y patrones naturales donde creas hábitats diversos y colocas fauna salvaje del noroeste del Pacífico.'
  },
  {
    names: ['ark nova'],
    title: 'Ark Nova',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 120,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/pic6293412.jpg&w=500&output=jpg',
    description: 'Planea y diseña un zoológico moderno y científicamente gestionado. Construye recintos, aloja animales y apoya proyectos de conservación en todo el mundo.'
  },
  {
    names: ['brass', 'brass birmingham', 'brass lancashire'],
    title: 'Brass: Birmingham',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/x3zxjrAET9EgndpBRbeikg__itemrep/img/1a2r1l_qYx-uGvBvd_7n0_qH73w=/fit-in/500x500/filters:strip_icc()/pic3490053.jpg&output=jpg',
    description: 'Aclamada obra maestra de estrategia económica ambientada en la Revolución Industrial de Lancashire y Birmingham, Inglaterra. Los jugadores compiten como magnates construyendo redes de canales y ferrocarriles, fundando industrias de algodón, carbón y hierro, y vendiendo mercancías con una profunda gestión de préstamos y recursos.'
  },
  {
    names: ['catan', 'los colonos de catan', 'colonos de catan'],
    title: 'Catan',
    minPlayers: 3,
    maxPlayers: 4,
    durationMin: 75,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg&w=500&output=jpg',
    description: 'Comercia, construye y coloniza la isla de Catán en este clásico mundial. Los jugadores compiten por obtener recursos (madera, trigo, ladrillo, lana y mineral) para erigir poblados, ciudades y caminos.'
  },
  {
    names: ['carcassonne', 'carcasone'],
    title: 'Carcassonne',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/76/Carcassonne-game.jpg&w=500&output=jpg',
    description: 'Un juego imprescindible de colocación de losetas donde creas ciudades medievales amuralladas, monasterios, caminos y campos puntuando inteligentemente con tus seguidores (meeples).'
  },
  {
    names: ['wingspan'],
    title: 'Wingspan',
    minPlayers: 1,
    maxPlayers: 5,
    durationMin: 70,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/1/13/Wingspan_board_game_box_cover.jpg&w=500&output=jpg',
    description: 'Aclamado juego de construcción de motores y gestión de recursos donde asumes el rol de entusiasta de las aves para descubrir y atraer a las mejores especies a tu red de hábitats naturales.'
  },
  {
    names: ['azul'],
    title: 'Azul',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 40,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/1/1a/Azul_board_game_box.jpg&w=500&output=jpg',
    description: 'Premio Spiel des Jahres. Los jugadores compiten como artesanos embelleciendo las paredes del Palacio Real de Évora colocando losetas de azulejos con alta dosis de táctica y elegancia visual.'
  },
  {
    names: ['dixit'],
    title: 'Dixit',
    minPlayers: 3,
    maxPlayers: 8,
    durationMin: 35,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/1/1b/Dixit_board_game_box_cover.jpg&w=500&output=jpg',
    description: 'Juego poético de creatividad y deducción donde el narrador da una pista enigmática sobre una carta ilustrada y los demás eligen cartas que coincidan para engañar y puntuar.'
  },
  {
    names: ['codenames', 'codigo secreto', 'código secreto'],
    title: 'Código Secreto (Codenames)',
    minPlayers: 4,
    maxPlayers: 8,
    durationMin: 20,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/9/96/Codenames_Board_Game_Box_Cover.jpg&w=500&output=jpg',
    description: 'Dos jefes de espías conocen la identidad secreta de 25 agentes en clave y deben dar pistas de una sola palabra para que sus compañeros contacten a todos sus espías antes de toparse con el asesino.'
  },
  {
    names: ['pandemic', 'pandemia'],
    title: 'Pandemic',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/ad/Pandemic_game.jpg&w=500&output=jpg',
    description: 'Emocionante juego 100% cooperativo donde ustedes son miembros de un equipo de élite para la contención de enfermedades que viajan por el mundo erradicando cuatro plagas mortales.'
  },
  {
    names: ['ticket to ride', 'aventureros al tren'],
    title: 'Aventureros al Tren (Ticket to Ride)',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 60,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/9/92/Ticket_to_Ride_Board_Game_Box_Cover.jpg&w=500&output=jpg',
    description: 'Aventura ferroviaria en la que recolectas cartas de vagones de tren para reclamar rutas férreas conectando ciudades clave a lo largo del mapa y cumpliendo tus billetes de destino.'
  },
  {
    names: ['splendor'],
    title: 'Splendor',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/2/29/Splendor_board_game_box_art.jpg&w=500&output=jpg',
    description: 'Conviértete en un influyente mercader del Renacimiento adquiriendo minas de gemas, barcos de transporte y artesanos para acumular puntos de prestigio y atraer a la nobleza.'
  },
  {
    names: ['exploding kittens'],
    title: 'Exploding Kittens',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 15,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/77/Exploding_Kittens_box.jpg&w=500&output=jpg',
    description: 'Divertida versión gatuna y caótica de la ruleta rusa. Los jugadores roban cartas hasta que alguien saca un Exploding Kitten y explota, a menos que tenga un puntero láser o sándwich de menta.'
  },
  {
    names: ['7 wonders', 'seven wonders'],
    title: '7 Wonders',
    minPlayers: 2,
    maxPlayers: 7,
    durationMin: 35,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/1/11/7_Wonders_board_game_box.jpg&w=500&output=jpg',
    description: 'Lidera una de las 7 grandes ciudades de la Antigüedad. Desarrolla tu poder militar, científico, comercial y civil a través de un inteligente sistema de draft de cartas en 3 eras.'
  },
  {
    names: ['terraforming mars'],
    title: 'Terraforming Mars',
    minPlayers: 1,
    maxPlayers: 5,
    durationMin: 120,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/9/91/Terraforming_Mars_board_game_box.jpg&w=500&output=jpg',
    description: 'Estrategia pesada donde grandes corporaciones invierten colosales recursos para subir el oxígeno, elevar la temperatura y formar océanos, transformando Marte en un planeta habitable.'
  },
  {
    names: ['secret hitler'],
    title: 'Secret Hitler',
    minPlayers: 5,
    maxPlayers: 10,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/rAQZwX4zff_ZkXyR1xV54A__itemrep/img/P1H__j8rNvx3gEw89s24N8cWbK0=/fit-in/500x500/filters:strip_icc()/pic3408544.jpg&output=jpg',
    description: 'Juego de deducción social, identidades ocultas y traición política ambientado en los años 30. Los liberales deben promulgar leyes democráticas o desenmascarar a los fascistas.'
  },
  {
    names: ['the mind'],
    title: 'The Mind',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 20,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/q3Z8QZg93l9s0__itemrep/img/3j4_qH73w=/fit-in/500x500/filters:strip_icc()/pic4118290.png&output=jpg',
    description: 'Experimento telepático en forma de juego cooperativo. Los jugadores deben colocar sus cartas numeradas en orden ascendente sin decir una sola palabra ni comunicarse por señas.'
  },
  {
    names: ['root'],
    title: 'Root',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/JUAUWaVUrmOB2uAeHgTcQN__itemrep/img/1awO4A2J734x9zQ4Qn62z_sA7gY=/fit-in/500x500/filters:strip_icc()/pic4254509.jpg&output=jpg',
    description: 'Guerra y aventuras asimétricas en el bosque. Cada facción (marquesado de gatos, dinastía de las aves, alianza clandestina y el vagabundo) juega con sus propias reglas y condiciones de victoria.'
  },
  {
    names: ['scythe'],
    title: 'Scythe',
    minPlayers: 1,
    maxPlayers: 5,
    durationMin: 115,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/7k_nOxEstablish__itemrep/img/2j7y4N0_qH73w=/fit-in/500x500/filters:strip_icc()/pic3163924.jpg&output=jpg',
    description: 'Ambientado en una Europa de los años 20 alternativa tras la gran guerra. Cada jugador lidera un personaje caído en desgracia buscando que su facción conquiste la Fábrica y reclame territorios con mechas.'
  },
  {
    names: ['clue', 'cluedo'],
    title: 'Clue (Cluedo)',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a4/Cluedo_box_art.jpg&w=500&output=jpg',
    description: 'El legendario juego de misterio: deduce quién asesinó al anfitrión en la mansión, en qué habitación ocurrió y cuál fue el arma homicida descartando pistas metódicamente.'
  },
  {
    names: ['monopoly', 'monopolio'],
    title: 'Monopoly',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/d/dc/Monopoly_board_game_box_cover.jpg&w=500&output=jpg',
    description: 'El clásico juego de bienes raíces. Compra calles, edifica casas y hoteles y cobra alquiler a tus rivales hasta llevarlos a la quiebra total.'
  },
  {
    names: ['clank', 'clank!'],
    title: 'Clank!',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 60,
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/DPjq5mww7txqjE79U0_jXg__itemrep/img/o2iW-QxV95wI7U_kO555355=/fit-in/500x500/filters:strip_icc()/pic3111059.jpg&output=jpg',
    description: 'Aventura de construcción de mazos donde te adentras en la guarida de un dragón para robar artefactos valiosos evitando hacer ruido ("clank") para no ser devorado.'
  },
  {
    names: ['castles of burgundy', 'los castillos de borgona', 'castillos de borgona', 'borgona'],
    title: 'Los Castillos de Borgoña',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/8/86/The_Castles_of_Burgundy_box_cover.jpg&w=500&output=jpg',
    description: 'Aclamada obra de Stefan Feld ambientada en el siglo XV donde los jugadores desarrollan sus principados construyendo castillos, granjas y redes comerciales mediante tiradas de dados tácticas.'
  },
  {
    names: ['concordia'],
    title: 'Concordia',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 100,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/3/36/Concordia_board_game_box.jpg&w=500&output=jpg',
    description: 'Elegante juego pacífico de estrategia económica en el Mediterráneo durante el Imperio Romano, basado en gestión de cartas de acción y comercio sin dados.'
  },
  {
    names: ['coup'],
    title: 'Coup',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 15,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/e/e9/Coup_card_game_box.jpg&w=500&output=jpg',
    description: 'Juego rápido de identidades ocultas, faroleo y engaño. Manipula la influencia del Duque, Asesino, Capitán, Condesa y Embajador para ser el último superviviente.'
  },
  {
    names: ['camel up'],
    title: 'Camel Up',
    minPlayers: 3,
    maxPlayers: 8,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/2/23/Camel_Up_box.jpg&w=500&output=jpg',
    description: 'Premio Spiel des Jahres. Disparatada y caótica carrera de camellos alrededor de una pirámide donde los camellos se apilan unos encima de otros mientras tú apuestas.'
  },
  {
    names: ['century', 'century spice road', 'la ruta de las especias'],
    title: 'Century: La Ruta de las Especias',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/4/4b/Century_Spice_Road_box.jpg&w=500&output=jpg',
    description: 'Juego de construcción de rutas mercantiles donde recolectas, mejoras e intercambias cúrcuma, azafrán, cardamomo y canela para cumplir lucrativas órdenes.'
  },
  {
    names: ['ciudadelas', 'citadels'],
    title: 'Ciudadelas (Citadels)',
    minPlayers: 2,
    maxPlayers: 8,
    durationMin: 60,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/8/87/Citadels_box.jpg&w=500&output=jpg',
    description: 'Clásico de roles secretos y selección de personajes medievales (asesino, ladrón, rey, mago, mercader) donde compites construyendo los distritos más prestigiosos.'
  },
  {
    names: ['colt express'],
    title: 'Colt Express',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 40,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/0/07/Colt_Express_box.jpg&w=500&output=jpg',
    description: 'Premio Spiel des Jahres. Juego de programación en un tren 3D del Lejano Oeste donde bandidos roban maletines, disparan y esquivan al sheriff.'
  },
  {
    names: ['caverna'],
    title: 'Caverna: The Cave Farmers',
    minPlayers: 1,
    maxPlayers: 7,
    durationMin: 120,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a2/Caverna_The_Cave_Farmers_box.jpg&w=500&output=jpg',
    description: 'Gran juego de colocación de trabajadores donde diriges a una familia de enanos cavando túneles, decorando cavernas, cultivando campos y criando ganado.'
  },
  {
    names: ['cryptid'],
    title: 'Cryptid',
    minPlayers: 3,
    maxPlayers: 5,
    durationMin: 40,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/3/30/Cryptid_board_game_box.jpg&w=500&output=jpg',
    description: 'Deducción pura y mapa modular. Cada jugador tiene una única pista sobre el hábitat de una criatura elusiva y deben triangular su posición exacta.'
  },
  {
    names: ['cronicas del crimen', 'chronicles of crime'],
    title: 'Crónicas del Crimen',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 75,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/d/da/Chronicles_of_Crime_box.jpg&w=500&output=jpg',
    description: 'Innovador juego cooperativo de investigación policiaca que combina cartas físicas con una aplicación para interrogar sospechosos y analizar escenas del crimen en 360°.'
  },
  {
    names: ['concept'],
    title: 'Concept',
    minPlayers: 4,
    maxPlayers: 12,
    durationMin: 40,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/ab/Concept_board_game_box.jpg&w=500&output=jpg',
    description: 'Divertido party game donde haces adivinar películas, objetos o frases combinando iconos universales en un tablero sin hablar ni gesticular.'
  },
  {
    names: ['cat lady'],
    title: 'Cat Lady',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/7b/Cat_Lady_card_game_box.jpg&w=500&output=jpg',
    description: 'Adorable juego de cartas donde eres una amante de los gatos seleccionando felinos, comida, disfraces y hierba gatera para tener a tus mascotas felices.'
  },
  {
    names: ['cosmic encounter'],
    title: 'Cosmic Encounter',
    minPlayers: 3,
    maxPlayers: 5,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/d/dc/Cosmic_Encounter_box.jpg&w=500&output=jpg',
    description: 'Guerra galáctica y diplomacia feroz donde decenas de especies extraterrestres poseen poderes únicos que rompen las reglas para colonizar la galaxia.'
  },
  {
    names: ['captain sonar'],
    title: 'Captain Sonar',
    minPlayers: 2,
    maxPlayers: 8,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/3/30/Captain_Sonar_box.jpg&w=500&output=jpg',
    description: 'Intenso combate de submarinos en tiempo real por equipos de 4 contra 4: Capitán, Primer Oficial, Ingeniero y Operador de Radio cazándose en las profundidades.'
  },
  {
    names: ['cortex', 'cortex challenge'],
    title: 'Cortex Challenge',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 15,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/b/b2/Cortex_Challenge_box.jpg&w=500&output=jpg',
    description: 'Juego rápido de agilidad mental que pone a prueba memoria, coordinación, laberintos, razonamiento y percepción táctil con cartas texturadas.'
  },
  {
    names: ['agricola'],
    title: 'Agrícola',
    minPlayers: 1,
    maxPlayers: 5,
    durationMin: 120,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/c/cb/Agricola_game_box.jpg&w=500&output=jpg',
    description: 'Magnum opus de colocación de trabajadores. Construye tu cabaña, ara campos, cría ovejas y jabalíes, y alimenta a tu familia campesina del siglo XVII.'
  },
  {
    names: ['blood rage'],
    title: 'Blood Rage',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/4/4b/Blood_Rage_box.jpg&w=500&output=jpg',
    description: 'Épico combate de vikingos durante el Ragnarök. Lidera a tu clan con miniaturas detalladas, draft de cartas de combate divino y gloriosas batallas territoriales.'
  },
  {
    names: ['bang', 'bang!'],
    title: 'Bang!',
    minPlayers: 4,
    maxPlayers: 7,
    durationMin: 40,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/e/e8/Bang_card_game.jpg&w=500&output=jpg',
    description: 'Duelo en el Salvaje Oeste con roles secretos: el Sheriff y sus Alguaciles contra los Forajidos y el traicionero Renegado en un tiroteo con cartas.'
  },
  {
    names: ['dominion'],
    title: 'Dominion',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/9/91/Dominion_game.jpg&w=500&output=jpg',
    description: 'El pionero del género de construcción de mazos (deck-building). Compra tesoros, aldeas y fortalezas para forjar el reino más poderoso y acumular provincias.'
  },
  {
    names: ['decrypto'],
    title: 'Decrypto',
    minPlayers: 3,
    maxPlayers: 8,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/77/Decrypto_board_game_box.jpg&w=500&output=jpg',
    description: 'Genial juego de espionaje y códigos secretos por equipos: transmite códigos numéricos a tus compañeros con pistas ingeniosas sin que el equipo rival intercepte el mensaje.'
  },
  {
    names: ['el dorado', 'the quest for el dorado'],
    title: 'The Quest for El Dorado',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/1/1e/The_Quest_for_El_Dorado_box.jpg&w=500&output=jpg',
    description: 'Diseñado por Reiner Knizia. Carrera de expediciones por la selva sudamericana combinando construcción de mazos para moverte por junglas, ríos y poblados.'
  },
  {
    names: ['heat', 'heat pedal to the metal'],
    title: 'Heat: Pedal to the Metal',
    minPlayers: 1,
    maxPlayers: 6,
    durationMin: 60,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a2/Heat_Pedal_to_the_Metal_box.jpg&w=500&output=jpg',
    description: 'Aclamadísimo juego de carreras de bólidos de los años 60 donde gestionas la velocidad, cambios de marcha y el calor del motor para ganar la pole position.'
  },
  {
    names: ['hanabi'],
    title: 'Hanabi',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 25,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/3/30/Hanabi_Card_Game.jpg&w=500&output=jpg',
    description: 'Premio Spiel des Jahres. Cooperativo donde juegas con tus cartas al revés (todos ven tus cartas excepto tú) y deben dar pistas para armar un espectáculo pirotécnico perfecto.'
  },
  {
    names: ['jaipur'],
    title: 'Jaipur',
    minPlayers: 2,
    maxPlayers: 2,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/6/69/Jaipur_board_game_box.jpg&w=500&output=jpg',
    description: 'El mejor duelo para 2 jugadores: sé el comerciante personal del Marajá comprando e intercambiando telas, especias, oro, joyas y camellos en el mercado indio.'
  },
  {
    names: ['just one'],
    title: 'Just One',
    minPlayers: 3,
    maxPlayers: 7,
    durationMin: 20,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/e/e4/Just_One_game_box.jpg&w=500&output=jpg',
    description: 'Premio Spiel des Jahres. Cooperativo de palabras donde todos escriben en secreto una pista para ayudar al jugador activo, pero si dos pistas se repiten quedan anuladas.'
  },
  {
    names: ['kingdomino'],
    title: 'Kingdomino',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 20,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/0/07/Kingdomino_game_box.jpg&w=500&output=jpg',
    description: 'Premio Spiel des Jahres. Construye un reino feudal conectando fichas tipo dominó de bosques, campos de trigo, minas y lagos puntuando con castillos y coronas.'
  },
  {
    names: ['king of tokyo'],
    title: 'King of Tokyo',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a2/King_of_Tokyo_box.jpg&w=500&output=jpg',
    description: 'Monstruos gigantes, robots alienígenas y mechas destruyendo la ciudad de Tokio tirando dados para atacar, curarse y comprar cartas de superpoderes.'
  },
  {
    names: ['love letter'],
    title: 'Love Letter',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 20,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/9/91/Love_Letter_card_game_box.jpg&w=500&output=jpg',
    description: 'Juego maestro de deducción con solo 16 cartas donde usas los sirvientes, caballeros y la guardia del palacio para entregar tu carta de amor a la Princesa.'
  },
  {
    names: ['las ruinas perdidas de arnak', 'lost ruins of arnak', 'arnak'],
    title: 'Las Ruinas Perdidas de Arnak',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/7b/Lost_Ruins_of_Arnak_box.jpg&w=500&output=jpg',
    description: 'Explora una isla deshabitada en busca de reliquias perdidas combinando colocación de trabajadores, construcción de mazos e investigación arqueológica.'
  },
  {
    names: ['mysterium'],
    title: 'Mysterium',
    minPlayers: 2,
    maxPlayers: 7,
    durationMin: 45,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a1/Mysterium_game_box.jpg&w=500&output=jpg',
    description: 'Cooperativo de misterio donde un jugador hace de fantasma amnésico enviando visiones ilustradas a los médiums para resolver su asesinato antes del amanecer.'
  },
  {
    names: ['munchkin'],
    title: 'Munchkin',
    minPlayers: 3,
    maxPlayers: 6,
    durationMin: 60,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/d/da/Munchkin_box_cover.jpg&w=500&output=jpg',
    description: 'Divertida parodia de mazmorras y rol. Mata monstruos, roba tesoros, apuñala a tus amigos por la espalda y sé el primero en alcanzar el nivel 10.'
  },
  {
    names: ['patchwork'],
    title: 'Patchwork',
    minPlayers: 2,
    maxPlayers: 2,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/77/Patchwork_board_game_box.jpg&w=500&output=jpg',
    description: 'Obra maestra de Uwe Rosenberg para 2 jugadores: compra retales de tela con forma de Tetris usando botones y tiempo para tejer la mejor colcha en tu tablero.'
  },
  {
    names: ['puerto rico'],
    title: 'Puerto Rico',
    minPlayers: 3,
    maxPlayers: 5,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/2/23/Puerto_Rico_board_game_box.jpg&w=500&output=jpg',
    description: 'Uno de los grandes hitos de la estrategia. Los jugadores asumen roles (alcalde, capataz, comerciante, capitán) para cultivar café y tabaco y enviarlo a Europa.'
  },
  {
    names: ['spirit island'],
    title: 'Spirit Island',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 120,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/2/29/Spirit_Island_box.jpg&w=500&output=jpg',
    description: 'Aclamado juego cooperativo anticolonialista donde encarnas a espíritus de la naturaleza con poderes elementales para expulsar a los colonizadores invasores.'
  },
  {
    names: ['sushi go', 'sushi go!'],
    title: 'Sushi Go!',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 15,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/0/0e/Sushi_Go_box.jpg&w=500&output=jpg',
    description: 'Rápido juego de draft de cartas donde seleccionas las mejores combinaciones de sushi, sashimi, nigiri y wasabi mientras el menú circula por la mesa.'
  },
  {
    names: ['skull'],
    title: 'Skull',
    minPlayers: 3,
    maxPlayers: 6,
    durationMin: 30,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/c/cb/Skull_game_box.jpg&w=500&output=jpg',
    description: 'El juego supremo de faroleo y psicología: coloca rosas o calaveras boca abajo y reta a los demás a revelar cartas sin voltear una calavera.'
  },
  {
    names: ['sagrada'],
    title: 'Sagrada',
    minPlayers: 1,
    maxPlayers: 4,
    durationMin: 40,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/7b/Sagrada_board_game_box.jpg&w=500&output=jpg',
    description: 'Construye una hermosa vidriera en la Sagrada Familia de Barcelona eligiendo dados translúcidos de colores respetando restricciones de color y brillo.'
  },
  {
    names: ['virus', 'virus!'],
    title: 'Virus!',
    minPlayers: 2,
    maxPlayers: 6,
    durationMin: 20,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/8/89/Virus_card_game_box.jpg&w=500&output=jpg',
    description: 'Fenómeno de cartas en español: sé el primero en aislar un cuerpo con 4 órganos sanos mientras infectas y extirpas los órganos de tus rivales con virus.'
  },
  {
    names: ['viticulture'],
    title: 'Viticulture',
    minPlayers: 1,
    maxPlayers: 6,
    durationMin: 90,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/8/86/Viticulture_board_game_box.jpg&w=500&output=jpg',
    description: 'Diseño de Jamey Stegmaier. Gestiona un viñedo rústico en la Toscana: planta vides, cosecha uvas, envejece vinos y atiende a visitantes para ser el mejor bodeguero.'
  },
  {
    names: ['war of the ring', 'la guerra del anillo'],
    title: 'La Guerra del Anillo (War of the Ring)',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 180,
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/0/0c/War_of_the_Ring_box.jpg&w=500&output=jpg',
    description: 'Monumental experiencia temática de El Señor de los Anillos: los Pueblos Libres deben escoltar al Portador del Anillo al Monte del Destino antes de que la Sombra conquiste la Tierra Media.'
  }
];

// Clean and unwrap all catalog images to direct clean HTTPS URLs
POPULAR_GAMES_CATALOG.forEach(g => {
  g.image = getSafeImageUrl(g.image);
});

const DEFAULT_GAMES = [];

const DEFAULT_SESSIONS = [];

// URL de Google Apps Script compartida por defecto para todo el club (opcional)
const CLUB_DEFAULT_GSHEET_URL = 'https://script.google.com/macros/s/AKfycbxNSwbeR5Jdy9bP0pSHLqyka9unTXdj4fchIA4vI9r3WbrFzKx2qizxLkZBculCXm0P/exec';

// Decoupled DB Layer (Siempre conectado a Google Sheets en la nube)
const db = {
  isCloudOnline: false,
  getGSheetUrl() {
    const saved = localStorage.getItem('bg_gsheet_url');
    // Si tenía guardada la URL anterior, migrar automáticamente a la nueva
    if (saved && saved.includes('AKfycbxJmP5-FBNZ66z7fU3')) {
      localStorage.setItem('bg_gsheet_url', CLUB_DEFAULT_GSHEET_URL);
      return CLUB_DEFAULT_GSHEET_URL;
    }
    return saved || CLUB_DEFAULT_GSHEET_URL;
  },
  setGSheetUrl(url) {
    if (url && typeof url === 'string' && url.trim().startsWith('https://script.google.com/macros/s/')) {
      localStorage.setItem('bg_gsheet_url', url.trim());
    }
  },
  getFriends() {
    try {
      const raw = localStorage.getItem('bg_friends');
      let friends = raw ? JSON.parse(raw) : DEFAULT_FRIENDS;
      if (Array.isArray(friends) && friends.length > 0) {
        return friends.map(f => ({
          ...f,
          phone: f.phone || (f.id === 'u1' ? '999999999' : ''),
          pin: f.pin || '1234',
          role: f.role || (f.id === 'u1' ? 'admin' : 'member')
        }));
      }
    } catch (e) {}
    return DEFAULT_FRIENDS;
  },
  saveFriends(f) {
    localStorage.setItem('bg_friends', JSON.stringify(f));
    this.pushToGoogleSheets();
  },
  getGames() {
    try {
      const raw = localStorage.getItem('bg_games');
      let games = raw ? JSON.parse(raw) : DEFAULT_GAMES;
      if (!Array.isArray(games)) games = DEFAULT_GAMES;
      let deleted = [];
      try { deleted = JSON.parse(localStorage.getItem('bg_deleted_games') || '[]'); } catch (e) {}
      return games
        .filter(g => g && !deleted.includes(g.id) && !deleted.includes((g.title || '').trim().toLowerCase()))
        .map(g => ({
          ...g,
          minPlayers: parseInt(g.minPlayers) || 2,
          maxPlayers: parseInt(g.maxPlayers) || 4,
          durationMin: parseInt(g.durationMin) || 60,
          image: getSafeImageUrl(g.image)
        }));
    } catch (e) {
      return [];
    }
  },
  saveGames(g) {
    localStorage.setItem('bg_games', JSON.stringify(g));
    this.pushToGoogleSheets();
  },
  getSessions() {
    try {
      const raw = localStorage.getItem('bg_sessions');
      let sessions = raw ? JSON.parse(raw) : DEFAULT_SESSIONS;
      if (!Array.isArray(sessions)) sessions = DEFAULT_SESSIONS;
      let deleted = [];
      try { deleted = JSON.parse(localStorage.getItem('bg_deleted_sessions') || '[]'); } catch (e) {}
      return sessions
        .filter(s => s && !deleted.includes(s.id))
        .map(s => {
          let att = s.attendees;
          if (typeof att === 'string') {
            try { att = JSON.parse(att); } catch (e) { att = []; }
          }
          if (!Array.isArray(att)) att = [];
          return {
            ...s,
            date: (s.date || '').split('T')[0],
            attendees: att
          };
        });
    } catch (e) {
      return [];
    }
  },
  saveSessions(s) {
    localStorage.setItem('bg_sessions', JSON.stringify(s));
    this.pushToGoogleSheets();
  },
  getCurrentUserId() {
    return localStorage.getItem('bg_current_user') || 'u1';
  },
  setCurrentUserId(id) {
    localStorage.setItem('bg_current_user', id);
  },

  // Helper JSONP: 100% libre de restricciones CORS en cualquier navegador móvil
  fetchJsonp(url, params = {}) {
    return new Promise((resolve, reject) => {
      const callbackName = 'gsheet_cb_' + Date.now() + '_' + Math.floor(Math.random() * 10000);
      const script = document.createElement('script');
      
      const queryParts = Object.entries(params).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
      queryParts.push(`callback=${callbackName}`);
      queryParts.push(`_t=${Date.now()}`);
      
      const separator = url.includes('?') ? '&' : '?';
      script.src = `${url}${separator}${queryParts.join('&')}`;

      const timer = setTimeout(() => {
        cleanup();
        reject(new Error('Tiempo agotado al conectar con Google Sheets'));
      }, 10000);

      function cleanup() {
        clearTimeout(timer);
        try { delete window[callbackName]; } catch (e) { window[callbackName] = undefined; }
        if (script.parentNode) script.parentNode.removeChild(script);
      }

      window[callbackName] = function(data) {
        cleanup();
        resolve(data);
      };

      script.onerror = function() {
        cleanup();
        reject(new Error('Error de red al consultar Google Sheets'));
      };

      document.head.appendChild(script);
    });
  },

  // Helper Form Submit en Iframe: Garantiza que el POST llegue siempre sin bloqueos
  submitFormPost(url, payload) {
    try {
      let iframe = document.getElementById('gsheet_hidden_iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'gsheet_hidden_iframe';
        iframe.name = 'gsheet_hidden_iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      let form = document.getElementById('gsheet_hidden_form');
      if (!form) {
        form = document.createElement('form');
        form.id = 'gsheet_hidden_form';
        form.method = 'POST';
        form.target = 'gsheet_hidden_iframe';
        form.style.display = 'none';
        const input = document.createElement('textarea');
        input.name = 'data';
        form.appendChild(input);
        document.body.appendChild(form);
      }

      form.action = url;
      form.elements['data'].value = payload;
      form.submit();
    } catch(e) {
      console.warn('Form submit fallback error:', e);
    }
  },

  async syncWithGoogleSheets() {
    const url = this.getGSheetUrl();
    if (!url) return false;

    try {
      let data = null;

      // 1. Intentar con fetch directo
      try {
        const fetchUrl = url + (url.includes('?') ? '&' : '?') + 'action=all&_t=' + Date.now();
        const res = await fetch(fetchUrl);
        if (res.ok) {
          data = await res.json();
        }
      } catch (fetchErr) {
        // Fallback inmediato a JSONP
      }

      // 2. Si fetch no trajo data (ej. por CORS en móviles), usar JSONP garantizado
      if (!data || !data.games) {
        try {
          data = await this.fetchJsonp(url, { action: 'all' });
        } catch(jsonpErr) {
          console.warn('JSONP sync error:', jsonpErr);
        }
      }

      if (!data || !data.games) {
        this.isCloudOnline = false;
        if (window.app && app.updateDbStatusUi) app.updateDbStatusUi();
        return false;
      }

      this.isCloudOnline = true;
      if (window.app && app.updateDbStatusUi) app.updateDbStatusUi();

      let changed = false;

      // 1. Sincronizar Juegos
      if (data && Array.isArray(data.games)) {
        let deletedGames = [];
        try { deletedGames = JSON.parse(localStorage.getItem('bg_deleted_games') || '[]'); } catch(e) {}

        const sanitized = data.games
          .filter(g => !deletedGames.includes(g.id) && !deletedGames.includes((g.title || '').trim().toLowerCase()))
          .map(g => ({
            ...g,
            minPlayers: parseInt(g.minPlayers) || 2,
            maxPlayers: parseInt(g.maxPlayers) || 4,
            durationMin: parseInt(g.durationMin) || 60,
            image: getSafeImageUrl(g.image)
          }));

        const currentGames = localStorage.getItem('bg_games') || '';
        const newGames = JSON.stringify(sanitized);
        if (currentGames !== newGames) {
          localStorage.setItem('bg_games', newGames);
          changed = true;
        }
      }

      // 2. Sincronizar Sesiones (incluso si la lista quedó vacía tras eliminar una partida)
      if (data && Array.isArray(data.sessions)) {
        let deletedSessions = [];
        try { deletedSessions = JSON.parse(localStorage.getItem('bg_deleted_sessions') || '[]'); } catch(e) {}

        const sanitizedSessions = data.sessions
          .filter(s => !deletedSessions.includes(s.id))
          .map(s => {
            let att = s.attendees;
            if (typeof att === 'string') {
              try { att = JSON.parse(att); } catch (e) { att = []; }
            }
            if (!Array.isArray(att)) att = [];
            return {
              ...s,
              date: (s.date || '').split('T')[0],
              attendees: att
            };
          });
        const currentSessions = localStorage.getItem('bg_sessions') || '';
        const newSessions = JSON.stringify(sanitizedSessions);
        if (currentSessions !== newSessions) {
          localStorage.setItem('bg_sessions', newSessions);
          changed = true;
        }
      }

      // 3. Sincronizar Amigos
      if (data && Array.isArray(data.friends) && data.friends.length > 0) {
        const currentFriends = localStorage.getItem('bg_friends') || '';
        const newFriends = JSON.stringify(data.friends);
        if (currentFriends !== newFriends) {
          localStorage.setItem('bg_friends', newFriends);
          changed = true;
        }
      }

      return changed;
    } catch (err) {
      console.warn('Sync with Google Sheets failed:', err);
      return false;
    }
  },

  _pushTimeout: null,
  _isPushing: false,
  _pendingPush: false,

  pushToGoogleSheets() {
    const url = this.getGSheetUrl();
    if (!url) return;

    if (this._pushTimeout) clearTimeout(this._pushTimeout);
    this._pushTimeout = setTimeout(() => {
      this._executePush();
    }, 250);
  },

  async _executePush() {
    const url = this.getGSheetUrl();
    if (!url) return { success: false, error: 'No URL' };

    if (this._isPushing) {
      this._pendingPush = true;
      return { success: false, error: 'Push in progress' };
    }

    this._isPushing = true;
    this._pendingPush = false;

    // Indicador visual en la barra superior de guardado en la nube
    const icon = document.getElementById('db-status-icon');
    if (icon) icon.className = 'fa-solid fa-rotate fa-spin text-emerald-500 text-xs';

    const payloadObj = {
      action: 'save_all',
      games: this.getGames(),
      sessions: this.getSessions(),
      friends: this.getFriends()
    };
    const payloadStr = JSON.stringify(payloadObj);
    let pushConfirmed = false;

    try {
      // Canal 1: POST vía fetch
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: payloadStr
      }).catch(() => {});

      // Canal 2: Formulario oculto vía POST (garantizado en todos los navegadores móviles)
      this.submitFormPost(url, payloadStr);

      // Canal 3: JSONP GET save_all para asegurar guardado y confirmación en tiempo real
      if (encodeURIComponent(payloadStr).length < 6000) {
        try {
          const res = await this.fetchJsonp(url, {
            action: 'save_all',
            data: payloadStr
          });
          if (res && (res.success || res.games)) {
            pushConfirmed = true;
            this.isCloudOnline = true;
          }
        } catch (e) {
          console.warn('JSONP push warning:', e);
        }
      }
    } catch (err) {
      console.warn('Push error:', err);
    } finally {
      this._isPushing = false;
      if (window.app && app.updateDbStatusUi) {
        app.updateDbStatusUi();
      }
      if (this._pendingPush) {
        this.pushToGoogleSheets();
      }
    }

    return { success: pushConfirmed };
  }
};

// Main App Controller
const app = {
  currentTab: 'sessions',
  currentUserId: 'u1',
  activePlayerFilter: '',

  async init() {
    // 1. Auto-detect ?db=... in URL for seamless zero-setup sharing with friends
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const dbParam = urlParams.get('db');
      if (dbParam && dbParam.startsWith('https://script.google.com/macros/s/')) {
        db.setGSheetUrl(dbParam);
        try {
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        } catch (e) {}
      }
    } catch (e) {
      console.warn('URL params check failed:', e);
    }

    // 2. Si hay conexión a la nube configurada, sincronizar PRIMERO desde Google Sheets
    if (db.getGSheetUrl()) {
      try {
        await db.syncWithGoogleSheets();
      } catch (e) {
        console.warn('Initial cloud sync error:', e);
      }
    }

    // Limpieza automática de datos demo antiguos (Casa de Carlos, partidas y juegos falsos)
    try {
      const rawSessions = localStorage.getItem('bg_sessions');
      if (rawSessions && (rawSessions.includes('Casa de Carlos') || rawSessions.includes('"s1"') || rawSessions.includes('"s2"'))) {
        const cleanedSessions = JSON.parse(rawSessions).filter(s => s.id !== 's1' && s.id !== 's2' && !(s.location || '').includes('Casa de Carlos'));
        localStorage.setItem('bg_sessions', JSON.stringify(cleanedSessions));
      }
      const rawGames = localStorage.getItem('bg_games');
      if (rawGames && (rawGames.includes('"g1"') || rawGames.includes('"g2"') || rawGames.includes('"g3"') || rawGames.includes('"g4"'))) {
        const cleanedGames = JSON.parse(rawGames).filter(g => !['g1', 'g2', 'g3', 'g4'].includes(g.id));
        localStorage.setItem('bg_games', JSON.stringify(cleanedGames));
      }
      const gurl = db.getGSheetUrl();
      if (gurl && !sessionStorage.getItem('bg_test_cleaned')) {
        sessionStorage.setItem('bg_test_cleaned', 'true');
        db.fetchJsonp(gurl, { action: 'clean_test_data' }).catch(() => {});
      }
    } catch (e) {}

    // 3. Inicializar valores locales por defecto SOLO si localStorage sigue vacío y SIN enviar a la nube
    if (!localStorage.getItem('bg_friends')) {
      localStorage.setItem('bg_friends', JSON.stringify(DEFAULT_FRIENDS));
    }
    if (!localStorage.getItem('bg_games')) {
      localStorage.setItem('bg_games', JSON.stringify(DEFAULT_GAMES));
    }
    if (!localStorage.getItem('bg_sessions')) {
      localStorage.setItem('bg_sessions', JSON.stringify(DEFAULT_SESSIONS));
    }

    this.currentUserId = db.getCurrentUserId();
    this.updateUserHeader();
    this.updateDbStatusUi();
    this.populateModalSelects();

    // Auto-migrate any existing games in localStorage with unblocked official high-res covers & reviews
    this.migrateExistingGames();

    this.setTab('sessions');

    // INSTANT GATE: Check if device is authenticated with valid user ID & PIN
    const authUserId = localStorage.getItem('bg_auth_user_id') || localStorage.getItem('bg_current_user');
    const authUserPin = localStorage.getItem('bg_auth_user_pin');
    const friends = db.getFriends();
    const authenticatedFriend = friends.find(f => f.id === authUserId && (!authUserPin || (f.pin || '1234') === authUserPin));

    if (authenticatedFriend && sessionStorage.getItem('bg_user_entered') === 'true') {
      this.currentUserId = authenticatedFriend.id;
      db.setCurrentUserId(authenticatedFriend.id);
      this.closeUserGate();
    } else if (authenticatedFriend && authUserPin && (authenticatedFriend.pin || '1234') === authUserPin) {
      // Remembered on this phone
      this.currentUserId = authenticatedFriend.id;
      db.setCurrentUserId(authenticatedFriend.id);
      sessionStorage.setItem('bg_user_entered', 'true');
      document.documentElement.classList.add('user-entered');
      this.closeUserGate();
    } else {
      sessionStorage.removeItem('bg_user_entered');
      document.documentElement.classList.remove('user-entered');
      this.openUserGate(false);
    }

    // Secondary background sync to refresh any new updates
    if (db.getGSheetUrl()) {
      db.syncWithGoogleSheets().then(changed => {
        if (changed) {
          this.updateUserHeader();
          this.populateModalSelects();
          if (this.currentTab === 'sessions') this.renderSessions();
          if (this.currentTab === 'games') this.renderGames();
          if (this.currentTab === 'friends') this.renderFriends();
          const gate = document.getElementById('gate-screen');
          if (gate && !gate.classList.contains('hidden') && !document.documentElement.classList.contains('user-entered')) {
            this.populateGateSelect();
            if (this.gateMode === 'register') {
              this.renderGateNewMeeplePalette();
            }
          }
        }
      });
    }

    this.startAutoSync();
  },

  autoSyncInterval: null,
  startAutoSync() {
    if (this.autoSyncInterval) clearInterval(this.autoSyncInterval);
    
    const triggerSync = async () => {
      if (db.getGSheetUrl()) {
        const changed = await db.syncWithGoogleSheets();
        if (changed) {
          if (this.currentTab === 'sessions') this.renderSessions();
          if (this.currentTab === 'games') this.renderGames();
          if (this.currentTab === 'friends') this.renderFriends();
          this.populateModalSelects();
          this.updateUserHeader();
        }
      }
    };

    // Auto-poll cloud database every 5 seconds to keep all phones in sync in real time
    this.autoSyncInterval = setInterval(triggerSync, 5000);

    // Instant sync when returning to tab or unlocking mobile phone
    if (!this._visibilityListenerAdded) {
      this._visibilityListenerAdded = true;
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) triggerSync();
      });
      window.addEventListener('focus', () => {
        triggerSync();
      });
    }
  },

  getShareUrl() {
    let base = window.location.href.split('?')[0].split('#')[0];
    const url = db.getGSheetUrl();
    if (url && url !== CLUB_DEFAULT_GSHEET_URL) {
      return `${base}?db=${encodeURIComponent(url)}`;
    }
    return base;
  },

  updateDbStatusUi() {
    const icon = document.getElementById('db-status-icon');
    const label = document.getElementById('db-status-label');
    const statusCard = document.getElementById('db-modal-status-card');

    if (db.isCloudOnline) {
      if (icon) icon.className = 'fa-solid fa-cloud text-emerald-600 text-xs';
      if (label) label.textContent = 'En la Nube';
      if (statusCard) {
        statusCard.className = 'p-3.5 rounded-2xl border bg-emerald-50 border-emerald-200 text-emerald-950 flex items-center gap-3';
        statusCard.innerHTML = `
          <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg shrink-0 shadow-xs">
            <i class="fa-solid fa-cloud-check"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="font-black text-emerald-900 text-xs">Conectado y Sincronizado</span>
            </div>
            <p class="text-[11px] text-emerald-700 mt-0.5 leading-snug">
              Tu hoja de Google Sheets está activa y sincronizando datos en tiempo real.
            </p>
          </div>
        `;
      }
    } else {
      if (icon) icon.className = 'fa-solid fa-triangle-exclamation text-amber-500 text-xs';
      if (label) label.textContent = 'Sin Conexión';
      if (statusCard) {
        statusCard.className = 'p-3.5 rounded-2xl border bg-amber-50 border-amber-200 text-amber-950 flex items-center gap-3';
        statusCard.innerHTML = `
          <div class="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center text-lg shrink-0 shadow-xs">
            <i class="fa-solid fa-cloud-slash"></i>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span>
              <span class="font-black text-amber-900 text-xs">Google Sheets No Responde</span>
            </div>
            <p class="text-[11px] text-amber-800 mt-0.5 leading-snug">
              Google Apps Script está corriendo la versión antigua o necesita permisos. Revisa la guía de activación.
            </p>
          </div>
        `;
      }
    }
  },

  copyShareLink() {
    const shareUrl = this.getShareUrl();

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        const btnLabel = document.getElementById('btn-copy-share-label');
        if (btnLabel) {
          const orig = btnLabel.textContent;
          btnLabel.textContent = '¡Enlace Copiado!';
          setTimeout(() => { btnLabel.textContent = orig; }, 2500);
        }
        alert('¡Enlace copiado! Pégalo en tu grupo de WhatsApp.\n\nCualquier amigo que lo abra entrará conectado automáticamente a la misma base de datos del club.');
      }).catch(() => {
        prompt('Copia este enlace para enviarlo a tus amigos:', shareUrl);
      });
    } else {
      prompt('Copia este enlace para enviarlo a tus amigos:', shareUrl);
    }
  },

  async syncGoogleSheetsNow() {
    const icon = document.getElementById('db-status-icon');
    const label = document.getElementById('db-status-label');
    const btnModal = document.getElementById('btn-modal-sync');

    if (icon) icon.className = 'fa-solid fa-rotate fa-spin text-emerald-600 text-xs';
    if (label) label.textContent = 'Sincronizando...';
    if (btnModal) btnModal.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Descargando...</span>`;

    try {
      await db.syncWithGoogleSheets();

      if (db.isCloudOnline) {
        this.renderGames();
        this.renderSessions();
        this.renderFriends();
        this.populateModalSelects();
        this.updateUserHeader();

        const gameCount = db.getGames().length;
        if (icon) icon.className = 'fa-solid fa-check text-emerald-600 text-xs';
        if (label) label.textContent = 'Al día';
        if (btnModal) btnModal.innerHTML = `<i class="fa-solid fa-check text-emerald-600"></i><span>¡Descargado: ${gameCount} juegos!</span>`;
        alert(`¡Sincronización exitosa con Google Sheets!\n\nSe descargaron los datos actualizados de la nube (${gameCount} juegos en ludoteca).`);
      } else {
        if (btnModal) btnModal.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-600"></i><span>Sin respuesta de Google Sheets</span>`;
        alert(`⚠️ Google Apps Script no respondió.\n\nEsto sucede porque Google Apps Script aún no tiene implementada la "Nueva versión" en su menú de implementación.`);
      }

      setTimeout(() => {
        this.updateDbStatusUi();
        if (btnModal) btnModal.innerHTML = `<i class="fa-solid fa-arrow-down"></i><span>Descargar datos desde la Nube</span>`;
      }, 2500);
    } catch (e) {
      this.updateDbStatusUi();
      if (btnModal) btnModal.innerHTML = `<i class="fa-solid fa-arrow-down"></i><span>Descargar datos desde la Nube</span>`;
    }
  },

  async pushLocalToCloud() {
    const btn = document.getElementById('btn-modal-push');
    const icon = document.getElementById('db-status-icon');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Subiendo datos a la Nube...</span>`;
    if (icon) icon.className = 'fa-solid fa-rotate fa-spin text-emerald-600 text-xs';

    const localGames = db.getGames();
    const result = await db._executePush();

    if (result && result.success) {
      if (btn) btn.innerHTML = `<i class="fa-solid fa-check text-emerald-600"></i><span>¡${localGames.length} juegos subidos con éxito!</span>`;
      if (icon) icon.className = 'fa-solid fa-check text-emerald-600 text-xs';
      db.isCloudOnline = true;
      this.updateDbStatusUi();
      alert(`¡Excelente! Se subieron tus ${localGames.length} juegos a la hoja de Google Sheets y fue confirmado.\n\nAhora abre tu celular y verás exactamente los mismos ${localGames.length} juegos.`);
    } else {
      if (btn) btn.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-500"></i><span>Sin confirmación de la Nube</span>`;
      alert(`⚠️ Se intentaron enviar los datos, pero Google Apps Script no respondió con confirmación.\n\nPor favor actualiza a la "Nueva versión" en Google Apps Script.`);
    }

    setTimeout(() => {
      if (btn) btn.innerHTML = `<i class="fa-solid fa-arrow-up-from-bracket"></i><span>Subir datos de este equipo a la Nube</span>`;
      this.updateDbStatusUi();
    }, 2500);
  },

  migrateExistingGames() {
    let games = db.getGames();
    let updated = false;

    games = games.map(g => {
      // 1. Repair any legacy or broken proxy URLs
      if (g.image && (g.image.includes('weserv.nl') || g.image.includes('wsrv.nl') || g.image.includes('wp.com'))) {
        g.image = getSafeImageUrl(g.image);
        updated = true;
      }

      // 2. Specific fixes for default games with known working URLs
      if (g.title === 'Dixit' && (!g.image || g.image.includes('1b/Dixit') || g.image.includes('Dixit_board_game_box_cover'))) {
        g.image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dixit_game_0001.jpg/500px-Dixit_game_0001.jpg';
        updated = true;
      }
      if (g.title === 'Terraforming Mars' && (!g.image || g.image.includes('9/91/Terraforming_Mars_board_game_box.jpg'))) {
        g.image = 'https://upload.wikimedia.org/wikipedia/en/f/f0/Terraforming_Mars_board_game_box_cover.jpg';
        updated = true;
      }

      // 3. If game doesn't have an image or needs metadata update, match with catalog
      const cleanTitle = (g.title || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      const match = POPULAR_GAMES_CATALOG.find(cat => 
        cat.names.some(n => cleanTitle.includes(n) || n.includes(cleanTitle))
      );

      if (match) {
        if (!g.image || g.image.includes('unsplash') || g.image.includes('weserv.nl')) {
          g.image = getSafeImageUrl(match.image);
          updated = true;
        }
        if (!g.description || g.description.length < 30) {
          g.description = match.description;
          updated = true;
        }
      } else if (g.image) {
        const safe = getSafeImageUrl(g.image);
        if (safe !== g.image) {
          g.image = safe;
          updated = true;
        }
      }
      return g;
    });

    if (updated) {
      db.saveGames(games);
    }
  },

  setTab(tab) {
    this.currentTab = tab;
    ['sessions', 'games', 'friends'].forEach(t => {
      const section = document.getElementById(`tab-${t}`);
      const tnavBtn = document.getElementById(`tnav-${t}`);
      
      if (t === tab) {
        if (section) section.classList.remove('hidden');
        if (tnavBtn) {
          tnavBtn.className = 'py-2 px-2 rounded-lg text-xs font-black transition-all bg-white text-brand-700 shadow-xs flex items-center justify-center gap-1.5';
        }
      } else {
        if (section) section.classList.add('hidden');
        if (tnavBtn) {
          tnavBtn.className = 'py-2 px-2 rounded-lg text-xs font-bold transition-all text-slate-600 hover:text-brand-600 flex items-center justify-center gap-1.5';
        }
      }
    });

    // Scroll to top when switching tab
    window.scrollTo({ top: 0, behavior: 'instant' });

    if (tab === 'sessions') this.renderSessions();
    if (tab === 'games') this.renderGames();
    if (tab === 'friends') this.renderFriends();
  },

  updateUserHeader() {
    const friends = db.getFriends();
    const current = friends.find(f => f.id === this.currentUserId) || friends[0];
    if (!current) return;

    const avatar = document.getElementById('header-user-avatar');
    const nameEl = document.getElementById('header-user-name');
    
    if (avatar) avatar.innerHTML = getMeepleSvg(current.color, 20);
    if (nameEl) nameEl.textContent = current.name.split(' ')[0];
  },

  gateMode: 'login',

  setGateMode(mode) {
    this.gateMode = mode;
    const tabLogin = document.getElementById('btn-tab-gate-login');
    const tabRegister = document.getElementById('btn-tab-gate-register');
    const panelLogin = document.getElementById('gate-panel-login');
    const panelRegister = document.getElementById('gate-panel-register');

    if (mode === 'login') {
      if (tabLogin) tabLogin.className = 'py-2 px-2 rounded-xl text-xs font-black transition-all bg-white text-brand-700 shadow-xs flex items-center justify-center gap-1.5';
      if (tabRegister) tabRegister.className = 'py-2 px-2 rounded-xl text-xs font-bold transition-all text-slate-600 hover:text-brand-600 flex items-center justify-center gap-1.5';
      if (panelLogin) panelLogin.classList.remove('hidden');
      if (panelRegister) panelRegister.classList.add('hidden');
      this.populateGateSelect();
    } else {
      if (tabRegister) tabRegister.className = 'py-2 px-2 rounded-xl text-xs font-black transition-all bg-white text-brand-700 shadow-xs flex items-center justify-center gap-1.5';
      if (tabLogin) tabLogin.className = 'py-2 px-2 rounded-xl text-xs font-bold transition-all text-slate-600 hover:text-brand-600 flex items-center justify-center gap-1.5';
      if (panelRegister) panelRegister.classList.remove('hidden');
      if (panelLogin) panelLogin.classList.add('hidden');
      this.renderGateNewMeeplePalette();
      const input = document.getElementById('gate-new-name');
      if (input) setTimeout(() => input.focus(), 60);
    }
  },

  populateGateSelect() {
    const friends = db.getFriends();
    const select = document.getElementById('gate-user-select');
    if (!select) return;

    if (friends.length === 0) {
      select.innerHTML = '<option value="">No hay jugadores registrados</option>';
      return;
    }

    select.innerHTML = friends.map(f => `
      <option value="${f.id}" ${f.id === this.currentUserId ? 'selected' : ''}>
        ${f.name}
      </option>
    `).join('');

    this.handleGateUserSelectChange();
  },

  handleGateUserSelectChange() {
    const select = document.getElementById('gate-user-select');
    if (!select) return;

    const val = select.value;
    const friends = db.getFriends();
    const friend = friends.find(f => f.id === val) || friends[0];

    if (friend) {
      const meepleEl = document.getElementById('gate-preview-meeple');
      const nameEl = document.getElementById('gate-preview-name');
      if (meepleEl) meepleEl.innerHTML = getMeepleSvg(friend.color, 24);
      if (nameEl) nameEl.textContent = friend.name;
    }
  },

  selectedMeepleColor: 'bg-red-600',

  setGateNewMeepleColor(colorId) {
    this.selectedMeepleColor = colorId;
    const hidden = document.getElementById('gate-selected-meeple-color');
    if (hidden) hidden.value = colorId;
    this.renderGateNewMeeplePalette();
  },

  renderGateNewMeeplePalette() {
    const friends = db.getFriends();
    const takenColors = new Set(friends.map(f => f.color));
    const box = document.getElementById('gate-new-meeple-palette');
    if (!box) return;

    // Find first available color if current selection is taken
    const availableColors = MEEPLE_COLORS.filter(mc => !takenColors.has(mc.id));
    if (!this.selectedMeepleColor || takenColors.has(this.selectedMeepleColor)) {
      this.selectedMeepleColor = availableColors.length > 0 ? availableColors[0].id : MEEPLE_COLORS[0].id;
    }
    const hidden = document.getElementById('gate-selected-meeple-color');
    if (hidden) hidden.value = this.selectedMeepleColor;

    box.innerHTML = MEEPLE_COLORS.map(mc => {
      const isTaken = takenColors.has(mc.id);
      const isSel = mc.id === this.selectedMeepleColor && !isTaken;

      if (isTaken) {
        const takenFriend = friends.find(f => f.color === mc.id);
        const ownerName = takenFriend ? takenFriend.name.split(' ')[0] : 'Ocupado';
        return `
          <div class="p-1.5 rounded-xl bg-slate-100/70 border border-slate-200/50 opacity-35 flex flex-col items-center gap-0.5 cursor-not-allowed select-none" title="Color ya elegido por ${ownerName}">
            ${getMeepleSvg(mc.id, 20)}
            <span class="text-[8px] font-bold text-slate-500 truncate max-w-[50px]">${ownerName}</span>
          </div>
        `;
      }

      return `
        <button type="button" onclick="app.setGateNewMeepleColor('${mc.id}')" class="p-1.5 rounded-xl transition-all flex flex-col items-center gap-0.5 bg-white border ${isSel ? 'border-brand-500 ring-2 ring-brand-400 shadow-xs scale-105 bg-brand-50/40' : 'border-slate-200 hover:border-brand-300 active:scale-95'}">
          ${getMeepleSvg(mc.id, 22)}
          <span class="text-[8px] font-bold text-slate-700">${mc.name}</span>
        </button>
      `;
    }).join('');
  },

  submitGateLogin() {
    const select = document.getElementById('gate-user-select');
    if (!select) return;
    const val = select.value;
    if (!val) {
      alert('Por favor selecciona un perfil para ingresar.');
      return;
    }

    const friends = db.getFriends();
    const friend = friends.find(f => f.id === val);
    if (!friend) {
      alert('No se encontró el perfil seleccionado.');
      return;
    }

    const pinInput = document.getElementById('gate-login-pin');
    const enteredPin = (pinInput?.value || '').trim();
    const expectedPin = friend.pin || '1234';

    if (!enteredPin) {
      alert(`Por favor escribe el PIN de 4 dígitos de ${friend.name} para ingresar.\n(El PIN inicial es 1234)`);
      if (pinInput) pinInput.focus();
      return;
    }

    if (enteredPin !== expectedPin) {
      alert(`⚠️ Clave PIN incorrecta para ${friend.name}.\n\nSi la olvidaste, el administrador del club puede ayudarte a revisarla o cambiarla en Google Sheets.`);
      if (pinInput) {
        pinInput.value = '';
        pinInput.focus();
      }
      return;
    }

    // Login exitoso: recordar credenciales en este teléfono
    localStorage.setItem('bg_auth_user_id', friend.id);
    localStorage.setItem('bg_auth_user_pin', expectedPin);

    if (pinInput) pinInput.value = '';
    this.selectUser(val);
  },

  submitGateRegister() {
    const nameInput = document.getElementById('gate-new-name');
    const name = nameInput ? nameInput.value.trim() : '';

    const phoneInput = document.getElementById('gate-new-phone');
    const phone = phoneInput ? phoneInput.value.trim() : '';

    const pinInput = document.getElementById('gate-new-pin');
    const pin = pinInput ? pinInput.value.trim() : '';

    const pinConfirmInput = document.getElementById('gate-new-pin-confirm');
    const pinConfirm = pinConfirmInput ? pinConfirmInput.value.trim() : '';

    if (!name) {
      alert('Por favor escribe tu nombre o apodo para registrarte.');
      if (nameInput) nameInput.focus();
      return;
    }

    if (!phone || phone.length < 6) {
      alert('Por favor escribe tu número de celular para que tus amigos puedan coordinar contigo.');
      if (phoneInput) phoneInput.focus();
      return;
    }

    if (!pin || pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      alert('Tu clave PIN debe ser de exactamente 4 números (ej. 1234).');
      if (pinInput) pinInput.focus();
      return;
    }

    if (pin !== pinConfirm) {
      alert('Las claves PIN ingresadas no coinciden. Por favor repite la misma clave en ambos campos.');
      if (pinConfirmInput) pinConfirmInput.focus();
      return;
    }

    const friends = db.getFriends();
    if (friends.some(f => f.phone && f.phone === phone)) {
      alert('Ese número de celular ya está registrado por otro amigo del club.');
      if (phoneInput) phoneInput.focus();
      return;
    }

    const takenColors = new Set(friends.map(f => f.color));
    const hiddenColor = document.getElementById('gate-selected-meeple-color');
    const color = hiddenColor?.value || this.selectedMeepleColor || 'bg-red-600';

    if (takenColors.has(color)) {
      alert('Ese color de Meeple ya lo tiene otro amigo del club. Elige uno disponible.');
      return;
    }

    const parts = name.split(' ').filter(Boolean);
    const initials = parts.length > 1 
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();

    const newFriend = {
      id: 'u_' + Date.now(),
      name,
      phone,
      pin,
      color,
      initials,
      role: friends.length === 0 ? 'admin' : 'member'
    };

    friends.push(newFriend);
    db.saveFriends(friends);

    localStorage.setItem('bg_auth_user_id', newFriend.id);
    localStorage.setItem('bg_auth_user_pin', pin);

    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }

    this.selectUser(newFriend.id);
  },

  openUserProfileModal() {
    const friends = db.getFriends();
    const current = friends.find(f => f.id === this.currentUserId) || friends[0];
    if (!current) return;

    const details = document.getElementById('user-profile-details');
    if (details) {
      const isAdmin = current.role === 'admin' || current.id === 'u1';
      details.innerHTML = `
        <div class="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center shrink-0">
          ${getMeepleSvg(current.color, 28)}
        </div>
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-1.5">
            <h4 class="font-black text-sm text-slate-900 truncate">${current.name}</h4>
            <span class="text-[9px] font-black px-1.5 py-0.5 rounded-full ${isAdmin ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-700'}">
              ${isAdmin ? '👑 Admin' : '♟️ Jugador'}
            </span>
          </div>
          <p class="text-[11px] text-slate-500 font-medium mt-0.5"><i class="fa-brands fa-whatsapp text-emerald-600"></i> ${current.phone || 'Sin celular'}</p>
          <p class="text-[10px] text-brand-600 font-bold mt-0.5"><i class="fa-solid fa-key text-[9px]"></i> PIN: •••• (Protegido)</p>
        </div>
      `;
    }

    this.openModal('modal-user-profile');
  },

  promptChangePin() {
    const friends = db.getFriends();
    const current = friends.find(f => f.id === this.currentUserId);
    if (!current) return;

    const currentPinPrompt = prompt('Ingresa tu PIN actual (4 dígitos):');
    if (!currentPinPrompt) return;

    if (currentPinPrompt.trim() !== (current.pin || '1234')) {
      alert('Clave PIN actual incorrecta.');
      return;
    }

    const newPin = prompt('Crea tu nuevo PIN de 4 dígitos numéricos:');
    if (!newPin || newPin.trim().length !== 4 || !/^\d{4}$/.test(newPin.trim())) {
      alert('El nuevo PIN debe tener exactamente 4 dígitos numéricos (ej. 5678).');
      return;
    }

    current.pin = newPin.trim();
    db.saveFriends(friends);
    localStorage.setItem('bg_auth_user_pin', current.pin);

    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }

    alert('¡Tu clave PIN fue actualizada con éxito!');
    this.closeModal('modal-user-profile');
  },

  logoutUser() {
    if (confirm('¿Deseas cerrar sesión en este teléfono? Tendrás que ingresar tu PIN para volver a entrar.')) {
      localStorage.removeItem('bg_auth_user_id');
      localStorage.removeItem('bg_auth_user_pin');
      sessionStorage.removeItem('bg_user_entered');
      document.documentElement.classList.remove('user-entered');
      this.closeModal('modal-user-profile');
      this.openUserGate(false);
    }
  },

  canEditGame(game) {
    const friends = db.getFriends();
    const me = friends.find(f => f.id === this.currentUserId);
    const isAdmin = me && (me.role === 'admin' || me.id === 'u1');
    if (isAdmin) return true;
    if (!game) return false;
    return game.ownerId === this.currentUserId;
  },

  selectUser(userId) {
    this.currentUserId = userId;
    db.setCurrentUserId(userId);
    sessionStorage.setItem('bg_user_entered', 'true');
    localStorage.setItem('bg_user_chosen', 'true');
    document.documentElement.classList.add('user-entered');

    this.closeUserGate();
    this.updateUserHeader();
    this.populateModalSelects();
    this.renderFriends();
    this.renderGames();
    this.renderSessions();
  },

  openUserGate(canCancel = false) {
    const gate = document.getElementById('gate-screen');
    if (!gate) return;

    document.documentElement.classList.remove('user-entered');
    gate.classList.remove('hidden');

    this.setGateMode('login');

    const cancelCont = document.getElementById('gate-close-container');
    const currName = document.getElementById('gate-current-username');
    if (cancelCont) {
      if (canCancel) {
        cancelCont.classList.remove('hidden');
        const friends = db.getFriends();
        const curFriend = friends.find(f => f.id === this.currentUserId);
        if (currName && curFriend) currName.textContent = curFriend.name;
      } else {
        cancelCont.classList.add('hidden');
      }
    }

    const nameInput = document.getElementById('gate-new-name');
    if (nameInput) nameInput.value = '';
  },

  closeUserGate() {
    const gate = document.getElementById('gate-screen');
    if (gate) gate.classList.add('hidden');
    document.documentElement.classList.add('user-entered');
  },

  openUserSheet(canCancel) {
    this.openUserGate(canCancel);
  },

  closeUserSheet() {
    this.closeUserGate();
  },

  populateModalSelects() {
    const friends = db.getFriends();
    const games = db.getGames();

    const ownerSelect = document.getElementById('game-owner-id');
    if (ownerSelect) {
      ownerSelect.innerHTML = friends.map(f => `<option value="${f.id}">${f.name}</option>`).join('');
    }

    const gameSelect = document.getElementById('session-game-id');
    if (gameSelect) {
      gameSelect.innerHTML = games.map(g => `<option value="${g.id}">${g.title} (${g.minPlayers}-${g.maxPlayers} jug.)</option>`).join('');
    }

    this.populateFriendColorSelect();
  },

  openNewGameModal() {
    const form = document.getElementById('form-new-game');
    if (form) form.reset();
    document.getElementById('game-edit-id').value = '';
    const heading = document.getElementById('modal-game-heading');
    if (heading) heading.textContent = 'Registrar Juego';
    const label = document.getElementById('btn-save-game-label');
    if (label) label.textContent = 'Guardar en Ludoteca';
    const queryInput = document.getElementById('game-magic-query');
    if (queryInput) queryInput.value = '';
    const extCard = document.getElementById('game-extracted-card');
    if (extCard) extCard.classList.add('hidden');
    this.hideGameSuggestions();
    const clearBtn = document.getElementById('btn-clear-query');
    if (clearBtn) clearBtn.classList.add('hidden');
    this.openModal('modal-game');
  },

  showExtractedCard(data) {
    const card = document.getElementById('game-extracted-card');
    if (!card) return;
    const imgEl = document.getElementById('game-extracted-img');
    const safeImg = getSafeImageUrl(data.image);
    if (imgEl) {
      imgEl.src = safeImg || '';
      imgEl.style.display = '';
      imgEl.dataset.wikiTried = '';
    }
    const titleEl = document.getElementById('game-extracted-title');
    if (titleEl) titleEl.textContent = data.title;
    const playersEl = document.getElementById('game-extracted-players');
    if (playersEl) playersEl.innerHTML = `<i class="fa-solid fa-users text-[9px]"></i> ${data.minPlayers} - ${data.maxPlayers} jug.`;
    const durEl = document.getElementById('game-extracted-duration');
    if (durEl) durEl.innerHTML = `<i class="fa-solid fa-stopwatch text-[9px]"></i> ~${data.durationMin}m`;
    const descEl = document.getElementById('game-extracted-desc');
    if (descEl) descEl.textContent = data.description || '';
    card.classList.remove('hidden');
  },

  openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
    if (modalId === 'modal-session') {
      const d = new Date();
      d.setDate(d.getDate() + 3);
      document.getElementById('session-date').value = d.toISOString().split('T')[0];
    }
    if (modalId === 'modal-db-settings') {
      const input = document.getElementById('input-custom-gsheet-url');
      if (input) input.value = db.getGSheetUrl();
      this.updateDbStatusUi();
    }
  },

  async saveCustomGSheetUrl() {
    const input = document.getElementById('input-custom-gsheet-url');
    if (!input) return;
    const val = input.value.trim();
    if (!val || !val.startsWith('https://script.google.com/macros/s/')) {
      alert('Por favor pega una URL válida de Google Apps Script que empiece con https://script.google.com/macros/s/ y termine en /exec');
      return;
    }
    db.setGSheetUrl(val);
    const btn = document.getElementById('btn-save-custom-url');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>Conectando...</span>`;

    const success = await db.syncWithGoogleSheets();
    if (db.isCloudOnline) {
      this.updateDbStatusUi();
      this.renderGames();
      this.renderSessions();
      this.renderFriends();
      if (btn) btn.innerHTML = `<i class="fa-solid fa-check text-emerald-600"></i><span>¡Conectado con éxito!</span>`;
      alert('¡Excelente! Conexión exitosa con Google Sheets.\n\nTodos los datos ahora se sincronizan en tiempo real.');
    } else {
      this.updateDbStatusUi();
      if (btn) btn.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-500"></i><span>Sin respuesta</span>`;
      alert('La URL fue guardada pero Google Sheets no respondió.\n\nAsegúrate de que en la configuración de la Web App en Apps Script, "Quién tiene acceso" esté en "Cualquier usuario" (Anyone).');
    }

    setTimeout(() => {
      if (btn) btn.innerHTML = `<i class="fa-solid fa-plug"></i><span>Conectar y Probar</span>`;
    }, 3000);
  },

  async fetchBggData(query) {
    if (!query) return null;
    const cleanQ = query.trim();

    const fetchWithTimeout = async (url, timeoutMs = 4500) => {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        return response;
      } catch (err) {
        clearTimeout(id);
        throw err;
      }
    };

    try {
      // 1. Search BGG for Game ID via AllOrigins CORS Proxy or corsproxy fallback
      const bggSearchUrl = `https://boardgamegeek.com/xmlapi2/search?type=boardgame&query=${encodeURIComponent(cleanQ)}`;
      let searchXmlText = '';

      try {
        const res = await fetchWithTimeout(`https://api.allorigins.win/raw?url=${encodeURIComponent(bggSearchUrl)}`, 4000);
        if (res.ok) searchXmlText = await res.text();
      } catch (e) {
        try {
          const res = await fetchWithTimeout(`https://corsproxy.io/?${encodeURIComponent(bggSearchUrl)}`, 4000);
          if (res.ok) searchXmlText = await res.text();
        } catch (e2) {}
      }

      if (!searchXmlText) return null;

      const parser = new DOMParser();
      const searchDoc = parser.parseFromString(searchXmlText, 'application/xml');
      const items = searchDoc.querySelectorAll('item');
      if (!items || items.length === 0) return null;

      // Match best item (exact name match or first item)
      let matchedItem = items[0];
      const qLower = cleanQ.toLowerCase();
      for (const it of items) {
        const nameNode = it.querySelector('name[type="primary"]') || it.querySelector('name');
        const nameVal = (nameNode ? nameNode.getAttribute('value') : '').toLowerCase();
        if (nameVal === qLower) {
          matchedItem = it;
          break;
        }
      }

      const bggId = matchedItem.getAttribute('id');
      if (!bggId) return null;

      // 2. Fetch full Game Thing details from BGG
      const bggThingUrl = `https://boardgamegeek.com/xmlapi2/thing?id=${bggId}&stats=1`;
      let thingXmlText = '';

      try {
        const res = await fetchWithTimeout(`https://api.allorigins.win/raw?url=${encodeURIComponent(bggThingUrl)}`, 4500);
        if (res.ok) thingXmlText = await res.text();
      } catch (e) {
        try {
          const res = await fetchWithTimeout(`https://corsproxy.io/?${encodeURIComponent(bggThingUrl)}`, 4500);
          if (res.ok) thingXmlText = await res.text();
        } catch (e2) {}
      }

      if (!thingXmlText) return null;

      const thingDoc = parser.parseFromString(thingXmlText, 'application/xml');
      const itemNode = thingDoc.querySelector('item');
      if (!itemNode) return null;

      const primaryNameNode = itemNode.querySelector('name[type="primary"]') || itemNode.querySelector('name');
      const title = primaryNameNode ? primaryNameNode.getAttribute('value') : cleanQ;

      const imgNode = itemNode.querySelector('image') || itemNode.querySelector('thumbnail');
      let imgUrl = imgNode ? imgNode.textContent.trim() : '';
      if (imgUrl.startsWith('//')) imgUrl = 'https:' + imgUrl;

      const minP = parseInt(itemNode.querySelector('minplayers')?.getAttribute('value')) || 2;
      const maxP = parseInt(itemNode.querySelector('maxplayers')?.getAttribute('value')) || 4;
      const duration = parseInt(itemNode.querySelector('playingtime')?.getAttribute('value')) ||
                       parseInt(itemNode.querySelector('maxplaytime')?.getAttribute('value')) || 60;

      let desc = itemNode.querySelector('description')?.textContent || '';
      if (desc) {
        const d = document.createElement('div');
        d.innerHTML = desc;
        desc = (d.textContent || d.innerText || '')
          .replace(/&#10;/g, '\n')
          .replace(/&quot;/g, '"')
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .trim();
        if (desc.length > 500) {
          desc = desc.substring(0, 500) + '...';
        }
      }

      return {
        id: bggId,
        title,
        minPlayers: minP,
        maxPlayers: maxP,
        durationMin: duration,
        image: getSafeImageUrl(imgUrl),
        description: desc
      };
    } catch (err) {
      console.warn('fetchBggData error:', err);
      return null;
    }
  },

  async fetchWikiCover(title) {
    if (!title) return null;
    try {
      const cleanTitle = title.replace(/\(.*?\)/g, '').trim();
      const res = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(cleanTitle + ' board game')}&srlimit=1&utf8=&format=json&origin=*`
      );
      const data = await res.json();
      const first = data?.query?.search?.[0];
      if (!first || !first.title) return null;
      const sumRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(first.title)}`);
      if (!sumRes.ok) return null;
      const sumData = await sumRes.json();
      return sumData.originalimage?.source || sumData.thumbnail?.source || null;
    } catch (e) {
      return null;
    }
  },

  repairGameCoverInDb(title, newUrl) {
    if (!title || !newUrl) return;
    try {
      let games = db.getGames();
      let updated = false;
      const cleanT = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      games = games.map(g => {
        const gTitle = (g.title || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        if (gTitle === cleanT || gTitle.includes(cleanT) || cleanT.includes(gTitle)) {
          g.image = newUrl;
          updated = true;
        }
        return g;
      });
      if (updated) {
        db.saveGames(games);
      }
    } catch (e) {
      console.warn('repairGameCoverInDb error:', e);
    }
  },

  handleCoverError(imgEl, originalUrl) {
    if (!imgEl) return;
    const currentSrc = imgEl.src || '';

    // Step 1: If it's a Wikimedia thumbnail that failed, try stripping /thumb/ to get the source image
    if (currentSrc.includes('upload.wikimedia.org') && currentSrc.includes('/thumb/')) {
      const directSrc = currentSrc.replace('/thumb/', '/').replace(/\/\d+px-[^\/]+$/, '');
      if (directSrc !== currentSrc) {
        imgEl.src = directSrc;
        return;
      }
    }

    // Step 2: Auto-resolve with live official box art from Wikipedia REST API using the title
    const gameTitle = imgEl.alt || '';
    if (gameTitle && !imgEl.dataset.wikiTried) {
      imgEl.dataset.wikiTried = 'true';
      this.fetchWikiCover(gameTitle).then(newUrl => {
        if (newUrl && newUrl !== currentSrc) {
          imgEl.src = newUrl;
          this.repairGameCoverInDb(gameTitle, newUrl);
        } else {
          this.showFallbackCover(imgEl);
        }
      }).catch(() => {
        this.showFallbackCover(imgEl);
      });
      return;
    }

    // Step 3: Show styled fallback gradient dice badge
    this.showFallbackCover(imgEl);
  },

  showFallbackCover(imgEl) {
    imgEl.style.display = 'none';
    if (imgEl.nextElementSibling) {
      imgEl.nextElementSibling.classList.remove('hidden');
      imgEl.nextElementSibling.classList.add('flex');
    }
  },

  handleExtractedImgError(imgEl) {
    if (!imgEl) return;
    const currentSrc = imgEl.src || '';
    if (currentSrc.includes('upload.wikimedia.org') && currentSrc.includes('/thumb/')) {
      const directSrc = currentSrc.replace('/thumb/', '/').replace(/\/\d+px-[^\/]+$/, '');
      if (directSrc !== currentSrc) {
        imgEl.src = directSrc;
        return;
      }
    }
    const title = document.getElementById('game-title')?.value || document.getElementById('game-magic-query')?.value || '';
    if (title && !imgEl.dataset.wikiTried) {
      imgEl.dataset.wikiTried = 'true';
      this.fetchWikiCover(title).then(newUrl => {
        if (newUrl) {
          imgEl.src = newUrl;
          const imageInput = document.getElementById('game-image');
          if (imageInput) imageInput.value = newUrl;
        }
      });
    }
  },

  handleSuggestionImgError(imgEl, title) {
    if (!imgEl) return;
    if (title && !imgEl.dataset.wikiTried) {
      imgEl.dataset.wikiTried = 'true';
      this.fetchWikiCover(title).then(newUrl => {
        if (newUrl) imgEl.src = newUrl;
        else imgEl.style.display = 'none';
      }).catch(() => {
        imgEl.style.display = 'none';
      });
    } else {
      imgEl.style.display = 'none';
    }
  },

  getGameCoverHtml(game, type = 'card') {
    const safeTitle = (game.title || 'Juego').replace(/"/g, '&quot;');
    const colors = [
      'from-indigo-600 via-purple-600 to-brand-800',
      'from-rose-600 via-pink-600 to-amber-700',
      'from-emerald-600 via-teal-600 to-slate-800',
      'from-blue-600 via-indigo-600 to-slate-900',
      'from-violet-700 via-purple-700 to-fuchsia-800',
      'from-amber-600 via-orange-600 to-red-700'
    ];
    let hash = 0;
    for (let i = 0; i < safeTitle.length; i++) hash = safeTitle.charCodeAt(i) + ((hash << 5) - hash);
    const colorGrad = colors[Math.abs(hash) % colors.length];

    const safeUrl = getSafeImageUrl(game.image);
    const rawUrlEscaped = (game.image || '').replace(/"/g, '&quot;').replace(/'/g, "\\'");

    if (type === 'session') {
      return `
        <div class="relative w-full h-full bg-slate-900">
          ${safeUrl ? `
            <img src="${safeUrl}" 
                 alt="${safeTitle}" 
                 loading="lazy"
                 referrerpolicy="no-referrer"
                 onerror="app.handleCoverError(this, '${rawUrlEscaped}')" 
                 class="w-full h-full object-cover">
          ` : ''}
          <div class="absolute inset-0 ${safeUrl ? 'hidden' : 'flex'} bg-gradient-to-br ${colorGrad} p-4 flex flex-col justify-center items-center text-white text-center">
            <i class="fa-solid fa-dice-d20 text-3xl opacity-80 mb-1"></i>
            <span class="font-extrabold text-sm drop-shadow-sm">${safeTitle}</span>
          </div>
        </div>
      `;
    }

    return `
      <div class="w-20 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-900 shadow-sm relative flex items-center justify-center cursor-pointer group" onclick="app.showGameDetail('${game.id}')" title="Ver reseña de ${safeTitle}">
        ${safeUrl ? `
          <img src="${safeUrl}" 
               alt="${safeTitle}" 
               loading="lazy"
               referrerpolicy="no-referrer"
               onerror="app.handleCoverError(this, '${rawUrlEscaped}')" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200">
        ` : ''}
        <div class="absolute inset-0 ${safeUrl ? 'hidden' : 'flex'} bg-gradient-to-br ${colorGrad} p-2 flex flex-col justify-between items-center text-white text-center">
          <i class="fa-solid fa-dice-d20 text-base opacity-90 mt-1"></i>
          <span class="text-[10px] font-black leading-tight line-clamp-2">${safeTitle}</span>
          <span class="text-[8px] font-bold uppercase tracking-wider text-white/90 bg-black/30 px-1.5 py-0.5 rounded-full">Juego</span>
        </div>
      </div>
    `;
  },

  showGameDetail(gameId) {
    const games = db.getGames();
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    const friends = db.getFriends();
    const owner = friends.find(f => f.id === game.ownerId) || { name: 'Comunitario' };
    const canEdit = this.canEditGame(game);

    const content = document.getElementById('game-detail-content');
    content.innerHTML = `
      <div class="space-y-3.5">
        <!-- Cover Header -->
        <div class="relative h-44 rounded-2xl overflow-hidden bg-slate-900 shadow-md">
          ${this.getGameCoverHtml(game, 'session')}
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none"></div>
          <div class="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
            <span class="text-[10px] font-bold uppercase tracking-wider text-brand-300">Aportado por: ${owner.name}</span>
            <h2 class="text-xl font-black drop-shadow-sm leading-tight">${game.title}</h2>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-users"></i>
            </div>
            <div>
              <div class="text-[10px] text-slate-400 font-semibold uppercase">Jugadores</div>
              <div class="font-extrabold text-slate-800">${game.minPlayers} - ${game.maxPlayers} jug.</div>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200/80 p-2.5 rounded-xl flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
              <i class="fa-solid fa-stopwatch"></i>
            </div>
            <div>
              <div class="text-[10px] text-slate-400 font-semibold uppercase">Duración</div>
              <div class="font-extrabold text-slate-800">~${game.durationMin} min</div>
            </div>
          </div>
        </div>

        <!-- Full Review Section -->
        <div class="bg-gradient-to-br from-indigo-50/70 to-purple-50/70 border border-indigo-100 rounded-2xl p-4 space-y-2">
          <h4 class="text-xs font-black text-indigo-950 uppercase tracking-wider flex items-center gap-1.5">
            <i class="fa-solid fa-book-open-reader text-brand-600 text-sm"></i>
            <span>Reseña Completa & Temática</span>
          </h4>
          <p class="text-xs text-slate-700 leading-relaxed font-normal whitespace-pre-line">
            ${game.description || 'Sin reseña registrada aún. Puedes agregar una pulsando en "Modificar / Editar".'}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2 pt-1">
          <button onclick="app.quickScheduleFromDetail('${game.id}')" class="w-full py-3 bg-brand-600 active:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2">
            <i class="fa-solid fa-calendar-plus"></i>
            <span>Programar Partida con este Juego</span>
          </button>

          ${canEdit ? `
          <div class="grid grid-cols-2 gap-2">
            <button onclick="app.editGame('${game.id}')" class="py-2.5 bg-slate-100 active:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-pen-to-square text-brand-600"></i>
              <span>Modificar / Editar</span>
            </button>

            <button onclick="app.deleteGame('${game.id}')" class="py-2.5 bg-rose-50 active:bg-rose-100 text-rose-700 font-bold text-xs rounded-xl border border-rose-200 flex items-center justify-center gap-1.5">
              <i class="fa-solid fa-trash-can text-rose-600"></i>
              <span>Eliminar Juego</span>
            </button>
          </div>
          ` : `
          <div class="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-center">
            <span class="text-[11px] text-slate-500 font-medium"><i class="fa-solid fa-lock text-slate-400 mr-1"></i> Solo ${owner.name} o el administrador pueden editar o eliminar este juego.</span>
          </div>
          `}
        </div>
      </div>
    `;

    this.openModal('modal-game-detail');
  },

  quickScheduleFromDetail(gameId) {
    this.closeModal('modal-game-detail');
    this.quickScheduleGame(gameId);
  },

  editGame(gameId) {
    this.closeModal('modal-game-detail');
    const games = db.getGames();
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    if (!this.canEditGame(game)) {
      alert('Solo el dueño de este juego o el administrador tienen permiso para editarlo.');
      return;
    }

    document.getElementById('game-edit-id').value = game.id;
    const heading = document.getElementById('modal-game-heading');
    if (heading) heading.textContent = 'Modificar Juego';
    const label = document.getElementById('btn-save-game-label');
    if (label) label.textContent = 'Guardar Cambios';

    document.getElementById('game-title').value = game.title || '';
    document.getElementById('game-min').value = game.minPlayers || 2;
    document.getElementById('game-max').value = game.maxPlayers || 4;
    document.getElementById('game-duration').value = game.durationMin || 60;
    document.getElementById('game-owner-id').value = game.ownerId || 'u1';
    document.getElementById('game-image').value = game.image || '';
    document.getElementById('game-desc').value = game.description || '';

    const queryInput = document.getElementById('game-magic-query');
    if (queryInput) queryInput.value = game.title || '';

    const fb = document.getElementById('magic-feedback');
    if (fb) fb.classList.add('hidden');

    this.updateImagePreview(game.image || '');
    this.openModal('modal-game');
  },

  deleteGame(gameId) {
    const games = db.getGames();
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    if (!this.canEditGame(game)) {
      alert('Solo el dueño de este juego o el administrador tienen permiso para eliminarlo.');
      return;
    }

    if (!confirm(`¿Estás seguro de que deseas eliminar "${game.title}" de la ludoteca?`)) {
      return;
    }

    // Registrar en lista negra de eliminados para blindar contra resurrecciones
    try {
      const deleted = JSON.parse(localStorage.getItem('bg_deleted_games') || '[]');
      if (!deleted.includes(gameId)) deleted.push(gameId);
      if (game.title) {
        const cleanT = game.title.trim().toLowerCase();
        if (!deleted.includes(cleanT)) deleted.push(cleanT);
      }
      localStorage.setItem('bg_deleted_games', JSON.stringify(deleted));
    } catch(e) {}

    const updated = games.filter(g => g.id !== gameId);
    localStorage.setItem('bg_games', JSON.stringify(updated));

    this.closeModal('modal-game-detail');
    this.populateModalSelects();
    this.renderGames();
    this.renderSessions();

    // Eliminar inmediatamente en Google Sheets por ID y guardar
    const url = db.getGSheetUrl();
    if (url) {
      db.fetchJsonp(url, { action: 'delete_game', id: gameId }).catch(() => {});
      db.pushToGoogleSheets();
    }
  },

  handleFileUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Compress & resize image to max 500x500 to keep it ultra lightweight
        const canvas = document.createElement('canvas');
        const maxDim = 500;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDim) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          }
        } else {
          if (height > maxDim) {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to optimized JPEG data URL
        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.82);

        document.getElementById('game-image').value = optimizedDataUrl;
        this.updateImagePreview(optimizedDataUrl);

        const fb = document.getElementById('magic-feedback');
        if (fb) {
          fb.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600"></i><span>¡Foto cargada y optimizada con éxito!</span>`;
          fb.classList.remove('hidden');
        }
        if (navigator.vibrate) navigator.vibrate(30);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  },

  updateImagePreview(url) {
    const box = document.getElementById('game-image-preview-box');
    const img = document.getElementById('game-image-preview');
    if (box && img) {
      if (url && url.trim().length > 10) {
        img.src = url;
        box.classList.remove('hidden');
      } else {
        box.classList.add('hidden');
      }
    }
    const extImg = document.getElementById('game-extracted-img');
    if (extImg && url) {
      extImg.src = url;
    }
  },

  /* ======================================================== */
  /* REAL-TIME TYPEAHEAD AUTOCOMPLETE & WEB AUTO-FILL */
  /* ======================================================== */
  gameSearchDebounceTimer: null,

  handleGameSearchInput(val) {
    const query = (val || '').trim();
    const box = document.getElementById('game-suggestions-box');
    const clearBtn = document.getElementById('btn-clear-query');

    if (clearBtn) {
      if (query.length > 0) clearBtn.classList.remove('hidden');
      else clearBtn.classList.add('hidden');
    }

    if (!query) {
      this.hideGameSuggestions();
      return;
    }

    const cleanStr = (s) => (s || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const qClean = cleanStr(query);

    // 1. Instant local catalog matches (0ms response)
    let localMatches = POPULAR_GAMES_CATALOG.filter(g => {
      const matchPrefix = g.names.some(n => cleanStr(n).startsWith(qClean)) || cleanStr(g.title).startsWith(qClean);
      const matchIncludes = g.names.some(n => cleanStr(n).includes(qClean)) || cleanStr(g.title).includes(qClean);
      return matchPrefix || matchIncludes;
    });

    // Sort to prioritize games that start with the typed letter(s)
    localMatches.sort((a, b) => {
      const aStarts = a.names.some(n => cleanStr(n).startsWith(qClean)) || cleanStr(a.title).startsWith(qClean);
      const bStarts = b.names.some(n => cleanStr(n).startsWith(qClean)) || cleanStr(b.title).startsWith(qClean);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return a.title.localeCompare(b.title);
    });

    localMatches = localMatches.slice(0, 6);

    // Render local matches immediately
    this.renderGameSuggestions(localMatches, query, false);

    // 2. Debounced online Wikipedia search if query has at least 2 characters
    if (this.gameSearchDebounceTimer) clearTimeout(this.gameSearchDebounceTimer);

    if (qClean.length >= 2) {
      this.gameSearchDebounceTimer = setTimeout(async () => {
        try {
          const res = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query + ' board game')}&srlimit=5&utf8=&format=json&origin=*`
          );
          const data = await res.json();
          const searchItems = data?.query?.search || [];

          const existingTitles = new Set(localMatches.map(m => cleanStr(m.title)));
          const webSuggestions = [];

          for (const item of searchItems) {
            const cleanTitle = item.title.replace(/\s*\(board game\)/i, '').replace(/\s*\(game\)/i, '').trim();
            if (!existingTitles.has(cleanStr(cleanTitle))) {
              existingTitles.add(cleanStr(cleanTitle));
              webSuggestions.push({
                isWeb: true,
                title: cleanTitle,
                snippet: (item.snippet || '').replace(/<[^>]+>/g, '').slice(0, 75) + '...'
              });
            }
          }

          if (webSuggestions.length > 0) {
            this.renderGameSuggestions(localMatches, query, true, webSuggestions.slice(0, 4));
          }
        } catch (err) {
          console.warn('Autocomplete web fetch failed:', err);
        }
      }, 300);
    }
  },

  renderGameSuggestions(localMatches, query, hasWebResults = false, webSuggestions = []) {
    const box = document.getElementById('game-suggestions-box');
    if (!box) return;

    if (localMatches.length === 0 && webSuggestions.length === 0) {
      box.innerHTML = `
        <div class="p-3 text-center text-slate-400 text-xs flex items-center justify-center gap-2">
          <i class="fa-solid fa-magnifying-glass text-slate-300"></i>
          <span>Presiona <strong>Buscar</strong> para rastrear en la web...</span>
        </div>
      `;
      box.classList.remove('hidden');
      return;
    }

    let html = '';

    // Render local catalog matches
    localMatches.forEach(g => {
      const escapedTitle = g.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
      const safeImg = getSafeImageUrl(g.image);
      html += `
        <div onclick="app.selectSuggestedCatalogGame('${escapedTitle}')" class="p-2.5 hover:bg-brand-50/80 active:bg-brand-100 cursor-pointer flex items-center gap-3 transition-colors">
          <img src="${safeImg}" alt="${g.title}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; app.handleSuggestionImgError(this, '${escapedTitle}')" class="w-10 h-12 object-cover rounded-lg bg-slate-900 shrink-0 shadow-2xs">
          <div class="flex-1 min-w-0">
            <div class="font-extrabold text-xs text-slate-900 truncate flex items-center gap-1.5">
              <span>${g.title}</span>
              <span class="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200 shrink-0">Oficial</span>
            </div>
            <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500">
              <span><i class="fa-solid fa-users text-[9px] text-brand-600"></i> ${g.minPlayers}-${g.maxPlayers} jug.</span>
              <span>•</span>
              <span><i class="fa-solid fa-stopwatch text-[9px] text-amber-600"></i> ~${g.durationMin}m</span>
            </div>
          </div>
          <div class="text-brand-600 text-xs px-1 font-bold flex items-center gap-1 shrink-0">
            <i class="fa-solid fa-wand-magic-sparkles text-[10px]"></i>
            <span class="text-[10px]">Elegir</span>
          </div>
        </div>
      `;
    });

    // Render web suggestions
    if (webSuggestions && webSuggestions.length > 0) {
      html += `
        <div class="px-3 py-1 bg-slate-100/80 text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
          <i class="fa-solid fa-globe text-brand-600"></i>
          <span>Otros resultados en la Web</span>
        </div>
      `;
      webSuggestions.forEach(w => {
        const escapedTitle = w.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
        html += `
          <div onclick="app.selectSuggestedWebGame('${escapedTitle}')" class="p-2.5 hover:bg-brand-50/80 active:bg-brand-100 cursor-pointer flex items-center gap-3 transition-colors">
            <div class="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200 text-brand-600 flex items-center justify-center shrink-0 text-sm">
              <i class="fa-solid fa-dice-d20"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-bold text-xs text-slate-900 truncate">${w.title}</div>
              <p class="text-[10px] text-slate-500 truncate">${w.snippet || 'Juego de mesa'}</p>
            </div>
            <span class="text-[10px] font-bold text-brand-600 bg-brand-50 border border-brand-200 px-2 py-1 rounded-lg shrink-0">
              Auto-rellenar
            </span>
          </div>
        `;
      });
    }

    box.innerHTML = html;
    box.classList.remove('hidden');
  },

  selectSuggestedCatalogGame(title) {
    const cleanStr = (s) => (s || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const tClean = cleanStr(title);
    const game = POPULAR_GAMES_CATALOG.find(g => cleanStr(g.title) === tClean || g.names.some(n => cleanStr(n) === tClean));

    if (!game) return;

    const queryInput = document.getElementById('game-magic-query');
    if (queryInput) queryInput.value = game.title;

    const safeImg = getSafeImageUrl(game.image);

    document.getElementById('game-title').value = game.title;
    document.getElementById('game-min').value = game.minPlayers;
    document.getElementById('game-max').value = game.maxPlayers;
    document.getElementById('game-duration').value = game.durationMin;
    document.getElementById('game-image').value = safeImg;
    document.getElementById('game-desc').value = game.description;

    this.showExtractedCard({
      title: game.title,
      minPlayers: game.minPlayers,
      maxPlayers: game.maxPlayers,
      durationMin: game.durationMin,
      image: safeImg,
      description: game.description
    });

    // Auto-verify and upgrade image with official Wikipedia cover in background
    this.fetchWikiCover(game.title).then(wikiCover => {
      if (wikiCover) {
        document.getElementById('game-image').value = wikiCover;
        const imgEl = document.getElementById('game-extracted-img');
        if (imgEl) {
          imgEl.src = wikiCover;
          imgEl.style.display = '';
        }
      }
    });

    const clearBtn = document.getElementById('btn-clear-query');
    if (clearBtn) clearBtn.classList.remove('hidden');

    this.hideGameSuggestions();
    if (navigator.vibrate) navigator.vibrate(30);
  },

  selectSuggestedWebGame(title) {
    const queryInput = document.getElementById('game-magic-query');
    if (queryInput) queryInput.value = title;
    this.hideGameSuggestions();
    this.searchAndAutofillGame(title);
  },

  hideGameSuggestions() {
    const box = document.getElementById('game-suggestions-box');
    if (box) box.classList.add('hidden');
  },

  clearGameSearchInput() {
    const queryInput = document.getElementById('game-magic-query');
    if (queryInput) {
      queryInput.value = '';
      queryInput.focus();
    }
    this.hideGameSuggestions();
    const clearBtn = document.getElementById('btn-clear-query');
    if (clearBtn) clearBtn.classList.add('hidden');
  },

  async searchAndAutofillGame(specificQuery = null) {
    this.hideGameSuggestions();
    const queryInput = document.getElementById('game-magic-query');
    const titleInput = document.getElementById('game-title');
    let rawQuery = (specificQuery || queryInput?.value || titleInput?.value || '').trim();

    // Auto-detect BoardGameGeek URLs (e.g. https://boardgamegeek.com/boardgame/174430/gloomhaven)
    if (rawQuery.includes('boardgamegeek.com/boardgame/')) {
      const bggMatch = rawQuery.match(/boardgame\/\d+\/([a-z0-9\-]+)/i);
      if (bggMatch && bggMatch[1]) {
        rawQuery = bggMatch[1].replace(/-/g, ' ').trim();
        if (queryInput) queryInput.value = rawQuery;
      }
    }

    if (queryInput && specificQuery) {
      queryInput.value = specificQuery;
    }

    if (!rawQuery) {
      alert('Por favor escribe el nombre de un juego para buscarlo.');
      if (queryInput) queryInput.focus();
      return;
    }

    const btn = document.getElementById('btn-magic-search');
    const originalBtnHtml = btn.innerHTML;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span>...</span>`;
    btn.disabled = true;

    const feedback = document.getElementById('magic-feedback');
    if (feedback) feedback.classList.add('hidden');

    // Clean text helper (strip accents and lower)
    const cleanStr = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const qClean = cleanStr(rawQuery);

    try {
      // 1. Check in curated popular games catalog (instant & high accuracy)
      const foundInCatalog = POPULAR_GAMES_CATALOG.find(g => 
        g.names.some(n => cleanStr(n) === qClean || qClean.includes(cleanStr(n)) || cleanStr(n).includes(qClean))
      );

      if (foundInCatalog) {
        const catImage = getSafeImageUrl(foundInCatalog.image);
        document.getElementById('game-title').value = foundInCatalog.title;
        document.getElementById('game-min').value = foundInCatalog.minPlayers;
        document.getElementById('game-max').value = foundInCatalog.maxPlayers;
        document.getElementById('game-duration').value = foundInCatalog.durationMin;
        document.getElementById('game-image').value = catImage;
        document.getElementById('game-desc').value = foundInCatalog.description;
        
        this.showExtractedCard({
          title: foundInCatalog.title,
          minPlayers: foundInCatalog.minPlayers,
          maxPlayers: foundInCatalog.maxPlayers,
          durationMin: foundInCatalog.durationMin,
          image: catImage,
          description: foundInCatalog.description
        });

        // Upgrade with verified official Wikipedia cover in background
        this.fetchWikiCover(foundInCatalog.title).then(wikiCover => {
          if (wikiCover) {
            document.getElementById('game-image').value = wikiCover;
            const imgEl = document.getElementById('game-extracted-img');
            if (imgEl) {
              imgEl.src = wikiCover;
              imgEl.style.display = '';
            }
          }
        });

        if (navigator.vibrate) navigator.vibrate(30);
        return;
      }

      // 2. Query Official BoardGameGeek (BGG) Database via XMLAPI2
      let bggData = null;
      try {
        bggData = await this.fetchBggData(rawQuery);
      } catch (bggErr) {
        console.warn('BGG query error:', bggErr);
      }

      if (bggData && bggData.title) {
        const finalTitle = bggData.title;
        const finalMin = bggData.minPlayers || 2;
        const finalMax = bggData.maxPlayers || 4;
        const finalDuration = bggData.durationMin || 60;
        let finalCover = bggData.image || '';
        let finalDesc = bggData.description || '';

        if (!finalDesc || finalDesc.length < 40) {
          finalDesc = `${finalTitle} es un aclamado juego de mesa de estrategia para ${finalMin} a ${finalMax} jugadores con una duración aproximada de ${finalDuration} minutos.`;
        }

        document.getElementById('game-title').value = finalTitle;
        document.getElementById('game-min').value = finalMin;
        document.getElementById('game-max').value = finalMax;
        document.getElementById('game-duration').value = finalDuration;
        document.getElementById('game-image').value = finalCover;
        document.getElementById('game-desc').value = finalDesc;

        this.showExtractedCard({
          title: finalTitle,
          minPlayers: finalMin,
          maxPlayers: finalMax,
          durationMin: finalDuration,
          image: finalCover,
          description: finalDesc
        });

        if (navigator.vibrate) navigator.vibrate(30);
        return;
      }

      // 3. Fallback: Search English Wikipedia for Official Box Art & Infobox Data (players, time)
      let boxArtUrl = '';
      let extractedMin = 2;
      let extractedMax = 4;
      let extractedDuration = 60;
      let englishTitle = '';

      // Helper para verificar si un resultado de Wikipedia realmente coincide con el título buscado
      const isCloseMatch = (candidate, query) => {
        if (!candidate || !query) return false;
        const c = cleanStr(candidate).replace(/\(.*?\)/g, '').trim();
        const q = cleanStr(query).replace(/\(.*?\)/g, '').trim();
        return c === q || c.startsWith(q) || q.startsWith(c) || c.includes(' ' + q) || c.includes(q + ' ');
      };

      try {
        const enSearchRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(rawQuery + ' board game')}&utf8=&format=json&origin=*`
        );
        const enSearchData = await enSearchRes.json();
        const enFirst = enSearchData?.query?.search?.[0];

        if (enFirst && isCloseMatch(enFirst.title, rawQuery)) {
          englishTitle = enFirst.title;
          
          // Get Official Box Cover directly without broken thumbnail scaling
          const enSummaryRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(englishTitle)}`);
          const enSummary = await enSummaryRes.json();
          if (enSummary.originalimage?.source || enSummary.thumbnail?.source) {
            boxArtUrl = getSafeImageUrl(enSummary.originalimage?.source || enSummary.thumbnail?.source);
          }

          // Parse Infobox wikitext for real min/max players & playing time
          const infoRes = await fetch(
            `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=${encodeURIComponent(englishTitle)}&format=json&origin=*`
          );
          const infoData = await infoRes.json();
          const pages = infoData?.query?.pages || {};
          const pageId = Object.keys(pages)[0];
          const wikitext = pages[pageId]?.revisions?.[0]?.['*'] || '';

          // Match players (e.g. "players = 1–5" or "players = 2 to 6")
          const playerMatch = wikitext.match(/players\s*=\s*([^\n|]+)/i);
          if (playerMatch) {
            const nums = playerMatch[1].match(/\d+/g);
            if (nums && nums.length > 0) {
              extractedMin = parseInt(nums[0]);
              extractedMax = nums.length > 1 ? parseInt(nums[1]) : extractedMin;
            }
          }

          // Match playing time (e.g. "play = 60–120 min" or "playing_time = 45 min")
          const timeMatch = wikitext.match(/play(?:ing)?_time\s*=\s*([^\n|]+)/i) || wikitext.match(/duration\s*=\s*([^\n|]+)/i);
          if (timeMatch) {
            const nums = timeMatch[1].match(/\d+/g);
            if (nums && nums.length > 0) {
              extractedDuration = parseInt(nums[nums.length - 1]);
            }
          }
        }
      } catch (e) {
        console.warn('EN Wiki box art lookup:', e);
      }

      // 3. Search Spanish Wikipedia for Spanish review/synopsis
      let spanishReview = '';
      let detectedTitle = rawQuery;
      try {
        const esSearchRes = await fetch(
          `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(rawQuery + ' juego de mesa')}&utf8=&format=json&origin=*`
        );
        const esSearchData = await esSearchRes.json();
        const esFirst = esSearchData?.query?.search?.[0];
        if (esFirst && isCloseMatch(esFirst.title, rawQuery)) {
          const esSummaryRes = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(esFirst.title)}`);
          const esSummary = await esSummaryRes.json();
          if (esSummary.extract) {
            spanishReview = esSummary.extract;
          }
          if (esSummary.title) {
            detectedTitle = esSummary.title.replace(/\(juego.*?\)/i, '').trim();
          }
          if (!boxArtUrl && (esSummary.originalimage?.source || esSummary.thumbnail?.source)) {
            boxArtUrl = getSafeImageUrl(esSummary.originalimage?.source || esSummary.thumbnail?.source);
          }
        }
      } catch (e) {
        console.warn('ES Wiki review lookup:', e);
      }

      // Fallback description if Spanish review wasn't found
      if (!spanishReview) {
        spanishReview = `${rawQuery} es un reconocido juego de mesa de estrategia y entretenimiento para ${extractedMin} a ${extractedMax} jugadores con una duración aproximada de ${extractedDuration} minutos.`;
      }

      const finalCover = boxArtUrl || getSafeImageUrl('https://cf.geekdo-images.com/39lQ1j3vU_H24w6E9X6Wbg__itemrep/img/93cRzXG2cT3j9v4Jt04V-h547X4=/fit-in/500x500/filters:strip_icc()/pic6832367.png');
      const finalTitle = rawQuery;

      // Populate ALL inputs automatically so user doesn't have to fill anything
      document.getElementById('game-title').value = finalTitle;
      document.getElementById('game-min').value = extractedMin;
      document.getElementById('game-max').value = extractedMax;
      document.getElementById('game-duration').value = extractedDuration;
      document.getElementById('game-image').value = finalCover;
      document.getElementById('game-desc').value = spanishReview;

      // Show the Live Extracted Card with all the info ready
      this.showExtractedCard({
        title: finalTitle,
        minPlayers: extractedMin,
        maxPlayers: extractedMax,
        durationMin: extractedDuration,
        image: finalCover,
        description: spanishReview
      });

      if (navigator.vibrate) navigator.vibrate(30);

    } catch (err) {
      console.warn('Error fetching game info:', err);
      const titleEl = document.getElementById('game-title');
      if (titleEl) titleEl.value = rawQuery;
    } finally {
      if (btn) {
        btn.innerHTML = originalBtnHtml;
        btn.disabled = false;
      }
    }
  },

  closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
  },

  /* SESSIONS / FECHAS */
  renderSessions() {
    const sessions = db.getSessions();
    const games = db.getGames();
    const friends = db.getFriends();
    const container = document.getElementById('sessions-container');

    if (sessions.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 px-4 bg-white rounded-2xl border border-dashed border-slate-300">
          <i class="fa-solid fa-dice-d6 text-4xl text-slate-300 mb-2"></i>
          <h3 class="font-bold text-sm text-slate-700">Sin partidas programadas</h3>
          <p class="text-xs text-slate-400 mt-1 max-w-xs mx-auto">Organiza la próxima fecha con tus amigos para jugar.</p>
          <button onclick="app.openModal('modal-session')" class="mt-4 px-4 py-2.5 bg-brand-600 text-white rounded-xl text-xs font-bold shadow-sm">
            Organizar Partida
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = sessions.map(session => {
      const game = games.find(g => g.id === session.gameId) || {
        title: 'Juego de mesa',
        minPlayers: 2,
        maxPlayers: 4,
        durationMin: 60,
        image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=600&q=80'
      };

      // Filtrar ÚNICAMENTE asistentes registrados en el club (elimina fantasmas o demo data)
      const rawAttendees = Array.isArray(session.attendees) ? session.attendees : [];
      const attendees = rawAttendees.filter(a => friends.some(fr => fr.id === a.friendId));
      const confirmed = attendees.filter(a => a.status === 'yes');
      const maybe = attendees.filter(a => a.status === 'maybe');
      const spotsLeft = (game.maxPlayers || 4) - confirmed.length;
      const isFull = spotsLeft <= 0;
      const myRsvp = attendees.find(a => a.friendId === this.currentUserId)?.status || 'none';

      const todayStr = new Date().toISOString().split('T')[0];
      const sessionDateStr = (session.date || '').split('T')[0];
      const isPastDate = sessionDateStr < todayStr;

      // Date & time formatted safely for phone
      const dateParts = sessionDateStr.split('-');
      const dateObj = dateParts.length === 3 ? new Date(dateParts[0], dateParts[1] - 1, dateParts[2]) : new Date();
      const dateText = !isNaN(dateObj.getTime()) 
        ? dateObj.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })
        : sessionDateStr;

      let cleanTime = session.time || '19:30';
      if (cleanTime.includes('T')) {
        cleanTime = (cleanTime.split('T')[1] || '').substring(0, 5) || '19:30';
      }

      // Check if session has started or past based on exact date & time
      const sessionDateTime = new Date(`${sessionDateStr}T${cleanTime}:00`);
      const now = new Date();
      const isStartedOrPast = !isNaN(sessionDateTime.getTime()) ? (now >= sessionDateTime) : isPastDate;
      const winnerFriend = session.winnerId ? friends.find(f => f.id === session.winnerId) : null;

      return `
        <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col ${isPastDate ? 'opacity-90' : ''}">
          
          <!-- Card Header Image & Badges -->
          <div class="relative h-36 bg-slate-900 overflow-hidden">
            ${this.getGameCoverHtml(game, 'session')}
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent pointer-events-none"></div>

            <!-- Top tags -->
            <div class="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center">
              <span class="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <i class="fa-solid fa-clock text-amber-300"></i> ~${game.durationMin} min
              </span>

              ${session.winnerId
                ? `<span class="bg-amber-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 border border-amber-300/40"><i class="fa-solid fa-crown text-[9px] text-amber-200"></i> Ganó: ${(winnerFriend ? winnerFriend.name.split(' ')[0] : 'Registrado')}</span>`
                : isStartedOrPast
                  ? `<span class="bg-indigo-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 animate-pulse"><i class="fa-solid fa-trophy text-[9px] text-amber-300"></i> Partida Concluida</span>`
                  : isFull 
                    ? `<span class="bg-rose-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1"><i class="fa-solid fa-lock text-[9px]"></i> Mesa Llena</span>`
                    : `<span class="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1"><i class="fa-solid fa-chair text-[9px]"></i> ${spotsLeft} cupo${spotsLeft > 1 ? 's' : ''} libre${spotsLeft > 1 ? 's' : ''}</span>`
              }
            </div>

            <!-- Bottom title over image -->
            <div class="absolute bottom-2.5 left-3.5 right-3.5 text-white">
              <div class="text-[11px] font-bold text-brand-300 uppercase tracking-wide">${dateText} • ${cleanTime} hrs ${isStartedOrPast ? '(Concluida)' : ''}</div>
              <h3 class="text-lg font-black leading-tight drop-shadow-sm">${game.title}</h3>
            </div>
          </div>

          <!-- Session Details -->
          <div class="p-3.5 space-y-3">
            <div class="flex items-center gap-2 text-xs text-slate-600">
              <i class="fa-solid fa-location-dot text-rose-500 text-xs"></i>
              <span class="font-medium truncate">${session.location}</span>
            </div>

            ${session.notes ? `
              <p class="text-[11px] bg-slate-50 text-slate-600 p-2 rounded-xl border border-slate-100 italic">
                "${session.notes}"
              </p>
            ` : ''}

            <!-- Certified Draw Banner or Draw Button -->
            ${session.drawData ? (() => {
              let drawInfo = null;
              try { drawInfo = typeof session.drawData === 'string' ? JSON.parse(session.drawData) : session.drawData; } catch(e){}
              if (!drawInfo) return '';
              return `
                <div class="p-3 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-brand-50 border border-indigo-200 shadow-2xs flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2.5 min-w-0">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-brand-700 text-white flex items-center justify-center text-sm shadow-xs shrink-0">
                      <i class="fa-solid fa-certificate text-amber-300"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="flex items-center gap-1.5">
                        <span class="text-[9px] font-black uppercase text-indigo-700 tracking-wider">🎲 Sorteo Oficial</span>
                        <span class="text-[8px] font-mono font-bold bg-indigo-100 text-indigo-800 px-1 py-0.2 rounded">${drawInfo.drawCode || 'CERT'}</span>
                      </div>
                      <div class="text-xs font-black text-slate-900 truncate">${drawInfo.gameTitle || game.title}</div>
                      <p class="text-[10px] text-slate-500 truncate mt-0.5"><i class="fa-solid fa-user-check text-[9px] text-brand-600"></i> Por: <strong>${drawInfo.drawnByName || 'Organizador'}</strong></p>
                    </div>
                  </div>
                  <div class="flex items-center gap-1 shrink-0">
                    <button onclick="app.shareSessionDrawToWhatsapp('${session.id}')" title="Compartir certificado en WhatsApp" class="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-[11px] rounded-xl shadow-xs flex items-center gap-1 transition-colors">
                      <i class="fa-brands fa-whatsapp text-xs"></i>
                      <span>Certificado</span>
                    </button>
                    <button onclick="app.openSessionDrawModal('${session.id}')" title="Ver detalles del sorteo" class="w-7 h-7 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-800 flex items-center justify-center text-xs transition-colors">
                      <i class="fa-solid fa-eye text-[10px]"></i>
                    </button>
                  </div>
                </div>
              `;
            })() : (!session.winnerId && !isStartedOrPast) ? `
              <div class="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                <div class="flex items-center gap-2 min-w-0">
                  <i class="fa-solid fa-dice-d20 text-brand-600 text-sm shrink-0"></i>
                  <span class="text-[11px] font-bold text-slate-700 truncate">¿Aún no deciden el juego?</span>
                </div>
                <button onclick="app.openSessionDrawModal('${session.id}')" class="px-2.5 py-1 bg-brand-600 active:bg-brand-700 text-white text-[10px] font-black rounded-lg shadow-2xs flex items-center gap-1 shrink-0 transition-all active:scale-95">
                  <i class="fa-solid fa-lock text-[9px]"></i>
                  <span>Sorteo a Distancia</span>
                </button>
              </div>
            ` : ''}

            <!-- Winner Showcase Banner (if winner recorded) -->
            ${session.winnerId ? `
              <div class="p-3 rounded-2xl bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-200 shadow-2xs flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-base shadow-xs shrink-0">
                    <i class="fa-solid fa-crown text-amber-100"></i>
                  </div>
                  <div class="min-w-0">
                    <span class="text-[9px] font-black uppercase text-amber-700 tracking-wider">🏆 Victoria Registrada</span>
                    <div class="flex items-center gap-1.5 text-xs font-black text-amber-950 truncate">
                      ${getMeepleSvg(winnerFriend ? winnerFriend.color : 'bg-amber-500', 16)}
                      <span class="truncate">${winnerFriend ? winnerFriend.name : 'Ganador'}</span>
                    </div>
                    ${session.resultNotes ? `<p class="text-[10px] text-amber-800 italic truncate mt-0.5">"${session.resultNotes}"</p>` : ''}
                  </div>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <button onclick="app.shareWinnerToWhatsapp('${session.id}')" title="Celebrar victoria en WhatsApp" class="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-[11px] rounded-xl shadow-xs flex items-center gap-1 transition-colors">
                    <i class="fa-brands fa-whatsapp text-xs"></i>
                    <span>Celebrar</span>
                  </button>
                  <button onclick="app.openSessionResultsModal('${session.id}')" title="Modificar ganador" class="w-7 h-7 rounded-lg bg-amber-100 hover:bg-amber-200 active:bg-amber-300 text-amber-800 flex items-center justify-center text-xs transition-colors">
                    <i class="fa-solid fa-pen-to-square text-[10px]"></i>
                  </button>
                </div>
              </div>
            ` : isStartedOrPast ? `
              <!-- Register Winner Prompt (Partida en curso o pasada sin ganador) -->
              <div class="p-3 rounded-2xl bg-gradient-to-r from-amber-50 via-purple-50 to-brand-50 border border-amber-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-2.5">
                <div class="flex items-center gap-2 min-w-0">
                  <div class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm shadow-xs shrink-0">
                    <i class="fa-solid fa-trophy text-amber-100"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-xs text-slate-900 leading-tight">¿Quién se llevó la victoria?</h4>
                    <p class="text-[10px] text-slate-500">La partida ya comenzó. Registra al ganador para las estadísticas.</p>
                  </div>
                </div>
                <button onclick="app.openSessionResultsModal('${session.id}')" class="w-full sm:w-auto px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-white font-extrabold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 shrink-0 transition-transform active:scale-95">
                  <i class="fa-solid fa-crown text-amber-200 text-xs"></i>
                  <span>Registrar Ganador</span>
                </button>
              </div>
            ` : ''}

            <!-- Attendees Progress Bar & Avatars -->
            <div class="space-y-1.5 pt-1 border-t border-slate-100">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-slate-800">Jugadores (${confirmed.length}/${game.maxPlayers})</span>
                ${maybe.length > 0 ? `<span class="text-amber-600 text-[10px] font-semibold">+${maybe.length} en duda</span>` : ''}
              </div>

              <!-- Participant pills with Meeples -->
              <div class="flex flex-wrap gap-1.5 pt-0.5">
                ${confirmed.map(att => {
                  const f = friends.find(fr => fr.id === att.friendId);
                  if (!f) return '';
                  return `
                    <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded-full text-[11px] font-bold">
                      ${getMeepleSvg(f.color, 14)}
                      <span>${f.name.split(' ')[0]}</span>
                    </span>
                  `;
                }).join('')}

                ${maybe.map(att => {
                  const f = friends.find(fr => fr.id === att.friendId);
                  if (!f) return '';
                  return `
                    <span class="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-full text-[11px] font-medium">
                      ${getMeepleSvg(f.color, 14)}
                      <span>${f.name.split(' ')[0]} (?)</span>
                    </span>
                  `;
                }).join('')}

                ${Array.from({ length: Math.max(0, spotsLeft) }).map(() => `
                  <span class="inline-flex items-center border border-dashed border-slate-300 text-slate-400 px-2 py-0.5 rounded-full text-[10px]">
                    + libre
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Mobile Action Footer: RSVP + WhatsApp Share + Delete -->
          <div class="bg-slate-50/90 border-t border-slate-200/70 p-3 flex flex-col gap-2">
            
            ${!isStartedOrPast ? `
              <!-- Quick RSVP (Thumb-Friendly Buttons) -->
              <div class="grid grid-cols-3 gap-1.5">
                <button onclick="app.setRsvp('${session.id}', 'yes')" class="py-2 px-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all active:scale-95 ${myRsvp === 'yes' ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300' : 'bg-white text-slate-700 border border-slate-200 active:bg-emerald-50'}">
                  <i class="fa-solid fa-check text-[11px]"></i> Voy
                </button>

                <button onclick="app.setRsvp('${session.id}', 'maybe')" class="py-2 px-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all active:scale-95 ${myRsvp === 'maybe' ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300' : 'bg-white text-slate-700 border border-slate-200 active:bg-amber-50'}">
                  <i class="fa-solid fa-question text-[11px]"></i> Quizás
                </button>

                <button onclick="app.setRsvp('${session.id}', 'no')" class="py-2 px-1 rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-all active:scale-95 ${myRsvp === 'no' ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 active:bg-rose-50'}">
                  <i class="fa-solid fa-xmark text-[11px]"></i> No voy
                </button>
              </div>
            ` : ''}

            <!-- Share & Delete Actions Row -->
            <div class="flex items-center gap-2 pt-0.5">
              <button onclick="app.shareToWhatsapp('${session.id}')" class="flex-1 py-2 rounded-xl text-[11px] font-bold text-emerald-700 bg-emerald-100/70 active:bg-emerald-200 flex items-center justify-center gap-1.5 transition-colors">
                <i class="fa-brands fa-whatsapp text-sm"></i>
                <span>Compartir en WhatsApp</span>
              </button>

              <button onclick="app.deleteSession('${session.id}')" class="px-3 py-2 rounded-xl text-[11px] font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 active:bg-rose-200 border border-rose-200/80 flex items-center justify-center gap-1 transition-colors" title="Eliminar o cancelar esta partida">
                <i class="fa-solid fa-trash-can text-[10px]"></i>
                <span>Eliminar</span>
              </button>
            </div>

          </div>
        </div>
      `;
    }).join('');
  },

  deleteSession(sessionId) {
    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    const friends = db.getFriends();
    const me = friends.find(f => f.id === this.currentUserId);
    const isAdmin = me && (me.role === 'admin' || me.id === 'u1');
    const isCreator = session.attendees && session.attendees[0] && session.attendees[0].friendId === this.currentUserId;
    if (!isAdmin && !isCreator) {
      alert('Solo el organizador de la partida o el administrador tienen permiso para eliminarla.');
      return;
    }

    const games = db.getGames();
    const game = games.find(g => g.id === session.gameId);
    const gameTitle = game ? game.title : 'esta partida';

    if (!confirm(`¿Estás seguro de que deseas eliminar la partida de "${gameTitle}"?`)) {
      return;
    }

    // Registrar en lista negra de eliminados
    try {
      const deleted = JSON.parse(localStorage.getItem('bg_deleted_sessions') || '[]');
      if (!deleted.includes(sessionId)) deleted.push(sessionId);
      localStorage.setItem('bg_deleted_sessions', JSON.stringify(deleted));
    } catch(e) {}

    const updated = sessions.filter(s => s.id !== sessionId);
    db.saveSessions(updated);
    this.renderSessions();

    // Eliminar inmediatamente en Google Sheets por ID
    const url = db.getGSheetUrl();
    if (url) {
      db.fetchJsonp(url, { action: 'delete_session', id: sessionId }).catch(() => {});
    }
  },

  setRsvp(sessionId, status) {
    if (navigator.vibrate) navigator.vibrate(40); // Haptic feedback on mobile

    const friends = db.getFriends();
    const currentFriend = friends.find(f => f.id === this.currentUserId);
    if (!currentFriend) {
      alert('Para confirmar tu asistencia, por favor selecciona tu perfil o regístrate en el club.');
      this.openUserGate(true);
      return;
    }

    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    const game = db.getGames().find(g => g.id === session.gameId);
    const attendees = Array.isArray(session.attendees) ? session.attendees : [];
    const confirmedCount = attendees.filter(a => a.status === 'yes' && a.friendId !== this.currentUserId).length;

    if (status === 'yes' && game && confirmedCount >= game.maxPlayers) {
      alert(`¡Mesa llena! ${game.title} solo admite ${game.maxPlayers} jugadores. Puedes marcarte como 'Quizás' por si alguien cancela.`);
      return;
    }

    // Filtrar solo amigos registrados válidos
    session.attendees = attendees.filter(a => a.friendId !== this.currentUserId && friends.some(fr => fr.id === a.friendId));
    if (status !== 'no') {
      session.attendees.push({ friendId: this.currentUserId, status });
    }

    db.saveSessions(sessions);
    this.renderSessions();
  },

  shareToWhatsapp(sessionId) {
    const session = db.getSessions().find(s => s.id === sessionId);
    if (!session) return;
    const game = db.getGames().find(g => g.id === session.gameId);
    const attendees = Array.isArray(session.attendees) ? session.attendees : [];
    const confirmed = attendees.filter(a => a.status === 'yes');
    const spotsLeft = (game?.maxPlayers || 4) - confirmed.length;
    const shareUrl = this.getShareUrl();

    const msg = `🎲 *¡Noche de Juegos armada!* 🎲%0A%0A` +
      `🕹️ *Juego:* ${game?.title || 'Juego de mesa'}%0A` +
      `📅 *Fecha:* ${session.date} a las ${session.time} hrs%0A` +
      `📍 *Lugar:* ${session.location}%0A` +
      `👥 *Confirmados (${confirmed.length}/${game?.maxPlayers || 4}):* ${spotsLeft > 0 ? `(¡Quedan ${spotsLeft} cupos!)` : '(¡Mesa llena!)'}%0A` +
      (session.notes ? `📝 *Nota:* ${session.notes}%0A%0A` : '%0A') +
      `📲 *Confirma tu asistencia entrando aquí:*%0A${encodeURIComponent(shareUrl)}`;

    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  },

  handleCreateSession(event) {
    event.preventDefault();

    const friends = db.getFriends();
    const currentFriend = friends.find(f => f.id === this.currentUserId);
    if (!currentFriend) {
      alert('Por favor selecciona tu perfil o regístrate en el club antes de organizar una partida.');
      this.openUserGate(true);
      return;
    }

    const gameId = document.getElementById('session-game-id').value;
    const date = document.getElementById('session-date').value;
    const time = document.getElementById('session-time').value;
    const location = document.getElementById('session-location').value;
    const notes = document.getElementById('session-notes').value;

    const newSession = {
      id: 's_' + Date.now(),
      gameId,
      date,
      time,
      location,
      notes,
      attendees: [
        { friendId: this.currentUserId, status: 'yes' }
      ]
    };

    const sessions = db.getSessions();
    sessions.unshift(newSession);
    db.saveSessions(sessions);

    this.closeModal('modal-session');
    document.getElementById('form-new-session').reset();
    this.renderSessions();
  },

  /* POST-SESSION RESULTS & WINNER RECORDING */
  openSessionResultsModal(sessionId) {
    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    const games = db.getGames();
    const game = games.find(g => g.id === session.gameId);
    const friends = db.getFriends();

    document.getElementById('results-session-id').value = sessionId;

    // Render game info header
    const infoContainer = document.getElementById('results-game-info');
    if (infoContainer) {
      const coverUrl = getSafeImageUrl(game?.image);
      let cleanTime = session.time || '19:30';
      if (cleanTime.includes('T')) cleanTime = cleanTime.split('T')[1].substring(0, 5);

      infoContainer.innerHTML = `
        <div class="w-12 h-14 rounded-xl overflow-hidden bg-slate-900 shrink-0 shadow-xs">
          ${coverUrl ? `<img src="${coverUrl}" alt="${game?.title || ''}" class="w-full h-full object-cover">` : `<div class="w-full h-full flex items-center justify-center text-brand-300"><i class="fa-solid fa-dice-d20"></i></div>`}
        </div>
        <div class="min-w-0 flex-1">
          <div class="text-[10px] text-brand-600 font-extrabold uppercase tracking-wide">Partida Registrada</div>
          <h4 class="font-black text-sm text-slate-900 truncate">${game?.title || 'Juego de mesa'}</h4>
          <p class="text-[11px] text-slate-500 font-medium">${session.date} • ${cleanTime} hrs • ${session.location || 'Club'}</p>
        </div>
      `;
    }

    // Determine candidate attendees
    const rawAttendees = Array.isArray(session.attendees) ? session.attendees : [];
    const validAttendees = rawAttendees.filter(a => friends.some(fr => fr.id === a.friendId));
    let candidates = validAttendees.filter(a => a.status === 'yes').map(a => friends.find(f => f.id === a.friendId));
    if (candidates.length === 0) {
      candidates = validAttendees.map(a => friends.find(f => f.id === a.friendId));
    }
    if (candidates.length === 0) {
      candidates = friends;
    }

    // Render winner selector radio pills
    const selectorContainer = document.getElementById('results-winner-selector');
    if (selectorContainer) {
      selectorContainer.innerHTML = candidates.map(f => {
        const isSelected = session.winnerId ? session.winnerId === f.id : false;
        return `
          <label class="p-2.5 rounded-2xl border ${isSelected ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-300' : 'border-slate-200 bg-white hover:border-amber-300'} cursor-pointer flex items-center gap-2.5 transition-all">
            <input type="radio" name="session-winner-choice" value="${f.id}" ${isSelected ? 'checked' : ''} class="sr-only" onchange="app.highlightWinnerRadio(this)">
            <div class="w-8 h-8 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              ${getMeepleSvg(f.color, 20)}
            </div>
            <div class="min-w-0 flex-1">
              <div class="font-extrabold text-xs text-slate-900 truncate">${f.name}</div>
              <div class="text-[9px] text-slate-400 font-bold">Jugador</div>
            </div>
            <i class="fa-solid fa-crown text-amber-500 text-sm ${isSelected ? 'block' : 'hidden'} winner-check-icon"></i>
          </label>
        `;
      }).join('');
    }

    const notesInput = document.getElementById('results-notes');
    if (notesInput) {
      notesInput.value = session.resultNotes || '';
    }

    this.openModal('modal-session-results');
  },

  highlightWinnerRadio(radioEl) {
    document.querySelectorAll('#results-winner-selector label').forEach(lbl => {
      lbl.className = 'p-2.5 rounded-2xl border border-slate-200 bg-white hover:border-amber-300 cursor-pointer flex items-center gap-2.5 transition-all';
      const icon = lbl.querySelector('.winner-check-icon');
      if (icon) icon.classList.add('hidden');
    });
    const parentLabel = radioEl.closest('label');
    if (parentLabel) {
      parentLabel.className = 'p-2.5 rounded-2xl border border-amber-500 bg-amber-50/70 ring-2 ring-amber-300 cursor-pointer flex items-center gap-2.5 transition-all';
      const icon = parentLabel.querySelector('.winner-check-icon');
      if (icon) icon.classList.remove('hidden');
    }
  },

  handleSaveSessionResults(event) {
    event.preventDefault();
    const sessionId = document.getElementById('results-session-id').value;
    const selectedRadio = document.querySelector('input[name="session-winner-choice"]:checked');
    if (!selectedRadio) {
      alert('Por favor selecciona quién ganó la partida tocando sobre su nombre.');
      return;
    }

    const winnerId = selectedRadio.value;
    const notes = (document.getElementById('results-notes')?.value || '').trim();

    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    session.winnerId = winnerId;
    if (notes) session.resultNotes = notes;

    db.saveSessions(sessions);

    this.closeModal('modal-session-results');
    this.renderSessions();
    this.renderGames();
    this.renderFriends();

    if (navigator.vibrate) navigator.vibrate([40, 60, 40]);

    if (confirm('¡Victoria guardada y sumada a las estadísticas del Club!\n\n¿Deseas enviar el anuncio de celebración a WhatsApp ahora?')) {
      this.shareWinnerToWhatsapp(sessionId);
    }
  },

  /* WHATSAPP SHARING ENHANCEMENTS */
  shareWinnerToWhatsapp(sessionId) {
    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session || !session.winnerId) return;

    const games = db.getGames();
    const game = games.find(g => g.id === session.gameId);
    const friends = db.getFriends();
    const winner = friends.find(f => f.id === session.winnerId);
    if (!winner) return;

    const attendees = Array.isArray(session.attendees) ? session.attendees.filter(a => a.status === 'yes') : [];
    const attendeeNames = attendees
      .map(a => friends.find(f => f.id === a.friendId)?.name?.split(' ')[0])
      .filter(Boolean)
      .join(', ');

    const shareUrl = this.getShareUrl();

    let msg = `🏆👑 *¡HABEMUS GANADOR EN EL CLUB!* 👑🏆%0A%0A` +
      `🔥 *Juego:* ${game?.title || 'Juego de mesa'}%0A` +
      `🥇 *Campeón de la partida:* *${winner.name}*%0A` +
      `📅 *Fecha:* ${session.date}%0A` +
      (attendeeNames ? `👥 *Rivales en mesa:* ${attendeeNames}%0A` : '') +
      (session.resultNotes ? `💬 *Crónica:* "${session.resultNotes}"%0A%0A` : '%0A') +
      `🎖️ _¡La victoria ya está registrada en el Salón de la Fama del Club!_%0A%0A` +
      `📲 *Revisa el ranking completo aquí:*%0A${encodeURIComponent(shareUrl)}`;

    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  },

  shareLeaderboardToWhatsapp() {
    const friends = db.getFriends();
    const sessions = db.getSessions();
    const shareUrl = this.getShareUrl();

    const ranked = friends.map(f => {
      const wins = sessions.filter(s => s.winnerId === f.id).length;
      const attended = sessions.filter(s => s.attendees && s.attendees.some(a => a.friendId === f.id && a.status === 'yes')).length;
      return { name: f.name, wins, attended };
    }).sort((a, b) => b.wins - a.wins || b.attended - a.attended);

    const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

    let rows = ranked.map((r, i) => {
      const medal = medals[i] || '🎖️';
      return `${medal} *${r.name}* - ${r.wins} victoria${r.wins !== 1 ? 's' : ''} (${r.attended} partida${r.attended !== 1 ? 's' : ''})`;
    }).join('%0A');

    let msg = `🏆 *SALÓN DE LA FAMA - RANKING DEL CLUB* 🏆%0A%0A` +
      `Así van las posiciones en la mesa de juegos:%0A%0A` +
      rows + `%0A%0A` +
      `⚔️ ¿Quién desafiará al líder en el próximo encuentro?%0A%0A` +
      `📲 *Entra al club para organizar la revancha:*%0A${encodeURIComponent(shareUrl)}`;

    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  },

  shareGamePollToWhatsapp() {
    const games = db.getGames();
    if (games.length === 0) {
      alert('Aún no hay juegos en la ludoteca para proponer.');
      return;
    }
    const shareUrl = this.getShareUrl();

    const numberEmojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const gameList = games.slice(0, 10).map((g, i) => {
      const num = numberEmojis[i] || `[${i+1}]`;
      return `${num} *${g.title}* (${g.minPlayers}-${g.maxPlayers} jug. • ~${g.durationMin}m)`;
    }).join('%0A');

    let msg = `🎲 *¿A QUÉ JUGAMOS ESTE FIN DE SEMANA?* 🎲%0A%0A` +
      `Vota con el número de tu juego favorito respondiendo a este mensaje:%0A%0A` +
      gameList + `%0A%0A` +
      `👇 ¡El juego más votado va a la mesa!%0A%0A` +
      `📲 *Revisa la ludoteca completa y las fichas aquí:*%0A${encodeURIComponent(shareUrl)}`;

    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  },

  /* GAMES (LUDOTECA) */
  setPlayerFilter(val) {
    this.activePlayerFilter = val;
    document.querySelectorAll('.filter-chip').forEach(btn => {
      btn.className = 'filter-chip px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-white text-slate-600 border border-slate-200';
    });

    const activeBtn = document.getElementById(val ? `chip-${val}` : 'chip-all');
    if (activeBtn) {
      activeBtn.className = 'filter-chip px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap bg-brand-600 text-white shadow-sm';
    }

    this.renderGames();
  },

  renderGames() {
    const games = db.getGames();
    const friends = db.getFriends();
    const sessions = db.getSessions();
    const todayStr = new Date().toISOString().split('T')[0];
    const search = (document.getElementById('filter-game-search')?.value || '').toLowerCase();
    const filter = this.activePlayerFilter;

    const filtered = games.filter(g => {
      const matchSearch = g.title.toLowerCase().includes(search) || (g.description && g.description.toLowerCase().includes(search));
      let matchPlayers = true;
      if (filter === '2') matchPlayers = g.minPlayers <= 2;
      if (filter === '4') matchPlayers = g.minPlayers <= 4 && g.maxPlayers >= 4;
      if (filter === '5') matchPlayers = g.maxPlayers >= 5;
      if (filter === '6') matchPlayers = g.maxPlayers >= 6;
      return matchSearch && matchPlayers;
    });

    const container = document.getElementById('games-container');
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 bg-white rounded-2xl border border-dashed border-slate-300">
          <p class="text-xs text-slate-500 font-medium">No se encontraron juegos con esos filtros.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(game => {
      const owner = friends.find(f => f.id === game.ownerId) || { name: 'Comunitario' };
      const coverHtml = this.getGameCoverHtml(game, 'card');
      const descSnippet = game.description || 'Sin reseña registrada. Toca modificar para agregar una.';
      const timesPlayed = sessions.filter(s => s.gameId === game.id && (s.winnerId || ((s.date || '').split('T')[0] < todayStr))).length;
      const canEdit = this.canEditGame(game);

      return `
        <div class="bg-white rounded-2xl border border-slate-200/90 p-3.5 shadow-xs flex gap-3.5 hover:shadow-sm transition-all">
          <!-- Game Cover Art (Clickable) -->
          ${coverHtml}

          <!-- Game Info & Actions -->
          <div class="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <!-- Title & Owner -->
              <div class="flex items-start justify-between gap-1.5">
                <h3 onclick="app.showGameDetail('${game.id}')" class="font-bold text-sm text-slate-900 hover:text-brand-600 cursor-pointer truncate" title="Ver reseña">
                  ${game.title}
                </h3>
                <span class="text-[10px] text-slate-400 font-medium shrink-0 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded-md">
                  De ${owner.name.split(' ')[0]}
                </span>
              </div>

              <!-- Description / Reseña Snippet -->
              <p onclick="app.showGameDetail('${game.id}')" class="text-[11px] text-slate-600 line-clamp-2 mt-1 leading-snug cursor-pointer">
                ${descSnippet}
              </p>

              <button onclick="app.showGameDetail('${game.id}')" class="text-[10px] font-bold text-brand-600 hover:underline mt-0.5 inline-flex items-center gap-1">
                <span>Ver reseña completa</span>
                <i class="fa-solid fa-arrow-right text-[8px]"></i>
              </button>
            </div>

            <!-- Badges & Action Buttons -->
            <div class="flex items-center justify-between pt-2 mt-1 border-t border-slate-100">
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] font-bold text-brand-700 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-md">
                  ${game.minPlayers}-${game.maxPlayers} jug. • ${game.durationMin}m
                </span>
                <span class="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <i class="fa-solid fa-gamepad text-[9px]"></i> ${timesPlayed} ${timesPlayed === 1 ? 'jugada' : 'jugadas'}
                </span>
              </div>

              <!-- Quick Action Buttons -->
              <div class="flex items-center gap-1.5">
                ${canEdit ? `
                <button onclick="app.editGame('${game.id}')" title="Modificar / Editar juego" class="w-7 h-7 rounded-lg bg-slate-100 active:bg-slate-200 text-slate-600 hover:text-brand-600 flex items-center justify-center text-xs transition-colors">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button onclick="app.deleteGame('${game.id}')" title="Eliminar juego" class="w-7 h-7 rounded-lg bg-slate-100 active:bg-rose-100 text-slate-400 hover:text-rose-600 flex items-center justify-center text-xs transition-colors">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
                ` : ''}
                <button onclick="app.quickScheduleGame('${game.id}')" title="Programar partida" class="px-2.5 py-1 rounded-lg bg-brand-50 active:bg-brand-100 text-brand-700 font-bold text-xs flex items-center gap-1 transition-colors">
                  <i class="fa-solid fa-calendar-plus text-[10px]"></i>
                  <span>Jugar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  handleCreateOrUpdateGame(event) {
    event.preventDefault();
    const editId = document.getElementById('game-edit-id').value;
    const magicQuery = document.getElementById('game-magic-query')?.value?.trim() || '';
    let title = document.getElementById('game-title').value.trim();
    if (!title && magicQuery) {
      title = magicQuery;
    }
    if (!title) {
      alert('Por favor escribe el nombre del juego.');
      const queryEl = document.getElementById('game-magic-query');
      if (queryEl) queryEl.focus();
      return;
    }

    const minPlayers = parseInt(document.getElementById('game-min').value) || 2;
    const maxPlayers = parseInt(document.getElementById('game-max').value) || 4;
    const durationMin = parseInt(document.getElementById('game-duration').value) || 60;
    const ownerId = document.getElementById('game-owner-id').value;
    let image = document.getElementById('game-image').value.trim();
    let description = document.getElementById('game-desc').value.trim();

    // If image is empty, check if we have a match in the popular catalog
    if (!image) {
      const cleanTitle = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      const match = POPULAR_GAMES_CATALOG.find(cat => 
        cat.names.some(n => cleanTitle.includes(n) || n.includes(cleanTitle))
      );
      if (match) {
        image = match.image;
        if (!description) description = match.description;
      }
    }

    // Sanitize image URL to use WordPress Photon edge CDN
    image = getSafeImageUrl(image);

    let games = db.getGames();

    if (editId) {
      // Modificar existente
      const idx = games.findIndex(g => g.id === editId);
      if (idx !== -1) {
        games[idx] = {
          ...games[idx],
          title,
          minPlayers,
          maxPlayers,
          durationMin,
          ownerId,
          image: image || games[idx].image,
          description: description || games[idx].description
        };
      }
    } else {
      // Crear nuevo
      const newGame = {
        id: 'g_' + Date.now(),
        title,
        minPlayers,
        maxPlayers,
        durationMin,
        ownerId,
        image,
        description
      };
      games.unshift(newGame);
    }

    // Limpiar de lista de eliminados si se vuelve a crear o editar
    try {
      let deleted = JSON.parse(localStorage.getItem('bg_deleted_games') || '[]');
      const cleanT = title.trim().toLowerCase();
      deleted = deleted.filter(d => d !== editId && d !== cleanT);
      localStorage.setItem('bg_deleted_games', JSON.stringify(deleted));
    } catch(e) {}

    db.saveGames(games);

    this.closeModal('modal-game');
    document.getElementById('form-new-game').reset();
    document.getElementById('game-edit-id').value = '';
    const heading = document.getElementById('modal-game-heading');
    if (heading) heading.textContent = 'Registrar Juego';
    const label = document.getElementById('btn-save-game-label');
    if (label) label.textContent = 'Guardar en Ludoteca';

    const queryInput = document.getElementById('game-magic-query');
    if (queryInput) queryInput.value = '';
    const fb = document.getElementById('magic-feedback');
    if (fb) fb.classList.add('hidden');
    const prevBox = document.getElementById('game-image-preview-box');
    if (prevBox) prevBox.classList.add('hidden');

    this.populateModalSelects();
    this.renderGames();
    this.renderSessions();
  },

  quickScheduleGame(gameId) {
    this.openModal('modal-session');
    document.getElementById('session-game-id').value = gameId;
  },

  /* FRIENDS */
  populateFriendColorSelect(selectedColor = null, currentFriendId = null) {
    const select = document.getElementById('friend-color');
    if (!select) return;
    const friends = db.getFriends();

    const emojiMap = {
      'Rojo': '🔴', 'Azul': '🔵', 'Verde': '🟢', 'Amarillo': '🟡',
      'Morado': '🟣', 'Naranja': '🟠', 'Negro': '⚫', 'Cian': '💎',
      'Rosa': '🌸', 'Teal': '🌊', 'Café': '🟤', 'Gris': '⚪'
    };

    select.innerHTML = MEEPLE_COLORS.map(mc => {
      const takenFriend = friends.find(f => f.id !== currentFriendId && f.color === mc.id);
      const isSelected = selectedColor ? mc.id === selectedColor : false;
      const emoji = emojiMap[mc.name] || '🎲';

      if (takenFriend) {
        return `<option value="${mc.id}" disabled class="text-slate-400 bg-slate-100">${emoji} Meeple ${mc.name} (En uso por ${takenFriend.name.split(' ')[0]})</option>`;
      }
      return `<option value="${mc.id}" ${isSelected ? 'selected' : ''}>${emoji} Meeple ${mc.name}</option>`;
    }).join('');

    const isCurrentColorTaken = friends.some(f => f.id !== currentFriendId && f.color === selectedColor);
    if (!selectedColor || isCurrentColorTaken) {
      const firstAvailable = MEEPLE_COLORS.find(mc => !friends.some(f => f.id !== currentFriendId && f.color === mc.id));
      if (firstAvailable) select.value = firstAvailable.id;
    } else {
      select.value = selectedColor;
    }
  },

  renderFriends() {
    const friends = db.getFriends();
    const games = db.getGames();
    const sessions = db.getSessions();
    const container = document.getElementById('friends-container');
    if (!container) return;

    if (friends.length === 0) {
      container.innerHTML = `
        <div class="text-center py-10 px-4 bg-white rounded-2xl border border-dashed border-slate-300">
          <i class="fa-solid fa-users text-3xl text-slate-300 mb-2"></i>
          <h4 class="font-bold text-xs text-slate-700">No hay amigos registrados</h4>
          <p class="text-[11px] text-slate-400 mt-0.5">Agrega a los miembros de tu grupo de juegos.</p>
          <button onclick="app.openNewFriendModal()" class="mt-3 px-3.5 py-2 bg-brand-600 text-white rounded-xl text-xs font-bold">
            + Agregar Amigo
          </button>
        </div>
      `;
      return;
    }

    const totalWins = sessions.filter(s => s.winnerId).length;

    const friendsWithStats = friends.map(f => {
      const owned = games.filter(g => g.ownerId === f.id).length;
      const attended = sessions.filter(s => s.attendees && s.attendees.some(a => a.friendId === f.id && a.status === 'yes')).length;
      const wins = sessions.filter(s => s.winnerId === f.id).length;
      const winRate = attended > 0 ? Math.round((wins / attended) * 100) : 0;
      return { ...f, owned, attended, wins, winRate };
    });

    // Sort by wins descending, then winRate descending, then attended descending
    const rankedFriends = [...friendsWithStats].sort((a, b) => b.wins - a.wins || b.winRate - a.winRate || b.attended - a.attended);

    let podiumHtml = '';
    if (totalWins > 0) {
      const top1 = rankedFriends[0];
      const top2 = rankedFriends.length > 1 ? rankedFriends[1] : null;
      const top3 = rankedFriends.length > 2 ? rankedFriends[2] : null;

      podiumHtml = `
        <div class="bg-gradient-to-br from-amber-500 via-amber-600 to-yellow-600 rounded-3xl p-4 text-white shadow-md space-y-3 mb-2">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-trophy text-amber-200 text-base"></i>
              <h3 class="font-black text-sm uppercase tracking-wider text-amber-100">Salón de la Fama del Club</h3>
            </div>
            <button onclick="app.shareLeaderboardToWhatsapp()" class="px-2.5 py-1 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-md rounded-xl text-[10px] font-black flex items-center gap-1 transition-colors">
              <i class="fa-brands fa-whatsapp"></i> Compartir
            </button>
          </div>

          <div class="grid grid-cols-3 gap-2 items-end pt-1">
            <!-- 2nd Place -->
            <div class="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 flex flex-col items-center text-center">
              <span class="text-xs font-black text-slate-200">🥈 2º</span>
              <div class="my-1.5">${top2 ? getMeepleSvg(top2.color, 24) : '—'}</div>
              <div class="font-extrabold text-xs truncate w-full">${top2 ? top2.name.split(' ')[0] : '—'}</div>
              <div class="text-[10px] text-amber-200 font-bold">${top2 ? `${top2.wins} vict.` : '0'}</div>
            </div>

            <!-- 1st Place (Champion) -->
            <div class="bg-white/25 backdrop-blur-md rounded-2xl p-3 flex flex-col items-center text-center -translate-y-1 ring-2 ring-amber-300 shadow-md">
              <div class="text-amber-200 text-sm leading-none mb-0.5"><i class="fa-solid fa-crown animate-pulse"></i></div>
              <span class="text-xs font-black text-amber-100">🥇 1º</span>
              <div class="my-1.5 scale-110">${top1 ? getMeepleSvg(top1.color, 28) : '—'}</div>
              <div class="font-black text-xs truncate w-full">${top1 ? top1.name.split(' ')[0] : '—'}</div>
              <div class="text-[11px] text-amber-100 font-black">${top1 ? `${top1.wins} victorias` : '0'}</div>
            </div>

            <!-- 3rd Place -->
            <div class="bg-white/15 backdrop-blur-md rounded-2xl p-2.5 flex flex-col items-center text-center">
              <span class="text-xs font-black text-amber-200/90">🥉 3º</span>
              <div class="my-1.5">${top3 ? getMeepleSvg(top3.color, 24) : '—'}</div>
              <div class="font-extrabold text-xs truncate w-full">${top3 ? top3.name.split(' ')[0] : '—'}</div>
              <div class="text-[10px] text-amber-200 font-bold">${top3 ? `${top3.wins} vict.` : '0'}</div>
            </div>
          </div>
        </div>
      `;
    }

    const cardsHtml = friendsWithStats.map(f => {
      const isMe = f.id === this.currentUserId;

      return `
        <div class="bg-white rounded-2xl border border-slate-200 p-3.5 shadow-2xs flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            <div class="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
              ${getMeepleSvg(f.color, 24)}
            </div>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-1.5">
                <h4 class="font-bold text-xs text-slate-900 truncate">${f.name}</h4>
                ${isMe ? '<span class="text-[9px] font-extrabold bg-brand-100 text-brand-700 px-1.5 py-0.5 rounded-full shrink-0">Tú</span>' : ''}
              </div>
              <div class="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5 text-[10px] text-slate-500">
                <span class="font-bold text-amber-600"><i class="fa-solid fa-crown text-[9px]"></i> ${f.wins} vict. (${f.winRate}%)</span>
                <span>•</span>
                <span><i class="fa-solid fa-calendar-check text-[9px] text-slate-400"></i> ${f.attended} part.</span>
                <span>•</span>
                <span><i class="fa-solid fa-chess-rook text-[9px] text-slate-400"></i> ${f.owned} juego${f.owned !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="app.openEditFriendModal('${f.id}')" title="Modificar nombre o color" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-brand-50 active:bg-brand-100 text-slate-600 hover:text-brand-600 flex items-center justify-center text-xs transition-colors">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onclick="app.deleteFriend('${f.id}')" title="Eliminar del club" class="w-8 h-8 rounded-xl bg-slate-100 hover:bg-rose-50 active:bg-rose-100 text-slate-600 hover:text-rose-600 flex items-center justify-center text-xs transition-colors">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = podiumHtml + cardsHtml;
  },

  openNewFriendModal() {
    const form = document.getElementById('form-new-friend');
    if (form) form.reset();
    const idInput = document.getElementById('friend-id');
    if (idInput) idInput.value = '';

    const heading = document.getElementById('modal-friend-heading');
    if (heading) heading.textContent = 'Agregar Amigo al Club';
    const icon = document.getElementById('modal-friend-icon');
    if (icon) icon.innerHTML = '<i class="fa-solid fa-user-plus text-brand-600"></i>';
    const label = document.getElementById('btn-save-friend-label');
    if (label) label.textContent = 'Registrar Amigo';

    this.populateFriendColorSelect();

    this.openModal('modal-friend');
    setTimeout(() => {
      const nameInput = document.getElementById('friend-name');
      if (nameInput) nameInput.focus();
    }, 100);
  },

  openEditFriendModal(friendId) {
    const friends = db.getFriends();
    const friend = friends.find(f => f.id === friendId);
    if (!friend) return;

    document.getElementById('friend-id').value = friend.id;
    document.getElementById('friend-name').value = friend.name;
    this.populateFriendColorSelect(friend.color, friend.id);

    const heading = document.getElementById('modal-friend-heading');
    if (heading) heading.textContent = 'Modificar Amigo';
    const icon = document.getElementById('modal-friend-icon');
    if (icon) icon.innerHTML = '<i class="fa-solid fa-user-pen text-brand-600"></i>';
    const label = document.getElementById('btn-save-friend-label');
    if (label) label.textContent = 'Guardar Cambios';

    this.openModal('modal-friend');
    setTimeout(() => {
      const nameInput = document.getElementById('friend-name');
      if (nameInput) nameInput.focus();
    }, 100);
  },

  handleSaveFriend(event) {
    event.preventDefault();
    const id = document.getElementById('friend-id').value.trim();
    const name = document.getElementById('friend-name').value.trim();
    const color = document.getElementById('friend-color').value;

    if (!name) return;

    const friends = db.getFriends();
    const isTaken = friends.some(f => f.id !== id && f.color === color);
    if (isTaken) {
      const takenBy = friends.find(f => f.id !== id && f.color === color);
      alert(`⚠️ El color de Meeple seleccionado ya está en uso por ${takenBy ? takenBy.name : 'otro amigo'}.\n\nCada jugador del club debe tener un color exclusivo.`);
      return;
    }

    const parts = name.split(' ').filter(Boolean);
    const initials = parts.length > 1 
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();

    if (id) {
      const idx = friends.findIndex(f => f.id === id);
      if (idx !== -1) {
        friends[idx].name = name;
        friends[idx].color = color;
        friends[idx].initials = initials;
      }
    } else {
      const newFriend = {
        id: 'u_' + Date.now(),
        name,
        color,
        initials
      };
      friends.push(newFriend);
    }

    db.saveFriends(friends);
    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }

    this.closeModal('modal-friend');
    const form = document.getElementById('form-new-friend');
    if (form) form.reset();

    this.populateModalSelects();
    this.updateUserHeader();
    this.renderFriends();
    this.renderGames();
    this.renderSessions();
  },

  deleteFriend(friendId) {
    const friends = db.getFriends();
    if (friends.length <= 1) {
      alert('Debe haber al menos 1 amigo registrado en el club.');
      return;
    }

    const friend = friends.find(f => f.id === friendId);
    if (!friend) return;

    const me = friends.find(f => f.id === this.currentUserId);
    const isAdmin = me && (me.role === 'admin' || me.id === 'u1');
    if (!isAdmin && this.currentUserId !== friendId) {
      alert('Solo el administrador o el propio usuario pueden eliminar este perfil.');
      return;
    }

    if (!confirm(`¿Estás seguro de que deseas eliminar a "${friend.name}" del club?`)) {
      return;
    }

    const updatedFriends = friends.filter(f => f.id !== friendId);
    if (this.currentUserId === friendId) {
      this.currentUserId = updatedFriends[0].id;
      db.setCurrentUserId(this.currentUserId);
    }

    db.saveFriends(updatedFriends);

    // Eliminar inmediatamente en Google Sheets por ID
    const url = db.getGSheetUrl();
    if (url) {
      db.fetchJsonp(url, { action: 'delete_friend', id: friendId }).catch(() => {});
    }

    this.populateModalSelects();
    this.updateUserHeader();
    this.renderFriends();
    this.renderGames();
    this.renderSessions();
  },

  /* ======================================================== */
  /* RULETA DE LA SUERTE EN VIVO (EN LA MESA) */
  /* ======================================================== */
  rouletteFilter: '',
  rouletteCandidates: [],
  rouletteAngle: 0,
  isRouletteSpinning: false,

  openRouletteModal() {
    this.setRouletteFilter('');
    const resBox = document.getElementById('roulette-result-box');
    if (resBox) {
      resBox.classList.add('hidden');
      resBox.innerHTML = '';
    }
    const spinBtn = document.getElementById('btn-spin-wheel');
    if (spinBtn) {
      spinBtn.disabled = false;
      const lbl = document.getElementById('btn-spin-label');
      if (lbl) lbl.textContent = '¡Girar Ruleta de la Suerte!';
    }
    this.openModal('modal-roulette');
    setTimeout(() => this.drawRouletteWheel(), 50);
  },

  setRouletteFilter(val) {
    this.rouletteFilter = val;
    document.querySelectorAll('.rf-chip').forEach(btn => {
      btn.className = 'rf-chip px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700';
    });
    const active = document.getElementById(val ? `rf-${val}` : 'rf-all');
    if (active) {
      active.className = 'rf-chip px-2.5 py-1 rounded-xl text-xs font-bold bg-brand-600 text-white shadow-xs';
    }

    const games = db.getGames();
    this.rouletteCandidates = games.filter(g => {
      if (!val) return true;
      if (val === '2') return g.minPlayers <= 2 && g.maxPlayers >= 2;
      if (val === '3') return g.minPlayers <= 3 && g.maxPlayers >= 3;
      if (val === '4') return g.minPlayers <= 4 && g.maxPlayers >= 4;
      if (val === '5') return g.maxPlayers >= 5;
      return true;
    });

    const countEl = document.getElementById('roulette-games-count');
    if (countEl) {
      countEl.textContent = `${this.rouletteCandidates.length} juego${this.rouletteCandidates.length !== 1 ? 's' : ''}`;
    }

    this.drawRouletteWheel();
  },

  drawRouletteWheel() {
    const canvas = document.getElementById('roulette-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const radius = width / 2 - 4;

    ctx.clearRect(0, 0, width, height);

    const candidates = this.rouletteCandidates;
    if (!candidates || candidates.length === 0) {
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#1e293b';
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 11px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Sin juegos disponibles', cx, cy);
      return;
    }

    const numSlices = candidates.length;
    const sliceAngle = (2 * Math.PI) / numSlices;
    const colors = [
      '#6366f1', '#ec4899', '#10b981', '#f59e0b',
      '#8b5cf6', '#06b6d4', '#f97316', '#3b82f6',
      '#14b8a6', '#e11d48', '#84cc16', '#a855f7'
    ];

    for (let i = 0; i < numSlices; i++) {
      const startAngle = this.rouletteAngle + i * sliceAngle;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();

      // Border between slices
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#ffffff40';
      ctx.stroke();

      // Text label
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 3;
      ctx.font = 'bold 10px system-ui, sans-serif';

      let title = candidates[i].title || 'Juego';
      if (title.length > 15) title = title.substring(0, 14) + '…';
      ctx.fillText(title, radius - 14, 0);
      ctx.restore();
    }

    // Outer border ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ffffff60';
    ctx.stroke();
  },

  spinRoulette() {
    if (this.isRouletteSpinning) return;
    if (!this.rouletteCandidates || this.rouletteCandidates.length === 0) {
      alert('No hay juegos disponibles para la cantidad de jugadores seleccionada.');
      return;
    }

    this.isRouletteSpinning = true;
    const spinBtn = document.getElementById('btn-spin-wheel');
    if (spinBtn) spinBtn.disabled = true;
    const lbl = document.getElementById('btn-spin-label');
    if (lbl) lbl.textContent = '¡Girando la suerte! 🎲';

    const resBox = document.getElementById('roulette-result-box');
    if (resBox) resBox.classList.add('hidden');

    const candidates = this.rouletteCandidates;
    const numSlices = candidates.length;
    const sliceAngle = (2 * Math.PI) / numSlices;

    const winnerIndex = Math.floor(Math.random() * numSlices);
    const winnerGame = candidates[winnerIndex];

    // Pointer is at the top: angle -Math.PI / 2.
    // Center of slice i is at (angle + i * sliceAngle + sliceAngle / 2).
    const targetSliceCenter = -Math.PI / 2 - (winnerIndex * sliceAngle + sliceAngle / 2);
    const fullSpins = (5 + Math.floor(Math.random() * 3)) * (2 * Math.PI);
    
    // Normalize current angle
    const currentNorm = this.rouletteAngle % (2 * Math.PI);
    const delta = (targetSliceCenter - currentNorm) + fullSpins;
    const startAngle = this.rouletteAngle;
    const endAngle = startAngle + delta;

    const duration = 3800;
    const startTime = performance.now();
    let lastVibeAngle = startAngle;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      this.rouletteAngle = startAngle + (endAngle - startAngle) * ease;
      this.drawRouletteWheel();

      // Subtle haptic tick when passing a slice
      if (Math.abs(this.rouletteAngle - lastVibeAngle) >= sliceAngle) {
        lastVibeAngle = this.rouletteAngle;
        if (navigator.vibrate) navigator.vibrate(8);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.isRouletteSpinning = false;
        if (spinBtn) spinBtn.disabled = false;
        if (lbl) lbl.textContent = '¡Girar de nuevo!';
        this.finishRouletteSpin(winnerGame);
      }
    };

    requestAnimationFrame(animate);
  },

  finishRouletteSpin(winnerGame) {
    if (navigator.vibrate) navigator.vibrate([40, 60, 40, 100]);
    const resBox = document.getElementById('roulette-result-box');
    if (!resBox) return;

    const coverUrl = getSafeImageUrl(winnerGame.image);
    resBox.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-12 h-14 rounded-xl overflow-hidden bg-slate-900 shrink-0 shadow-xs border border-amber-300">
          ${coverUrl ? `<img src="${coverUrl}" alt="${winnerGame.title}" class="w-full h-full object-cover">` : `<div class="w-full h-full flex items-center justify-center text-amber-500"><i class="fa-solid fa-dice-d20"></i></div>`}
        </div>
        <div class="min-w-0 flex-1 text-left">
          <span class="text-[9px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full">🎉 ¡Juego Elegido!</span>
          <h4 class="font-black text-sm text-slate-900 truncate mt-0.5">${winnerGame.title}</h4>
          <p class="text-[10px] text-slate-600 font-medium">${winnerGame.minPlayers}-${winnerGame.maxPlayers} jug. • ~${winnerGame.durationMin} min</p>
        </div>
      </div>
      <div class="pt-1">
        <button onclick="app.quickScheduleFromDetail('${winnerGame.id}'); app.closeModal('modal-roulette');" class="w-full py-2 bg-brand-600 active:bg-brand-700 text-white font-black text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all">
          <i class="fa-solid fa-calendar-plus text-[11px]"></i>
          <span>Programar Partida con este Juego</span>
        </button>
      </div>
    `;
    resBox.classList.remove('hidden');
  },

  /* ======================================================== */
  /* SELECTOR DE PRIMER TURNO ("¿QUIÉN EMPIEZA?") */
  /* ======================================================== */
  fpTouches: new Map(),
  fpCountdownTimer: null,
  fpCountdownSecs: 3,
  fpWinnerTouchId: null,
  fpColors: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4', '#ec4899', '#f97316'],

  openFirstPlayerModal() {
    this.setFirstPlayerMode('touch');
    this.openModal('modal-first-player');
    this.initTouchZone();
  },

  setFirstPlayerMode(mode) {
    const tabTouch = document.getElementById('tab-fp-touch');
    const tabFriends = document.getElementById('tab-fp-friends');
    const panelTouch = document.getElementById('fp-panel-touch');
    const panelFriends = document.getElementById('fp-panel-friends');

    if (mode === 'touch') {
      if (tabTouch) tabTouch.className = 'py-2 rounded-xl font-black bg-white text-brand-700 shadow-xs flex items-center justify-center gap-1 transition-all';
      if (tabFriends) tabFriends.className = 'py-2 rounded-xl text-slate-600 hover:text-brand-600 flex items-center justify-center gap-1 transition-all';
      if (panelTouch) panelTouch.classList.remove('hidden');
      if (panelFriends) panelFriends.classList.add('hidden');
    } else {
      if (tabTouch) tabTouch.className = 'py-2 rounded-xl text-slate-600 hover:text-brand-600 flex items-center justify-center gap-1 transition-all';
      if (tabFriends) tabFriends.className = 'py-2 rounded-xl font-black bg-white text-brand-700 shadow-xs flex items-center justify-center gap-1 transition-all';
      if (panelTouch) panelTouch.classList.add('hidden');
      if (panelFriends) panelFriends.classList.remove('hidden');
      this.populateFirstPlayerFriends();
    }
  },

  initTouchZone() {
    const zone = document.getElementById('fp-touch-zone');
    if (!zone || zone.dataset.initialized) return;
    zone.dataset.initialized = 'true';

    const handleTouches = (e) => {
      e.preventDefault();
      const rect = zone.getBoundingClientRect();
      const activeTouches = e.touches;

      // Reset winner state if fingers change
      if (this.fpWinnerTouchId && activeTouches.length === 0) {
        this.fpWinnerTouchId = null;
      }

      // Clear non-active touches
      const activeIds = new Set();
      for (let i = 0; i < activeTouches.length; i++) {
        activeIds.add(activeTouches[i].identifier);
      }
      for (const [id] of this.fpTouches) {
        if (!activeIds.has(id)) {
          this.fpTouches.delete(id);
        }
      }

      // Add or update touches
      for (let i = 0; i < activeTouches.length; i++) {
        const touch = activeTouches[i];
        const id = touch.identifier;
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (!this.fpTouches.has(id)) {
          const colorIdx = this.fpTouches.size % this.fpColors.length;
          this.fpTouches.set(id, { x, y, color: this.fpColors[colorIdx] });
        } else {
          const obj = this.fpTouches.get(id);
          obj.x = x;
          obj.y = y;
        }
      }

      this.renderTouchCircles();

      // Countdown handling: start if >= 2 fingers placed and no winner yet
      if (this.fpTouches.size >= 2 && !this.fpWinnerTouchId) {
        if (!this.fpCountdownTimer) {
          if (navigator.vibrate) navigator.vibrate(30);
          this.startTouchCountdown();
        }
      } else {
        if (this.fpCountdownTimer) {
          clearInterval(this.fpCountdownTimer);
          this.fpCountdownTimer = null;
          const overlay = document.getElementById('fp-countdown-overlay');
          if (overlay) overlay.remove();
        }
      }
    };

    zone.addEventListener('touchstart', handleTouches, { passive: false });
    zone.addEventListener('touchmove', handleTouches, { passive: false });
    zone.addEventListener('touchend', handleTouches, { passive: false });
    zone.addEventListener('touchcancel', handleTouches, { passive: false });
  },

  renderTouchCircles() {
    const zone = document.getElementById('fp-touch-zone');
    const hint = document.getElementById('fp-touch-hint');
    if (!zone) return;

    // Remove existing touch circle elements
    zone.querySelectorAll('.fp-circle').forEach(el => el.remove());

    if (this.fpTouches.size === 0) {
      if (hint) hint.classList.remove('hidden');
      return;
    }

    if (hint) hint.classList.add('hidden');

    for (const [id, t] of this.fpTouches) {
      const isWinner = this.fpWinnerTouchId === id;
      const isLoser = this.fpWinnerTouchId && !isWinner;

      const circle = document.createElement('div');
      circle.className = `fp-circle absolute rounded-full flex items-center justify-center transition-all pointer-events-none select-none ${
        isWinner 
          ? 'w-20 h-20 -ml-10 -mt-10 ring-4 ring-amber-300 shadow-2xl scale-110 z-30' 
          : isLoser 
            ? 'w-14 h-14 -ml-7 -mt-7 opacity-20' 
            : 'w-16 h-16 -ml-8 -mt-8 ring-2 ring-white/60 animate-pulse shadow-lg'
      }`;
      circle.style.left = `${t.x}px`;
      circle.style.top = `${t.y}px`;
      circle.style.backgroundColor = isWinner ? '#f59e0b' : t.color;

      if (isWinner) {
        circle.innerHTML = '<span class="text-2xl text-white drop-shadow">👑</span>';
      } else {
        circle.innerHTML = '<span class="w-3 h-3 rounded-full bg-white/70"></span>';
      }

      zone.appendChild(circle);
    }
  },

  startTouchCountdown() {
    this.fpCountdownSecs = 2.5;
    const zone = document.getElementById('fp-touch-zone');

    const countdownOverlay = document.createElement('div');
    countdownOverlay.id = 'fp-countdown-overlay';
    countdownOverlay.className = 'absolute inset-0 flex items-center justify-center pointer-events-none text-white font-black text-3xl z-40 bg-black/20 backdrop-blur-2xs';
    countdownOverlay.textContent = '¡Listos!...';
    zone.appendChild(countdownOverlay);

    let step = 0;
    this.fpCountdownTimer = setInterval(() => {
      step++;
      if (navigator.vibrate) navigator.vibrate(15);

      if (step === 1) countdownOverlay.textContent = '3...';
      else if (step === 2) countdownOverlay.textContent = '2...';
      else if (step === 3) countdownOverlay.textContent = '1...';
      else if (step >= 4) {
        clearInterval(this.fpCountdownTimer);
        this.fpCountdownTimer = null;
        countdownOverlay.remove();
        this.selectTouchWinner();
      }
    }, 450);
  },

  selectTouchWinner() {
    const ids = Array.from(this.fpTouches.keys());
    if (ids.length === 0) return;
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    this.fpWinnerTouchId = randomId;
    this.renderTouchCircles();

    if (navigator.vibrate) navigator.vibrate([80, 50, 150]);
  },

  populateFirstPlayerFriends() {
    const container = document.getElementById('fp-friends-list');
    if (!container) return;
    const friends = db.getFriends();

    container.innerHTML = friends.map(f => `
      <label class="p-2.5 rounded-2xl border border-slate-200 bg-white hover:border-brand-300 cursor-pointer flex items-center gap-2 transition-all">
        <input type="checkbox" name="fp-friend-check" value="${f.id}" checked class="rounded text-brand-600 focus:ring-brand-500 w-4 h-4">
        <div class="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
          ${getMeepleSvg(f.color, 16)}
        </div>
        <span class="font-bold text-xs text-slate-800 truncate">${f.name}</span>
      </label>
    `).join('');
  },

  spinFirstPlayerFriends() {
    const checked = Array.from(document.querySelectorAll('input[name="fp-friend-check"]:checked')).map(el => el.value);
    if (checked.length === 0) {
      alert('Por favor selecciona al menos a 1 amigo para el sorteo.');
      return;
    }

    const friends = db.getFriends().filter(f => checked.includes(f.id));
    const resBox = document.getElementById('fp-friends-result');
    if (!resBox) return;

    resBox.classList.remove('hidden');
    let counter = 0;
    const interval = setInterval(() => {
      const temp = friends[counter % friends.length];
      resBox.innerHTML = `
        <div class="font-bold text-xs text-slate-500">Mezclando Meeples...</div>
        <div class="flex items-center justify-center gap-1.5 text-sm font-black text-slate-800">
          ${getMeepleSvg(temp.color, 18)}
          <span>${temp.name}</span>
        </div>
      `;
      counter++;
      if (navigator.vibrate) navigator.vibrate(10);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      const winner = friends[Math.floor(Math.random() * friends.length)];
      if (navigator.vibrate) navigator.vibrate([60, 60, 100]);

      resBox.innerHTML = `
        <div class="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100 py-0.5 px-2 rounded-full inline-block">👑 ¡Primer Jugador (Turno 1)!</div>
        <div class="flex items-center justify-center gap-2 text-base font-black text-amber-950 mt-1">
          ${getMeepleSvg(winner.color, 24)}
          <span>${winner.name}</span>
        </div>
        <p class="text-[10px] text-amber-800 font-medium">Comienza la ronda con el primer turno.</p>
      `;
    }, 1500);
  },

  /* ======================================================== */
  /* SORTEO OFICIAL A DISTANCIA Y CERTIFICADO */
  /* ======================================================== */
  currentDrawSessionId: null,

  openSessionDrawModal(sessionId) {
    this.currentDrawSessionId = sessionId;
    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    const games = db.getGames();
    const game = games.find(g => g.id === session.gameId);

    const infoBox = document.getElementById('session-draw-info');
    if (infoBox) {
      let cleanTime = session.time || '19:30';
      if (cleanTime.includes('T')) cleanTime = cleanTime.split('T')[1].substring(0, 5);
      infoBox.innerHTML = `
        <div class="font-black text-slate-900 text-xs">Partida Programada:</div>
        <div class="text-[11px] text-slate-600 font-medium">📅 ${session.date} a las ${cleanTime} hrs • 📍 ${session.location || 'Club'}</div>
        <div class="text-[11px] text-brand-700 font-bold mt-0.5">🎮 Juego actual registrado: ${game ? game.title : 'Por definir'}</div>
      `;
    }

    const resBox = document.getElementById('session-draw-result-box');
    const btnDraw = document.getElementById('btn-execute-session-draw');

    if (session.drawData) {
      let drawInfo = null;
      try { drawInfo = typeof session.drawData === 'string' ? JSON.parse(session.drawData) : session.drawData; } catch(e){}
      if (drawInfo && resBox) {
        const drawnDate = drawInfo.drawnAt ? new Date(drawInfo.drawnAt).toLocaleString('es-ES') : 'Fecha registrada';
        resBox.innerHTML = `
          <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-lg mb-1 shadow-xs">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <span class="text-[9px] font-black uppercase text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full">Sorteo Oficial Certificado</span>
          <h4 class="font-black text-base text-slate-900 mt-1">${drawInfo.gameTitle || (game ? game.title : 'Juego')}</h4>
          <div class="p-2 bg-white/80 rounded-xl border border-indigo-100 text-[10px] text-slate-600 text-left space-y-0.5 my-1">
            <div><strong class="text-slate-800">Certificado por:</strong> ${drawInfo.drawnByName}</div>
            <div><strong class="text-slate-800">Fecha y Hora:</strong> ${drawnDate}</div>
            <div><strong class="text-slate-800">Código de Validación:</strong> <code class="font-mono font-bold text-brand-600">${drawInfo.drawCode}</code></div>
          </div>
          <button type="button" onclick="app.shareSessionDrawToWhatsapp('${session.id}')" class="w-full py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-colors">
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Compartir Certificado en WhatsApp</span>
          </button>
        `;
        resBox.classList.remove('hidden');
      }
      if (btnDraw) {
        btnDraw.disabled = true;
        btnDraw.innerHTML = '<i class="fa-solid fa-lock"></i><span>Sorteo Ya Certificado e Inalterable</span>';
      }
    } else {
      if (resBox) resBox.classList.add('hidden');
      if (btnDraw) {
        btnDraw.disabled = false;
        btnDraw.innerHTML = '<i class="fa-solid fa-lock"></i><span>Sortear y Certificar Oficialmente 🎲</span>';
      }
    }

    this.openModal('modal-session-draw');
  },

  executeOfficialSessionDraw() {
    const sessionId = this.currentDrawSessionId;
    if (!sessionId) return;

    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    if (session.drawData) {
      alert('Esta partida ya cuenta con un sorteo oficial certificado e inalterable.');
      return;
    }

    const friends = db.getFriends();
    const currentFriend = friends.find(f => f.id === this.currentUserId);
    if (!currentFriend) {
      alert('Por favor selecciona tu perfil o ingresa con tu PIN para realizar el sorteo oficial.');
      this.openUserGate(true);
      return;
    }

    const games = db.getGames();
    if (games.length === 0) {
      alert('No hay juegos disponibles en la ludoteca para sortear.');
      return;
    }

    if (!confirm(`¿Confirmas que deseas realizar el Sorteo Oficial a Distancia?\n\nTu nombre (${currentFriend.name}) y la fecha/hora exacta quedarán sellados en Google Sheets como respaldo inalterable para todos los amigos.`)) {
      return;
    }

    // Filter candidate games matching confirmed attendees or general
    const attendees = Array.isArray(session.attendees) ? session.attendees.filter(a => a.status === 'yes') : [];
    const count = attendees.length > 0 ? attendees.length : 4;
    let pool = games.filter(g => g.minPlayers <= count && g.maxPlayers >= count);
    if (pool.length === 0) pool = games;

    const winnerGame = pool[Math.floor(Math.random() * pool.length)];
    const drawCode = 'CERT-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    const drawData = {
      gameId: winnerGame.id,
      gameTitle: winnerGame.title,
      drawnAt: new Date().toISOString(),
      drawnByUserId: currentFriend.id,
      drawnByName: currentFriend.name,
      drawCode
    };

    session.gameId = winnerGame.id;
    session.drawData = JSON.stringify(drawData);

    db.saveSessions(sessions);
    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }

    this.renderSessions();
    this.openSessionDrawModal(sessionId);

    if (navigator.vibrate) navigator.vibrate([60, 60, 100]);

    if (confirm(`¡Sorteo Oficial Exitoso!\n\nJuego seleccionado: ${winnerGame.title}\nCódigo: ${drawCode}\n\n¿Deseas enviar el certificado a WhatsApp ahora?`)) {
      this.shareSessionDrawToWhatsapp(sessionId);
    }
  },

  shareSessionDrawToWhatsapp(sessionId) {
    const session = db.getSessions().find(s => s.id === sessionId);
    if (!session || !session.drawData) return;

    let drawInfo = null;
    try { drawInfo = typeof session.drawData === 'string' ? JSON.parse(session.drawData) : session.drawData; } catch(e){}
    if (!drawInfo) return;

    const games = db.getGames();
    const game = games.find(g => g.id === session.gameId) || { title: drawInfo.gameTitle || 'Juego de mesa', minPlayers: 2, maxPlayers: 4, durationMin: 60 };
    const shareUrl = this.getShareUrl();

    let cleanTime = session.time || '19:30';
    if (cleanTime.includes('T')) cleanTime = cleanTime.split('T')[1].substring(0, 5);

    const drawTime = drawInfo.drawnAt ? new Date(drawInfo.drawnAt).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }) : '';
    const drawDate = drawInfo.drawnAt ? new Date(drawInfo.drawnAt).toLocaleDateString('es-ES') : '';

    let msg = `🎲📜 *CERTIFICADO DE SORTEO OFICIAL - CLUB DE JUEGOS* 📜🎲%0A%0A` +
      `¡La suerte ha hablado! El juego seleccionado para la partida es:%0A%0A` +
      `🔥 *JUEGO SORTEADO:* *${game.title}*%0A` +
      `👥 *Jugadores:* ${game.minPlayers}-${game.maxPlayers} jug. (~${game.durationMin} min)%0A` +
      `📅 *Fecha de la Partida:* ${session.date} a las ${cleanTime} hrs%0A` +
      `📍 *Lugar:* ${session.location || 'Club'}%0A%0A` +
      `🛡️ *CERTIFICACIÓN INALTERABLE:*%0A` +
      `👤 *Sorteado por:* ${drawInfo.drawnByName}%0A` +
      `⏰ *Sellado el:* ${drawDate} ${drawTime} hrs%0A` +
      `🔒 *Código de Validación:* \`${drawInfo.drawCode}\`%0A` +
      `📋 *Registrado en Base de Datos Google Sheets*%0A%0A` +
      `📲 *Revisa la ficha del juego y confirma tu asistencia:*%0A${encodeURIComponent(shareUrl)}`;

    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  app.init();

  // Close suggestions box if tapped outside
  document.addEventListener('click', (e) => {
    const input = document.getElementById('game-magic-query');
    const box = document.getElementById('game-suggestions-box');
    if (box && !box.classList.contains('hidden')) {
      if (input && !input.contains(e.target) && !box.contains(e.target)) {
        box.classList.add('hidden');
      }
    }
  });
});
