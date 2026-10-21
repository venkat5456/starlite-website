/* =========================================================
   Starlite Computer Services - script
   EDIT THE THREE BLOCKS AT THE TOP (SITE, PARTNERS, STORIES).
   Everything below them builds the pages from that information.
   ========================================================= */

/* ---------- 1. Company details (hours are still a PLACEHOLDER) ---------- */
const SITE = {
  name: "Starlite Computer Services",
  tagline: "UPS supply, installation, maintenance and repair, so your power backup never lets you down.",
  phone: "99849990056",
  phoneLink: "99849990056",
  email: "srinivasrao@starlitecomputerservices.com",
  addresses: [
    { label: "Vijayawada", text: "Jyothirmayee Hospital, 1-274-1, Poranki, Vijayawada Rural, Andhra Pradesh" },
    { label: "Hyderabad", text: "Kamadhenu Towers, G1, Moti Nagar, opp. Hanuman Temple, Hyderabad" }
  ],
  hours: ["Monday to Friday, 9am to 6pm", "Saturday, 10am to 2pm"],   // PLACEHOLDER: confirm
  // WhatsApp number with country code, digits only, e.g. "919876543210".
  // Leave empty ("") to hide the WhatsApp button.
  whatsapp: "",
  // Free form delivery: get an access key at https://web3forms.com using the
  // email above and paste it here. While empty, the form opens the visitor's email app instead.
  formKey: "",
  // DRAFT services - each one has its own page (slug = page file name, e.g. ups-sales.html).
  // To rename a service, change it here AND in its page file.
  services: [
    { slug: "ups-sales", title: "UPS supply and sales", text: "Online, line-interactive and offline UPS systems sized for your load, from a single PC to a full server room." },
    { slug: "ups-installation", title: "Installation and commissioning", text: "Safe installation, wiring, load testing and commissioning by trained engineers." },
    { slug: "ups-maintenance", title: "Annual maintenance contracts", text: "Scheduled preventive visits and priority support to keep your UPS in good health." },
    { slug: "ups-repair", title: "UPS repair and breakdown support", text: "Fast fault diagnosis and repair, with spares for commonly used models." },
    { slug: "ups-batteries", title: "Battery replacement and testing", text: "Battery health checks, replacement, and responsible disposal of old batteries." },
    { slug: "ups-rental", title: "UPS rental and backup units", text: "Temporary UPS units for events, shutdowns, upgrades and short-term projects." },
    { slug: "networking", title: "Networking solutions", text: "Fast, secure and scalable business networks: cabling, switches, Wi-Fi, firewalls and VPNs." }
  ]
};

/* ---------- 2. Partners ----------
   Save official logo files in images/partners/ (use each company's brand
   guidelines). Until the files exist, the name shows instead. */
const PARTNERS = [
  { name: "Apple", logo: "images/partners/apple.svg", note: "Direct partner", link: "apple.html", linkText: "See the Apple range" },
  { name: "Delta Electronics", logo: "images/partners/delta-electronics.svg", note: "Authorised partner", link: "delta-ups.html", linkText: "See the Delta UPS range" },
  { name: "Amara Raja", logo: "images/partners/amara-raja.svg", note: "Authorised partner", link: "amara-raja.html", linkText: "See the Amara Raja range" }
];


/* ---------- 3. Success stories ----------
   Each entry becomes a card on success-stories.html AND its own full page
   (success-story.html?id=your-id). The first three also appear on the home page.
   Stories with partner: "apple" also appear on apple.html.
   To add a project: copy the whole { ... } block, give it a new unique id
   (lowercase, dashes, no spaces) and fill in the details.
   Fields you leave empty ("" or []) are skipped.
   images: put photos in images/projects/ and list them like
   ["images/projects/site-1.jpg", "images/projects/site-2.jpg"]. */
const STORIES = [
  {
    id: "amb-cinemas-hyderabad",
    title: "AMB Cinemas, Hyderabad",
    sector: "Cinema",
    location: "Gachibowli, Hyderabad",
    facts: [["Equipment", "2 × 80 kVA, 2 × 30 kVA"], ["Total capacity", "220 kVA"]],
    summary: "A seven-screen luxury multiplex where every show depends on laser projection, Dolby Atmos sound and live ticketing. We delivered 220 kVA of online UPS protection across four units.",
    challenge: "Laser projectors, cinema servers and sound processors do not tolerate a sudden loss of power. A dip during the changeover to the generator can stop a show mid-screening, interrupt ticketing at the box office and risk damage to expensive projection equipment.",
    approach: [
      "Surveyed the projection booths, sound racks, servers and box-office systems to measure the real running load.",
      "Split the load across two 80 kVA and two 30 kVA online UPS systems, so projection and sound run on dedicated capacity, separate from ticketing and IT.",
      "Sized the battery banks to carry every screen through the generator changeover, then installed, load tested and commissioned each unit."
    ],
    result: "Shows, ticketing and food and beverage billing keep running through grid outages and generator changeovers, with no break in power to the projectors or servers.",
    images: []
  },
  {
    id: "mihira-vfx-studios",
    title: "Mihira VFX Studios",
    sector: "VFX and post-production",
    location: "Hyderabad",
    facts: [["Equipment", "100 kVA, 30 kVA, 6 kVA"], ["Total capacity", "136 kVA"]],
    summary: "A Hyderabad VFX and CGI studio running render workstations and shared storage around the clock. We delivered 136 kVA of online UPS protection in three tiers.",
    challenge: "Rendering and simulation jobs can run for hours. A single power cut can wipe out a night of rendering, corrupt files on shared storage and push back delivery dates for film projects.",
    approach: [
      "Mapped the studio's load: the artist and render floor, the server and storage room, and smaller critical equipment.",
      "Installed a 100 kVA online UPS for the main floor, a 30 kVA unit for servers and storage, and a 6 kVA unit for smaller critical loads, so a fault on one tier never takes down another.",
      "Matched battery backup to the time needed to save work and shut down safely, then commissioned and load tested each system."
    ],
    result: "Artists and render nodes ride through power cuts without losing work, and storage stays protected from sudden shutdowns.",
    images: []
  },
  {
    id: "icici-bank",
    title: "ICICI Bank",
    sector: "Banking",
    location: "",
    facts: [["Equipment", "Static transfer switches (STS)"]],
    summary: "Static transfer switches that keep critical banking equipment powered even if one UPS source fails.",
    challenge: "Banking systems such as servers, network equipment and transaction terminals must stay online at all times. With a single UPS feed, a UPS fault or maintenance shutdown can cut power to critical equipment.",
    approach: [
      "Reviewed the existing UPS setup and identified the loads that needed two independent power sources.",
      "Supplied and installed static transfer switches that move the load from the primary source to the alternate source within milliseconds.",
      "Tested transfers under load so that switching between sources is seamless to the connected equipment."
    ],
    result: "Critical equipment now has a redundant power path. A UPS can fail or be taken down for maintenance without interrupting banking operations.",
    images: []
  },
  {
    id: "amb-cinemas-bangalore",
    title: "AMB Cinemas, Bengaluru",
    sector: "Cinema",
    location: "Gandhi Nagar, Bengaluru",
    facts: [["Equipment", "2 × 100 kVA, 2 × 20 kVA"], ["Total capacity", "240 kVA"]],
    summary: "A nine-screen multiplex on the site of the old Kapali theatre, with laser projection across every screen and South India's first Dolby Cinema. We delivered 240 kVA of online UPS protection.",
    challenge: "Barco laser projection on all nine screens, a 588-seat Dolby Cinema auditorium and shows from early morning to late night add up to a large, sensitive load that must never drop during a show.",
    approach: [
      "Calculated the combined load of the projection, sound and server equipment across all nine screens.",
      "Installed two 100 kVA online UPS systems for the main screen equipment and two 20 kVA units for supporting systems.",
      "Commissioned and load tested the full installation with battery banks sized to cover the changeover to the generator."
    ],
    result: "All nine screens, including the Dolby Cinema auditorium, stay on through power cuts and voltage fluctuations, keeping a full day of shows on schedule.",
    images: []
  },
  {
    id: "aaa-cinemas-vizag",
    title: "AAA Cinemas, Visakhapatnam",
    sector: "Cinema",
    location: "Inorbit Mall, Visakhapatnam",
    facts: [["Equipment", "2 × 100 kVA"], ["Total capacity", "200 kVA"]],
    summary: "An eight-screen multiplex with 4K laser projection, Dolby Atmos and one of the largest cinema LED screens in Andhra Pradesh. We delivered 200 kVA of online UPS protection.",
    challenge: "Eight screens of 4K laser projection, Dolby Atmos sound and a giant LED cinema screen create a heavy, sensitive load. Coastal Visakhapatnam also sees frequent supply fluctuations.",
    approach: [
      "Assessed the load of the projection, LED screen, sound and server equipment across all eight screens.",
      "Installed two 100 kVA online UPS systems, sharing the load so that each unit runs with headroom.",
      "Configured the battery banks, then installed, load tested and commissioned the system before opening day."
    ],
    result: "The multiplex runs on clean, stable power, protecting its projectors and LED screen from outages, surges and voltage dips.",
    images: []
  },
  {
    id: "allu-cinemas",
    title: "Allu Cinemas, Hyderabad",
    sector: "Cinema",
    location: "Kokapet, Hyderabad",
    facts: [["Equipment", "1 × 100 kVA, 3 × 30 kVA, 1 × 40 kVA"], ["Total capacity", "230 kVA"]],
    summary: "A four-screen premium multiplex with a 75-foot Dolby Cinema screen, reported as the largest in India. We delivered 230 kVA of online UPS protection across five units.",
    challenge: "The flagship Dolby Cinema auditorium, with Dolby Vision projection and a 64-channel Dolby Atmos system, sits alongside three more Barco 4K laser screens. Each auditorium needs dependable power of its own.",
    approach: [
      "Measured the load of each auditorium and of the shared building systems.",
      "Installed a 100 kVA online UPS for the Dolby Cinema auditorium, a 30 kVA unit for each of the three other screens, and a 40 kVA unit for shared systems.",
      "Commissioned and load tested each unit, so that a fault in one auditorium never affects the others."
    ],
    result: "Every screen, including the flagship Dolby Cinema, has its own protected power supply, and shows carry on through outages without interruption.",
    images: []
  },
  {
    id: "ga-capital-management",
    partner: "apple",
    title: "GA Capital Management",
    sector: "Financial services",
    badge: "80 MacBook Pro",
    location: "Begumpet, Hyderabad",
    facts: [["Equipment", "80 × Apple MacBook Pro"], ["Supplied through", "Apple direct partner, DPP pricing"]],
    summary: "A Hyderabad financial services firm equipping its team with Apple laptops. We supplied 80 MacBook Pro laptops at DPP pricing as an Apple direct partner.",
    challenge: "A growing advisory and capital-structuring team needed fast, reliable laptops for every member, delivered together, configured the same way and bought at a competitive price.",
    approach: [
      "Confirmed the MacBook Pro configuration the team needed for its day-to-day work.",
      "Sourced all 80 units through Ingram Micro at DPP pricing, as an Apple direct partner, so the firm paid partner prices across the whole order.",
      "Delivered the laptops to the Begumpet office and handed them over ready for the team to use."
    ],
    result: "The whole team now works on genuine MacBook Pro laptops with full Apple warranty, bought at partner pricing in a single order.",
    images: []
  },
  {
    id: "kvn-productions",
    partner: "apple",
    title: "KVN Productions",
    sector: "Film production",
    badge: "Apple editing suite",
    location: "",
    facts: [["Scope", "Complete Apple editing suite"], ["Supplied through", "Apple direct partner, DPP pricing"]],
    summary: "A film production and distribution house making films across Kannada, Telugu, Tamil, Hindi and Malayalam. We helped set up its entire editing suite on Apple.",
    challenge: "Film editing needs powerful machines, fast storage and a suite that works the same way for every editor. The production house needed the whole suite planned, supplied and working before post-production began.",
    approach: [
      "Planned the edit suite around the production house's editing workflow and the number of editors.",
      "Supplied the Apple workstations at DPP pricing as an Apple direct partner.",
      "Set up the entire editing suite and handed it over ready for post-production."
    ],
    result: "Editors work in a complete Apple editing suite built for film post-production, set up by the team that has supplied the film industry since our first day.",
    images: []
  }
];

/* =========================================================
   Nothing below needs editing for normal changes.
   ========================================================= */

const LOGO = '<img class="brand-logo" src="images/starlite-logo.png" alt="" width="48" height="40">';

/* Saved theme (dark is the default, like the reference site) */
(function () {
  try {
    var saved = localStorage.getItem("starlit-theme");
    if (saved === "light") document.documentElement.setAttribute("data-theme", "light");
  } catch (e) {}
})();

function el(tag, className, text) {
  var node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

/* ---------- Header and footer (same on every page) ---------- */
function buildHeader() {
  var host = document.getElementById("site-header");
  if (!host) return;
  var page = document.body.getAttribute("data-page");
  var chevron = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';
  var slug = document.body.getAttribute("data-slug");
  var aboutCurrent = (page === "about" || page === "partners");
  var servicesCurrent = (page === "service");
  var productsCurrent = (page === "delta" || page === "apple" || page === "amara-raja");
  var serviceItems = SITE.services.map(function (s) {
    return '<li><a href="' + s.slug + '.html"' + (slug === s.slug ? ' aria-current="page"' : "") + ">" + s.title + "</a></li>";
  }).join("");

  host.className = "site-header";
  host.innerHTML =
    '<div class="wrap bar">' +
      '<a class="brand" href="index.html" aria-label="' + SITE.name + ', home">' + LOGO + SITE.name + "</a>" +
      '<nav class="nav" id="nav" aria-label="Main">' +
        '<a href="index.html"' + (page === "home" ? ' aria-current="page"' : "") + ">Home</a>" +
        '<div class="has-menu">' +
          '<button class="menu-toggle" type="button" aria-haspopup="true" aria-expanded="false"' + (aboutCurrent ? ' data-current="true"' : "") + ">About Us" + chevron + "</button>" +
          '<ul class="menu">' +
            '<li><a href="about.html"' + (page === "about" ? ' aria-current="page"' : "") + ">Our story</a></li>" +
            '<li><a href="partners.html"' + (page === "partners" ? ' aria-current="page"' : "") + ">Partners</a></li>" +
          "</ul>" +
        "</div>" +
        '<div class="has-menu">' +
          '<button class="menu-toggle" type="button" aria-haspopup="true" aria-expanded="false"' + (servicesCurrent ? ' data-current="true"' : "") + ">Services" + chevron + "</button>" +
          '<ul class="menu">' + serviceItems + "</ul>" +
        "</div>" +
        '<div class="has-menu">' +
          '<button class="menu-toggle" type="button" aria-haspopup="true" aria-expanded="false"' + (productsCurrent ? ' data-current="true"' : "") + ">Products" + chevron + "</button>" +
          '<ul class="menu">' +
            '<li><a href="delta-ups.html"' + (page === "delta" ? ' aria-current="page"' : "") + ">Delta UPS</a></li>" +
            '<li><a href="amara-raja.html"' + (page === "amara-raja" ? ' aria-current="page"' : "") + ">Amara Raja batteries</a></li>" +
            '<li><a href="apple.html"' + (page === "apple" ? ' aria-current="page"' : "") + ">Apple</a></li>" +
          "</ul>" +
        "</div>" +
        '<a href="success-stories.html"' + (page === "stories" ? ' aria-current="page"' : "") + ">Success Stories</a>" +
        '<a href="contact.html"' + (page === "contact" ? ' aria-current="page"' : "") + ">Contact</a>" +
      "</nav>" +
      '<div class="tools">' +
        '<a class="btn-quote" href="contact.html">Get Quote</a>' +
        '<button class="theme-toggle" type="button" aria-label="Switch between light and dark theme">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
        "</button>" +
        '<button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
        "</button>" +
      "</div>" +
    "</div>";

  var navEl = host.querySelector("#nav");
  var navToggle = host.querySelector(".nav-toggle");
  navToggle.addEventListener("click", function () {
    var open = navEl.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* Dropdown menus: click to open (also opens on hover on desktop) */
  var groups = host.querySelectorAll(".has-menu");
  function closeAll(except) {
    groups.forEach(function (g) {
      if (g !== except) {
        g.classList.remove("open");
        g.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
      }
    });
  }
  groups.forEach(function (g) {
    var btn = g.querySelector(".menu-toggle");
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = g.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      closeAll(g);
    });
  });
  document.addEventListener("click", function () { closeAll(null); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeAll(null); });

  host.querySelector(".theme-toggle").addEventListener("click", function () {
    var root = document.documentElement;
    var light = root.getAttribute("data-theme") === "light";
    if (light) root.removeAttribute("data-theme"); else root.setAttribute("data-theme", "light");
    try { localStorage.setItem("starlit-theme", light ? "dark" : "light"); } catch (e) {}
  });
}

function buildFooter() {
  var host = document.getElementById("site-footer");
  if (!host) return;
  host.className = "site-footer";
  var services = SITE.services.map(function (s) { return '<li><a href="' + s.slug + '.html">' + s.title + "</a></li>"; }).join("") +
    '<li><a href="delta-ups.html">Delta UPS range</a></li><li><a href="amara-raja.html">Amara Raja batteries</a></li><li><a href="apple.html">Apple products</a></li>';
  host.innerHTML =
    '<div class="wrap">' +
      '<div class="footer-grid">' +
        '<div><a class="brand" href="index.html">' + LOGO + SITE.name + '</a><p class="footer-about">' + SITE.tagline + "</p></div>" +
        "<div><h3>Services</h3><ul>" + services + "</ul></div>" +
        '<div><h3>Company</h3><ul><li><a href="about.html">About us</a></li><li><a href="success-stories.html">Success stories</a></li><li><a href="partners.html">Partners</a></li><li><a href="contact.html">Contact</a></li></ul></div>' +
        "<div><h3>Contact</h3><ul>" +
          SITE.addresses.map(function (a) { return "<li><strong>" + a.label + ":</strong> " + a.text + "</li>"; }).join("") +
          '<li><a href="tel:' + SITE.phoneLink + '">' + SITE.phone + "</a></li>" +
          '<li><a href="mailto:' + SITE.email + '">' + SITE.email + "</a></li>" +
          (SITE.whatsapp ? '<li><a href="https://wa.me/' + SITE.whatsapp + '">Chat on WhatsApp</a></li>' : "") +
        "</ul></div>" +
      "</div>" +
      '<div class="copyright"><p>&copy; ' + new Date().getFullYear() + " " + SITE.name + '. All rights reserved.</p><a href="privacy.html">Privacy policy</a></div>' +
    "</div>";
}

/* ---------- Logo cards (falls back to the name if the image is missing) ---------- */
function logoCard(item) {
  var card = el("div", "logo-card");
  var img = document.createElement("img");
  img.src = item.logo;
  img.alt = item.name;
  img.loading = "lazy";
  img.addEventListener("error", function () {
    card.textContent = "";
    card.appendChild(el("span", "name", item.name));
  });
  card.appendChild(img);
  return card;
}

/* Big partner cards for the Partners page (logo box + name underneath) */
function buildPartnerCards(id) {
  var host = document.getElementById(id);
  if (!host) return;
  PARTNERS.forEach(function (p) {
    var card = el("article", "partner-card");
    var box = el("div", "partner-logo");
    var img = document.createElement("img");
    img.src = p.logo;
    img.alt = p.name;
    img.loading = "lazy";
    img.addEventListener("error", function () {
      box.textContent = "";
      box.appendChild(el("span", "name", p.name));
    });
    box.appendChild(img);
    card.appendChild(box);
    card.appendChild(el("p", "partner-name", p.name));
    if (p.note) card.appendChild(el("p", "partner-note", p.note));
    if (p.link) {
      var pl = el("a", "partner-link", p.linkText || "Learn more");
      pl.href = p.link;
      card.appendChild(pl);
    }
    host.appendChild(card);
  });
}

function buildPartners(id, extraClass) {
  var host = document.getElementById(id);
  if (!host) return;
  if (extraClass) host.classList.add(extraClass);
  PARTNERS.forEach(function (p) { host.appendChild(logoCard(p)); });
}

function buildServices() {
  var host = document.getElementById("service-cards");
  if (!host) return;
  SITE.services.forEach(function (s) {
    var card = el("article", "card");
    card.appendChild(el("h3", null, s.title));
    card.appendChild(el("p", null, s.text));
    var a = el("a", null, "Learn more");
    a.href = s.slug + ".html";
    card.appendChild(a);
    host.appendChild(card);
  });
}

/* ---------- Success stories ---------- */
function esc(t) {
  return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function storyCard(c) {
  var card = el("article", "cs-card");
  var total = (c.facts || []).filter(function (f) { return f[0] === "Total capacity"; })[0];
  var badge = c.badge || (total && total[1]);
  card.innerHTML =
    '<div class="cs-tags"><span class="pill small">' + esc(c.sector) + "</span>" + (badge ? '<span class="pill small">' + esc(badge) + "</span>" : "") + "</div>" +
    "<h3>" + esc(c.title) + "</h3>" +
    (c.location ? '<p class="cs-meta">' + esc(c.location) + "</p>" : "") +
    "<p>" + esc(c.summary) + "</p>" +
    '<a href="success-story.html?id=' + encodeURIComponent(c.id) + '">Read the story</a>';
  return card;
}

function buildStoryList(id, limit, partner) {
  var host = document.getElementById(id);
  if (!host) return;
  var list = STORIES.filter(function (c) { return !partner || c.partner === partner; });
  list.slice(0, limit || list.length).forEach(function (c) { host.appendChild(storyCard(c)); });
}

function buildStoryDetail() {
  var host = document.getElementById("cs-detail");
  if (!host) return;
  var id = "";
  try { id = new URLSearchParams(window.location.search).get("id") || ""; } catch (e) {}
  var c = STORIES.filter(function (x) { return x.id === id; })[0];
  if (!c) {
    host.innerHTML =
      '<section><div class="wrap"><div class="center-head"><h1 style="font-size:2.4rem">Story not found</h1>' +
      '<p>We could not find that project. See all of our success stories instead.</p></div>' +
      '<p style="text-align:center"><a class="btn" href="success-stories.html">All success stories</a></p></div></section>';
    return;
  }
  document.title = c.title + " | " + SITE.name;
  var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var chips = [["Location", c.location]].concat(c.facts || [])
    .filter(function (f) { return f[1]; })
    .map(function (f) { return '<span class="chip">' + esc(f[0]) + ": <strong>" + esc(f[1]) + "</strong></span>"; }).join("");
  var body = "";
  if (c.challenge) body += "<h2>The challenge</h2><p>" + esc(c.challenge) + "</p>";
  if (c.approach && c.approach.length) body += "<h2>How we helped</h2><ul>" + c.approach.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>";
  if (c.result) body += "<h2>The result</h2><p>" + esc(c.result) + "</p>";
  if (c.images && c.images.length) {
    body += '<div class="gallery">' + c.images.map(function (src) { return '<img src="' + esc(src) + '" alt="' + esc(c.title) + '" loading="lazy" onerror="this.remove()">'; }).join("") + "</div>";
  }
  host.innerHTML =
    '<div class="service-hero"><div class="wrap"><div class="inner">' +
      '<a class="back-link" href="success-stories.html">All success stories</a>' +
      '<span class="pill">' + esc(c.sector) + "</span>" +
      "<h1>" + esc(c.title) + "</h1>" +
      '<p class="lead">' + esc(c.summary) + "</p>" +
      '<div class="chips">' + chips + "</div>" +
      '<div class="hero-actions"><a class="btn-glow" href="contact.html">Discuss a similar project' + arrow + '</a><a class="btn-outline" href="success-stories.html">All success stories</a></div>' +
    "</div></div></div>" +
    '<section><div class="wrap"><div class="cs-body">' + body + "</div></div></section>" +
    '<section class="alt cta"><div class="wrap"><h2>Have a demanding project?</h2>' +
    "<p>Tell us about your site, load and timeline and we'll reply with a clear plan and quote. No obligation.</p>" +
    '<a class="btn" href="contact.html">Get a quote</a></div></section>';
}

/* ---------- Contact page ---------- */
function buildContact() {
  var details = document.getElementById("contact-details");
  if (details) {
    details.innerHTML =
      '<div><dt>Phone</dt><dd><a href="tel:' + SITE.phoneLink + '">' + SITE.phone + "</a></dd></div>" +
      '<div><dt>Email</dt><dd><a href="mailto:' + SITE.email + '">' + SITE.email + "</a></dd></div>" +
      SITE.addresses.map(function (a) { return "<div><dt>" + a.label + " office</dt><dd>" + a.text + "</dd></div>"; }).join("") +
      "<div><dt>Hours</dt><dd>" + SITE.hours.join("<br>") + "</dd></div>" +
      (SITE.whatsapp ? '<div><dt>WhatsApp</dt><dd><a href="https://wa.me/' + SITE.whatsapp + '">Chat with us on WhatsApp</a></dd></div>' : "");
  }
  var maps = document.getElementById("office-maps");
  if (maps) {
    SITE.addresses.forEach(function (a) {
      var fig = el("figure", "map");
      var q = encodeURIComponent(a.text);
      fig.innerHTML =
        '<iframe title="Map of our ' + esc(a.label) + ' office" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=' + q + '&output=embed"></iframe>' +
        '<figcaption><strong>' + esc(a.label) + '</strong> <a href="https://www.google.com/maps/search/?api=1&query=' + q + '">Get directions</a></figcaption>';
      maps.appendChild(fig);
    });
  }
  var topic = document.getElementById("topic");
  if (topic) {
    SITE.services.concat([{ title: "Delta UPS products" }, { title: "Amara Raja batteries" }, { title: "Apple products" }, { title: "Something else" }]).forEach(function (s) {
      var o = document.createElement("option");
      o.textContent = s.title;
      topic.appendChild(o);
    });
  }
  if (topic) {
    try {
      var wanted = new URLSearchParams(window.location.search).get("topic");
      if (wanted) topic.value = wanted;
    } catch (e) {}
  }
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim(), email = form.email.value.trim(), msg = form.message.value.trim();
      var phone = form.phone ? form.phone.value.trim() : "";
      if (!name || !email || !msg) { status.textContent = "Fill in your name, email address and message."; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { status.textContent = "Enter a valid email address so we can reply."; return; }
      var subject = "Website request: " + form.topic.value;
      var body = msg + "\n\nFrom: " + name + " (" + email + ")" + (phone ? "\nPhone: " + phone : "");
      var button = form.querySelector("button[type=submit]");

      if (!SITE.formKey) {
        status.textContent = "Opening your email app to send the request.";
        window.location.href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        return;
      }
      button.disabled = true;
      status.textContent = "Sending your request.";
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ access_key: SITE.formKey, subject: subject, from_name: SITE.name + " website", name: name, email: email, phone: phone, topic: form.topic.value, message: msg })
      }).then(function (r) { return r.json(); }).then(function (data) {
        if (!data.success) throw new Error(data.message || "failed");
        form.reset();
        status.textContent = "Request sent. We'll reply to " + email + " within one working day.";
      }).catch(function () {
        status.innerHTML = 'Your request was not sent. Call us on <a href="tel:' + SITE.phoneLink + '">' + SITE.phone + '</a> or email <a href="mailto:' + SITE.email + '">' + SITE.email + "</a>.";
      }).then(function () { button.disabled = false; });
    });
  }
}

/* ---------- Home page starfield ---------- */
function startSky() {
  var hero = document.getElementById("hero");
  var canvas = document.getElementById("sky");
  if (!hero || !canvas) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var w = 0, h = 0, stars = [], pointer = { x: -9999, y: -9999 }, raf = null;

  function resize() {
    var r = hero.getBoundingClientRect();
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = r.width; h = r.height;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var n = Math.max(40, Math.round(w * h / 8500));
    stars = [];
    for (var i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.3 + 0.35, p: Math.random() * 6.283,
        vx: (Math.random() - 0.5) * 0.1, vy: (Math.random() - 0.5) * 0.1
      });
    }
    draw(0);
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    var near = [];
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      if (!reduce) {
        s.x += s.vx; s.y += s.vy;
        if (s.x < 0) s.x = w; if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h; if (s.y > h) s.y = 0;
      }
      var a = reduce ? 0.8 : 0.55 + 0.45 * Math.sin(t * 0.0012 + s.p);
      var dx = s.x - pointer.x, dy = s.y - pointer.y;
      var lit = dx * dx + dy * dy < 22000;
      if (lit) near.push(s);
      ctx.beginPath();
      ctx.arc(s.x, s.y, lit ? s.r + 0.7 : s.r, 0, 6.283);
      ctx.fillStyle = lit ? "rgba(242,196,109," + Math.min(1, a + 0.3) + ")" : "rgba(235,238,255," + a + ")";
      ctx.fill();
    }
    ctx.lineWidth = 1;
    for (var m = 0; m < near.length; m++) {
      for (var k = m + 1; k < near.length; k++) {
        var ddx = near[m].x - near[k].x, ddy = near[m].y - near[k].y;
        var d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < 130) {
          ctx.strokeStyle = "rgba(242,196,109," + (0.55 * (1 - d / 130)) + ")";
          ctx.beginPath(); ctx.moveTo(near[m].x, near[m].y); ctx.lineTo(near[k].x, near[k].y); ctx.stroke();
        }
      }
    }
  }

  function loop(t) { draw(t); raf = requestAnimationFrame(loop); }

  hero.addEventListener("pointermove", function (e) {
    var r = hero.getBoundingClientRect();
    pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
    if (reduce) draw(0);
  });
  hero.addEventListener("pointerleave", function () { pointer.x = pointer.y = -9999; if (reduce) draw(0); });
  window.addEventListener("resize", resize);
  resize();
  if (!reduce) {
    raf = requestAnimationFrame(loop);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(loop);
    });
  }
}

/* ---------- WhatsApp button (shown when SITE.whatsapp is set) ---------- */
function buildWhatsApp() {
  if (!SITE.whatsapp) return;
  var a = el("a", "wa-float");
  a.href = "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent("Hello, I'd like to ask about a UPS.");
  a.setAttribute("aria-label", "Chat with us on WhatsApp");
  a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z"/></svg><span>WhatsApp</span>';
  document.body.appendChild(a);
}

/* ---------- Delta page: "which family fits" chooser ---------- */
function startChooser() {
  var host = document.getElementById("chooser");
  if (!host) return;
  var buttons = host.querySelectorAll("[data-pick]");
  var panels = host.querySelectorAll("[data-panel]");
  function pick(key) {
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-pick") === key ? "true" : "false"); });
    panels.forEach(function (p) { p.hidden = p.getAttribute("data-panel") !== key; });
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () { pick(b.getAttribute("data-pick")); }); });
  pick(buttons[1].getAttribute("data-pick"));
}

/* ---------- Start ---------- */
buildHeader();
buildFooter();
buildServices();
buildStoryList("story-preview", 3);
buildPartnerCards("partner-grid");
buildPartners("partner-preview", "wide");
buildContact();
buildStoryList("cs-list");
buildStoryList("apple-stories", 0, "apple");
buildStoryDetail();
startSky();
startChooser();
buildWhatsApp();
