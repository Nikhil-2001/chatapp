const socket = io()

socket.on('countUpdated', (count) => {
    console.log('Count Updated!', count)
})

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit('sendMessage', message)
})

document.querySelector('#send-location').addEventListener('click', () => {
    if(!navigator.geolocation)
        return alert('Geolocation is not supported by your browser')
    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocatoin', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        })
    })
})

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })