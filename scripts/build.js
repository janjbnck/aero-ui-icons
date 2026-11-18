import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";

const toCamelCase = (name) =>
  name.replace(/-(\w)/g, (_, letter) => letter.toUpperCase());

const files = (await readdir("icons"))
  .filter((file) => file.endsWith(".svg"))
  .sort();
const icons = await Promise.all(
  files.map(async (file) => ({
    slug: file.replace(".svg", ""),
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
await writeFile(
  "dist/icons.css",
  `.aero {
  display: inline-block;
  width: 2em;
  height: 2em;
  margin: -0.5em;
  background: no-repeat center / contain;
  vertical-align: -0.125em;
}
${icons
  .map(
    ({ slug, svg }) => `
.aero-${slug} {
  background-image: url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s*\n\s*/g, ""))}");
}
`,
  )
  .join("")}`,
);
