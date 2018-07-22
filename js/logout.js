(function () {
    $('#btn-logout').on('click', function () {
        console.log("hi");
        localStorage.removeItem('authToken');
        localStorage.removeItem('email');
        window.location.pathname = '/login.html';
    });
}());