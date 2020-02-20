class Gerenciador{

    constructor(){
        this.array = []
        this.contador = 0
    }

    adicionarArray(){

        let numero = document.getElementById("inputNumero").value 

        this.array[this.contador] = numero
        this.contador++

        this.imprimirArray()

    }

    imprimirArray(){
        document.getElementById("resultado").innerText = this.array
    }

    verificarArray(){
        
        let valorVerificado = document.getElementById("verificaNumero").value

        let encontrou = false
        let posicao = -1

        for(let i=0; i<this.array.length; i++){
            if(valorVerificado == this.array[i]){
                encontrou=true
                posicao = i
            }
        }

        if(encontrou){
            alert('O valor ' +  `${valorVerificado}` + ' está contido na posicao ' + `${posicao}`)

        }else{
            alert('O valor ' + `${valorVerificado}` + ' não foi encontrado')
        }

    }
}
let gerenciador = new Gerenciador()