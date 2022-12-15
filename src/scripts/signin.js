

const form = document.querySelector('#sign-in-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    window.location.href = 'src/pages/dashboard/index.html'
})
