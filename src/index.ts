import app from "./app.js";
import { connectToMongodb } from "./db/connection.js";
const port = process.env.PORT || 8000

connectToMongodb()
  .then(() => {
    app.listen(port, () => console.log("Server Open"))
  })
  .catch(
    (err) => console.log(err)
  )

//connections and listners

