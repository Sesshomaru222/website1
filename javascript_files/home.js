    let changingText = ["New Releases", "Top Reviews", "Exclusive Content", "Community Picks"];
    let index = 0;
    let textElement = document.querySelector("#changing-text h1");
    let isActive = false;


document.addEventListener("DOMContentLoaded", () => {
    const width = window.innerWidth;
    console.log(width);
    document.addEventListener("scroll", () => 
    {

        // console.log(window.scrollY);

        
        if (width > 1179 && window.scrollY > 420 && !isActive)
        {

            isActive = true;

            document.querySelector("#home-content div:nth-child(2) h1:first-child").classList.add("appear-delay-1");
            document.querySelector("#home-content div:nth-child(2) h1:nth-child(2)").classList.add("appear-delay-2");
            document.querySelector("#home-content div:nth-child(2) p").classList.add("appear-delay-3");
            document.querySelectorAll("#home-content div:nth-child(3) p").forEach(p => p.classList.add("appear-delay-4"));
            document.querySelector("#home-content div:nth-child(3) h1").classList.add("appear-delay-4");
            document.querySelector("#home-content div:nth-child(4)").classList.add("appear-delay-4");

            setInterval(() => 
            {
                if(changingText.length > 0)
                {
                    textElement.textContent = changingText[index];
                    index = (index + 1) % changingText.length;
                }

            }, 3000);
        

        
        }

    });

    if (width <= 1179 && !isActive)
    {
        isActive = true;

        document.querySelector("#home-content div:nth-child(2) h1:first-child").classList.add("appear-delay-1");
        document.querySelector("#home-content div:nth-child(2) h1:nth-child(2)").classList.add("appear-delay-2");
        document.querySelector("#home-content div:nth-child(2) p").classList.add("appear-delay-3");
        document.querySelectorAll("#home-content div:nth-child(3) p").forEach(p => p.classList.add("appear-delay-4"));
        document.querySelector("#home-content div:nth-child(3) h1").classList.add("appear-delay-4");
        document.querySelector("#home-content div:nth-child(4)").classList.add("appear-delay-4");

        setInterval(() => 
        {
            if(changingText.length > 0)
            {
                textElement.textContent = changingText[index];
                index = (index + 1) % changingText.length;
            }

        }, 3000);
        
    }

});