const asyncHandler=require('express-async-handler')
const Contact=require("../models/contactModel")
//@desc get all contacts
// @route GET /api/contacts
//@access public
const getContacts=asyncHandler(async(req,res)=>{
    const contacts=await Contact.find();
    res.status(200).json(contacts)
})
//@desc create contacts
// @route POST /api/contacts
//@acess public
const createContact=asyncHandler(async(req,res)=>{
    console.log("The request body is ",req.body);
    const {name,email,phone}=req.body;
    if(!name||!email||!phone)
        {
            res.status(400);
            throw new Error("All fields are not filled up!!")
        }
    const contact=await Contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact)
})
//@desc get individual contact
// @route GET /api/contacts/:id
//@access public
const getContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact)
})
//@desc update individual contact
// @route GET /api/contacts/:id
//@access public
const updateContact=asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
    res.status(200).json(updatedContact);
})
//@desc delete individual contact
// @route GET /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    await contact.deleteOne();  // Corrected line
    res.status(200).json(contact);
});




module.exports={getContacts,createContact,getContact,updateContact,deleteContact}