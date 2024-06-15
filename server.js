const express = require("express");
const { MongoClient } = require("mongodb");
const api = express();
require("dotenv").config();
const url = `mongodb+srv://admin:${process.env.PASS_BANCO}@dados.7d94myt.mongodb.net/`;
const client = new MongoClient(url);

const buscarApiGet = (dados) => {
  api.get("/", (data, resp) => {
    try {
      resp.send({ resposta: "OK", status: 200, dados: dados });
    } catch (error) {
      resp.send({ status: 404, resposta: "error 404 not found" });
    }
  });
};

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
  buscarApiGet(databaseConsultFromMongo);
};

consultarDatabase();

api.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
