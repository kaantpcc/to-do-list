import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended : true}));

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let todayItems = [];
let workItems = [];

app.post("/", (req, res)=>{
    todayItems.push(req.body["toDoName"]);
    res.redirect("/");
});

app.get("/", (req, res)=>{
    res.render("index.ejs",{
        currentDay : days,
        currentMonth : months,
        todayItems : todayItems
    });
});

app.post("/work", (req, res)=>{
    workItems.push(req.body["workName"]);
    res.redirect("/work");
});

app.get("/work", (req, res)=>{
    res.render("work.ejs",{
        workItems : workItems
    });
});

app.listen(port, ()=>{
    console.log(`Listening on port ${3000}`);
});