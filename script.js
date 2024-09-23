
const bar= document.getElementById('bar');
const nav= document.querySelector('navbar');
if(bar){
bar.addEventListener('click',()=>{
    nav.classList.add('active');
    console.log('click')
});
   
}

