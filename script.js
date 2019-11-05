let state = {
    JAHU: 0,
    VOME: 0,
    LOHK: 0,
    XATA: 0,
    FASS: 0,
    RIS: 0,
    KHRA: 0,
    NETRA: 0,
}

function DOMLoadedHandler() {
    // get data from browser localStorage cache
    const data = localStorage.getItem('state')
    if (data) state = JSON.parse(data)

    // add click handler
    document.addEventListener('click', clickHandler)

    // set counters to state
    for (let name of Object.keys(state)) {
        document.getElementById(name).textContent = String(state[name])
    }
}

function clickHandler(event) {
    // get clicked button
    const button = event.target.closest('button')
    
    if (!button) return

    // get button text and counter element
    const command = button.textContent
    const counter = button.closest('.counter-container').children[0]

    // change state and update counter
    if (command == '-1') state[counter.id] -= 1
    if (command == '+1') state[counter.id] += 1
    if (command == '+3') state[counter.id] += 3
    
    counter.textContent = String(state[counter.id])

    // save new state to browser cache
    localStorage.setItem('state', JSON.stringify(state))
}

document.addEventListener('DOMContentLoaded', DOMLoadedHandler)