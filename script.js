/* =========================================================
   Starlite Computer Services - script
   EDIT THE FOUR BLOCKS AT THE TOP (SITE, CLIENT_SECTORS, PARTNERS, CASE_STUDIES).
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
    { slug: "ups-rental", title: "UPS rental and backup units", text: "Temporary UPS units for events, shutdowns, upgrades and short-term projects." }
  ]
};

/* ---------- 2. Clients ----------
   Each client: name (shown if the logo file is missing) and logo (file path).
   TO ADD A CLIENT: copy one line, change the name, and save the logo into
   images/clients/ using the same file name you write here.
   Sections with an empty list show a "coming soon" note. */
const CLIENT_SECTORS = [
  {
    title: "Hospitality & Entertainment",
    icon: "film",
    clients: [
      { name: "Red Rhino", logo: "images/clients/red-rhino.png" },          // logo not added yet
      { name: "Macaw", logo: "images/clients/macaw.png" },
      { name: "Broadway", logo: "images/clients/broadway.png" },            // logo not added yet
      { name: "Asian Cinemas", logo: "images/clients/asian-cinemas.png" },
      { name: "Suresh Productions", logo: "images/clients/suresh-productions.png" },
      { name: "Mythri Movie Makers", logo: "images/clients/mythri-movie-makers.png" },
      { name: "V Celluloid", logo: "images/clients/v-celluloid.png" },
      { name: "SVC Cinemas", logo: "images/clients/svc-cinemas.png" }       // logo not added yet
    ]
  },
  {
    title: "Government Bodies",
    icon: "gov",
    clients: [
      { name: "AP Police", logo: "images/clients/ap-police.png" },
      { name: "Telangana State Police", logo: "images/clients/telangana-state-police.png" },
      { name: "DRDO", logo: "images/clients/drdo.png" },
      { name: "APMDC", logo: "images/clients/apmdc.png" }
    ]
  },
  {
    title: "Healthcare",
    icon: "health",
    clients: [
      { name: "Tesla Unipath Diagnostics", logo: "images/clients/tesla-labs.png" },
      { name: "Medicover", logo: "images/clients/medicover.png" },
      { name: "Pulse Hospital", logo: "images/clients/pulse-hospitals.png" }
    ]
  },
  {
    title: "Pharmaceuticals",
    icon: "pill",
    clients: [
      { name: "MSN", logo: "images/clients/msn.png" },
      { name: "Vimta", logo: "images/clients/vimta.png" }
    ]
  }
];

/* ---------- 3. Partners ----------
   Save official logo files in images/partners/ (use each company's brand
   guidelines). Until the files exist, the name shows instead. */
const PARTNERS = [
  { name: "Apple", logo: "images/partners/apple.png" },
  { name: "Delta Electronics", logo: "images/partners/delta-electronics.png", note: "Authorised partner", link: "delta-ups.html", linkText: "See the Delta UPS range" },
  { name: "Amara Raja", logo: "images/partners/amara-raja.png" }
];


/* ---------- 4. Case studies ----------
   Each entry becomes a card on case-studies.html AND its own full page
   (case-study.html?id=your-id). To add a project: copy the whole { ... } block,
   give it a new unique id (lowercase, dashes, no spaces), fill in your real
   details, and delete the sample. Fields you leave empty ("" or []) are skipped.
   images: put photos in images/projects/ and list them like
   ["images/projects/site-1.jpg", "images/projects/site-2.jpg"]. */
const CASE_STUDIES = [
  {
    id: "sample-project",
    sample: true,                       // delete this line for a real project
    title: "Sample project: replace with your project name",
    client: "Client name",              // or "Confidential"
    sector: "Sector",                   // e.g. Government, Healthcare, Pharmaceuticals
    location: "City, State",
    year: "2026",
    facts: [["Scope", "What you delivered"], ["Scale", "Capacity, sites or size"]],
    summary: "Write one or two sentences describing the project. This appears on the Case Studies page and at the top of the project page.",
    challenge: "Describe the problem or requirement the client had: what made this project complex or demanding.",
    approach: [
      "Describe the first major step of the work.",
      "Describe the next step, including any special equipment, design or planning.",
      "Describe how it was installed, tested and handed over."
    ],
    result: "Describe the outcome: what now works, what was achieved, and anything measurable you can state accurately.",
    images: []
  }
];

/* =========================================================
   Nothing below needs editing for normal changes.
   ========================================================= */

const ICONS = {
  film: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
  gov: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-5 9 5M5 9v9M9.5 9v9M14.5 9v9M19 9v9M3 21h18"/></svg>',
  health: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  pill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 20.5a5 5 0 0 1-7-7l9-9a5 5 0 0 1 7 7z"/><path d="M8.5 8.5l7 7"/></svg>'
};
const STAR = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 2 C17.2 10.5 21.5 14.8 30 16 C21.5 17.2 17.2 21.5 16 30 C14.8 21.5 10.5 17.2 2 16 C10.5 14.8 14.8 10.5 16 2 Z" fill="#f2c46d"/></svg>';

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
  var aboutCurrent = (page === "about" || page === "clients" || page === "partners");
  var servicesCurrent = (page === "service");
  var showCases = hasRealCaseStudies();
  var serviceItems = SITE.services.map(function (s) {
    return '<li><a href="' + s.slug + '.html"' + (slug === s.slug ? ' aria-current="page"' : "") + ">" + s.title + "</a></li>";
  }).join("");

  host.className = "site-header";
  host.innerHTML =
    '<div class="wrap bar">' +
      '<a class="brand" href="index.html" aria-label="' + SITE.name + ', home">' + STAR + SITE.name + "</a>" +
      '<nav class="nav" id="nav" aria-label="Main">' +
        '<a href="index.html"' + (page === "home" ? ' aria-current="page"' : "") + ">Home</a>" +
        '<div class="has-menu">' +
          '<button class="menu-toggle" type="button" aria-haspopup="true" aria-expanded="false"' + (aboutCurrent ? ' data-current="true"' : "") + ">About Us" + chevron + "</button>" +
          '<ul class="menu">' +
            '<li><a href="about.html"' + (page === "about" ? ' aria-current="page"' : "") + ">Our story</a></li>" +
            '<li><a href="clients.html"' + (page === "clients" ? ' aria-current="page"' : "") + ">Our clients</a></li>" +
            '<li><a href="partners.html"' + (page === "partners" ? ' aria-current="page"' : "") + ">Partners</a></li>" +
          "</ul>" +
        "</div>" +
        '<div class="has-menu">' +
          '<button class="menu-toggle" type="button" aria-haspopup="true" aria-expanded="false"' + (servicesCurrent ? ' data-current="true"' : "") + ">Services" + chevron + "</button>" +
          '<ul class="menu">' + serviceItems + "</ul>" +
        "</div>" +
        '<a href="delta-ups.html"' + (page === "delta" ? ' aria-current="page"' : "") + ">Delta UPS</a>" +
        (showCases ? '<a href="case-studies.html"' + (page === "case-studies" ? ' aria-current="page"' : "") + ">Case Studies</a>" : "") +
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
    '<li><a href="delta-ups.html">Delta UPS range</a></li>';
  host.innerHTML =
    '<div class="wrap">' +
      '<div class="footer-grid">' +
        '<div><a class="brand" href="index.html">' + STAR + SITE.name + '</a><p class="footer-about">' + SITE.tagline + "</p></div>" +
        "<div><h3>Services</h3><ul>" + services + "</ul></div>" +
        '<div><h3>Company</h3><ul><li><a href="about.html">About us</a></li><li><a href="clients.html">Our clients</a></li>' + (hasRealCaseStudies() ? '<li><a href="case-studies.html">Case studies</a></li>' : "") + '<li><a href="partners.html">Partners</a></li><li><a href="contact.html">Contact</a></li></ul></div>' +
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

function buildClients() {
  var host = document.getElementById("client-sectors");
  if (!host) return;
  CLIENT_SECTORS.forEach(function (sector) {
    var section = el("section", "sector");
    var head = el("div", "sector-head");
    var icon = el("span", "sector-icon");
    icon.innerHTML = ICONS[sector.icon] || "";
    head.appendChild(icon);
    head.appendChild(el("h2", null, sector.title));
    section.appendChild(head);
    if (sector.clients.length) {
      var grid = el("div", "logo-grid");
      sector.clients.forEach(function (c) { grid.appendChild(logoCard(c)); });
      section.appendChild(grid);
    } else {
      section.appendChild(el("p", "empty-note", "Clients in this sector will be listed here soon."));
    }
    host.appendChild(section);
  });
}

function buildClientPreview() {
  var host = document.getElementById("client-preview");
  if (!host) return;
  var all = [];
  CLIENT_SECTORS.forEach(function (s) { all = all.concat(s.clients); });
  all.slice(0, 6).forEach(function (c) { host.appendChild(logoCard(c)); });
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

/* ---------- Case studies ----------
   Sample entries are hidden from visitors. To preview them, add ?preview to the URL. */
function hasRealCaseStudies() {
  return CASE_STUDIES.some(function (c) { return !c.sample; });
}
function visibleCaseStudies() {
  var preview = /[?&]preview\b/.test(window.location.search);
  return CASE_STUDIES.filter(function (c) { return preview || !c.sample; });
}
function esc(t) {
  return String(t == null ? "" : t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildCaseStudyList() {
  var host = document.getElementById("cs-list");
  if (!host) return;
  var list = visibleCaseStudies();
  if (!list.length) {
    host.appendChild(el("p", "empty-note", "Case studies will be published here soon. In the meantime, see who we work with on our clients page."));
    return;
  }
  list.forEach(function (c) {
    var card = el("article", "cs-card");
    var meta = [c.client, c.location, c.year].filter(Boolean).join(" \u2022 ");
    card.innerHTML =
      '<div class="cs-tags"><span class="pill small">' + esc(c.sector) + "</span>" + (c.sample ? '<span class="pill small sample">Sample</span>' : "") + "</div>" +
      "<h3>" + esc(c.title) + "</h3>" +
      '<p class="cs-meta">' + esc(meta) + "</p>" +
      "<p>" + esc(c.summary) + "</p>" +
      '<a href="case-study.html?id=' + encodeURIComponent(c.id) + '">Read the case study</a>';
    host.appendChild(card);
  });
}

function buildCaseStudyDetail() {
  var host = document.getElementById("cs-detail");
  if (!host) return;
  var id = "";
  try { id = new URLSearchParams(window.location.search).get("id") || ""; } catch (e) {}
  var c = visibleCaseStudies().filter(function (x) { return x.id === id; })[0];
  if (!c) {
    host.innerHTML =
      '<section><div class="wrap"><div class="center-head"><h1 style="font-size:2.4rem">Case study not found</h1>' +
      '<p>We could not find that project. See all of our case studies instead.</p></div>' +
      '<p style="text-align:center"><a class="btn" href="case-studies.html">All case studies</a></p></div></section>';
    return;
  }
  document.title = c.title + " | " + SITE.name;
  var arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var chips = [["Client", c.client], ["Location", c.location], ["Year", c.year]].concat(c.facts || [])
    .filter(function (f) { return f[1]; })
    .map(function (f) { return '<span class="chip">' + esc(f[0]) + ": <strong>" + esc(f[1]) + "</strong></span>"; }).join("");
  var body = "";
  if (c.sample) body += '<p class="sample-note">This is a sample page. Replace it with your real project in script.js.</p>';
  if (c.challenge) body += "<h2>The challenge</h2><p>" + esc(c.challenge) + "</p>";
  if (c.approach && c.approach.length) body += "<h2>What we did</h2><ul>" + c.approach.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ul>";
  if (c.result) body += "<h2>The result</h2><p>" + esc(c.result) + "</p>";
  if (c.images && c.images.length) {
    body += '<div class="gallery">' + c.images.map(function (src) { return '<img src="' + esc(src) + '" alt="' + esc(c.title) + '" loading="lazy" onerror="this.remove()">'; }).join("") + "</div>";
  }
  host.innerHTML =
    '<div class="service-hero"><div class="wrap"><div class="inner">' +
      '<a class="back-link" href="case-studies.html">All case studies</a>' +
      '<span class="pill">' + esc(c.sector) + "</span>" +
      "<h1>" + esc(c.title) + "</h1>" +
      '<p class="lead">' + esc(c.summary) + "</p>" +
      '<div class="chips">' + chips + "</div>" +
      '<div class="hero-actions"><a class="btn-glow" href="contact.html">Discuss a similar project' + arrow + '</a><a class="btn-outline" href="case-studies.html">All case studies</a></div>' +
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
    SITE.services.concat([{ title: "Delta UPS products" }, { title: "Something else" }]).forEach(function (s) {
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
buildClients();
buildClientPreview();
buildPartnerCards("partner-grid");
buildPartners("partner-preview", "wide");
buildContact();
buildCaseStudyList();
buildCaseStudyDetail();
startSky();
startChooser();
buildWhatsApp();
