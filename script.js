// --- DATA ---

// Hjelpeobjekt for bøying av 'haber' i presens (brukes til Presens Perfektum)
const haberPresente = {
    'yo': 'he',
    'tú': 'has',
    'él/ella/Ud.': 'ha',
    'nosotros/as': 'hemos',
    'vosotros/as': 'habéis',
    'ellos/ellas/Uds.': 'han'
};

// Pronomenliste
const pronombres = ['yo', 'tú', 'él/ella/Ud.', 'nosotros/as', 'vosotros/as', 'ellos/ellas/Uds.'];

// Tider som kan velges/randomiseres
const tiemposPosibles = ['presente', 'futuro', 'perfecto'];

// Verb-listen (ca. 60 verb)
// Tips: For enklere vedlikehold kan denne legges i en egen verbos.js fil
const verbos = [
    // --- REGULÆRE -AR VERB ---
    {
        infinitivo: 'hablar', tipo: 'regular-ar',
        presente: { 'yo': 'hablo', 'tú': 'hablas', 'él/ella/Ud.': 'habla', 'nosotros/as': 'hablamos', 'vosotros/as': 'habláis', 'ellos/ellas/Uds.': 'hablan' },
        futuro: { 'yo': 'hablaré', 'tú': 'hablarás', 'él/ella/Ud.': 'hablará', 'nosotros/as': 'hablaremos', 'vosotros/as': 'hablaréis', 'ellos/ellas/Uds.': 'hablarán' },
        perfecto: { participio: 'hablado' }
    },
    {
        infinitivo: 'cantar', tipo: 'regular-ar',
        presente: { 'yo': 'canto', 'tú': 'cantas', 'él/ella/Ud.': 'canta', 'nosotros/as': 'cantamos', 'vosotros/as': 'cantáis', 'ellos/ellas/Uds.': 'cantan' },
        futuro: { 'yo': 'cantaré', 'tú': 'cantarás', 'él/ella/Ud.': 'cantará', 'nosotros/as': 'cantaremos', 'vosotros/as': 'cantaréis', 'ellos/ellas/Uds.': 'cantarán' },
        perfecto: { participio: 'cantado' }
    },
    {
        infinitivo: 'estudiar', tipo: 'regular-ar',
        presente: { 'yo': 'estudio', 'tú': 'estudias', 'él/ella/Ud.': 'estudia', 'nosotros/as': 'estudiamos', 'vosotros/as': 'estudiáis', 'ellos/ellas/Uds.': 'estudian' },
        futuro: { 'yo': 'estudiaré', 'tú': 'estudiarás', 'él/ella/Ud.': 'estudiará', 'nosotros/as': 'estudiaremos', 'vosotros/as': 'estudiaréis', 'ellos/ellas/Uds.': 'estudiarán' },
        perfecto: { participio: 'estudiado' }
    },
    {
        infinitivo: 'trabajar', tipo: 'regular-ar',
        presente: { 'yo': 'trabajo', 'tú': 'trabajas', 'él/ella/Ud.': 'trabaja', 'nosotros/as': 'trabajamos', 'vosotros/as': 'trabajáis', 'ellos/ellas/Uds.': 'trabajan' },
        futuro: { 'yo': 'trabajaré', 'tú': 'trabajarás', 'él/ella/Ud.': 'trabajará', 'nosotros/as': 'trabajaremos', 'vosotros/as': 'trabajaréis', 'ellos/ellas/Uds.': 'trabajarán' },
        perfecto: { participio: 'trabajado' }
    },
     {
        infinitivo: 'comprar', tipo: 'regular-ar',
        presente: { 'yo': 'compro', 'tú': 'compras', 'él/ella/Ud.': 'compra', 'nosotros/as': 'compramos', 'vosotros/as': 'compráis', 'ellos/ellas/Uds.': 'compran' },
        futuro: { 'yo': 'compraré', 'tú': 'comprarás', 'él/ella/Ud.': 'comprará', 'nosotros/as': 'compraremos', 'vosotros/as': 'compraréis', 'ellos/ellas/Uds.': 'comprarán' },
        perfecto: { participio: 'comprado' }
    },
    {
        infinitivo: 'necesitar', tipo: 'regular-ar',
        presente: { 'yo': 'necesito', 'tú': 'necesitas', 'él/ella/Ud.': 'necesita', 'nosotros/as': 'necesitamos', 'vosotros/as': 'necesitáis', 'ellos/ellas/Uds.': 'necesitan' },
        futuro: { 'yo': 'necesitaré', 'tú': 'necesitarás', 'él/ella/Ud.': 'necesitará', 'nosotros/as': 'necesitaremos', 'vosotros/as': 'necesitaréis', 'ellos/ellas/Uds.': 'necesitarán' },
        perfecto: { participio: 'necesitado' }
    },
    {
        infinitivo: 'tomar', tipo: 'regular-ar', // Betyr 'å ta' eller 'å drikke'
        presente: { 'yo': 'tomo', 'tú': 'tomas', 'él/ella/Ud.': 'toma', 'nosotros/as': 'tomamos', 'vosotros/as': 'tomáis', 'ellos/ellas/Uds.': 'toman' },
        futuro: { 'yo': 'tomaré', 'tú': 'tomarás', 'él/ella/Ud.': 'tomará', 'nosotros/as': 'tomaremos', 'vosotros/as': 'tomaréis', 'ellos/ellas/Uds.': 'tomarán' },
        perfecto: { participio: 'tomado' }
    },
    {
        infinitivo: 'mirar', tipo: 'regular-ar',
        presente: { 'yo': 'miro', 'tú': 'miras', 'él/ella/Ud.': 'mira', 'nosotros/as': 'miramos', 'vosotros/as': 'miráis', 'ellos/ellas/Uds.': 'miran' },
        futuro: { 'yo': 'miraré', 'tú': 'mirarás', 'él/ella/Ud.': 'mirará', 'nosotros/as': 'miraremos', 'vosotros/as': 'miraréis', 'ellos/ellas/Uds.': 'mirarán' },
        perfecto: { participio: 'mirado' }
    },
     {
        infinitivo: 'ayudar', tipo: 'regular-ar',
        presente: { 'yo': 'ayudo', 'tú': 'ayudas', 'él/ella/Ud.': 'ayuda', 'nosotros/as': 'ayudamos', 'vosotros/as': 'ayudáis', 'ellos/ellas/Uds.': 'ayudan' },
        futuro: { 'yo': 'ayudaré', 'tú': 'ayudarás', 'él/ella/Ud.': 'ayudará', 'nosotros/as': 'ayudaremos', 'vosotros/as': 'ayudaréis', 'ellos/ellas/Uds.': 'ayudarán' },
        perfecto: { participio: 'ayudado' }
    },
    {
        infinitivo: 'bailar', tipo: 'regular-ar',
        presente: { 'yo': 'bailo', 'tú': 'bailas', 'él/ella/Ud.': 'baila', 'nosotros/as': 'bailamos', 'vosotros/as': 'bailáis', 'ellos/ellas/Uds.': 'bailan' },
        futuro: { 'yo': 'bailaré', 'tú': 'bailarás', 'él/ella/Ud.': 'bailará', 'nosotros/as': 'bailaremos', 'vosotros/as': 'bailaréis', 'ellos/ellas/Uds.': 'bailarán' },
        perfecto: { participio: 'bailado' }
    },

    // --- REGULÆRE -ER VERB ---
    {
        infinitivo: 'comer', tipo: 'regular-er',
        presente: { 'yo': 'como', 'tú': 'comes', 'él/ella/Ud.': 'come', 'nosotros/as': 'comemos', 'vosotros/as': 'coméis', 'ellos/ellas/Uds.': 'comen' },
        futuro: { 'yo': 'comeré', 'tú': 'comerás', 'él/ella/Ud.': 'comerá', 'nosotros/as': 'comeremos', 'vosotros/as': 'comeréis', 'ellos/ellas/Uds.': 'comerán' },
        perfecto: { participio: 'comido' }
    },
    {
        infinitivo: 'beber', tipo: 'regular-er',
        presente: { 'yo': 'bebo', 'tú': 'bebes', 'él/ella/Ud.': 'bebe', 'nosotros/as': 'bebemos', 'vosotros/as': 'bebéis', 'ellos/ellas/Uds.': 'beben' },
        futuro: { 'yo': 'beberé', 'tú': 'beberás', 'él/ella/Ud.': 'beberá', 'nosotros/as': 'beberemos', 'vosotros/as': 'beberéis', 'ellos/ellas/Uds.': 'beberán' },
        perfecto: { participio: 'bebido' }
    },
    {
        infinitivo: 'aprender', tipo: 'regular-er',
        presente: { 'yo': 'aprendo', 'tú': 'aprendes', 'él/ella/Ud.': 'aprende', 'nosotros/as': 'aprendemos', 'vosotros/as': 'aprendéis', 'ellos/ellas/Uds.': 'aprenden' },
        futuro: { 'yo': 'aprenderé', 'tú': 'aprenderás', 'él/ella/Ud.': 'aprenderá', 'nosotros/as': 'aprenderemos', 'vosotros/as': 'aprenderéis', 'ellos/ellas/Uds.': 'aprenderán' },
        perfecto: { participio: 'aprendido' }
    },
    {
        infinitivo: 'comprender', tipo: 'regular-er',
        presente: { 'yo': 'comprendo', 'tú': 'comprendes', 'él/ella/Ud.': 'comprende', 'nosotros/as': 'comprendemos', 'vosotros/as': 'comprendéis', 'ellos/ellas/Uds.': 'comprenden' },
        futuro: { 'yo': 'comprenderé', 'tú': 'comprenderás', 'él/ella/Ud.': 'comprenderá', 'nosotros/as': 'comprenderemos', 'vosotros/as': 'comprenderéis', 'ellos/ellas/Uds.': 'comprenderán' },
        perfecto: { participio: 'comprendido' }
    },
    {
        infinitivo: 'correr', tipo: 'regular-er',
        presente: { 'yo': 'corro', 'tú': 'corres', 'él/ella/Ud.': 'corre', 'nosotros/as': 'corremos', 'vosotros/as': 'corréis', 'ellos/ellas/Uds.': 'corren' },
        futuro: { 'yo': 'correré', 'tú': 'correrás', 'él/ella/Ud.': 'correrá', 'nosotros/as': 'correremos', 'vosotros/as': 'correréis', 'ellos/ellas/Uds.': 'correrán' },
        perfecto: { participio: 'corrido' }
    },
     {
        infinitivo: 'leer', tipo: 'regular-er', regla: "Husk 'y' i 3. person perfektum partisipp (leído)",
        presente: { 'yo': 'leo', 'tú': 'lees', 'él/ella/Ud.': 'lee', 'nosotros/as': 'leemos', 'vosotros/as': 'leéis', 'ellos/ellas/Uds.': 'leen' },
        futuro: { 'yo': 'leeré', 'tú': 'leerás', 'él/ella/Ud.': 'leerá', 'nosotros/as': 'leeremos', 'vosotros/as': 'leeréis', 'ellos/ellas/Uds.': 'leerán' },
        perfecto: { participio: 'leído' } // NB: Aksent
    },
    {
        infinitivo: 'vender', tipo: 'regular-er',
        presente: { 'yo': 'vendo', 'tú': 'vendes', 'él/ella/Ud.': 'vende', 'nosotros/as': 'vendemos', 'vosotros/as': 'vendéis', 'ellos/ellas/Uds.': 'venden' },
        futuro: { 'yo': 'venderé', 'tú': 'venderás', 'él/ella/Ud.': 'venderá', 'nosotros/as': 'venderemos', 'vosotros/as': 'venderéis', 'ellos/ellas/Uds.': 'venderán' },
        perfecto: { participio: 'vendido' }
    },


    // --- REGULÆRE -IR VERB ---
    {
        infinitivo: 'vivir', tipo: 'regular-ir',
        presente: { 'yo': 'vivo', 'tú': 'vives', 'él/ella/Ud.': 'vive', 'nosotros/as': 'vivimos', 'vosotros/as': 'vivís', 'ellos/ellas/Uds.': 'viven' },
        futuro: { 'yo': 'viviré', 'tú': 'vivirás', 'él/ella/Ud.': 'vivirá', 'nosotros/as': 'viviremos', 'vosotros/as': 'viviréis', 'ellos/ellas/Uds.': 'vivirán' },
        perfecto: { participio: 'vivido' }
    },
    {
        infinitivo: 'escribir', tipo: 'regular-ir', regla: "Uregelmessig perfektum partisipp: escrito",
        presente: { 'yo': 'escribo', 'tú': 'escribes', 'él/ella/Ud.': 'escribe', 'nosotros/as': 'escribimos', 'vosotros/as': 'escribís', 'ellos/ellas/Uds.': 'escriben' },
        futuro: { 'yo': 'escribiré', 'tú': 'escribirás', 'él/ella/Ud.': 'escribirá', 'nosotros/as': 'escribiremos', 'vosotros/as': 'escribiréis', 'ellos/ellas/Uds.': 'escribirán' },
        perfecto: { participio: 'escrito' } // Uregelmessig!
    },
    {
        infinitivo: 'abrir', tipo: 'regular-ir', regla: "Uregelmessig perfektum partisipp: abierto",
        presente: { 'yo': 'abro', 'tú': 'abres', 'él/ella/Ud.': 'abre', 'nosotros/as': 'abrimos', 'vosotros/as': 'abrís', 'ellos/ellas/Uds.': 'abren' },
        futuro: { 'yo': 'abriré', 'tú': 'abrirás', 'él/ella/Ud.': 'abrirá', 'nosotros/as': 'abriremos', 'vosotros/as': 'abriréis', 'ellos/ellas/Uds.': 'abrirán' },
        perfecto: { participio: 'abierto' } // Uregelmessig!
    },
     {
        infinitivo: 'recibir', tipo: 'regular-ir',
        presente: { 'yo': 'recibo', 'tú': 'recibes', 'él/ella/Ud.': 'recibe', 'nosotros/as': 'recibimos', 'vosotros/as': 'recibís', 'ellos/ellas/Uds.': 'reciben' },
        futuro: { 'yo': 'recibiré', 'tú': 'recibirás', 'él/ella/Ud.': 'recibirá', 'nosotros/as': 'recibiremos', 'vosotros/as': 'recibiréis', 'ellos/ellas/Uds.': 'recibirán' },
        perfecto: { participio: 'recibido' }
    },
    {
        infinitivo: 'decidir', tipo: 'regular-ir',
        presente: { 'yo': 'decido', 'tú': 'decides', 'él/ella/Ud.': 'decide', 'nosotros/as': 'decidimos', 'vosotros/as': 'decidís', 'ellos/ellas/Uds.': 'deciden' },
        futuro: { 'yo': 'decidiré', 'tú': 'decidirás', 'él/ella/Ud.': 'decidirá', 'nosotros/as': 'decidiremos', 'vosotros/as': 'decidiréis', 'ellos/ellas/Uds.': 'decidirán' },
        perfecto: { participio: 'decidido' }
    },
     {
        infinitivo: 'subir', tipo: 'regular-ir', // Å gå opp / klatre / laste opp
        presente: { 'yo': 'subo', 'tú': 'subes', 'él/ella/Ud.': 'sube', 'nosotros/as': 'subimos', 'vosotros/as': 'subís', 'ellos/ellas/Uds.': 'suben' },
        futuro: { 'yo': 'subiré', 'tú': 'subirás', 'él/ella/Ud.': 'subirá', 'nosotros/as': 'subiremos', 'vosotros/as': 'subiréis', 'ellos/ellas/Uds.': 'subirán' },
        perfecto: { participio: 'subido' }
    },
    {
        infinitivo: 'permitir', tipo: 'regular-ir',
        presente: { 'yo': 'permito', 'tú': 'permites', 'él/ella/Ud.': 'permite', 'nosotros/as': 'permitimos', 'vosotros/as': 'permitís', 'ellos/ellas/Uds.': 'permiten' },
        futuro: { 'yo': 'permitiré', 'tú': 'permitirás', 'él/ella/Ud.': 'permitirá', 'nosotros/as': 'permitiremos', 'vosotros/as': 'permitiréis', 'ellos/ellas/Uds.': 'permitirán' },
        perfecto: { participio: 'permitido' }
    },


    // --- UREGELMESSIGE VERB ---
    {
        infinitivo: 'ser', tipo: 'irregular', regla: "Helt uregelmessig i presens.",
        presente: { 'yo': 'soy', 'tú': 'eres', 'él/ella/Ud.': 'es', 'nosotros/as': 'somos', 'vosotros/as': 'sois', 'ellos/ellas/Uds.': 'son' },
        futuro: { 'yo': 'seré', 'tú': 'serás', 'él/ella/Ud.': 'será', 'nosotros/as': 'seremos', 'vosotros/as': 'seréis', 'ellos/ellas/Uds.': 'serán' },
        perfecto: { participio: 'sido' }
    },
    {
        infinitivo: 'estar', tipo: 'irregular', regla: "Uregelmessig 'yo' form (estoy) og aksenter i presens.",
        presente: { 'yo': 'estoy', 'tú': 'estás', 'él/ella/Ud.': 'está', 'nosotros/as': 'estamos', 'vosotros/as': 'estáis', 'ellos/ellas/Uds.': 'están' },
        futuro: { 'yo': 'estaré', 'tú': 'estarás', 'él/ella/Ud.': 'estará', 'nosotros/as': 'estaremos', 'vosotros/as': 'estaréis', 'ellos/ellas/Uds.': 'estarán' },
        perfecto: { participio: 'estado' }
    },
    {
        infinitivo: 'tener', tipo: 'irregular', regla: "Uregelmessig 'yo' (tengo), stammevokalendring (e>ie), og uregelmessig futurum.",
        presente: { 'yo': 'tengo', 'tú': 'tienes', 'él/ella/Ud.': 'tiene', 'nosotros/as': 'tenemos', 'vosotros/as': 'tenéis', 'ellos/ellas/Uds.': 'tienen' },
        futuro: { 'yo': 'tendré', 'tú': 'tendrás', 'él/ella/Ud.': 'tendrá', 'nosotros/as': 'tendremos', 'vosotros/as': 'tendréis', 'ellos/ellas/Uds.': 'tendrán' },
        perfecto: { participio: 'tenido' }
    },
    {
        infinitivo: 'ir', tipo: 'irregular', regla: "Helt uregelmessig i presens.",
        presente: { 'yo': 'voy', 'tú': 'vas', 'él/ella/Ud.': 'va', 'nosotros/as': 'vamos', 'vosotros/as': 'vais', 'ellos/ellas/Uds.': 'van' },
        futuro: { 'yo': 'iré', 'tú': 'irás', 'él/ella/Ud.': 'irá', 'nosotros/as': 'iremos', 'vosotros/as': 'iréis', 'ellos/ellas/Uds.': 'irán' },
        perfecto: { participio: 'ido' } // Bøyes med haber: he ido, has ido...
    },
    {
        infinitivo: 'hacer', tipo: 'irregular', regla: "Uregelmessig 'yo' (hago) og uregelmessig futurum + perfektum partisipp.",
        presente: { 'yo': 'hago', 'tú': 'haces', 'él/ella/Ud.': 'hace', 'nosotros/as': 'hacemos', 'vosotros/as': 'hacéis', 'ellos/ellas/Uds.': 'hacen' },
        futuro: { 'yo': 'haré', 'tú': 'harás', 'él/ella/Ud.': 'hará', 'nosotros/as': 'haremos', 'vosotros/as': 'haréis', 'ellos/ellas/Uds.': 'harán' },
        perfecto: { participio: 'hecho' } // Uregelmessig!
    },
     {
        infinitivo: 'decir', tipo: 'irregular', regla: "Uregelmessig 'yo' (digo), stammevokalendring (e>i), og uregelmessig futurum + perfektum partisipp.",
        presente: { 'yo': 'digo', 'tú': 'dices', 'él/ella/Ud.': 'dice', 'nosotros/as': 'decimos', 'vosotros/as': 'decís', 'ellos/ellas/Uds.': 'dicen' },
        futuro: { 'yo': 'diré', 'tú': 'dirás', 'él/ella/Ud.': 'dirá', 'nosotros/as': 'diremos', 'vosotros/as': 'diréis', 'ellos/ellas/Uds.': 'dirán' },
        perfecto: { participio: 'dicho' } // Uregelmessig!
    },
     {
        infinitivo: 'poner', tipo: 'irregular', regla: "Uregelmessig 'yo' (pongo) og uregelmessig futurum + perfektum partisipp.",
        presente: { 'yo': 'pongo', 'tú': 'pones', 'él/ella/Ud.': 'pone', 'nosotros/as': 'ponemos', 'vosotros/as': 'ponéis', 'ellos/ellas/Uds.': 'ponen' },
        futuro: { 'yo': 'pondré', 'tú': 'pondrás', 'él/ella/Ud.': 'pondrá', 'nosotros/as': 'pondremos', 'vosotros/as': 'pondréis', 'ellos/ellas/Uds.': 'pondrán' },
        perfecto: { participio: 'puesto' } // Uregelmessig!
    },
    {
        infinitivo: 'venir', tipo: 'irregular', regla: "Uregelmessig 'yo' (vengo), stammevokalendring (e>ie), og uregelmessig futurum.",
        presente: { 'yo': 'vengo', 'tú': 'vienes', 'él/ella/Ud.': 'viene', 'nosotros/as': 'venimos', 'vosotros/as': 'venís', 'ellos/ellas/Uds.': 'vienen' },
        futuro: { 'yo': 'vendré', 'tú': 'vendrás', 'él/ella/Ud.': 'vendrá', 'nosotros/as': 'vendremos', 'vosotros/as': 'vendréis', 'ellos/ellas/Uds.': 'vendrán' },
        perfecto: { participio: 'venido' }
    },
    {
        infinitivo: 'salir', tipo: 'irregular', regla: "Uregelmessig 'yo' (salgo) og uregelmessig futurum.",
        presente: { 'yo': 'salgo', 'tú': 'sales', 'él/ella/Ud.': 'sale', 'nosotros/as': 'salimos', 'vosotros/as': 'salís', 'ellos/ellas/Uds.': 'salen' },
        futuro: { 'yo': 'saldré', 'tú': 'saldrás', 'él/ella/Ud.': 'saldrá', 'nosotros/as': 'saldremos', 'vosotros/as': 'saldréis', 'ellos/ellas/Uds.': 'saldrán' },
        perfecto: { participio: 'salido' }
    },
     {
        infinitivo: 'saber', tipo: 'irregular', regla: "Uregelmessig 'yo' (sé) og uregelmessig futurum.",
        presente: { 'yo': 'sé', 'tú': 'sabes', 'él/ella/Ud.': 'sabe', 'nosotros/as': 'sabemos', 'vosotros/as': 'sabéis', 'ellos/ellas/Uds.': 'saben' },
        futuro: { 'yo': 'sabré', 'tú': 'sabrás', 'él/ella/Ud.': 'sabrá', 'nosotros/as': 'sabremos', 'vosotros/as': 'sabréis', 'ellos/ellas/Uds.': 'sabrán' },
        perfecto: { participio: 'sabido' }
    },
    {
        infinitivo: 'ver', tipo: 'irregular', regla: "Uregelmessig 'yo' (veo) og uregelmessig perfektum partisipp.",
        presente: { 'yo': 'veo', 'tú': 'ves', 'él/ella/Ud.': 've', 'nosotros/as': 'vemos', 'vosotros/as': 'veis', 'ellos/ellas/Uds.': 'ven' },
        futuro: { 'yo': 'veré', 'tú': 'verás', 'él/ella/Ud.': 'verá', 'nosotros/as': 'veremos', 'vosotros/as': 'veréis', 'ellos/ellas/Uds.': 'verán' },
        perfecto: { participio: 'visto' } // Uregelmessig!
    },
    {
        infinitivo: 'dar', tipo: 'irregular', regla: "Uregelmessig 'yo' (doy).",
        presente: { 'yo': 'doy', 'tú': 'das', 'él/ella/Ud.': 'da', 'nosotros/as': 'damos', 'vosotros/as': 'dais', 'ellos/ellas/Uds.': 'dan' },
        futuro: { 'yo': 'daré', 'tú': 'darás', 'él/ella/Ud.': 'dará', 'nosotros/as': 'daremos', 'vosotros/as': 'daréis', 'ellos/ellas/Uds.': 'darán' },
        perfecto: { participio: 'dado' }
    },


    // --- STAMMEVOKALENDRING (Cambio de Raíz) ---
    // E -> IE
    {
        infinitivo: 'pensar', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> ie (unntatt nosotros/vosotros).",
        presente: { 'yo': 'pienso', 'tú': 'piensas', 'él/ella/Ud.': 'piensa', 'nosotros/as': 'pensamos', 'vosotros/as': 'pensáis', 'ellos/ellas/Uds.': 'piensan' },
        futuro: { 'yo': 'pensaré', 'tú': 'pensarás', 'él/ella/Ud.': 'pensará', 'nosotros/as': 'pensaremos', 'vosotros/as': 'pensaréis', 'ellos/ellas/Uds.': 'pensarán' },
        perfecto: { participio: 'pensado' }
    },
     {
        infinitivo: 'querer', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> ie (unntatt nosotros/vosotros) og uregelmessig futurum.",
        presente: { 'yo': 'quiero', 'tú': 'quieres', 'él/ella/Ud.': 'quiere', 'nosotros/as': 'queremos', 'vosotros/as': 'queréis', 'ellos/ellas/Uds.': 'quieren' },
        futuro: { 'yo': 'querré', 'tú': 'querrás', 'él/ella/Ud.': 'querrá', 'nosotros/as': 'querremos', 'vosotros/as': 'querréis', 'ellos/ellas/Uds.': 'querrán' },
        perfecto: { participio: 'querido' }
    },
    {
        infinitivo: 'empezar', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> ie og z->c foran 'e'.",
        presente: { 'yo': 'empiezo', 'tú': 'empiezas', 'él/ella/Ud.': 'empieza', 'nosotros/as': 'empezamos', 'vosotros/as': 'empezáis', 'ellos/ellas/Uds.': 'empiezan' },
        futuro: { 'yo': 'empezaré', 'tú': 'empezarás', 'él/ella/Ud.': 'empezará', 'nosotros/as': 'empezaremos', 'vosotros/as': 'empezaréis', 'ellos/ellas/Uds.': 'empezarán' },
        perfecto: { participio: 'empezado' }
    },
     {
        infinitivo: 'entender', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> ie (unntatt nosotros/vosotros).",
        presente: { 'yo': 'entiendo', 'tú': 'entiendes', 'él/ella/Ud.': 'entiende', 'nosotros/as': 'entendemos', 'vosotros/as': 'entendéis', 'ellos/ellas/Uds.': 'entienden' },
        futuro: { 'yo': 'entenderé', 'tú': 'entenderás', 'él/ella/Ud.': 'entenderá', 'nosotros/as': 'entenderemos', 'vosotros/as': 'entenderéis', 'ellos/ellas/Uds.': 'entenderán' },
        perfecto: { participio: 'entendido' }
    },
    {
        infinitivo: 'cerrar', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> ie (unntatt nosotros/vosotros).",
        presente: { 'yo': 'cierro', 'tú': 'cierras', 'él/ella/Ud.': 'cierra', 'nosotros/as': 'cerramos', 'vosotros/as': 'cerráis', 'ellos/ellas/Uds.': 'cierran' },
        futuro: { 'yo': 'cerraré', 'tú': 'cerrarás', 'él/ella/Ud.': 'cerrará', 'nosotros/as': 'cerraremos', 'vosotros/as': 'cerraréis', 'ellos/ellas/Uds.': 'cerrarán' },
        perfecto: { participio: 'cerrado' }
    },
     {
        infinitivo: 'perder', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> ie (unntatt nosotros/vosotros).",
        presente: { 'yo': 'pierdo', 'tú': 'pierdes', 'él/ella/Ud.': 'pierde', 'nosotros/as': 'perdemos', 'vosotros/as': 'perdéis', 'ellos/ellas/Uds.': 'pierden' },
        futuro: { 'yo': 'perderé', 'tú': 'perderás', 'él/ella/Ud.': 'perderá', 'nosotros/as': 'perderemos', 'vosotros/as': 'perderéis', 'ellos/ellas/Uds.': 'perderán' },
        perfecto: { participio: 'perdido' }
    },


    // O -> UE
    {
        infinitivo: 'poder', tipo: 'cambio-raiz', regla: "Stammevokalendring o -> ue (unntatt nosotros/vosotros) og uregelmessig futurum.",
        presente: { 'yo': 'puedo', 'tú': 'puedes', 'él/ella/Ud.': 'puede', 'nosotros/as': 'podemos', 'vosotros/as': 'podéis', 'ellos/ellas/Uds.': 'pueden' },
        futuro: { 'yo': 'podré', 'tú': 'podrás', 'él/ella/Ud.': 'podrá', 'nosotros/as': 'podremos', 'vosotros/as': 'podréis', 'ellos/ellas/Uds.': 'podrán' },
        perfecto: { participio: 'podido' }
    },
    {
        infinitivo: 'dormir', tipo: 'cambio-raiz', regla: "Stammevokalendring o -> ue (unntatt nosotros/vosotros).",
        presente: { 'yo': 'duermo', 'tú': 'duermes', 'él/ella/Ud.': 'duerme', 'nosotros/as': 'dormimos', 'vosotros/as': 'dormís', 'ellos/ellas/Uds.': 'duermen' },
        futuro: { 'yo': 'dormiré', 'tú': 'dormirás', 'él/ella/Ud.': 'dormirá', 'nosotros/as': 'dormiremos', 'vosotros/as': 'dormiréis', 'ellos/ellas/Uds.': 'dormirán' },
        perfecto: { participio: 'dormido' }
    },
    {
        infinitivo: 'volver', tipo: 'cambio-raiz', regla: "Stammevokalendring o -> ue (unntatt nosotros/vosotros) og uregelmessig perfektum partisipp.",
        presente: { 'yo': 'vuelvo', 'tú': 'vuelves', 'él/ella/Ud.': 'vuelve', 'nosotros/as': 'volvemos', 'vosotros/as': 'volvéis', 'ellos/ellas/Uds.': 'vuelven' },
        futuro: { 'yo': 'volveré', 'tú': 'volverás', 'él/ella/Ud.': 'volverá', 'nosotros/as': 'volveremos', 'vosotros/as': 'volveréis', 'ellos/ellas/Uds.': 'volverán' },
        perfecto: { participio: 'vuelto' } // Uregelmessig!
    },
    {
        infinitivo: 'encontrar', tipo: 'cambio-raiz', regla: "Stammevokalendring o -> ue (unntatt nosotros/vosotros).",
        presente: { 'yo': 'encuentro', 'tú': 'encuentras', 'él/ella/Ud.': 'encuentra', 'nosotros/as': 'encontramos', 'vosotros/as': 'encontráis', 'ellos/ellas/Uds.': 'encuentran' },
        futuro: { 'yo': 'encontraré', 'tú': 'encontrarás', 'él/ella/Ud.': 'encontrará', 'nosotros/as': 'encontraremos', 'vosotros/as': 'encontraréis', 'ellos/ellas/Uds.': 'encontrarán' },
        perfecto: { participio: 'encontrado' }
    },
     {
        infinitivo: 'costar', tipo: 'cambio-raiz', regla: "Stammevokalendring o -> ue. Brukes oftest i 3. person (cuesta/cuestan).",
        presente: { 'yo': 'cuesto', 'tú': 'cuestas', 'él/ella/Ud.': 'cuesta', 'nosotros/as': 'costamos', 'vosotros/as': 'costáis', 'ellos/ellas/Uds.': 'cuestan' },
        futuro: { 'yo': 'costaré', 'tú': 'costarás', 'él/ella/Ud.': 'costará', 'nosotros/as': 'costaremos', 'vosotros/as': 'costaréis', 'ellos/ellas/Uds.': 'costarán' },
        perfecto: { participio: 'costado' }
    },
     {
        infinitivo: 'recordar', tipo: 'cambio-raiz', regla: "Stammevokalendring o -> ue (unntatt nosotros/vosotros).",
        presente: { 'yo': 'recuerdo', 'tú': 'recuerdas', 'él/ella/Ud.': 'recuerda', 'nosotros/as': 'recordamos', 'vosotros/as': 'recordáis', 'ellos/ellas/Uds.': 'recuerdan' },
        futuro: { 'yo': 'recordaré', 'tú': 'recordarás', 'él/ella/Ud.': 'recordará', 'nosotros/as': 'recordaremos', 'vosotros/as': 'recordaréis', 'ellos/ellas/Uds.': 'recordarán' },
        perfecto: { participio: 'recordado' }
    },


    // U -> UE
     {
        infinitivo: 'jugar', tipo: 'cambio-raiz', regla: "Stammevokalendring u -> ue (unntatt nosotros/vosotros).",
        presente: { 'yo': 'juego', 'tú': 'juegas', 'él/ella/Ud.': 'juega', 'nosotros/as': 'jugamos', 'vosotros/as': 'jugáis', 'ellos/ellas/Uds.': 'juegan' },
        futuro: { 'yo': 'jugaré', 'tú': 'jugarás', 'él/ella/Ud.': 'jugará', 'nosotros/as': 'jugaremos', 'vosotros/as': 'jugaréis', 'ellos/ellas/Uds.': 'jugarán' },
        perfecto: { participio: 'jugado' }
    },

    // E -> I
     {
        infinitivo: 'pedir', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> i (unntatt nosotros/vosotros).",
        presente: { 'yo': 'pido', 'tú': 'pides', 'él/ella/Ud.': 'pide', 'nosotros/as': 'pedimos', 'vosotros/as': 'pedís', 'ellos/ellas/Uds.': 'piden' },
        futuro: { 'yo': 'pediré', 'tú': 'pedirás', 'él/ella/Ud.': 'pedirá', 'nosotros/as': 'pediremos', 'vosotros/as': 'pediréis', 'ellos/ellas/Uds.': 'pedirán' },
        perfecto: { participio: 'pedido' }
    },
    {
        infinitivo: 'seguir', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> i og g->gu foran 'o'.",
        presente: { 'yo': 'sigo', 'tú': 'sigues', 'él/ella/Ud.': 'sigue', 'nosotros/as': 'seguimos', 'vosotros/as': 'seguís', 'ellos/ellas/Uds.': 'siguen' },
        futuro: { 'yo': 'seguiré', 'tú': 'seguirás', 'él/ella/Ud.': 'seguirá', 'nosotros/as': 'seguiremos', 'vosotros/as': 'seguiréis', 'ellos/ellas/Uds.': 'seguirán' },
        perfecto: { participio: 'seguido' }
    },
     {
        infinitivo: 'servir', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> i (unntatt nosotros/vosotros).",
        presente: { 'yo': 'sirvo', 'tú': 'sirves', 'él/ella/Ud.': 'sirve', 'nosotros/as': 'servimos', 'vosotros/as': 'servís', 'ellos/ellas/Uds.': 'sirven' },
        futuro: { 'yo': 'serviré', 'tú': 'servirás', 'él/ella/Ud.': 'servirá', 'nosotros/as': 'serviremos', 'vosotros/as': 'serviréis', 'ellos/ellas/Uds.': 'servirán' },
        perfecto: { participio: 'servido' }
    },
    {
        infinitivo: 'repetir', tipo: 'cambio-raiz', regla: "Stammevokalendring e -> i (unntatt nosotros/vosotros).",
        presente: { 'yo': 'repito', 'tú': 'repites', 'él/ella/Ud.': 'repite', 'nosotros/as': 'repetimos', 'vosotros/as': 'repetís', 'ellos/ellas/Uds.': 'repiten' },
        futuro: { 'yo': 'repetiré', 'tú': 'repetirás', 'él/ella/Ud.': 'repetirá', 'nosotros/as': 'repetiremos', 'vosotros/as': 'repetiréis', 'ellos/ellas/Uds.': 'repetirán' },
        perfecto: { participio: 'repetido' }
    },

    // --- REFLEKSIVE VERB (Eksempel) ---
    // Merk: Krever egentlig egen logikk for pronomen, men vi forenkler her
    // ved å inkludere pronomenet i den 'korrekte' formen for øving.
    {
        infinitivo: 'llamarse', tipo: 'reflexivo', regla: "Refleksivt verb. Husk refleksivpronomen (me, te, se, nos, os, se).",
        presente: { 'yo': 'me llamo', 'tú': 'te llamas', 'él/ella/Ud.': 'se llama', 'nosotros/as': 'nos llamamos', 'vosotros/as': 'os llamáis', 'ellos/ellas/Uds.': 'se llaman' },
        futuro: { 'yo': 'me llamaré', 'tú': 'te llamarás', 'él/ella/Ud.': 'se llamará', 'nosotros/as': 'nos llamaremos', 'vosotros/as': 'os llamaréis', 'ellos/ellas/Uds.': 'se llamarán' },
        perfecto: { participio: 'llamado' } // F.eks. 'me he llamado', 'te has llamado' etc.
    },
    {
        infinitivo: 'levantarse', tipo: 'reflexivo', regla: "Refleksivt verb.",
        presente: { 'yo': 'me levanto', 'tú': 'te levantas', 'él/ella/Ud.': 'se levanta', 'nosotros/as': 'nos levantamos', 'vosotros/as': 'os levantáis', 'ellos/ellas/Uds.': 'se levantan' },
        futuro: { 'yo': 'me levantaré', 'tú': 'te levantarás', 'él/ella/Ud.': 'se levantará', 'nosotros/as': 'nos levantaremos', 'vosotros/as': 'os levantaréis', 'ellos/ellas/Uds.': 'se levantarán' },
        perfecto: { participio: 'levantado' }
    },

     // --- FLERE VANLIGE VERB ---
     {
        infinitivo: 'conocer', tipo: 'irregular', regla: "Uregelmessig 'yo' (conozco).",
        presente: { 'yo': 'conozco', 'tú': 'conoces', 'él/ella/Ud.': 'conoce', 'nosotros/as': 'conocemos', 'vosotros/as': 'conocéis', 'ellos/ellas/Uds.': 'conocen' },
        futuro: { 'yo': 'conoceré', 'tú': 'conocerás', 'él/ella/Ud.': 'conocerá', 'nosotros/as': 'conoceremos', 'vosotros/as': 'conoceréis', 'ellos/ellas/Uds.': 'conocerán' },
        perfecto: { participio: 'conocido' }
    },
     {
        infinitivo: 'traducir', tipo: 'irregular', regla: "Uregelmessig 'yo' (traduzco).",
        presente: { 'yo': 'traduzco', 'tú': 'traduces', 'él/ella/Ud.': 'traduce', 'nosotros/as': 'traducimos', 'vosotros/as': 'traducís', 'ellos/ellas/Uds.': 'traducen' },
        futuro: { 'yo': 'traduciré', 'tú': 'traducirás', 'él/ella/Ud.': 'traducirá', 'nosotros/as': 'traduciremos', 'vosotros/as': 'traduciréis', 'ellos/ellas/Uds.': 'traducirán' },
        perfecto: { participio: 'traducido' }
    },
    {
        infinitivo: 'creer', tipo: 'regular-er', regla: "Husk 'y' i 3. person perfektum partisipp (creído)",
        presente: { 'yo': 'creo', 'tú': 'crees', 'él/ella/Ud.': 'cree', 'nosotros/as': 'creemos', 'vosotros/as': 'creéis', 'ellos/ellas/Uds.': 'creen' },
        futuro: { 'yo': 'creeré', 'tú': 'creerás', 'él/ella/Ud.': 'creerá', 'nosotros/as': 'creeremos', 'vosotros/as': 'creeréis', 'ellos/ellas/Uds.': 'creerán' },
        perfecto: { participio: 'creído' } // NB: Aksent
    },
     {
        infinitivo: 'oír', tipo: 'irregular', regla: "Uregelmessig i presens (y) og aksenter + 'y' i perfektum partisipp.",
        presente: { 'yo': 'oigo', 'tú': 'oyes', 'él/ella/Ud.': 'oye', 'nosotros/as': 'oímos', 'vosotros/as': 'oís', 'ellos/ellas/Uds.': 'oyen' },
        futuro: { 'yo': 'oiré', 'tú': 'oirás', 'él/ella/Ud.': 'oirá', 'nosotros/as': 'oiremos', 'vosotros/as': 'oiréis', 'ellos/ellas/Uds.': 'oirán' },
        perfecto: { participio: 'oído' } // NB: Aksent
    },
     {
        infinitivo: 'morir', tipo: 'cambio-raiz', regla: "Stammevokalendring o -> ue og uregelmessig perfektum partisipp.",
        presente: { 'yo': 'muero', 'tú': 'mueres', 'él/ella/Ud.': 'muere', 'nosotros/as': 'morimos', 'vosotros/as': 'morís', 'ellos/ellas/Uds.': 'mueren' },
        futuro: { 'yo': 'moriré', 'tú': 'morirás', 'él/ella/Ud.': 'morirá', 'nosotros/as': 'moriremos', 'vosotros/as': 'moriréis', 'ellos/ellas/Uds.': 'morirán' },
        perfecto: { participio: 'muerto' } // Uregelmessig!
    },


]; // Slutten av verbos-arrayen


// --- DOM Elementer ---
const pronombreEl = document.getElementById('pronombre');
const infinitivoEl = document.getElementById('infinitivo');
const answerInputEl = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const feedbackAreaEl = document.getElementById('feedback-area');
const nextButton = document.getElementById('next-button');
const verbInfoEl = document.getElementById('verb-info');
const infoInfinitivEl = verbInfoEl.querySelector('.info-infinitivo');
const infoTipoEl = verbInfoEl.querySelector('.info-tipo');
const infoRuleEl = verbInfoEl.querySelector('.info-rule');
const infoRuleTextEl = verbInfoEl.querySelector('.info-rule-text');
const infoPerfectoPartEl = verbInfoEl.querySelector('.info-perfecto-part');
const infoParticipioEl = verbInfoEl.querySelector('.info-participio');

const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const tenseSelectEl = document.getElementById('tense-select');
const currentTenseDisplayEl = document.getElementById('current-tense-display');
const instructionEl = document.getElementById('instruction');

// Seksjoner og Navigasjon
const sectionNav = document.getElementById('section-nav');
const navButtons = sectionNav.querySelectorAll('.nav-button');
const practicaSection = document.getElementById('seccion-practica');
const bibliotecaSection = document.getElementById('seccion-biblioteca');
const gramaticaSection = document.getElementById('seccion-gramatica');
const verbListContainerEl = document.getElementById('verb-list');
const grammarContentEl = document.getElementById('grammar-content');


// --- App State ---
let currentVerb = null;
let currentPronombre = null;
let currentTense = 'presente'; // Default før første lasting
let score = 0;
let streak = 0;
let currentVisibleSection = 'practica'; // Holder styr på hvilken seksjon som vises

// --- Funksjoner ---

function getRandomElement(arr) {
    if (!arr || arr.length === 0) {
        console.error("getRandomElement: Forsøkte å hente fra tomt eller ugyldig array:", arr);
        return undefined;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

// Henter riktig form av 'haber' for Presens Perfektum
function getFormaAuxiliar(pronombre) {
    return haberPresente[pronombre] || ''; // Returner tom streng hvis pronomen ikke finnes
}

// Laster inn et nytt verb for øving
function loadNewVerb() {
    currentVerb = getRandomElement(verbos);
    currentPronombre = getRandomElement(pronombres);
    const selectedTenseOption = tenseSelectEl.value;

    if (!currentVerb || !currentPronombre) {
        console.error("loadNewVerb: Kunne ikke laste verb eller pronomen", { currentVerb, currentPronombre });
        feedbackAreaEl.textContent = "Feil: Kunne ikke laste nytt verb. Prøv å laste siden på nytt.";
        feedbackAreaEl.className = 'incorrect';
        submitButton.disabled = true;
        return;
    }

    if (selectedTenseOption === 'random') {
        currentTense = getRandomElement(tiemposPosibles);
    } else {
        currentTense = selectedTenseOption;
    }

    // Oppdater UI for øvingseksjonen
    pronombreEl.textContent = currentPronombre;
    infinitivoEl.textContent = currentVerb.infinitivo;
    answerInputEl.value = '';
    feedbackAreaEl.textContent = '';
    feedbackAreaEl.className = ''; // Fjern correct/incorrect klasser
    verbInfoEl.style.display = 'none'; // Skjul info-boks
    infoRuleEl.style.display = 'none';
    infoPerfectoPartEl.style.display = 'none';

    // Sett riktig tekst for tiden som øves
    let tenseText = '';
    switch (currentTense) {
        case 'futuro': tenseText = 'Futuro'; break;
        case 'perfecto': tenseText = 'Presente Perfecto'; break;
        default: tenseText = 'Presente'; // 'presente'
    }
    currentTenseDisplayEl.textContent = tenseText;

    submitButton.disabled = false;
    nextButton.style.display = 'none'; // Skjul neste-knapp
    answerInputEl.disabled = false;
    answerInputEl.focus(); // Sett fokus på inputfeltet
}

// Sjekker svaret brukeren har gitt
function checkAnswer() {
    if (!currentVerb || !currentPronombre || !currentTense) {
        console.error("checkAnswer: Ugyldig state", { currentVerb, currentPronombre, currentTense });
        feedbackAreaEl.textContent = "Feil: Kan ikke sjekke svar. Prøv neste verb.";
        feedbackAreaEl.className = 'incorrect';
        submitButton.disabled = true;
        nextButton.style.display = 'inline-block';
        return;
    }

    const userAnswer = answerInputEl.value.trim().toLowerCase();
    let correctAnswer = '';
    let correctAnswerDisplay = ''; // For visning med korrekt casing etc.

    try {
        switch (currentTense) {
            case 'futuro':
                correctAnswer = currentVerb.futuro?.[currentPronombre]?.toLowerCase() || 'ikke definert';
                correctAnswerDisplay = currentVerb.futuro?.[currentPronombre] || 'Ikke definert';
                break;
            case 'perfecto':
                if (currentVerb.perfecto?.participio) {
                    const aux = getFormaAuxiliar(currentPronombre);
                    // For refleksive verb i perfektum (forenklet sjekk - antar brukeren IKKE skriver pronomen)
                    if (currentVerb.tipo === 'reflexivo') {
                         correctAnswer = `${aux} ${currentVerb.perfecto.participio}`.toLowerCase();
                         // Vurder om vi skal forvente f.eks. "me he llamado" - kompliserer
                         correctAnswerDisplay = `${aux} ${currentVerb.perfecto.participio} (med refleksivpronomen foran)`;
                         // Aksepterer svar uten refleksivpronomen for enkelhets skyld
                         if (userAnswer === `${aux} ${currentVerb.perfecto.participio}`.toLowerCase()) {
                            correctAnswer = userAnswer; // Overstyr så sjekken blir riktig
                         } else if (userAnswer === `${currentPronombre.split('/')[0].match(/^(yo|tú|él|ella|Ud|nosotros|vosotros|ellos|ellas|Uds)$/)[0].replace('yo','me').replace('tú','te').replace(/él|ella|Ud|ellos|ellas|Uds/,'se').replace('nosotros','nos').replace('vosotros','os')} ${aux} ${currentVerb.perfecto.participio}`.toLowerCase()) {
                              correctAnswer = userAnswer; // Tillat svar MED pronomen
                              correctAnswerDisplay = `${currentPronombre.split('/')[0].match(/^(yo|tú|él|ella|Ud|nosotros|vosotros|ellos|ellas|Uds)$/)[0].replace('yo','me').replace('tú','te').replace(/él|ella|Ud|ellos|ellas|Uds/,'se').replace('nosotros','nos').replace('vosotros','os')} ${aux} ${currentVerb.perfecto.participio}`;
                         }
                    } else {
                        correctAnswer = `${aux} ${currentVerb.perfecto.participio}`.toLowerCase();
                        correctAnswerDisplay = `${aux} ${currentVerb.perfecto.participio}`;
                    }

                } else {
                    correctAnswer = 'ikke definert';
                    correctAnswerDisplay = 'Ikke definert';
                }
                break;
            case 'presente':
            default:
                correctAnswer = currentVerb.presente?.[currentPronombre]?.toLowerCase() || 'ikke definert';
                 // For refleksive verb i presens (forenklet sjekk)
                 if (currentVerb.tipo === 'reflexivo' && correctAnswer !== 'ikke definert') {
                      correctAnswerDisplay = currentVerb.presente?.[currentPronombre] || 'Ikke definert';
                      // Aksepterer svar BÅDE med og uten pronomen foran for enkelhets skyld
                      const correctAnswerWithoutPronoun = correctAnswer.split(' ').slice(1).join(' ');
                      if (userAnswer === correctAnswerWithoutPronoun) {
                         correctAnswer = userAnswer; // Godta uten pronomen
                         correctAnswerDisplay = correctAnswerDisplay.split(' ').slice(1).join(' ') + " (uten refleksivpronomen)";
                      }
                 } else {
                    correctAnswerDisplay = currentVerb.presente?.[currentPronombre] || 'Ikke definert';
                 }
                break;
        }

        // Normaliserer svar for å tillate variasjon i 'usted(es)'
         const normalizedUserAnswer = userAnswer.replace("ustedes", "uds.").replace("usted", "ud.");
         const normalizedCorrectAnswer = correctAnswer.replace("ustedes", "uds.").replace("usted", "ud.");


         submitButton.disabled = true;
         answerInputEl.disabled = true;


         if (normalizedUserAnswer === normalizedCorrectAnswer && normalizedCorrectAnswer !== 'ikke definert' && normalizedCorrectAnswer !== 'feil ved oppslag') {
             feedbackAreaEl.innerHTML = '🎉 ¡Correcto!'; // Bruk innerHTML for emoji
             feedbackAreaEl.className = 'correct';
             score++;
             streak++;
         } else if (normalizedCorrectAnswer === 'ikke definert') {
             feedbackAreaEl.textContent = `🤔 Beklager, bøyningen for dette verbet/tiden er ikke definert ennå.`;
             feedbackAreaEl.className = 'incorrect';
             streak = 0;
         }
         else {
             feedbackAreaEl.innerHTML = `😢 Incorrecto. La respuesta correcta es: <strong>${correctAnswerDisplay}</strong>`; // Bruk innerHTML for strong tag
             feedbackAreaEl.className = 'incorrect';
             streak = 0;
         }


    } catch (error) {
        console.error("Feil under sjekking av svar:", error, { currentVerb, currentPronombre, currentTense });
        feedbackAreaEl.textContent = 'Beklager, en intern feil oppstod under sjekking.';
        feedbackAreaEl.className = 'incorrect';
        submitButton.disabled = true;
        nextButton.style.display = 'inline-block'; // La brukeren gå videre
        return; // Avslutt funksjonen
    }


    // Vis info om verbet (hvis det finnes data)
    if(currentVerb) {
        infoInfinitivEl.textContent = currentVerb.infinitivo || 'Ukjent';
        infoTipoEl.textContent = currentVerb.tipo || 'Ukjent';

        if (currentVerb.regla) {
            infoRuleTextEl.textContent = currentVerb.regla;
            infoRuleEl.style.display = 'block';
        } else {
            infoRuleEl.style.display = 'none';
        }

        if (currentVerb.perfecto?.participio) {
            infoParticipioEl.textContent = currentVerb.perfecto.participio;
            infoPerfectoPartEl.style.display = 'block';
        } else {
            infoPerfectoPartEl.style.display = 'none';
        }
        verbInfoEl.style.display = 'block'; // Vis info-boksen
    }


    updateScoreDisplay();
    nextButton.style.display = 'inline-block'; // Vis neste-knapp
    nextButton.focus(); // Sett fokus på neste-knapp
}


// Oppdaterer poeng og streak i UI
function updateScoreDisplay() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;
}

// --- Bibliotek & Grammatikk Funksjoner ---

// Fyller ut verb-biblioteket dynamisk
function populateLearningSection() {
    verbListContainerEl.innerHTML = ''; // Tøm container
    if (!verbos || verbos.length === 0) {
        console.error("populateLearningSection: Verbos array mangler eller er tomt.");
        verbListContainerEl.innerHTML = '<p style="color: red;">Feil: Kunne ikke laste verb-biblioteket.</p>';
        return;
    }

    // Sorter verb alfabetisk etter infinitiv
    const sortedVerbos = [...verbos].sort((a, b) => a.infinitivo.localeCompare(b.infinitivo, 'es'));

    sortedVerbos.forEach(verb => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('verb-entry');

        // Tittel med badge
        const title = document.createElement('h3');
        title.textContent = verb.infinitivo;
        const badge = document.createElement('span');
        badge.classList.add('verb-type-badge', verb.tipo || 'ukjent'); // Legg til klassen basert på type
        badge.textContent = verb.tipo ? verb.tipo.replace('-', ' ') : 'Ukjent'; // Vis typen
        title.appendChild(badge);
        entryDiv.appendChild(title);

        // Vis regel hvis den finnes
        if (verb.regla) {
            const ruleP = document.createElement('p');
            ruleP.classList.add('verb-rule');
            ruleP.innerHTML = `<strong>Regel/Hint:</strong> ${verb.regla}`; // Bruker innerHTML for strong
            entryDiv.appendChild(ruleP);
        }

        // Vis perfektum partisipp info
        if (verb.perfecto?.participio) {
             const partP = document.createElement('p');
             partP.classList.add('verb-participio-info');
             partP.innerHTML = `Perfektum Partisipp: <strong>${verb.perfecto.participio}</strong> (brukes med <em>haber</em>)`;
             entryDiv.appendChild(partP);
         }

        // Lag bøyingstabell
        const table = document.createElement('table');
        table.classList.add('conjugation-table');
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        // Kolonner: Pronomen, Presens, Futurum, Perfektum
        const headers = ['Pronomen', 'Presente', 'Futuro', 'Presente Perfecto'];
        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        pronombres.forEach(pronombre => {
            const row = tbody.insertRow();

            // Pronomen celle
            const pronombreCell = row.insertCell();
            pronombreCell.textContent = pronombre;

            // Presens celle
            const presenteCell = row.insertCell();
            presenteCell.textContent = verb.presente?.[pronombre] || '-';

            // Futurum celle
            const futuroCell = row.insertCell();
            futuroCell.textContent = verb.futuro?.[pronombre] || '-';

            // Perfektum celle
            const perfectoCell = row.insertCell();
            if (verb.perfecto?.participio) {
                const aux = getFormaAuxiliar(pronombre);
                // For refleksive, vis bare haber + partisipp i tabellen for enkelhet
                perfectoCell.textContent = aux ? `${aux} ${verb.perfecto.participio}` : '-';
            } else {
                perfectoCell.textContent = '-';
            }
        });
        entryDiv.appendChild(table);
        verbListContainerEl.appendChild(entryDiv); // Legg til hele oppføringen
    });
}


// Fyller ut grammatikk-seksjonen
function populateGrammarSection() {
    grammarContentEl.innerHTML = `
        <article>
            <h3>Presente (Nåtid)</h3>
            <p>Brukes for å snakke om vaner, rutiner, ting som skjer nå, eller generelle sannheter.</p>
            <strong>Regulære verb:</strong>
            <ul>
                <li>Fjern endingen (<strong>-ar</strong>, <strong>-er</strong>, <strong>-ir</strong>) fra infinitiv.</li>
                <li>Legg til riktig ending for hvert pronomen:</li>
            </ul>
            <table>
                <thead><tr><th>Pronomen</th><th>-AR ending</th><th>-ER ending</th><th>-IR ending</th></tr></thead>
                <tbody>
                    <tr><td>yo</td><td>-o</td><td>-o</td><td>-o</td></tr>
                    <tr><td>tú</td><td>-as</td><td>-es</td><td>-es</td></tr>
                    <tr><td>él/ella/Ud.</td><td>-a</td><td>-e</td><td>-e</td></tr>
                    <tr><td>nosotros/as</td><td>-amos</td><td>-emos</td><td>-imos</td></tr>
                    <tr><td>vosotros/as</td><td>-áis</td><td>-éis</td><td>-ís</td></tr>
                    <tr><td>ellos/ellas/Uds.</td><td>-an</td><td>-en</td><td>-en</td></tr>
                </tbody>
            </table>
            <p class="example">Eks: <strong>hablar</strong> (å snakke) -> <code>yo hablo</code>, <code>tú hablas</code>, ...</p>
            <p class="example">Eks: <strong>comer</strong> (å spise) -> <code>yo como</code>, <code>tú comes</code>, ...</p>
            <p class="example">Eks: <strong>vivir</strong> (å bo/leve) -> <code>yo vivo</code>, <code>tú vives</code>, ... (Merk: <strong>nosotros</strong> og <strong>vosotros</strong> har samme ending som infinitiv (-imos, -ís)).</p>
            <strong>Viktige uregelmessige i presens:</strong>
            <ul>
                <li><strong>Ser</strong> (å være - permanent): <code>soy, eres, es, somos, sois, son</code></li>
                <li><strong>Estar</strong> (å være - midlertidig/sted): <code>estoy, estás, está, estamos, estáis, están</code></li>
                <li><strong>Ir</strong> (å dra/gå): <code>voy, vas, va, vamos, vais, van</code></li>
                <li><strong>Tener</strong> (å ha): <code>tengo, tienes, tiene, tenemos, tenéis, tienen</code> (e->ie + uregelmessig 'yo')</li>
                <li><strong>Hacer</strong> (å gjøre/lage): <code>hago, haces, hace, hacemos, hacéis, hacen</code> (uregelmessig 'yo')</li>
                <li><strong>Stammevokalendring:</strong> Mange verb endrer vokalen i stammen (e->ie, o->ue, e->i, u->ue) i alle former <strong>unntatt</strong> nosotros og vosotros. Se biblioteket for eksempler som <code>pensar (pienso)</code>, <code>poder (puedo)</code>, <code>pedir (pido)</code>.</li>
            </ul>
        </article>

        <article>
            <h3>Futuro Simple (Fremtid)</h3>
            <p>Brukes for å snakke om hva som <strong>vil</strong> skje i fremtiden.</p>
            <p>Lages (for de fleste verb) ved å ta <strong>hele infinitiven</strong> og legge til disse endingene:</p>
            <ul>
                <li>yo: <strong>-é</strong></li>
                <li>tú: <strong>-ás</strong></li>
                <li>él/ella/Ud.: <strong>-á</strong></li>
                <li>nosotros/as: <strong>-emos</strong></li>
                <li>vosotros/as: <strong>-éis</strong></li>
                <li>ellos/ellas/Uds.: <strong>-án</strong></li>
            </ul>
             <p class="example">Eks: <strong>hablar</strong> -> <code>hablaré</code>, <code>hablarás</code>, <code>hablará</code>, <code>hablaremos</code>, <code>hablaréis</code>, <code>hablarán</code>.</p>
             <p class="example">Eks: <strong>comer</strong> -> <code>comeré</code>, <code>comerás</code>, <code>comerá</code>, <code>comeremos</code>, <code>comeréis</code>, <code>comerán</code>.</p>
             <p class="example">Eks: <strong>vivir</strong> -> <code>viviré</code>, <code>vivirás</code>, <code>vivirá</code>, <code>viviremos</code>, <code>viviréis</code>, <code>vivirán</code>.</p>
             <strong>Noen vanlige uregelmessige stammer i futurum:</strong>
             <ul>
                <li>tener -> <strong>tendr-</strong> (<code>tendré</code>)</li>
                <li>poner -> <strong>pondr-</strong> (<code>pondré</code>)</li>
                <li>salir -> <strong>saldr-</strong> (<code>saldré</code>)</li>
                <li>venir -> <strong>vendr-</strong> (<code>vendré</code>)</li>
                <li>poder -> <strong>podr-</strong> (<code>podré</code>)</li>
                <li>saber -> <strong>sabr-</strong> (<code>sabré</code>)</li>
                <li>hacer -> <strong>har-</strong> (<code>haré</code>)</li>
                <li>decir -> <strong>dir-</strong> (<code>diré</code>)</li>
                <li>querer -> <strong>querr-</strong> (<code>querré</code>)</li>
             </ul>
             <p>Endingene er de samme som for regulære verb!</p>
             <p class="example">Eks: <strong>tener</strong> -> <code>tendré, tendrás, tendrá, ...</code></p>
             <p class="example">Eks: <strong>hacer</strong> -> <code>haré, harás, hará, ...</code></p>
        </article>

        <article>
            <h3>Presente Perfecto (Perfektum)</h3>
            <p>Brukes for å snakke om ting som <strong>har skjedd</strong>, ofte i nær fortid eller med relevans for nåtiden.</p>
            <p>Lages ved å kombinere presens av hjelpeverbet <strong>haber</strong> med <strong>perfektum partisipp</strong> av hovedverbet.</p>
            <strong>Bøying av 'haber' i presens:</strong>
            <ul>
                <li>yo: <strong>he</strong></li>
                <li>tú: <strong>has</strong></li>
                <li>él/ella/Ud.: <strong>ha</strong></li>
                <li>nosotros/as: <strong>hemos</strong></li>
                <li>vosotros/as: <strong>habéis</strong></li>
                <li>ellos/ellas/Uds.: <strong>han</strong></li>
            </ul>
            <strong>Perfektum Partisipp:</strong>
            <ul>
                <li>Regulære -ar verb: stamme + <strong>-ado</strong> (eks: habl<strong>ar</strong> -> habl<strong>ado</strong>)</li>
                <li>Regulære -er/-ir verb: stamme + <strong>-ido</strong> (eks: com<strong>er</strong> -> com<strong>ido</strong>, viv<strong>ir</strong> -> viv<strong>ido</strong>)</li>
            </ul>
            <p class="example">Eks: Yo <strong>he hablado</strong> con María. (Jeg har snakket med Maria.)</p>
            <p class="example">Eks: ¿Tú <strong>has comido</strong> paella? (Har du spist paella?)</p>
            <p class="example">Eks: Nosotros <strong>hemos vivido</strong> aquí por dos años. (Vi har bodd her i to år.)</p>
            <strong>Viktige uregelmessige partisipp:</strong>
             <ul>
                <li>abrir -> <strong>abierto</strong> (åpnet)</li>
                <li>cubrir -> <strong>cubierto</strong> (dekket)</li>
                <li>decir -> <strong>dicho</strong> (sagt)</li>
                <li>escribir -> <strong>escrito</strong> (skrevet)</li>
                <li>hacer -> <strong>hecho</strong> (gjort/laget)</li>
                <li>morir -> <strong>muerto</strong> (dødd)</li>
                <li>poner -> <strong>puesto</strong> (satt/lagt/plassert)</li>
                <li>romper -> <strong>roto</strong> (ødelagt)</li>
                <li>ver -> <strong>visto</strong> (sett)</li>
                <li>volver -> <strong>vuelto</strong> (returnert/kommet tilbake)</li>
             </ul>
              <p class="example">Eks: Ella <strong>ha escrito</strong> una carta. (Hun har skrevet et brev.)</p>
              <p class="example">Eks: Ellos <strong>han vuelto</strong> de las vacaciones. (De har kommet tilbake fra ferien.)</p>
        </article>
    `;
}

// --- Navigasjon mellom seksjoner ---
function showSection(sectionId) {
    // Skjul alle seksjoner
    practicaSection.style.display = 'none';
    bibliotecaSection.style.display = 'none';
    gramaticaSection.style.display = 'none';

    // Fjern 'active' klasse fra alle knapper
    navButtons.forEach(button => button.classList.remove('active'));

    // Vis den valgte seksjonen og merk knappen som aktiv
    let sectionToShow;
    let buttonToActivate;

    switch (sectionId) {
        case 'biblioteca':
            sectionToShow = bibliotecaSection;
            buttonToActivate = document.getElementById('nav-biblioteca');
            break;
        case 'gramatica':
            sectionToShow = gramaticaSection;
            buttonToActivate = document.getElementById('nav-gramatica');
            break;
        case 'practica':
        default: // Fallback til øving
            sectionToShow = practicaSection;
            buttonToActivate = document.getElementById('nav-practica');
            break;
    }

    sectionToShow.style.display = 'block';
    if (buttonToActivate) {
        buttonToActivate.classList.add('active');
    }
    currentVisibleSection = sectionId;
}

// --- Event Listeners ---
submitButton.addEventListener('click', checkAnswer);

answerInputEl.addEventListener('keypress', function(event) {
    // Sjekk om Enter-tasten ble trykket og om knappen er aktiv
    if (event.key === 'Enter' && !submitButton.disabled) {
        checkAnswer();
    }
});

nextButton.addEventListener('click', loadNewVerb);

tenseSelectEl.addEventListener('change', loadNewVerb); // Last nytt verb når tid endres

// Legg til listeners for navigasjonsknappene
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.id.replace('nav-', ''); // Få id-en (practica, biblioteca, gramatica)
        showSection(sectionId);
    });
});


// --- Initialisering ---
document.addEventListener('DOMContentLoaded', () => {
    // Sjekk om nødvendige elementer finnes før vi kjører
    if (practicaSection && bibliotecaSection && gramaticaSection && verbListContainerEl && grammarContentEl && tenseSelectEl && scoreEl && streakEl) {
        try {
            populateLearningSection(); // Generer bibliotek-innhold
            populateGrammarSection(); // Generer grammatikk-innhold
            showSection('practica');   // Vis øvingsseksjon som standard
            loadNewVerb();             // Last det første verbet for øving
            updateScoreDisplay();      // Sett score/streak til 0
        } catch (error) {
             console.error("Feil under initialisering:", error);
             const errorDiv = document.createElement('div');
             errorDiv.style.color = 'red';
             errorDiv.style.fontWeight = 'bold';
             errorDiv.style.padding = '20px';
             errorDiv.textContent = 'KRITISK FEIL: Kunne ikke fullføre initialiseringen av appen. Sjekk console (F12) for detaljer.';
             document.body.prepend(errorDiv);
        }
    } else {
        console.error("Kritiske DOM-elementer mangler! Kan ikke initialisere appen.");
        const errorDiv = document.createElement('div');
        errorDiv.style.color = 'red';
        errorDiv.style.fontWeight = 'bold';
        errorDiv.style.padding = '20px';
        errorDiv.textContent = 'KRITISK FEIL: Kunne ikke starte appen. Nødvendige HTML-elementer mangler. Sjekk console (F12) for detaljer.';
        document.body.prepend(errorDiv); // Legg feilmelding øverst
    }
});
