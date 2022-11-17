const nameinput = document.getElementById('nameInput')
const enterbttn = document.getElementById('enter')
const displayname = document.getElementById("displayName")
const next = document.getElementById('next')


let scoretotal = parseInt(document.getElementById('scoretotal').textContent)


const answerone = document.getElementById('five')
    // console.log(answerone.value)
const answers = ['5', '20']
let position = 0
let position2 = 1
let clickedItem = ''
let clickedItem2 = ''


const checkanswer = document.querySelector('#firstquestion')
    // console.log(checkanswer)

const checkanswer2 = document.querySelector('#secondquestion')
    // console.log(checkanswer2)
const result = document.getElementById('result')

checkanswer.addEventListener('click', function checkanswerfunction(e) {
    if (e.target.value !== e.currentTarget.value) {
        clickedItem = e.target.value
        console.log('hello', clickedItem)
    }

})

const gettotalscore = checkanswer2.addEventListener('click', function checkanswerfunction2(e) {
    if (e.target.value !== e.currentTarget.value) {
        clickedItem2 = e.target.value
        console.log('merhaba', clickedItem2)
    }
})


function funenter() {
    displayname.innerHTML = nameinput.value
    h3.style.display = "block"
    score.style.display = 'block'
    time.style.display = "block"
    firstquestion.style.display = "block"
    next.style.display = "block"
    firstdiv.style.display = 'none'
}

const fqscore = function funnext1() {
    if (answers[position] == clickedItem) {
        scoretotal = 50
        document.getElementById('scoretotal').textContent = scoretotal
        secondquestion.style.display = "block"
        next.style.display = "none"
        result.style.display = 'block'
    } else {
        scoretotal
        secondquestion.style.display = "block"
        document.getElementById('scoretotal').textContent = scoretotal
        next.style.display = "none"
        result.style.display = 'block'
    }
    firstquestion.style.display = "none"
    secondquestion.style.display = 'block'


}
const fqscore2 = function funnext2() {
    if (answers[position2] == clickedItem2) {
        scoretotal += 50
        document.getElementById('scoretotal').textContent = scoretotal
        result.style.display = 'block'
    } else if (answers[position2] !== clickedItem2) {
        scoretotal
        document.getElementById('scoretotal').textContent = scoretotal
        result.style.display = 'block'
    }

    result.style.display = 'block'

}

const results = function results() {
    if (scoretotal >= 50) {
        document.getElementById('name').innerHTML = 'You Passed!!!'
        result.style.display = 'none'
        secondquestion.style.display = 'none'
            // score.style.display = "block"
    }
    if (scoretotal < 50) {
        document.getElementById('name').innerHTML = 'You Failed!!!'
        result.style.display = 'none'
        secondquestion.style.display = 'none'
            // score.style.display = "block"
    }
    next.style.display = 'none'

}

enterbttn.addEventListener('click', funenter)
next.addEventListener('click', fqscore)
result.addEventListener('click', fqscore2)


result.addEventListener('click', results)