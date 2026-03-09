

const registrarProdutos = function(){
    const nomeProduto = document.getElementById('nome-produto').value
    const valorProduto = document.getElementById('preco').value
    const validadeProduto = new Date(document.getElementById('validade').value)
    const listaDeProdutos = document.getElementById('lista')

    let listasProdutos = []

    const formatarMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    });

    const valProdutoFormatado = validadeProduto.toLocaleDateString('pt-BR', { dateStyle: 'short' })

    console.log(validadeProduto);
    console.log(typeof(validadeProduto));
    
    
    

    let infoProduto = {nome: nomeProduto, val: formatarMoeda.format(valorProduto), validade: valProdutoFormatado}  
    listasProdutos.push(infoProduto)
    

    if(nomeProduto == '' || valorProduto == '' || validadeProduto == ''){
        window.alert('Preencha todos os campos')
    }else{
        listasProdutos.forEach(i => {
        const linhaProduto = document.createElement('div')
        linhaProduto.className = 'linha'

        const nameProduct = document.createElement('span')
        nameProduct.textContent = i.nome

        const valueProduct = document.createElement('span')
        valueProduct.textContent = i.val

        const valProduct = document.createElement('span')
        valProduct.textContent= i.validade
        
        linhaProduto.appendChild(nameProduct)
        linhaProduto.appendChild(valueProduct)
        linhaProduto.appendChild(valProduct)

        listaDeProdutos.className = 'lista'
        listaDeProdutos.appendChild(linhaProduto)
    })
    }
}