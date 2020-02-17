export const axios = require('axios');

export function getData(url) {
  axios.post(url)
    .then((results) => {
      console.log(results);
    })
    .catch((data) => {
      console.log(data);
    })
}

export function postData(url, data) {
  axios.post(url, data)
    .then((results) => {
      console.log(results);
    })
    .catch((data) => {
      console.log(data);
    })
}

export function deleteData(url) {
  axios.delete(url)
    .then((results) => {
      console.log(results)
    })
    .catch((data) => {
      console.log(data)
    })
}

export function googleSignInCheck() {
  window.gapi.load('client:auth2', () => {
    window.gapi.client.init({
      clientId: process.env.REACT_APP_CLIENT_ID,
      scope: "email"
    }).then(() => {
      const isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
      if (!isSignedIn) {
        window.location.href = '/login';
      };
    })
  });
}

export function objectIsEmpty(obj){
  return !Object.keys(obj).length;
}