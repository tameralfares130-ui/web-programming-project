const apiUrl = "api/students.php";

function loadStudents() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const table = document.getElementById("studentTable");
      table.innerHTML = "";

      data.forEach(student => {
        table.innerHTML += `
          <tr>
            <td>${student.id}</td>
            <td>${student.sname}</td>
            <td>${student.class}</td>
            <td>
              <button onclick="editStudent(${student.id}, '${student.sname}', '${student.class}')">Edit</button>
              <button onclick="deleteStudent(${student.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    })
    .catch(error => {
      alert("Fetch error: " + error);
      console.error(error);
    });
}

function addStudent() {
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify({
      sname: document.getElementById("name").value,
      class: document.getElementById("className").value,
      boy: 0
    })
  }).then(() => loadStudents());
}

function editStudent(id, oldName, oldClass) {
  const newName = prompt("New name:", oldName);
  const newClass = prompt("New class:", oldClass);

  fetch(apiUrl, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      sname: newName,
      class: newClass,
      boy: 0
    })
  }).then(() => loadStudents());
}

function deleteStudent(id) {
  fetch(apiUrl, {
    method: "DELETE",
    body: JSON.stringify({ id: id })
  }).then(() => loadStudents());
}

loadStudents();