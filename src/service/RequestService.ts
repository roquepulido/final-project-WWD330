export class RequestService {
  async get<T>(url: string, options: any): Promise<Awaited<T>> {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  }
}
