import { ApiTastyService } from "./service/ApiTastyService";
import { RequestService } from "./service/RequestService";

const requestService: RequestService = new RequestService();

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export function test(button: HTMLButtonElement, input: HTMLInputElement) {
  const apiTastyService: ApiTastyService = new ApiTastyService(requestService);
  button.addEventListener("click", async () => {
    const valor = await apiTastyService.getRecipesList(input.value);
    console.log(valor);
  });
}
