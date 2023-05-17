const BASE_URL = 'https://api.example.com';

type FetchMethod = 'GET' | 'POST';

async function httpService(url: string, method: FetchMethod = 'GET', body: Record<string, unknown> | null = null) {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  };

  try {
    const response = await fetch(`${BASE_URL}${url}`, requestOptions);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`An error occurred: ${error?.message}`);
  }
}

export default httpService;
