var userFulNameElement = document.getElementById('user-full-name');
var userPhoneElement = document.getElementById('user-phone');

var usernameElement = document.getElementById('username');
var passwordElement = document.getElementById('password');


var userExistsErrorAlertElement = document.getElementById('user-exists-error-alert');

var userCreatedAlertElement = document.getElementById('user-created-alert');

var users = [];
var userString = localStorage.getItem("users");
if (userString == null) {

} else {
    users = JSON.parse(userString);
}


function onCreateAccount(event) {
    event.preventDefault();


    var userFullName = userFullNameElement.value;
    var userPhone = userPhoneElement.value;
    var username = usernameElement.value;
    var password = passwordElement.value;

    var usernameExists = false;

    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if (user.username === username) {
            usernameExists = true;
            break;
        }

    }
    if (usernameExists) {
        userExistsErrorAlertElement.innerHTML = 'Имя пользователя уже занято!';
        userExistsErrorAlertElement.style.display = 'block';
        setTimeout(() => {
            userExistsErrorAlertElement.style.display = 'none';
        }, 1200);
    } else {


        var userId = 0;
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.id > userId) {
                userId = user.id;
            }

        }
        userId++;
        var user = {};
        user.id = userId;
        user.name = userFullName;
        user.phone = userPhone;
        user.username = username;
        user.password = password;
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));



        userCreatedAlertElement.innerHTML = 'Вы создали аккаунт';

        userCreatedAlertElement.style.display = 'block';
        setTimeout(() => {
            userCreatedAlertElement.style.display = 'none';
        }, 1200);
    }

    
}