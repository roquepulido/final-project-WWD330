// Render template
/**
 * Render the template in the HTMLElement of tye querySelector
 * @param template
 * @param querySelector
 * @param clear Default true
 */
export function renderWithTemplate(
  template: string,
  querySelector: string,
  clear: boolean = false
) {
  const parentElement: HTMLElement | null =
    document.querySelector(querySelector);
  if (parentElement) {
    // validate if need to clear the parentElement

    if (clear) {
      parentElement.innerHTML = "";
    }
    parentElement.innerHTML += template;
  }
}

export function setClick(
  querySelector: string,
  callback: (event: Event) => void
): void {
  document.querySelector(querySelector)?.addEventListener("click", callback);
}
