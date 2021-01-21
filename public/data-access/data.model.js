const mongoose=require("mongoose");
const eType=require('./eData');
const schema=mongoose.Schema;
const groupSchema=new schema({
    title:{
        type:String,
        required:true,
        minlength:4,
        maxlength:80
    },
    description:{
        type:String,
        minlength:15,
        maxlength:600

    },
    maxNumberOfStudents:{
        type:Number,
        required:true,
        min:1,
        max:80
    },
    Type:{
        type:String,
        required:true,
        enum:Object.values(eType)
    },
    start:{
        type:Date
    },
    End:{
        type:Date
    }
})

module.exports=mongoose.model('groupDetails',groupSchema);