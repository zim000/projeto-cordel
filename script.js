const variavelEfeito = document.querySelectorAll('.escondido')



const myObserver = new IntersectionObserver((efeitos) => {
   efeitos.forEach( (efeito) =>{
    if (efeito.isIntersecting){
        efeito.target.classList.add('show') /*pra pegar o elemento utiliza-se o target */
    } else {
        efeito.target.classList.remove('show')
    }

   })
})

variavelEfeito.forEach((element)=> {
    myObserver.observe(element)
})




