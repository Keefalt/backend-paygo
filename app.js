// Import the express module
import express from 'express';
import cors from "cors";
import generator from "./src/api/index.js";
import { defineConfig } from '@mikro-orm/core';
import { MikroORM } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

// Create an instance of the express application
const app=express();
// Specify a port number for the server
const port=5000;

app.use(cors());

// Start the server and listen to the port
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use('/api', generator());

MikroORM.init({
  user: 'postgres',
  password: 'Keeramik161626',
  dbName: 'example',
  host: 'localhost',
  port: '5432',
  entities: ['./dist/entities'],
  autoloadEntities: true
}).then(()=>{
  console.log('db connected');
})

export default defineConfig({

  // ...

  extensions: [Migrator],

  driver: PostgreSqlDriver,

  user: 'postgres',

  password: '123',

  dbName: 'example',

  host: 'localhost',

  port: '5432',

  entities: ['./dist/entities'],

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const data = [
    {
       username: 'ganny',
       password: 'entah',
       name: 'Muhammad Arkan Ganny',
       umur: '18',
       address: 'al wildan 300'
    },
    {
        username: 'idk',
        password: 'idk-juga',
        name: 'muhammad keefa sofyan',
        umur: '17',
        address: 'al wildan 300'
    },

]

// membuat API
app.get("/data", (req, res) => {
    // Send the data array as JSON response
    res.status(500).json({
        message: "error karna gatau"
    });
});

app.get("/data/:name", (req, res) => {
    // Send the data array as JSON response
    const name = req.params.name
    const dataSpecific = data.filter((x)=> x.name == name)
    res.status(200).json(dataSpecific);
});

//get, post, put, delete


app.use(express.json());
app.use(express.urlencoded());

app.get("/data/:name", (req, res) => {
    // mengambil data dari url menggunakan req.params
    const name = req.params.name
    console.log(name)
    // mencari data dengan nama yang sama dengan di url
    const dataSpecific = data.filter((x)=> x.nama == name)
    res.status(200).json(dataSpecific);
  });

  
app.post("/data", (req, res) => {
    const dataDariUser = req.body
    res.status(201).json(
      `username saya ${dataDariUser.username},
      password saya ${dataDariUser.password}, 
      name saya ${dataDariUser.name},  
      umur saya ${dataDariUser.umur},
      alamat saya ${dataDariUser.alamat}
      `);
   })


app.put("/data/:name", (req, res) => {
    const name = req.params.name
    const dataDariUser = req.body
  
    const index = data.findIndex((val)=> val.name == name)
    data[index].name = dataDariUser.name
  
    if(index < 0){
      res.status(404).json({message: 'data tidak ada'})
    }
    
    res.status(201).json(data[index]);
  })
  
  app.delete("/data/:name", (req, res) => {
    const name = req.params.name
  
    const index = data.findIndex((val)=> val.name == name)
  
    if(index < 0){
      res.status(404).json({message: 'data tidak ada'})
    }
    
    data.splice(index, 1)
  
    res.status(200).json(data);
  })

  