// import { useCoffee } from "./CoffeeProvider.js"
// import { Coffee } from "./Coffee.js"

// //DOM reference with a class of distributorContainer
// const contentTarget = document.querySelector(".coffeeContainer")

// const coffeeDistributors = coffeeToRender => {
//     //property on the DOM element, .map is going to transform the data to HTML
//     contentTarget.innerHTML = coffeeToRender.map(
//         coffeeObject => {
//             return Coffee(coffeeObject)
//         }
//         //turns the HTML into a single string
//     ).join("")
// }

// export const CoffeeList = () => {
//     const allCoffee = useCoffee()
//     renderCoffee(allCoffee)
// }