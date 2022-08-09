function frutas() {
    if(true){
        var fruta1 = 'Manzana' //scope dentro de la funcion
        let fruta2 = 'Pera' //scope solo en el bloque
        const fruta3 = 'Mango' //scope solo en el bloque
        console.log(fruta2);
        console.log(fruta3);
    }
    console.log(fruta1);
    
}

frutas();