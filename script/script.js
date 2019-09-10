function handleLoad() {
    function handleScroll(event){
        var nav = document.querySelector('.mainheader');
        var height = nav.offsetHeight;
        if(window.scrollY > height){
            nav.classList.add('mainheader--scrolled');
        } else {
            console.log('mainheader--scrolled')
            nav.classList.remove>('mainheader--scrolled');
        }
        
    }
    window.addEventListener('scroll', handleScroll);
}
window.addEventListener('load', handleLoad);
