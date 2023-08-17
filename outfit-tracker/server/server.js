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
app.get("/clothing", async (req, res) =>{
    try{
        const clothing = await db.query("SELECT * FROM clothing")
        res.status(200).json({
            status: "complete",
            results: clothing.rows.length,
            data: {
                clothing: clothing.rows
            }
        })
    } catch (err) {
        console.log(err)
    }
})

// GET ALL TOPS
app.get("/clothing/tops", async (req, res) =>{
  try{
      const clothing = await db.query("SELECT * FROM clothing WHERE category = 'Tops';")
      res.status(200).json({
          status: "complete",
          results: clothing.rows.length,
          data: {
              clothing: clothing.rows
          }
      })
  } catch (err) {
      console.log(err)
  }
})

// GET ALL BOTTOMS
app.get("/clothing/bottoms", async (req, res) =>{
  try{
      const clothing = await db.query("SELECT * FROM clothing WHERE category = 'Bottoms';")
      res.status(200).json({
          status: "complete",
          results: clothing.rows.length,
          data: {
              clothing: clothing.rows
          }
      })
  } catch (err) {
      console.log(err)
  }
})

// GET ALL SHOES
app.get("/clothing/shoes", async (req, res) =>{
  try{
      const clothing = await db.query("SELECT * FROM clothing WHERE category = 'Shoes';")
      res.status(200).json({
          status: "complete",
          results: clothing.rows.length,
          data: {
              clothing: clothing.rows
          }
      })
  } catch (err) {
      console.log(err)
  }
})

// GET CLOTHING ITEM
app.get("/clothing/:id", async (req,res) => {
    try{
        const clothingItem = await db.query("SELECT * FROM clothing WHERE clothing_id = $1;", [req.params.id])
        res.status(200).json({
          status: "success",
          data: {
            clothing: clothingItem.rows[0],
          },
        });
    } catch (err) {
        console.log(err)
    }
})

// CREATE CLOTHING ITEM 
app.post("/clothing", async (req, res) => {
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
    try {
      const deleteClothingItem = db.query("DELETE FROM clothing WHERE clothing_id = $1;", [req.params.id]);
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

//GET ALL OUTFITS
app.get("/outfits", async (req, res) =>{
    try{
        const outfits = await db.query("SELECT * FROM outfits;")
        res.status(200).json({
          status: "complete",
          results: outfits.rows.length,
          data: {
              outfits: outfits.rows
          }
      })
    } catch (err) {
        console.log(err)
    }
})

// GET ONE OUTFIT
app.get("/outfits/:id", async (req,res) => {
  try{
      const outfit = await db.query("SELECT * FROM outfits WHERE outfits_id = $1;", [req.params.id])
      res.status(200).json({
        status: "success",
        data: {
          outfits: outfit.rows[0],
        },
      });
  } catch (err) {
      console.log(err)
  }
})

// CREATE AN OUTFIT 
app.post("/outfits", async (req, res) => {
  try {
    const newOutfit = await db.query(
      "INSERT INTO outfits (user_email, title, tops, bottoms, shoes, notes) values ($1, $2, $3, $4, $5, $6);",
      [req.body.user_email, req.body.title, req.body.tops, req.body.bottoms, req.body.shoes, req.body.notes]
    );
    res.json(newOutfit)
  } catch (err) {
    console.log(err);
  }
});

// EDIT AN OUTFIT
app.put("/outfits/:id", async (req, res) => {
  try {
    const editOutfit = await db.query(
      "UPDATE outfits SET user_email = $1, title = $2, tops = $3, bottoms = $4, shoes = $5, notes = $6  WHERE outfits_id = $7;",
      [req.body.user_email, req.body.title, req.body.tops, req.body.bottoms, req.body.shoes, req.body.notes, req.params.id]
    );
    res.json(editOutfit)
  } catch (err) {
    console.log(err);
  }
});

// DELETE AN OUTFIT
app.delete("/outfits/:id", async (req, res) => {
  try {
    const deleteOutfit = db.query("DELETE FROM outfits WHERE outfits_id = $1;", [req.params.id]);
    res.json(deleteOutfit)
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});