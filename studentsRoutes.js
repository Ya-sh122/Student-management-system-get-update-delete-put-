const express = require('express');
const stuController = require('../controller/studentsController');
const router= express.Router();

router.post("/",stuController.addStudent)
router.get("/", stuController.getEntries)

router.get("/:id", stuController.stubyID)
router.put("/:id", stuController.updateStu)
router.delete("/:id", stuController.stuDelete)

module.exports= router;