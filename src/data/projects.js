// Featured projects. Every claim here comes from Arth's own descriptions,
// project files or test runs. Keep it that way: no invented features or numbers.

const AI_NOTE =
  'Built with AI assistance. I led the product, the design decisions and the testing.'

export const projects = [
  {
    slug: 'syntaxswipe',
    name: 'SyntaxSwipe',
    category: 'iOS app',
    status: 'Learning build',
    statusNote: 'Runs on iPhone · not a competition entry',
    tagline: 'A swipe-to-debug trainer: spot the bug in a code snippet, then pick the right patch.',
    cardLine: 'Swipe-to-debug trainer for iOS',
    tech: ['Swift', 'SwiftUI', 'Swift Playgrounds', 'LocalAuthentication', 'Canvas', 'Haptics'],
    cover: '/images/syntaxswipe-feed.webp',
    coverAlt: 'SyntaxSwipe feed showing Swift code cards with a highlighted buggy line',
    coverStyle: 'phone',
    repo: null,
    demo: null,
    overview:
      "I built SyntaxSwipe while learning SwiftUI to prepare for Apple's Swift Student Challenge. It isn't my entry (I'm planning a different project for this year's challenge), but it's where I learned most of what I know about building iOS interfaces.",
    problem:
      'Most people only practise reading code for bugs when something breaks. I wanted a short, repeatable way to practise it, closer to scrolling a feed than doing homework.',
    solution:
      'A vertical feed of short Swift and Python snippets, each hiding one subtle bug. Tap the line you think is wrong, then choose the correct patch in a debugger sheet. A timed mode, streaks and a library of saved snippets make it something you can come back to daily.',
    role: AI_NOTE + ' I came up with the concept and tested every screen on my iPhone.',
    features: [
      'Glitch Sprint: a 60-second paging feed. Wrong taps cost 3 seconds and streaks multiply XP (2× then 3×).',
      'Every line of a snippet is its own tap target; a fixed line animates to green.',
      'Debugger sheet with candidate patches. A wrong pick shakes the option and triggers an error haptic.',
      'A burst of syntax-character particles at a 3× streak, drawn with Canvas and TimelineView.',
      'Repository of bookmarked snippets with notes, plus a Swift / Python environment switch.',
      'Profile with a radar chart and XP line drawn with plain SwiftUI shapes, and a light/dark theme.',
      'A first-run spotlight tutorial that pauses the timer until you squash your first bug.',
    ],
    engineering: [
      'No third-party dependencies: only SwiftUI and Apple frameworks.',
      'Packaged as a Swift Playgrounds app (.swiftpm). iOS-only modifiers sit behind #if os(iOS) so it still previews on a Mac.',
      'The paging feed uses scrollTargetBehavior(.paging) and resets selection state whenever you move to another card.',
      'Onboarding flags, the daily-challenge timestamp and the theme persist with @AppStorage.',
    ],
    goodToKnow: [
      'The leaderboard ranks you against simulated "ghost" players, not real users.',
      'Titles like "Senior iOS Architect" and the XP numbers in the screenshots are in-game sample data.',
      "The Face ID entry screen is a themed experience with a bypass for devices without biometrics, so it isn't a security feature.",
    ],
    gallery: [
      { src: '/images/syntaxswipe-feed.webp', alt: 'Feed tab with daily commits and code cards', caption: 'Feed' },
      { src: '/images/syntaxswipe-sprint.webp', alt: 'Glitch Sprint with the debugger sheet open', caption: 'Glitch Sprint + debugger' },
      { src: '/images/syntaxswipe-repo.webp', alt: 'Repository of resolved snippets', caption: 'Repository' },
      { src: '/images/syntaxswipe-environment.webp', alt: 'Environment picker for Swift or Python', caption: 'Swift / Python switch' },
      { src: '/images/syntaxswipe-profile.webp', alt: 'Profile screen with XP and a radar chart', caption: 'Profile (in-game sample data)' },
    ],
    galleryStyle: 'phone',
  },
  {
    slug: 'raay',
    name: 'Raay',
    category: 'Full-stack web app',
    status: 'In development',
    statusNote: 'Not launched yet · no customers yet',
    live: true,
    tagline: "One QR code on a shop's counter that opens everything a customer needs.",
    cardLine: 'One QR for a whole shop',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase (Postgres)', 'Prisma'],
    cover: '/images/raay-dashboard.webp',
    coverAlt: 'Raay owner dashboard with a live phone preview of a shop page',
    coverStyle: 'wide',
    repo: null,
    demo: null,
    overview:
      'Raay started as ReVU, a concept for helping local shops collect Google reviews through QR stands. While planning it, I realised reviews were only one of many things a shop wants customers to reach. Raay is the broader version: one page per shop, opened from one printed QR.',
    problem:
      'Small shops such as salons, cafés, clinics and gyms often have a counter cluttered with separate QR codes and printed numbers for reviews, Instagram and Wi-Fi, and customers rarely use them.',
    solution:
      'The owner sets up one fast mobile page with call, WhatsApp, Google review, Instagram, Wi-Fi, directions, menu and offers. Customers scan with their normal camera, with no app to install. The owner edits the page from a dashboard and downloads print-ready QR files.',
    role:
      AI_NOTE +
      ' I defined the product and requirements, chose the stack, designed the brand (the mandala icon and the र wordmark), and test each stage on my Mac.',
    features: [
      'Public shop page with up to 12 reorderable buttons and one large main action.',
      'Owner dashboard with a live phone preview while editing.',
      'Interface and shop text in English, Hindi and Marathi.',
      'Offer card with a tap-to-copy coupon code.',
      "Wi-Fi details shown on tap with a copy button. Phones can't auto-join from a web page, so the page doesn't pretend to.",
      'Event tracking for page views, button taps, Wi-Fi reveals and coupon copies, split by device type.',
      'QR files: a plain code for the printed A5 standee and card, and a mandala-centred version for sharing online.',
      'Email magic-link login for shop owners.',
    ],
    engineering: [
      'PostgreSQL on Supabase, modelled with Prisma: owner profiles, shops, buttons, and an events table for analytics.',
      'Slugs are permanent. Renaming a shop adds a new slug and the old one redirects to it, so a QR that is already printed never breaks.',
      "The review button opens Google's review form directly. No review gating or incentives, which Google's policies forbid.",
      'Chose email magic links for v1 because SMS OTP in India needs a paid provider and DLT registration.',
      'The public page ships very little JavaScript so it loads quickly on mobile data.',
    ],
    goodToKnow: [
      'The dashboard screenshot shows a demo shop used for testing. Its name, logo and details are hidden.',
      'Next steps: an admin panel for onboarding shops, a landing page, then deployment.',
    ],
    gallery: [
      { src: '/images/raay-dashboard.webp', alt: 'Raay dashboard editing a demo shop with live preview', caption: 'Owner dashboard (demo shop, details hidden)' },
      { src: '/images/raay-login.webp', alt: 'Raay login page with the mandala logo and wordmark', caption: 'Magic-link login and brand' },
    ],
    galleryStyle: 'wide',
  },
  {
    slug: 'ledgerly',
    name: 'Ledgerly',
    category: 'Android app',
    status: 'Working app',
    statusNote: 'Runs on my phone · personal use',
    live: true,
    tagline: "An offline expense tracker I built to replace the money manager app I'd been using.",
    cardLine: 'Offline expense tracker for Android',
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM', 'Android Studio'],
    cover: '/images/ledgerly-insights.webp',
    coverAlt: 'Ledgerly insights screen with a spending donut chart; amounts hidden',
    coverStyle: 'phone',
    repo: null,
    demo: null,
    overview:
      "I'd been tracking my spending in a third-party money manager app. I wanted one I own, that works fully offline and that I can extend myself, so I built Ledgerly and moved my history into it.",
    problem:
      'Switching apps usually means losing your history. My old app could only export an Excel file, with quirks like dates stored as spreadsheet serial numbers and transfers recorded as a single row.',
    solution:
      'Ledgerly imports that export, checks it, and reproduces the same account balances. Then it takes over day-to-day tracking: transactions, accounts, budgets, recurring entries and charts.',
    role:
      AI_NOTE +
      ' I set the requirements, tested the importer against my real data, and build and run the app on my phone from Android Studio.',
    features: [
      'Daily, calendar, monthly and notes views of transactions.',
      'Accounts grouped as cash, bank, cards and savings, with assets, liabilities and net worth.',
      'Insights: spending by category, balance trend, income vs expenses, and a detail screen per category.',
      'Budgets with notifications, and recurring transactions.',
      'A calculator built into the amount keypad, so "200+18%" works.',
      'PIN and biometric lock, plus CSV and backup export.',
    ],
    engineering: [
      'Money is stored as whole paise in Long integers, never floats, with BigDecimal for parsing and rounding.',
      'The importer previews changes, detects duplicates with SHA-256 fingerprints, and can roll an import back.',
      'Checked that imported balances matched the old app exactly before switching over.',
      'Charts are drawn with custom Compose Canvas code instead of a chart library.',
      'MVVM with Room; the business logic is covered by 44+ unit tests.',
    ],
    goodToKnow: ['All amounts in these screenshots are hidden for privacy.'],
    gallery: [
      { src: '/images/ledgerly-insights.webp', alt: 'Insights screen with category donut chart', caption: 'Insights' },
      { src: '/images/ledgerly-stats.webp', alt: 'Balance trend and income vs expenses charts', caption: 'Total stats' },
      { src: '/images/ledgerly-accounts.webp', alt: 'Accounts grouped by type', caption: 'Accounts' },
    ],
    galleryStyle: 'phone',
  },
  {
    slug: 'laya',
    name: 'Beat the Bot',
    category: 'Hackathon · AI',
    status: 'Learning project',
    statusNote: "VESIT hackathon PS 02 · we didn't win",
    tagline: 'A game bot where a small decision model, Laya, has to choose every single move.',
    cardLine: 'Decision-model bot for a block puzzle',
    tech: ['Python', 'Laya', 'JSONL logs', 'HTML viewer'],
    cover: null,
    repo: null,
    demo: null,
    overview:
      "Problem statement PS 02 at a VESIT hackathon, \"Beat the Bot – Teach Laya to Play\". Teams got a game API on the day and had to play it using Laya, an open-weight decision model running on our own laptops. We didn't win, but preparing for it taught me a lot about APIs, Python environments and working within strict rules.",
    problem:
      'The rules allowed no other model and no rule-based logic to choose moves: only Laya. But Laya picks from a limited number of options per call, and a block-puzzle board has far more legal moves than that.',
    solution:
      'A practice kit around an 8×8 block puzzle: a stand-in game server, an adapter that describes the board as text, and a knockout tournament that sends legal moves to Laya in groups of 20 or fewer until one winner is left.',
    role:
      AI_NOTE +
      ' I set Laya up locally, worked through the environment problems, and ran the practice games.',
    features: [
      'Knockout move selection so Laya can choose among any number of legal moves.',
      'No rule-based fallback: if Laya is unreachable after retries, the game stops instead of cheating.',
      'Every decision is logged to JSONL with its confidence score.',
      'A viewer page to replay a game move by move.',
      "A script that tunes how Laya is prompted, since its weights can't be fine-tuned.",
    ],
    engineering: [
      'Rule compliance is documented in the README.',
      'When only one move is legal, the log records that instead of faking a Laya decision.',
      'Laya needed Python 3.11–3.13 and my Mac had 3.14, so I set up 3.12 in a virtual environment through Homebrew.',
      "Laya's confidence scores came out uncalibrated, which the tuning step is meant to address.",
    ],
    goodToKnow: [
      'Practice result: on a real local run, Laya played a full practice game and scored 50 points in 8 moves. This was practice, not the competition.',
    ],
    gallery: [],
  },
]

export const otherWork = [
  {
    name: 'Cosmos OS',
    kind: 'Workshop project',
    line: 'A web-based desktop environment built with React during a QuestIT workshop at VESIT.',
    tech: ['React', 'JavaScript', 'CSS'],
  },
  {
    name: 'MPLADS monitoring platform',
    kind: 'Concept · Smart India Hackathon',
    line: 'Researched and conceptualised an AI-assisted platform to track MPLADS-funded projects, with team Syntax Slayers.',
    tech: ['Research', 'System design'],
  },
  {
    name: 'PCB inventory analytics',
    kind: 'Prototype · Invictus Hackathon',
    line: 'Inventory automation and material-consumption analytics for PCB manufacturing, submitted as a hackathon prototype.',
    tech: ['Workflow design', 'Analytics'],
  },
  {
    name: 'Municipal waste coordination',
    kind: 'Design and presentation · VESIT',
    line: 'Team system design for an AI-driven platform to coordinate municipal waste collection.',
    tech: ['System design', 'Presentation'],
  },
  {
    name: 'Coursework',
    kind: 'Labs and practicals',
    line: 'Jenkins CI/CD pipelines with Ant and Maven, CPU scheduling and multithreading practicals, Java OOP, DBMS and SQL, EER diagrams.',
    tech: ['Java', 'Python', 'Jenkins', 'SQL'],
  },
]
