const express=require('express');
const {creategroup,findClassByField,querymiddleware,findAllClass} =require('../controller/group.controller');
const route=express.Router();
route.post('/create',creategroup);
route.get('/find',findClassByField);
route.get('/find/all',findAllClass);
module.exports=route;