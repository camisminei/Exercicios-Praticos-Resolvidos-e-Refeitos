class GerenciadorTarefas{
    

    constructor(){
       this.tarefa = ""
       this.contador = 0
       this.idEditar = null
    }

    lerTarefa(){
        this.tarefa = document.getElementById("tarefa-input").value
    }

    validarTarefa(){
        if(this.tarefa != ""){
            return true
        }
        return false
    }

    inserirTarefa(){
        
        let tabela = document.querySelector("#resultado")

        let linha = tabela.insertRow()
        let celula_Situacao = linha.insertCell(0)
        let celula_Tarefa = linha.insertCell(1)
        let celula_Editar = linha.insertCell(2)
        let celula_Excluir = linha.insertCell(3)

        linha.id = "linha - " + this.contador
        
        this.contador++

        celula_Tarefa.innerText = this.tarefa

        let situacao = document.createElement("img")
        let editar = document.createElement("img")
        let excluir = document.createElement("img")

        situacao.setAttribute('src', 'img/success.svg')
        editar.setAttribute('src','img/pencil.svg')
        excluir.setAttribute('src','img/error.svg')
        // console.log(situacao.style.display = "block"); console.log(situacao.style.display = "none") 
        situacao.addEventListener('click', () => { situacao.style.opacity = (!situacao.style.opacity|| situacao.style.opacity == 1  ? 0 : 1) } )
        editar.setAttribute('onclick',`gerenciador.editarTarefa('${linha.id}')`)
        excluir.setAttribute('onclick',`gerenciador.removerTarefa('${linha.id}')`)

        celula_Situacao.appendChild(situacao)
        celula_Editar.appendChild(editar)
        celula_Excluir.appendChild(excluir)
    }

    removerTarefa(id){
        if(confirm("Deseja remover tarefa?")){
            document.getElementById(id).remove()
        }
    }

    editarTarefa(id){
        document.querySelector("#tarefa-input").value = document.getElementById(id).children[1].textContent;
        this.idEditar = id
    }

    limparCampo(){
        document.getElementById("tarefa-input").value = ""
        this.tarefa = ""
    }

    salvarTarefa(){
        this.lerTarefa()
        if(this.validarTarefa()){
            if(this.idEditar == null){
                this.inserirTarefa()
            }else{
                document.getElementById(this.idEditar).cells[1].innerText = this.tarefa
                this.idEditar = null
            }
            this.limparCampo()
        }else{
            alert("Preencha o campo!")
        }
        
    }

}

let gerenciador = new GerenciadorTarefas()