const nameInput = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const errorElements = document.getElementById('errors')
let result = document.getElementById('result')


form.addEventListener('submit', e => {
    e.preventDefault()

    if (nameInput.value === '' || nameInput.value === null) {
        errorElement.style.display = 'block'
    } else {
        errorElement.style.display = 'none'
    }

    if (password.value.length <= 6) {
        errorElements.style.display = 'block'
    } else {
        errorElements.style.display = 'none'
    }

    result.innerHTML = nameInput.value
})

