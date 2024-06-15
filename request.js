const { faker } = require("@faker-js/faker");
const cpf = require("gerador-validador-cpf");

const httpRequest = async () => {
  const generateCpf = cpf.generate();
  const person = faker.person.fullName();
  const cpfFormatado = generateCpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4" );
  try {
    const httpRequest = await fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: person, cpf: cpfFormatado }),
    });
    const res = await httpRequest.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

setInterval(() => {
    httpRequest()
},10);

// const httpPost = async () => {
//   try {
//     const httpRequest = await fetch("http://localhost:8080/delete", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ nome: "Lester Cummerata" }),
//     });
//     const res = await httpRequest.json();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// httpPost();
