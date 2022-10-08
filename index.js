const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const userinfoRoute = require("./routes/userinfo");
const imageRoute = require("./routes/images");
const path = require('path');
var cors = require("cors");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

// Deployment
__dirname = path.resolve(); 

// for production build
if(process.env.NODE_ENV == 'production'){
  app.use(express.static(path.join(__dirname,"/idr_website/build")));

  app.get('*',(req, res) =>{
      res.sendFile(path.resolve(__dirname,'idr_website','build','index.html'))
  })
}


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/userinfos", userinfoRoute);
app.use("/api/images",imageRoute);
app.listen(process.env.PORT || 8080, () => {
  console.log("backend server is running");
});
