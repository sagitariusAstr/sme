const express = require("express");
const app = express();
const cors = require("cors");
// app.use(cors());

//alternative
app.use(cors({
    origin: 'http://localhost:3000'
  }));
  

const auth_routes = require("./src/routes/auth.routes");
const people_routes = require("./src/routes/people.routes");
const info_routes = require("./src/routes/info.routes");
const visit_routes = require("./src/routes/visit.routes");
const feasibility_routes = require("./src/routes/feasibility.routes");
const user_routes = require("./src/routes/user.routes");
const sales_routes = require("./src/routes/sales.routes");
const fetchvisit_routes = require("./src/routes/fetchvisitdata.routes");
const fetchsales_routes = require("./src/routes/fetchsalesdata.routes");
const activation_routes = require("./src/routes/activation.routes");    
// require('./config/mongoose.config');

require('./config/mariadb.config');




app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))



app.use(auth_routes);
app.use(people_routes);
app.use(info_routes);
app.use(visit_routes);
app.use(user_routes);
app.use(fetchvisit_routes);
app.use(sales_routes);
app.use(fetchsales_routes);
app.use(activation_routes);
app.use(feasibility_routes);








app.use((req,res,next) => {
    next({status:404, msg:"Resource not found"})
})

app.use((error,req,res,next)=>{
    console.log("Error:",error);
    let status = error.status || 500;
    let msg = error.msg || error
    res.status(status).json({result: null, status: false,msg:msg})
});

//Hosting server configuration

// app.listen(process.env.PORT||80,"api.smeappbiz.com",(err) =>{
// 	console.log("Server started at 7000");
// 	console.log("Press ctrl + c to quit");
// });



//local configuration

app.listen(7000,"localhost",(err) =>{
	console.log("Server started at 7000");
	console.log("Press ctrl + c to quit");
});