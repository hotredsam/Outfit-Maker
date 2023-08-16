require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require("./db")
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

const app = express()

app.use(cors())
app.use(express.json())

// GET ALL CLOTHING
app.get("/clothing/:userEmail", async (req, res) =>{
  console.log(req)
  const { userEmail } = req.params
    try{
        const clothing = await db.query("SELECT * FROM clothing WHERE user_email = $1;", [userEmail])
        res.json(clothing.rows)
    } catch (err) {
        console.log(err)
    }
})

// GET CLOTHING ITEM
// app.get("/clothing/:id", async (req,res) => {
//     try{
//         const results = await db.query("select * from test where id = $1;", [req.params.id])
//         //const results = await db.query("select * from clothing where id = $1", [req.params.id])
        
//         res.status(200).json({
//             status: "complete",
//             data: {
//                 test: results.rows[0]
//                 //clothing: results.row[0]
//             }
//         })
//     } catch (err) {
//         console.log(err)
//     }
// })

// CREATE CLOTHING ITEM 
app.post("/clothing", async (req, res) => {
    //const { user_email, photo, title, category, color } = req.body
    try {
      const newClothingItem = await db.query(
        "INSERT INTO clothing (user_email, photo, title, category, color) values ($1, $2, $3, $4, $5);",
        [req.body.user_email, req.body.photo, req.body.title, req.body.category, req.body.color]
      );
      res.json(newClothingItem)
    } catch (err) {
      console.log(err);
    }
  });

// EDIT CLOTHING ITEM 
app.put("/clothing/:id", async (req, res) => {
    // const { id } = req.params
    // const { user_email, photo, title, category, color } = req.body
    try {
      const editClothingItem = await db.query(
        "UPDATE clothing SET user_email = $1, photo = $2, title = $3, category = $4, color = $5  WHERE clothing_id = $6;",
        [req.body.user_email, req.body.photo, req.body.title, req.body.category, req.body.color, req.params.id]
      );
      res.json(editClothingItem)
    } catch (err) {
      console.log(err);
    }
  });

// DELETE CLOTHING ITEM
app.delete("/clothing/:id", async (req, res) => {
    const { id } = req.params
    try {
      const deleteClothingItem = db.query("DELETE FROM clothing WHERE clothing_id = $1;", [id]);
      res.json(deleteClothingItem)
    } catch (err) {
      console.log(err);
    }
  });

// SIGNUP
// app.post("/signup", async (req, res) => {
//   const { email, password } = req.body
//   const salt = bcrypt.genSaltSync(10)
//   const hashedPassword = bcrypt.hashSync(password, salt)
//   try {
//     await db.query("INSERT")
//   }catch (err) {
//     console.error(err)
//   }
// })

// LOGIN
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body
//   try {

//   }catch (err) {
//     console.error(err)
//   }
// })

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });