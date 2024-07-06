burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.navlist')
searchbox= document.querySelector('.searchbox')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navlist.classList.toggle('v-class-resp');
    searchbox.classList.toggle('v-class-resp');

})
