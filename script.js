const filterElement = document.querySelector('header input')

const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function filterCards() {
   if(filterElement.value != ""){
     let filter = filterElement.value.toLowerCase()
     for(let card of cards){
       let title = card.querySelector('h2')
       title = title.textContent.toLowerCase()
       if(title.includes(filter))
         card.style.display = "block"
       else
         card.style.display = "none"
     }
   }else{
     for(let card of cards)
      card.style.display = "block"
   }
}