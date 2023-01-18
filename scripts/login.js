

function login(){
    //Get the values from the inputs 
    // If statement to compare the input vs localStorage
    //Display message
    let email = $("#txtEmail").val();
    let pass = $("#txtPassword").val();
    let valid = false;
    let users = readUsers(); //this is in storemanager/js
    console.log(email, pass)
    for (let index = 0; index < users.length; index++) {
        let user = users[i];
        if(email===user.email && password === user.password){
            window.location="users.html";
            valid = true;

        }if (valid == false) {
          alert("Invalid Credentials");
        }
        
    }
    
}


function init(){
    $("#btnLogin").click(login);
}
window.onload=init;