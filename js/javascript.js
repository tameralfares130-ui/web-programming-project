let students = [
  { id: 1, sname: "Pék Roland", class: "12/B" },
  { id: 2, sname: "Illin Zita", class: "12/C" },
  { id: 3, sname: "Ördögh Dániel", class: "12/B" }
];

function renderStudents() {
  const table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach((student, index) => {
    table.innerHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.sname}</td>
        <td>${student.class}</td>
        <td>
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function addStudent() {
  const name = document.getElementById("name").value;
  const className = document.getElementById("className").value;

  students.push({
    id: students.length + 1,
    sname: name,
    class: className
  });

  renderStudents();
}

function editStudent(index) {
  const newName = prompt("Enter new name", students[index].sname);
  if (newName) {
    students[index].sname = newName;
    renderStudents();
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  renderStudents();
}

renderStudents();