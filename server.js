const express = require ("express")
const app = express()

//assigning data from seed.js fle to apps variable 
const apps = require('./seed').apps;


app.get('/apps',(req,res)=>{

//will manipulate apps array from seed file according to params and assign it to allApps   
let allApps =[]

//--------------defining range variables---------------
let by = req.query.by
let start = req.query.start||0
let end = req.query.end 
let max = req.query.max||50
let order = req.query.order||"ASC" 
//......................................................


//checking if start was entered as a Name, and looking for that name in the array
if(start!=0 && start.slice(0,2)=="my"){
    let findStartName = apps.find(arr => arr.name == start); 
//saving index of the name found in start variable
    start = apps.indexOf(findStartName)
}
//checking if start was entered as an ID, and looking for that ID in the array
else if(start!=0){
    let findStartId = apps.find(arr => arr.id == start); 
//saving index of the ID found in start variable
    start = apps.indexOf(findStartId)
}


//......................sort by ID starts...............................
//if key "by" equals id, I sort the apps array by id according to "order", where "asc" is default
if(by =="id"){
//I convert order to upper case to compare in case the user enters capital letters
    if(order.toUpperCase()=="DESC"){ 
        allApps = apps.sort(function(a, b){return b.id-a.id}); 
    }
    else if(order.toUpperCase()=="ASC"){
        allApps = apps.sort(function(a, b){return a.id-b.id});
    }
    }
//......................sort by ID ends................................

//.....................sort by name starts..................................
//if key "by" equals name, I sort the apps array alphabetically by name according to "order", where "asc" is default
    else if(by =="name"){
    if(order.toUpperCase()=="DESC"){
        allApps = apps.sort(function(a, b){
            if(b.name < a.name) { return -1; }
            if(b.name > a.name) { return 1; }
            return 0;}
            );
    }
    else if(order.toUpperCase()=="ASC"){
        allApps = apps.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;}
            );
    }
    }
//.....................sort by name ends...................................

//sorted array was assigned to AllApps variable

//I calculate max total based on start 
let finalMax   
finalMax = Number(start) + Number(max)



//check if there is an "end" parameter and search for it in the array (name or id)
if(end){
    if(end.slice(0,2)=="my"){
        let findEndName = apps.find(arr => arr.name == end); 
//saving index of the name found in end variable
        end = apps.indexOf(findEndName)
    }   
    else if(end!=0){
        let findEndId = apps.find(arr => arr.id == end); 
//saving index of the ID found in end variable
        end = apps.indexOf(findEndId)        
    } 
// If"end" identifier extends beyond what can fit inside the maximum page, the page sizes takes precedence.
// otherwise (end is less than max), I assign end value to finalMax
    if(end<finalMax){
        finalMax = end+1;
    }
}




//slice the array according to start and finalMax and send final sliced array as a json response
let final = allApps.slice(start,finalMax) 
      res.json(final)
    })


app.listen(process.env.PORT || 3000)