// 1. Array of the student's names
//2. Display the names in HTML in ul 
//3. Create an array of objects (name,salary)
//4. Display the name and salary in a table 
//5. Display the total 
//Highlight user with greatest amount of salarry

const listContainer = document.getElementById("listHolder")
const studentsArray = ["Gary M.", "Hethe", "Will Quinnan", "John Garcia", "Jose De Anda", "Scott S.", "Kevin Fierro", "Brayan Ornelas", "Edgar Perez", "Sivisko Bernard"];

const displayNames = students => {
    students.forEach(item => {
        listContainer.innerHTML += `<li>${item}<li/>`
    });
}

displayNames(studentsArray)

const inputUserOnTable = document.getElementById("inputUsers");
userInfo = []

const userInfoCreator = students => {
    let user = {}
    students.forEach((student, index) => {
        user = {name: student, salary: `${index * 1000}`}
        userInfo.push(user)
    });
}

userInfoCreator(studentsArray)
console.log(userInfo)
displayTable = users => {
    let row = "";
    for (let index = 0; index < users.length; index++) {
        let user = users[index];
          row += `<tr><td>${user.name}</td> <td>$${user.salary}USD</td></tr>`
        
    }
    inputUserOnTable.innerHTML = row
}

displayTable(userInfo)
