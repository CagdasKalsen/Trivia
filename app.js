/*   VARIABLES */
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
let time = 60
    /* Created settimer() countdown */
let interval = null
const settimer = function() {
    interval = setInterval(() => {
        time--
        document.getElementById('sixty').innerHTML = time
        if (time === 0) {
            clearInterval(interval)
            document.getElementById('name').innerHTML = 'You Failed!!!'
            document.getElementById('firstquestion').style.display = 'none'
            document.getElementById('secondquestion').style.display = 'none'
            document.getElementById('next').style.display = 'none'
            document.getElementById('result').style.display = 'none'
            document.getElementById('sixty').style.display = 'none'
        }
    }, 1000);

}





const result = document.getElementById('result')

/* created event listener  */
const checkanswer = document.querySelector('#firstquestion')
    // checking if the clicked button matches the correct answer for question 1 
checkanswer.addEventListener('click', function checkanswerfunction(e) {
    if (e.target.value !== e.currentTarget.value) {
        clickedItem = e.target.value
    }

})

/*  created event listener  */

const checkanswer2 = document.querySelector('#secondquestion')
    // checking if the clicked button matches the correct answer for question 2
const gettotalscore = checkanswer2.addEventListener('click', function checkanswerfunction2(e) {
    if (e.target.value !== e.currentTarget.value) {
        clickedItem2 = e.target.value
    }
})


/* FUNCTIONS */

function funenter() {

    displayname.innerHTML = nameinput.value
    h3.style.display = "block"
    score.style.display = 'inline'
    sixty.style.display = "inline"
    firstquestion.style.display = "block"
    next.style.display = "block"
    firstdiv.style.display = 'none'
    settimer()

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
    clearInterval(interval)
    if (scoretotal >= 50) {
        document.getElementById('name').innerHTML = 'You Passed!!!'
        document.getElementById('name').style.fontSize = '65px'
        result.style.display = 'none'
        secondquestion.style.display = 'none'
        document.getElementById('sixty').style.display = 'none'

    }
    if (scoretotal < 50) {
        document.getElementById('name').innerHTML = 'You Failed!!!'
        document.getElementById('name').style.fontSize = '65px'
        result.style.display = 'none'
        secondquestion.style.display = 'none'
        document.getElementById('sixty').style.display = 'none'
    }
    next.style.display = 'none'
}

/*Event Listeners */
enterbttn.addEventListener('click', funenter)
next.addEventListener('click', fqscore)
result.addEventListener('click', fqscore2)
result.addEventListener('click', results)