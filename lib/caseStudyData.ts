// ─────────────────────────────────────────────────────────────────────────────
// caseStudyData.ts
// Single source of truth for all case study content.
// Used by: /work, /case-study (index), /case-study/[slug]
// ─────────────────────────────────────────────────────────────────────────────

export type CaseStudy = {
  slug: string;
  id: string;
  title: string;
  location: string;
  city: string;               // short city name for work grid
  year: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  area: string;
  tag: string;                // one-line poetic hook shown on work grid hover
  headline: string;           // italic subheadline on case study hero
  challenge: string;
  approach: string;
  outcome: string;
  clientQuote: string;
  clientQuoteAttrib: string;
  heroSrc: string;
  gallery: string[];
  credits: { role: string; name: string }[];
};

export const caseStudies: CaseStudy[] = [

  // 01 ── The Mehta Residence ────────────────────────────────────────────────
  {
    slug: 'mehta-residence',
    id: '01',
    title: 'The Mehta Residence',
    location: 'New Delhi',
    city: 'New Delhi',
    year: '2024',
    category: 'Residential',
    area: '4,200 sq ft',
    tag: 'Where marble learns to breathe.',
    headline: 'A house that finally stopped performing and started living.',

    challenge:
      'The Mehtas had spent three years in a house that looked magnificent in photographs and felt hollow in person. Every room had been finished to impress guests rather than shelter a family. The palette was aggressive, the proportions were theatrical, and nothing invited you to stay. They came to us with a single question: can a home feel both grand and genuinely restful at the same time?',

    approach:
      'We began by listening to how the family actually moved through the space. Morning rituals, evening rhythms, the way light crossed the dining table at noon. From that, a material palette of exactly three: Calacatta marble in its raw, unfilled state, unlacquered brass that would patina honestly over years, and aged Belgian linen that absorbs sound as much as light. Two walls fragmenting the ground floor were removed and replaced with a single continuous 9-metre marble slab running from the entrance threshold to the garden edge. Every furniture decision was made on site, never from a catalogue. The rule throughout was simple: if it does not make you want to stay, it does not enter the room.',

    outcome:
      'The project was completed six weeks ahead of schedule without a single value-engineering compromise. The family has since turned down two editorial shoots, preferring to keep the home a private thing. The youngest daughter now does her homework at the dining table every evening, which the client tells us is the best review we will ever receive.',

    clientQuote:
      'For the first time in three years we cancelled a holiday. We simply did not want to leave.',
    clientQuoteAttrib: 'R. Mehta, Principal Client',

    // Hero: dramatic marble living room, warm light, monumental scale
    heroSrc: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=90',

    gallery: [
      // Serene living room with stone and natural light
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=88',
      // Minimal dining with warm brass and linen
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=88',
      // Stone corridor with controlled light
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1400&q=88',
      // Bedroom in warm tones, restrained
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=88',
    ],

    credits: [
      { role: 'Principal Designer', name: 'Arjun Mehta' },
      { role: 'Project Designer', name: 'Priya Sharma' },
      { role: 'Architectural Oversight', name: 'Karan Bose' },
      { role: 'Photography', name: 'Studio Lens, Mumbai' },
    ],
  },

  // 02 ── Oblique Office, Gurgaon ────────────────────────────────────────────
  {
    slug: 'oblique-office',
    id: '02',
    title: 'Oblique Office, Gurgaon',
    location: 'Gurgaon',
    city: 'Gurgaon',
    year: '2024',
    category: 'Commercial',
    area: '11,000 sq ft',
    tag: 'Ambition has an address now.',
    headline: 'A workspace where the geometry itself refuses to be ordinary.',

    challenge:
      'Meridian Financial had outgrown their previous office in every sense. Their team had doubled, their ambitions had tripled, and the space they occupied was beige in every possible way. Carpeted conference rooms, fluorescent ceilings, motivational posters. The brief they handed us was refreshingly direct: build us an office that talented people choose over working from home. Not perks. Not ping-pong. Architecture.',

    approach:
      'The building\'s structural column grid runs at eleven degrees off perpendicular. Every previous tenant had fought this fact. We made it the entire concept. Nothing in the space is orthogonal. Workstations angle toward the northern light source. The three meeting rooms are triangular in plan, their acute corners occupied by custom joinery that functions as shared reference libraries. The central spine of the floor runs diagonally, creating a public promenade from reception to the director\'s corner. Materials were chosen for honesty: raw concrete columns left exposed, warm-grade oak on all joinery, and blackened steel for hardware. Acoustic treatment was limited to ceiling baffles only, preserving the ambient energy of a room full of people thinking hard.',

    outcome:
      'Within two months of occupation, the company reported a 34 percent improvement in voluntary office attendance. Three senior hires specifically mentioned the workspace during their offer negotiations. An investment partner visiting from Singapore asked for our contact details at the end of a board meeting. The client\'s facilities team has not had a single request to add a foosball table.',

    clientQuote:
      'Investors walk in and the meeting tone changes before anyone speaks. The room does something to the conversation.',
    clientQuoteAttrib: 'CEO, Meridian Financial',

    // Hero: architectural, angular office interior with confident geometry
    heroSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=90',

    gallery: [
      // Open workspace with natural light and exposed structure
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=88',
      // Collaborative zone, warm oak against concrete
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=88',
      // Meeting room interior, minimal and precise
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1400&q=88',
      // Reception spine, diagonal geometry
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=88',
    ],

    credits: [
      { role: 'Principal Designer', name: 'Karan Bose' },
      { role: 'Creative Direction', name: 'Priya Sharma' },
      { role: 'Furniture Design', name: 'Arjun Mehta' },
      { role: 'Photography', name: 'Nirmana Archive' },
    ],
  },

  // 03 ── Villa Karun ────────────────────────────────────────────────────────
  {
    slug: 'villa-karun',
    id: '03',
    title: 'Villa Karun',
    location: 'Alibag, Maharashtra',
    city: 'Alibag',
    year: '2023',
    category: 'Residential',
    area: '6,800 sq ft',
    tag: 'Stone holds what the sea cannot.',
    headline: 'A coastal house that earns its place in the landscape.',

    challenge:
      'The plot sits on a laterite shelf thirty metres above the Arabian Sea, facing west. The client, a shipping executive who had spent twenty years looking at water from bridge decks, wanted a home that felt equally rooted. Previous architects had proposed maximising the view through full-height glazing on every facade. We disagreed. A house made of glass on a west-facing coastal site is a greenhouse by three in the afternoon. The brief required starting over.',

    approach:
      'We designed from the inside out and from the climate inward. Walls are 450mm thick, double the structural minimum, providing thermal mass that absorbs the afternoon heat and releases it slowly through the night. Deep overhangs of 1.8 metres shade every opening. Primary rooms are ventilated by cross-flow apertures aligned to the prevailing southwesterly. There is no mechanical air-conditioning in the living or sleeping zones. The material palette was drawn entirely from the site: laterite stone quarried 12 kilometres away, Mangalore clay tile on the roof, and Athangudi tile flooring whose cool surface temperature we measured and specified to within two degrees. The seaward facade is not a wall of glass but a sequence of framed apertures, each one composing a specific portion of the view as you move through the house.',

    outcome:
      'The house maintains an interior temperature of 26 to 28 degrees through the Konkan summer without mechanical cooling. It has been published in Architectural Digest India, Wallpaper, and the Japan-based journal CASA Brutus. The owner has received three acquisition offers for the property since completion. He has declined all of them.',

    clientQuote:
      'I have looked at water my entire career. This is the first time a building has taught me to look differently.',
    clientQuoteAttrib: 'V. Karun, Principal Client',

    // Hero: warm stone coastal villa with deep overhangs
    heroSrc: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=90',

    gallery: [
      // Luxury coastal residence exterior, warm stone
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=88',
      // Interior with terracotta and natural light
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1400&q=88',
      // Living room with sea view framed deliberately
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=88',
      // Courtyard with stone and water feature
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400&q=88',
    ],

    credits: [
      { role: 'Principal Designer', name: 'Arjun Mehta' },
      { role: 'Project Designer', name: 'Karan Bose' },
      { role: 'Climate Consultant', name: 'Bioclimatic Studio, Pune' },
      { role: 'Photography', name: 'Dhruv Malik Photography' },
    ],
  },

  // 04 ── The Aranya Hotel ───────────────────────────────────────────────────
  {
    slug: 'aranya-hotel',
    id: '04',
    title: 'The Aranya Hotel',
    location: 'Jaipur',
    city: 'Jaipur',
    year: '2023',
    category: 'Hospitality',
    area: '28,000 sq ft',
    tag: 'Opulence with nothing to prove.',
    headline: 'A palace hotel that chose restraint over spectacle and won.',

    challenge:
      'Jaipur has no shortage of heritage hotels. Havelis converted by committees, rooftop bars grafted onto Mughal archways, lobby chandeliers that have no relationship to anything beneath them. The Aranya group acquired a mid-century property on the city\'s western periphery with none of the obvious assets and a clear instruction: do not pretend to be something you are not. Build something that belongs to now while knowing exactly where it stands.',

    approach:
      'The building\'s 1960s concrete structure became the asset rather than the liability. We exposed the coffered ceiling of the main lobby rather than concealing it behind ornamental plasterwork, applying a limewash in deep ochre that references the city\'s sandstone without impersonating it. Rajasthani craft is present throughout but never decorative: hand-blocked linen on every bed, blue pottery commissioned from a cooperative in Sanganer for all bathroom ware, and hand-knotted wool carpets whose patterns are derived from the geometric irrigation channels of the Jaipur district. Guest rooms were given single-material bathrooms, each in a different stone sourced from Rajasthan. No two rooms are identical. The pool courtyard was planted with desert species only, removing the maintenance burden of tropical plants in an arid climate and creating a landscape that becomes more beautiful as it matures.',

    outcome:
      'The Aranya opened to 94 percent occupancy in its first quarter and has maintained above 80 percent through its first full year. It ranked in Condé Nast Traveller\'s top 20 new hotels in Asia for 2024. The average guest stay is 3.4 nights, against a Jaipur hotel average of 1.8. The owners report that 60 percent of bookings now come through direct referral.',

    clientQuote:
      'Every other architect showed us mood boards of other hotels. Nirmana showed us a map of Rajasthan. That told us everything.',
    clientQuoteAttrib: 'Managing Director, Aranya Hospitality Group',

    // Hero: grand hotel lobby, warm and architectural, palatial scale
    heroSrc: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1800&q=90',

    gallery: [
      // Hotel lobby with high ceilings and warm stone
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1400&q=88',
      // Guest room in warm ochre with craft details
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=88',
      // Pool courtyard with desert planting
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=88',
      // Hotel restaurant with arched architecture
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=88',
    ],

    credits: [
      { role: 'Creative Director', name: 'Priya Sharma' },
      { role: 'Principal Designer', name: 'Arjun Mehta' },
      { role: 'Craft Sourcing', name: 'Karan Bose' },
      { role: 'Landscape', name: 'Arid Studio, Jaipur' },
      { role: 'Photography', name: 'The Light House, Delhi' },
    ],
  },

  // 05 ── Penthouse, Worli ───────────────────────────────────────────────────
  {
    slug: 'penthouse-worli',
    id: '05',
    title: 'Penthouse, Worli',
    location: 'Mumbai',
    city: 'Mumbai',
    year: '2023',
    category: 'Residential',
    area: '3,600 sq ft',
    tag: 'The city shrinks. The room expands.',
    headline: 'Thirty-two floors up, a home that turns its back on the view to find something better.',

    challenge:
      'The client, a private equity partner, had purchased the penthouse primarily for the panoramic view of the Bandra-Worli Sea Link and the city beyond. When we visited the shell, we understood why. The view is extraordinary. It is also constant, relentless, and after six months, invisible. The challenge was to design a home where the view is an event rather than wallpaper, and where the interior has enough weight and warmth to hold its own against thirty-two floors of open sky.',

    approach:
      'We treated the view as a single object to be framed rather than a backdrop to design in front of. The primary living volume was oriented so that the Sea Link is visible from only two positions: a specific point in the entrance corridor, and the main seating group. Every other sightline was redirected internally. Materials were chosen for their gravity: honed Kota stone flooring, hand-plastered walls in a warm white that shifts visibly with the changing Mumbai light, and a custom library wall in smoked oak that runs the full height of the living room on the windowless north wall. The result is a home that earns its view by making you wait for it.',

    outcome:
      'The client, who had planned to use the apartment primarily as a corporate guest suite, now lives there full time. He describes it as the first home he has had that he does not want to redecorate. A notable detail: the television, which was specified as a primary requirement in the original brief, was removed during design development after the client visited the space in its finished state and decided it was unnecessary.',

    clientQuote:
      'I thought I was buying the view. I did not expect to fall in love with the room.',
    clientQuoteAttrib: 'A. Singhania, Principal Client',

    // Hero: minimal high-rise interior, restrained and sky-lit
    heroSrc: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=90',

    gallery: [
      // Minimal penthouse living with city light
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=88',
      // Smoked oak library wall, interior gravity
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1400&q=88',
      // Warm plaster and Kota stone — tactile restraint
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1400&q=88',
      // The framed view from the seating group
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=88',
    ],

    credits: [
      { role: 'Principal Designer', name: 'Priya Sharma' },
      { role: 'Project Designer', name: 'Arjun Mehta' },
      { role: 'Custom Furniture', name: 'The Craft Room, Mumbai' },
      { role: 'Photography', name: 'Ishaan Nair Studio' },
    ],
  },

  // 06 ── Sūtra Spa and Wellness ─────────────────────────────────────────────
  {
    slug: 'sutra-spa',
    id: '06',
    title: 'Sūtra Spa and Wellness',
    location: 'Bangalore',
    city: 'Bangalore',
    year: '2022',
    category: 'Commercial',
    area: '5,400 sq ft',
    tag: 'Silence, designed from the inside out.',
    headline: 'A wellness space where the architecture is the treatment.',

    challenge:
      'Sutra\'s founders had identified a gap in Bangalore\'s wellness market: a tier above day spas but below medical retreats, serving a professional clientele who considered their time the most valuable asset they owned. The space they had leased was a ground-floor commercial unit in a busy Indiranagar building, with a street-facing facade, a rectangular floor plate of no particular character, and ceilings at a disappointing 2.9 metres. The brief was direct: make people forget where they are the moment they step inside.',

    approach:
      'The threshold was the first decision. We raised the entrance floor by 90mm relative to the street, creating a physical step that functions as a psychological boundary. Sound attenuation was engineered at every layer: 120mm cavity walls lined with mineral wool, floating concrete floors on neoprene isolation pads, and solid-core doors at every zone transition. The ceiling was dropped to 2.4 metres in circulation spaces and raised to 3.4 metres in the primary treatment rooms using a stepped coffer. This counterintuitive compression and release creates a spatial sequence that slows the visitor involuntarily. Materials throughout are natural and unfinished: rammed earth feature walls, river-washed pebble flooring in the wet zones, and handwoven jute panels that absorb both sound and the ambient light from warm-temperature linear LEDs concealed in the cornices. Scent, temperature, and sound were specified as design elements alongside materials, with a single signature fragrance diffused at the entrance threshold only.',

    outcome:
      'Sutra achieved full booking capacity within six weeks of opening and maintains a waitlist for weekend appointments. The space has been published in Elle Decor India and Vogue Living. Average session revenue is 40 percent above the founders\' original model, attributed directly to the perceived premium of the environment. A second location in Hyderabad has been commissioned.',

    clientQuote:
      'Our clients started staying longer after their sessions. Not because we asked them to. Because the room made leaving feel like a loss.',
    clientQuoteAttrib: 'Founders, Sutra Wellness',

    // Hero: serene spa interior, natural textures, warm considered light
    heroSrc: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1800&q=90',

    gallery: [
      // Rammed earth wall with soft light
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=88',
      // Treatment room with natural materials and low light
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=88',
      // Pebble flooring in wet zone, textural
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1400&q=88',
      // Reception desk, jute and warm light
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1400&q=88',
    ],

    credits: [
      { role: 'Principal Designer', name: 'Karan Bose' },
      { role: 'Creative Direction', name: 'Priya Sharma' },
      { role: 'Acoustic Engineering', name: 'Sound Form, Bangalore' },
      { role: 'Scent Design', name: 'Maison Arôme' },
      { role: 'Photography', name: 'Keya Mehrotra Studio' },
    ],
  },

];

// ── Lookup helpers ────────────────────────────────────────────────────────────

export const caseStudyBySlug = Object.fromEntries(
  caseStudies.map((cs) => [cs.slug, cs])
) as Record<string, CaseStudy>;