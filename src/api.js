export const callApi = (endpoint, path, mapperFn = d => d) =>
  fetch(endpoint + path)
    .then(response =>
      response
        .json()
        .then(json => ({ json, response }))
        .catch(() => ({ response })),
    )
    .then(({ json = {}, response }) => {
      if (!response.ok) {
        const code = response.status;
        const { message } = json;
        if (message) {
          console.error(message);
        }
        console.error(`${code}: ${message}`);
        return Promise.reject({ code });
      }
      return mapperFn(json);
    })
    .then(response => ({ response }))
    .catch(error => ({ error }));
