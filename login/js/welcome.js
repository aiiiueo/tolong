document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <a class="nav-cta btn custom-btn custom-border-btn custom-btn-bg-white smoothscroll me-2 mb-2" onclick="logout()" class="nav-cta">Logout</a>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
