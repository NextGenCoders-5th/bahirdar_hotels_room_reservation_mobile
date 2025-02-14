export interface CreateResponse {
  status: string;
  message: string;
  data: {
    id: string;
  };
}

export interface ErrorResponse {
  status?:
    | number
    | 'FETCH_ERROR'
    | 'PARSING_ERROR'
    | 'TIMEOUT_ERROR'
    | 'CUSTOM_ERROR';
  message?: string | any;
  data?: {
    status: string;
    message: string;
    errors?: string[];
  };
}
