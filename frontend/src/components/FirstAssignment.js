import React, { useState } from "react";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", position: "Software Engineer", department: "IT" },
    { id: 2, name: "Jane Smith", position: "Project Manager", department: "Operations" },
    { id: 3, name: "Mike Johnson", position: "Designer", department: "Marketing" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
