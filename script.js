let state = {
    JAHU: 0,
    VOME: 0,
    LOHK: 0,
    XATA: 0,
    FASS: 0,
    RIS: 0,
    KRAH: 0,
    NETRA: 0,
}

function clickHandler(event) {
    // console.log('click')

    const button = event.target.closest('button')
    
    if (!button) return

    const command = button.textContent
    const counter = button.closest('.counter-container').children[0]

    // console.log('click button', command)

    if (command == '-1') state[counter.id] -= 1
    if (command == '+1') state[counter.id] += 1
    if (command == '+3') state[counter.id] += 3
    
    counter.textContent = String(state[counter.id])
    localStorage.setItem('state', JSON.stringify(state))
}

document.addEventListener('DOMContentLoaded', () => {
    // console.log('DOM loaded')

    // get data from browser localStorage cache
    const data = localStorage.getItem('state')
    if (data) state = JSON.parse(data)

    // add click handler
    document.addEventListener('click', clickHandler)

    // set counters to state
    for (let name of Object.keys(state)) {
        document.getElementById(name).firstChild.textContent = String(state[name])
    }
})