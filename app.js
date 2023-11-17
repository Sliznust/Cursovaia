const p = document.querySelectorAll('ul li');
for(let elem of p){
    elem.addEventListener('click',()=>{
        elem.textContent = 'Git'
    })
}