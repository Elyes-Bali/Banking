const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");

const Formulaire = require("../models/formulaireSchema");

router.post("/save", async (req, res) => {
  // console.log(req.body);
    try {
      const newForm = new Formulaire({
        ...req.body
      })

      // Get body or Data
      // const {
      //   userId,
      //   authfor,
      //   authcateg,
      //   annex1,
      //   annex2,
      //   annex3,
      //   annex4,
      //   annex5,
      //   annex6,
      //   annex7,
      //   annex8,
      //   annex9,
      //   annex10,
      //   annex11,
      //   categ1,
      //   categ2,
      //   categ3,
      //   categ4,
      //   categ5,
      //   categ6,
      //   categ7,
      //   categ8,
      //   categ9,
      //   categ10,
      //   categ11,
      //   categ12,
      //   categ13,
      //   categ14,
      //   categ15,
      //   categ16,
      //   categ17,
      //   categ18,
      //   categ19,
      //   categ20,
      //   categ21,
      //   categ22,
      //   categ23,
      //   categ24,
      //   categ25,
      //   grille1,
      //   grille2,
      //   grille3,
      //   grille4,
      //   grille5,
      //   grille6,
      //   grille7,
      //   grille8,
      //   grille9,
      //   grille10,
      //   exig1,
      //   exig2,
      //   exig3,
      //   exig4,
      //   exig5,
      //   exig6,
      //   exig7,
      //   exig8,
      //   exig9,
      //   exig10,
      //   exig11,
      //   exig12,
      //   exig13,
      //   exig14,
      //   exig15,
      //   exig16,
      //   exig17,
      //   per1,
      //   per2,
      //   per3,
      //   per4,
      //   per5,
      //   per6,
      //   per7,
      //   per8,
      //   hum1,
      //   hum2,
      //   hum3,
      //   hum4,
      //   hum5,
      //   hum6,
      //   hum7,
      //   hum8,
      //   hum9,
      //   hum10,
      //   hum11,
      //   hum12,
      //   liquide1,
      //   liquide2,
      //   liquide3,
      //   liquide4,
      //   solide1,
      //   solide2,
      //   solide3,
      //   solide4,
      //   gaze1,
      //   gaze2,
      //   gaze3,
      //   gaze4,
      //   gaze5,
      //   gaze6,
      //   gaze7,
      //   danger1,
      //   danger2,
      //   danger3,
      //   danger4,
      //   danger5,
      //   danger6,
      //   danger7,
      //   danger8,
      //   urgance1,
      //   urgance2,
      //   urgance3,
      //   urgance4,
      // } = req.body;
      
  
      // const createFormulaire = new Formulaire({
      //   userId,
      //   authfor,
      //   authcateg,
      //   annex1,
      //   annex2,
      //   annex3,
      //   annex4,
      //   annex5,
      //   annex6,
      //   annex7,
      //   annex8,
      //   annex9,
      //   annex10,
      //   annex11,
      //   categ1,
      //   categ2,
      //   categ3,
      //   categ4,
      //   categ5,
      //   categ6,
      //   categ7,
      //   categ8,
      //   categ9,
      //   categ10,
      //   categ11,
      //   categ12,
      //   categ13,
      //   categ14,
      //   categ15,
      //   categ16,
      //   categ17,
      //   categ18,
      //   categ19,
      //   categ20,
      //   categ21,
      //   categ22,
      //   categ23,
      //   categ24,
      //   categ25,
      //   grille1,
      //   grille2,
      //   grille3,
      //   grille4,
      //   grille5,
      //   grille6,
      //   grille7,
      //   grille8,
      //   grille9,
      //   grille10,
      //   exig1,
      //   exig2,
      //   exig3,
      //   exig4,
      //   exig5,
      //   exig6,
      //   exig7,
      //   exig8,
      //   exig9,
      //   exig10,
      //   exig11,
      //   exig12,
      //   exig13,
      //   exig14,
      //   exig15,
      //   exig16,
      //   exig17,
      //   per1,
      //   per2,
      //   per3,
      //   per4,
      //   per5,
      //   per6,
      //   per7,
      //   per8,
      //   hum1,
      //   hum2,
      //   hum3,
      //   hum4,
      //   hum5,
      //   hum6,
      //   hum7,
      //   hum8,
      //   hum9,
      //   hum10,
      //   hum11,
      //   hum12,
      //   liquide1,
      //   liquide2,
      //   liquide3,
      //   liquide4,
      //   solide1,
      //   solide2,
      //   solide3,
      //   solide4,
      //   gaze1,
      //   gaze2,
      //   gaze3,
      //   gaze4,
      //   gaze5,
      //   gaze6,
      //   gaze7,
      //   danger1,
      //   danger2,
      //   danger3,
      //   danger4,
      //   danger5,
      //   danger6,
      //   danger7,
      //   danger8,
      //   urgance1,
      //   urgance2,
      //   urgance3,
      //   urgance4,
      // });
  
      const created = await newForm.save();
  
      res.send({msg:"Saved succefully",form:created})
  
  
      // console.log(created);
    } catch (error) {
      res.status(400).send(error);
    }
  });


  router.get("/getallformule", async(req,res) =>{
    try {
      const cvs = await Formulaire.find()
      res.send({result:cvs})
    } catch (error) {
      
    }
  })

  router.put("/update" , async(req,res) => {
    // console.log(req.body)
    try{
      const result= await Formulaire.findByIdAndUpdate({_id:req.body._id},{$set:{...req.body}})
      res.send("formulaire updated")
    }catch(error){
        res.status(400).send({message:"No formulaire with this id"})
    }
  }, )

  router.get("/:id", async(req,res)=>{
    console.log(req.params.id)
    try {
      const result = await Formulaire.findOne({userId:req.params.id})
      return res.status(200).send({forme:result})
    } catch (error) {
      console.log(error)
    }
  })

  router.put("/edite/:id" , async(req,res) => {
    console.log(req.body)
    try{
      const result= await Formulaire.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
      res.send({msg:"formulaire updated",form:result})
      console.log(result);
    }catch(error){
        res.status(400).send({message:"No formulaire with this id"})
    }
  }, )

  module.exports = router;