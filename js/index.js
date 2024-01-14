var adminPageButton = document.getElementById('admin-page-button'); adminPageButton.addEventListener('click', function () {window.location.href = "admin.html";});

var MyComputersButton = document.getElementById('my-computers-button');
var myOrderButton = document.getElementById('my-orders-button');
var shoppingButton = document.getElementById('shopping-button');
var loginButton = document.getElementById('login-button');
var logoutButton = document.getElementById('logout-button');
MyComputersButton.addEventListener('click', function () {window.location.href = "computers.html"})
shoppingButton.addEventListener('click', function () {
    window.location.href = "shoping.html";
});
var userLoggedIn = false;

var loggedInUserId = localStorage.getItem("logged-in-user-id");
if (loggedInUserId == null) {
    userLoggedIn = false;
} else {
    userLoggedIn = true;
}
var showSuccessLoginMessage = localStorage.getItem('show-sucess-login-message');
if (showSuccessLoginMessage == null) {

} else {
    document.getElementById('sucess-login-alert').style.display = 'block';
    localStorage.removeItem('show-success-login-message');
    setTimeout(() => {
        document.getElementById('success-login-alert').style.display = 'none';

    }, 1200);
}
function showButtons() {
    if (userLoggetIn) {
        loginButton.style.display = 'none';
        MyComputersButton.style.display = 'inline-block';
        myOrderButton.style.display = 'inline-block';
        logoutButton.style.display = 'inline-block';

    } else {
        logoutButton.style.display = 'none';
        MyComputersButton.style.display = 'none';
        myOrderButton.style.display = 'none';
        loginButton.style.display = 'inline-block';
    }
}
showButtons();
function onLogin() {
    window.location.href = "login.html"
}
function OnLogout() {

    setTimeout(() => {
        userLoggedIn = false;
        localStorage.removeItem("logged-in-user-id");
        localStorage.removeItem("logged-in-user-name");
        showButtons();
        document.getElementById('success-logout-alert').style.display = 'block';
        showUsername();
        setTimeout(() => {
            document.getElementById('success-logout-alert').style.display = 'none';
        }, 1200);
    }, 500);


}
var user = [];
var categories = [];
var computers = [];

function addObjects() {
    
    
    user.push({ id: 1, name: "User-1", phone: "055-324-3434", username: "u1", password: "p1"});
    user.push({ id: 2, name: "User-2", phone: "055-324-1232", username: "u2", password: "p2"});
    user.push({ id: 3, name: "User-3", phone: "055-324-6765", username: "u3", password: "p3"});
    user.push({ id: 4, name: "User-4", phone: "055-324-9823", username: "u4", password: "p4"});
    user.push({ id: 5, name: "User-5", phone: "055-324-7151", username: "u5", password: "p5"});
    user.push({ id: 6, name: "User-6", phone: "055-324-0000", username: "u6", password: "p6"});


    categories.push({ id: 1, name: "Acer"});
    categories.push({ id: 2, name: "HP"});
    categories.push({ id: 3, name: "Asus"});
    categories.push({ id: 4, name: "Dell"});
    categories.push({ id: 5, name: "Lenovo"});
    categories.push({ id: 6, name: "LG"});
    categories.push({ id: 7, name: "Casper"});
    categories.push({ id: 8, name: "Fujitsu"});
    categories.push({ id: 9, name: "Nexus"});
    categories.push({ id: 10, name: "Samsung"});
    categories.push({ id: 11, name: "Toshiba"});
    categories.push({ id: 12, name: "Sony"});


    computers.push({ id: 1, name: "Acer 1", price: 578, description: "Acer-1 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 2, name: "Acer 2", price: 635, description: "Acer-2 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 3, name: "Acer 3", price: 679, description: "Acer-3 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 4, name: "Acer 4", price: 746, description: "Acer-4 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 5, name: "Acer 5", price: 838, description: "Acer-5 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 6, name: "Acer 6", price: 872, description: "Acer-6 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 7, name: "Acer 7", price: 937, description: "Acer-7 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 8, name: "Acer 8", price: 984, description: "Acer-8 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 9, name: "Acer 9", price: 1003, description: "Acer-9 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 10, name: "Acer 10", price: 1303, description: "Acer-10 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 11, name: "Acer 11", price: 1360, description: "Acer-11 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 12, name: "Acer 12", price: 1793, description: "Acer-12 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 13, name: "Acer 13", price: 1930, description: "Acer-13 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 14, name: "Acer 14", price: 2292, description: "Acer-14 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 15, name: "Acer 15", price: 2383, description: "Acer-15 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 16, name: "Acer 16", price: 2683, description: "Acer-16 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 17, name: "Acer 17", price: 2737, description: "Acer-17 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 18, name: "Acer 18", price: 2836, description: "Acer-18 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 19, name: "Acer 19", price: 2936, description: "Acer-19 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 20, name: "Acer 20", price: 3032, description: "Acer-20 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 21, name: "Acer 21", price: 3177, description: "Acer-21 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 22, name: "Acer 22", price: 3243, description: "Acer-22 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 23, name: "Acer 23", price: 3435, description: "Acer-23 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 24, name: "Acer 24", price: 3563, description: "Acer-24 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 25, name: "Acer 25", price: 3754, description: "Acer-25 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 26, name: "Acer 26", price: 3864, description: "Acer-26 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 27, name: "Acer 27", price: 3972, description: "Acer-27 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 28, name: "Acer 28", price: 4072, description: "Acer-28 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 29, name: "Acer 29", price: 4261, description: "Acer-29 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 30, name: "Acer 30", price: 4379, description: "Acer-30 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 31, name: "Acer 31", price: 4429, description: "Acer-31 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 32, name: "Acer 32", price: 4572, description: "Acer-32 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 33, name: "Acer 33", price: 4683, description: "Acer-33 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 34, name: "Acer 34", price: 4793, description: "Acer-34 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 35, name: "Acer 35", price: 4828, description: "Acer-35 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 36, name: "Acer 36", price: 4972, description: "Acer-36 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 37, name: "Acer 37", price: 5089, description: "Acer-37 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 38, name: "Acer 38", price: 5143, description: "Acer-38 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 39, name: "Acer 39", price: 5290, description: "Acer-39 desc", isNew: false, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});
    computers.push({ id: 40, name: "Acer 40", price: 5387, description: "Acer-40 desc", isNew: true, imagePath: "images/Acer.jpeg", userId: 1, categoryId: 1});

    var idCounter = 40;

    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 40; i++) {
            idCounter++;
            computers.push(
                {
                    id: idCounter, name: "Acer" + idCounter, price: computers[i].price, description: "Acer" + idCounter + " desc",
                    isNew: computers[i].isNew, imagePath: "images/Acer.jpg", userId: computers[i].userId, categoryId: 1
                }
            );
        }
    }



    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "Asus" + (i + 1), price: computers[i].price, description: "Asus" + idCounter + "desc",
                isNew: computers[i].isNew, imagePath: "images/Asus.jpg", userId: computers[i].userId, categoryId: 2
            }
        )
    }

    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "Dell" + (i + 1), price: computers[i].price, description: "Dell" + idCounter + "desc",
                isNew: computers[i].isNew, imagePath: "images/Dell.jpg", userId: computers[i].userId, categoryId: 3
            }
        )
    }

    for (var i = 0; i < 200; i++) {
        idCounter++;
        computers.push(
            {
                id: idCounter, name: "Lenove" + (i + 1), price: computers[i].price, description: "Lenove" + idCounter + "desc",
                isNew: computers[i].isNew, imagePath: "images/Lenove.jpg", userId: computers[i].userId, categoryId: 4
            }
        )
    }














   for (var i = 0; i < computers.length; i++) {
    const c = computers[i];
    c.ram = 8;
    c.cpu = "Core I 9"
    c.drive = 500; c.driveType = (i % 2 == 0) ? 'hdd' : 'ssd';
    c.os = "Window 10"
    c.videoCard = 3;
   }

   for (var i = 0; i < computers.lenght; i++) {
    const c = computers[i];

    for (var j = 0; j < user.length; j++) {
        const u = user[j];
        if (u.id === c.userId) {
            c.phone; break;
        }
    }
   }
}



addObjects();


function loadDataFromLocalStorage() {
    var usersString = localStorage.getItem("users");
    var categoriesString = localStorage.getItem("caregories");
    var computersSring = localStorage.getItem("computers");

    if (usersString == null){
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        users = JSON.parse(usersString);
    }

    if (categoriesString == null) {
        localStorage.setItem("categories", JSON.stiringify(categories));
    } else {
        categories = JSON.parse(categoriesString);
    }

    if (computersString == null) {
        localStorage.setItem("computers", JSON .stringify(computers));
    } else {
        computers = JSON.parse(computersString);
    }
    
}

loadDataFromLocalStorage();
console.log("Total number of all computers =" + computers.length);
function onClearLocalStorage() {
    localStorage.removeItem("users");
    localStorage.removeItem("categories");
    localStorage.removeItem("computers");
    localStorage.removeItem("basketComputers");
    localStorage.removeItem("orders");
    localStorage.removeItem("customers");
    localStorage.removeItem("order-customer");
    localStorage.removeItem("logged-in-user-id");
    window.location.reload();

}


var customers = [];
customers.push({ id: 1, name: "Customers-1", address: "Customers-1-address", phone: "044-111-222", email: "customer1@gmail.com"});
customers.push({ id: 1, name: "Customers-2", address: "Customers-2-address", phone: "044-555-777", email: "customer2@gmail.com"});
customers.push({ id: 1, name: "Customers-3", address: "Customers-3-address", phone: "044-999-5555", email: "customer3@gmail.com"});



var customerString =localStorage.getItem("customers");

if (customersString == null) {
    localStorage.setItem("customers", JSON.stringify(customers));
} else {
    customers = JSON.parse(customersString);
}


var order = [];


var order1 = {};
order1.id = 1;
order1.note = " доставка будет за 2 дня";
var order1BasketComputers = [];
order1BasketComputers.push({ id: 1, count: 7, computer: computers[1] });
order1BasketComputers.push({ id: 2, count: 3, computer: computers[3] });
order1BasketComputers.push({ id: 3, count: 9, computer: computers[5] });
order1.basketComputers = order1BasketComputers;
order1.customers = customers[i];
order1.userId = 1;
order1.registor = new Date(2023, 9, 23);
order1.totalPrice = calculateOrderTotalPrice(order1);



var order2 = {};
order2.id = 2;
order2.note = "доставка будет за 4 дня и 4 клавиатуры добавьте в заказ";
var order2BasketComputers = [];
order2BasketComputers.push({ id: 4, count: 12, computer: computers[51]});
order2BasketComputers.push({ id: 5, count: 15, computer: computers[53]});
order2BasketComputers.push({ id: 6, count:  6, computer: computers[55]});
order2.basketComputers = order2BasketComputers;
order2.customer = customers[1];
order2.userId = 2;
order2.register = new Date(2023, 9, 30);
order2.totalPrice = calculateOrderTotalPrice(2);



var order3 = {};
order3.id = 3;
order3.note = "доставка будет за 12 дней и 2 клавиатуры добавьте в заказ";
var order3BasketComputers = [];
order3BasketComputers.push({ id: 7, count: 1, computer: computers[97]});
order3BasketComputers.push({ id: 8, count: 2, computer: computers[99]});
order3BasketComputers.push({ id: 9, count: 3, computer: computers[101]});
order3.basketComputers = order3BasketComputers;
order3.customer = customers[2];
order3.userId = 3;
order3.register = new Date(2023, 10, 9);
order3.totalPrice = calculateOrderTotalPrice(order3);


order.push(order1);
order.push(order2);
order.push(order3);


var ordersString = localStorage.getItem("orders");

if (ordersString == null) {
    localStorage.setItem("orders", JSON.stringify(orders));
}  else {
    orders = JSON.parse(ordersString);
}



var myOrdersButton = document.getElementById('my-orders-button');

myOrdersButton.addEventListener('click', function() {
    window.location.href = "orders.html";
});



function calculateOrderTotalPrice(order) {
    var totalPrice = 0;

    for (let index = 0; index < order.basketComputers.lenght; index++) {
        const b = order.basketComputers[index];
        totalPrice += b.count * b.computer.price;

    }

    return totalPrice;
}

var loggedInUserName = document.getElementById('logged-in-user-name');
console.log('userLoggedIn : ' + userLoggedIn);
function showUsername() {
    if (userLoggedIn) {
        var username = '';
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            if (user.id == loggedInUserId) {
                username = user.username; break;
            }
        }
        loggedInUserName.innerHTML = username;
        if (username === 'admin') {
            adminPageButton.style.display = 'inline-block';
        } else {
            adminPageButton.style.display = 'none';
        }
    } else {
        loggedInUserName.innerHTML = '';
        adminPageButton.style.display = 'none';
    }
}
showUsername();