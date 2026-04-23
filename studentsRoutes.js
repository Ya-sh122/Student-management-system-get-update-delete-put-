const express = require('express');
const stuController = require('../controller/studentsController');
const router= express.Router();

router.post("/",stuController.addStudent)
router.put("/:id", stuController.updateStu)
router.delete("/:id", stuController.stuDelete)

router.post("/addingStudentWithCard",stuController.addingValueToStudentAndIdentityTable)
module.exports= router;