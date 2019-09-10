function handleLoad() {
    function handleScroll(event){
        var nav = document.querySelector('.mainheader');
        var navItem = document.querySelectorAll('.mainnav__item');
        var height = nav.offsetHeight;
        if(window.scrollY > height){
            nav.classList.add('mainheader--scrolled');
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.add('mainnav__item--scrolled');                
            }
        } else {
            console.log('mainheader--scrolled')
            nav.classList.remove>('mainheader--scrolled');
        }
        
    }
    window.addEventListener('scroll', handleScroll);

    }
window.addEventListener('load', handleLoad);

var btn = document.querySelector('.mainheader__btn');
var navi = document.querySelector('.mainheader__mainnav');

function handleClick(){
    navi.classList.toggle('mainheader__mainnav--active');
}

btn.addEventListener('click', handleClick);