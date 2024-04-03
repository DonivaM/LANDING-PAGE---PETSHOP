var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

//selecionando todos os elementos -duvida- do HTML. Todos = querySelectorAll
    //para cada elemento da variável que tenha a função "duvida"
     //adicione um evento de clique em cada elemento "duvida".
     //coloque a palavra-chave "ativa" emc cada classe do tipo "duvida", modificando-a, sem mudar nada, apenas adicionar = toggle;