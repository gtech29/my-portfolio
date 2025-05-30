const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

function getAccessToken() {
  return admin.credential
    .applicationDefault()
    .getAccessToken()
    .then((accessToken) => {
      console.log("Access token:", accessToken.access_token);
      return accessToken.access_token;
    })
    .catch((err) => {
      console.error("Unable to get access token");
      console.error(err);
    });
}

getAccessToken();
