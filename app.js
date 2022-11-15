const nameinput = document.getElementById('nameInput')
const enterbttn = document.getElementById('enter')
const displayname = document.getElementById("displayName")

function funenter() {
    displayname.innerHTML = nameinput.value
    h3.style.display = "block"
    score.style.display = "block"
    timesecond.style.display = "block"
    timeminute.style.display = "block"
    firstquestion.style.display = "block"
    next.style.display = "block"

}

enterbttn.addEventListener('click', funenter)