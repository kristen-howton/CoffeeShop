const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

const url = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#coffee-button");
button.addEventListener("click", () => {
    getAllCoffeeVarieties()
        .then(coffeeVarieties => {
            console.log(coffeeVarieties);
        })
});

function getAllCoffeeVarieties() {
    return fetch(url).then(resp => resp.json());
}