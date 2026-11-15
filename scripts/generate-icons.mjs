// Génère les icônes de l'app à partir de design/logo/*.svg.
// Usage : node scripts/generate-icons.mjs (à relancer si le logo change).
import { copyFile, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const rounded = await readFile("design/logo/pecule-icon.svg");
const square = await readFile("design/logo/pecule-icon-square.svg");
const png = (svg, size) => sharp(svg, { density: 300 }).resize(size, size).png().toBuffer();

// favicon.ico : conteneur ICO avec des images PNG en 16, 32 et 48 px.
async function buildIco(svg, sizes) {
  const images = await Promise.all(sizes.map((s) => png(svg, s)));
  const header = Buffer.alloc(6 + 16 * sizes.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // type : icône
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  sizes.forEach((size, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4); // plans de couleur
    header.writeUInt16LE(32, entry + 6); // bits par pixel
    header.writeUInt32LE(images[i].length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += images[i].length;
  });
  return Buffer.concat([header, ...images]);
}

await writeFile("app/favicon.ico", await buildIco(rounded, [16, 32, 48]));
await copyFile("design/logo/pecule-icon.svg", "app/icon.svg");
await writeFile("app/apple-icon.png", await png(square, 180));
console.log("Icônes générées : app/favicon.ico, app/icon.svg, app/apple-icon.png");
