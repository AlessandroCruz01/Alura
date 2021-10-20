const ModeloTabela = require('../rotas/fornecedores/modeloTabelaFornecedor')

ModeloTabela
    .sync()
    .then(() => console.log('Tabela criada'))
    .catch(console.log)