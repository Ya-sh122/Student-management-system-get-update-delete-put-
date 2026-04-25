const db = require('../utils/db-connection');
const Student = require('../models/students');
const IdentityCard  = require('../models/identitycard');


//ADD students - POST
const addStudent= async(req,res)=>{
   try{
        const {name, email}= req.body;
        const student = await Student.create({
            name:name,
            email:email
        });

        res.status(201).send(`User with name: ${name} is created!`)

   }catch(error){
        res.status(500).send('Unable to make an entry.');
   }
}

const addingValueToStudentAndIdentityTable= async(req,res)=>{
    try{
        const student = await Student.create(req.body.student);
        const idCard = await IdentityCard.create({
            ...req.body.IdentityCard,
            StudentId:student.id
        })
        
        res.status(201).json({student,idCard});

    }catch(error){
        res.status(500).json({error:error.message});
    }
}




// UPDATE STUDENT - PUT
const updateStu = async (req, res) => {
    try{
        const { id } = req.params;
        const {name, email} = req.body;

        const student= await Student.findByPk(id);
        if(!student){
           return res.status(404).send("User is not found");
        }

        student.name = name;
        student.email = email;
        
        await student.save();
        
        return res.status(200).send("User has been updated!")
    }catch(error){
        res.status(500).send("User cannot be updated");
    }
};


//DELETE STUDENT
const stuDelete = async(req, res) => {
    try{
        const {id} = req.params;
        const student= await Student.destroy({
            where:{
                id:id
            }
        })

        if(!student){
            res.status(404).send('User is not found');
        }
        res.status(200).send('User is deleted');
    
    } catch(error){
        console.log(error);
        res.status(500).send('Error encountered while deleting.')
    }
    
};


module.exports= {
    addStudent,
    updateStu,
    stuDelete,
    addingValueToStudentAndIdentityTable
};