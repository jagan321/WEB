const bakeryItems = {
    "Cake": 10.99,
    "Muffin": 4.99,
    "Cookie": 1.99,
    "Brownie": 3.49
};

function createItemButtons() {
    const itemsDiv = document.getElementById("items");
    for (let item in bakeryItems) {
        const container = document.createElement("div");
        container.classList.add("itemContainer");

        container.innerHTML = `
            <span>${item}</span>
            <input type="number" min="0" value="0" class="quantityInput">
            <span>₹${bakeryItems[item].toFixed(2)}</span>
        `;

        itemsDiv.appendChild(container);
    }
}

function calculateTotal() {
    const totalAmountSpan = document.getElementById("totalAmount");
    let total = 0;

    document.querySelectorAll(".quantityInput").forEach(input => {
        const item = input.parentElement.firstElementChild.textContent;
        const quantity = parseInt(input.value);
        total += quantity * bakeryItems[item];
    });

    totalAmountSpan.textContent = `₹${total.toFixed(2)}`;
}

function generateBill() {
    let bill = "Bakery Shop Bill:\n";
    let total = 0;

    document.querySelectorAll(".quantityInput").forEach(input => {
        const item = input.parentElement.firstElementChild.textContent;
        const quantity = parseInt(input.value);
        if (quantity > 0) {
            const itemPrice = bakeryItems[item];
            const subtotal = quantity * itemPrice;
            bill += `${item}: ${quantity} x ₹${itemPrice.toFixed(2)} = ₹${subtotal.toFixed(2)}\n`;
            total += subtotal;
        }
    });

    bill += `Total: ₹${total.toFixed(2)}`;
    alert(bill);
}

window.onload = createItemButtons;
