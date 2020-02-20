class Gerenciador{

    constructor(){
        this.array = []
        this.contador = 0
        this.repete = 0
        this.msg = ""
    }

    adicionarNoArray(){

        let palavra = document.getElementById("inputString").value 

        this.array[this.contador] = palavra 
        this.contador++

        this.imprimirArray()
    }

    imprimirArray(){
        document.getElementById("resultado").innerText = this.array
    }

    verificar(){

        let verifica = document.getElementById("inputVerifica").value.toLowerCase()

        let validador = false

        for(let i=0; i<this.array.length; i++){

            if(this.array[i].toLowerCase() == verifica){
                validador = true
                this.repete++
            }
        }

        this.msg = ""

        if(validador){

            this.msg += "A palavra " + verifica + " foi encontrado " + this.repete + " vezes"
            this.repete=""
            document.getElementById("mensagem").innerText = this.msg

        }else{

            this.msg += "A palavra " + verifica + " não foi encontrado!"
            document.getElementById("mensagem").innerText = this.msg

        }

    }
}

let controller = new Gerenciador()