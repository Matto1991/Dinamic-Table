const ApiUrl =
  "https://gist.githubusercontent.com/SuecoMarcus/a77af69f0e84c3125a5c0cf43a3ac41b/raw/918cd058b7e2286a36e79643c63a5ebca097d7c8/users.json";

let container = document.querySelector("#container");
let input = document.querySelector("#input");
let users = [];

let tableStructure = `<table class="table table-bordered">
        <thead>
        <tr class="table-secondary">
         <th>ID</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
       
          </tr>
          </thead>
          <tbody id="tbody"></tbody>
          </table>
          `;

fetch(ApiUrl)
  .then((response) => response.json())
  .then((data) => {
    usersCopy = data;
    tableGenerator(data);
  });

//recibe  como parametro un array de usuarios que devuelve la API
// recorre el for hasta llegar al largo del array de usuarios y en cada bucle concatena en la tabla el usuario con sus datos correspondientes
function tableGenerator(users) {
  container.innerHTML = tableStructure;
  let tableBody = document.querySelector("tbody");
  for (let i = 0; i < users.length; i++) {
    let tr = "";
    //debugger;
    tr += `<tr>
              <td>${users[i].id}</td>
              <td>${users[i].firstname}</td>
              <td>${users[i].lastname}</td>
              <td>${users[i].age}</td>
              </tr>`;
    tableBody.innerHTML += tr;
  }

  // "Escucha" los cambios que hace el usuario en el input
  // se fija si el valor del input coincide con alguna letra o numero que tengan los
  // usuarios en la tabla, de ser asi devuelve el usuario que corresponda con la coincidencia
  input.addEventListener("change", () => {
    const letterFiltered = usersCopy.filter(function (user) {
      return (user.firstname + user.lastname + user.age).includes(input.value);
    });
    let tr = "";
    tr += `<tr>
              <td>${input.value}</td>
              <td>${input.value}</td>
              <td>${input.value}</td>
              <td>${input.value}</td>
              </tr>`;
    tableGenerator(letterFiltered);
  });
}
