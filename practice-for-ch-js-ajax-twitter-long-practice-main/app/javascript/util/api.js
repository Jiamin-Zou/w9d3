const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    ...options.headers
  };

  return await fetch(url, options);
}

function followUser(id) {
  customFetch(`/users/${id}/follow`, {
    method: "POST"
  })
}
function unfollowUser(id) {
  customFetch(`/users/${id}/follow`, {
    method: "DELETE"
  })
}

// export const foo = "bar";  // call this by API.foo 