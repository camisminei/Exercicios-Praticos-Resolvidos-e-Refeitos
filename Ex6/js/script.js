
class Gerenciador {



constructor (){

this.nome = ""
this.marca=""
this.ano=""
this.vetor= []
this.contador=0


}



validar (carro){
    if(carro.nome != "" && carro.marca != "" && carro.ano != ""){
        return true
    }else{
        return false
    }

}



salvar(){

}

calcularResultado(){
    let maior =0
    let media = 0
    let menor=0

    for(let i=0; i<this.vetor.length; i++){

        for(let j = i+1; j<this.vetor.length-1; j++){

            if(this.vetor[i]>this.vetor[j]){
                maior = this.vetor[i]
                menor =this.vetor[j]
            
            }else{
                maior = this.vetor[j]
                menor = this.vetor[i]
            }
            
        }

        media += this.vetor[i]
        media = media/this.vetor.length

    }
}



adicionar(carro){

    this.vetor[this.contador] = carro
    this.contador++

}



lerCarro(){
    let carro = {}
    carro.nome = document.getElementById("nome-input").value 
    carro.marca = document.getElementById("marca-input").value
    carro.ano = document.getElementById("ano-input").value 

    this.adicionar()
}





listar(){
    let tabela = document.getElementById(lista).insertRow()

    let linha = document.getElementById("resultado-listado")


    
}








editar(carro){

}


excluir(id){

}

limpar(){
    
}

}

let controller = new Gerenciador()