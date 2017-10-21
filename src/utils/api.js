function validateStatusCode(response) {
  return new Promise((resolve, reject) => {
    const status = response.status;
    const next = status < 400 ? resolve : reject;
    response.text().then(next);
  });
}

function onResponseValid(payload) {
  return new Promise((resolve, reject) => resolve(parsePayload(payload)))
}

function onResponseInvalid(payload) {
  return new Promise((resolve, reject) => reject(parsePayload(payload)))
}


function parsePayload(payload) {
  try {
    return JSON.parse(payload);
  } catch (err) {
    return payload;
  }
}

function makeRequest(method, url, token, data = null) {
  let fetchParams = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-Authorization': `Bearer ${token}`
    }
  };
  if (data) fetchParams.body = JSON.stringify(data);
  return fetch(`http://localhost:8080/api${url}`, fetchParams)
    .then(validateStatusCode)
    .catch(onResponseInvalid)
    .then(onResponseValid);
}

export function get(url, token) {
  return makeRequest('GET', url, token)
    .then((response) => response.response.objects);
}

export function getOne(url, token) {
  return get(url, token)
    .then((objects) => objects[0]);
}

export function post(url, data, token) {
  return makeRequest('POST', url, token, data);
}

export function update(url, data, token) {
  return makeRequest('PUT', url, token, data);
}

export function patch(url, data, token) {
  return makeRequest('PATCH', url, token, data);
}

export function remove(url, token, data = null) {
  return makeRequest('DELETE', url, token, data);
}

export function getImageUrl(data, token) {
  return post('getImageUrl', data, token);
}