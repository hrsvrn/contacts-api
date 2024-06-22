//@desc get all contacts
// @route GET /api/contacts
//@access public
const getContacts=(req,res)=>{
    res.status(200).json({message:"Get all contacts"})
}
//@desc create contacts
// @route POST /api/contacts
//@acess public
const createContact=(req,res)=>{
    console.log("The request body is ",req.body);
    const {name,email,phone}=req.body;
    if(!name||!body||!phone)
        {
            res.status(400);
            throw new Error("All fields are not filled up!!")
        }
    res.status(201).json({message:"Create contacts"})
}
//@desc get individual contact
// @route GET /api/contacts/:id
//@access public
const getContact=(req,res)=>{
    res.status(200).json({message:`Get the details for the contact for ${req.params.id}`})
}
//@desc update individual contact
// @route GET /api/contacts/:id
//@access public
const updateContact=(req,res)=>{
    res.status(200).json({message:`update contact for ${req.params.id}`});
}
//@desc delete individual contact
// @route GET /api/contacts/:id
//@access public
const deleteContact=(req,res)=>{
    res.status(200).json({message:`delete contact for ${req.params.id}`});
}



module.exports={getContacts,createContact,getContact,updateContact,deleteContact}