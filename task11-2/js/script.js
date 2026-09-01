var usersList = [];
function addUser() {
    for (var i = 0; i < 3; i++) {
        alert('Enter user data' + (i + 1));
        var id = Number(prompt('Enter user id'));
        var name = prompt('Enter User Name');
        var balance = Number(prompt('Enter user balance'));
        var newUser = {
            id: id,
            name: name,
            balance: balance
        };
        usersList.push(newUser);
    }
    console.table(usersList);
}
function editUserBalance() {
    var searchId = Number(prompt('Enter id to edit balance'));
    var user = usersList.find(u => u.id === searchId);
    var newBalance = Number(prompt('The old balance for ' + user.name + ' is ' + user.balance + '. Enter new balance:'));
    user.balance = newBalance;
    console.table(usersList);
}
function transferMoney() {
    var senderId = Number(prompt('Enter sender id'));
    var receiverId = Number(prompt('Enter resevier id'));
    var sender = usersList.find(u => u.id === senderId);
    var receiver = usersList.find(u => u.id === receiverId);
    var amount = Number(prompt('Enter amount to transfer:'));
    sender.balance = sender.balance - amount;
    receiver.balance = receiver.balance + amount;
    console.table(usersList);
}
function deleteUser(){
    var deleteId= Number(prompt('Enter user id you want to delete'))
    usersList=usersList.filter(u => u.id !== deleteId)
    console.table(usersList);
}
addUser();
editUserBalance();
transferMoney();
deleteUser();