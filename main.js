var header = document.getElementById('header1');

    window.addEventListener('scroll', ()=> {
        var scroll = window.scrollY

        if(scroll>10){
            header.style.backgroundColor = 'rgba(0,0,0,0.5)'
        } else {
            header.style.backgroundColor = 'transparent'
        }
    })
  
    document.addEventListener('DOMContentLoaded', function () {
        const scrollButton = document.querySelector('.scroll-button');
        const section2 = document.querySelector('#section2');
    
        scrollButton.addEventListener('click', function (event) {
            event.preventDefault();
    
            const section2Offset = section2.offsetTop;
            window.scrollTo({
                top: section2Offset,
                behavior: 'smooth'
            });
        });
    });