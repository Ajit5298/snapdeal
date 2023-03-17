function login(event) {

    event.preventDefault();
    // alert("working");

    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;

    var DataFromLS = JSON.parse(localStorage.getItem("snapdealData"));
    console.log(DataFromLS, "DataFromLS");

    var flag = false;

    for (var i = 0; i < DataFromLS.length; i++) {
        if (DataFromLS[i].Email === UserEmail && DataFromLS[i].Password === UserPassword) {
            flag = true;
        }
    }

    if (flag === true) {

        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';

        var User = {};
        User["Current-user-email"] = UserEmail;
        console.log(User, "User")
        localStorage.setItem("current-user-snapdeal", JSON.stringify(User));

        window.location.href = "/index.html";
        alert("login successfully");

    } else {
        alert("check your credentials or please create your account");
    }

}