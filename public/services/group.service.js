const { resolve } = require('path');
const group=require('../data-access/data.model');

exports.savedata=async(data)=>{
      try{
      const saveddata= await group.create(data);
      console.log(saveddata);
      return {data:saveddata,message:'found'};
      }catch(e){
            console.log(e.message)
            throw e.message;
            //throw new Error({message:e.message})
      }
     
};
exports.findAll=async()=>{
      const data=await group.find();
      return data;
};

exports.findByField=async(data)=>{
      const datas=await group.find(data);
      return datas;
}
