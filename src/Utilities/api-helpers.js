const loginUrl = "http://localhost:3000/user-login";
const criterionFilmUrl = "http://localhost:3000/criterion-database";
const collectionUrl = "http://localhost:3000/user-collections";

const getFilmData = () => {
  return fetch(criterionFilmUrl).then((resp) => resp.json());
};

const getLoginData = () => {
  return fetch(loginUrl).then((resp) => resp.json());
};

const getCollectionData = (userId) => {
  return fetch(`${collectionUrl}/${userId}`).then((resp) => resp.json());
};

function updateCollection(updated) {
  return getLoginData().then((data) => {
    const id = data[0].id;
    return fetch(`${collectionUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: updated,
      }),
    }).then((resp) => resp.json());
  });
}

export {
  loginUrl,
  criterionFilmUrl,
  collectionUrl,
  getFilmData,
  getLoginData,
  getCollectionData,
  updateCollection,
};
