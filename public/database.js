const mongoose=require("mongoose");
const schema=mongoose.Schema;
const userSchema=new schema({
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
        required:true
    },
    Phone:{
        type:Number,
        required:true
    },
    Location:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('userDetails',userSchema);