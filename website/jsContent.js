/* let name = document.querySelector('.name');
let email = document.querySelector('.email');
let pass = document.querySelector('.password');
let pass2 = document.querySelector('.againPassword');
let submit = document.querySelector('#submit');

let users = {};

function User(name, email, pass) {
   this.name = name;
   this.email = email;
   this.pass = pass;
}

function createId(users) {
   return Object.keys(users).length;
}

submit.addEventListener('click', () => {
   const nameUser = name.value;
   const emailUser = email.value;
   const passUser = pass.value;
   const passUser2 = pass2.value;
   if (passUser == "") {
      alert("Field cannot be empty");
   } else if (passUser !== passUser2) {
      alert("Passwords arent matched");
      return false;
   } else {
      return true;
   }
   
   const user = new User(nameUser, emailUser, passUser);
   const userId = "User" + createId(users);
   users[userId] = user;

   console.log(users);
   return false;
})
 */