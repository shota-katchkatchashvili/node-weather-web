console.log('Client side js')


const form = document.querySelector('form')
const input = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = input.value

    message1.textContent = 'Loading...'
    message2.textContent = ''
    
    fetch('http://localhost:3000/weather?address=' + value).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message2.textContent = data.forecast
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})