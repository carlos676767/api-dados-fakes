const httpRequest = async () => {
  try {
    const httpRequest = await fetch("http://localhost:8080/edit", {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({nome: "silva", cpf: "" })
    });
    const res = await httpRequest.json()
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};


httpRequest()