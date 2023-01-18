function displayUsers(usersArray){
    let tr = "";

    //Loop the array
    //Create the template
    //Append the template into the array into the html table
    for (let index = 0; index < usersArray.length; index++) {
        let user = usersArray[index];
        tr = `
        <tr>
            <td>${user.fname}<td>
        </tr>`;
        $("users-table").append(tr);
        
    }
}

function init(){
    console.log("Listing users...")
    let users = readUsers();
    displayUsers(users);
}
window.onload = init;