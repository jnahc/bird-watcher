const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
  firstName: {type:String, required:true}, // Mininum character length
  lastName: {type:String, required:true},
  email: {type:String, required:true},
  pNWRegion: {type: Boolean, default: true}, 
  cSWRegion: {type: Boolean, default: true}, 
  mWRegion: {type: Boolean, default: true}, 
  nERegion: {type: Boolean, default: true}, 
  aCRegion: {type: Boolean, default: true}, 
  socialEvent: {type: Boolean, default: true}, 
  academicEvent: {type: Boolean, default: true}, 
  outingsEvent: {type: Boolean, default: true}, 
  frequency: {type:String, required:true},
  dateCreated: {
    type: Date,
    default: Date.now,
    min: 4,
  },
});


const Subscriber = mongoose.model(`Subscriber`, SubscriberSchema);
module.exports = Subscriber;