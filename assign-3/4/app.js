

const tog = document.getElementById('toggle')
const form = document.getElementById('form')

tog.addEventListener ('click', () => {
    if (form.style.display === 'none') {
        form.style.display = 'block'
    }
    else {
        form.style.display = 'none'
    }
})



