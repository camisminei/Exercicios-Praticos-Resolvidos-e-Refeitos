class Gerenciador{

    constructor(){
        this.array = []
        this.contador = 0
        this.msg = ""
    }

    adicionarNoArray(){
        let convidado = {}
        convidado.nome = document.getElementById("inputNome").value 
        convidado.idade = document.getElementById("inputIdade").value 
        //convidado.sexo = document.getElementById("[type = radio]:checked")

        this.array[this.contador] = convidado
        this.contador++

        this.imprimirArrayObject()
    }

    imprimirArrayObject(){
        document.getElementById("resultado").innerText = this.array = nome
    }

}

let controller = new Gerenciador()