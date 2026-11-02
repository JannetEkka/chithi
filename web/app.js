// Chithi's page: pick a language, photograph a letter (or pick an example), see what to do, checked against the letter.

const T = {
  bn: {
    title: "সরকারি চিঠি বুঝুন, নিজের ভাষায়",
    lede: "বিদ্যুতের বিল, ব্যাংক বা করের নোটিশের ছবি তুলুন। Chithi সহজ বাংলায় বলবে কত টাকা, কবের মধ্যে, আর না দিলে কী হবে।",
    how1: "চিঠির ছবি তুলুন", how2: "সহজ বাংলায় বুঝে নিন, শুনেও নিতে পারেন", how3: "প্রতিটি তারিখ আর টাকার অঙ্ক চিঠির সঙ্গে মিলিয়ে দেখা হয়",
    take: "চিঠির ছবি তুলুন", upload: "ছবি বেছে নিন", tryExample: "একটি নমুনা চিঠি দেখুন",
    privacy: "ছবি Meta-র মডেলে পাঠানো হয়, এবং Meta তা তাদের পরিষেবা উন্নত করতে ব্যবহার করতে পারে। নাম, ঠিকানা আর অ্যাকাউন্ট নম্বর ঢেকে ছবি তুলুন।",
    working: "চিঠি পড়া হচ্ছে…", workingNote: "সাধারণত ২০ সেকেন্ডের মতো লাগে।",
    steps: ["ছবিতে চিঠি খোঁজা", "টেবিল আর বাক্স খোঁজা", "চিঠি পড়া", "আবার পড়া, কাছ থেকে", "বাংলায় বোঝানো", "প্রতিটি তারিখ ও অঙ্ক মেলানো"],
    photoNote: "নীল দাগ: SAM 3.1 যে অংশগুলো খুঁজে পেয়েছে। কোনো কথায় চাপ দিলে চিঠিতে তার জায়গা দেখাবে।",
    tampered: "পরীক্ষা: Chithi নিজেই ব্যাখ্যার একটি অঙ্ক ইচ্ছে করে ভুল করেছে। দেখুন, যাচাই সেটি ধরে আলাদা করে রেখেছে।",
    more: "আরও যা জানা দরকার", toPay: "আপনাকে দিতে হবে", lastDate: "শেষ তারিখ", matched: "চিঠির সঙ্গে মিলিয়ে দেখা হয়েছে",
    listen: "শুনুন", stop: "থামান", remind: "মনে করিয়ে দিন",
    checked: "চিঠির সঙ্গে মিলিয়ে দেখা হয়েছে", checkYourself: "এগুলো নিজে দেখে নিন",
    checkYourselfNote: "এই কথাগুলো চিঠির সঙ্গে মেলেনি, তাই সত্য হিসেবে দেখানো হচ্ছে না। চিঠিতে নিজে মিলিয়ে নিন।",
    askTitle: "চিঠি নিয়ে কিছু জানতে চান?", micHint: "মাইকে চাপ দিয়ে বলুন, শেষ হলে আবার চাপুন। বা লিখে জিজ্ঞাসা করুন।",
    placeholder: "যেমন: না দিলে কী হবে?", tamperBtn: "যাচাই পরীক্ষা করুন: একটি অঙ্ক ইচ্ছে করে বদলে দিন",
    how: "Chithi কীভাবে যাচাই করল", readText: "ছবি থেকে পড়া লেখা", again: "আরেকটি চিঠি",
    fromLetter: "চিঠিতে লেখা", seeIt: "চিঠিতে দেখুন", noneVerified: "কোনো কথা যাচাই করা যায়নি।",
    footer: "Chithi আইনি পরামর্শ দেয় না। সন্দেহ হলে চিঠি যিনি পাঠিয়েছেন তাঁর সঙ্গে যোগাযোগ করুন।",
    daysLeft: (n) => `আর ${n} দিন`, today: "আজই শেষ দিন", tomorrow: "কাল শেষ দিন", daysAgo: (n) => `${n} দিন আগে পেরিয়ে গেছে`,
    noVoice: "এই ফোনে বাংলা পড়ে শোনানোর ভয়েস নেই।", listening: "শুনছি… শেষ হলে মাইকে আবার চাপুন", thinking: "ভাবছি…",
    tooLong: "অনেক সময় লাগছে। আবার চেষ্টা করুন।", folded: "ভাঁজ পড়া, ছায়া পড়া ছবি",
    kinds: { electricity_bill: "বিদ্যুতের বিল", bank_notice: "ব্যাংকের চিঠি", tax_notice: "করের নোটিশ", property_tax_notice: "সম্পত্তি কর (হিন্দি)" },
  },
  hi: {
    title: "सरकारी चिट्ठी समझिए, अपनी भाषा में",
    lede: "बिजली का बिल, बैंक या टैक्स नोटिस की फ़ोटो लीजिए। Chithi आसान हिन्दी में बताएगा कितना भरना है, कब तक, और न भरें तो क्या होगा।",
    how1: "चिट्ठी की फ़ोटो लें", how2: "आसान हिन्दी में समझें, सुन भी सकते हैं", how3: "हर तारीख़ और रकम चिट्ठी से मिलाकर जाँची जाती है",
    take: "चिट्ठी की फ़ोटो लें", upload: "फ़ोटो चुनें", tryExample: "एक नमूना चिट्ठी देखें",
    privacy: "फ़ोटो Meta के मॉडल को भेजी जाती है, और Meta उसे अपनी सेवा सुधारने में इस्तेमाल कर सकता है। नाम, पता और खाता नंबर ढककर फ़ोटो लें।",
    working: "चिट्ठी पढ़ी जा रही है…", workingNote: "आम तौर पर 20 सेकंड के आसपास लगते हैं।",
    steps: ["फ़ोटो में चिट्ठी ढूँढना", "टेबल और बॉक्स ढूँढना", "चिट्ठी पढ़ना", "दोबारा पढ़ना, पास से", "हिन्दी में समझाना", "हर तारीख़ और रकम मिलाना"],
    photoNote: "नीले निशान: SAM 3.1 को मिले हिस्से। किसी बात पर टैप करें, चिट्ठी में उसकी जगह दिखेगी।",
    tampered: "जाँच की परीक्षा: Chithi ने समझाने में एक रकम जानबूझकर बदली है। देखिए, जाँच ने उसे पकड़कर अलग रख दिया।",
    more: "और क्या जानना ज़रूरी है", toPay: "आपको भरना है", lastDate: "आख़िरी तारीख़", matched: "चिट्ठी से मिलाकर जाँचा गया",
    listen: "सुनें", stop: "रोकें", remind: "याद दिलाएँ",
    checked: "चिट्ठी से मिलाकर जाँचा गया", checkYourself: "इन्हें ख़ुद जाँच लें",
    checkYourselfNote: "ये बातें चिट्ठी से मेल नहीं खाईं, इसलिए इन्हें सच की तरह नहीं दिखाया जा रहा। चिट्ठी में ख़ुद देख लें।",
    askTitle: "चिट्ठी के बारे में कुछ पूछना है?", micHint: "माइक दबाकर बोलिए, फिर दोबारा दबाइए। या लिखकर पूछिए।",
    placeholder: "जैसे: न भरूँ तो क्या होगा?", tamperBtn: "जाँच को परखें: एक रकम जानबूझकर बदलें",
    how: "Chithi ने कैसे जाँचा", readText: "फ़ोटो से पढ़ा गया लेख", again: "दूसरी चिट्ठी",
    fromLetter: "चिट्ठी में लिखा है", seeIt: "चिट्ठी में देखें", noneVerified: "कोई बात जाँची नहीं जा सकी।",
    footer: "Chithi क़ानूनी सलाह नहीं देता। शक हो तो चिट्ठी भेजने वाले से संपर्क करें।",
    daysLeft: (n) => `${n} दिन बाक़ी`, today: "आज आख़िरी दिन है", tomorrow: "कल आख़िरी दिन है", daysAgo: (n) => `${n} दिन पहले निकल गई`,
    noVoice: "इस फ़ोन में हिन्दी पढ़कर सुनाने वाली आवाज़ नहीं है।", listening: "सुन रहा हूँ… बोलकर माइक फिर दबाएँ", thinking: "सोच रहा हूँ…",
    tooLong: "बहुत समय लग रहा है। फिर कोशिश करें।", folded: "मुड़ी हुई, छाया वाली फ़ोटो",
    kinds: { electricity_bill: "बिजली का बिल", bank_notice: "बैंक की चिट्ठी", tax_notice: "टैक्स नोटिस", property_tax_notice: "संपत्ति कर (हिन्दी)" },
  },
  en: {
    title: "Understand an official letter, in your own language",
    lede: "Photograph an electricity bill, a bank or a tax notice. Chithi tells you in plain words how much to pay, by when, and what happens if you don't.",
    how1: "Photograph the letter", how2: "Read it in plain words, or listen", how3: "Every date and amount is checked against the letter",
    take: "Photograph a letter", upload: "Choose a photo", tryExample: "Try an example letter",
    privacy: "The photo is sent to Meta's models, and Meta may use it to improve its service. Cover your name, address and account numbers before you take it.",
    working: "Reading your letter…", workingNote: "This usually takes about 20 seconds.",
    steps: ["Finding the letter in the photo", "Finding tables and boxes", "Reading the letter", "Reading it again, up close", "Explaining it in English", "Checking every date and amount"],
    photoNote: "Blue outlines: the parts SAM 3.1 found. Tap a point to see where the letter says it.",
    tampered: "Test mode: Chithi changed one amount in the explanation on purpose. The check caught it and held it back.",
    more: "Also in the letter", toPay: "You need to pay", lastDate: "Last date", matched: "Checked against the letter",
    listen: "Listen", stop: "Stop", remind: "Remind me",
    checked: "Checked against the letter", checkYourself: "Check these yourself",
    checkYourselfNote: "These didn't match the letter, so they aren't shown as fact. Look them up in the letter yourself.",
    askTitle: "Want to ask about the letter?", micHint: "Tap the mic and speak, then tap again. Or type your question.",
    placeholder: "e.g. What happens if I don't pay?", tamperBtn: "Test the check: change one amount on purpose",
    how: "How Chithi checked this", readText: "Text read from the photo", again: "Another letter",
    fromLetter: "The letter says", seeIt: "See it in the letter", noneVerified: "Nothing could be verified.",
    footer: "Chithi doesn't give legal advice. If in doubt, contact whoever sent the letter.",
    daysLeft: (n) => `${n} days left`, today: "Today is the last day", tomorrow: "Tomorrow is the last day", daysAgo: (n) => `passed ${n} days ago`,
    noVoice: "This device has no voice to read this language aloud.", listening: "Listening… tap the mic again when done", thinking: "Thinking…",
    tooLong: "That took too long. Please try again.", folded: "folded, shadowed photo",
    kinds: { electricity_bill: "Electricity bill", bank_notice: "Bank letter", tax_notice: "Tax notice", property_tax_notice: "Property tax (Hindi)" },
  },
};

// Why a point was held back, in the reader's language. {x} is the value.
const REASONS = {
  bn: { quote_not_found: "যে কথাগুলো উদ্ধৃত করা হয়েছে, সেগুলো চিঠিতে নেই।", date_not_in_quote: "{x} তারিখটি চিঠির ওই অংশে নেই।",
        number_not_in_quote: "{x} অঙ্কটি চিঠির ওই অংশে নেই।", date_not_in_second_reading: "ছবিটি আবার পড়ে {x} তারিখটি পাওয়া যায়নি।",
        number_not_in_second_reading: "ছবিটি আবার পড়ে {x} অঙ্কটি পাওয়া যায়নি।" },
  hi: { quote_not_found: "जो शब्द उद्धृत किए गए, वे चिट्ठी में नहीं हैं।", date_not_in_quote: "तारीख़ {x} चिट्ठी के उस हिस्से में नहीं है।",
        number_not_in_quote: "रकम {x} चिट्ठी के उस हिस्से में नहीं है।", date_not_in_second_reading: "फ़ोटो दोबारा पढ़ने पर तारीख़ {x} नहीं मिली।",
        number_not_in_second_reading: "फ़ोटो दोबारा पढ़ने पर रकम {x} नहीं मिली।" },
  en: { quote_not_found: "The words it quotes aren't in the letter.", date_not_in_quote: "The date {x} isn't in that part of the letter.",
        number_not_in_quote: "The amount {x} isn't in that part of the letter.", date_not_in_second_reading: "A second reading of the photo didn't find the date {x}.",
        number_not_in_second_reading: "A second reading of the photo didn't find the amount {x}." },
};
const TOPIC_ICON = { amount: "💰", deadline: "📅", consequence: "⚠️", action: "👉", other: "ℹ️" };
const LOCALE = { bn: "bn-IN", hi: "hi-IN", en: "en-IN" };

let lang = "bn";
let current = null;     // the last result
let photoUrl = "";      // what's on screen
let lastSample = null;  // the example letter on screen, if any
const $ = (id) => document.getElementById(id);
const t = (k) => T[lang][k];

function esc(s) {
  return String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function toast(msg, ms = 3500) {
  const el = $("toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => (el.hidden = true), ms);
}

// --- language ---------------------------------------------------------------

function applyLang() {
  document.documentElement.lang = lang;
  document.body.className = lang;
  document.querySelectorAll("[data-t]").forEach((el) => { el.textContent = t(el.dataset.t); });
  document.querySelectorAll(".langs button").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.lang === lang)));
  $("question").placeholder = t("placeholder");
  renderSamples();
  if (current && !$("result").hidden) render(current);
}

document.querySelectorAll(".langs button").forEach((b) => b.addEventListener("click", () => {
  lang = b.dataset.lang;
  try { localStorage.setItem("chithi-lang", lang); } catch (e) {}
  applyLang();
}));
try { lang = localStorage.getItem("chithi-lang") || "bn"; } catch (e) {}

function show(id) {
  for (const s of ["start", "working", "result"]) $(s).hidden = s !== id;
  window.scrollTo({ top: 0 });
}

// --- examples ---------------------------------------------------------------

let SAMPLES = [];
function renderSamples() {
  $("samples").innerHTML = SAMPLES.map((s) =>
    `<button class="sample" data-id="${esc(s.id)}" data-photo="${esc(s.photo)}"><img src="${esc(s.photo)}" alt="" loading="lazy">
      <b>${esc(t("kinds")[s.kind] || s.kind)}</b><span>${s.hard ? esc(t("folded")) : "&nbsp;"}</span></button>`).join("");
  document.querySelectorAll(".sample").forEach((b) => b.addEventListener("click", () => {
    lastSample = { id: b.dataset.id, photo: b.dataset.photo };
    const form = new FormData();
    form.append("sample_id", b.dataset.id);
    explain(form, b.dataset.photo);
  }));
}

async function init() {
  const [health, samples] = await Promise.all([fetch("/api/health").then((r) => r.json()), fetch("/api/samples").then((r) => r.json())]);
  SAMPLES = samples;
  if (!health.live) {
    $("mode").hidden = false;
    $("mode").textContent = "Demo mode: Meta's models aren't connected, so only the examples work, with a stand-in explainer. The check is the real one.";
  }
  applyLang();
}

for (const id of ["camera", "upload"]) {
  $(id).addEventListener("change", (e) => {
    const f = e.target.files[0];
    if (!f) return;
    lastSample = null;
    const form = new FormData();
    form.append("photo", f);
    explain(form, URL.createObjectURL(f));
    e.target.value = "";
  });
}

// --- working: live progress from the server ---------------------------------

const STAGES = ["find_page", "find_regions", "read_page", "read_again", "explain", "check"];
let progress = null;

function rect(b, cls) {
  return `<rect class="${cls}" x="${b[0]}" y="${b[1]}" width="${b[2] - b[0]}" height="${b[3] - b[1]}" rx="6"/>`;
}

function startProgress() {
  progress = { done: new Set(), counts: {}, detail: {}, regions: 0, size: null };
  $("workPhoto").src = photoUrl;
  $("workOverlay").innerHTML = "";
  drawSteps();
  show("working");
}

function drawSteps() {
  const now = STAGES.findIndex((s) => !progress.done.has(s));
  $("steps").innerHTML = STAGES.map((s, i) => {
    const cls = progress.done.has(s) ? "done" : i === now ? "now" : "";
    const d = progress.detail[s] ? `<small>${esc(progress.detail[s])}</small>` : "";
    return `<li class="${cls}">${esc(t("steps")[i])}${d}</li>`;
  }).join("");
}

function onEvent(ev) {
  if (ev.type === "page") {
    progress.size = ev.image_size;
    const svg = $("workOverlay");
    svg.setAttribute("viewBox", `0 0 ${ev.image_size[0]} ${ev.image_size[1]}`);
    svg.setAttribute("preserveAspectRatio", "none");
    if (ev.box) svg.innerHTML += rect(ev.box, "page");
  } else if (ev.type === "regions") {
    progress.regions += ev.boxes.length;
    $("workOverlay").innerHTML += ev.boxes.map((b) => rect(b, "region")).join("");
  } else if (ev.type === "step") {
    const s = ev.step;
    progress.counts[s] = (progress.counts[s] || 0) + 1;
    const model = ev.model === "deterministic" ? "no model" : ev.model;
    progress.detail[s] = `${model} · ${ev.detail}`;
    if (s === "find_page" || s === "read_page" || s === "explain" || s === "check") progress.done.add(s);
    if (s === "find_regions" && progress.counts[s] >= 3) progress.done.add(s);
    if (s === "read_again" && progress.done.has("find_regions") && progress.counts[s] >= 5 + progress.regions) progress.done.add(s);
    if (s === "explain" || s === "check") progress.done.add("read_again");
    drawSteps();
  }
}

async function explain(form, url) {
  form.append("language", lang);
  form.append("stream", "true");
  photoUrl = url;
  startProgress();
  try {
    const r = await fetch("/api/explain", { method: "POST", body: form, signal: AbortSignal.timeout(150000) });
    if (!r.ok) {
      const d = await r.json().catch(() => ({}));
      throw new Error(d.detail || r.statusText);
    }
    const reader = r.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    let result = null;
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let nl;
      while ((nl = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, nl).trim();
        buf = buf.slice(nl + 1);
        if (!line) continue;
        const ev = JSON.parse(line);
        if (ev.type === "error") throw new Error(ev.detail);
        if (ev.type === "result") result = ev.result;
        else onEvent(ev);
      }
    }
    if (!result) throw new Error(t("tooLong"));
    current = result;
    render(result);
    show("result");
  } catch (e) {
    show("start");
    $("mode").hidden = false;
    $("mode").className = "notice error";
    $("mode").textContent = e.name === "TimeoutError" ? t("tooLong") : e.message;
  }
}

// --- result -----------------------------------------------------------------

function firstValue(p, kind) {
  return (p.values || []).find((v) => v.kind === kind && v.in_letter);
}

function pickAction(d) {
  const v = d.verified;
  const amountP = v.find((p) => p.topic === "amount" && firstValue(p, "number")) || null;
  const dateP = v.find((p) => p.topic === "deadline" && firstValue(p, "date")) || null;
  const consP = v.find((p) => p.topic === "consequence") || null;
  return {
    amount: amountP && firstValue(amountP, "number"),
    date: dateP && firstValue(dateP, "date"),
    consequence: consP && consP.say,
    points: [amountP, dateP, consP].filter(Boolean),
  };
}

function daysUntil(iso) {
  const [y, m, dd] = iso.split("-").map(Number);
  const due = new Date(y, m - 1, dd);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((due - today) / 86400000);
}

function fmtDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(LOCALE[lang], { day: "numeric", month: "long", year: "numeric" }).format(new Date(y, m - 1, d));
}

function reasonText(code, fallback) {
  const c = code.split(":")[0];
  const x = code.split(":").slice(1).join(":");
  const tpl = REASONS[lang][c];
  return tpl ? tpl.replace("{x}", x) : fallback;
}

// The piece of the photo where the letter prints this value (a SAM region or a
// strip of the page that was read separately and contains it).
function cropStyle(box) {
  const [W, H] = current.image_size;
  const cw = Math.min(W, box[2] - box[0] + 8), ch = Math.min(H, box[3] - box[1] + 8);
  const x0 = Math.max(0, Math.min(W - cw, box[0] - 4));
  const y0 = Math.max(0, Math.min(H - ch, box[1] - 4));
  const px = W - cw ? (x0 / (W - cw)) * 100 : 0, py = H - ch ? (y0 / (H - ch)) * 100 : 0;
  return `background-image:url('${photoUrl}');background-size:${(W / cw) * 100}% auto;background-position:${px}% ${py}%;aspect-ratio:${cw}/${ch}`;
}

function card(p, cy) {
  const quote = esc(p.evidence || p.quote).replace(/(₹\s?|Rs\.?\s?|INR\s?)?[\d০-৯०-९][\d০-৯०-९,./\-]*(\s?\/-)?/g, (m) => `<b>${m}</b>`);
  const why = cy && p.reasons?.length ? `<p class="why">${p.reasons.map((r, i) => esc(reasonText(r, p.reasons_text[i]))).join(" ")}</p>` : "";
  const crop = p.where?.length ? `<div class="crop" style="${cropStyle(p.where[0])}"></div>` : "";
  return `<div class="card ${cy ? "cy" : ""}" data-id="${esc(p.id)}">
    <div class="row"><span class="tico">${TOPIC_ICON[p.topic] || "ℹ️"}</span><p class="say">${esc(p.say)}</p></div>
    ${why}
    ${cy ? "" : `<p class="see">${esc(t("seeIt"))} ↓</p>`}
    <div class="evidence" ${cy ? "" : "hidden"}>${crop}<p class="quote">${esc(t("fromLetter"))}: “${quote}”</p></div>
  </div>`;
}

function drawOverlay(spot) {
  const d = current;
  const [w, h] = d.image_size;
  const svg = $("overlay");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.setAttribute("preserveAspectRatio", "none");
  svg.innerHTML = (d.page_box ? rect(d.page_box, "page") : "") + d.regions.map((r) => rect(r.box, "region")).join("")
    + (spot ? rect(spot, "spot") : "");
}

function wireCards(container, points) {
  container.querySelectorAll(".card:not(.cy)").forEach((el) => el.addEventListener("click", () => {
    const p = points.find((x) => x.id === el.dataset.id);
    const ev = el.querySelector(".evidence");
    const open = ev.hidden;
    container.parentElement.querySelectorAll(".card.open").forEach((o) => { o.classList.remove("open"); o.querySelector(".evidence").hidden = true; });
    ev.hidden = !open;
    el.classList.toggle("open", open);
    drawOverlay(open && p?.where?.length ? p.where[0] : null);
  }));
}

function render(d) {
  $("resultPhoto").src = photoUrl;
  drawOverlay(null);
  $("tampered").hidden = !d.tampered;
  $("kind").textContent = d.kind;
  $("summary").textContent = d.summary;

  const a = pickAction(d);
  $("actionCard").hidden = !a.amount && !a.date;
  $("actAmountRow").hidden = !a.amount;
  $("actDateRow").hidden = !a.date;
  if (a.amount) $("actAmount").textContent = `₹${a.amount.text.replace(/^₹\s?/, "")}`;
  if (a.date) {
    $("actDate").textContent = fmtDate(a.date.value);
    const n = daysUntil(a.date.value);
    const pill = $("actDays");
    const num = (x) => x.toLocaleString(LOCALE[lang]);
    pill.textContent = n > 1 ? t("daysLeft")(num(n)) : n === 1 ? t("tomorrow") : n === 0 ? t("today") : t("daysAgo")(num(-n));
    pill.className = "pill" + (n < 0 ? " late" : "");
  }
  $("actConsequence").textContent = a.consequence || "";
  $("remindBtn").hidden = !a.date || daysUntil(a.date.value) < 0;
  $("shareBtn").href = "https://wa.me/?text=" + encodeURIComponent(shareText(d, a));

  // The action card's points are shown there, with their proof; the rest are listed.
  const rest = d.verified.filter((p) => !a.points.includes(p));
  $("listTitle").textContent = $("actionCard").hidden ? t("checked") : t("more");
  $("verified").innerHTML = d.verified.length ? rest.map((p) => card(p, false)).join("") : `<p class="fine">${esc(t("noneVerified"))}</p>`;
  wireCards($("verified"), rest);
  const proof = a.points.filter((p) => p.where?.length);
  $("actSee").hidden = !proof.length;
  $("actEvidence").hidden = true;
  const boxes = [...new Map(proof.map((p) => [p.where[0].join(","), p.where[0]])).values()];
  $("actEvidence").innerHTML = boxes.map((b) => `<div class="crop" style="${cropStyle(b)}"></div>`).join("")
    + a.points.map((p) => `<p class="quote">${esc(t("fromLetter"))}: “${esc(p.evidence)}”</p>`).filter((q, i, all) => all.indexOf(q) === i).join("");
  $("cyWrap").hidden = !d.check_yourself.length;
  $("checkYourself").innerHTML = d.check_yourself.map((p) => card(p, true)).join("");

  $("trace").innerHTML = d.trace.map((s) =>
    `<li><b>${esc(s.step)}</b> <code>${esc(s.model)}</code> ${esc(s.detail)} <span class="ms">${(s.ms / 1000).toFixed(1)} s</span></li>`).join("");
  $("cost").textContent = d.backend === "mock"
    ? "Demo mode: example letter, no model was called. The check is the real one."
    : `Model cost for this letter: $${d.cost_usd.toFixed(3)}, ${d.seconds} s` + (d.cached ? " (an earlier run of this example, shown again)" : "");
  $("letterText").textContent = d.letter_text;
  $("askBox").hidden = d.backend === "mock";
  $("tamperBtn").hidden = !lastSample || d.tampered;
  stopSpeaking();
}

$("again").addEventListener("click", () => { stopSpeaking(); show("start"); });

$("actSee").addEventListener("click", () => {
  const ev = $("actEvidence");
  ev.hidden = !ev.hidden;
  const a = pickAction(current);
  drawOverlay(!ev.hidden ? a.points.find((p) => p.where?.length)?.where[0] : null);
});

$("tamperBtn").addEventListener("click", () => {
  const form = new FormData();
  form.append("sample_id", lastSample.id);
  form.append("tamper", "true");
  explain(form, lastSample.photo);
});

// --- listen, remind, share --------------------------------------------------

function spokenText(d) {
  const a = pickAction(d);
  const lines = [d.summary];
  if (a.amount) lines.push(`${t("toPay")}: ₹${a.amount.text.replace(/^₹\s?/, "")}`);
  if (a.date) lines.push(`${t("lastDate")}: ${fmtDate(a.date.value)}`);
  for (const p of d.verified) if (!a.points.includes(p)) lines.push(p.say);
  if (a.consequence) lines.push(a.consequence);
  return lines.join("। ");
}

function voiceFor(l) {
  const voices = speechSynthesis.getVoices();
  const want = LOCALE[l].toLowerCase();
  return voices.find((v) => v.lang.toLowerCase().replace("_", "-") === want)
    || voices.find((v) => v.lang.toLowerCase().startsWith(l));
}

let speaking = false;
function stopSpeaking() {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
  speaking = false;
  $("listenBtn").querySelector("[data-t]").textContent = t("listen");
}

$("listenBtn").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) return toast(t("noVoice"));
  if (speaking) return stopSpeaking();
  const voice = voiceFor(lang);
  if (!voice) return toast(t("noVoice"));
  const u = new SpeechSynthesisUtterance(spokenText(current));
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 0.92;
  u.onend = stopSpeaking;
  speechSynthesis.speak(u);
  speaking = true;
  $("listenBtn").querySelector("[data-t]").textContent = t("stop");
});
if ("speechSynthesis" in window) speechSynthesis.getVoices();

function shareText(d, a) {
  const lines = [`${d.kind}: ${d.summary}`];
  if (a.amount) lines.push(`${t("toPay")}: ₹${a.amount.text.replace(/^₹\s?/, "")}`);
  if (a.date) lines.push(`${t("lastDate")}: ${fmtDate(a.date.value)}`);
  if (a.consequence) lines.push(a.consequence);
  lines.push(`(${t("matched")} · Chithi ${location.origin})`);
  return lines.join("\n");
}

$("remindBtn").addEventListener("click", () => {
  const a = pickAction(current);
  if (!a.date) return;
  const day = a.date.value.replaceAll("-", "");
  const title = [current.kind, a.amount ? `₹${a.amount.text.replace(/^₹\s?/, "")}` : ""].filter(Boolean).join(" · ");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Chithi//EN", "BEGIN:VEVENT",
    `UID:${Date.now()}@chithi`, `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").slice(0, 15)}Z`,
    `DTSTART;VALUE=DATE:${day}`, `SUMMARY:${title} (${t("lastDate")})`,
    `DESCRIPTION:${current.summary.replace(/\n/g, " ")}`,
    "BEGIN:VALARM", "TRIGGER:-P2D", "ACTION:DISPLAY", `DESCRIPTION:${title}`, "END:VALARM",
    "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  link.download = "chithi-reminder.ics";
  link.click();
});

// --- questions, typed or spoken ---------------------------------------------

async function ask(form, shownQuestion) {
  form.append("language", lang);
  form.append("letter_text", current.letter_text);
  form.append("second_reading", current.second_reading || "");
  const box = document.createElement("div");
  box.className = "chat";
  box.innerHTML = (shownQuestion ? `<div class="bubble-q">${esc(shownQuestion)}</div>` : "") + `<p class="thinking">${esc(t("thinking"))}</p>`;
  $("answers").append(box);
  try {
    const r = await fetch("/api/ask", { method: "POST", body: form, signal: AbortSignal.timeout(120000) });
    const d = await r.json();
    if (!r.ok) throw new Error(d.detail || r.statusText);
    const cards = document.createElement("div");
    cards.className = "cards";
    cards.innerHTML = d.verified.map((p) => card(p, false)).join("") + d.check_yourself.map((p) => card(p, true)).join("");
    box.innerHTML = `<div class="bubble-q">${esc(d.question)}</div>`;
    box.append(cards);
    wireCards(cards, d.verified);
  } catch (e) {
    box.querySelector(".thinking").outerHTML = `<p class="notice error">${esc(e.name === "TimeoutError" ? t("tooLong") : e.message)}</p>`;
  }
}

$("askBtn").addEventListener("click", () => {
  const q = $("question").value.trim();
  if (!q) return;
  const form = new FormData();
  form.append("question", q);
  $("question").value = "";
  ask(form, q);
});
$("question").addEventListener("keydown", (e) => { if (e.key === "Enter") $("askBtn").click(); });

// Muse Voice Transcribe wants 16 kHz mono 16-bit WAV, so record raw samples and encode them here.
let rec = null;
$("mic").addEventListener("click", async () => {
  if (rec) return stopRecording();
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const ctx = new AudioContext();
    const src = ctx.createMediaStreamSource(stream);
    const node = ctx.createScriptProcessor(4096, 1, 1);
    const chunks = [];
    node.onaudioprocess = (e) => chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
    src.connect(node);
    node.connect(ctx.destination);
    rec = { stream, ctx, node, chunks };
    $("mic").classList.add("rec");
    $("micHint").textContent = t("listening");
  } catch (e) {
    toast(e.message);
  }
});

function stopRecording() {
  const { stream, ctx, node, chunks } = rec;
  rec = null;
  $("mic").classList.remove("rec");
  $("micHint").textContent = t("micHint");
  node.disconnect();
  stream.getTracks().forEach((tr) => tr.stop());
  const rate = ctx.sampleRate;
  ctx.close();
  const all = new Float32Array(chunks.reduce((n, c) => n + c.length, 0));
  let o = 0;
  for (const c of chunks) { all.set(c, o); o += c.length; }
  const form = new FormData();
  form.append("audio", new Blob([wav16k(all, rate)], { type: "audio/wav" }), "question.wav");
  ask(form, null);
}

function wav16k(samples, rate) {
  const ratio = rate / 16000;
  const n = Math.floor(samples.length / ratio);
  const buf = new ArrayBuffer(44 + n * 2);
  const v = new DataView(buf);
  const str = (off, s) => [...s].forEach((c, i) => v.setUint8(off + i, c.charCodeAt(0)));
  str(0, "RIFF"); v.setUint32(4, 36 + n * 2, true); str(8, "WAVE"); str(12, "fmt ");
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
  v.setUint32(24, 16000, true); v.setUint32(28, 32000, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
  str(36, "data"); v.setUint32(40, n * 2, true);
  for (let i = 0; i < n; i++) {
    // Average the source samples that fall into this output sample.
    const a = Math.floor(i * ratio), b = Math.min(samples.length, Math.floor((i + 1) * ratio));
    let s = 0;
    for (let j = a; j < b; j++) s += samples[j];
    s = Math.max(-1, Math.min(1, s / Math.max(1, b - a)));
    v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return buf;
}

init();
