/** Join a site-relative path with Astro's configured base URL. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, "");
  return `${base}${base.endsWith("/") ? "" : "/"}${normalized}`;
}
