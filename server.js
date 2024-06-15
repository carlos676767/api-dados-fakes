const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const api = express();
require("dotenv").config();
const url = `mongodb+srv://admin:${process.env.PASS_BANCO}@dados.7d94myt.mongodb.net/`;
const client = new MongoClient(url);
api.use(bodyParser.json());

api.get("/get", async (data, resp) => {
  try {
    const apiDados = await consultarDatabase();
    resp.send({ resposta: "OK", status: 200, dados: apiDados });
  } catch (error) {
    resp.send({ status: 404, resposta: "error 404 not found" });
  }
});

api.post("/post", async (data, req) => {
  try {
    const dados = data.body;
    const { nome, cpf } = dados;
    await databaseCreate(nome, cpf);
    req.send({ resposta: "OK", status: 200 });
  } catch (error) {
    console.log(error);
  }
});

api.put("/edit", async (data, req) => {
  try {
    const dados = data.body;
    const { nome, cpf } = dados;
    await editDatabase(nome, cpf);
    req.send({ resposta: "OK", status: 200 });
  } catch (error) {
    console.log(error);
  }
});





async function databaseConnect() {
  try {
    const dataBaseName = "api";
    const connectDataBase = await client.connect();
    const databaseDocument = await connectDataBase.db(dataBaseName);
    const collectioon = await databaseDocument.collection(dataBaseName);
    return collectioon;
  } catch (error) {
    console.log(error);
  }
}

const consultarDatabase = async () => {
  try {
    const data = await databaseConnect();
    const databaseConsultFromMongo = await data.find().toArray();
    return databaseConsultFromMongo;
  } catch (error) {
    console.log("error database consult");
  }
};

const databaseCreate = async (name, cpf) => {
  try {
    const data = await databaseConnect();
    const dataBaseNewDados = await data.insertOne({
      namePerson: name,
      cpfPerson: cpf,
    });
    console.log(dataBaseNewDados);
    console.log("sucess database dados new");
  } catch (error) {
    console.log(error);
  }
};

async function editDatabase(name, cpf) {
  try {
    const data = await databaseConnect();
    const httpUpdateDataBase = await data.updateOne(
      { namePerson: name },
      { $set: { cpfPerson: cpf } }
    );
    console.log(httpUpdateDataBase);
    console.log("sucess database Update from mongodb");
  } catch (error) {
    console.log("error database from update mongodb");
  }
}




api.listen(8080, () => {
  console.log("servidor rodando na porta 8080");
});
