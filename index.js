const express = require("express");
const app = express();

// Routes
// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
//OR
require("./routes/authRoutes")(app);
require("./services/passport");

// app.get("/", (req, res) => {
//   res.send("i love you");
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);
