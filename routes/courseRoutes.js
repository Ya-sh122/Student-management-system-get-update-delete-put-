const express = require('express');
const courseController = require('../controller/courseController');
const router= express.Router();



router.post('/addcourses', courseController.addCourse);
router.post('/addStudentCourses', courseController.addStudentToCourses);


module.exports=router;