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
        document.getElementById('usernameError').textContent ="enter a valid Username"
        document.getElementById('usernameError').style.color = "red"
        
    }
    else if (Youremail === "") {
        console.log("Enter a valid Email id")
        document.getElementById('emailerror').textContent ="enter a valid email id"
        document.getElementById('emailerror').style.color = "red"
    }
    else if (Password === "") {
        console.log("Enter a valid password")
        document.getElementById('Passworderror').textContent ="Enter a valid password"
        document.getElementById('Passworderror').style.color = "red"

    }
    else if (DOB === "") {
        console.log("Enter a valid Dob")
        document.getElementById('DOBerror').textContent ="Enter a valid Dob"
        document.getElementById('DOBerror').style.color = "red"

    }
    else if (City === "none") {
        console.log("Enter a valid City")
        document.getElementById('Cityerror').textContent ="Enter a valid city"
        document.getElementById('Cityerror').style.color = "red"

    }
    else if (selectedGender === "") {
        console.log(" selected Gender")
        document.getElementById('Gendererror').textContent ="selected Gender"
        document.getElementById('Gendererror').style.color = "red"

    }
    else if (Password.length < 3) {
        console.log("Enter 3 letter password")
        document.getElementById('Passworderror').value ="Enter 3 letter password"


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
