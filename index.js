function Register(event) {

    event.preventDefault();
    // alert("Working");

    var UserName = document.getElementById("UserName").value;
    var UserNumber = document.getElementById("UserNumber").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

    var Data = {
        Name: UserName,
        Number: UserNumber,
        Email: UserEmail,
        Password: UserPassword,
        ConfirmPassword: UserConfirmPassword
    }

    var DataFromLS = JSON.parse(localStorage.getItem("snapdealData")) || [];

    var flag = false;

    for (var i = 0; i < DataFromLS.length; i++) {
        if (DataFromLS[i].Email === UserEmail) {
            flag = true;
        }
    }

    if (flag === true) {
        alert("Email is Already Present");
    } 
    else if (UserPassword.length < 1 && UserName.length < 1 && UserEmail.length < 1 && UserNumber.length < 1 && UserConfirmPassword.length < 1) 
    {
        alert("must all field");
    } else if (UserPassword < 8) {
        alert("Password must have 8 digit");
    } else if (UserPassword != UserConfirmPassword) {
        alert("Password Mismatch")
    } else {
        DataFromLS.push(Data);
        localStorage.setItem("snapdealData", JSON.stringify(DataFromLS));
        document.getElementById("UserName").value = '';
        document.getElementById("UserNumber").value = '';
        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';
        document.getElementById("UserConfirmPassword").value = '';
        alert("Registration Done");
        console.log(DataFromLS, "DataFromLS")

    }

}

