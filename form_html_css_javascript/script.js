document.querySelector("form").addEventListener("submit", function (e) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        e.preventDefault(); 
        alert("Username dan Password harus diisi!");
    }
});
