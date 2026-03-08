// ─────────────────────────────────────────────────────────
//  Oriflame Journey Map — Supabase Seed Script
//  Run: node seed.js
//  Requires: npm install @supabase/supabase-js dotenv
// ─────────────────────────────────────────────────────────
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// ─── DATA ────────────────────────────────────────────────

const KEY_TAKEAWAYS = [
  'Traffic is growing but engagement and retention are weakening',
  'Value is present but users don\'t always clearly understand or feel the benefit',
  'Trust is disrupted at sensitive moments',
  'Loyalty is not strong enough to drive repeat purchase',
];

const SENTIMENT = [
  { label: 'Curious',    score: 72, desc: 'Interest peaks on arrival but brand clarity is low' },
  { label: 'Uncertain',  score: 28, desc: 'Hesitation about what joining actually means' },
  { label: 'Engaged',    score: 78, desc: 'Browsing works, but savings feel passive' },
  { label: 'Frustrated', score: 12, desc: 'Checkout friction creates distrust at the worst moment' },
  { label: 'Relieved',   score: 58, desc: 'Delivery resolves concern — or reinforces it' },
  { label: 'Disengaged', score: 20, desc: 'No compelling reason surfaces to come back' },
];

const STAGES = [
  {
    id: 1, icon: 'eye', short: 'Awareness',
    name: 'Awareness & Discovery',
    objective: 'Establish trust and explain the brand clearly.',
    steps: [
      'Encounters Oriflame via social, word of mouth, or shared link',
      'Visits website directly',
      'Views homepage',
      'Assesses products/promotions before deciding whether to register',
    ],
    kpis: [
      { value: '+6.5%',  label: 'Traffic (yoy)',             note: 'More people are arriving, but they are not staying or coming back. This suggests a first-impression issue, not an acquisition issue.' },
      { value: '-5.8%',  label: 'Sessions',                  note: '' },
      { value: '95%',    label: 'of visitors are new users', note: 'Web users rarely return after their first purchase.' },
      { value: '76%',    label: 'of global traffic is mobile', note: '' },
    ],
    drivers: [
      { source: 'Lumo', title: 'Product-led interest', body: 'People often arrive because of a specific product (e.g. Tender Care, perfumes), not because of the brand.', impact: 'Interest starts at product level.' },
    ],
    barriers: [
      { source: 'Kantar', title: 'Low Brand Recognition in Growth Markets', body: 'The brand is largely unknown and needs explaining.', impact: 'People have to work out what it is before they can decide if they like it.' },
      { source: 'Kantar', title: 'First impression feels functional', body: 'The brand feels practical rather than aspirational.', impact: "It doesn't immediately stand out in a crowded beauty market." },
      { source: 'Kantar', title: 'Dated Perception', body: 'Research notes Oriflame is perceived as dated in several markets.', impact: 'Reduced appeal in a digitally-led beauty category.' },
    ],
    challenge: { title: 'First impressions require too much explanation', body: 'New visitors have to:\nWork out what the brand is\nUnderstand how it works\nDecide if it feels trustworthy\nWhen that effort is too high, people leave.', note: 'Traffic is growing, but engagement is falling.' },
    touchpoints: ['Social media (Instagram, Facebook, TikTok)', 'Campaign Banners', 'Shared links or promo codes from Brand Partners', 'Website (direct walk-in)', 'Offline catalogue in some markets'],
    images: ['assets/journey/s1_1.png', 'assets/journey/s1_2.png', 'assets/journey/s1_3.png'],
  },
  {
    id: 2, icon: 'users', short: 'Pre-Reg',
    name: 'Pre-Registration Considerations',
    objective: 'Remove doubt about what joining means.',
    steps: [
      'Lands on Join / Benefits Zone page',
      'Reads "Beauty Community" framing',
      'Watches brand video (optional)',
      'Reviews benefits (delivery, cashback, referrals)',
      'Decides whether to proceed',
    ],
    kpis: [],
    drivers: [
      { source: 'Kantar, Lumo', title: 'Clear financial benefits', body: 'Free delivery threshold, cashback and referral savings are visible.', impact: "There's a clear reason to join." },
    ],
    barriers: [
      { source: 'Kantar, Lumo', title: 'Unclear separation between buying and selling', body: 'Research shows users pause to ask:\nAm I signing up to sell?\nIs this free?\nIs there an obligation?', impact: 'Hesitation at the point of account creation.' },
      { source: 'Kantar, Lumo', title: 'Too many membership terms', body: 'Community, Club, Benefits Zone, Premium Zone.', impact: 'People need to interpret what each one means.' },
      { source: 'Kantar, Lumo', title: 'Naming and terminology are inconsistent', body: 'Different terms are used for the same actions or sections (e.g. Register, Sign Up, VIP Customer, Log in).', impact: 'Inconsistent terminology reduces clarity and erodes user confidence.' },
      { source: 'Kantar, Lumo', title: 'Registration flow messaging creates confusion', body: 'Messaging suggests users have a choice about joining as a VIP customer even though registration is required to complete a purchase.', impact: 'Creates uncertainty about whether joining is optional or mandatory.' },
    ],
    challenge: { title: "People aren't always sure what they're signing up for", body: "Before creating an account, users want to know:\nIs this just a shopping account?\nAm I committing to anything?\nWill someone contact me?\nIf those answers aren't obvious, they hesitate.", note: null },
    touchpoints: ['Website (Landing / Registration Pages)', 'Social Media (Ongoing)', 'Shared links or email from Brand Partners'],
    images: ['assets/journey/s2_1.png', 'assets/journey/s2_2.png', 'assets/journey/s2_3.png'],
  },
  {
    id: 3, icon: 'compass', short: 'Browsing',
    name: 'Browsing and Discovery',
    objective: 'Make products easy to find and easy to choose.',
    steps: [
      'Explore navigation',
      'Use filters, search or browse categories',
      'Compare products',
      'Look at reviews and ratings',
      'Check images and descriptions',
      'View associated offers',
      'Decide whether to add to basket',
    ],
    kpis: [
      { value: '-12.6%',  label: 'decline in search volume',                                note: "Existing members convert via search — new users don't." },
      { value: '+63.7%',  label: 'ATC events from search',                                  note: 'Data suggests that this is driven by existing members.' },
      { value: '31%',     label: 'of total web users visit product pages',                  note: '' },
      { value: '11.91%',  label: 'of sessions began specifically after interacting with a search', note: "This indicates that the user's primary intent upon arriving was likely to find specific content, products, or information." },
    ],
    drivers: [
      { source: 'VOC, Lumo', title: 'Clear categories and search tools', body: 'Filters and search are available and considered simple to use.', impact: 'The basics are in place to support product exploration.' },
    ],
    barriers: [
      { source: 'Kantar, Lumo', title: 'Printed catalogue signals "old Oriflame"', body: 'Focus on the printed catalogue (e-catalogue) is described as "mostly ignored" by new markets and can anchor the brand in the past.', impact: 'Legacy formats may reinforce a dated perception.' },
      { source: 'Kantar, Lumo', title: 'Product benefits are not clear fast enough', body: 'Previous research notes that product details are easy to find, but the explanation of benefits is not always present.', impact: 'Functional information is there. Persuasive information is weaker.' },
      { source: 'Kantar, Lumo', title: 'Savings feel passive', body: 'The savings are not amplified clearly (monetary saving + %), offers feel passive rather than urgent.', impact: 'The site shows deals — it is not clear whether it is meaningful.' },
      { source: 'Kantar, Lumo', title: 'Offers are not consistently actionable', body: 'Some promotions shown on banners or listing pages cannot be accessed or redeemed from the product page.', impact: 'Creates confusion and breaks momentum.' },
    ],
    challenge: { title: "Browsing doesn't consistently turn into buying", body: "People can explore products.\nBut pricing, stock, membership language and benefit clarity create hesitation before checkout.", note: null },
    touchpoints: ['Website (Product Pages, Search, Filters)', 'eCatalogue', 'Printed Catalogue', 'Social Media (Ambient, ongoing)', 'Brand Partners (informal where relationships exist)'],
    images: ['assets/journey/s3_1.png', 'assets/journey/s3_2.png', 'assets/journey/s3_3.png'],
  },
  {
    id: 4, icon: 'shopping-bag', short: 'Purchase',
    name: 'Purchase and Checkout',
    objective: 'Make checkout clear and frictionless.',
    steps: [
      'Build Basket',
      'Sign In / Register',
      'Review Offers and Add on\'s',
      'Specify Delivery Information',
    ],
    kpis: [
      { value: '~86%',            label: 'of users never reach Add To Basket',       note: 'The biggest drop off is before purchase intent is signalled' },
      { value: '-0.6% / +6.5%',   label: 'YoY Purchases (€7.9M) / YoY Traffic',     note: 'More visitors ≠ more buyers' },
      { value: '-26% (-€11.24)',   label: 'Mobile AOV compared to desktop',           note: 'This equates to €20–40M suppressed annual revenue.' },
      { value: '4.8%',            label: 'of total web users make a purchase',       note: '' },
    ],
    drivers: [
      { source: 'Kantar, Lumo', title: 'Functional familiar checkout', body: 'Checkout is structured in expected steps (basket → delivery → payment → place order) with mostly expected options.', impact: 'The flow is recognisable and technically workable.' },
    ],
    barriers: [
      { source: 'Kantar, Lumo', title: 'Items appear in the basket without clear intent', body: 'Additional items (e.g. catalogues) can be added automatically, sometimes for a fee.', impact: 'Creates suspicion or confusion at checkout.' },
      { source: 'Kantar, Lumo', title: 'Lack of explicit checkout button', body: 'On the basket, there is no explicit "Proceed to Checkout".', impact: 'Reframes checkout as account acquisition rather than transactional.' },
      { source: 'Kantar, Lumo', title: 'Cumbersome to progress', body: 'After registration, the customer is sent back to the basket.\nAfter interacting with Offer PDPs, the customer is sent back to the basket.', impact: 'Checkout can appear clunky and the lack of progress can be frustrating.' },
      { source: 'Kantar, Lumo', title: 'Phone verification appears mandatory', body: 'The presentation suggests phone verification is required to proceed. Also, the expected phone number format is not region specific.', impact: 'Adds perceived friction and may stop some users and may cause validation errors and slow form completion.' },
    ],
    challenge: { title: 'Small surprises at checkout create disproportionate distrust', body: 'Checkout is where trust is most fragile.\nEven minor uncertainty — price shifts, extra items, recurring language, verification prompts — can cause abandonment.', note: null },
    touchpoints: ['Website (Product Pages, Search, Filters)', 'eCatalogue', 'Printed Catalogue', 'Social Media (Ambient, ongoing)', 'Brand Partners (informal where relationships exist)'],
    images: ['assets/journey/s4_1.png', 'assets/journey/s4_2.png', 'assets/journey/s4_3.png'],
  },
  {
    id: 5, icon: 'package', short: 'Delivery',
    name: 'Delivery & Unboxing',
    objective: 'Deliver reliably and communicate clearly.',
    steps: [
      'Receive Confirmation Email',
      'Monitor Delivery Updates',
      'Receive Parcel',
      'Unbox Products / Check Content',
    ],
    kpis: [],
    drivers: [
      { source: 'Kantar, Lumo', title: 'Proactive delivery notifications', body: 'Email, SMS and courier updates are used with some deliveries beating the stated timelines.', impact: 'Keeps customers informed during transit.' },
    ],
    barriers: [
      { source: 'Lumo',         title: 'Slow dispatch times',            body: 'Orders are not always shipped quickly.',                                      impact: 'Creates frustration before the parcel even moves.' },
      { source: 'Kantar, Lumo', title: 'High delivery costs',            body: 'When free delivery is not achieved, delivery pricing is perceived as expensive.', impact: 'Reduces perceived value of the purchase.' },
      { source: 'Kantar, Lumo', title: 'False "delivery attempt" claims', body: 'Reports of inaccurate courier delivery claims.',                              impact: 'Creates anger and distrust toward the brand (even if the fault of the courier).' },
    ],
    challenge: { title: 'Delivery issues undo the goodwill built earlier in the journey', body: 'Even if browsing and checkout go smoothly,\ndelays, damaged goods, or poor communication can redefine the entire experience.\nDelivery is the first real test of the brand promise.', note: null },
    touchpoints: ['Email', 'SMS', 'Courier Notifications'],
    images: ['assets/journey/s5_1.png', 'assets/journey/s5_2.png', 'assets/journey/s5_3.png'],
  },
  {
    id: 6, icon: 'heart', short: 'Loyalty',
    name: 'Post Purchase & Loyalty',
    objective: 'Give customers a reason to return and share.',
    steps: [
      'Uses Products',
      'Sees Results',
      'Interacts With Community (optional)',
      'Considers Next Purchase',
      'Shares with Network',
      'Considers Becoming Brand Partner',
    ],
    kpis: [],
    drivers: [
      { source: 'IBM, Lumo', title: 'Visible results', body: 'Customers have reported seeing results with some Oriflame products making it into the daily routine.', impact: 'Reinforces belief in product effectiveness.' },
    ],
    barriers: [
      { source: 'Kantar, Lumo', title: 'Loyalty progress is not visible',                body: 'Users do not clearly understand how rewards accumulate.',                      impact: 'Reduces motivation to purchase again.' },
      { source: 'IBM, Lumo',    title: 'Members lose motivation without Brand Partner contact', body: 'When connection to a Brand Partner weakens, purchase motivation drops.', impact: 'Retention depends on relationship, not just platform.' },
      { source: 'IBM, Lumo',    title: 'Complicated sharing mechanic',                    body: 'User feedback has shown low understanding of the "Sharing Bonus".',            impact: 'The reasons to share are not clear.' },
    ],
    challenge: { title: "After delivery, there isn't a strong reason to come back", body: "If:\nLoyalty progress is unclear\nBenefits feel passive\nPromotions slow down\nCommunity relevance is weak as BP focused.\nThen the relationship resets after each order.\nRepeat purchase becomes incidental, not intentional.", note: null },
    touchpoints: ['Actual Product', 'Community Forums / Events'],
    images: ['assets/journey/s6_1.png', 'assets/journey/s6_2.png', 'assets/journey/s6_3.png'],
  },
];

// ─── SEED ────────────────────────────────────────────────

async function seed() {
  console.log('🌱 Starting seed...\n');

  // 1. Journey map
  const { data: map, error: mapErr } = await supabase
    .from('journey_maps')
    .insert({ title: 'Members Digital Experience Map – Oriflame' })
    .select()
    .single();
  if (mapErr) throw new Error(`journey_maps: ${mapErr.message}`);
  console.log(`✅ journey_map created: ${map.id}`);

  // 2. Key takeaways
  const { error: ktErr } = await supabase.from('key_takeaways').insert(
    KEY_TAKEAWAYS.map((text, i) => ({ journey_map_id: map.id, text, sort_order: i }))
  );
  if (ktErr) throw new Error(`key_takeaways: ${ktErr.message}`);
  console.log(`✅ key_takeaways inserted (${KEY_TAKEAWAYS.length})`);

  // 3. Stages + all nested data
  for (const [i, s] of STAGES.entries()) {
    const sent = SENTIMENT[i];

    const { data: stage, error: stageErr } = await supabase
      .from('stages')
      .insert({
        journey_map_id:  map.id,
        stage_number:    s.id,
        icon:            s.icon,
        short_name:      s.short,
        name:            s.name,
        objective:       s.objective,
        sentiment_label: sent.label,
        sentiment_score: sent.score,
        sentiment_desc:  sent.desc,
        sort_order:      i,
      })
      .select()
      .single();
    if (stageErr) throw new Error(`stages[${i}]: ${stageErr.message}`);
    console.log(`  ✅ Stage ${s.id}: ${s.name}`);

    const sid = stage.id;

    // Steps
    if (s.steps.length) {
      const { error } = await supabase.from('stage_steps').insert(
        s.steps.map((text, j) => ({ stage_id: sid, text, sort_order: j }))
      );
      if (error) throw new Error(`stage_steps[${i}]: ${error.message}`);
    }

    // KPIs
    if (s.kpis.length) {
      const { error } = await supabase.from('stage_kpis').insert(
        s.kpis.map((k, j) => ({ stage_id: sid, value: k.value, label: k.label, note: k.note || null, sort_order: j }))
      );
      if (error) throw new Error(`stage_kpis[${i}]: ${error.message}`);
    }

    // Drivers
    if (s.drivers.length) {
      const { error } = await supabase.from('stage_evidence').insert(
        s.drivers.map((d, j) => ({ stage_id: sid, type: 'driver', source: d.source, title: d.title, body: d.body, impact: d.impact, sort_order: j }))
      );
      if (error) throw new Error(`drivers[${i}]: ${error.message}`);
    }

    // Barriers
    if (s.barriers.length) {
      const { error } = await supabase.from('stage_evidence').insert(
        s.barriers.map((b, j) => ({ stage_id: sid, type: 'barrier', source: b.source, title: b.title, body: b.body, impact: b.impact, sort_order: j }))
      );
      if (error) throw new Error(`barriers[${i}]: ${error.message}`);
    }

    // Challenge
    const { error: chalErr } = await supabase.from('stage_challenges').insert({
      stage_id: sid,
      title:    s.challenge.title,
      body:     s.challenge.body,
      note:     s.challenge.note || null,
    });
    if (chalErr) throw new Error(`stage_challenges[${i}]: ${chalErr.message}`);

    // Touchpoints
    if (s.touchpoints.length) {
      const { error } = await supabase.from('stage_touchpoints').insert(
        s.touchpoints.map((text, j) => ({ stage_id: sid, text, sort_order: j }))
      );
      if (error) throw new Error(`stage_touchpoints[${i}]: ${error.message}`);
    }

    // Images
    if (s.images.length) {
      const { error } = await supabase.from('stage_images').insert(
        s.images.map((url, j) => ({ stage_id: sid, url, sort_order: j }))
      );
      if (error) throw new Error(`stage_images[${i}]: ${error.message}`);
    }
  }

  console.log('\n🎉 Seed complete!');
}

seed().catch(err => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
