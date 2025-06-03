import express from "express";


const app = express()
//GET
//PUT
//POST
//DELETE


// Midleware
app.use(express.json())
// app.post("/hello", (req, res, next) => {
//   console.log(req.body.name)
//   return res.send("hello shivank are you making ai")
// });

app.delete("/user/:userId", (req, res) => {
  console.log("DELETE route hit"); // 👈 Add this
  console.log(req.params.userId);
  return res.send("hello shivank are you making ai");
});


//connections and listners
app.listen(8000, () => console.log("Server Open"))
