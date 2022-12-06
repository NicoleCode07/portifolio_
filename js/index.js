window.addEventListener('scroll', function(){
   let cabecalho = document.querySelector('.cabecalho')
   cabecalho.classList.toggle('sticky', window.scrollY > 0)
})
