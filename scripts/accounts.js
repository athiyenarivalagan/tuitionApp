// TEMP Account handling

function accLogin() {
    var lEmail = document.getElementById("floatingInput").value
    var lPass = document.getElementById("floatingPassword").value

    // check through the user array and look for equal values
    for (var i = 0; i < oUsers.length; i++) {
        if (lEmail == oUsers[i].email && lPass == oUsers[i].password) {
            console.log("logged in");
            return
        } else {
            alert("Login failed, try again");
            return
        }
    }
}

function accRegister() {
    var rEmail = document.getElementById("floatingInput").value
    var rPass = document.getElementById("floatingPassword").value

    // create a new user obj
    let nUser = {
        email: rEmail,
        password: rPass
    }
    // check through existing objs to look for email collisions
    for (var i = 0; i < oUsers.length; i++) {
        if (rEmail == oUsers[i].email) {
            alert("An account with that email already exists, try with another")
            console.log(oUsers);
            return
        } // revisit to determine password length after db decision
    }

    // add new user to user array
    oUsers.push(nUser)
    console.log(oUsers);
}


