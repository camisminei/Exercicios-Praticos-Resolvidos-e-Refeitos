class Gerenciador{

    constructor(){
        this.vet = []
        this.contador = 0
        this.idEditar = null
    }

    salvar(){

        let carro = this.lerCarro()

        if(this.validar(carro)){

            this.adicionar(carro)

            this.listar()

            this.limpar()
          
            
        }else{
            alert("Preencha todos os campos!")
        }

    }

    calcularResultado(){

        let maior = 0
        let menor = 0
        let media = 0

        for(let i=0; i<this.vet.length; i++){

            if(this.vet[i]>maior){
                maior+=vet[i]

            }else{
                menor+=vet[i]
            }

            media +=this.vet[i]
        }

        media/=this.vet.length

    }

    adicionar(carro){ //*2

        carro.id = "placa- " + this.contador
        this.vet.push(carro)
        this.contador++

        // this.vet[this.contador] = carro
        // this.contador++

    }

    lerCarro(){ //*1

        let carro = {}

        carro.id = this.contador
        this.contador++
        carro.nome = document.getElementById("input-nome").value 
        carro.marca = document.getElementById("input-marca").value 
        carro.ano = document.getElementById("input-ano").value 

        return carro

    }

    listar(){

            let tabela = document.querySelector("#resultado-tabela")
            tabela.innerHTML = ""

            for(let i=0; i<this.vet.length; i++){

                let linha = tabela.insertRow()
                let celulanome = linha.insertCell(0)
                let celulamarca = linha.insertCell(1)
                let celulaano = linha.insertCell(2)

                let celulaeditar = linha.insertCell(3)
                let celulaexcluir = linha.insertCell(4)

            
                celulanome.innerText = this.vet[i].nome
                celulamarca.innerText = this.vet[i].marca
                celulaano.innerText = this.vet[i].ano

                let imgEditar = document.createElement('img')
                let imgExcluir = document.createElement('img')

                imgEditar.setAttribute('src','img/edit.svg')
                imgExcluir.setAttribute('src','img/delete.svg')

                imgEditar.setAttribute('onclick',`controller.editar('${this.vet[i].id}')`)
                imgExcluir.setAttribute('onclick',`controller.excluir('${this.vet[i].id}')`)

                celulaeditar.appendChild(imgEditar)
                celulaexcluir.appendChild(imgExcluir)
            }
        

    }

    editar(carro){

        document.getElementById("input-nome").value = carro.nome
        document.getElementById("input-marca").value = carro.marca
        document.getElementById("input-ano").value = carro.ano
    }

    excluir(id){

        let posicao = null
        
        for(let i=0; i<this.vet.length; i++){
            
            if(this.vet[i].id == id){
                posicao=i
            }
        }

        if(posicao!=null){
            this.vet.splice(posicao,1)
        }

        this.listar()

    }

    limpar(){

        let carro = this.lerCarro()

        document.querySelector("#input-nome").value = ""
        document.querySelector("#input-marca").value = ""
        document.querySelector("#input-ano").value = ""

        carro.nome = ""
        carro.marca= ""
        carro.ano = ""

    }

    validar(carro){ //boolean

        if(carro.nome != "" && carro.marca != "" && carro.ano != ""){
            return true
        }else{
            return false
        }

    }
}

let controller = new Gerenciador()