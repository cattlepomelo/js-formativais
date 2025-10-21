let auto = {
    marka: "Toyota",
    modelis: "Corolla",
    gads: 2010
};

console.log(auto.marka);

let currentYear = new Date().getFullYear();
let autoAge = currentYear - auto.gads;

if (autoAge > 10) {
    console.log("Auto ir vecāks par 10 gadiem");
} else {
    console.log("Auto nav vecāks par 10 gadiem");
}