// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",function(){
  let valueHeart = document.getElementsByClassName('like-glyph')
  for (const heart of valueHeart) {
    heart.addEventListener('click', buttonClick)
  }
})

function buttonClick(e){
  
  const heart = e.target;
  mimicServerCall()
  .then((data) => {
    setTimeout(function() {
      sethiddenclass(true)  
    
    if(heart.classList.contains('activated-heart')===false){
      heart.classList.add("activated-heart")
    }
    else {
      heart.classList.remove("activated-heart")
    }
  }, 300)
      
    
    

  })
  
  .catch((error) => {
    
    let md= document.getElementById('modal')
    md.textContent=error
    sethiddenclass(false)
  })
}
function sethiddenclass(value){
  let hdValue= document.getElementById('modal')
  if(value===false){
    hdValue.classList.remove("hidden");
  }
  else if(value===true){
    hdValue.classList.add("hidden");
  }
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
      
    }, 300);
  });
}
