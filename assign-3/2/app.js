


function display() {
    
    const fullname = document.getElementById('fullname')
    const email = document.getElementById ('email')
    const web = document.getElementsByName('Web')
    const color = document.getElementsByName('Color')
    const branch = document.getElementById('Branch')
    const res = document.getElementById('res')

    let message = ''

    message += fullname.value + " ";
    message += email.value + " ";
    for (let i = 0; i < web.length; i++) {
        if (web[i].checked) {
            message += web[i].value + " "
        }
    }

    for (let i = 0; i < color.length; i++) {
        if (color[i].checked) {
            message += color[i].value + " "
        }
    }

    
    message += branch.value + " "

    res.innerHTML = message;

}






