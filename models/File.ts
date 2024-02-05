import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    filename:{
        type : String,
        required : true,
    },
    secure_url:{
        type: String,
        required : true,
    },
    format:{
        type: String,
        required : true,
    },
    sizeInBytes:{
        type: Number,
        required : true,
    },
    sender:{
        type : String,
    },
    receiver :{
        type:String
    }
},{
  timestamps : true
})

interface Ifile extends Document{
    filename : String,
    secure_url : String,
    sizeInBytes : Number,
    format : String,
    sender?: String,
    receiver?: String
}

export default mongoose.model<Ifile>("file",fileSchema)