const db = require('../utils/db-connection');

const addStudent=(req,res)=>{
    const {name, email, age} = req.body;
    const query = "INSERT INTO students (name, email, age) VALUES (?,?,?)";


    db.execute(query,[email,name,age], (err,result)=>{
        if (err) return res.status(500).json(err);

        console.log("Inserted:", result.insertId);
        res.send("Student added successfully");
    })
}


// GET ALL STUDENTS
const getEntries= (req, res) => {
    db.execute("SELECT * FROM students", (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

// GET STUDENT BY ID
const stubyID= (req,res)=>{
    const {id} = req.params;

    db.execute('SELECT * FROM students WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.length === 0) {
            return res.status(404).send("Student not found");
        }

        res.json(result[0]);
    });
};

// UPDATE STUDENT
const updateStu = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const query = "UPDATE students SET name=?, email=?, age=? WHERE id=?";

    db.execute(query, [name, email, age, id], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        console.log("Updated student:", id);
        res.send("Student updated successfully");
    });
};


//DELETE STUDENT
const stuDelete = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        console.log("Deleted student:", id);
        res.send("Student deleted successfully");
    });
};


module.exports= {
    addStudent,
    getEntries,
    stubyID,
    updateStu,
    stuDelete
};