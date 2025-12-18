let curIndex = 0

function getMessage()
{
    let maxIndex = 2
    let el = document.getElementById("Javascript")

    if(curIndex === 0)
    {
        el.innerHTML = "<p>Welcome to my humble abode</p>"
    }
    else if(curIndex === 1)
    {
        el.innerHTML = "<p>This is cray cray</p>"
    }
    else if (curIndex == 2)
    {
        el.innerHTML = "<p>Nothing is true, everything is permitted</p>"
    }

    curIndex++

    if(curIndex > maxIndex)
    {
        curIndex = 0
    }
    
}



setInterval(getMessage,5000)