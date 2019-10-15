const mongoose = require (`mongoose`);
const DB_URI = process.env.MONGODB_URI || `mongodb://localhost:27017/bird-watcher`

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(() => {console.log(`MongoDB successfully connected...`)})
// .catch() catch errors
.catch((error) => {console.log(error)});

module.exports = {
  Subscriber: require(`./Subscriber.js`),
}
