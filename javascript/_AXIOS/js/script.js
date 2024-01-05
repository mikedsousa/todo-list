const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users", {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

getData();

// Imprimindo dados na tela

const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await getData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");
    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("p");
    emailElement.textContent = user.email;

    div.appendChild(emailElement);

    container.appendChild(div);
  });
};

printData();