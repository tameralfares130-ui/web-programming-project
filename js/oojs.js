class Student {
  constructor(id, name, className) {
    this.id = id;
    this.name = name;
    this.className = className;
  }

  render() {
    return `
      <tr>
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>${this.className}</td>
      </tr>
    `;
  }
}

class StudentApp {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.students = [
      new Student(1, "Pék Roland", "12/B"),
      new Student(2, "Illin Zita", "12/C"),
      new Student(3, "Ördögh Dániel", "12/B")
    ];
  }

  render() {
    this.container.innerHTML = `
      <h2>Students</h2>
      <table>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Class</th></tr>
        </thead>
        <tbody>
          ${this.students.map(student => student.render()).join("")}
        </tbody>
      </table>
    `;
  }
}

const app = new StudentApp("app");
app.render();