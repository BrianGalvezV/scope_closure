const myGlobla = 0;

function myfuncition() {
    const myNumber = 1
    console.log(myGlobla);

    function parent() { //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobla);

        function child() { //funcion interna parent
            console.log(inner, myNumber, myGlobla);

        }
        return child();

    }
    return parent();
}

myfuncition();