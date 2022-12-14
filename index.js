const express= require ('express');
const dotenv= require('dotenv');
const mongo= require("./connect");
const auth= require("./Modules/authModule")
const productRouter= require('./Routes/productRouter')
const registerRouter= require('./Routes/registerRouter')
const cors= require("cors");

dotenv.config();
const app= express();

mongo.Connect();

app.use(cors());
app.use(express.json())
app.set("view engine","ejs");
app.use(express.urlencoded({extended: false}));
app.use('/register',registerRouter);

app.use('/',auth.authenticUser);
app.use("/product",productRouter)
app.listen(process.env.PORT);