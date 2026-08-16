const initializedRoots = new WeakSet<HTMLElement>();

const UNDERLINE_SELECTOR = ".nav-underline";
const ITEM_SELECTOR = "[data-nav-item]";
const LABEL_SELECTOR = "[data-nav-label]";

function setupNavUnderline(root: HTMLElement): void {
  if (initializedRoots.has(root)) return;

  const underline = root.querySelector(UNDERLINE_SELECTOR);
  if (!(underline instanceof HTMLElement)) return;

  initializedRoots.add(root);

  const items = root.querySelectorAll(ITEM_SELECTOR);
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const transitionMs = reducedMotion ? 0 : 300;

  underline.style.transitionDuration = `${transitionMs}ms`;

  const moveUnderline = (item: HTMLElement) => {
    const rootRect = root.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const label = item.querySelector(LABEL_SELECTOR);
    const labelRect =
      label instanceof HTMLElement ? label.getBoundingClientRect() : itemRect;
    const offset = parseFloat(getComputedStyle(label ?? item).fontSize) * 0.35;

    underline.style.width = `${itemRect.width}px`;
    underline.style.transform = `translate3d(${itemRect.left - rootRect.left}px, ${labelRect.bottom - rootRect.top + offset}px, 0)`;
    underline.style.opacity = "1";
  };

  items.forEach((item) => {
    if (!(item instanceof HTMLElement)) return;

    item.addEventListener("mouseenter", () => {
      moveUnderline(item);
    });
  });

  root.addEventListener("mouseleave", () => {
    underline.style.opacity = "0";
  });
}

export function setupAllNavUnderlines(
  selector = "[data-nav-underline-root]",
): void {
  document.querySelectorAll(selector).forEach((root) => {
    if (root instanceof HTMLElement) setupNavUnderline(root);
  });
}
