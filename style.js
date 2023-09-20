function checklogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email === "" && password === "") {
        console.log("Enter a valid email id & password.")
    }
    else {
        console.log(email);
        console.log(password);
        // document.write("email ="+email)
        // document.write("password ="+password)
    }

    return;
}

function checkregistation() {
    let Username = document.getElementById('username').value;
    let Youremail = document.getElementById('youremail').value;
    let Password = document.getElementById('password').value;

    let DOB = document.getElementById('dob').value;
    let City = document.getElementById('city').value;
    let selectedGender = "";
    if (document.getElementById('male').checked) {
        selectedGender = document.getElementById('male').value;
    } else {
        selectedGender = document.getElementById('female').value;
    }
    console.log(Username);
    console.log(Youremail);
    console.log(Password);
    console.log(DOB);
    console.log(City);
    console.log(selectedGender);

    if (Username === "") {
        console.log("enter a valid Username")
    }
    else if (Youremail === "") {
        console.log("Enter a valid Email id")
    }
    else if (Password === "") {
        console.log("Enter a valid password")
    }
    else if (DOB === "") {
        console.log("Enter a valid Dob")
    }
    else if (City === "none") {
        console.log("Enter a valid City")
    }
    else if (selectedGender === "") {
        console.log(" selected Gender")
    }
    else if (Password.length < 3) {
        console.log("Enter 3 letter password")
    }
    else {
        console.log(Username);
        console.log(Youremail);
        console.log(Password);
        console.log(DOB);
        console.log(City);
        console.log(selectedGender);
    }

}
