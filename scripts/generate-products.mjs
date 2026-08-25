/**
 * Generates transparent-background product illustrations as SVG files.
 * Run: node scripts/generate-products.mjs
 * Output: public/images/photos/transparent/prod-01.svg … prod-16.svg
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images", "photos", "transparent");
mkdirSync(outDir, { recursive: true });

const TEAL = ["#66c1bf", "#00a29d"];
const PURPLE = ["#6c4fd8", "#3f2a8f"];
const ORANGE = ["#ffbe00", "#ff7b03"];
const BLUE = ["#7ec8e3", "#2f7fa8"];
const ROSE = ["#f2a6b4", "#d95c7d"];

const shadow = (cx, cy, rx, ry, opacity = 0.14) =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#000" opacity="${opacity}"/>`;

const grad = (id, [from, to]) =>
  `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient>`;

/** Stacked double-wall shipping boxes with tape seams and labels. */
function boxes() {
  return `
  ${shadow(200, 352, 130, 20)}
  <rect x="108" y="236" width="184" height="108" rx="12" fill="url(#g-boxes)"/>
  <line x1="200" y1="236" x2="200" y2="344" stroke="#ffffff" stroke-width="5" opacity="0.3"/>
  <rect x="192" y="236" width="16" height="108" fill="#ffffff" opacity="0.25"/>
  <rect x="128" y="286" width="64" height="34" rx="6" fill="#ffffff" opacity="0.92"/>
  <rect x="138" y="296" width="44" height="7" rx="3.5" fill="#c9ccd4"/>
  <rect x="138" y="308" width="28" height="7" rx="3.5" fill="#e4e6ea"/>
  <rect x="126" y="142" width="148" height="100" rx="12" fill="url(#g-boxes)"/>
  <line x1="200" y1="142" x2="200" y2="242" stroke="#ffffff" stroke-width="5" opacity="0.3"/>
  <rect x="193" y="142" width="14" height="100" fill="#ffffff" opacity="0.25"/>
  <rect x="144" y="176" width="52" height="28" rx="6" fill="#ffffff" opacity="0.92"/>
  <rect x="152" y="186" width="36" height="8" rx="4" fill="#c9ccd4"/>
`;
}

/** Stretch-film roll (pallet wrap) with loose trailing sheet. */
function palletWrap() {
  return `
  ${shadow(200, 348, 118, 20)}
  <circle cx="200" cy="200" r="96" fill="url(#g-wrap)"/>
  <circle cx="200" cy="200" r="72" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.25"/>
  <circle cx="200" cy="200" r="46" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.18"/>
  <circle cx="200" cy="200" r="28" fill="#f6f7f9"/>
  <path d="M292 236 C322 268 318 306 292 330 C278 342 262 344 252 336" fill="none" stroke="url(#g-wrap)" stroke-width="18" stroke-linecap="round" opacity="0.95"/>
  <ellipse cx="164" cy="150" rx="26" ry="48" fill="#fff" opacity="0.25" transform="rotate(-28 164 150)"/>
`;
}

/** Wood screws with cross-recess heads and threaded shafts. */
function screws() {
  const screw = (x, y, rot, len = 150) => {
    const threads = Array.from({ length: 5 }, (_, i) => {
      const yy = y + 34 + i * 18;
      const hw = Math.max(4, 16 - 12 * ((yy - (y + 20)) / (len - 20)));
      return `<line x1="${x - hw}" y1="${yy}" x2="${(x + hw * 0.7).toFixed(1)}" y2="${yy + 4}" stroke="#5b5f6a" stroke-width="4" stroke-linecap="round" opacity="0.7"/>`;
    }).join("");
    return `
    <g transform="rotate(${rot} ${x} ${y})">
      <rect x="${x - 26}" y="${y}" width="52" height="20" rx="9" fill="url(#g-screws)"/>
      <line x1="${x - 11}" y1="${y + 10}" x2="${x + 11}" y2="${y + 10}" stroke="#5b5f6a" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
      <line x1="${x}" y1="${y + 3}" x2="${x}" y2="${y + 17}" stroke="#5b5f6a" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
      <path d="M${x - 16} ${y + 20} L${x + 16} ${y + 20} L${x + 4} ${y + len} L${x - 4} ${y + len} Z" fill="url(#g-screws)"/>
      ${threads}
    </g>`;
  };
  return `
  ${shadow(200, 350, 120, 20)}
  ${screw(146, 118, -22)}
  ${screw(252, 132, 20)}
  ${screw(199, 104, 0, 168)}
`;
}

/** Hex bolts with full heads and threaded shanks. */
function bolts() {
  const bolt = (x, y, rot, len = 150) => {
    const threads = Array.from({ length: 7 }, (_, i) => {
      const yy = y + 38 + i * 13;
      if (yy > y + len - 24) return "";
      return `<line x1="${x - 15}" y1="${yy}" x2="${x + 10}" y2="${yy + 3}" stroke="#5b5f6a" stroke-width="4" stroke-linecap="round" opacity="0.7"/>`;
    }).join("");
    return `
    <g transform="rotate(${rot} ${x} ${y})">
      <polygon points="${x - 30},${y} ${x - 15},${y - 24} ${x + 15},${y - 24} ${x + 30},${y} ${x + 15},${y + 24} ${x - 15},${y + 24}" fill="url(#g-bolts)"/>
      <polygon points="${x - 15},${y - 13} ${x}, ${y - 20} ${x + 15},${y - 13} ${x + 15},${y - 5} ${x - 15},${y - 5}" fill="#ffffff" opacity="0.3"/>
      <rect x="${x - 15}" y="${y + 24}" width="30" height="${len - 40}" fill="url(#g-bolts)"/>
      <path d="M${x - 15} ${y + len - 16} L${x + 15} ${y + len - 16} L${x + 6} ${y + len} L${x - 6} ${y + len} Z" fill="url(#g-bolts)"/>
      ${threads}
    </g>`;
  };
  return `
  ${shadow(200, 350, 120, 20)}
  ${bolt(150, 110, -20)}
  ${bolt(248, 124, 16)}
  ${bolt(199, 96, 0, 168)}
`;
}

/** Coiled CAT6 network cable with RJ45 plug on the tail. */
function cable() {
  return `
  ${shadow(200, 350, 110, 18)}
  <circle cx="188" cy="188" r="80" fill="none" stroke="url(#g-cable)" stroke-width="30"/>
  <circle cx="188" cy="188" r="50" fill="none" stroke="url(#g-cable)" stroke-width="24" opacity="0.9"/>
  <circle cx="188" cy="188" r="24" fill="none" stroke="#5b5f6a" stroke-width="12" opacity="0.5"/>
  <path d="M128 148 A78 78 0 0 1 180 110" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" opacity="0.3"/>
  <path d="M252 244 C292 272 296 310 276 334" fill="none" stroke="url(#g-cable)" stroke-width="16" stroke-linecap="round"/>
  <rect x="256" y="322" width="38" height="48" rx="7" fill="#5b5f6a"/>
  <rect x="266" y="330" width="18" height="10" rx="3" fill="#ffbe00"/>
  <rect x="264" y="370" width="22" height="14" rx="4" fill="#30333b"/>
`;
}

/** Sensor PCB module with temperature probe tip on a lead. */
function sensorModule() {
  return `
  ${shadow(200, 345, 112, 16)}
  <path d="M200 150 L200 116" stroke="#5b5f6a" stroke-width="7" stroke-linecap="round"/>
  <rect x="184" y="58" width="32" height="60" rx="15" fill="#c9ccd4"/>
  <rect x="184" y="72" width="32" height="8" fill="#8fa0aa"/>
  <rect x="118" y="150" width="164" height="126" rx="12" fill="url(#g-sensor)"/>
  <circle cx="136" cy="168" r="5" fill="#f6f7f9" stroke="#5b5f6a" stroke-width="3"/>
  <circle cx="264" cy="168" r="5" fill="#f6f7f9" stroke="#5b5f6a" stroke-width="3"/>
  <circle cx="136" cy="258" r="5" fill="#f6f7f9" stroke="#5b5f6a" stroke-width="3"/>
  <circle cx="264" cy="258" r="5" fill="#f6f7f9" stroke="#5b5f6a" stroke-width="3"/>
  <rect x="168" y="182" width="64" height="44" rx="6" fill="#30333b"/>
  <line x1="158" y1="192" x2="168" y2="192" stroke="#8fa0aa" stroke-width="4"/>
  <line x1="158" y1="204" x2="168" y2="204" stroke="#8fa0aa" stroke-width="4"/>
  <line x1="158" y1="216" x2="168" y2="216" stroke="#8fa0aa" stroke-width="4"/>
  <line x1="232" y1="192" x2="242" y2="192" stroke="#8fa0aa" stroke-width="4"/>
  <line x1="232" y1="204" x2="242" y2="204" stroke="#8fa0aa" stroke-width="4"/>
  <line x1="232" y1="216" x2="242" y2="216" stroke="#8fa0aa" stroke-width="4"/>
  <rect x="160" y="240" width="80" height="8" rx="4" fill="#ffffff" opacity="0.7"/>
  <rect x="176" y="254" width="48" height="8" rx="4" fill="#ffffff" opacity="0.4"/>
`;
}

/** Safety helmet (EN397 hard hat) with dome, brim and ribs. */
function hardHat() {
  return `
  ${shadow(200, 348, 122, 18)}
  <ellipse cx="200" cy="254" rx="116" ry="26" fill="url(#g-hat)"/>
  <path d="M104 250 C104 148 146 88 200 88 C254 88 296 148 296 250 Z" fill="url(#g-hat)"/>
  <path d="M156 102 C138 152 132 202 134 248" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" opacity="0.3"/>
  <path d="M244 102 C262 152 268 202 266 248" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" opacity="0.3"/>
  <path d="M200 90 L200 250" stroke="#ffffff" stroke-width="9" opacity="0.22"/>
  <rect x="182" y="198" width="36" height="26" rx="6" fill="#ffffff" opacity="0.9"/>
  <rect x="190" y="207" width="20" height="8" rx="4" fill="#c9ccd4"/>
`;
}

/** Cordless combi drill with battery pack and chuck bit. */
function drill() {
  return `
  ${shadow(200, 352, 120, 18)}
  <rect x="300" y="176" width="44" height="12" rx="6" fill="#8fa0aa"/>
  <rect x="262" y="166" width="40" height="32" rx="6" fill="#5b5f6a"/>
  <line x1="272" y1="170" x2="272" y2="194" stroke="#ffffff" stroke-width="3" opacity="0.25"/>
  <line x1="282" y1="170" x2="282" y2="194" stroke="#ffffff" stroke-width="3" opacity="0.25"/>
  <line x1="292" y1="170" x2="292" y2="194" stroke="#ffffff" stroke-width="3" opacity="0.25"/>
  <rect x="146" y="298" width="64" height="42" rx="8" fill="#5b5f6a"/>
  <rect x="158" y="336" width="12" height="8" rx="3" fill="#30333b"/>
  <rect x="186" y="336" width="12" height="8" rx="3" fill="#30333b"/>
  <path d="M150 214 L206 214 L196 300 L160 300 Z" fill="url(#g-drill)"/>
  <rect x="208" y="222" width="14" height="26" rx="6" fill="#30333b"/>
  <rect x="118" y="150" width="150" height="68" rx="24" fill="url(#g-drill)"/>
  <rect x="134" y="162" width="26" height="8" rx="4" fill="#ffffff" opacity="0.35"/>
  <rect x="134" y="178" width="26" height="8" rx="4" fill="#ffffff" opacity="0.35"/>
  <rect x="134" y="194" width="26" height="8" rx="4" fill="#ffffff" opacity="0.35"/>
  <rect x="172" y="176" width="70" height="26" rx="6" fill="#ffffff" opacity="0.92"/>
  <rect x="182" y="185" width="46" height="8" rx="4" fill="#c9ccd4"/>
`;
}

/** Digital caliper with LCD slider, jaws and thumb roller. */
function caliper() {
  return `
  ${shadow(200, 340, 140, 16)}
  <rect x="70" y="214" width="210" height="6" rx="3" fill="#8fa0aa" opacity="0.7"/>
  <rect x="54" y="192" width="292" height="18" rx="8" fill="url(#g-caliper)"/>
  ${Array.from({ length: 12 }, (_, i) => `<line x1="${74 + i * 24}" y1="195" x2="${74 + i * 24}" y2="207" stroke="#ffffff" stroke-width="3" opacity="0.5"/>`).join("")}
  <rect x="54" y="142" width="56" height="50" rx="8" fill="url(#g-caliper)"/>
  <rect x="104" y="142" width="6" height="50" fill="#5b5f6a" opacity="0.5"/>
  <rect x="228" y="250" width="48" height="40" rx="8" fill="url(#g-caliper)"/>
  <rect x="228" y="250" width="6" height="40" fill="#5b5f6a" opacity="0.5"/>
  <rect x="206" y="168" width="78" height="84" rx="10" fill="url(#g-caliper)"/>
  <rect x="216" y="178" width="58" height="30" rx="5" fill="#dff5ea" stroke="#5b5f6a" stroke-width="2"/>
  <rect x="224" y="188" width="28" height="9" rx="3" fill="#1f7a5a"/>
  <rect x="258" y="188" width="10" height="9" rx="3" fill="#9fd8bf"/>
  <circle cx="288" cy="210" r="11" fill="#5b5f6a"/>
  <line x1="282" y1="203" x2="294" y2="217" stroke="#ffffff" stroke-width="3" opacity="0.3"/>
`;
}

/** Handheld TRMS multimeter body with dial and probe leads. */
function multimeter() {
  return `
  ${shadow(200, 348, 112, 18)}
  <path d="M164 300 C142 322 142 336 154 352 L154 368" fill="none" stroke="#2f3138" stroke-width="9" stroke-linecap="round"/>
  <path d="M236 300 C258 322 258 336 246 352 L246 368" fill="none" stroke="#e03131" stroke-width="9" stroke-linecap="round"/>
  <rect x="124" y="54" width="152" height="252" rx="24" fill="url(#g-meter)"/>
  <rect x="131" y="61" width="138" height="238" rx="18" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.2"/>
  <rect x="146" y="76" width="108" height="50" rx="9" fill="#dff5ea" stroke="#5b5f6a" stroke-width="2"/>
  <rect x="156" y="92" width="54" height="14" rx="3" fill="#1f7a5a"/>
  <rect x="216" y="92" width="10" height="14" rx="3" fill="#9fd8bf"/>
  <rect x="156" y="112" width="20" height="6" rx="3" fill="#5b5f6a" opacity="0.5"/>
  <rect x="160" y="230" width="80" height="8" rx="4" fill="#ffffff" opacity="0.5"/>
  <circle cx="163" cy="262" r="10" fill="#2f3138"/>
  <circle cx="200" cy="262" r="10" fill="#f0f1f5" stroke="#5b5f6a" stroke-width="3"/>
  <circle cx="237" cy="262" r="10" fill="#e03131"/>
  <circle cx="200" cy="180" r="36" fill="#f0f1f5" stroke="#5b5f6a" stroke-width="5"/>
  <circle cx="174" cy="162" r="3" fill="#5b5f6a"/>
  <circle cx="200" cy="154" r="3" fill="#5b5f6a"/>
  <circle cx="226" cy="162" r="3" fill="#5b5f6a"/>
  <circle cx="232" cy="192" r="3" fill="#5b5f6a"/>
  <line x1="200" y1="180" x2="222" y2="160" stroke="#ff7b03" stroke-width="8" stroke-linecap="round"/>
  <circle cx="200" cy="180" r="7" fill="#30333b"/>
`;
}

/** Wrapped A4 paper ream with label band and page edges. */
function paperReam() {
  return `
  ${shadow(200, 350, 122, 20)}
  <rect x="130" y="126" width="140" height="10" rx="5" fill="#ffffff" opacity="0.85"/>
  <rect x="126" y="134" width="148" height="10" rx="5" fill="#ffffff" opacity="0.85"/>
  <rect x="122" y="142" width="156" height="10" rx="5" fill="#ffffff" opacity="0.85"/>
  <rect x="116" y="150" width="168" height="190" rx="8" fill="url(#g-paper)"/>
  <rect x="116" y="214" width="168" height="58" fill="#ffffff" opacity="0.93"/>
  <rect x="136" y="232" width="90" height="10" rx="5" fill="#c9ccd4"/>
  <rect x="136" y="250" width="58" height="10" rx="5" fill="#e4e6ea"/>
  <line x1="124" y1="290" x2="276" y2="290" stroke="#ffffff" stroke-width="3" opacity="0.25"/>
  <line x1="124" y1="304" x2="276" y2="304" stroke="#ffffff" stroke-width="3" opacity="0.25"/>
  <line x1="124" y1="318" x2="276" y2="318" stroke="#ffffff" stroke-width="3" opacity="0.25"/>
`;
}

/** Fan of three gel pens with caps, clips and tips. */
function pens() {
  const pen = (px, py, rot) => `
    <g transform="rotate(${rot} ${px} ${py})">
      <rect x="${px - 11}" y="${py}" width="22" height="46" rx="9" fill="#30333b"/>
      <rect x="${px + 3}" y="${py + 6}" width="8" height="32" rx="4" fill="#ffffff" opacity="0.3"/>
      <rect x="${px - 11}" y="${py + 46}" width="22" height="116" rx="6" fill="url(#g-pens)"/>
      <rect x="${px - 11}" y="${py + 140}" width="22" height="18" rx="6" fill="#30333b" opacity="0.85"/>
      <path d="M${px - 8} ${py + 158} L${px + 8} ${py + 158} L${px + 3} ${py + 182} L${px - 3} ${py + 182} Z" fill="#30333b"/>
      <circle cx="${px}" cy="${py + 185}" r="3.5" fill="#8fa0aa"/>
    </g>`;
  return `
  ${shadow(200, 350, 120, 18)}
  ${pen(146, 110, -18)}
  ${pen(200, 96, 0)}
  ${pen(254, 110, 18)}
`;
}

/** Angle grinder (motor body, gearhead, guard and cutting disc). */
function grinder() {
  return `
  ${shadow(200, 345, 130, 18)}
  <rect x="104" y="178" width="36" height="56" rx="14" fill="#5b5f6a"/>
  <rect x="128" y="156" width="132" height="100" rx="26" fill="url(#g-grinder)"/>
  <rect x="148" y="188" width="92" height="38" rx="8" fill="#ffffff" opacity="0.92"/>
  <rect x="160" y="198" width="64" height="7" rx="3.5" fill="#c9ccd4"/>
  <rect x="160" y="210" width="40" height="7" rx="3.5" fill="#e4e6ea"/>
  <rect x="176" y="130" width="18" height="30" rx="8" fill="#5b5f6a"/>
  <rect x="162" y="112" width="76" height="20" rx="10" fill="#5b5f6a"/>
  <circle cx="274" cy="206" r="42" fill="#e8eaef"/>
  <path d="M234 192 A44 44 0 0 1 314 192" stroke="#5b5f6a" stroke-width="18" fill="none" stroke-linecap="round"/>
  <circle cx="274" cy="206" r="15" fill="#5b5f6a"/>
  <circle cx="274" cy="206" r="6" fill="#ffffff" opacity="0.85"/>
  <rect x="267" y="224" width="14" height="82" rx="7" fill="#8fa0aa"/>
  <line x1="274" y1="232" x2="274" y2="298" stroke="#ffffff" stroke-width="3" opacity="0.5"/>
`;
}

/** DIN-rail circuit breaker (module body, lever and screw terminals). */
function breaker() {
  return `
  ${shadow(200, 345, 90, 16)}
  <rect x="154" y="54" width="26" height="24" rx="6" fill="#5b5f6a"/>
  <rect x="220" y="54" width="26" height="24" rx="6" fill="#5b5f6a"/>
  <rect x="140" y="66" width="120" height="256" rx="14" fill="url(#g-breaker)"/>
  <rect x="152" y="80" width="96" height="54" rx="6" fill="#ffffff" opacity="0.92"/>
  <rect x="164" y="94" width="64" height="8" rx="4" fill="#c9ccd4"/>
  <rect x="164" y="108" width="42" height="8" rx="4" fill="#e4e6ea"/>
  <rect x="182" y="148" width="36" height="66" rx="9" fill="#5b5f6a"/>
  <rect x="189" y="158" width="22" height="26" rx="5" fill="#ffffff"/>
  <circle cx="236" cy="216" r="7" fill="#ffffff" opacity="0.85"/>
  <rect x="160" y="240" width="80" height="10" rx="5" fill="#ffffff" opacity="0.6"/>
  <rect x="160" y="258" width="56" height="10" rx="5" fill="#ffffff" opacity="0.35"/>
  <rect x="154" y="310" width="26" height="24" rx="6" fill="#5b5f6a"/>
  <rect x="220" y="310" width="26" height="24" rx="6" fill="#5b5f6a"/>
`;
}

/** LED high bay fixture (hook, finned housing and light cone). */
function highbay() {
  return `
  ${shadow(200, 352, 96, 13)}
  <path d="M136 218 L264 218 L316 342 L84 342 Z" fill="#ffbe00" opacity="0.12"/>
  <path d="M200 46 L200 74" stroke="#5b5f6a" stroke-width="8" stroke-linecap="round"/>
  <circle cx="200" cy="42" r="11" fill="none" stroke="#5b5f6a" stroke-width="7"/>
  <rect x="172" y="72" width="56" height="34" rx="10" fill="#5b5f6a"/>
  <ellipse cx="200" cy="146" rx="98" ry="26" fill="url(#g-bay)"/>
  <ellipse cx="200" cy="170" rx="110" ry="28" fill="url(#g-bay)"/>
  <ellipse cx="200" cy="196" rx="98" ry="26" fill="url(#g-bay)"/>
  <ellipse cx="182" cy="140" rx="16" ry="52" fill="#fff" opacity="0.25"/>
  <ellipse cx="200" cy="212" rx="76" ry="18" fill="#ffffff" opacity="0.95"/>
  <ellipse cx="200" cy="212" rx="58" ry="12" fill="#ffbe00" opacity="0.35"/>
`;
}

/** Work gloves dispenser box with glove icon. */
function gloves() {
  return `
  ${shadow(200, 345, 120, 20)}
  <rect x="140" y="90" width="120" height="250" rx="12" fill="url(#g-gloves)"/>
  <rect x="156" y="110" width="88" height="14" rx="6" fill="#ffffff" opacity="0.9"/>
  <path d="M170 140 L230 140 L230 320 L170 320 Z" fill="#ffffff" opacity="0.9"/>
  <path d="M182 170 Q188 150 194 170 L194 260 Q188 280 182 260 Z" fill="#e8eaef"/>
  <path d="M198 170 Q204 150 210 170 L210 260 Q204 280 198 260 Z" fill="#e8eaef"/>
  <rect x="162" y="300" width="76" height="10" rx="5" fill="#c9ccd4"/>
`;
}

const PRODUCTS = [
  { name: "prod-01", draw: () => boxes() },
  { name: "prod-02", draw: () => palletWrap() },
  { name: "prod-03", draw: () => screws() },
  { name: "prod-04", draw: () => bolts() },
  { name: "prod-05", draw: () => cable() },
  { name: "prod-06", draw: () => sensorModule() },
  { name: "prod-07", draw: () => hardHat() },
  { name: "prod-08", draw: () => gloves() },
  { name: "prod-09", draw: () => drill() },
  { name: "prod-10", draw: () => grinder() },
  { name: "prod-11", draw: () => breaker() },
  { name: "prod-12", draw: () => highbay() },
  { name: "prod-13", draw: () => caliper() },
  { name: "prod-14", draw: () => multimeter() },
  { name: "prod-15", draw: () => paperReam() },
  { name: "prod-16", draw: () => pens() },
];

let count = 0;
for (const { name, draw } of PRODUCTS) {
  const gradientIds = ["g-boxes", "g-wrap", "g-screws", "g-bolts", "g-cable", "g-sensor", "g-hat", "g-drill", "g-grinder", "g-breaker", "g-bay", "g-gloves", "g-caliper", "g-meter", "g-paper", "g-pens"];
  const used = gradientIds.filter((id) => draw().includes(`url(#${id})`));
  const defs = used
    .map((id, i) => {
      const palettes = [TEAL, PURPLE, ORANGE, BLUE, ROSE];
      const palette = palettes[i % palettes.length];
      return grad(`${id}${name}`, palette).replace(`id="${id}${name}"`, `id="${id}-${name}"`);
    })
    .join("\n  ");
  // remap url(#id) -> url(#id-name) so gradients are unique per file
  let body = draw();
  for (const id of gradientIds) {
    body = body.split(`url(#${id})`).join(`url(#${id}-${name})`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
  ${defs}
  </defs>
  ${body}
</svg>
`;
  writeFileSync(join(outDir, `${name}.svg`), svg);
  count++;
}
console.log(`Generated ${count} transparent product SVGs in public/images/photos/transparent/`);
