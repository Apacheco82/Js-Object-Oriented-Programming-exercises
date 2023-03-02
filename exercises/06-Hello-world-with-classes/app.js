/**
  * This class recreates a real-life printer
  */
class Printer{
    
    constructor(){
    	this._brand = 'Epson'; //will be a string 
    	this._model = 'TX-200'; //will be a string 
    }
  
    //Just like printers, this printer has a function that 
    //prints an example text to make sure the printer is working
    printerTest() { 
        return `My brand is ${this._brand} and my model ${this._model}`; 
    } 
}

//Your code here
let epson = new Printer() //instancia de la impresora
let resultado = epson.printerTest() //el objeto y la función dentro del objeto, separado por un punto para acceder al valor de la key
console.log(resultado) // la variable creada con el obj y la función