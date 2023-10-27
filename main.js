const ropas = [];
let vestirDeportiva;

class Vestimenta {
    constructor(vestir, tipo, marca) {
        this.vd = vestir;
        this.tipo = tipo;
        this.marca = marca;
    }
}

function obtenerEntrada(mensaje, opciones) {
    let entrada = "";
    while (true) {
        entrada = prompt(mensaje);
        if (entrada === "N" || opciones.includes(entrada)) {
            return entrada;
        }
    }
}

const marcas = ["Adidas", "Reebok", "New Balance", "Topper"];
const marcaCount = {};

for (const marca of marcas) {
    marcaCount[marca] = [];
}

while (vestirDeportiva !== "N") {
    vestirDeportiva = obtenerEntrada("Elija que ropa comprar: [ Deportiva - Vestir - N:Salir ]", ["Deportiva", "Vestir"]);
    if (vestirDeportiva !== "N") {
        const marca = obtenerEntrada("Elija que marca: [ Adidas, Reebok, New Balance, Topper ]", marcas);
        ropas.push(new Vestimenta(vestirDeportiva, "", marca));
    }
}

for (const marca of marcas) {
    marcaCount[marca] = ropas.filter(ropita => ropita.marca === marca);
    console.log(`Cantidad de ropa de marca ${marca}: ${marcaCount[marca].length}`);
}

function hayDeportiva(marca) {
    return marcaCount[marca].some(ropita => ropita.vd === "Deportiva");
}

for (const marca of marcas) {
    if (hayDeportiva(marca)) {
        console.log(`Hay ropa deportiva de ${marca}`);
    } else {
        console.log(`No hay ropa deportiva de ${marca}`);
    }
}
