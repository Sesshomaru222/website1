let curIndex = 0
let messages = ["Github is a repository for all your commits! With it, \
    you can store your git changes on the internet and share them with the world!",
    "Welcome to my humble abode",
    "Nothing is true, everything is permitted",
    "My favorite game franchise is probably Bethesda", 
    "Assassin's Creed is a close second"]
    let el = document.getElementById("messages")

    el.innerText = messages[curIndex]
    curIndex++

function getMessage()
{
    let el = document.getElementById("messages")

    el.innerText = messages[curIndex]

    curIndex++

    if(curIndex === messages.length)
    {
        curIndex = 0
    }
    
}



setInterval(getMessage,3000)