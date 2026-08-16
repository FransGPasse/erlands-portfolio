const PHOTO_HASH_PREFIX = "photo-";

export function photoNumberFromIndex(index: number): number {
  return index + 1;
}

function indexFromPhotoNumber(number: number): number {
  return number - 1;
}

/** Parse a 1-based gallery position from the URL hash. */
export function parsePhotoHash(hash = window.location.hash): number | null {
  const value = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!value.startsWith(PHOTO_HASH_PREFIX)) return null;

  const number = Number.parseInt(value.slice(PHOTO_HASH_PREFIX.length), 10);
  if (Number.isNaN(number) || number < 1) return null;

  return indexFromPhotoNumber(number);
}

export function buildPhotoHash(index: number): string {
  return `#${PHOTO_HASH_PREFIX}${photoNumberFromIndex(index)}`;
}

export function buildGridUrl(): string {
  return `${window.location.pathname}${window.location.search}`;
}
