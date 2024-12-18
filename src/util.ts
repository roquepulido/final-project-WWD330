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

// retrieve data from localstorage
export function getLocalStorage(key: string): any {
  const data: string | null = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  } else {
    console.error(`Error getLlocalStorage key:${key} not found.`);
    return null;
  }
}
// save data to local storage
export function setLocalStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function appendLocalStorage<T>(key: string, data: T): void {
  const infoLocalStorage: T[] = getLocalStorage(key);
  infoLocalStorage.push(data);
  setLocalStorage(key, infoLocalStorage);
}
