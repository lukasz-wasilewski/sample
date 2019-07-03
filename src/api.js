export const get = async url => {
  let data;
  const response = await fetch(url, {
    method: 'GET'
  });
  data = await response.json();
  return { data };
};

export const post = async (url, body, headers) => {
  const customHeaders = new Headers({
    'Content-Type': 'application/json',
    ...headers
  });
  let data, count, limit, offset;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: customHeaders
  });
  data = await response.json();
  count = response.headers.get('x-pagination-count');
  limit = response.headers.get('x-pagination-limit');
  offset = response.headers.get('x-pagination-offset');
  return {
    data,
    headers: {
      count,
      limit,
      offset
    }
  };
};
