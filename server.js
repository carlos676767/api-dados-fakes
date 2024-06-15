const express = require("express");
const { MongoClient } = require("mongodb");
const api = express();
require('dotenv').config()
const url = `mongodb+srv://admin:${process.env.PASS_BANCO}@dados.7d94myt.mongodb.net/`;
const client = new MongoClient(url);
p
api.get("/", (data, resp) => {
  try {
    resp.send({ resposta: "OK", status: 200 });
  } catch (error) {
    resp.send({ status: 404, resposta: "error 404 not found" });
  }
});

const ola = 'buhgyvyg'
async function databaseConnect() {
  try {
    const dataBaseName = "api"
    const connectDataBase = await client.connect()
    const databaseDocument = await connectDataBase.db(dataBaseName)
    return databaseDocument;
  } catch (error) {
    console.log(error);
  }
}

const testestes = async() => {
    const data = await databaseConnect()
    console.log(data);
}

testestes()
api.listen(8080, () => {
 console.log("servidor rodando na porta 8080");
});
