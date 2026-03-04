// const InvalidError extends Error {

// };

export interface ResponseData<T> {
  data: T;
  error: Error | null;
}
