let els = document.getElementsByClassName("pick");
let popup = document.getElementsByClassName("popup")[0]

// setTimeout(hidePopup, 2000)

console.log(els);

function hidePopup()
{
    let popup = document.getElementsByClassName("popup")[0]
    popup.classList.toggle('hidden')
}

// setInterval(getMessage,3000)