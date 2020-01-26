const express = require ("express")
const app = express()

const apps = [
    {
        id : 50,
        name: "my-app-050"
    },
    {
        id : 51,
        name: "my-app-051"
    },
    {
        id : 52,
        name: "my-app-052"
    },
    {
        id : 53,
        name: "my-app-053"
    },
    {
      id : 1,
      name: "my-app-001"
    },
    {
      id : 2,
      name: "my-app-002"
    },
    
    {
        id : 7,
        name: "my-app-007"
    },
    {
        id : 8,
        name: "my-app-008"
    },
    {
        id : 9,
        name: "my-app-009"
    },
    {
        id : 10,
        name: "my-app-010"
    },
    {
        id : 12,
        name: "my-app-012"
    },
    
    {
        id : 16,
        name: "daphne"
    },
    {
        id : 17,
        name: "my-app-017"
      },
      {
        id : 18,
        name: "my-app-018"
      },
      {
      id : 19,
      name: "my-app-019"
      },
      {
          id : 20,
          name: "my-app-020"
      },
      {
          id : 21,
          name: "my-app-021"
      },
      {
          id : 22,
          name: "my-app-022"
      },
      {
          id : 23,
          name: "my-app-023"
      },
      {
          id : 24,
          name: "my-app-025"
      },
      {
        id : 3,
        name: "my-app-003"
        },
        {
            id : 4,
            name: "my-app-004"
        },
        {
            id : 42,
            name: "my-app-042"
        },
        {
            id : 43,
            name: "my-app-043"
        },
        {
            id : 44,
            name: "my-app-044"
        },
        {
            id : 45,
            name: "my-app-045"
        },
        {
            id : 46,
            name: "my-app-046"
        },
        {
            id : 5,
            name: "my-app-005"
        },
        {
            id : 6,
            name: "my-app-006"
        },
      {
          id : 26,
          name: "my-app-027"
      },
      {
          id : 28,
          name: "my-app-029"
      },
      {
          id : 29,
          name: "my-app-029"
      },
      {
          id : 30,
          name: "my-app-030"
      },
      {
          id : 31,
          name: "my-app-031"
      },
      {
          id : 32,
          name: "my-app-032"
      },
      {
          id : 33,
          name: "my-app-034"
      },
      {
        id : 35,
        name: "my-app-035"
      },
      {
        id : 36,
        name: "my-app-036"
      },
      {
      id : 37,
      name: "my-app-037"
      },
      {
          id : 38,
          name: "my-app-038"
      },
      {
          id : 39,
          name: "my-app-039"
      },
      {
          id : 40,
          name: "my-app-040"
      },
      {
          id : 41,
          name: "my-app-041"
      },
      
      {
          id : 47,
          name: "my-app-047"
      },
      {
          id : 48,
          name: "my-app-048"
      },
      {
          id : 49,
          name: "my-app-049"
      },
      {
        id : 13,
        name: "my-app-013"
    },
    {
        id : 14,
        name: "my-app-014"
    },
    {
        id : 15,
        name: "my-app-015"
    },
    {
        id : 11,
        name: "my-app-011"
    },
    {
        id : 25,
        name: "my-app-025"
    },
    {
        id : 27,
        name: "my-app-027"
    },
    {
        id : 34,
        name: "my-app-034"
    },
  
  ];





app.get('/apps',(req,res)=>{
let allApps =[]
 
let by = req.query.by
let start = req.query.start||1
let end = req.query.end 
const max = req.query.max||50
let order = req.query.order 


if(by=="id"){
    if(order=="desc"){
        allApps = apps.sort(function(a, b){return b.id-a.id});
    }
    else{

        allApps = apps.sort(function(a, b){return a.id-b.id});
    }
    }
    else if(by =="name"){
    if(order=="desc"){
        allApps = apps.sort(function(a, b){
            if(b.name < a.name) { return -1; }
            if(b.name > a.name) { return 1; }
            return 0;}
            );
    }
    else{
        allApps = apps.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;}
            );
    }
    }

let final = allApps 
let finalMax

if(start || max){
finalMax = Number(start-1) + Number(max)
console.log(finalMax)
        final = allApps.slice(start-1,finalMax)
    }

      res.json(final)
    })


app.listen(3000)