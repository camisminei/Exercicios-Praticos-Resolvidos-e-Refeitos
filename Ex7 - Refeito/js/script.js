class GerenciadorTarefas{

    constructor(){
        this.lista = []
        this.geradorDeId = 0
        this.idEditar = null
    }

    lerTarefa(){
        let tarefa = {}
        tarefa.descricao = document.getElementById("tarefa-input").value
        tarefa.concluida = false

        return tarefa
    }

    validar(tarefa){
        if(tarefa.descricao == ""){
            alert("O campo de descrição da tarefa é obrigatório!")
            return false
        }
        return true
    }

    adicionar(tarefa){
        tarefa.id = this.geradorDeId
        this.geradorDeId++

        this.lista.push(tarefa)
    }

    limpar(tarefa){
        document.getElementById("tarefa-input").value = ""
        this.idEditar = null

    }

    construirTabela(){

        let tabela = document.getElementById("resultado")
        tabela.innerHTML = ""

        for(let i=0; i<this.lista.length; i++){

            let linha = tabela.insertRow()

            let celula_situacao = linha.insertCell()
            let celula_descricao = linha.insertCell()
            let celula_editar = linha.insertCell()
            let celula_excluir = linha.insertCell()

            let imgConcluida = document.createElement('img')
            let imgEditar = document.createElement('img')
            let imgExcluir = document.createElement('img')

            celula_descricao.innerText = this.lista[i].descricao

            if(this.lista[i].concluida){
                imgConcluida.src = "img/success.svg"

            }else{
                imgConcluida.src = "img/circle-shape-outline.svg"
            }

            imgConcluida.setAttribute("onclick",`gerenciador.mudarStatus('${this.lista[i].id}')`)

            imgEditar.src = "img/pencil.svg"
            imgEditar.setAttribute("onclick",`gerenciador.editar('${this.lista[i].id}')`)

            imgExcluir.src = "img/error.svg"
            imgExcluir.setAttribute("onclick", `gerenciador.excluir('${this.lista[i].id}')`)

            celula_situacao.appendChild(imgConcluida)
            celula_editar.appendChild(imgEditar)
            celula_excluir.appendChild(imgExcluir)
        }
    }

    mudarStatus(id){
        if(confirm("Deseja mudar o status dessa tarefa?")){
            let i = 0
            let achou = false

            while(i < this.lista.length && !achou){
                if(this.lista[i].id == id){
                    achou = true
                    this.lista[i].concluida = !this.lista[i].concluida
                }else{
                    i++
                }
            }

            this.construirTabela()
        }
    }

    excluir(id){
        if(confirm("Deseja remover essa tarefa?")){
            let i = 0
            let achou = false

            while( i < this.lista.length && !achou){
                if(this.lista[i].id == id){
                    achou = true

                }else{
                    i++
                }
            }

            if(achou){
                this.lista.splice(i,1)
                this.construirTabela()
            }
        }
    }

    editar(id, descricao){
        document.getElementById("tarefa-input").value = descricao
        this.idEditar  = id
        document.getElementById("salvarEdicao").src = "img/success.svg"
    }

    salvarEdicao(tarefa){
        let i = 0
        let achou = false

        while(i < this.lista.length && !achou){

            if(this.lista[i].id == this.idEditar){
                achou = true

            }else{
                i++
            }
        }

        if(achou){
            this.lista[i].descricao = tarefa.descricao
            this.limpar()
            this.construirTabela()
        }

        document.getElementById("salvarEdicao").src = "img/plus.svg"
    }

    salvar(){
        let tarefaRetornada = this.lerTarefa()

        if(this.validar(tarefaRetornada)){

            if(this.idEditar == null){
                this.adicionar(tarefaRetornada)
            }else{
                this.salvarEdicao(tarefaRetornada)
            }

            this.limpar()
            this.construirTabela()
        }
    }
}
let gerenciador = new GerenciadorTarefas()