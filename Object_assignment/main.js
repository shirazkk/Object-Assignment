//Part 1: Employee Data
var T_shirt = {
    name: "Polo",
    price: 500,
    color: "White",
    inventry: {
        stock: 200,
        coloroption: ["Red", "Blue", "Green", "White"],
        changecolor: function update(newcolor) {
            T_shirt.color = newcolor;
            if (newcolor == "Red") {
                T_shirt.price += 50;
            }
            else if (newcolor == "Blue") {
                T_shirt.price -= 25;
            }
            else if (newcolor == "Green") {
                T_shirt.price += 100;
            }
            else if (newcolor == "White") {
                //no change in price
            }
            else {
                console.log("No discount");
            }
        }
    }
};
console.log("T-Shirt Color: ".concat(T_shirt.color, "  price: ").concat(T_shirt.price));
T_shirt.inventry.changecolor("Red");
console.log("T-shirt Color: ".concat(T_shirt.color, "  Price: ").concat(T_shirt.price));
T_shirt.inventry.changecolor("Blue");
console.log("T-Shirt Color: ".concat(T_shirt.color, "  Price: ").concat(T_shirt.price));
T_shirt.inventry.changecolor("Green");
console.log("T-Shirt Color: ".concat(T_shirt.color, "  Price: ").concat(T_shirt.price));
