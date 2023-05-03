const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers,
    'x-csrf-token': csrfToken,
    'Content-Type': 'application/json',
    'Accept': 'application/json'

  };
  // debugger
  const response = await fetch(url, options);
  // fetch(url, options)
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json()
  //     } else {
  //       throw response
  //     }
  //   }
  if(response.ok) {
    return response.json();
  } else {
    throw response;
  }
}

export function followUser(id) {
  // debugger
  return customFetch(`/users/${id}/follow`, {
    method: 'POST'
  })
}
export function unfollowUser(id) {
  // debugger
  return customFetch(`/users/${id}/follow`, {
    method: 'DELETE'
  })
}

// export const foo = "bar";  // call this by API.foo 