
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform username and password validation
    if (username === "albinkp" && password === "7736950362") {
      // Redirect to another file
      window.location.href = "index.html";
         document.getElememtById("username").value="";
        document.getElememtById("password").value="";
    } else {
        window.location.href="login.html"
      alert("Invalid username or password. Please try again.");
      document.getElementById("message").textContent="invalid username or password"
        document.getElememtById("username").value="";
        document.getElememtById("password").value="";
    }
  });
  
