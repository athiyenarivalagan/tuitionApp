/*
// this script handles basic user authentication without the use of a database api (login and register)

var sUser;

// student tab login
function sloginCheck() {
    var sUname = document.getElementById("sfloatingInput").value;
    var sPass = document.getElementById("sfloatingPassword").value;
    console.log(sUname, sPass);
    // check if typed values exist in array of default users
    for (var i = 0; i < defaultUsers.length; i++) {
        if (sUname == defaultUsers[i].uname && sPass == defaultUsers[i].pass) {
            alert("Welcome " + defaultUsers[i].name);
            document.getElementById("slogin").setAttribute("href", "sHome.html");
            break; 
            // if uname doesnt exist in database, alert.
        }
    }
};

// tutor tab login
function tloginCheck() {
    var tUname = document.getElementById("tfloatingInput").value;
    var tPass = document.getElementById("tfloatingPassword").value;
    console.log(tUname, tPass);
    // check if typed values exist in array of default users
    for (var i = 0; i < defaultUsers.length; i++) {
        if (tUname == defaultUsers[i].uname && tPass == defaultUsers[i].pass) {
            alert("Welcome " + defaultUsers[i].name);
            document.getElementById("tlogin").setAttribute("href", "tHome.html");
            break
            // if uname doesnt exist in database, alert.

        }
    }
};

// cannot be done since there is no way to manage user sessions and keep track of new users without a server
function sRegister() {
    pass
};

function tRegister() {
    pass
};*/