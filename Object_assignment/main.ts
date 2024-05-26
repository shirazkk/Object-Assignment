//Part 1: Employee Data

// type EmployeeData={
//     name:string,
//     department:string,
//     role:"Manager"|"Engineer"|"Intern",
//     contact?:{
//         email:string,
//         phonenumber:number
//     },
//     skills?:string[]

// };
// let employee:EmployeeData={
//     name:"Shiraz Ali",
//     department:"AI",
//     role:"Intern",
//     contact:{
//         email:"shirazkk8@gmail.com",
//         phonenumber:+922380032339
//     },
//     skills:["Full Stack devloper","Content Writer","SEO Optimizer"]

// }
// console.log(employee);


// // Part 2: Car Details

// type car={
//     name:string,
//     color:string,
//     model:string,
//     engine:{
//         horsepower:number
//     },
//     gethorsepower:()=>number

// }
// let cardetail:car={
//     name:"supra",
//     color:"red",
//     model:"MK4",
//     engine:{
//         horsepower:321,
//     },
//     gethorsepower(){
//         return cardetail.engine.horsepower

//     }


// };
// console.log(cardetail.gethorsepower);
// // console.log(cardetail);


// Part 3: Colorful T-Shirts

type product = {
    name: string,
    price: number,
    color: string,
    inventry: {
        stock: number,
        coloroption?: string[],
        changecolor: (newcolor: string) => any;

    };
};
let T_shirt: product = {
    name: "Polo",
    price: 500,
    color: "White",
    inventry: {
        stock: 200,
        coloroption: ["Red", "Blue", "Green", "White"],
        changecolor: function update(newcolor: string) {
            T_shirt.color = newcolor

            if (newcolor == "Red") {
                 T_shirt.price += 50
                

            }
            else if (newcolor == "Blue") {
                 T_shirt.price -= 25
                


            }
            else if (newcolor == "Green") {
               T_shirt.price += 100
              


            }
            else if (newcolor == "White") {
                 //no change in price
                

            }
            else {
                console.log("No discount");

            }
        }

    }
}
console.log(`T-Shirt Color: ${T_shirt.color}  price: ${T_shirt.price}`);
T_shirt.inventry.changecolor("Red")
console.log(`T-shirt Color: ${T_shirt.color}  Price: ${T_shirt.price}`);
T_shirt.inventry.changecolor("Blue")
console.log(`T-Shirt Color: ${T_shirt.color}  Price: ${T_shirt.price}`);
T_shirt.inventry.changecolor("Green")
console.log(`T-Shirt Color: ${T_shirt.color}  Price: ${T_shirt.price}`);




