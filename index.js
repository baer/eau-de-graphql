import fetch from "isomorphic-fetch";

/**
 * @param  {String} apiRoot   The GraphQL API's URL
 * @param  {String} query     A GraphQL query
 * @param  {Object} variables The GraphQL's query variables
 * @return {Promise}          A Promise resolving to a fetch result
 */
const makeRequest = (apiRoot, requestOptions) => (query, variables) => {
  return fetch(apiRoot, {
    method: requestOptions.method || "POST",
    headers: requestOptions.headers || new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ query, variables }),
  });
};

export default makeRequest;
