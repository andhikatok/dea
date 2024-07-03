document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;
  
  document.getElementById('resultName').textContent = name;
  document.getElementById('resultDob').textContent = dob;
  document.getElementById('resultGender').textContent = gender;
  document.getElementById('resultMessage').textContent = message;
  
  const currentTime = new Date().toLocaleString();
  document.getElementById('currentTime').textContent = currentTime;
  
  // Clear form fields after submission (optional)
  document.getElementById('messageForm').reset();
});
