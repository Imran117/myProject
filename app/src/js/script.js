let headerMenu = document.querySelector('.navbar__list'),
    burgerBtn = document.querySelector('.navbar__burger');
    
burgerBtn.addEventListener('click', e => {
    e.preventDefault()
    burgerBtn.classList.toggle('open')
    if (burgerBtn.classList.contains('open') ) {
        headerMenu.classList.add('active')
    }else {
        headerMenu.classList.remove('active')
    }
})

   
