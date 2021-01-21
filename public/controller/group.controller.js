const { query } = require('express');
const {savedata,findAll,findByField}=require('../services/group.service');


exports.creategroup=async(req,res)=>{
    //console.log(date()+42)
    try{
    const datas=await savedata(req.body);
    // if(!datas.hasOwnProperty('data')) res.status(400).json({ error: error.toString() });
    if(datas.hasOwnProperty('data')) res.status(200).json({data:datas.data,message:"created successfully"});
    }catch(e){
        console.log(e);
        res.status(400).json({ error: e });
    }
};

exports.findAllClass=async(req,res)=>{
    const data=await findAll();
    res.status(200).json({data:data,message:'ok'});
};

exports.findClassByField=async(req,res)=>{
    
    const data= await findByField({...req.query});
    console.log(data);
    if(data.length==0) res.status(403).json({message:'no search found....'});
    res.status(200).json({data:data,message:'ok'});
}
exports.querymiddleware=async(input)=>{
    console.log(input.Type==undefined);
    if(input.Type==undefined && input.title==undefined && input.description==undefined&& input.start==undefined && input.end==undefined){
        res.send(302).json({message:'search field is needed...'});
    }
    var inputfield={}
    if(input.Type!=undefined){
        inputfield['Type']=input.Type;

    }
    if(input.start!=undefined){
        inputfield['start']=input.start;

    }
    // if(req.query.end!=undefined){
    //     inputfield['end']=req.query.end;

    // }
    // if(req.query.title!=undefined){
    //     inputfield['title']=req.query.title;

    // }
    // if(req.query.description!=undefined){
    //     inputfield['description']=req.query.descriptions;

    // }
    
    console.log(inputfield);
    return inputfield;
}
exports.handleerror=async(req,res,next)=>{
    throw new Error({error:req.e.message});
}