let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count ++ 
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function clearAll() {
    saveEl.textContent = "Previous sets: "
    count = 0
    countEl.textContent = count
}

function decrement() {
    if (countEl.textContent > 0) {
        count --
        countEl.textContent = count
    } else {
        countEl.textContent = 0
    }

}