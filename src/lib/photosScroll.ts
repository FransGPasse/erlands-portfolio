import { photoNumberFromIndex } from "./photoGalleryUrl";

export const PHOTOS_SCROLL_KEY = "erlands-photos-scroll-y";

export function savePhotosScroll(scrollRoot: HTMLElement | null) {
  if (!scrollRoot) return;
  sessionStorage.setItem(PHOTOS_SCROLL_KEY, String(scrollRoot.scrollTop));
}

export function restorePhotosScroll(scrollRoot: HTMLElement | null) {
  if (!scrollRoot) return;

  const saved = sessionStorage.getItem(PHOTOS_SCROLL_KEY);
  if (saved === null) return;

  const top = Number.parseInt(saved, 10);
  if (Number.isNaN(top)) return;

  scrollRoot.scrollTop = top;
}

export function scrollToPhotoIndex(
  index: number,
  scrollRoot: HTMLElement | null,
) {
  const item = document.getElementById(`photo-${photoNumberFromIndex(index)}`);
  if (!item) return;

  requestAnimationFrame(() => {
    item.scrollIntoView({ block: "center", behavior: "auto" });
    savePhotosScroll(scrollRoot);
  });
}
