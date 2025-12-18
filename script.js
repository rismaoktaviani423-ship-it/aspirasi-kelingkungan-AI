function login() {
  const user = document.getElementById("username").value;
  if (user !== "") {
    localStorage.setItem("user", user);
    window.location.href = "home.html";
  } else {
    alert("Silakan masukkan nama!");
  }
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
