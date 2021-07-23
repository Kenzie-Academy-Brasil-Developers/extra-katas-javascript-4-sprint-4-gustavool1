const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";
function showResults(n, h1txt){
    let p = document.createElement("p");
    let h1 = document.createElement("h1");
    let h1content = document.createTextNode(h1txt)
    h1.appendChild(h1content)
    document.body.appendChild(h1)
    let conteudo = document.createTextNode(n);
    p.appendChild(conteudo)
    document.body.appendChild(p)
}
function kata1() {
    return JSON.stringify(gotCitiesCSV.split(','))
}
showResults(kata1(), 'Kata 1')

function kata2(){
    return JSON.stringify(bestThing)
}
showResults(kata2(), 'Kata 2')

function kata3(){
    let str = gotCitiesCSV;
    
  return str = str.split(",").join(';  ')
}
showResults(kata3(), 'Kata 3')

function kata4(){
    let citysArr = [...lotrCitiesArray]
    return citysArr.join(", ")
}
showResults(kata4(), 'KATA 4')

function kata5(){
   return JSON.stringify(gotCitiesCSV.split(',', 5))
}
showResults(kata5(), 'Kata 5')

function kata6(){
    return JSON.stringify(lotrCitiesArray.slice(',', 5))
}

showResults(kata6(), 'Kata 6')

function kata7(){
    let newArr = []
    newArr.push(lotrCitiesArray[2])
    newArr.push(lotrCitiesArray[4])
    return  JSON.stringify(newArr)
}
showResults(kata7(), 'Kata 7')

function kata8(){
   
    lotrCitiesArray.splice(2,1)
    return JSON.stringify(lotrCitiesArray)
}
showResults(kata8(), 'Kata 8')

function kata9(){
    
    lotrCitiesArray.splice(5,)
    return JSON.stringify(lotrCitiesArray)
}
showResults(kata9(), 'Kata 9')

function kata10(){
    lotrCitiesArray.splice(2,0,'Rohan')
    return JSON.stringify(lotrCitiesArray)
    
}
showResults(kata10(), 'Kata 10')

function kata11(){
    lotrCitiesArray.splice(5,1, "Deadest Marshes")
    
    return JSON.stringify(lotrCitiesArray)
}

showResults(kata11(), 'Kata 11')

function kata12(){
    let sla =bestThing.slice(' ', 17)
    return JSON.stringify(sla)
}
showResults(kata12(), 'Kata 12')

function kata13(){
    
    let str = bestThing.slice(65, 81)
    return JSON.stringify(str)
}
showResults(kata13(), 'Kata 13')

function kata14(){
    /*Escreva uma função que usa 'slice' para retornar uma string com os caracteres entre as
     posições 23 e 38 de 'bestThing'. Lembre-se de também adicionar os resultados à página.
    */ 
   let str = bestThing.slice(23,38)
   return JSON.stringify(str)
}
showResults(kata14(), 'Kata 14')

function kata15(){
    /*Escreva uma função que faz exatamente a mesma coisa que a #13 mas use o método 'substring'
     em vez de 'slice'. Lembre-se de também adicionar os resultados à página.*/ 
     let str = bestThing.substring(65, 81)
     return JSON.stringify(str)
}
showResults(kata15(), 'Kata 15')

function kata16(){
    let str = bestThing.substring(23,38)
    return JSON.stringify(str)
}
showResults(kata16(), 'Kata 16')

function kata17(){
    let newArr = [...lotrCitiesArray]
    newArr.pop()
    return JSON.stringify(newArr)
}
showResults(kata17(), 'Kata 17')

function kata18(){
    lotrCitiesArray.push("Marshes")
    return JSON.stringify(lotrCitiesArray)
}
showResults(kata18(), "Kata 18")

function kata19(){
    lotrCitiesArray.shift()
    return JSON.stringify(lotrCitiesArray)
}
showResults(kata19(), 'Kata 19')

function kata20(){
    lotrCitiesArray.unshift('Mordor')
    return JSON.stringify(lotrCitiesArray)
}
showResults(kata20(), 'Kata 20')


/*----------------BONUS -------------*/

function bonusKata1(){
    let bestArr = bestThing.split(" ")
    return bestArr.indexOf('only')
}
showResults(bonusKata1(), 'Bonus - Kata 1')

function bonusKata2(){
    let bestArr = bestThing.split(' ')
    return bestArr.length-1
}
showResults(bonusKata2(), 'Bonus - Kata 2')

function bonusKata3(){
    let citysArr =gotCitiesCSV.split(",")
    const filtrando = citysArr.filter((elemento, indice) =>{
        for(let i=0; i<elemento.length; i++){
            if(elemento[i] === 'a'||elemento[i] === 'e'||elemento[i] === 'i'||elemento[i] === 'o'||elemento[i] === 'u'){
                if(elemento[i+1]=== elemento[i]){
                    return elemento
                }
            }
        }
    })
    return JSON.stringify(filtrando)    
}
showResults(bonusKata3(), 'Bonus - Kata 3')

function bonusKata4(){
    const filtrando = lotrCitiesArray.filter((elemento, indice) => {
        for(let i=elemento.length-1; i>elemento.length-3; i--){
            if(elemento.endsWith("or")){
                return elemento
            }
        }
    })    
  return JSON.stringify(filtrando)
}
showResults(bonusKata4(), 'Bonus - Kata 4')

function bonusKata5(){
    let strArr = bestThing.split(" ")
    
    const wordsBegginingWithB = strArr.filter((elemento)=>{
        if(elemento.startsWith('b')){
            return elemento
        }
    })
   return JSON.stringify(wordsBegginingWithB)
}
showResults(bonusKata5(), 'Bonus - Kata 5')

function bonusKata6(){
    if(lotrCitiesArray.includes("Mirkwood")){
        return 'Sim'
    }
    return 'Não'
}
showResults(bonusKata6(), 'Bonus - Kata 6')


function bonusKata7(){
    if(lotrCitiesArray.includes("Hollywood")){
        return 'Sim'
    }
    return 'Não'
}
showResults(bonusKata7(), 'Bonus - Kata 7')

function bonusKata8(){
  if(bonusKata6()=== 'Sim'){
    return  lotrCitiesArray.indexOf('Mirkwood')
  }
}
showResults(bonusKata8(), "Bonus - Kata 8")

function bonusKata9(){
    const findSpace = lotrCitiesArray.filter((elemento)=>{
        for(let i=0; i< elemento.length; i++){
            if(elemento[i]=== " "){
                return elemento
            }
        }
    })
    return JSON.stringify(findSpace)
}
showResults(bonusKata9(), "Bonus - Kata 9")

function bonusKata10(){
    const reversing = lotrCitiesArray.reverse()
    return JSON.stringify(reversing)
}
showResults(bonusKata10(), "Bonus - Kata 10 ")

function bonusKata11(){
    let newArr = [...lotrCitiesArray]
    return JSON.stringify(newArr.sort())
}
showResults(bonusKata11(), "Bonus - Kata 11")


function bonusKata12(){
    let order = []
    lotrCitiesArray.forEach((elemento) =>{
        order.push(elemento.length)
    })
  
}
showResults(bonusKata12(), 'Bonus - Kata 12 ')