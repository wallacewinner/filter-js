const filterElement = document.querySelector('header input')

const cards = document.querySelectorAll('.cards li')

filterElement.addEventListener('input', filterCards)

function filterCards() {
  for (let card of cards) {
    if (filterElement.value != "") {
      hasContent(card)
    } else {
      card.style.display = "block"
    }
  }
}

function hasContent(card) {
  let filter = normalizeText(filterElement.value)
  let title = normalizeText(card.querySelector('h2').textContent)
  title.includes(filter) ? card.style.display = "block" : card.style.display = "none"
}

function normalizeText(text) {
  return text.toLowerCase().trim()
}
