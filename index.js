// 1. Import express, axios, path, and body-parser
import express from "express";
import axios from "axios";


// 2. Create an express app and set the port number.
const app = express();
const port = 3001;


// 3. Use the public folder for static files.
app.use(express.static("public"));

// Set EJS as the view engine
app.set("view engine", "ejs");

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res) => {
  try {
    // 5. Use axios to get a random secret and pass it to index.ejs to display the secret and the username of the secret.
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index", { secret: result.data.secret, user: result.data.username });
  } catch (error) {
       console.log(error.response.data);
        res.status(500);
    // Handle errors properly
  }
});

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
