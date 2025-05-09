// Base API response interface that can be extended by other responses

export interface ApiResponse<T> {
  data: T;
  meta?: any;
  statusCode: number;
  timestamp: string;
}
