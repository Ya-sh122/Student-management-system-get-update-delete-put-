
const Course = require('../models/courses');

const addCourse = async (req,res)=>{
    try{
        const {name}=req.body;
        const course=await Course.create({'name':name});

        res.status(201).json(course);
    }catch(error){
        res.status(500).json({'error':error.message});
    }
}

const addStudentToCourses = async(req,res)=>{

    try{
        const {studentId, courseIds}=req.body;

        const student= await Course.findAll({
            where:{
                id:courseIds
            }
        })

        await student.addCourse(course);

        const updateStudent = await Student.findByPk(studentId,{include:Course});
        res.status(200).json(updateStudent);
    }catch(error){

    }
}


module.exports={
    addCourse,
    addStudentToCourses
}