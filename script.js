async function fetchUsers() {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const users = await response.json();

    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    
    users.slice(0, 10).forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.id}</td>
        <td>${user.title}</td>
        // ----------------------------------
        // <td>${user.userId}</td>
        // <td>${user.id}</td>
        // <td>${user.title}</td>
        // <td>${user.body}</td> 
        // ------------------------------------ 
        // <td>${user.id}</td>
        // <td>${user.name}</td>
        // <td>${user.email}</td>
        // <td>${user.phone}</td>
        // <td><a href="http://${user.website}" target="_blank">${user.website}</a></td>
        // <td>${user.company.name}</td>
        //-------------------------------------
      `;
      tableBody.appendChild(row);
    });

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();


