import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { withBase } from "../lib/withBase";

export type Photo = {
  /** 1-based position in the gallery. */
  number: number;
  src: string;
  alt: string;
};

const IMAGE_EXTENSIONS = new Set([
  ".webp",
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".avif",
]);

/** Files in public/photos that are not part of the gallery. */
const EXCLUDED_PREFIXES = ["landing-page"];

const photosDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../public/photos",
);

function naturalCompare(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function loadPhotosFromFolder(): Photo[] {
  const files = fs
    .readdirSync(photosDir)
    .filter((file) => {
      const filePath = path.join(photosDir, file);
      if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
        return false;
      }

      const ext = path.extname(file).toLowerCase();
      if (!IMAGE_EXTENSIONS.has(ext)) return false;

      const base = path.basename(file, ext);
      return !EXCLUDED_PREFIXES.some((prefix) => base.startsWith(prefix));
    })
    .sort(naturalCompare);

  return files.map((file, index) => ({
    number: index + 1,
    src: withBase(`photos/${file}`),
    alt: `Photo ${index + 1}`,
  }));
}

/** Read photos from public/photos (reflects folder contents at build/render time). */
export function getPhotos(): Photo[] {
  return loadPhotosFromFolder();
}
