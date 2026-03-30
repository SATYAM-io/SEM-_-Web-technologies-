async function fetchUsers() {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    const users = await response.json();

    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    
    users.slice(0, 10).forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.id}</td>
        <td>${user.title}</td>
      `;
      const bodyToggle = document.createElement('tr');
      bodyToggle.innerHTML = `
        <td colspan="3" class="body-cell">${user.body}</td>
      `;
      bodyToggle.style.display = 'none';

      row.onclick = () => {
        bodyToggle.style.display = bodyToggle.style.display ? '' : 'none';
      }

      tableBody.appendChild(row);
      tableBody.appendChild(bodyToggle)
    });

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();


