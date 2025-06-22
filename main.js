let switcher = document.querySelector(".switch-container");
let greenSpan = switcher.querySelector(".switch-green");
let crapaud = switcher.querySelector(".crapaud");
let grenouille = switcher.querySelector(".grenouille");

switcher.addEventListener("click",(e)=>{
    e.preventDefault();
    
    greenSpan.classList.contains("checked") ? greenSpan.classList.remove("checked") : greenSpan.classList.add("checked");

    if(crapaud.classList.contains("white")){
        crapaud.classList.remove("white");
        grenouille.classList.add("white");
    }
    else{
            crapaud.classList.add("white");
            grenouille.classList.remove("white");
    }

})