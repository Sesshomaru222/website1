

document.addEventListener('DOMContentLoaded', () => {

    let top = document.getElementsByClassName("top")[0];
    top.classList.add('hidden');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1800) {
            top.classList.remove('hidden');
        }
        else if (window.scrollY <= 1800) {
            top.classList.add('hidden');
        }

    });

    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

});