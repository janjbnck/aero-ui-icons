import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";

const toCamelCase = (name) =>
  name.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());

const files = (await readdir("icons"))
  .filter((file) => file.endsWith(".svg"))
  .sort();
const icons = await Promise.all(
  files.map(async (file) => ({
    name: toCamelCase(file.replace(".svg", "")),
    svg: (await readFile(`icons/${file}`, "utf8")).trim(),
  })),
);

await mkdir("dist", { recursive: true });
await writeFile(
  "dist/index.js",
  icons
    .map(({ name, svg }) => `export const ${name} = ${JSON.stringify(svg)};\n`)
    .join(""),
);
await writeFile(
  "dist/index.d.ts",
  icons.map(({ name }) => `export declare const ${name}: string;\n`).join(""),
);
