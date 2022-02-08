export async function getUsers(BASE_URL) {
  return await fetch(BASE_URL, {
    headers: new Headers({
      Authorization: `token ${process.env.REACT_APP_TOKEN}`,
    }),
  });
}

export async function getSingleUser(BASE_URL) {
  return await fetch(BASE_URL, {
    headers: new Headers({
      Authorization: `token ${process.env.REACT_APP_TOKEN}`,
    }),
  });
}
