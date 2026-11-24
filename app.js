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

// Default mock data for first load
const DEFAULT_FRIENDS = [
  { id: 'u1', name: 'Elvis', color: 'bg-red-600', initials: 'EL' },
  { id: 'u2', name: 'Sofía', color: 'bg-blue-600', initials: 'SO' },
  { id: 'u3', name: 'Mateo', color: 'bg-emerald-600', initials: 'MA' },
  { id: 'u4', name: 'Valeria', color: 'bg-amber-500', initials: 'VA' },
  { id: 'u5', name: 'Diego', color: 'bg-violet-600', initials: 'DI' }
];

// Curated database with instant metadata, reviews & REAL official box art
const POPULAR_GAMES_CATALOG = [
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

const DEFAULT_GAMES = [
  {
    id: 'g0',
    title: 'Brass: Birmingham',
    minPlayers: 2,
    maxPlayers: 4,
    durationMin: 90,
    ownerId: 'u1',
    description: 'Aclamada obra maestra de estrategia económica ambientada en la Revolución Industrial de Lancashire y Birmingham, Inglaterra. Los jugadores compiten como magnates construyendo redes de canales y ferrocarriles, fundando industrias de algodón, carbón y hierro, y vendiendo mercancías con una profunda gestión de préstamos y recursos.',
    image: 'https://images.weserv.nl/?url=https://cf.geekdo-images.com/x3zxjrAET9EgndpBRbeikg__itemrep/img/1a2r1l_qYx-uGvBvd_7n0_qH73w=/fit-in/500x500/filters:strip_icc()/pic3490053.jpg&output=jpg'
  },
  {
    id: 'g1',
    title: 'Catan',
    minPlayers: 3,
    maxPlayers: 4,
    durationMin: 75,
    ownerId: 'u1',
    description: 'Comercia, construye y coloniza la isla de Catán en este clásico mundial de estrategia y negociación.',
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg&w=500&output=jpg'
  },
  {
    id: 'g2',
    title: 'Carcassonne',
    minPlayers: 2,
    maxPlayers: 5,
    durationMin: 45,
    ownerId: 'u2',
    description: 'Coloca losetas para construir caminos, ciudades, monasterios y campos puntuando con tus seguidores.',
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/7/76/Carcassonne-game.jpg&w=500&output=jpg'
  },
  {
    id: 'g3',
    title: 'Dixit',
    minPlayers: 3,
    maxPlayers: 8,
    durationMin: 35,
    ownerId: 'u4',
    description: 'Juego de deducción poética con preciosas cartas ilustradas donde adivinas la pista del narrador.',
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/1/1b/Dixit_board_game_box_cover.jpg&w=500&output=jpg'
  },
  {
    id: 'g4',
    title: 'Terraforming Mars',
    minPlayers: 1,
    maxPlayers: 5,
    durationMin: 120,
    ownerId: 'u3',
    description: 'Controla corporaciones para hacer habitable Marte subiendo temperatura, oxígeno y océanos.',
    image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/9/91/Terraforming_Mars_board_game_box.jpg&w=500&output=jpg'
  }
];

const DEFAULT_SESSIONS = [
  {
    id: 's1',
    gameId: 'g1',
    date: '2026-11-28',
    time: '19:30',
    location: 'Casa de Carlos (Miraflores)',
    notes: '¡Habrá pizza! Traer gaseosas o cervezas. Empezamos puntual.',
    attendees: [
      { friendId: 'u1', status: 'yes' },
      { friendId: 'u2', status: 'yes' },
      { friendId: 'u3', status: 'yes' },
      { friendId: 'u4', status: 'maybe' }
    ]
  },
  {
    id: 's2',
    gameId: 'g3',
    date: '2026-12-05',
    time: '18:00',
    location: 'Casa de Valeria',
    notes: 'Noche chill de Dixit y cartas, ideal para invitar amigos nuevos.',
    attendees: [
      { friendId: 'u4', status: 'yes' },
      { friendId: 'u2', status: 'yes' },
      { friendId: 'u5', status: 'yes' }
    ]
  }
];

// Decoupled DB Layer (localStorage + Google Sheets Cloud Sync)
const db = {
  getGSheetUrl() {
    return localStorage.getItem('bg_gsheet_url') || '';
  },
  setGSheetUrl(url) {
    if (url) localStorage.setItem('bg_gsheet_url', url.trim());
    else localStorage.removeItem('bg_gsheet_url');
  },
  getFriends() {
    const raw = localStorage.getItem('bg_friends');
    return raw ? JSON.parse(raw) : DEFAULT_FRIENDS;
  },
  saveFriends(f) {
    localStorage.setItem('bg_friends', JSON.stringify(f));
    this.pushToGoogleSheets();
  },
  getGames() {
    const raw = localStorage.getItem('bg_games');
    return raw ? JSON.parse(raw) : DEFAULT_GAMES;
  },
  saveGames(g) {
    localStorage.setItem('bg_games', JSON.stringify(g));
    this.pushToGoogleSheets();
  },
  getSessions() {
    const raw = localStorage.getItem('bg_sessions');
    return raw ? JSON.parse(raw) : DEFAULT_SESSIONS;
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

  async syncWithGoogleSheets() {
    const url = this.getGSheetUrl();
    if (!url) return false;

    try {
      const fetchUrl = url + (url.includes('?') ? '&' : '?') + 'action=all';
      const res = await fetch(fetchUrl);
      const data = await res.json();

      let changed = false;
      if (data.games && Array.isArray(data.games) && data.games.length) {
        localStorage.setItem('bg_games', JSON.stringify(data.games));
        changed = true;
      }
      if (data.sessions && Array.isArray(data.sessions) && data.sessions.length) {
        localStorage.setItem('bg_sessions', JSON.stringify(data.sessions));
        changed = true;
      }
      if (data.friends && Array.isArray(data.friends) && data.friends.length) {
        localStorage.setItem('bg_friends', JSON.stringify(data.friends));
        changed = true;
      }
      return changed;
    } catch (err) {
      console.warn('Sync with Google Sheets failed:', err);
      return false;
    }
  },

  async pushToGoogleSheets() {
    const url = this.getGSheetUrl();
    if (!url) return;

    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'save_all',
          games: this.getGames(),
          sessions: this.getSessions(),
          friends: this.getFriends()
        })
      });
    } catch (err) {
      console.warn('Push to Google Sheets failed:', err);
    }
  }
};

// Main App Controller
const app = {
  currentTab: 'sessions',
  currentUserId: 'u1',
  activePlayerFilter: '',

  async init() {
    // Auto-detect ?db=... in URL for seamless zero-setup sharing with friends
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const dbParam = urlParams.get('db');
      if (dbParam && dbParam.startsWith('https://script.google.com/macros/s/')) {
        db.setGSheetUrl(dbParam);
      }
    } catch (e) {
      console.warn('URL params check failed:', e);
    }

    if (!localStorage.getItem('bg_friends')) db.saveFriends(DEFAULT_FRIENDS);
    if (!localStorage.getItem('bg_games')) db.saveGames(DEFAULT_GAMES);
    if (!localStorage.getItem('bg_sessions')) db.saveSessions(DEFAULT_SESSIONS);

    // Update initial test user from Carlos to Elvis if present
    const existingFriends = db.getFriends();
    if (existingFriends && existingFriends.length > 0 && existingFriends[0].name.includes('Carlos')) {
      existingFriends[0].name = 'Elvis';
      existingFriends[0].color = 'bg-red-600';
      db.saveFriends(existingFriends);
    }

    this.currentUserId = db.getCurrentUserId();
    this.updateUserHeader();
    this.updateDbStatusUi();
    this.populateModalSelects();
    this.setTab('sessions');

    // INSTANT GATE: Show login/selection immediately at 0ms if not logged in this session
    if (!sessionStorage.getItem('bg_user_entered')) {
      this.openUserGate(false);
    } else {
      this.closeUserGate();
    }

    // Auto-migrate any existing games in localStorage with official high-res covers & reviews
    this.migrateExistingGames();

    // Sync with Google Sheets in the background without blocking the UI
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
    // Auto-poll cloud database every 20 seconds to keep all phones in sync in real time
    this.autoSyncInterval = setInterval(async () => {
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
    }, 20000);
  },

  updateDbStatusUi() {
    const url = db.getGSheetUrl();
    const icon = document.getElementById('db-status-icon');
    const label = document.getElementById('db-status-label');
    const banner = document.getElementById('db-active-banner');
    const input = document.getElementById('input-gsheet-url');

    if (input && url) input.value = url;

    if (url) {
      if (icon) icon.className = 'fa-solid fa-cloud-check text-emerald-600 text-xs';
      if (label) label.textContent = 'Sheets Activo';
      if (banner) {
        banner.className = 'p-3 rounded-xl border bg-emerald-50 border-emerald-200 text-emerald-900 flex items-center justify-between text-xs';
        banner.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="font-bold">Conectado a Google Sheets</span>
          </div>
          <span class="text-[10px] text-emerald-700 font-semibold">Sincronizado</span>
        `;
      }
      const shareSec = document.getElementById('db-share-section');
      if (shareSec) shareSec.classList.remove('hidden');
    } else {
      if (icon) icon.className = 'fa-solid fa-cloud text-slate-400 text-xs';
      if (label) label.textContent = 'Solo Local';
      if (banner) {
        banner.className = 'p-3 rounded-xl border bg-slate-50 border-slate-200 text-slate-700 flex items-center gap-2 text-xs';
        banner.innerHTML = `
          <i class="fa-solid fa-hard-drive text-slate-400"></i>
          <div>
            <span class="font-bold">Modo Almacenamiento Local</span>
            <p class="text-[10px] text-slate-400">Los cambios se guardan solo en este dispositivo.</p>
          </div>
        `;
      }
      const shareSec = document.getElementById('db-share-section');
      if (shareSec) shareSec.classList.add('hidden');
    }
  },

  copyShareLink() {
    const url = db.getGSheetUrl();
    if (!url) {
      alert('Primero conecta tu Google Sheets arriba para poder generar un enlace compartido.');
      return;
    }

    let base = window.location.href.split('?')[0].split('#')[0];
    const shareUrl = `${base}?db=${encodeURIComponent(url)}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        const btnLabel = document.getElementById('btn-copy-share-label');
        if (btnLabel) {
          const orig = btnLabel.textContent;
          btnLabel.textContent = '¡Enlace Copiado al Portapapeles!';
          setTimeout(() => { btnLabel.textContent = orig; }, 2500);
        }
        alert('¡Enlace copiado! Pégalo en tu grupo de WhatsApp.\n\nCuando tus amigos abran ese enlace en sus celulares, se conectarán a esta misma base de datos sin tener que configurar nada.');
      }).catch(() => {
        prompt('Copia este enlace para enviarlo a tus amigos:', shareUrl);
      });
    } else {
      prompt('Copia este enlace para enviarlo a tus amigos:', shareUrl);
    }
  },

  async connectGoogleSheets() {
    const input = document.getElementById('input-gsheet-url');
    const url = input?.value?.trim();
    if (!url || !url.startsWith('https://script.google.com/macros/s/')) {
      alert('Por favor ingresa una URL válida de Google Apps Script (que comience con https://script.google.com/macros/s/...)');
      return;
    }

    db.setGSheetUrl(url);
    this.updateDbStatusUi();

    const btn = document.getElementById('btn-sync-gsheet');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Conectando...`;

    // Push initial local data to populate the sheet if empty, then sync
    await db.pushToGoogleSheets();
    await db.syncWithGoogleSheets();

    if (btn) btn.innerHTML = `<i class="fa-solid fa-rotate"></i><span>Sincronizar</span>`;

    alert('¡Excelente! Tu aplicación ahora está conectada a Google Sheets en la nube. Cualquier cambio que hagan tú o tus amigos se guardará en tu hoja de cálculo.');
    this.renderGames();
    this.renderSessions();
    this.renderFriends();
    this.closeModal('modal-db-settings');
  },

  async syncGoogleSheetsNow() {
    const url = db.getGSheetUrl();
    if (!url) {
      alert('Primero ingresa la URL y dale a "Conectar Google Sheets".');
      return;
    }

    const btn = document.getElementById('btn-sync-gsheet');
    if (btn) btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

    await db.syncWithGoogleSheets();
    await db.pushToGoogleSheets();

    if (btn) btn.innerHTML = `<i class="fa-solid fa-check text-emerald-600"></i>`;
    setTimeout(() => {
      if (btn) btn.innerHTML = `<i class="fa-solid fa-rotate"></i><span>Sincronizar</span>`;
    }, 1500);

    this.renderGames();
    this.renderSessions();
    this.renderFriends();
  },

  disconnectCloudDb() {
    if (!confirm('¿Deseas desconectar Google Sheets y volver a modo local?')) return;
    db.setGSheetUrl('');
    this.updateDbStatusUi();
    const input = document.getElementById('input-gsheet-url');
    if (input) input.value = '';
    alert('Desconectado. Ahora la app usará solo el almacenamiento local de este navegador.');
  },

  migrateExistingGames() {
    let games = db.getGames();
    let updated = false;

    games = games.map(g => {
      const cleanTitle = (g.title || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      const match = POPULAR_GAMES_CATALOG.find(cat => 
        cat.names.some(n => cleanTitle.includes(n) || n.includes(cleanTitle))
      );

      if (match) {
        // If image is missing, is an unsplash placeholder or old wikimedia without weserv
        if (!g.image || g.image.includes('unsplash') || !g.image.includes('images.weserv.nl')) {
          g.image = match.image;
          updated = true;
        }
        if (!g.description || g.description.length < 30) {
          g.description = match.description;
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

    this.selectUser(val);
  },

  submitGateRegister() {
    const nameInput = document.getElementById('gate-new-name');
    const name = nameInput ? nameInput.value.trim() : '';

    if (!name) {
      alert('Por favor escribe tu nombre o apodo para registrarte.');
      if (nameInput) nameInput.focus();
      return;
    }

    const friends = db.getFriends();
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
      color,
      initials
    };

    friends.push(newFriend);
    db.saveFriends(friends);

    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }

    this.selectUser(newFriend.id);
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
    if (imgEl) imgEl.src = data.image || '';
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

    if (type === 'session') {
      return `
        <div class="relative w-full h-full bg-slate-900">
          ${game.image ? `
            <img src="${game.image}" 
                 alt="${safeTitle}" 
                 loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" 
                 class="w-full h-full object-cover">
          ` : ''}
          <div class="absolute inset-0 ${game.image ? 'hidden' : 'flex'} bg-gradient-to-br ${colorGrad} p-4 flex flex-col justify-center items-center text-white text-center">
            <i class="fa-solid fa-dice-d20 text-3xl opacity-80 mb-1"></i>
            <span class="font-extrabold text-sm drop-shadow-sm">${safeTitle}</span>
          </div>
        </div>
      `;
    }

    return `
      <div class="w-20 h-24 rounded-xl overflow-hidden shrink-0 bg-slate-900 shadow-sm relative flex items-center justify-center cursor-pointer group" onclick="app.showGameDetail('${game.id}')" title="Ver reseña de ${safeTitle}">
        ${game.image ? `
          <img src="${game.image}" 
               alt="${safeTitle}" 
               loading="lazy"
               onerror="this.style.display='none'; this.nextElementSibling.classList.remove('hidden');" 
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200">
        ` : ''}
        <div class="absolute inset-0 ${game.image ? 'hidden' : 'flex'} bg-gradient-to-br ${colorGrad} p-2 flex flex-col justify-between items-center text-white text-center">
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

    if (!confirm(`¿Estás seguro de que deseas eliminar "${game.title}" de la ludoteca?`)) {
      return;
    }

    const updated = games.filter(g => g.id !== gameId);
    db.saveGames(updated);
    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }

    this.closeModal('modal-game-detail');
    this.populateModalSelects();
    this.renderGames();
    this.renderSessions();
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
      html += `
        <div onclick="app.selectSuggestedCatalogGame('${escapedTitle}')" class="p-2.5 hover:bg-brand-50/80 active:bg-brand-100 cursor-pointer flex items-center gap-3 transition-colors">
          <img src="${g.image}" alt="${g.title}" loading="lazy" class="w-10 h-12 object-cover rounded-lg bg-slate-900 shrink-0 shadow-2xs">
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

    document.getElementById('game-title').value = game.title;
    document.getElementById('game-min').value = game.minPlayers;
    document.getElementById('game-max').value = game.maxPlayers;
    document.getElementById('game-duration').value = game.durationMin;
    document.getElementById('game-image').value = game.image;
    document.getElementById('game-desc').value = game.description;

    this.showExtractedCard({
      title: game.title,
      minPlayers: game.minPlayers,
      maxPlayers: game.maxPlayers,
      durationMin: game.durationMin,
      image: game.image,
      description: game.description
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
        document.getElementById('game-title').value = foundInCatalog.title;
        document.getElementById('game-min').value = foundInCatalog.minPlayers;
        document.getElementById('game-max').value = foundInCatalog.maxPlayers;
        document.getElementById('game-duration').value = foundInCatalog.durationMin;
        document.getElementById('game-image').value = foundInCatalog.image;
        document.getElementById('game-desc').value = foundInCatalog.description;
        
        this.showExtractedCard({
          title: foundInCatalog.title,
          minPlayers: foundInCatalog.minPlayers,
          maxPlayers: foundInCatalog.maxPlayers,
          durationMin: foundInCatalog.durationMin,
          image: foundInCatalog.image,
          description: foundInCatalog.description
        });

        if (navigator.vibrate) navigator.vibrate(30);
        return;
      }

      // 2. Search English Wikipedia for Official Box Art & Infobox Data (players, time)
      let boxArtUrl = '';
      let extractedMin = 2;
      let extractedMax = 4;
      let extractedDuration = 60;
      let englishTitle = '';

      try {
        const enSearchRes = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(rawQuery + ' board game')}&utf8=&format=json&origin=*`
        );
        const enSearchData = await enSearchRes.json();
        const enFirst = enSearchData?.query?.search?.[0];

        if (enFirst) {
          englishTitle = enFirst.title;
          
          // Get Box Cover
          const enSummaryRes = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(englishTitle)}`);
          const enSummary = await enSummaryRes.json();
          if (enSummary.thumbnail && enSummary.thumbnail.source) {
            const rawWikiUrl = enSummary.thumbnail.source.replace(/\/\d+px-/, '/500px-');
            boxArtUrl = `https://images.weserv.nl/?url=${encodeURIComponent(rawWikiUrl)}&w=500&output=jpg`;
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
        if (esFirst) {
          const esSummaryRes = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(esFirst.title)}`);
          const esSummary = await esSummaryRes.json();
          if (esSummary.extract) {
            spanishReview = esSummary.extract;
          }
          if (esSummary.title) {
            detectedTitle = esSummary.title.replace(/\(juego.*?\)/i, '').trim();
          }
          if (!boxArtUrl && esSummary.thumbnail && esSummary.thumbnail.source) {
            const rawWikiUrl = esSummary.thumbnail.source.replace(/\/\d+px-/, '/500px-');
            boxArtUrl = `https://images.weserv.nl/?url=${encodeURIComponent(rawWikiUrl)}&w=500&output=jpg`;
          }
        }
      } catch (e) {
        console.warn('ES Wiki review lookup:', e);
      }

      // Fallback description if Spanish review wasn't found
      if (!spanishReview) {
        spanishReview = `${detectedTitle || rawQuery} es un reconocido juego de mesa de estrategia y entretenimiento para ${extractedMin} a ${extractedMax} jugadores con una duración aproximada de ${extractedDuration} minutos.`;
      }

      const finalCover = boxArtUrl || 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg&w=500&output=jpg';

      // Populate ALL inputs automatically so user doesn't have to fill anything
      document.getElementById('game-title').value = detectedTitle || rawQuery;
      document.getElementById('game-min').value = extractedMin;
      document.getElementById('game-max').value = extractedMax;
      document.getElementById('game-duration').value = extractedDuration;
      document.getElementById('game-image').value = finalCover;
      document.getElementById('game-desc').value = spanishReview;

      // Show the Live Extracted Card with all the info ready
      this.showExtractedCard({
        title: detectedTitle || rawQuery,
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

      const confirmed = session.attendees.filter(a => a.status === 'yes');
      const maybe = session.attendees.filter(a => a.status === 'maybe');
      const spotsLeft = game.maxPlayers - confirmed.length;
      const isFull = spotsLeft <= 0;
      const myRsvp = session.attendees.find(a => a.friendId === this.currentUserId)?.status || 'none';

      const todayStr = new Date().toISOString().split('T')[0];
      const isPast = session.date < todayStr;

      // Date formatted for phone
      const dateParts = session.date.split('-');
      const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
      const dateText = dateObj.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });

      return `
        <div class="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col ${isPast ? 'opacity-90' : ''}">
          
          <!-- Card Header Image & Badges -->
          <div class="relative h-36 bg-slate-900 overflow-hidden">
            ${this.getGameCoverHtml(game, 'session')}
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent pointer-events-none"></div>

            <!-- Top tags -->
            <div class="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center">
              <span class="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <i class="fa-solid fa-clock text-amber-300"></i> ~${game.durationMin} min
              </span>

              ${isPast 
                ? `<span class="bg-slate-800/90 text-slate-200 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 border border-slate-600"><i class="fa-solid fa-flag-checkered text-emerald-400"></i> Partida Jugada</span>`
                : isFull 
                  ? `<span class="bg-rose-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1"><i class="fa-solid fa-lock text-[9px]"></i> Mesa Llena</span>`
                  : `<span class="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1"><i class="fa-solid fa-chair text-[9px]"></i> ${spotsLeft} cupo${spotsLeft > 1 ? 's' : ''} libre${spotsLeft > 1 ? 's' : ''}</span>`
              }
            </div>

            <!-- Bottom title over image -->
            <div class="absolute bottom-2.5 left-3.5 right-3.5 text-white">
              <div class="text-[11px] font-bold text-brand-300 uppercase tracking-wide">${dateText} • ${session.time} hrs ${isPast ? '(Pasada)' : ''}</div>
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

            <!-- Attendees Progress Bar & Avatars -->
            <div class="space-y-1.5 pt-1 border-t border-slate-100">
              <div class="flex justify-between items-center text-xs">
                <span class="font-bold text-slate-800">Jugadores (${confirmed.length}/${game.maxPlayers})</span>
                ${maybe.length > 0 ? `<span class="text-amber-600 text-[10px] font-semibold">+${maybe.length} en duda</span>` : ''}
              </div>

              <!-- Participant pills with Meeples -->
              <div class="flex flex-wrap gap-1.5 pt-0.5">
                ${confirmed.map(att => {
                  const f = friends.find(fr => fr.id === att.friendId) || { name: 'Amigo', color: 'bg-slate-500' };
                  return `
                    <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded-full text-[11px] font-bold">
                      ${getMeepleSvg(f.color, 14)}
                      <span>${f.name.split(' ')[0]}</span>
                    </span>
                  `;
                }).join('')}

                ${maybe.map(att => {
                  const f = friends.find(fr => fr.id === att.friendId) || { name: 'Amigo', color: 'bg-slate-500' };
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

    const games = db.getGames();
    const game = games.find(g => g.id === session.gameId);
    const gameTitle = game ? game.title : 'esta partida';

    if (!confirm(`¿Estás seguro de que deseas eliminar la partida de "${gameTitle}"?`)) {
      return;
    }

    const updated = sessions.filter(s => s.id !== sessionId);
    db.saveSessions(updated);
    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }
    this.renderSessions();
  },

  setRsvp(sessionId, status) {
    if (navigator.vibrate) navigator.vibrate(40); // Haptic feedback on mobile

    const sessions = db.getSessions();
    const session = sessions.find(s => s.id === sessionId);
    if (!session) return;

    const game = db.getGames().find(g => g.id === session.gameId);
    const confirmedCount = session.attendees.filter(a => a.status === 'yes' && a.friendId !== this.currentUserId).length;

    if (status === 'yes' && game && confirmedCount >= game.maxPlayers) {
      alert(`¡Mesa llena! ${game.title} solo admite ${game.maxPlayers} jugadores. Puedes marcarte como 'Quizás' por si alguien cancela.`);
      return;
    }

    session.attendees = session.attendees.filter(a => a.friendId !== this.currentUserId);
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
    const confirmed = session.attendees.filter(a => a.status === 'yes');
    const spotsLeft = (game?.maxPlayers || 4) - confirmed.length;

    const msg = `🎲 *¡Noche de Juegos armada!* 🎲%0A%0A` +
      `🕹️ *Juego:* ${game?.title || 'Juego de mesa'}%0A` +
      `📅 *Fecha:* ${session.date} a las ${session.time} hrs%0A` +
      `📍 *Lugar:* ${session.location}%0A` +
      `👥 *Confirmados (${confirmed.length}/${game?.maxPlayers || 4}):* ${spotsLeft > 0 ? `(¡Quedan ${spotsLeft} cupos!)` : '(¡Mesa llena!)'}%0A` +
      (session.notes ? `📝 *Nota:* ${session.notes}%0A%0A` : '%0A') +
      `👉 ¡Confirmen su asistencia en la app para reservar su lugar!`;

    window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
  },

  handleCreateSession(event) {
    event.preventDefault();
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
              <span class="text-[10px] font-bold text-brand-700 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-md">
                ${game.minPlayers}-${game.maxPlayers} jug. • ${game.durationMin}m
              </span>

              <!-- Quick Action Buttons -->
              <div class="flex items-center gap-1.5">
                <button onclick="app.editGame('${game.id}')" title="Modificar / Editar juego" class="w-7 h-7 rounded-lg bg-slate-100 active:bg-slate-200 text-slate-600 hover:text-brand-600 flex items-center justify-center text-xs transition-colors">
                  <i class="fa-solid fa-pen"></i>
                </button>
                <button onclick="app.deleteGame('${game.id}')" title="Eliminar juego" class="w-7 h-7 rounded-lg bg-slate-100 active:bg-rose-100 text-slate-400 hover:text-rose-600 flex items-center justify-center text-xs transition-colors">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
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
    const title = document.getElementById('game-title').value.trim();
    const minPlayers = parseInt(document.getElementById('game-min').value) || 2;
    const maxPlayers = parseInt(document.getElementById('game-max').value) || 4;
    const durationMin = parseInt(document.getElementById('game-duration').value) || 60;
    const ownerId = document.getElementById('game-owner-id').value;
    let image = document.getElementById('game-image').value.trim();
    const description = document.getElementById('game-desc').value.trim();

    // Auto-wrap raw BGG or Wikimedia images via Weserv proxy to guarantee CORS and zero-blocking
    if (image && (image.includes('geekdo-images.com') || image.includes('upload.wikimedia.org')) && !image.includes('images.weserv.nl')) {
      image = `https://images.weserv.nl/?url=${encodeURIComponent(image)}&w=500&output=jpg`;
    }

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
          image,
          description
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

    container.innerHTML = friends.map(f => {
      const owned = games.filter(g => g.ownerId === f.id).length;
      const attended = sessions.filter(s => s.attendees && s.attendees.some(a => a.friendId === f.id && a.status === 'yes')).length;
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
              <div class="flex items-center gap-2 mt-0.5 text-[10px] text-slate-500">
                <span><i class="fa-solid fa-chess-rook text-[9px] text-slate-400"></i> ${owned} juego${owned !== 1 ? 's' : ''}</span>
                <span>•</span>
                <span><i class="fa-solid fa-calendar-check text-[9px] text-slate-400"></i> ${attended} partida${attended !== 1 ? 's' : ''}</span>
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
    document.getElementById('friend-color').value = friend.color || 'bg-violet-600';

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

    const parts = name.split(' ').filter(Boolean);
    const initials = parts.length > 1 
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : name.substring(0, 2).toUpperCase();

    const friends = db.getFriends();

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

    if (!confirm(`¿Estás seguro de que deseas eliminar a "${friend.name}" del club?`)) {
      return;
    }

    const updatedFriends = friends.filter(f => f.id !== friendId);
    if (this.currentUserId === friendId) {
      this.currentUserId = updatedFriends[0].id;
      db.setCurrentUserId(this.currentUserId);
    }

    db.saveFriends(updatedFriends);
    if (db.getGSheetUrl()) {
      db.pushToGoogleSheets();
    }

    this.populateModalSelects();
    this.updateUserHeader();
    this.renderFriends();
    this.renderGames();
    this.renderSessions();
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
