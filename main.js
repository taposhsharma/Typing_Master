window.addEventListener('load', selectLevel)
let score = 0;
let time,repeat;

const wordInput = document.querySelector("#word-input")


const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timedisplay = document.querySelector("#time")
const mess = document.querySelector('#message')
const reset = document.querySelector("#reset")
const easy = document.querySelector("#easy")
const medium = document.querySelector("#medium")
const hard = document.querySelector("#hard")
const options = document.querySelector("#options")
const level = document.querySelector("#level")
const game = document.querySelector("#game")

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];


    function selectLevel(){
      timedisplay.innerHTML = 0
      level.addEventListener("click", function(){
         if(options.style.display == "block"){
            options.style.display = "none"
         }else{
            options.style.display = "block"
         }
         
      })
      wordInput.disabled = true
      currentWord.innerHTML = "Select Level"
      easy.addEventListener("click", function(){
         time = 16
         repeat = 16
         work()
      })
      medium.addEventListener("click", function(){
         time = 11
         repeat = 11
         work()
      })
      hard.addEventListener("click", function(){
         time = 6
         repeat = 6
         work()
      })
   }
   

   function init(){
            showWord(words);
            wordInput.disabled = false
            wordInput.focus()
            wordInput.addEventListener('input', matchWord)
            timeinteval()
   }

     function showWord (words){
        const randomidx = Math.floor(Math.random() * words.length)
        
        currentWord.innerHTML = words[randomidx]
    }
    
   function matchWord(){
       
           if(currentWord.textContent == wordInput.value){ 
            mess.innerHTML = "Correct!!!"
            wordInput.value = ""
            score++;
            scoreDisplay.innerText = score
            showWord(words)
            time = repeat;
           }else{
              mess.innerHTML = "Incorrect!!!"
           }
    }
    
   game.addEventListener('click' , function(){
      if(document.getElementById("game").value == "Start Game"){
         window.location.reload()
      }else{
        time=0
      }
       
    })

   function timeinteval(){
      setInterval(() => {
         if(time>0){
            time--;
         }else{
            wordInput.disabled = true
         mess.innerHTML = "Game over"
         document.getElementById("game").value = "Start Game"
          
         }
         timedisplay.innerHTML = time
         }, 1000)
    }

   function work(){
      
      level.style.display="none"
      options.style.display = "none"
      reset.style.display = "block"
      init()
         
    }