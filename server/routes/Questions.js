const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const Question = require("../models/questionSchema");

router.post("/save", async (req, res) => {
    console.log(req.body);
      try {
        const newQuest = new Question({
          ...req.body
        })

        const created = await newQuest.save();
    
        res.send({msg:"Saved succefully",quest:created})
    
    
        console.log(created);
      } catch (error) {
        res.status(400).send(error);
      }
    });

    router.get("/getallquest", async(req,res) =>{
        try {
          const cvs = await Question.find()
          res.send({result:cvs})
        } catch (error) {
          
        }
      })

    router.put("/edite/:id" , async(req,res) => {
        console.log(req.body)
        try{
          const result= await Question.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
          res.send({msg:"question updated",quest:result})
          console.log(result);
        }catch(error){
            res.status(400).send({message:"No question with this id"})
        }
      }, )

      router.delete("/spquest/:id", async (req, res) => {
        console.log(req.body);
        try {
          const result = await Question.findByIdAndDelete({ _id: req.params.id });
          res.send({msg:"question deleted",quest:result});
        } catch (error) {
          res.status(400).send({ message: "No question with this id" });
        }
      });
      
  module.exports = router;