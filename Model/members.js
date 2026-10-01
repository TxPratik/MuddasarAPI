let mongoose=require("mongoose")
mongoose.connect("mongodb+srv://pratikchindhe44:pratik123@cluster0.z8syx.mongodb.net/Dfitness")
let Schema=mongoose.Schema;
let userSchema=new Schema({
  name: String,
  mobile: String,
  membership: String,
  join_date: Date,
  membership_started: Date,
  membership_ending: Date,
  membership_status: String,
  payment_status: String,
  plan_name: String,
  plan_fees: String,
  paid_fees: String,
  image: String
})
module.exports = mongoose.model("members", userSchema);