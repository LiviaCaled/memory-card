document.addEventListener('DOMContentLoaded', () => {
const cardArray =[
  {
    name: 'card1',
    img: 'src/images/card1.png'
  },
  {
    name: 'card2',
    img: 'src/images/card2.png'
  },
  {
    name: 'card3',
    img: 'src/images/card3.png'
  },
  {
    name: 'card4',
    img: 'src/images/card4.png'
  },
  {
    name: 'card5',
    img: 'src/images/card5.png'
  },
  {
    name: 'card6',
    img: 'src/images/card6.png'
  },
  {
    name: 'card7',
    img: 'src/images/card7.png'
  },
  {
    name: 'card8',
    img: 'src/images/card8.png'
  },
  {
    name: 'card9',
    img: 'src/images/card9.png'
  },
  {
    name: 'card10',
    img: 'src/images/card10.png'
  },
  {
    name: 'card1',
    img: 'src/images/card1.png'
  },
  {
    name: 'card2',
    img: 'src/images/card2.png'
  },
  {
    name: 'card3',
    img: 'src/images/card3.png'
  },
  {
    name: 'card4',
    img: 'src/images/card4.png'
  },
  {
    name: 'card5',
    img: 'src/images/card5.png'
  },
  {
    name: 'card6',
    img: 'src/images/card6.png'
  },
  {
    name: 'card7',
    img: 'src/images/card7.png'
  },
  {
    name: 'card8',
    img: 'src/images/card8.png'
  },
  {
    name: 'card9',
    img: 'src/images/card9.png'
  },
  {
    name: 'card10',
    img: 'src/images/card10.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen =[]
let cardsChosenIds =[]
let cardsWon =[]

function createBoard(){
  for (let i = 0; i<cardArray.length; i++) {
  const card = document.createElement('img')
  card.setAttribute('src', 'src/images/blank.png')
  card.setAttribute('data-id', i)
  card.addEventListener('click', flipCard)
  grid.appendChild(card)
  }
}
createBoard()

function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

  if(optionOneId == optionTwoId[1]) {
    cards[optionOneId].setAttribute('src', 'src/images/blank.png')
    cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
  } else if (cardsChosen[0] === cardsChosen[1]) {
  cards[optionOneId].setAttribute('src', 'src/images/blank1.png')
  cards[optionTwoId].setAttribute('src', 'src/images/blank1.png')
  cards[optionOneId].removeEventListener('click', flipCard)
  cards[optionTwoId].removeEventListener('click', flipCard)
  cardsWon.push(cardsChosen)
  } else {
  cards[optionOneId].setAttribute('src', 'src/images/blank.png')
  cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
  }
  cardsChosen =[]
  cardsChosenIds =[]
  resultDisplay.textContent = cardsWon.length
  if(cardsWon.length === cardArray.length /2) {
    resultDisplay.textContent = 'Congratulations! You have won!'
  }

}
})