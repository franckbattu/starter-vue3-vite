import axios from 'axios';

const urls: Record<string, string> = {
  "/api": "https://jsonplaceholder.typicode.com",
};

async function get<T>(path: string, params?: Record<string, string | string[]>): Promise<T> {
  const url = getFormattedUrl(path);
  const response = await axios.get<T>(url, { params });
  return response.data;
}

async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
  const url = getFormattedUrl(path);
  const response = await axios.post<T>(url, body);
  return response.data;
}

// TODO: check performances of this
function getFormattedUrl(path: string): string {
  Object.keys(urls).forEach((key: string) => {
    if (path.startsWith(key)) {
      path = path.replace(key, urls[key]);
      return path;
    }
  })
  return path;
}

export type ApiServiceType = {
  get: <T>(path: string, params?: Record<string, string | string[]> | undefined) => Promise<T>;
  post: <T>(path: string, body: Record<string, unknown>) => Promise<T>;
}

export function useApiService(): ApiServiceType {
  return {
    get,
    post,
  }
}