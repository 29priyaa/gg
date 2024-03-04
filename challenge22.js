function addCustomer() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    var table = document.getElementById('customersTable');
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var phoneCell = row.insertCell(2);
  
    nameCell.textContent = name;
    emailCell.textContent = email;
    phoneCell.textContent = phone;
  
    // Clear input fields after adding customer
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }
  