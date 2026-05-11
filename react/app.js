const { useState } = React;

function App() {
  const [students, setStudents] = useState([
    { id: 1, sname: "Pék Roland", class: "12/B" },
    { id: 2, sname: "Illin Zita", class: "12/C" }
  ]);

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  function addStudent() {
    setStudents([
      ...students,
      {
        id: students.length + 1,
        sname: name,
        class: className
      }
    ]);
  }

  function editStudent(id) {
    const newName = prompt("New name:");
    setStudents(students.map(s =>
      s.id === id ? { ...s, sname: newName } : s
    ));
  }

  function deleteStudent(id) {
    setStudents(students.filter(s => s.id !== id));
  }

  return React.createElement("div", null,
    React.createElement("input", {
      placeholder: "Student name",
      value: name,
      onChange: e => setName(e.target.value)
    }),
    React.createElement("input", {
      placeholder: "Class",
      value: className,
      onChange: e => setClassName(e.target.value)
    }),
    React.createElement("button", { onClick: addStudent }, "Add"),

    React.createElement("table", null,
      React.createElement("thead", null,
        React.createElement("tr", null,
          React.createElement("th", null, "ID"),
          React.createElement("th", null, "Name"),
          React.createElement("th", null, "Class"),
          React.createElement("th", null, "Action")
        )
      ),
      React.createElement("tbody", null,
        students.map(student =>
          React.createElement("tr", { key: student.id },
            React.createElement("td", null, student.id),
            React.createElement("td", null, student.sname),
            React.createElement("td", null, student.class),
            React.createElement("td", null,
              React.createElement("button", { onClick: () => editStudent(student.id) }, "Edit"),
              React.createElement("button", { onClick: () => deleteStudent(student.id) }, "Delete")
            )
          )
        )
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));