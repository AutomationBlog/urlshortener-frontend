const baseUrl = `${import.meta.env.VITE_BACKEND_URL}`;

function createUser() {
  return fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
}
