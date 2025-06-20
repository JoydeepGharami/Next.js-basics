
import mongoose, { Schema } from "mongoose"
import { type } from "os"
const contactSchema = new Schema({
 fullname:{
    type:String,
    required:[true,"Name is required"],
    trim:true,
    minLenght:[2,"Name must be larger than 2 characters"]

 },
 email:{
    type:String,
    required:[true,"Email is required "]
 },
 message:{
    required:[true,"message is required"]
 },
 date:{
    type:Date,
    dafault:Date.now,
 },
});
const Contact =mongoose.models.Contact||mongoose.model("Contact",contactSchema);
export default Contact;


