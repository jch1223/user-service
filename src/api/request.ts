interface RequestOptions {
  headers?: any;
  method?: string;
  url: string;
  data?: any;
}

const api_url = 'https://ably-frontend-assignment-server.vercel.app/api';

export default async function request(params: RequestOptions) {
  const url = `${api_url}/${params.url}`;
  const options: RequestInit = {
    method: params.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...params.headers,
    },
  };

  if (params.data) {
    options.body = JSON.stringify(params.data);
  }

  const response = await fetch(url, options);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error.message);
  }

  return await result;
}
