// app.js
function addItem() {
    var itemInput = document.getElementById("itemInput");
    var priceInput = document.getElementById("priceInput");
    
    var itemName = itemInput.value;
    var itemPrice = parseFloat(priceInput.value);

    if (itemName.trim() === "" || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Por favor, entre com um nome e valor valido.");
        return;
    }

    var shoppingList = document.getElementById("shoppingList");

    var listItem = document.createElement("li");
    listItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        listItem.remove();
        updateTotal();
    };

    listItem.appendChild(deleteButton);
    shoppingList.appendChild(listItem);

    itemInput.value = "";  
    priceInput.value = ""; 

    updateTotal();
}

function updateTotal() {
    var shoppingList = document.getElementById("shoppingList");
    var items = shoppingList.getElementsByTagName("li");

    var total = 0;
    for (var i = 0; i < items.length; i++) {
        var itemText = items[i].textContent;
        var itemPrice = parseFloat(itemText.split(" - $")[1]);
        total += itemPrice;
    }

    var totalDisplay = document.getElementById("total");
    totalDisplay.textContent = "Total: R$" + total.toFixed(2);
}
