const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();

getDB = () => {
  return firestore;
};

module.exports = {
    getDB
}
