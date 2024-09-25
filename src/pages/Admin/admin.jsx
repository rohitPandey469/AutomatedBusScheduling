import React, { useState } from 'react';
import styles from "./admin.module.css";

const Admin = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John P', role: 'Planner' },
    { id: 2, name: 'Jane M', role: 'Manager' },
    { id: 3, name: 'John S', role: 'Scheduler' },
  ]);

  const [selectedRole, setSelectedRole] = useState('');

  const handleRemoveUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleFilterUsers = () => {
    if (selectedRole) {
      return users.filter((user) => user.role === selectedRole);
    }
    return users;
  };

  return (
    <div class={styles.admin}>      
      <select class={styles.role} value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
        <option value="">All roles</option>
        <option value="Manager">Managers</option>
        <option value="Planner">Planners</option>
        <option value="Scheduler">Schedulers</option>
      </select>
      
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {handleFilterUsers().map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleRemoveUser(user.id)}>Remove User</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;