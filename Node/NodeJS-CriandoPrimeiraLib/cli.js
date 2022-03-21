const chalk = require('chalk')
const pegarArquivo = require('./index')

const directory = process.argv;

async function process(caminho){
    const result = await pegarArquivo(caminho[2])
    console.log(chalk.yellow('Lista de links'), result)
}

process(directory)