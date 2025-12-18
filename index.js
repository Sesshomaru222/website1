

// setTimeout(hidePopup, 2000)



function hidePopup()
{
    let popup = document.getElementsByClassName("popup")[0]
    popup.classList.toggle('hidden')
}

document.addEventListener('DOMContentLoaded', () => 
{
    let els = document.getElementsByClassName("pick");
    console.log(els);

    let popup = document.getElementsByClassName("popup")[0]

    let top = document.getElementsByClassName("top")[0]

    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 1800)
        {
            top.classList.remove('hidden')
        }
        else if(window.scrollY <= 1800)
        {
            top.classList.add('hidden')
        }

        console.log(scrollY)
    })

    top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    
})