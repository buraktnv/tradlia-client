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

/** Simple rounded bottle with cap, label band and highlight. */
function bottle(cap = "#ffffff", label = "#ffffff") {
  return `
  ${shadow(200, 340, 120, 22)}
  <rect x="170" y="52" width="60" height="38" rx="8" fill="${cap}"/>
  <rect x="180" y="44" width="40" height="12" rx="4" fill="${cap}"/>
  <path d="M150 90 C150 90 148 150 148 200 C148 280 152 330 152 330 L248 330 C248 330 252 280 252 200 C252 150 250 90 250 90 Z" fill="url(#g-bottle)"/>
  <rect x="138" y="150" width="124" height="70" rx="10" fill="${label}" opacity="0.92"/>
  <rect x="160" y="172" width="80" height="10" rx="5" fill="#b9bcc4"/>
  <rect x="160" y="190" width="52" height="10" rx="5" fill="#e4e6ea"/>
  <ellipse cx="180" cy="110" rx="10" ry="46" fill="#fff" opacity="0.35"/>
`;
}

/** Jar with lid. */
function jar(lid = "#ffffff") {
  return `
  ${shadow(200, 340, 130, 22)}
  <rect x="120" y="70" width="160" height="46" rx="14" fill="${lid}"/>
  <rect x="134" y="58" width="132" height="14" rx="7" fill="${lid}"/>
  <path d="M130 116 C130 116 126 180 126 230 C126 300 132 340 132 340 L268 340 C268 340 274 300 274 230 C274 180 270 116 270 116 Z" fill="url(#g-jar)"/>
  <rect x="140" y="170" width="120" height="66" rx="10" fill="#ffffff" opacity="0.9"/>
  <rect x="158" y="190" width="84" height="10" rx="5" fill="#c9ccd4"/>
  <rect x="158" y="208" width="56" height="10" rx="5" fill="#e4e6ea"/>
  <ellipse cx="185" cy="140" rx="12" ry="40" fill="#fff" opacity="0.3"/>
`;
}

/** Box (cardboard) with flap lines. */
function box() {
  return `
  ${shadow(200, 345, 130, 20)}
  <path d="M150 110 L250 110 L260 130 L260 330 L140 330 L140 130 Z" fill="url(#g-box)"/>
  <rect x="140" y="130" width="120" height="40" rx="4" fill="#ffffff" opacity="0.92"/>
  <rect x="158" y="142" width="70" height="8" rx="4" fill="#c9ccd4"/>
  <rect x="158" y="156" width="46" height="8" rx="4" fill="#e4e6ea"/>
  <rect x="150" y="185" width="100" height="120" rx="8" fill="#ffffff" opacity="0.16"/>
  <circle cx="200" cy="245" r="26" fill="#ffffff" opacity="0.35"/>
`;
}

/** Tube (ointment/cream). */
function tube() {
  return `
  ${shadow(200, 340, 110, 20)}
  <rect x="140" y="60" width="120" height="34" rx="10" fill="#e8eaef"/>
  <path d="M128 94 L140 94 L140 320 L260 320 L260 94 L272 94 C272 94 272 220 268 260 C264 296 258 330 258 330 L142 330 C142 330 136 296 132 260 C128 220 128 94 128 94 Z" fill="url(#g-tube)"/>
  <rect x="152" y="180" width="96" height="60" rx="10" fill="#ffffff" opacity="0.9"/>
  <rect x="168" y="198" width="64" height="9" rx="4" fill="#c9ccd4"/>
  <rect x="168" y="214" width="40" height="9" rx="4" fill="#e4e6ea"/>
  <ellipse cx="180" cy="120" rx="9" ry="34" fill="#fff" opacity="0.35"/>
`;
}

/** Spray bottle. */
function spray() {
  return `
  ${shadow(200, 345, 110, 20)}
  <rect x="182" y="70" width="36" height="26" rx="6" fill="#5b5f6a"/>
  <rect x="196" y="46" width="8" height="26" rx="4" fill="#5b5f6a"/>
  <path d="M170 96 C170 96 162 150 162 210 C162 280 168 340 168 340 L232 340 C232 340 238 280 238 210 C238 150 230 96 230 96 Z" fill="url(#g-spray)"/>
  <rect x="152" y="150" width="96" height="60" rx="10" fill="#ffffff" opacity="0.92"/>
  <rect x="168" y="170" width="64" height="9" rx="4" fill="#c9ccd4"/>
  <rect x="168" y="186" width="40" height="9" rx="4" fill="#e4e6ea"/>
  <ellipse cx="180" cy="120" rx="8" ry="30" fill="#fff" opacity="0.35"/>
`;
}

/** Drop bottle (eye drops). */
function drops() {
  return `
  ${shadow(200, 345, 100, 18)}
  <path d="M200 60 L214 92 L186 92 Z" fill="#ffffff"/>
  <rect x="180" y="92" width="40" height="16" rx="6" fill="#ffffff"/>
  <path d="M168 108 C168 108 160 170 160 225 C160 290 168 340 168 340 L232 340 C232 340 240 290 240 225 C240 170 232 108 232 108 Z" fill="url(#g-drops)"/>
  <rect x="150" y="160" width="100" height="58" rx="10" fill="#ffffff" opacity="0.92"/>
  <rect x="168" y="180" width="64" height="9" rx="4" fill="#c9ccd4"/>
  <rect x="168" y="196" width="40" height="9" rx="4" fill="#e4e6ea"/>
  <ellipse cx="182" cy="130" rx="8" ry="30" fill="#fff" opacity="0.35"/>
`;
}

/** Pills jar (wide, round). */
function pills() {
  return `
  ${shadow(200, 345, 120, 22)}
  <rect x="140" y="90" width="120" height="34" rx="12" fill="#ffffff"/>
  <path d="M132 124 C132 124 126 190 126 240 C126 310 134 345 134 345 L266 345 C266 345 274 310 274 240 C274 190 268 124 268 124 Z" fill="url(#g-pills)"/>
  <ellipse cx="172" cy="200" rx="22" ry="13" fill="#ffbe00" opacity="0.9"/>
  <ellipse cx="220" cy="240" rx="20" ry="12" fill="#ffffff" opacity="0.85"/>
  <ellipse cx="200" cy="300" rx="24" ry="14" fill="#5327A8" opacity="0.75"/>
  <ellipse cx="182" cy="150" rx="10" ry="26" fill="#fff" opacity="0.3"/>
`;
}

/** Adjustable wrench. */
function wrench() {
  return `
  ${shadow(200, 345, 130, 18)}
  <mask id="jaw-cut">
    <rect x="0" y="0" width="400" height="400" fill="#ffffff"/>
    <rect x="262" y="98" width="170" height="60" transform="rotate(-45 262 128)" fill="#000000"/>
  </mask>
  <circle cx="262" cy="128" r="58" fill="url(#g-wrench)" mask="url(#jaw-cut)"/>
  <path d="M150 292 L238 204" stroke="url(#g-wrench)" stroke-width="48" stroke-linecap="round"/>
  <rect x="150" y="234" width="20" height="52" rx="10" transform="rotate(-45 160 260)" fill="#ffffff" opacity="0.35"/>
  <circle cx="238" cy="128" r="10" fill="#ffffff" opacity="0.35"/>
`;
}

/** Mask (box of face masks). */
function mask() {
  return `
  ${shadow(200, 345, 120, 20)}
  <rect x="140" y="100" width="120" height="240" rx="14" fill="url(#g-mask)"/>
  <path d="M176 140 Q200 122 224 140 L224 260 Q200 278 176 260 Z" fill="#ffffff"/>
  <path d="M176 140 Q200 158 224 140 L224 190 Q200 208 176 190 Z" fill="#e8eaef"/>
  <rect x="162" y="280" width="76" height="10" rx="5" fill="#ffffff" opacity="0.6"/>
  <rect x="162" y="298" width="52" height="10" rx="5" fill="#ffffff" opacity="0.35"/>
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

/** Gloves box. */
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
  { name: "prod-01", draw: () => bottle() },
  { name: "prod-02", draw: () => jar() },
  { name: "prod-03", draw: () => box() },
  { name: "prod-04", draw: () => tube() },
  { name: "prod-05", draw: () => spray() },
  { name: "prod-06", draw: () => drops() },
  { name: "prod-07", draw: () => pills() },
  { name: "prod-08", draw: () => wrench() },
  { name: "prod-09", draw: () => mask() },
  { name: "prod-10", draw: () => grinder() },
  { name: "prod-11", draw: () => breaker() },
  { name: "prod-12", draw: () => highbay() },
  { name: "prod-13", draw: () => gloves() },
  { name: "prod-14", draw: () => bottle() },
  { name: "prod-15", draw: () => jar() },
  { name: "prod-16", draw: () => box() },
];

let count = 0;
for (const { name, draw } of PRODUCTS) {
  const gradientIds = ["g-bottle", "g-jar", "g-box", "g-tube", "g-spray", "g-drops", "g-pills", "g-wrench", "g-mask", "g-grinder", "g-breaker", "g-bay", "g-gloves"];
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
