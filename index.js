const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordOne = document.getElementById("input1")
let passwordTwo = document.getElementById("input2")

function generatePassword(){
    console.log("clicked")
    
  let password2 = characters[Math.floor(Math.random()*characters.length)]
    let pw =""
    let pw2 =""
    for(let i= 0; i < 15; i++ ){
  let password = characters[Math.floor(Math.random()*characters.length)]
        
        pw += password
        
    }
    for(let i= 0; i < 15; i++ ){
  let password = characters[Math.floor(Math.random()*characters.length)]
        
        pw2 += password
        
    }
    console.log(pw)
   
    passwordOne.innerText = pw
    passwordTwo.innerText = pw2
    
    
}

generatePassword()