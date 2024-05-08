import axios from "axios";

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: any;
}

export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await axios.get<T>(url);
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(
        Object.entries(response.headers)
          .filter(([_, v]) => v !== undefined)
          .map(([k, v]) => [k, v as string])
      ),
      config: response.config,
    };
  } catch (error) {
    throw error;
  }
}
