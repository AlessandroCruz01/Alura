const chalk = require('chalk')
const fs = require('fs') //Lib nativa

function trataErro(error){
    throw new Error(chalk.red(error.code, 'Arquivos nao encontrados'))
}


function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm

    const arrayResultados = []
    let temp

    while((temp = regex.exec(texto)) !== null){
        arrayResultados.push({
            [temp[1]]: temp[2]
        })
    }

    return arrayResultados

}


// Async Await
async function pegarArquivo(file){
    try{ //Tenta
        const text = await fs.promises.readFile(file, 'utf-8')
        console.log(extraiLinks(text))
    } catch(err) { //Se nao der pegue o erro
        trataErro(err)
    }
}


// Usando .then()
// function pegarArquivo(file){
//     fs.promises
        
//         .readFile(file, 'utf-8')//Faz o que tem que fazer

//         .then((text) => { //.then ->  entao faca isso
//             console.log(text)
//         })

//         .catch((error => { //Caso tenha erro pegue ele
//             trataErro(error)
//         }))
// }

// function pegarArquivo(file){
//     fs.readFile(file, 'utf-8', function( err , data ){

//         if (err){
//             trataErro(err)
//         }
//         console.log(chalk.blue(data))
//     })
// }

pegarArquivo('./arquivos/texto1.md')