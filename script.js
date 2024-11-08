function validateForm() {
  const username = document.getElementById('user').value.trim();
  const password = document.getElementById('pass').value.trim();
  const errorMessage = document.getElementById('error-message');

  errorMessage.textContent = "";

  const validUsername = "Utkarsh";
  const validPassword = "Fsdtest";

  if (username !== validUsername || password !== validPassword) {
      errorMessage.textContent = "Invalid Username or Password.";
      return false; 
  }

  window.location.href = "top.html";
  return false; 
}

async function fetchGitHubUsers() {
  try {
    let response = await fetch("https://api.github.com/users?per_page=10");
    let data = await response.json();
    data.forEach((element) => {
      let a = document.createElement("a");
      a.textContent = element.login; 
      a.setAttribute("href", element.html_url);
      a.setAttribute("target", "_blank"); 

      let top = document.getElementById('top');
      top.appendChild(a);

      let lineBreak = document.createElement("br");
      top.appendChild(lineBreak);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchGitHubUsers();
