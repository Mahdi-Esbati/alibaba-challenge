const BASE_URL = 'https://restcountries.com/v3.1';

type FetchMethod = 'GET' | 'POST';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ApiRequestObject<RequestType, _ResponseType> = {
  endpoint: string;
  method: FetchMethod;
  body?: RequestType;
};

async function httpService<RequestType, ResponseType>(
  request: ApiRequestObject<RequestType, ResponseType>
): Promise<ResponseType> {
  const requestOptions: RequestInit = {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: request.body ? JSON.stringify(request.body) : undefined,
  };

  try {
    const response = await fetch(`${BASE_URL}/${request.endpoint}`, requestOptions);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = (await response.json()) as ResponseType;
    return data;
  } catch (error: any) {
    throw new Error(`An error occurred: ${error?.message}`);
  }
}

export default httpService;
