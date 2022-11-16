//Variables

const nameinput = document.getElementById('nameInput')
const enterbttn = document.getElementById('enter')
const displayname = document.getElementById("displayName")
const next = document.getElementById('next')

const totalscore = document.getElementById('scoretotal')

//functions 


function funenter() {
    displayname.innerHTML = nameinput.value
    h3.style.display = "block"
    score.style.display = "block"
    time.style.display = "block"
    firstquestion.style.display = "block"
    next.style.display = "block"
    firstdiv.style.display = 'none'

}

function funnext1() {
    firstquestion.style.display = "none"
    secondquestion.style.display = 'block'
}


function funnext2() {
    secondquestion.style.display = 'block'

}


enterbttn.addEventListener('click', funenter)