import { RecipeResult } from "./model/ApiTasty/RecipesListResponse";

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

export function removeRecipeLocalStorage(id: number): void {
  const data: RecipeResult[] = getLocalStorage("recipes");
  const filteredData = data.filter((recipe) => recipe.id != id);
  setLocalStorage("recipes", filteredData);
}

export function showNotification(
  message: string,
  type: "success" | "error" = "success"
): void {
  const container = document.getElementById("notification-container");
  if (!container) return;

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  container.appendChild(notification);

  // Eliminar la notificación después de 3 segundos
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

export function exportJSON(
  data: string,
  filename: string = "recipes_backup.json"
): void {
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function importJSON<T>(): Promise<T | null> {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";

    input.addEventListener("change", (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) {
        resolve(null); // Devuelve `null` si no se selecciona un archivo
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          try {
            const data = JSON.parse(e.target.result as string) as T;
            resolve(data); // Resuelve la promesa con el JSON importado
          } catch (error) {
            reject(new Error("Invalid JSON file: " + (error as Error).message));
          }
        } else {
          reject(new Error("No data read from file"));
        }
      };

      reader.onerror = () => {
        reject(new Error("Error reading file"));
      };

      reader.readAsText(file);
    });

    input.click();
  });
}
