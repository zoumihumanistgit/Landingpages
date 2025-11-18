const categoryData = {
  "SaaS Platform": {
    headline: "Scale your platform with focused onboarding",
    subhead:
      "Ship a modular landing page with persuasive hero copy, social proof, and feature highlights tailored to your audience.",
    features: [
      "Guided onboarding flows that convert trials to paid users",
      "Flexible pricing blocks with usage-based toggles",
      "Security and compliance callouts that build trust",
    ],
    metrics: [
      { label: "Faster onboarding", value: "-32% friction" },
      { label: "Activation lift", value: "+19% first week" },
      { label: "Retention", value: "+11 pts" },
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  "E-commerce": {
    headline: "Launch a visually rich storefront in seconds",
    subhead:
      "Pair curated imagery with conversion-ready storytelling to guide shoppers from discovery to checkout.",
    features: [
      "Editorial product grids with hover-ready states",
      "Drop-in social proof, reviews, and UGC modules",
      "Bundled offers, perks, and scarcity highlights",
    ],
    metrics: [
      { label: "Basket size", value: "+24% AOV" },
      { label: "Checkout", value: "-18% drop-off" },
      { label: "Engagement", value: "+2.3x time" },
    ],
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  "Healthcare": {
    headline: "Human-centered care experiences",
    subhead:
      "Build trust with calming visuals, credible testimonials, and simplified steps to book appointments.",
    features: [
      "Accessible typography with high contrast and calm palettes",
      "Appointment booking prompts that reduce friction",
      "Compliance-friendly layouts with space for disclosures",
    ],
    metrics: [
      { label: "No-show reduction", value: "-14%" },
      { label: "Patient satisfaction", value: "4.8/5" },
      { label: "Booking speed", value: "+21%" },
    ],
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
  },
  "Education": {
    headline: "Learning journeys that feel personalized",
    subhead:
      "Craft modern program pages with storytelling, outcomes, and mentor highlights that resonate with learners.",
    features: [
      "Curriculum modules with progress cues",
      "Instructor spotlights and alumni highlights",
      "Outcome-focused stats and certification pathways",
    ],
    metrics: [
      { label: "Completion", value: "+17%" },
      { label: "Applications", value: "+29%" },
      { label: "Referrals", value: "2.1x" },
    ],
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
  },
};

const segmentData = {
  "Enterprise Buyers": {
    badge: "Built for enterprise",
    cta: "Schedule a strategy call",
    secondaryCta: "Download the enterprise deck",
    testimonials: [
      {
        quote: "The tailored messaging and compliance-ready blocks made procurement painless.",
        name: "Ava Collins, VP Ops"
      },
      {
        quote: "We launched a vertical page in one sprint and hit our pipeline goal early.",
        name: "Raj Patel, Growth Lead"
      }
    ],
  },
  "Startups": {
    badge: "Fast-moving teams",
    cta: "Start your free trial",
    secondaryCta: "View live templates",
    testimonials: [
      {
        quote: "We spun up a landing page in hours and validated the market the same week.",
        name: "Dylan Park, Founder"
      },
      {
        quote: "The generator nails the balance of design and speed for lean teams.",
        name: "Leila Wong, Product"
      }
    ],
  },
  "Non-profits": {
    badge: "Mission-driven",
    cta: "Activate supporters",
    secondaryCta: "Download impact kit",
    testimonials: [
      {
        quote: "Donors immediately understood our mission and impact stories.",
        name: "Carmen Diaz, Development"
      },
      {
        quote: "The templates respect accessibility and made updating content simple.",
        name: "Lauren McKay, Programs"
      }
    ],
  },
  "SMBs": {
    badge: "Built for operators",
    cta: "Book a product tour",
    secondaryCta: "See pricing",
    testimonials: [
      {
        quote: "The page felt premium without a design team—we just picked our segment.",
        name: "Jordan Lee, COO"
      },
      {
        quote: "Our service offerings were clearer and form fills doubled in a week.",
        name: "Mara Singh, Marketing"
      }
    ],
  }
};

const paletteOptions = [
  ["#7c3aed", "#22d3ee", "#0f172a", "#f8fafc"],
  ["#0ea5e9", "#6366f1", "#0b1221", "#e2e8f0"],
  ["#f97316", "#22c55e", "#0f172a", "#f1f5f9"],
  ["#8b5cf6", "#ec4899", "#111827", "#f8fafc"],
];

const categorySelect = document.getElementById("categorySelect");
const segmentSelect = document.getElementById("segmentSelect");
const generateBtn = document.getElementById("generateBtn");
const preview = document.getElementById("landingPreview");
const palettePreview = document.getElementById("palettePreview");

function populateSelect(select, data) {
  Object.keys(data).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    select.appendChild(option);
  });
}

function renderPalette(colors) {
  palettePreview.innerHTML = "";
  colors.forEach((color) => {
    const swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.background = color;
    palettePreview.appendChild(swatch);
  });
}

function generatePalette() {
  return paletteOptions[Math.floor(Math.random() * paletteOptions.length)];
}

function buildLandingPage(categoryKey, segmentKey) {
  const category = categoryData[categoryKey];
  const segment = segmentData[segmentKey];
  if (!category || !segment) return;

  const palette = generatePalette();
  const [accent, accent2, ink, paper] = palette;
  const accentSoft = `${accent}22`;
  const accent2Soft = `${accent2}22`;
  const inkSoft = `${ink}cc`;
  renderPalette(palette);

  preview.innerHTML = `
    <article
      class="landing-page"
      style="--lp-accent:${accent}; --lp-accent-2:${accent2}; --lp-accent-soft:${accentSoft}; --lp-accent-2-soft:${accent2Soft}; --lp-ink:${ink}; --lp-ink-soft:${inkSoft}; --lp-paper:${paper};"
    >
      <section class="hero">
        <div class="hero-content">
          <div>
            <span class="badge">${segment.badge}</span>
            <h1>${category.headline}</h1>
            <p>${category.subhead}</p>
            <div class="cta-group">
              <button class="button primary">${segment.cta}</button>
              <button class="button secondary">${segment.secondaryCta}</button>
            </div>
            <div class="metrics">
              ${category.metrics
                .map(
                  (metric) => `
                    <div class="metric">
                      <strong>${metric.value}</strong>
                      <span>${metric.label}</span>
                    </div>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="hero-image">
            <img src="${category.image}" alt="${categoryKey} visual" />
          </div>
        </div>
      </section>
      <section class="section features">
        <div class="section-header">
          <div>
            <p class="eyebrow" style="color:${accent};">Feature suite</p>
            <h3>${categoryKey} for ${segmentKey}</h3>
          </div>
          <p style="color:var(--lp-ink-soft);">Swap modules, adjust copy, and publish instantly.</p>
        </div>
        <div class="grid">
          ${category.features
            .map(
              (feature, index) => `
                <div class="card-feature">
                  <h4>0${index + 1}</h4>
                  <p>${feature}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
      <section class="section proof">
        <div class="section-header">
          <div>
            <p class="eyebrow" style="color:${accent2};">Proof points</p>
            <h3 style="color:var(--lp-ink);">Trusted by teams like yours</h3>
          </div>
          <p style="color:var(--lp-ink-soft);">Lift confidence with social proof and measurable outcomes.</p>
        </div>
        <div class="testimonials">
          ${segment.testimonials
            .map(
              (testimonial) => `
                <div class="testimonial">
                  <p>“${testimonial.quote}”</p>
                  <strong>${testimonial.name}</strong>
                </div>
              `
            )
            .join("")}
        </div>
      </section>
    </article>
  `;
}

populateSelect(categorySelect, categoryData);
populateSelect(segmentSelect, segmentData);
renderPalette(paletteOptions[0]);

generateBtn.addEventListener("click", () => {
  buildLandingPage(categorySelect.value, segmentSelect.value);
});

buildLandingPage(Object.keys(categoryData)[0], Object.keys(segmentData)[0]);
