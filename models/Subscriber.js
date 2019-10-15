const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
  firstName: {type:String, required:true}, // Mininum character length
  lastName: {type:String, required:true},
  email: {type:String, required:true},
  region: [String], // mention to UX team - different approach
  events: [String],
  frequency: {type:String, required:true},
  dateCreated: {
    type: Date,
    default: Date.now,
    min: 4,
  },
});


const Subscriber = mongoose.model(`Subscriber`, SubscriberSchema);
module.exports = Subscriber;