export namespace ApiResponse {
  export interface ResponseData<T> {
    data: T;
    error?: Error | null;
  }
  export interface Todo {
    userId?: number;
    id: number;
    title?: string;
    completed?: boolean;
  }
}
