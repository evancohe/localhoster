const btn = document.querySelector('#bt')
// const field = document.querySelector('#port')

btn.addEventListener('click', event => {
    event.preventDefault
    const num = document.getElementById('port').value
    if (num.length !== 0) {
        console.log(`btn clicked ${num} `)
        window.open(`http://localhost:${num}`)
    }

})