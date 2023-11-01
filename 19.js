//switch case statement
//break is complusory in switch to exit the block
let day= +prompt("Enter Number Which Represent Day from 0 ")
switch (day) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thurday")
        break;
    case 5:
        console.log("Firday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("Invalid")
}