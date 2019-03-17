let baseUrl = "https://api.github.com/users";

const createUserProfileUrl = userName => `${baseUrl}/${userName}`;

const createUserReposUrl = userName => `${baseUrl}/${userName}/repos`;

const createHeaders = token => {
  return {
    Authorization: "token " + token
  };
};

export const handleResponse = async response => {
  if (response.ok) {
    return await response.json();
  }
  if (response.status === 401) {
    return Promise.reject("Invalid token");
  }
  if (response.status === 404) {
    return Promise.reject("Invalid username");
  }
  return Promise.reject("Something went wrong. Try again");
};

export const getUser = async (token, userName) => {
  const headers = createHeaders(token);
  const url = createUserProfileUrl(userName);

  const response = await fetch(url, { headers });
  return await handleResponse(response);
};

export const getRepos = async (token, userName) => {
  const headers = createHeaders(token);
  const url = createUserReposUrl(userName);

  const response = await fetch(url, { headers });
  return await handleResponse(response);
};
