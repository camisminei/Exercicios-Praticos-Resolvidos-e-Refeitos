class Gerenciador{

    constructor(){
        this.array = []
        this.contador = 0
        this.msg = ""
    }

    adicionarArray(){

        let numero = document.getElementById("inputNumero").value

        this.array[this.contador]=numero
        this.contador++

        this.imprimir()
    }

    imprimir(){

        document.getElementById("resultado").innerText = this.array
    }

    inverter(){
        
        this.msg = ""

        for(let i=this.array.length-1; i>=0; i--){

           this.msg += this.array[i] + ","
           
        }

        if(this.msg != ""){
            document.getElementById("resultado").innerText = this.msg
        }

        //document.getElementById("resultado").innerText = this.array.reverse()
    }

}

let gerenciador = new Gerenciador()