import { withBase } from "../lib/withBase";

export type Photo = {
  id: string;
  src: string;
  alt: string;
};

/** Erland's photos for the Foto page (bento / carousel). */
export const photos: Photo[] = Array.from({ length: 48 }, (_, index) => {
  const n = String(index + 1).padStart(2, "0");
  return {
    id: n,
    src: withBase(`photos/photo-${n}.webp`),
    alt: `Foto ${index + 1}`,
  };
});
