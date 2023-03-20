const themeBtn = document.querySelector('.theme-btn')
const body = document.body

themeBtn.addEventListener('click',()=>{
    const i = document.createElement('i')
    themeBtn.classList.toggle('light')
    body.classList.toggle('light')
    themeBtn.innerHTML = ""
    if (body.classList.contains('light')) {
        i.classList.add('fa-regular')
        i.classList.add('fa-lightbulb')
    }
    else {
        i.classList.add('fa-solid')
        i.classList.add('fa-lightbulb')
    }
    themeBtn.appendChild(i)
})


const cards = document.querySelectorAll('.card')
cards.forEach(function(card) {
    card.addEventListener('click',function() {
        let index = this.getAttribute('data-value')
        localStorage.setItem('index',index)
    })
})
