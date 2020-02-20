class Gerenciador{

    constructor(){
        this.array = []
        this.contador= 0
        this.msg = ""
    }

    adicionarNoArray(){

        let numero = document.getElementById('inputNumero').value

        this.array[this.contador] = numero
        this.contador++

        this.imprimirArray()
    }

    imprimirArray(){
        document.getElementById("resultado").innerText = this.array
    }

    impares(){

        this.msg = ""

        for(let i=0; i<this.array.length; i++){
            
            if(this.array[i]%2 !=0){
                this.msg += this.array[i] + ","
            }
        }

        if(this.msg != ""){
            document.getElementById("impar").innerText = this.msg
        }
    }

    pares(){

        this.msg = ""

        for(let i=0; i<this.array.length; i++){
            
            if(this.array[i]%2 ==0){
                this.msg += this.array[i] + ","
            }
        }

        if(this.msg != ""){
            document.getElementById("par").innerText = this.msg
        }
    }

    imparesAteCem(){

        this.msg = ""

        for(let i=0; i<101; i++){
            if(i%2 != 0){
                this.msg += i + ","
            }
        }

        if(this.msg != ""){
            document.getElementById("imparate100").innerText = this.msg
        }
    }

}

let controller = new Gerenciador()