const number = document.querySelectorAll('.number')
const center = document.querySelectorAll("line")
const prev = document.getElementById('prev')
const next = document.getElementById('next')


let actualActive =  1;

function update() {
    number.forEach((number, idx) =>{
        const actives = document.querySelectorAll(".active")

        if(idx < actualActive) {
            number.classList.add("active")
        }else{
            number.classList.remove("active")
        }

        line.style.width = (actives.length - 1) / (number.length  - 1) * 100 +"%"

        if(actualActive === 1){
            prev.disabled == true
        }else if(actualActive === number.length){
            next.disabled == true
        }else {
            prev.disabled == false
            next.disabled == false
        }
    })
}

prev.addEventListener("click", () =>{
    actualActive--

    if(actualActive < 1){
        actualActive = 1
    }

    update()
})

next.addEventListener("click", () =>{
    actualActive++

    if(actualActive > number.length){
        actualActive = number.length
    }

    update()
})