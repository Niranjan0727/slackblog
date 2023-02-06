
const menutoggle=document.querySelector('.menutoggle');
const navigation=document.querySelector('.navigation');

menutoggle.onclick=function(){
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');

}

window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);
})



function toggleMenu(){
    menutoggle.classList.remove('active');
    navigation.classList.remove('active');
}
