const themeBtn = document.querySelector('.theme-btn')

themeBtn.addEventListener('click',()=>{
    themeBtn.classList.toggle('light')
    document.body.classList.toggle('light')
})