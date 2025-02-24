const counters = document.querySelector(".inc_Dec h1")

function increment() {
    let count = Number(counters.innerHTML);
    counters.innerHTML = ++count
}

function decrement() {
    let count = Number(counters.innerHTML);
    if (count > 0) {
        counters.innerHTML = --count
    }
}

function reset() {
    counters.innerHTML = ("00")
}




