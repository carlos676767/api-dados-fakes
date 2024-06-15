const express = require("express");
const { MongoClient } = require("mongodb");
const api = express();
require("dotenv").config();
const url = `mongodb+srv://admin:${process.env.PASS_BANCO}@dados.7d94myt.mongodb.net/`;
const client = new MongoClient(url);
const emittes = require("events");

api.get("/", async (data, resp) => {
  try {
    const apiDados = await consultarDatabase();
    resp.send({ resposta: "OK", status: 200, dados: apiDados });
  } catch (error) {
    resp.send({ status: 404, resposta: "error 404 not found" });
  }
});

async function databaseConnect() {
  try {
    const dataBaseName = "api";
    const connectDataBase = await client.connect();
    const databaseDocument = await connectDataBase.db(dataBaseName);
    const collectioon = await databaseDocument.collection(dataBaseName);
    console.log(collectioon);
    return collectioon;
  } catch (error) {
    console.log(error);
  }
}

const consultarDatabase = async () => {
  const data = await databaseConnect();
  const databaseConsultFromMongo = await data.find().toArray();
  return databaseConsultFromMongo;
};

api.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
