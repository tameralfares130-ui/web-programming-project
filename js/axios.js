const apiUrl = "api/students.php";

function loadStudents() {
  axios.get(apiUrl)
    .then(function(response) {
      const data = response.data;
      const table = document.getElementById("studentTable");

      table.innerHTML = "";

      data.forEach(function(student) {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${student.id}</td>
          <td>${student.sname}</td>
          <td>${student.class}</td>
          <td>
            <button onclick="editStudent(${student.id}, '${student.sname}', '${student.class}')">Edit</button>
            <button onclick="deleteStudent(${student.id})">Delete</button>
          </td>
        `;

        table.appendChild(row);
      });
    })
    .catch(function(error) {
      alert("Axios could not load data. Check api/students.php");
      console.log(error);
    });
}

function addStudent() {
  const name = document.getElementById("name").value;
  const className = document.getElementById("className").value;

  axios.post(apiUrl, {
    sname: name,
    class: className,
    boy: 0
  }).then(function() {
    loadStudents();
  });
}

function editStudent(id, oldName, oldClass) {
  const newName = prompt("New name:", oldName);
  const newClass = prompt("New class:", oldClass);

  if (!newName || !newClass) return;

  axios.put(apiUrl, {
    id: id,
    sname: newName,
    class: newClass,
    boy: 0
  }).then(function() {
    loadStudents();
  });
}

function deleteStudent(id) {
  axios.delete(apiUrl, {
    data: { id: id }
  }).then(function() {
    loadStudents();
  });
}

loadStudents();