//Variables
var a;          //Declaramos
var b = 'b';    //Declaramos y asignamos
b = 'bb';   //Reasignamos un valor
var a = 'aa' //redeclaramos


//Global Scope
var fruit = 'apple'; //global

function bestFruit(){
    console.log(fruit) //la variable global se accede dentro y fuera de la funcion
}

bestFruit()

function contrys(){
    country = 'Mexico' //si solo asignamos es una variable global
    console.log(country)
}

contrys()
console.log(country)